import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { BRAND_FULL, TAGLINE } from '@/lib/constants'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: `${BRAND_FULL} — ${TAGLINE}`,
    template: `%s — ${BRAND_FULL}`,
  },
  description:
    'ALVEX SARL, votre spécialiste des véhicules d’occasion certifiés à Abidjan. Découvrez notre stock, réservez un essai et faites estimer la reprise de votre véhicule.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen bg-ink">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
