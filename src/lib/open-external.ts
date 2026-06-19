// Opens a URL in a way that survives sandboxed preview iframes.
// Tries a new tab first; falls back to top-level navigation if popups
// are blocked (which is what causes the "api.whatsapp.com refused to
// connect" error inside the Lovable preview iframe).
export function openExternal(url: string) {
  try {
    const w = window.open(url, "_blank", "noopener,noreferrer");
    if (w) return;
  } catch {
    // ignore and fall through
  }
  try {
    if (window.top && window.top !== window.self) {
      (window.top as Window).location.href = url;
      return;
    }
  } catch {
    // cross-origin top — fall through
  }
  window.location.href = url;
}

export function handleExternalClick(url: string) {
  return (e: React.MouseEvent) => {
    e.preventDefault();
    openExternal(url);
  };
}
