'use client';
import { Card, Carousel } from '@/components/cards-carousel';
import Image from 'next/image';

const data = [
  {
    src: 'https://8qtkaexgrtfjkrit.public.blob.vercel-storage.com/main/starred/large-view.webp',
    title: 'Cottage',
    category: 'Test',
    content: (
      <Image
        fill
        alt=""
        src="https://8qtkaexgrtfjkrit.public.blob.vercel-storage.com/main/starred/large-view.webp"
      />
    ),
  },
  {
    src: 'https://8qtkaexgrtfjkrit.public.blob.vercel-storage.com/main/starred/balcony.webp',
    title: 'Balcony',
    category: 'Test',
    content: (
      <Image
        fill
        alt=""
        src="https://8qtkaexgrtfjkrit.public.blob.vercel-storage.com/main/starred/balcony.webp"
      />
    ),
  },
  {
    src: 'https://8qtkaexgrtfjkrit.public.blob.vercel-storage.com/main/starred/fire-place.webp',
    title: 'Fire place',
    category: 'Test',
    content: (
      <Image
        fill
        alt=""
        src="https://8qtkaexgrtfjkrit.public.blob.vercel-storage.com/main/starred/fire-place.webp"
      />
    ),
  },
  {
    src: 'https://8qtkaexgrtfjkrit.public.blob.vercel-storage.com/main/starred/kitchen.webp',
    title: 'Kitchen',
    category: 'Test',
    content: (
      <Image
        fill
        alt=""
        src="https://8qtkaexgrtfjkrit.public.blob.vercel-storage.com/main/starred/kitchen.webp"
      />
    ),
  },
  {
    src: 'https://8qtkaexgrtfjkrit.public.blob.vercel-storage.com/main/starred/bedroom.webp',
    title: 'Bedroom',
    category: 'Test',
    content: (
      <Image
        fill
        alt=""
        src="https://8qtkaexgrtfjkrit.public.blob.vercel-storage.com/main/starred/bedroom.webp"
      />
    ),
  },
  {
    src: 'https://8qtkaexgrtfjkrit.public.blob.vercel-storage.com/main/starred/dining-room.webp',
    title: 'Dining room',
    category: 'Test',
    content: (
      <Image
        fill
        alt=""
        src="https://8qtkaexgrtfjkrit.public.blob.vercel-storage.com/main/starred/dining-room.webp"
      />
    ),
  },
];

const Starred = () => {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={false} />
  ));

  return (
    <div className="h-[55vh] md:h-[80vh] overflow-x-hidden text-black text-center">
      <h1>Notre selection</h1>
      <Carousel items={cards} />
      <p>Chalet Squaw</p>
    </div>
  );
};

export default Starred;
