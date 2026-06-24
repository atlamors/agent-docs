import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './global.css'

export const metadata = {
  title: {
    default: 'Agent Docs',
    template: '%s | Agent Docs'
  },
  description:
    'Documentation for Hermes-based agent architecture, deployments, and operations.'
}

const navbar = (
  <Navbar
    logo={
      <span style={{ fontWeight: 700, letterSpacing: 0 }}>
        Agent Docs
      </span>
    }
  >
    <span />
  </Navbar>
)

const footer = (
  <Footer>
    <span>
      Hermes agent docs: manual installs now, SaaS onboarding later.
    </span>
  </Footer>
)

export default async function RootLayout({ children }) {
  const pageMap = await getPageMap()

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          pageMap={pageMap}
          footer={footer}
          docsRepositoryBase="https://example.com"
          editLink="Edit this page"
          feedback={{ content: 'Send feedback' }}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          toc={{ backToTop: true }}
        >
          {children ?? <></>}
        </Layout>
      </body>
    </html>
  )
}
