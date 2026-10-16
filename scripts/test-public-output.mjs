// Inspect the built release artifact, never the source alone.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const dist=path.join(root,'dist');
const files=fs.readdirSync(dist,{recursive:true}).filter(f=>fs.statSync(path.join(dist,f)).isFile()).map(f=>f.replaceAll('\\','/'));
const fixed=['index.html','404.html','_headers','_redirects','favicon.ico','logo-candlestick.png','tradeboard_icon_final.png','android-chrome-192x192.png','android-chrome-512x512.png','features/index.html','pricing/index.html','waitlist/index.html','legal-status/index.html'];
const generated=files.filter(f=>/^assets\/index-[\w-]+\.(js|css)$/.test(f));
assert.equal(generated.length,2);
assert.deepEqual([...files].sort(),[...fixed,...generated].sort());
const js=fs.readFileSync(path.join(dist,generated.find(f=>f.endsWith('.js'))),'utf8');
for(const forbidden of ['tb_preview_unlocked','Unlock Preview','PreviewGate','runable','api.runable','INTERNAL_TEST_SENTINEL','Legal review draft','hero-dashboard.png']) assert(!js.includes(forbidden),`Excluded content found: ${forbidden}`);
assert(fs.existsSync(path.join(root,'src/web/pages/legal.tsx')),'Preserve draft legal source');
assert(fs.existsSync(path.join(root,'src/web/app.tsx')),'Preserve local review source');
assert(js.includes('successfully paid Founding Members'));
assert(js.includes('no-referrer'));
const forms=[...js.matchAll(/https:\/\/forms\.zohopublic\.com\/[^"\s]+/g)].map(m=>m[0]);
assert.equal(new Set(forms).size,1);
for(const route of ['','features/','pricing/','waitlist/','legal-status/']) {
 const html=fs.readFileSync(path.join(dist,route,'index.html'),'utf8');
 assert(html.includes(`href="https://trade-board.net/${route}"`),`Canonical ${route}`);
 assert(html.includes('noindex, nofollow'));
 assert(html.includes('<noscript>'));
 for(const [,asset] of html.matchAll(/(?:src|href)="(\/[^"#]+)"/g)) assert(fs.existsSync(path.join(dist,asset)),`Missing asset ${asset}`);
}
assert(!fs.readFileSync(path.join(dist,'_redirects'),'utf8').includes('/* /index'));
assert(fs.readFileSync(path.join(dist,'_headers'),'utf8').includes('X-Robots-Tag: noindex, nofollow'));
console.log(JSON.stringify({status:'PASS',files:files.length,checks:['exact output allowlist','private preview and draft exclusion','single Zoho destination','canonical route documents','noindex and noscript','asset links','no catch-all redirect']},null,2));
