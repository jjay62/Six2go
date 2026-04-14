export const baseUrl = process.env.E2E_BASE_URL ?? 'http://localhost:3000'
export const headless =
  process.env.E2E_HEADLESS === '1' || process.env.E2E_HEADLESS === 'true'
