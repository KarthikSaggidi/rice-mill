import Link from "next/link";
import {
  ArrowRight,
  Award,
  Leaf,
  Truck,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#eee6cf] pt-[96px]">

      {/* =========================================================
          HERO BACKGROUND
      ========================================================= */}

      <div className="absolute inset-0">
        <img
          src="/images/hero/rice-hero.jpg"
          alt="Mahadal rice mill and paddy fields"
          className="h-full w-full object-cover object-center"
          fetchPriority="high"
        />

        {/* Left readability overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#fff8e9]/95 via-[#fff8e9]/78 to-[#fff8e9]/10" />

        {/* Bottom blend */}
        <div className="absolute inset-x-0 bottom-0 h-[35%] bg-gradient-to-t from-[#f5ecd5] via-[#f5ecd5]/65 to-transparent" />

        {/* Subtle overall tint */}
        <div className="absolute inset-0 bg-[#285c24]/[0.025]" />
      </div>

      {/* =========================================================
          HERO CONTENT
      ========================================================= */}

      <div className="relative z-10 mx-auto flex min-h-[610px] max-w-[1400px] items-center px-5 pb-[125px] sm:px-8 lg:min-h-[650px] lg:px-12">

        <div className="max-w-[650px]">

          {/* Eyebrow */}

          <div className="hero-fade-in mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-[#b48b2b] sm:w-12" />

            <span className="font-serif text-[19px] italic text-[#285c24] sm:text-[23px]">
              From Our Fields
            </span>
          </div>

          {/* Heading */}

          <h1
            className="
              hero-fade-up
              max-w-[650px]
              font-serif
              text-[48px]
              font-bold
              leading-[0.96]
              tracking-[-0.045em]
              text-[#164318]
              sm:text-[60px]
              lg:text-[72px]
              xl:text-[78px]
            "
          >
            Quality Grains.
            <span className="block text-[#285c24]">
              Trusted for Generations.
            </span>
          </h1>

          {/* Description */}

          <p
            className="
              hero-fade-up
              hero-delay-1
              mt-5
              max-w-[540px]
              text-[14px]
              leading-6
              text-[#343a33]
              sm:text-[15px]
              sm:leading-7
            "
          >
            Carefully selected pulses, professionally processed and
            packed with care to deliver consistent quality, natural
            goodness and dependable value to every customer.
          </p>

          {/* Buttons */}

          <div className="hero-fade-up hero-delay-2 mt-7 flex flex-wrap gap-3">

            <Link
              href="/products"
              className="
                group
                inline-flex
                items-center
                gap-2.5
                rounded-xl
                bg-[#285c24]
                px-6
                py-3.5
                text-[12px]
                font-semibold
                text-white
                shadow-[0_8px_22px_rgba(40,92,36,0.20)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#1b4a17]
                hover:shadow-[0_12px_28px_rgba(40,92,36,0.25)]
              "
            >
              Explore Products

              <ArrowRight
                size={15}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/about"
              className="
                group
                inline-flex
                items-center
                gap-2.5
                rounded-xl
                border
                border-[#285c24]/70
                bg-white/30
                px-6
                py-3.5
                text-[12px]
                font-semibold
                text-[#285c24]
                backdrop-blur-sm
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-white/80
              "
            >
              Our Story

              <ArrowRight
                size={15}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

          </div>

          {/* Small trust statement */}

          <div className="hero-fade-up hero-delay-2 mt-6 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#b18b2c]" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#5d6259]">
              Quality • Care • Consistency
            </span>
          </div>

        </div>
      </div>

      {/* =========================================================
          QUALITY STRIP
      ========================================================= */}

      <div
        className="
          hero-strip
          absolute
          bottom-0
          left-1/2
          z-20
          w-[calc(100%-24px)]
          max-w-[1240px]
          -translate-x-1/2
          overflow-hidden
          rounded-t-[4px]
          border
          border-[#e1d6b7]
          bg-[#fbf3db]/95
          shadow-[0_-5px_25px_rgba(50,50,20,0.07)]
          backdrop-blur-md
        "
      >
        <div className="grid grid-cols-1 divide-y divide-[#d8ccb0] sm:grid-cols-3 sm:divide-x sm:divide-y-0">

          {/* Quality */}

          <div className="flex items-center gap-3.5 px-5 py-4 sm:px-6">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#285c24]/35 bg-[#285c24]/[0.035]">
              <Leaf
                size={18}
                strokeWidth={1.4}
                className="text-[#285c24]"
              />
            </div>

            <div>
              <h3 className="text-[11px] font-bold text-[#214d20]">
                Quality Sourcing
              </h3>

              <p className="mt-0.5 text-[9px] text-[#67695f]">
                Carefully selected grains
              </p>
            </div>

          </div>

          {/* Processing */}

          <div className="flex items-center gap-3.5 px-5 py-4 sm:px-6">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#285c24]/35 bg-[#285c24]/[0.035]">
              <Award
                size={18}
                strokeWidth={1.4}
                className="text-[#285c24]"
              />
            </div>

            <div>
              <h3 className="text-[11px] font-bold text-[#214d20]">
                Quality Processing
              </h3>

              <p className="mt-0.5 text-[9px] text-[#67695f]">
                Clean & carefully processed
              </p>
            </div>

          </div>

          {/* Supply */}

          <div className="flex items-center gap-3.5 px-5 py-4 sm:px-6">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#285c24]/35 bg-[#285c24]/[0.035]">
              <Truck
                size={18}
                strokeWidth={1.4}
                className="text-[#285c24]"
              />
            </div>

            <div>
              <h3 className="text-[11px] font-bold text-[#214d20]">
                Reliable Supply
              </h3>

              <p className="mt-0.5 text-[9px] text-[#67695f]">
                Dependable order fulfilment
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* =========================================================
          BOTTOM BRAND LINE
      ========================================================= */}

      <div className="absolute bottom-0 left-0 right-0 z-30 h-[3px] bg-[#285c24]" />

    </section>
  );
}