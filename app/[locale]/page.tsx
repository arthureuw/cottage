'use client';
import Hero from '@/app/[locale]/hero';
import Starred from '@/app/[locale]/starred';

export default function Home() {
  return (
    <>
      <Hero />
      <Starred />
    </>
  );
}
