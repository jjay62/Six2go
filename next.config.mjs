import createNextIntlPlugin from 'next-intl/plugin'

// Request config lives in the submodule app; required if anything loads this root config.
const withNextIntl = createNextIntlPlugin('./i18n/request.ts')

const nextConfig = {};

export default withNextIntl(nextConfig);