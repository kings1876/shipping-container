export function normalizePath(rawPath: string): string {
  if (!rawPath || rawPath === '/') return '/';
  const cleaned = rawPath.split('?')[0].split('#')[0].toLowerCase().trim();
  if (cleaned === '' || cleaned === '/') return '/';
  const withLeading = cleaned.startsWith('/') ? cleaned : `/${cleaned}`;
  return withLeading.endsWith('/') ? withLeading : `${withLeading}/`;
}

export function navigateTo(path: string): void {
  const normalized = normalizePath(path);
  if (window.location.pathname !== normalized) {
    window.history.pushState({}, '', normalized);
  }
  window.dispatchEvent(new PopStateEvent('popstate'));
  window.scrollTo({ top: 0, behavior: 'auto' });
}
