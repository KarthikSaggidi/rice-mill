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

      <div className="pointer-events-none absolute inset-0">
        <img
          src="/images/hero/rice-hero.jpg"
          alt="Mahadal processing facility and agricultural fields"
          className="h-full w-full object-cover object-center"
          fetchPriority="high"
        />

        {/* Left readability overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#fff8e9]/95 via-[#fff8e9]/78 to-[#fff8e9]/10" />

        {/* Bottom blend */}
        <div className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-[#f5ecd5] via-[#f5ecd5]/65 to-transparent" />

        {/* Subtle overall tint */}
        <div className="absolute inset-0 bg-[#285c24]/[0.025]" />
      </div>

      {/* =========================================================
          HERO CONTENT
      ========================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1400px]
          px-5
          pt-7
          pb-8
          sm:px-8
          sm:pt-10
          sm:pb-10
          lg:flex
          lg:min-h-[560px]
          lg:items-center
          lg:px-12
          lg:pt-8
          lg:pb-[135px]
        "
      >
        <div className="max-w-[650px]">

          {/* =====================================================
              EYEBROW
          ===================================================== */}

          <div className="hero-fade-in mb-4 flex items-center gap-3 sm:mb-5">
            <span className="h-px w-9 bg-[#b48b2b] sm:w-12" />

            <span className="font-serif text-[18px] italic text-[#285c24] sm:text-[23px]">
              From Our Fields
            </span>
          </div>

          {/* =====================================================
              HEADING
          ===================================================== */}

          <h1
            className="
              hero-fade-up
              max-w-[650px]
              font-serif
              text-[43px]
              font-bold
              leading-[0.98]
              tracking-[-0.045em]
              text-[#164318]
              xs:text-[46px]
              sm:text-[60px]
              lg:text-[72px]
              xl:text-[78px]
            "
          >
            Mahadal Means,
            <span className="block text-[#285c24]">
              Pure Dal.
            </span>
          </h1>

          {/* =====================================================
              DESCRIPTION
          ===================================================== */}

          <p
            className="
              hero-fade-up
              hero-delay-1
              mt-5
              max-w-[540px]
              text-[13px]
              leading-[1.8]
              text-[#343a33]
              sm:text-[15px]
              sm:leading-7
            "
          >
            Carefully selected pulses, professionally processed and
            packed with care to deliver consistent quality, natural
            goodness and dependable value to every customer.
          </p>

          {/* =====================================================
              BUTTONS
          ===================================================== */}

          <div
            className="
              hero-fade-up
              hero-delay-2
              mt-6
              flex
              flex-col
              gap-3
              sm:mt-7
              sm:flex-row
            "
          >
            {/* Explore Products */}

            <Link
              href="/products"
              className="
                group
                inline-flex
                min-h-[48px]
                w-full
                items-center
                justify-center
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
                sm:w-auto
              "
            >
              Explore Products

              <ArrowRight
                size={15}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            {/* Our Story */}

            <Link
              href="/about"
              className="
                group
                inline-flex
                min-h-[48px]
                w-full
                items-center
                justify-center
                gap-2.5
                rounded-xl
                border
                border-[#285c24]/70
                bg-white/40
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
                sm:w-auto
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

          {/* =====================================================
              TRUST STATEMENT
          ===================================================== */}

          <div className="hero-fade-up hero-delay-2 mt-5 flex items-center gap-2 sm:mt-6">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#b18b2c]" />

            <span className="text-[8px] font-semibold uppercase tracking-[0.14em] text-[#5d6259] sm:text-[9px] sm:tracking-[0.16em]">
              Quality • Care • Consistency
            </span>
          </div>
        </div>
      </div>

      {/* =========================================================
          QUALITY STRIP
          
          IMPORTANT:
          On mobile this is normal-flow content, so it can never
          overlap or hide the hero buttons.
      ========================================================= */}

      <div
        className="
          relative
          z-20
          mx-auto
          w-[calc(100%-24px)]
          max-w-[1240px]
          overflow-hidden
          rounded-t-[4px]
          border
          border-[#e1d6b7]
          bg-[#fbf3db]/95
          shadow-[0_-5px_25px_rgba(50,50,20,0.07)]
          backdrop-blur-md

          lg:absolute
          lg:bottom-0
          lg:left-1/2
          lg:w-[calc(100%-24px)]
          lg:-translate-x-1/2
        "
      >
        <div
          className="
            grid
            grid-cols-1
            divide-y
            divide-[#d8ccb0]
            sm:grid-cols-3
            sm:divide-x
            sm:divide-y-0
          "
        >

          {/* =====================================================
              QUALITY SOURCING
          ===================================================== */}

          <div className="flex items-center gap-3.5 px-5 py-3.5 sm:px-6 sm:py-4">

            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-[#285c24]/35
                bg-[#285c24]/[0.035]
              "
            >
              <Leaf
                size={18}
                strokeWidth={1.4}
                className="text-[#285c24]"
              />
            </div>

            <div className="min-w-0">
              <h3 className="text-[11px] font-bold text-[#214d20]">
                Quality Sourcing
              </h3>

              <p className="mt-0.5 text-[9px] leading-4 text-[#67695f]">
                Carefully selected grains
              </p>
            </div>
          </div>

          {/* =====================================================
              QUALITY PROCESSING
          ===================================================== */}

          <div className="flex items-center gap-3.5 px-5 py-3.5 sm:px-6 sm:py-4">

            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-[#285c24]/35
                bg-[#285c24]/[0.035]
              "
            >
              <Award
                size={18}
                strokeWidth={1.4}
                className="text-[#285c24]"
              />
            </div>

            <div className="min-w-0">
              <h3 className="text-[11px] font-bold text-[#214d20]">
                Quality Processing
              </h3>

              <p className="mt-0.5 text-[9px] leading-4 text-[#67695f]">
                Clean & carefully processed
              </p>
            </div>
          </div>

          {/* =====================================================
              RELIABLE SUPPLY
          ===================================================== */}

          <div className="flex items-center gap-3.5 px-5 py-3.5 sm:px-6 sm:py-4">

            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-[#285c24]/35
                bg-[#285c24]/[0.035]
              "
            >
              <Truck
                size={18}
                strokeWidth={1.4}
                className="text-[#285c24]"
              />
            </div>

            <div className="min-w-0">
              <h3 className="text-[11px] font-bold text-[#214d20]">
                Reliable Supply
              </h3>

              <p className="mt-0.5 text-[9px] leading-4 text-[#67695f]">
                Dependable order fulfilment
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* =========================================================
          BOTTOM BRAND LINE
      ========================================================= */}

      <div className="relative z-30 mt-0 h-[3px] w-full bg-[#285c24]" />

    </section>
  );
}