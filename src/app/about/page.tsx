"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Factory,
  Handshake,
  Leaf,
  ShieldCheck,
  Wheat,
} from "lucide-react";

const generations = [
  {
    number: "01",
    period: "The Beginning",
    title: "A Foundation Built on Trust",
    image: "/images/about/generation-1.jpg",
    description:
      "What began with a strong connection to agriculture and a deep understanding of pulse cultivation gradually grew into a commitment to providing dependable, nutrient-dense pulses. The early years were shaped by hard work, close partnerships with farmers, and a belief that quality begins at the farm.",
    points: [
      "Strong agricultural roots",
      "Focus on premium raw pulses",
      "Relationships built on trust",
    ],
  },
  {
    number: "02",
    period: "Growing With Experience",
    title: "Experience Meets Progress",
    image: "/images/about/generation-2.jpg",
    description:
      "With experience came a wider understanding of grading, sortex cleaning, dehulling, and customer requirements. The business continued to develop while preserving the values that shaped its foundation—consistency, honesty, and responsible practices.",
    points: [
      "Deep processing expertise",
      "Rigorous grading & sorting",
      "Long-term customer relationships",
    ],
  },
  {
    number: "03",
    period: "Looking Ahead",
    title: "Tradition Meets Modern Processing",
    image: "/images/about/generation-3.jpg",
    description:
      "Today, the next generation carries the journey forward with a modern approach. Advanced optical sorting, hygienic processing, and quality-focused operations are combined with the principles that have remained important throughout the family's journey.",
    points: [
      "Advanced sorting & processing",
      "Quality-focused operations",
      "Vision for sustainable nutrition",
    ],
  },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Quality First",
    description:
      "We focus on maintaining uncompromised quality from carefully sourced raw pulses to the finished pack.",
  },
  {
    icon: Handshake,
    title: "Built on Trust",
    description:
      "We value transparent relationships with farmers, customers, retailers, and wholesale partners.",
  },
  {
    icon: Factory,
    title: "Modern Processing",
    description:
      "State-of-the-art cleaning, grading, and dehulling ensure clean and nutrient-rich pulses.",
  },
  {
    icon: Leaf,
    title: "Responsible Approach",
    description:
      "We believe in thoughtful sourcing, ethical handling, and long-term sustainable nourishment.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#faf9f4] text-[#172c18]">

      {/* =========================================================
          INTRODUCTION
      ========================================================= */}

      <section className="relative overflow-hidden border-b border-[#e5e0d2] bg-[#f4f1e5] pt-[120px]">

        {/* Decorative wheat/grain */}
        <div className="pointer-events-none absolute -left-28 top-20 opacity-[0.035]">
          <Wheat
            size={330}
            strokeWidth={0.7}
            className="rotate-[-18deg] text-[#285c24]"
          />
        </div>
      </section>

     

      {/* =========================================================
          THREE GENERATION STORY
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#f4f1e5]">

        <div className="mx-auto max-w-[1250px] px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">

          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="mx-auto max-w-[720px] text-center"
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-9 bg-[#b59438]" />

              <Wheat
                size={14}
                strokeWidth={1.4}
                className="text-[#b59438]"
              />

              <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#285c24]">
                Our Journey
              </span>

              <span className="h-px w-9 bg-[#b59438]" />
            </div>

            <h2 className="font-serif text-[32px] font-bold leading-tight text-[#172c18] sm:text-[40px]">
              Three Chapters,
              <span className="text-[#285c24]">
                {" "}One Continuing Legacy
              </span>
            </h2>

            <p className="mt-4 text-[12px] leading-6 text-[#686e65] sm:text-[13px]">
              Each stage of our journey has brought new expertise,
              infrastructure, and refined standards while keeping purity,
              nutrition, and trust at the absolute center.
            </p>
          </motion.div>

          {/* Generation cards */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">

            {generations.map((generation, index) => (
              <motion.article
                key={generation.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="group overflow-hidden rounded-[18px] border border-[#ddd5bd] bg-white shadow-[0_6px_22px_rgba(35,55,30,0.045)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#cfc087] hover:shadow-[0_15px_35px_rgba(35,55,30,0.09)]"
              >

                {/* =================================================
                    FIXED SQUARE IMAGE
                ================================================= */}

                <div className="relative aspect-square w-full overflow-hidden bg-[#e5dfcd]">

                  <Image
                    src={generation.image}
                    alt={generation.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102f12]/75 via-transparent to-transparent" />

                  {/* Number */}
                  <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-black/20 backdrop-blur-md">
                    <span className="font-serif text-[12px] font-bold text-white">
                      {generation.number}
                    </span>
                  </div>

                  {/* Image text */}
                  <div className="absolute inset-x-4 bottom-4">
                    <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#dfc76a]">
                      {generation.period}
                    </p>

                    <h3 className="mt-1 font-serif text-[21px] font-bold leading-tight text-white">
                      {generation.title}
                    </h3>
                  </div>
                </div>

                {/* Card content */}
                <div className="p-5">

                  <p className="text-[11px] leading-5 text-[#686e65]">
                    {generation.description}
                  </p>

                  <div className="mt-4 space-y-2 border-t border-[#ebe6d9] pt-4">
                    {generation.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle2
                          size={13}
                          strokeWidth={1.7}
                          className="shrink-0 text-[#285c24]"
                        />

                        <span className="text-[9px] font-medium text-[#555c53]">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          OUR APPROACH
      ========================================================= */}

      <section className="relative overflow-hidden bg-white">
  {/* =========================================================
      SUBTLE BACKGROUND DETAIL
  ========================================================= */}

  <div
    aria-hidden="true"
    className="
      pointer-events-none
      absolute
      -right-32
      top-10
      h-[360px]
      w-[360px]
      rounded-full
      border
      border-[#b08b30]/[0.07]
    "
  />

  <div
    aria-hidden="true"
    className="
      pointer-events-none
      absolute
      -left-40
      bottom-0
      h-[320px]
      w-[320px]
      rounded-full
      border
      border-[#285c24]/[0.05]
    "
  />

  <div className="relative mx-auto max-w-[1200px] px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">

    {/* =========================================================
        SECTION INTRO
    ========================================================= */}

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-[720px] text-center"
    >
      {/* Eyebrow */}

      <div className="flex items-center justify-center gap-3">
        <span className="h-px w-7 bg-[#b08b30]" />

        <p className="text-[9px] font-bold uppercase tracking-[0.23em] text-[#b08b30]">
          What Guides Us
        </p>

        <span className="h-px w-7 bg-[#b08b30]" />
      </div>

      {/* Heading */}

      <h2 className="mt-3 font-serif text-[32px] font-bold leading-[1.08] tracking-[-0.02em] text-[#1b321c] sm:text-[40px]">
        Our Values Shape{" "}
        <span className="text-[#285c24]">
          Our Work
        </span>
      </h2>

      {/* Description */}

      <p className="mx-auto mt-5 max-w-[650px] text-[12px] leading-6 text-[#686e65] sm:text-[13px]">
        The way we operate is anchored in clear principles. These values
        guide how we procure, clean, sort, grade and supply natural pulses
        to our valued partners and customers.
      </p>
    </motion.div>

    {/* =========================================================
        VALUE CARDS
    ========================================================= */}

    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {values.map((value, index) => {
        const Icon = value.icon;

        return (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.07,
            }}
            className="
              group
              relative
              overflow-hidden
              rounded-[18px]
              border
              border-[#e5e1d6]
              bg-[#faf9f4]
              p-5
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-[#d4c48d]
              hover:bg-white
              hover:shadow-[0_14px_35px_rgba(40,92,36,0.08)]
            "
          >
            {/* Top gold accent */}

            <span
              aria-hidden="true"
              className="
                absolute
                left-0
                top-0
                h-[2px]
                w-0
                bg-[#b08b30]
                transition-all
                duration-300
                group-hover:w-full
              "
            />

            {/* Icon */}

            <div
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                border
                border-[#285c24]/10
                bg-[#edf3e9]
                transition-all
                duration-300
                group-hover:border-[#b08b30]/20
                group-hover:bg-[#f5f0df]
              "
            >
              <Icon
                size={19}
                strokeWidth={1.45}
                className="
                  text-[#285c24]
                  transition-colors
                  duration-300
                  group-hover:text-[#b08b30]
                "
              />
            </div>

            {/* Content */}

            <h3
              className="
                mt-5
                font-serif
                text-[17px]
                font-bold
                leading-tight
                text-[#1d341e]
              "
            >
              {value.title}
            </h3>

            <p
              className="
                mt-2
                text-[10px]
                leading-[1.7]
                text-[#6c726a]
              "
            >
              {value.description}
            </p>

            
          </motion.div>
        );
      })}
    </div>
  </div>
</section>

      {/* =========================================================
          BOTTOM CTA
      ========================================================= */}

      <section className="border-t border-[#e5e0d3] bg-[#f4f1e5]">

        <div className="mx-auto max-w-[1100px] px-5 py-12 text-center sm:px-8 sm:py-14">

          <Wheat
            size={22}
            strokeWidth={1.3}
            className="mx-auto text-[#b08b30]"
          />

          <h2 className="mt-3 font-serif text-[28px] font-bold text-[#1b321c] sm:text-[34px]">
            Wholesome Nutrition,
            <span className="text-[#285c24]">
              {" "}From Farm to Kitchen
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-[600px] text-[11px] leading-5 text-[#6a7068]">
            Discover our wide range of pulses, dals, and legumes, or speak with
            our team for institutional and wholesale requirements.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">

            <Link
              href="/products"
              className="group inline-flex items-center gap-2 rounded-xl bg-[#285c24] px-6 py-3.5 text-[10px] font-bold text-white shadow-[0_7px_18px_rgba(40,92,36,0.14)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1b4a17]"
            >
              View Products

              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-[#285c24] px-6 py-3.5 text-[10px] font-semibold text-[#285c24] transition-all duration-300 hover:bg-[#285c24] hover:text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}