import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageViewTracker from '@/components/PageViewTracker'

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <PageViewTracker />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
