import Link from 'next/link';
import { Heading } from '@/components/Heading';

export default function NotFound() {
  return (
    <>
      <Heading>Página não encontrada</Heading>
      <Link href="/">Voltar para a home</Link>
    </>
  );
}
