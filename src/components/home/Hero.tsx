import Link from "next/link";
import {
  ArrowRight,
  Award,
  ChevronDown,
  Leaf,
  Truck,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[760px] overflow-hidden bg-[#e9dfc2] pt-[105px] sm:min-h-[780px] lg:min-h-[820px]">

      {/* =========================================================
          BACKGROUND IMAGE
      ========================================================= */}

      <div className="absolute inset-0">
        <img
          src="/images/hero/rice-hero.jpg"
          alt="Mahadal rice mill and paddy fields"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />

        {/* Main warm overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#fff8e9]/95 via-[#fff8e9]/75 to-transparent" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-[#f5ecd5] via-[#f5ecd5]/50 to-transparent" />

        {/* Right side subtle green tint */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#194d17]/10" />
      </div>

      {/* =========================================================
          HERO CONTENT
      ========================================================= */}

      <div className="relative z-10 mx-auto flex min-h-[655px] max-w-[1536px] items-center px-6 pb-[135px] sm:px-10 lg:px-[72px]">

        <div className="max-w-[700px]">

          {/* Eyebrow */}

          <div className="hero-fade-in mb-4 flex items-center gap-3">
            <span className="h-px w-12 bg-[#b48b2b]" />

            <span className="font-serif text-[22px] italic text-[#285c24] sm:text-[27px]">
              From Our Fields
            </span>
          </div>

          {/* Main heading */}

          <h1
            className="
              hero-fade-up
              max-w-[720px]
              font-serif
              text-[55px]
              font-bold
              leading-[0.94]
              tracking-[-0.045em]
              text-[#164318]
              sm:text-[68px]
              lg:text-[82px]
              xl:text-[88px]
            "
          >
            To Your Table
          </h1>

          {/* Description */}

          <p
            className="
              hero-fade-up
              hero-delay-1
              mt-6
              max-w-[560px]
              text-[15px]
              leading-7
              text-[#303730]
              sm:text-[16px]
            "
          >
            Premium quality rice, carefully processed with modern
            technology and delivered with purity, consistency and trust.
          </p>

          {/* Buttons */}

          <div className="hero-fade-up hero-delay-2 mt-8 flex flex-wrap gap-3">

            <Link
              href="/products"
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-xl
                bg-[#205719]
                px-7
                py-3.5
                text-[13px]
                font-semibold
                text-white
                shadow-[0_8px_22px_rgba(32,87,25,0.20)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#174719]
              "
            >
              Our Products

              <ArrowRight
                size={16}
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
                gap-3
                rounded-xl
                border
                border-[#285c24]
                bg-white/25
                px-7
                py-3.5
                text-[13px]
                font-semibold
                text-[#285c24]
                backdrop-blur-sm
                transition-all
                duration-300
                hover:bg-white/75
              "
            >
              Explore More

              <ArrowRight
                size={16}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

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
          w-[calc(100%-32px)]
          max-w-[1380px]
          -translate-x-1/2
          rounded-t-[3px]
          border
          border-[#e3d8b8]
          bg-[#fbf3db]/95
          shadow-[0_-5px_25px_rgba(50,50,20,0.07)]
          backdrop-blur-md
        "
      >
        <div className="grid grid-cols-1 divide-y divide-[#d8ccb0] sm:grid-cols-3 sm:divide-x sm:divide-y-0">

          {/* Natural */}

          <div className="flex items-center gap-4 px-6 py-5 sm:px-7">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#285c24]/40">
              <Leaf
                size={20}
                strokeWidth={1.4}
                className="text-[#285c24]"
              />
            </div>

            <div>
              <h3 className="text-[12px] font-bold text-[#214d20]">
                100% Natural
              </h3>

              <p className="mt-1 text-[10px] text-[#67695f]">
                Pure & Chemical Free
              </p>
            </div>

          </div>

          {/* Quality */}

          <div className="flex items-center gap-4 px-6 py-5 sm:px-7">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#285c24]/40">
              <Award
                size={20}
                strokeWidth={1.4}
                className="text-[#285c24]"
              />
            </div>

            <div>
              <h3 className="text-[12px] font-bold text-[#214d20]">
                Premium Quality
              </h3>

              <p className="mt-1 text-[10px] text-[#67695f]">
                Carefully Processed
              </p>
            </div>

          </div>

          {/* Delivery */}

          <div className="flex items-center gap-4 px-6 py-5 sm:px-7">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#285c24]/40">
              <Truck
                size={20}
                strokeWidth={1.4}
                className="text-[#285c24]"
              />
            </div>

            <div>
              <h3 className="text-[12px] font-bold text-[#214d20]">
                Timely Delivery
              </h3>

              <p className="mt-1 text-[10px] text-[#67695f]">
                Fast & Reliable
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* =========================================================
          SCROLL INDICATOR
      ========================================================= */}

      

      {/* =========================================================
          BOTTOM LINE
      ========================================================= */}

      <div className="absolute bottom-0 left-0 right-0 z-30 h-[3px] bg-[#285c24]" />
    </section>
  );
}