"use client";

import { motion } from "framer-motion";
import {
  Award,
  CheckCircle2,
  Factory,
  Handshake,
  Leaf,
  PackageCheck,
  ShieldCheck,
  Truck,
  Wheat,
} from "lucide-react";

const strengths = [
  {
    icon: Leaf,
    title: "Quality Raw Harvest",
    description:
      "We carefully source mature, high-grade raw pulses directly from trusted farming belts to preserve natural nutrients and flavor.",
  },
  {
    icon: Factory,
    title: "Modern Dal Processing",
    description:
      "Our processing combines advanced de-husking and split-milling technology with gentle handling to safeguard the natural grain shape.",
  },
  {
    icon: ShieldCheck,
    title: "Strict Sortex Grading",
    description:
      "Every batch passes optical sorting and laboratory checks to eliminate foreign matter, discolored seeds, and impurities.",
  },
  {
    icon: PackageCheck,
    title: "Hygienic Packaging",
    description:
      "Finished dals and whole grams are packed in food-grade, moisture-resistant packaging to preserve aroma, texture, and freshness.",
  },
  {
    icon: Truck,
    title: "Reliable Bulk Supply",
    description:
      "We ensure smooth logistics and on-schedule dispatches for wholesale buyers, retailers, institutional kitchens, and distributors.",
  },
  {
    icon: Handshake,
    title: "Customer & Farmer Trust",
    description:
      "We build lasting relationships through fair farmer sourcing, transparent business practices, and reliable pulse quality.",
  },
];

const qualitySteps = [
  {
    number: "01",
    title: "Procure",
    description: "High-protein raw pulses are carefully inspected and sourced from trusted fields.",
  },
  {
    number: "02",
    title: "Clean & Grade",
    description: "Advanced pre-cleaners, destoners, and optical sortex sorters ensure 99.9% purity.",
  },
  {
    number: "03",
    title: "Process & Dehull",
    description: "Gentle dehusking and split-milling maintain natural nutrients without artificial polish.",
  },
  {
    number: "04",
    title: "Pack & Deliver",
    description: "Sealed in food-grade packaging and dispatched through a dependable logistics network.",
  },
];

export default function WhyChooseUsPage() {
  return (
    <main className="bg-[#faf9f3] text-[#1b301c]">

      {/* =========================================================
          COMPACT PAGE INTRO
      ========================================================= */}

      <section className="relative overflow-hidden border-b border-[#e4dfd0] bg-[#f1ead7] pt-[105px]">
        {/* Decorative wheat */}
        <div className="pointer-events-none absolute -left-16 bottom-[-70px] opacity-[0.045]">
          <Wheat
            size={280}
            strokeWidth={0.7}
            className="rotate-[-18deg] text-[#285c24]"
          />
        </div>

        <div className="pointer-events-none absolute -right-16 top-12 opacity-[0.045]">
          <Wheat
            size={280}
            strokeWidth={0.7}
            className="rotate-[18deg] text-[#285c24]"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[1250px] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-[68px]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-[850px] text-center"
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-9 bg-[#b59438]" />

              <div className="flex items-center gap-2">
                <Wheat
                  size={14}
                  strokeWidth={1.4}
                  className="text-[#b59438]"
                />

                <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#285c24]">
                  Why Choose Us
                </span>
              </div>

              <span className="h-px w-9 bg-[#b59438]" />
            </div>

            <h1 className="font-serif text-[38px] font-bold leading-[1.05] tracking-[-0.035em] text-[#173518] sm:text-[48px] lg:text-[56px]">
              Purity Built on
              <span className="text-[#285c24]"> Trust</span>
            </h1>

            <p className="mx-auto mt-4 max-w-[680px] text-[13px] leading-6 text-[#5f655c] sm:text-[14px]">
              From farm-sourced legumes to sortex-cleaned, unpolished dals, every step
              of our processing focuses on natural nutrition, zero adulteration, and dependable service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================= */}

      <section className="bg-white">
        <div className="mx-auto max-w-[1250px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-9 bg-[#b59438]" />

                <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#285c24]">
                  Our Approach
                </span>
              </div>

              <h2 className="font-serif text-[32px] font-bold leading-tight text-[#18351a] sm:text-[40px]">
                Nutritious Pulses Start With
                <span className="text-[#285c24]"> Good Practices</span>
              </h2>

              <p className="mt-5 text-[13px] leading-6 text-[#62675f]">
                We believe true quality is not achieved at just one phase of
                handling. It comes from paying attention to every stage of
                the journey — from direct farm sourcing and optical sortex cleaning to
                controlled dehulling, lab inspection, and moisture-sealed packaging.
              </p>

              <p className="mt-4 text-[13px] leading-6 text-[#62675f]">
                Our priority is to provide unadulterated, wholesome pulses and dals that
                homes and commercial partners can count on for authentic taste, high protein,
                and uniform cooking performance.
              </p>

              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#edf3e9]">
                  <Award
                    size={19}
                    strokeWidth={1.5}
                    className="text-[#285c24]"
                  />
                </div>

                <div>
                  <p className="text-[11px] font-bold text-[#203a21]">
                    Purity First
                  </p>

                  <p className="mt-0.5 text-[10px] text-[#777b73]">
                    Naturally unpolished in every batch
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right quality points */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-[18px] border border-[#e4dfd2] bg-[#faf9f4] p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                {[
                  "Carefully selected raw legumes",
                  "Optical color-sorting technology",
                  "Consistent grain size & purity",
                  "Zero artificial colors or oil polish",
                  "Food-grade packaging standards",
                  "Dedicated bulk & wholesale support",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2
                      size={17}
                      strokeWidth={1.6}
                      className="mt-0.5 shrink-0 text-[#285c24]"
                    />

                    <span className="text-[11px] leading-5 text-[#555c54]">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY CHOOSE US
      ========================================================= */}

      <section className="bg-[#f4f1e6]">
        <div className="mx-auto max-w-[1250px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-[700px] text-center"
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-9 bg-[#b59438]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#285c24]">
                What Sets Us Apart
              </span>

              <span className="h-px w-9 bg-[#b59438]" />
            </div>

            <h2 className="font-serif text-[32px] font-bold text-[#18351a] sm:text-[40px]">
              Why Buyers & Kitchens Choose Us
            </h2>

            <p className="mt-3 text-[12px] leading-6 text-[#666b63] sm:text-[13px]">
              A steadfast commitment to unpolished quality, hygienic handling, and
              dependable supply chains guides everything we process.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {strengths.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  className="group rounded-[15px] border border-[#e1dccd] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#cdbb7b] hover:shadow-[0_12px_30px_rgba(40,60,30,0.07)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#edf3e9] transition-colors duration-300 group-hover:bg-[#e5efdf]">
                      <Icon
                        size={20}
                        strokeWidth={1.45}
                        className="text-[#285c24]"
                      />
                    </div>

                    <div>
                      <h3 className="font-serif text-[19px] font-bold text-[#213721]">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-[10px] leading-5 text-[#6a7068]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          QUALITY PROCESS
      ========================================================= */}

      <section className="bg-white">
        <div className="mx-auto max-w-[1250px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

          <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-4 flex items-center gap-3">
                <Wheat
                  size={16}
                  strokeWidth={1.4}
                  className="text-[#b59438]"
                />

                <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#285c24]">
                  Our Quality Journey
                </span>
              </div>

              <h2 className="font-serif text-[32px] font-bold leading-tight text-[#18351a] sm:text-[40px]">
                From Harvest to
                <span className="text-[#285c24]"> Wholesome Dal</span>
              </h2>

              <p className="mt-4 max-w-[450px] text-[12px] leading-6 text-[#666b63]">
                Every processing stage has a clear purpose. Our multi-tier cleaning and
                grading cycle retains natural protein, protects seed vitality, and delivers
                spotless, unpolished grains ready for cooking.
              </p>
            </motion.div>

            {/* Steps */}
            <div className="grid gap-3 sm:grid-cols-2">
              {qualitySteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.07,
                  }}
                  className="rounded-[14px] border border-[#e5e1d7] bg-[#faf9f5] p-5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-[25px] font-bold text-[#285c24]/20">
                      {step.number}
                    </span>

                    <div className="h-2 w-2 rounded-full bg-[#b59438]" />
                  </div>

                  <h3 className="mt-2 font-serif text-[19px] font-bold text-[#213721]">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-[10px] leading-5 text-[#6c7169]">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom separator */}
      <div className="h-px bg-[#dcd7c8]" />
    </main>
  );
}