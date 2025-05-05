import '../styles/globals.css'; // Estilos globais
import '../styles/modal.css'; // Estilos do modal
import '../styles/footer.css'; // Estilos do footer
import '../styles/images.css'; // Estilos das imagens
import '../styles/navbar.css'; // Estilos da navba
import '../styles/social-icons.css'; // Estilos dos ícones sociais
import '../styles/carousel.css';// Estilos do carrossel
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import WhatsAppButton from '../components/WhatsAppButton';
import ClientWrapper from '../components/ClientWrapper'; // Confirme que esse arquivo existe

import BootstrapClient from '../components/BootStrapClient'; // Importa diretamente o BootstrapClient

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vivian Nunes Consultoria',
  description: 'Consultoria especializada em desenvolvimento pessoal e profissional',
  keywords: ['consultoria', 'desenvolvimento pessoal', 'coaching', 'mentoria'],
  authors: [{ name: 'Vivian Nunes' }],
  creator: 'Vivian Nunes',
  publisher: 'Vivian Nunes Consultoria',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">

      <body className={inter.className}>
        <BootstrapClient /> {/* Carrega o Bootstrap apenas no cliente */}
        <ClientWrapper>
          {children}
          <WhatsAppButton />
        </ClientWrapper>
      </body>
    </html>
  );
}