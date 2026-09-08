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

/* =========================================================
   OUR JOURNEY — THREE GENERATIONS
========================================================= */

const generations = [
  {
    number: "01",
    period: "THE FOUNDATION",
    name: "Late Shri Nagarmalji Heeralalji Agrawal",
    title: "The Beginning of Our Journey",
    image: "/images/about/generation-1.jpg",
    description:
      "Originally from Jhunjhunu, Rajasthan, Late Shri Nagarmalji Heeralalji Agrawal established the business in Udgir, District Latur, Maharashtra. His entrepreneurial vision and determination laid the foundation of the family's journey in the pulses industry and marked the beginning of the business's manufacturing operations.",
    points: [
      "Originally from Jhunjhunu, Rajasthan",
      "Established the business in Udgir, Maharashtra",
      "Started the first factory",
      "Laid the foundation of the family business",
    ],
  },
  {
    number: "02",
    period: "EXPANSION & EXCELLENCE",
    name: "Shri Parmanand Nagarmal Agrawal",
    title: "Building Scale Through Experience",
    image: "/images/about/generation-2.jpg",
    description:
      "Shri Parmanand Nagarmal Agrawal joined the business in 1980 and took the journey forward with a strong focus on quality, quantity and operational efficiency. His leadership brought greater manufacturing capability through the installation of modern equipment, a focus on minimum operating costs and the establishment of two new factories.",
    points: [
      "Joined the business in 1980",
      "Developed quality and quantity mastery",
      "Introduced the latest equipment",
      "Focused on minimum operating costs",
      "Established two new factories independently",
      "Built a strong presence in the pulses industry",
      "Continued the brand's leadership for more than a decade",
    ],
  },
  {
    number: "03",
    period: "THE NEXT GENERATION",
    name: "Raunak Parmanand Agrawal",
    title: "Taking the Business Forward",
    image: "/images/about/generation-3.jpg",
    description:
      "Raunak Parmanand Agrawal joined the business in 2019, bringing a modern approach to business development and market relationships. His focus has been on connecting with new customers, developing modern trade associations and expanding the business's relationships with an evolving market, while carrying forward the foundation established by the previous generations.",
    points: [
      "Joined the business in 2019",
      "Modern approach to business development",
      "Building connections with new customers",
      "Developing modern trade associations",
      "Expanding business relationships",
      "Taking the family business into a new phase",
    ],
  },
];

/* =========================================================
   VALUES
========================================================= */

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
      "We value transparent relationships with customers, retailers, and wholesale partners.",
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

/* =========================================================
   ABOUT PAGE
========================================================= */

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
          OUR JOURNEY — THREE GENERATIONS
      ========================================================= */}

      {/* =========================================================
    OUR JOURNEY — THREE GENERATIONS
========================================================= */}

<section className="relative overflow-hidden bg-[#f4f1e5]">

  {/* Subtle background elements */}

  <div
    aria-hidden="true"
    className="pointer-events-none absolute -left-40 top-[20%] h-[420px] w-[420px] rounded-full border border-[#285c24]/[0.045]"
  />

  <div
    aria-hidden="true"
    className="pointer-events-none absolute -right-40 bottom-[8%] h-[420px] w-[420px] rounded-full border border-[#b08b30]/[0.055]"
  />

  <div className="relative mx-auto max-w-[1250px] px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">

    {/* =====================================================
        SECTION HEADING
    ===================================================== */}

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65 }}
      className="mx-auto max-w-[760px] text-center"
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

      <h2 className="font-serif text-[32px] font-bold leading-[1.08] tracking-[-0.025em] text-[#172c18] sm:text-[40px] lg:text-[44px]">
        Three Generations,
        <span className="block text-[#285c24]">
          One Continuing Legacy
        </span>
      </h2>

      <p className="mx-auto mt-4 max-w-[680px] text-[12px] leading-6 text-[#686e65] sm:text-[13px]">
        From establishing the first factory to expanding manufacturing
        capabilities and embracing modern business relationships, each
        generation has shaped the next chapter of our journey.
      </p>

    </motion.div>

    {/* =====================================================
        JOURNEY CARDS
    ===================================================== */}

    <div className="relative mx-auto mt-12 max-w-[1150px]">

      {/* Desktop centre line */}

      <div
        aria-hidden="true"
        className="
          absolute
          bottom-16
          left-1/2
          top-16
          hidden
          w-px
          -translate-x-1/2
          bg-gradient-to-b
          from-transparent
          via-[#c9bb87]
          to-transparent
          lg:block
        "
      />

      <div className="space-y-8 lg:space-y-12">

        {generations.map((generation, index) => {

          const reversed = index % 2 !== 0;

          return (
            <motion.article
              key={generation.number}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.12,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className={`
                group
                relative
                grid
                items-center
                gap-7
                rounded-[24px]
                border
                border-[#ddd5bd]
                bg-[#fffdf8]
                p-5
                shadow-[0_8px_30px_rgba(35,55,30,0.045)]
                transition-all
                duration-300
                hover:border-[#d1bf82]
                hover:shadow-[0_18px_42px_rgba(35,55,30,0.09)]
                sm:p-7
                lg:grid-cols-2
                lg:gap-10
                lg:p-8
                ${
                  reversed
                    ? "lg:[&>div:first-child]:order-2"
                    : ""
                }
              `}
            >

              {/* =================================================
                  CIRCULAR IMAGE CONTAINER
              ================================================= */}

              <div className="flex items-center justify-center">

                {/* Outer decorative frame */}

                <div
                  className="
                    relative
                    flex
                    h-[270px]
                    w-[270px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#cbbd8b]
                    bg-[#eee8d8]
                    p-3
                    shadow-[0_12px_35px_rgba(35,55,30,0.08)]
                    sm:h-[330px]
                    sm:w-[330px]
                    sm:p-4
                    lg:h-[390px]
                    lg:w-[390px]
                    lg:p-4
                  "
                >

                  {/* Inner circular image */}

                  <div
                    className="
                      relative
                      h-full
                      w-full
                      overflow-hidden
                      rounded-full
                      border
                      border-white
                      bg-[#e7e0ce]
                      shadow-inner
                    "
                  >

                    <Image
                      src={generation.image}
                      alt={`${generation.name} - ${generation.title}`}
                      fill
                      sizes="(max-width: 640px) 270px, (max-width: 1024px) 330px, 390px"
                      className="
                        object-contain
                        object-center
                        p-1
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-[1.025]
                      "
                    />

                    {/* Very subtle image tint */}

                    <div className="pointer-events-none absolute inset-0 rounded-full bg-[#285c24]/[0.025]" />

                    {/* Inner border */}

                    <div
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute
                        inset-1
                        rounded-full
                        border
                        border-[#285c24]/10
                      "
                    />

                  </div>

                  {/* Generation number badge */}

                  <div
                    className="
                      absolute
                      right-3
                      top-3
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white
                      bg-[#285c24]
                      shadow-[0_6px_18px_rgba(40,92,36,0.22)]
                      sm:right-5
                      sm:top-5
                    "
                  >

                    <span className="font-serif text-[12px] font-bold text-white">
                      {generation.number}
                    </span>

                  </div>

                  {/* Gold decorative dot */}

                  <span
                    aria-hidden="true"
                    className="
                      absolute
                      bottom-8
                      left-1/2
                      h-2.5
                      w-2.5
                      -translate-x-1/2
                      rounded-full
                      border
                      border-white
                      bg-[#b08b30]
                      shadow-[0_2px_8px_rgba(176,139,48,0.3)]
                    "
                  />

                </div>

              </div>

              {/* =================================================
                  CONTENT
              ================================================= */}

              <div className="flex flex-col justify-center px-1 py-2 sm:px-2 lg:px-3">

                {/* Generation indicator */}

                <div className="flex items-center gap-3">

                  <span className="font-serif text-[12px] font-bold text-[#b08b30]">
                    {generation.number}
                  </span>

                  <span className="h-px w-8 bg-[#d0bf87]" />

                  <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#7a7d73]">
                    {generation.period}
                  </span>

                </div>

                {/* Title */}

                <h3 className="mt-4 max-w-[470px] font-serif text-[27px] font-bold leading-[1.08] tracking-[-0.02em] text-[#1a321b] sm:text-[31px]">

                  {generation.title}

                </h3>

                {/* Person */}

                <p className="mt-3 max-w-[500px] font-serif text-[16px] font-bold leading-snug text-[#285c24]">

                  {generation.name}

                </p>

                {/* Description */}

                <p className="mt-4 max-w-[510px] text-[11px] leading-[1.75] text-[#686e65] sm:text-[12px]">

                  {generation.description}

                </p>


              </div>

              {/* Bottom accent */}

              <div className="absolute bottom-0 left-0 h-[3px] w-0 rounded-b-[24px] bg-[#285c24] transition-all duration-300 group-hover:w-full" />

            </motion.article>
          );
        })}

      </div>

    </div>

    {/* =====================================================
        JOURNEY CLOSING LINE
    ===================================================== */}

    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className="mx-auto mt-10 max-w-[850px] text-center"
    >

      <div className="flex items-center justify-center gap-3">

        <span className="h-px w-10 bg-[#d0bf87]" />

        <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#b08b30]">
          Then • Now • Next
        </span>

        <span className="h-px w-10 bg-[#d0bf87]" />

      </div>

      <p className="mx-auto mt-3 max-w-[650px] text-[10px] leading-5 text-[#777b72]">
        A journey built through experience, strengthened through
        expansion and carried forward with a modern business outlook.
      </p>

    </motion.div>

  </div>
</section>

      {/* =========================================================
          VALUES
      ========================================================= */}

      <section className="relative overflow-hidden bg-white">

        <div className="mx-auto max-w-[1200px] px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-[720px] text-center"
          >

            <div className="mb-4 flex items-center justify-center gap-3">

              <span className="h-px w-8 bg-[#b59438]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.23em] text-[#b08b30]">
                What Guides Us
              </span>

              <span className="h-px w-8 bg-[#b59438]" />

            </div>

            <h2 className="font-serif text-[32px] font-bold leading-tight text-[#172c18] sm:text-[40px]">
              Principles That Shape
              <span className="text-[#285c24]">
                {" "}Our Work
              </span>
            </h2>

            <p className="mt-4 text-[12px] leading-6 text-[#686e65] sm:text-[13px]">
              The experience built across generations continues to influence
              how we approach quality, relationships and the future of the
              business.
            </p>

          </motion.div>

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

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#edf3e9]">

                    <Icon
                      size={19}
                      strokeWidth={1.4}
                      className="text-[#285c24]"
                    />

                  </div>

                  <h3 className="mt-5 font-serif text-[17px] font-bold leading-tight text-[#1d341e]">
                    {value.title}
                  </h3>

                  <p className="mt-2 text-[10px] leading-[1.7] text-[#6c726a]">
                    {value.description}
                  </p>

                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#285c24] transition-all duration-300 group-hover:w-full" />

                </motion.div>
              );
            })}

          </div>

        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}

      <section className="border-t border-[#e5e0d3] bg-[#f4f1e5]">

        <div className="mx-auto max-w-[1100px] px-5 py-12 text-center sm:px-8 sm:py-14">

          <Wheat
            size={22}
            strokeWidth={1.3}
            className="mx-auto text-[#b08b30]"
          />

          <h2 className="mt-3 font-serif text-[28px] font-bold leading-tight text-[#1b321c] sm:text-[34px]">
            A Legacy That Continues,
            <span className="block text-[#285c24] sm:inline">
              {" "}A Business That Evolves
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-[620px] text-[11px] leading-5 text-[#6a7068]">
            Explore our range of pulses and discover the products that
            represent the continuing journey of the business.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">

            <Link
              href="/products"
              className="
                group
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-[#285c24]
                px-6
                py-3.5
                text-[10px]
                font-bold
                text-white
                shadow-[0_7px_18px_rgba(40,92,36,0.14)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#1b4a17]
              "
            >
              View Products

              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/contact"
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                border
                border-[#285c24]
                px-6
                py-3.5
                text-[10px]
                font-semibold
                text-[#285c24]
                transition-all
                duration-300
                hover:bg-[#285c24]
                hover:text-white
              "
            >
              Contact Us
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}