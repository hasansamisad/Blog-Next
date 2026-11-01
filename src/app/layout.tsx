import type { Metadata } from 'next';
import StyledComponentsRegistry from '@/lib/registry';
import { Header } from '@/components/Header';
import { MainContainer } from '@/components/MainContainer';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Meu Blog - Next.js',
  description: 'Criado com Next.js, Strapi v5 e Styled Components',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <StyledComponentsRegistry>
          <Header />
          <MainContainer>{children}</MainContainer>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
