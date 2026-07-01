const PREVIEW_KEY = "tb_preview_unlocked";
const PREVIEW_PASSWORD = "CajunAI2026!";

export function isPreviewUnlocked(): boolean {
  return localStorage.getItem(PREVIEW_KEY) === "true";
}

export function unlockPreview(password: string): boolean {
  if (password === PREVIEW_PASSWORD) {
    localStorage.setItem(PREVIEW_KEY, "true");
    return true;
  }
  return false;
}

export function lockPreview(): void {
  localStorage.removeItem(PREVIEW_KEY);
}
