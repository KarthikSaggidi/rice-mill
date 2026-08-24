"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Wheat,
  Factory,
  ShieldCheck,
} from "lucide-react";

const highlights = [
  "Premium quality rice",
  "Modern milling technology",
  "Strict quality control",
];

export default function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-[#f8f5ea]">
      {/* =========================================================
          DECORATIVE BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute -left-24 top-20 opacity-[0.035]">
        <Wheat
          size={330}
          strokeWidth={0.7}
          className="rotate-[-18deg] text-[#285c24]"
        />
      </div>

      <div className="pointer-events-none absolute -right-24 bottom-0 opacity-[0.035]">
        <Wheat
          size={330}
          strokeWidth={0.7}
          className="rotate-[18deg] text-[#285c24]"
        />
      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:px-12 lg:py-[100px]">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">

          {/* =====================================================
              LEFT — IMAGE
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75 }}
            className="relative mx-auto w-full max-w-[590px]"
          >
            {/* Gold offset frame */}
            <div className="absolute -bottom-4 -left-4 h-full w-full rounded-[20px] border border-[#c5a448]/50 sm:-bottom-5 sm:-left-5" />

            {/* Main image */}
            <div className="relative aspect-[4/4.5] overflow-hidden rounded-[20px] bg-[#d9d2b9] shadow-[0_20px_50px_rgba(30,55,25,0.12)]">
              <img
                src="/images/about/rice-mill.jpg"
                alt="Rice mill processing facility"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#123d12]/60 via-transparent to-transparent" />

              {/* Image label */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/20 px-4 py-2 backdrop-blur-md">
                  <Factory
                    size={14}
                    strokeWidth={1.5}
                    className="text-[#e3c45b]"
                  />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                    Modern Rice Processing
                  </span>
                </div>
              </div>
            </div>

            
          </motion.div>

          {/* =====================================================
              RIGHT — CONTENT
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75 }}
            className="lg:pl-3"
          >
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#b59438]" />

              <div className="flex items-center gap-2">
                <Wheat
                  size={14}
                  strokeWidth={1.4}
                  className="text-[#b59438]"
                />

                <span className="text-[10px] font-bold uppercase tracking-[0.27em] text-[#285c24]">
                  About Our Rice Mill
                </span>
              </div>
            </div>

            {/* Heading */}
            <h2 className="max-w-[650px] font-serif text-[40px] font-bold leading-[1.08] tracking-[-0.035em] text-[#172c18] sm:text-[48px] lg:text-[53px]">
              Tradition in Every Grain,
              <span className="block text-[#285c24]">
                Technology in Every Step.
              </span>
            </h2>

            {/* Gold divider */}
            <div className="mt-6 flex items-center gap-2">
              <div className="h-[3px] w-12 rounded-full bg-[#c5a448]" />
              <div className="h-[3px] w-2 rounded-full bg-[#c5a448]/40" />
            </div>

            {/* Paragraph */}
            <p className="mt-6 max-w-[650px] text-[14px] leading-7 text-[#5b6058] sm:text-[15px]">
              Our rice mill combines years of experience with modern
              processing technology to deliver rice that meets the highest
              standards of quality, purity and consistency.
            </p>

            <p className="mt-4 max-w-[650px] text-[13px] leading-6 text-[#73776e]">
              From carefully selected paddy to the final polished grain,
              every stage of our process is handled with precision and care.
              Our commitment is simple — provide wholesome rice that families
              and businesses can trust.
            </p>

            {/* =================================================
                HIGHLIGHTS
            ================================================= */}

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2
                    size={17}
                    strokeWidth={1.8}
                    className="shrink-0 text-[#285c24]"
                  />

                  <span className="text-[11px] font-semibold leading-4 text-[#394039]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* =================================================
                QUALITY BOX
            ================================================= */}

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-[13px] border border-[#e1dac8] bg-white/65 p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#edf3e9]">
                    <ShieldCheck
                      size={18}
                      strokeWidth={1.5}
                      className="text-[#285c24]"
                    />
                  </div>

                  <div>
                    <h3 className="text-[12px] font-bold text-[#1e321f]">
                      Quality First
                    </h3>

                    <p className="mt-1 text-[10px] leading-4 text-[#70746c]">
                      Every batch undergoes careful quality inspection.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[13px] border border-[#e1dac8] bg-white/65 p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#edf3e9]">
                    <Factory
                      size={18}
                      strokeWidth={1.5}
                      className="text-[#285c24]"
                    />
                  </div>

                  <div>
                    <h3 className="text-[12px] font-bold text-[#1e321f]">
                      Modern Processing
                    </h3>

                    <p className="mt-1 text-[10px] leading-4 text-[#70746c]">
                      Efficient machinery ensures consistent results.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="/about"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-xl
                  bg-[#285c24]
                  px-6
                  py-3.5
                  text-[12px]
                  font-semibold
                  text-white
                  shadow-[0_8px_20px_rgba(40,92,36,0.16)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#1b4a17]
                "
              >
                Discover Our Story

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom separator */}
      <div className="h-[1px] bg-[#d9d2be]" />
    </section>
  );
}