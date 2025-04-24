import './globals.css'
import './styles/social-icons.css'
import './styles/carousel.css'
import './styles/navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import WhatsAppButton from '../components/WhatsAppButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vivian Nunes Consultoria',
  description: 'Consultoria especializada em desenvolvimento pessoal e profissional',
  keywords: ['consultoria', 'desenvolvimento pessoal', 'coaching', 'mentoria'],
  authors: [{ name: 'Vivian Nunes' }],
  creator: 'Vivian Nunes',
  publisher: 'Vivian Nunes Consultoria',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" dir="ltr">
      <body className={inter.className}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
} 