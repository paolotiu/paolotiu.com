import React, { useRef, useState } from 'react';

const EMAIL = 'paolotiu17@gmail.com';
export const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  return (
    <section className="section mx-auto relative z-10">
      <div className="flex items-center gap-2">
        <h2 className="font-extralight text-xl italic">
          <span className="line-through">Call</span> Write me{' '}
        </h2>
        <div className="w-3 bg-accent h-0.5" />
      </div>
      <div className="mt-4">
        <button
          onClick={() => {
            navigator.clipboard.writeText(EMAIL);

            setCopied(true);

            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current);
            }

            timeoutRef.current = setTimeout(() => {
              setCopied(false);
            }, 2000);
          }}
        >
          <div className="flex items-center gap-2">
            <h4 className="font-extralight text-xl hover:underline cursor-pointer">{EMAIL}</h4>
            {copied ? (
              <span className="text-black-muted dark:text-white-muted text-base">
                {' - Copied :) '}
              </span>
            ) : (
              ''
            )}
          </div>
        </button>
      </div>
    </section>
  );
};
