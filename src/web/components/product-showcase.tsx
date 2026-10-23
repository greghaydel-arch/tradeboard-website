// Add only owner-approved captures of the verified application. Never use concept
// art here. Record release SHA, synthetic/redacted data and approval in the report.
type Capture = { title: string; description: string; image?: { src: string; alt: string } };
type Tutorial = { title: string; videoId?: string };

const captures: Capture[] = [
  { title: "Main dashboard", description: "An approved view of the actual invited-release dashboard." },
  { title: "Trade analytics", description: "A demonstration limited to validated historical analytics." },
  { title: "Trading journal", description: "A walkthrough of private, text-based historical notes." },
  { title: "Historical performance", description: "Review of completed trades using synthetic or redacted data." },
  { title: "Trade import", description: "The validated Webull CSV preview and confirmation workflow for USD equity fills." },
];

const tutorials: Tutorial[] = [
  { title: "What is TradeBoard?" },
  { title: "Getting started" },
  { title: "Importing trade history" },
  { title: "Understanding the analytics dashboard" },
  { title: "Using the trading journal" },
  { title: "Reviewing historical trading performance" },
];

export function ProductShowcase() {
  return (
    <section id="product-showcase" aria-labelledby="showcase-title" className="max-w-6xl mx-auto px-5 py-16">
      <h2 id="showcase-title" className="font-display font-bold text-3xl">See the real TradeBoard</h2>
      <p className="text-text-muted mt-4 max-w-2xl">Application screenshots and recordings will be added after final UI approval. No product recordings are available here yet. Other illustrations on this site are concepts, not application captures.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
        {captures.map((capture) => (
          <figure key={capture.title} className="bg-bg-card border border-tb-border rounded-xl p-5">
            {capture.image ? <img src={capture.image.src} alt={capture.image.alt} loading="lazy" className="w-full rounded-lg mb-4" /> : <p className="text-xs text-cyan mb-4">Capture pending UI approval</p>}
            <figcaption><h3 className="font-semibold">{capture.title}</h3><p className="text-sm text-text-muted mt-2">{capture.description}</p></figcaption>
          </figure>
        ))}
        <article className="bg-bg-card border border-tb-border rounded-xl p-5">
          <p className="text-xs text-cyan mb-4">Recording planned</p>
          <h3 className="font-semibold">Primary product demonstration</h3>
          <p className="text-sm text-text-muted mt-2">A short tour of the actual application, from historical import to journal review. Recording awaits approved UI and demo data.</p>
        </article>
      </div>
      <h2 id="tutorials" className="font-display font-bold text-2xl mt-14">TradeBoard by Cajun AI — planned tutorials</h2>
      <p className="text-text-muted mt-3">These six guides will belong to the single Cajun AI channel. Channel identity and video IDs remain unverified.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
        {tutorials.map((tutorial) => (
          <article key={tutorial.title} className="bg-bg-card border border-tb-border rounded-xl p-5">
            <h3 className="font-semibold">{tutorial.title}</h3>
            {tutorial.videoId ? <iframe title={tutorial.title} src={`https://www.youtube-nocookie.com/embed/${tutorial.videoId}`} loading="lazy" className="w-full aspect-video mt-4 border-0" allowFullScreen /> : <p className="text-sm text-text-muted mt-3">Planned — no video published here.</p>}
          </article>
        ))}
      </div>
      <a href="https://cajun-ai.com/pages/youtube.html" className="inline-block text-cyan underline mt-6">Visit the Cajun AI tutorial hub</a>
    </section>
  );
}
