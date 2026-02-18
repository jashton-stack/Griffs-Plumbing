/* ═══════════════════════════════════════════════════════════════
   utm.ts — Capture & retrieve UTM parameters from the URL.
   Stored in sessionStorage so they persist across page
   navigation but not across sessions.
   ═══════════════════════════════════════════════════════════════ */

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const;
const STORAGE_KEY = 'griffs_utm';

export interface UtmParams {
  utm_source?:   string;
  utm_medium?:   string;
  utm_campaign?: string;
  utm_term?:     string;
  utm_content?:  string;
  landing_page?: string;
  referrer?:     string;
}

/** Call once on page load — grabs UTM params from the URL and stashes them. */
export function captureUtmParams(): void {
  try {
    const url = new URL(window.location.href);
    const params: UtmParams = {};
    let hasUtm = false;

    for (const key of UTM_KEYS) {
      const val = url.searchParams.get(key);
      if (val) {
        params[key] = val;
        hasUtm = true;
      }
    }

    // Always capture landing page + referrer
    params.landing_page = window.location.pathname + window.location.search;
    params.referrer = document.referrer || '(direct)';

    if (hasUtm || !sessionStorage.getItem(STORAGE_KEY)) {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(params));
    }
  } catch {
    // sessionStorage blocked — graceful fail
  }
}

/** Retrieve stored UTM params (returns empty object if none). */
export function getUtmParams(): UtmParams {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}
