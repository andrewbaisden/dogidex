const rawBase = process.env.REACT_APP_API_URL || 'http://localhost:8000';

/** API origin with no trailing slash (avoids `//online/dogs` → 308 redirects). */
export const API_BASE = rawBase.replace(/\/+$/, '');
