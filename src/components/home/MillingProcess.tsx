"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Factory,
  Sprout,
  Settings2,
  SearchCheck,
  PackageCheck,
  Wheat,
  ShieldCheck,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Paddy Selection",
    shortTitle: "Selection",
    description:
      "Carefully selected paddy is sourced based on grain quality, maturity and natural characteristics.",
    icon: Sprout,
  },
  {
    number: "02",
    title: "Cleaning",
    shortTitle: "Cleaning",
    description:
      "Paddy is thoroughly cleaned to remove dust, stones, husk and other unwanted impurities.",
    icon: SearchCheck,
  },
  {
    number: "03",
    title: "Modern Milling",
    shortTitle: "Milling",
    description:
      "Advanced milling equipment processes the paddy with precision while protecting grain quality.",
    icon: Settings2,
  },
  {
    number: "04",
    title: "Quality Inspection",
    shortTitle: "Inspection",
    description:
      "Rice is carefully inspected for appearance, cleanliness, consistency and overall quality.",
    icon: CheckCircle2,
  },
  {
    number: "05",
    title: "Packing & Dispatch",
    shortTitle: "Dispatch",
    description:
      "Finished rice is securely packed and prepared for safe delivery to customers and distributors.",
    icon: PackageCheck,
  },
];

export default function MillingProcess() {
  return (
    <section className="relative overflow-hidden bg-[#f4f1e5]">
      {/* =========================================================
          SUBTLE BACKGROUND DECORATION
      ========================================================= */}

      <div className="pointer-events-none absolute -left-24 top-16 opacity-[0.025]">
        <Wheat
          size={330}
          strokeWidth={0.65}
          className="rotate-[-18deg] text-[#285c24]"
        />
      </div>

      <div className="pointer-events-none absolute -right-24 bottom-16 opacity-[0.025]">
        <Wheat
          size={330}
          strokeWidth={0.65}
          className="rotate-[18deg] text-[#285c24]"
        />
      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-[105px]">

        {/* =======================================================
            SECTION HEADER
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-[780px] text-center"
        >
          {/* Eyebrow */}
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#b59438]" />

            <div className="flex items-center gap-2">
              <Factory
                size={14}
                strokeWidth={1.4}
                className="text-[#b59438]"
              />

              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#285c24]">
                Our Milling Process
              </span>
            </div>

            <span className="h-px w-10 bg-[#b59438]" />
          </div>

          {/* Heading */}
          <h2 className="font-serif text-[39px] font-bold leading-[1.06] tracking-[-0.035em] text-[#172c18] sm:text-[48px] lg:text-[54px]">
            From Paddy to
            <span className="text-[#285c24]"> Perfect Grain</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-[670px] text-[13px] leading-6 text-[#656a62] sm:text-[14px]">
            Every grain passes through a carefully controlled process where
            traditional knowledge meets modern milling technology to deliver
            clean, consistent and quality rice.
          </p>
        </motion.div>

        {/* =======================================================
            PROCESS TIMELINE
        ======================================================= */}

        <div className="relative mx-auto mt-16 max-w-[1200px]">

          {/* Desktop timeline line */}
          <div className="absolute left-[9%] right-[9%] top-[31px] hidden h-px bg-[#d0c6a5] lg:block" />

          {/* Animated line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="absolute left-[9%] right-[9%] top-[31px] hidden h-px origin-left bg-[#285c24]/35 lg:block"
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.07,
                  }}
                  className="group relative text-center"
                >
                  {/* =================================================
                      ICON CIRCLE
                  ================================================= */}

                  <div className="relative z-10 mx-auto flex h-[64px] w-[64px] items-center justify-center rounded-full border border-[#cdbb7b] bg-[#f4f1e5] transition-all duration-300 group-hover:border-[#285c24]">
                    <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#285c24] shadow-[0_7px_18px_rgba(40,92,36,0.15)] transition-transform duration-300 group-hover:scale-105">
                      <Icon
                        size={20}
                        strokeWidth={1.45}
                        className="text-[#e4c95d]"
                      />
                    </div>
                  </div>

                  {/* =================================================
                      STEP LABEL
                  ================================================= */}

                  <div className="mt-5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#b08b30]">
                    Step {step.number}
                  </div>

                  {/* =================================================
                      TITLE
                  ================================================= */}

                  <h3 className="mt-2 font-serif text-[20px] font-bold leading-tight text-[#1e341f]">
                    {step.title}
                  </h3>

                  {/* =================================================
                      DESCRIPTION
                  ================================================= */}

                  <p className="mx-auto mt-2.5 max-w-[210px] text-[10px] leading-[1.75] text-[#6d716a]">
                    {step.description}
                  </p>

                  {/* Small mobile separator */}
                  {index < processSteps.length - 1 && (
                    <div className="mx-auto mt-7 h-px w-10 bg-[#d8cfb6] sm:hidden" />
                  )}
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* =======================================================
            QUALITY PROMISE
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="
            mx-auto
            mt-16
            max-w-[1080px]
            overflow-hidden
            rounded-[18px]
            border
            border-[#d8cfb2]
            bg-[#fffdf6]
            shadow-[0_8px_28px_rgba(40,55,30,0.04)]
          "
        >
          <div className="grid lg:grid-cols-[1fr_auto]">

            {/* Main commitment */}
            <div className="p-6 sm:p-8 lg:p-9">
              <div className="flex items-start gap-4 sm:gap-5">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#edf3e9]">
                  <ShieldCheck
                    size={22}
                    strokeWidth={1.4}
                    className="text-[#285c24]"
                  />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#b08b30]">
                    Our Commitment
                  </p>

                  <h3 className="mt-1 font-serif text-[23px] font-bold text-[#1c331d] sm:text-[25px]">
                    Quality at Every Stage
                  </h3>

                  <p className="mt-2 max-w-[680px] text-[11px] leading-5 text-[#6b7067]">
                    We focus on maintaining the natural quality of rice from
                    the moment paddy enters our facility until the finished
                    product reaches our customers.
                  </p>
                </div>
              </div>
            </div>

            {/* Facility highlight */}
            <div className="border-t border-[#e4dece] bg-[#faf7eb] p-5 sm:px-8 lg:flex lg:min-w-[245px] lg:items-center lg:border-l lg:border-t-0 lg:px-8">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#edf3e9]">
                  <Factory
                    size={21}
                    strokeWidth={1.4}
                    className="text-[#285c24]"
                  />
                </div>

                <div>
                  <div className="font-serif text-[21px] font-bold text-[#285c24]">
                    Modern
                  </div>

                  <div className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#777b72]">
                    Processing Facility
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =======================================================
            PROCESS HIGHLIGHTS
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mx-auto mt-8 flex max-w-[850px] flex-wrap items-center justify-center gap-x-7 gap-y-3"
        >
          {[
            "Carefully Selected Paddy",
            "Modern Processing",
            "Strict Quality Checks",
            "Safe Packaging",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 text-[10px] font-medium text-[#62685f]"
            >
              <CheckCircle2
                size={14}
                strokeWidth={1.7}
                className="text-[#285c24]"
              />

              {item}
            </div>
          ))}
        </motion.div>

        {/* =======================================================
            CTA
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-9 flex justify-center"
        >
          <a
            href="/about"
            className="
              group
              inline-flex
              items-center
              gap-3
              rounded-xl
              border
              border-[#285c24]
              bg-transparent
              px-6
              py-3.5
              text-[11px]
              font-semibold
              text-[#285c24]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#285c24]
              hover:text-white
            "
          >
            Learn More About Our Process

            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>

      {/* =========================================================
          SECTION SEPARATOR
      ========================================================= */}

      <div className="h-px bg-[#d9d2be]" />
    </section>
  );
}