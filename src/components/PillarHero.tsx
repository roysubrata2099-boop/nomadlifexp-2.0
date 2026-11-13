import Image from "next/image";

type PillarHeroProps = {
  image: string;
  imageWidth: number;
  imageHeight: number;
  title: string;
  subtitle?: string;
};

export default function PillarHero({
  image,
  imageWidth,
  imageHeight,
  title,
  subtitle,
}: PillarHeroProps) {
  return (
    <section className="relative isolate flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-black text-white">

      {/* Full-screen blurred background */}
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        quality={90}
        className="scale-110 object-cover object-center opacity-40 blur-2xl"
      />

      {/* Main image - preserve original artwork */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src={image}
          alt=""
          width={imageWidth}
          height={imageHeight}
          priority
          sizes="(max-width: 768px) 100vw, 85vw"
          quality={90}
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Contrast overlays */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-black/30"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/80"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"
      />

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-6 py-32 text-center">

        <p className="mb-6 font-mono text-xs font-semibold uppercase tracking-[0.4em] text-cyan-300">
          NOMADLIFEXP / HUMAN EVOLUTION SYSTEM
        </p>

        <h1 className="max-w-6xl text-5xl font-black uppercase leading-[0.98] tracking-tight sm:text-6xl md:text-8xl">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/90 md:text-xl">
            {subtitle}
          </p>
        )}

      </div>
    </section>
  );
}
