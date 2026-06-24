import nextra from 'nextra'

const withNextra = nextra({})

export default withNextra({
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/deployment-strategies/cloud-lite',
        destination: '/deployment-strategies/managed-cloud-runtime',
        permanent: false
      },
      {
        source: '/deployment-strategies/dedicated-cloud-tenant',
        destination: '/deployment-strategies/isolated-cloud-tenant',
        permanent: false
      }
    ]
  }
})
