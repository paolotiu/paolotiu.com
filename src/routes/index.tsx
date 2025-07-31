import { createFileRoute, useRouter } from '@tanstack/react-router';
import INGLogo from '~/assets/ing-logo.png';
import ADMULogo from '~/assets/admu-logo.png';
import { motion, frame, useSpring } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { client } from 'process';
export const Route = createFileRoute('/')({
  component: Home,
});

const AnchorWithImage = ({
  href,
  imageSrc,
  altText = '',
  children,
  size: finalSize = 100,
}: {
  href: string;
  imageSrc: string;
  altText?: string;
  children?: React.ReactNode;
  size?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useSpring(0);
  const y = useSpring(0);
  const [size, setSize] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = element.getBoundingClientRect();

      const middleX = rect.left + rect.width / 2;
      const middleY = rect.top + rect.height / 2;

      const xPos = (event.clientX - middleX) / 2;
      const yPos = (event.clientY - middleY) / 2;

      x.set(xPos);
      y.set(yPos);
    };

    const handleMouseEnter = () => {
      setSize(finalSize);
      x.set(0);
      y.set(0);
    };

    const handleMouseLeave = () => {
      setSize(0);
      x.set(0);
      y.set(0);
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    // Hitbox
    <motion.div
      className="inline-block relative p-4 -m-4 group cursor-pointer"
      onClick={(e) => {
        e.preventDefault();
        window.open(href, '_blank', 'noopener,noreferrer');
      }}
      ref={ref}
    >
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="underline group-hover:text-accent transition-colors duration-200 italic"
      >
        {children}
      </motion.a>
      <motion.div
        className="inline-block w-0 h-0 absolute left-1/2 -translate-1/2 transition-all duration-200 pointer-events-none overflow-hidden bg-white dark:bg-black z-10 rounded border shadow-md"
        initial={{
          top: finalSize / 2 + 'px',
          opacity: 0,
          borderWidth: 0,
        }}
        animate={{
          width: size,
          height: size,
          padding: (size / finalSize) * 16 + 'px',
          top: `calc(100% + ${size / 2}px)`,
          opacity: 1,
          borderWidth: size > 0 ? 1 : 0,
        }}
        style={{
          x: x,
          y: y,
        }}
        transition={{ duration: 0.2, type: 'tween' }}
      >
        <motion.img
          src={imageSrc}
          alt={altText}
          className="max-w-none w-full h-full object-contain"
        />
      </motion.div>
    </motion.div>
  );
};
function Home() {
  return (
    <div className="pt-20">
      <section className="px-8 max-w-5xl mx-auto">
        <h1 className="font-light text-5xl">
          Paolo Tiu<span className="text-accent">.</span>{' '}
        </h1>

        <h2 className="font-extralight text-2xl text-black-soft dark:text-white-soft">
          <span>Graduate Engineer at </span>
          <AnchorWithImage href="http://ing.com/" imageSrc={INGLogo} size={150} altText="ING Logo">
            ING
          </AnchorWithImage>
          <span>
            , and Part-Time Lecturer at{' '}
            <AnchorWithImage
              href="https://www.ateneo.edu/"
              imageSrc={ADMULogo}
              altText="Ateneo de Manila University Logo"
              size={150}
            >
              The Ateneo de Manila University
            </AnchorWithImage>
            .
          </span>
        </h2>
        <div className="inline mt-14 font-body font-light"></div>
      </section>
    </div>
  );
}
