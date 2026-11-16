
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

      {/* DESKTOP BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <img
          src="/images/hero/rice-hero.jpg"
          alt="Mahadal pulses arranged in wooden scoops"
          className="h-full w-full object-cover object-center"
          fetchPriority="high"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#fff8e9]/75 via-[#fff8e9]/42 to-[#fff8e9]/5" />
        <div className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-[#f5ecd5]/80 via-[#f5ecd5]/35 to-transparent" />
        <div className="absolute inset-0 bg-[#285c24]/[0.025]" />
      </div>

      {/* HERO CONTENT */}
      <div
        className="
          relative z-10 mx-auto max-w-[1400px]
          px-5 pt-6 pb-8
          sm:px-8 sm:pt-10 sm:pb-10
          lg:flex lg:min-h-[560px] lg:items-center
          lg:px-12 lg:pt-8 lg:pb-[135px]
        "
      >
        <div className="max-w-[650px]">

          {/* EYEBROW */}
          <div className="hero-fade-in mb-3 flex items-center gap-3 sm:mb-5">
            <span className="h-px w-8 bg-[#b48b2b] sm:w-12" />

            <span className="font-serif text-[17px] italic text-[#285c24] sm:text-[23px]">
              From Our Fields
            </span>
          </div>

          {/* HEADING */}
          <h1
            className="
              hero-fade-up max-w-[650px]
              font-serif font-bold
              text-[40px] leading-[1.04]
              tracking-[-0.045em]
              text-[#164318]
              xs:text-[44px]
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

          {/* DESCRIPTION */}
          <p
            className="
              hero-fade-up hero-delay-1
              mt-4 max-w-[540px]
              text-[12px] leading-[1.8]
              text-[#343a33]
              sm:mt-5 sm:text-[15px] sm:leading-7
            "
          >
            Carefully selected pulses, professionally processed and
            packed with care to deliver consistent quality, natural
            goodness and dependable value to every customer.
          </p>

          {/* MOBILE IMAGE + BUTTONS */}
          <div className="relative mt-5 lg:contents">

            {/* MOBILE HERO IMAGE */}
            <div
              className="
                relative mx-[-4px]
                h-[190px] overflow-hidden
                rounded-2xl
                border border-[#285c24]/10
                shadow-[0_8px_24px_rgba(40,60,25,0.10)]
                sm:mx-0 sm:h-[250px]
                lg:hidden
              "
            >
              <img
                src="/images/hero/rice-hero.jpg"
                alt="Mahadal pulses arranged in wooden scoops"
                className="h-full w-full object-cover object-[72%_center]"
                fetchPriority="high"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#173f1b]/20 via-transparent to-[#fff8e9]/10" />

              <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full border border-white/30 bg-[#fff8e9]/85 px-3 py-1.5 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-[#285c24]" />
                <span className="text-[8px] font-semibold uppercase tracking-[0.13em] text-[#285c24]">
                  Quality • Care • Purity
                </span>
              </div>
            </div>

            {/* CTA BUTTONS */}
            <div
              className="
                hero-fade-up hero-delay-2
                relative z-10 mt-4
                grid grid-cols-2 gap-2.5
                sm:gap-3
                lg:mt-6 lg:flex lg:gap-3
              "
            >
              {/* EXPLORE PRODUCTS */}
              <Link
                href="/products"
                className="
                  group inline-flex min-h-[46px]
                  w-full min-w-0 items-center justify-center
                  gap-1.5 rounded-xl
                  bg-[#285c24]
                  px-2.5 py-3
                  text-[10px] font-semibold
                  whitespace-nowrap text-white
                  shadow-[0_8px_22px_rgba(40,92,36,0.20)]
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#1b4a17]
                  hover:shadow-[0_12px_28px_rgba(40,92,36,0.25)]
                  sm:min-h-[50px] sm:px-4 sm:text-[12px]
                  lg:w-auto lg:gap-2.5 lg:px-6 lg:py-3.5
                "
              >
                Explore Products

                <ArrowRight
                  size={14}
                  strokeWidth={2}
                  className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 sm:h-[15px] sm:w-[15px]"
                />
              </Link>

              {/* CONTACT US */}
              <Link
                href="/contact"
                className="
                  group inline-flex min-h-[46px]
                  w-full min-w-0 items-center justify-center
                  gap-1.5 rounded-xl
                  border border-[#285c24]/70
                  bg-white/55
                  px-2.5 py-3
                  text-[10px] font-semibold
                  whitespace-nowrap text-[#285c24]
                  backdrop-blur-sm
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:bg-white/80
                  sm:min-h-[50px] sm:px-4 sm:text-[12px]
                  lg:w-auto lg:gap-2.5 lg:px-6 lg:py-3.5
                "
              >
                Contact Us

                <ArrowRight
                  size={14}
                  strokeWidth={2}
                  className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 sm:h-[15px] sm:w-[15px]"
                />
              </Link>
            </div>
          </div>

          {/* TRUST STATEMENT */}
          <div className="hero-fade-up hero-delay-2 mt-4 flex items-center gap-2 sm:mt-6">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#b18b2c]" />

            <span className="text-[8px] font-semibold uppercase tracking-[0.13em] text-[#5d6259] sm:text-[9px] sm:tracking-[0.16em]">
              Quality • Care • Consistency
            </span>
          </div>
        </div>
      </div>

      {/* QUALITY STRIP */}
      <div
        className="
          relative z-20 mx-auto
          w-[calc(100%-24px)] max-w-[1240px]
          overflow-hidden rounded-t-[4px]
          border border-[#e1d6b7]
          bg-[#fbf3db]/95
          shadow-[0_-5px_25px_rgba(50,50,20,0.07)]
          backdrop-blur-md
          lg:absolute lg:bottom-0 lg:left-1/2
          lg:w-[calc(100%-24px)] lg:-translate-x-1/2
        "
      >
        <div
          className="
            grid grid-cols-1
            divide-y divide-[#d8ccb0]
            sm:grid-cols-3
            sm:divide-x sm:divide-y-0
          "
        >

          {/* QUALITY SOURCING */}
          <div className="flex items-center gap-3.5 px-5 py-3.5 sm:px-6 sm:py-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#285c24]/35 bg-[#285c24]/[0.035]">
              <Leaf size={18} strokeWidth={1.4} className="text-[#285c24]" />
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

          {/* QUALITY PROCESSING */}
          <div className="flex items-center gap-3.5 px-5 py-3.5 sm:px-6 sm:py-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#285c24]/35 bg-[#285c24]/[0.035]">
              <Award size={18} strokeWidth={1.4} className="text-[#285c24]" />
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

          {/* RELIABLE SUPPLY */}
          <div className="flex items-center gap-3.5 px-5 py-3.5 sm:px-6 sm:py-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#285c24]/35 bg-[#285c24]/[0.035]">
              <Truck size={18} strokeWidth={1.4} className="text-[#285c24]" />
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

      {/* BOTTOM BRAND LINE */}
      <div className="relative z-30 mt-0 h-[3px] w-full bg-[#285c24]" />

    </section>
  );
}
