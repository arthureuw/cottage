import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useTranslations } from 'next-intl';

const Hero = () => {
  const t = useTranslations('hero');

  return (
    <div className="h-svh w-svw">
      <Image
        src="https://8qtkaexgrtfjkrit.public.blob.vercel-storage.com/main/hero-winter-C8iQe8jwDJazZvtwxffNOYv7092PV7.webp"
        alt="Mountain cottage"
        className="object-cover brightness-75"
        fill
        priority
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1.25, delay: 0.25 }}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        className="absolute text-center text-white top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4 w-4/5 md:w-3/5"
      >
        <h1>{t('title')}</h1>
        <h3 className="uppercase text-lg font-light">{t('subtitle')}</h3>
      </motion.div>

      <div className="absolute bottom-[5%] left-1/2 -translate-y-2/4 -translate-x-2/4">
        <button className="button">
          <ChevronDown width={28} height={28} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
