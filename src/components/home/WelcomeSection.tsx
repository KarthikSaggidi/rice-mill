import Link from "next/link";
import {
  Leaf,
  Factory,
  ShieldCheck,
  Users,
  Wheat,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Farm Fresh Paddy",
    description: "Carefully sourced from trusted farming communities.",
  },
  {
    icon: Factory,
    title: "Modern Milling",
    description: "Advanced processing for clean and consistent rice.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description: "Strict checks at every stage for reliable quality.",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Building lasting relationships through trust and service.",
  },
];

export default function WelcomeSection() {
  return (
    <section
      id="welcome"
      className="relative overflow-hidden bg-[#faf8f0]"
    >
      {/* Decorative background */}

      <div className="pointer-events-none absolute -left-20 top-10 opacity-[0.035]">
        <Wheat
          size={240}
          strokeWidth={0.8}
          className="-rotate-[18deg] text-[#285c24]"
        />
      </div>

      <div className="pointer-events-none absolute -right-20 bottom-5 opacity-[0.035]">
        <Wheat
          size={240}
          strokeWidth={0.8}
          className="rotate-[18deg] text-[#b18b2c]"
        />
      </div>

      {/* Main content */}

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-[82px]">

        {/* Section heading */}

        <div className="mx-auto max-w-[780px] text-center">

          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#c5a448]" />

            <div className="flex items-center gap-2">
              <Wheat
                size={14}
                strokeWidth={1.5}
                className="text-[#b18b2c]"
              />

              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#285c24]">
                Welcome to Mahadal
              </span>
            </div>

            <span className="h-px w-10 bg-[#c5a448]" />
          </div>

          <h2 className="font-serif text-[36px] font-bold leading-[1.08] tracking-[-0.035em] text-[#172c18] sm:text-[44px] lg:text-[52px]">
            From Trusted Fields to{" "}
            <span className="text-[#285c24]">
              Every Table
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[680px] text-[13px] leading-6 text-[#565c55] sm:text-[14px] sm:leading-7">
            At Mahadal, we believe good rice begins with good grain.
            From carefully selected paddy to modern milling and careful
            processing, every step is focused on delivering rice that
            families can trust.
          </p>
        </div>

        {/* Feature cards */}

        <div className="mx-auto mt-10 grid max-w-[1180px] gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[14px]
                  border
                  border-[#e5dfd0]
                  bg-white
                  px-5
                  py-5
                  shadow-[0_5px_20px_rgba(40,60,30,0.035)]
                  transition-transform
                  duration-200
                  hover:-translate-y-1
                  hover:border-[#d3c28d]
                  hover:shadow-[0_12px_28px_rgba(40,60,30,0.07)]
                "
              >

                {/* Top green line */}

                <div
                  className="
                    absolute
                    left-0
                    top-0
                    h-[2px]
                    w-0
                    bg-[#285c24]
                    transition-all
                    duration-200
                    group-hover:w-full
                  "
                />

                <div className="flex items-center gap-4">

                  {/* Icon */}

                  <div
                    className="
                      flex
                      h-[54px]
                      w-[54px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#e7e2d4]
                      bg-[#f8f7ef]
                      transition-colors
                      duration-200
                      group-hover:border-[#d8c98f]
                      group-hover:bg-[#f5f1df]
                    "
                  >
                    <Icon
                      size={24}
                      strokeWidth={1.35}
                      className="text-[#285c24]"
                    />
                  </div>

                  {/* Text */}

                  <div>
                    <h3 className="text-[13px] font-bold leading-5 text-[#1d291e]">
                      {feature.title}
                    </h3>

                    <p className="mt-1 text-[10px] leading-4 text-[#686d66]">
                      {feature.description}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}

        </div>

        {/* About link */}

        <div className="mt-9 flex justify-center">

          <Link
            href="/about"
            className="
              group
              inline-flex
              items-center
              gap-2
              border-b
              border-[#b18b2c]
              pb-1.5
              text-[11px]
              font-bold
              uppercase
              tracking-[0.16em]
              text-[#285c24]
              transition-colors
              duration-200
              hover:text-[#174719]
            "
          >
            Discover Our Story

            <ArrowRight
              size={14}
              strokeWidth={1.8}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>

        </div>
      </div>

      {/* Bottom separator */}

      <div className="h-px bg-[#e5dfd0]" />
    </section>
  );
}