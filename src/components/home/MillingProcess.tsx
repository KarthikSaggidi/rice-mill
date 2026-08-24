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
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Paddy Selection",
    description:
      "Carefully selected paddy is sourced based on quality, maturity and grain characteristics.",
    icon: Sprout,
  },
  {
    number: "02",
    title: "Cleaning",
    description:
      "The harvested paddy is thoroughly cleaned to remove dust, stones, husk and other impurities.",
    icon: SearchCheck,
  },
  {
    number: "03",
    title: "Modern Milling",
    description:
      "Advanced milling equipment processes the paddy with precision while protecting grain quality.",
    icon: Settings2,
  },
  {
    number: "04",
    title: "Quality Inspection",
    description:
      "Rice is inspected for grain appearance, consistency, cleanliness and overall quality.",
    icon: CheckCircle2,
  },
  {
    number: "05",
    title: "Packing & Dispatch",
    description:
      "Finished rice is carefully packed and prepared for safe delivery to customers and distributors.",
    icon: PackageCheck,
  },
];

export default function MillingProcess() {
  return (
    <section className="relative overflow-hidden bg-[#f4f1e5]">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-24 top-24 opacity-[0.025]">
        <Wheat
          size={340}
          strokeWidth={0.7}
          className="rotate-[-18deg] text-[#285c24]"
        />
      </div>

      <div className="pointer-events-none absolute -right-24 bottom-10 opacity-[0.025]">
        <Wheat
          size={340}
          strokeWidth={0.7}
          className="rotate-[18deg] text-[#285c24]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:px-12 lg:py-[100px]">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mx-auto max-w-[760px] text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#b59438]" />

            <div className="flex items-center gap-2">
              <Factory
                size={14}
                strokeWidth={1.4}
                className="text-[#b59438]"
              />

              <span className="text-[10px] font-bold uppercase tracking-[0.27em] text-[#285c24]">
                Our Milling Process
              </span>
            </div>

            <span className="h-px w-10 bg-[#b59438]" />
          </div>

          <h2 className="font-serif text-[39px] font-bold leading-[1.08] tracking-[-0.035em] text-[#172c18] sm:text-[47px] lg:text-[53px]">
            From Paddy to
            <span className="text-[#285c24]"> Perfect Grain</span>
          </h2>

          <p className="mx-auto mt-5 max-w-[650px] text-[13px] leading-6 text-[#656a62] sm:text-[14px]">
            Every grain passes through a carefully controlled process where
            traditional knowledge meets modern milling technology.
          </p>
        </motion.div>

        {/* =====================================================
            PROCESS TIMELINE
        ===================================================== */}

        <div className="relative mx-auto mt-14 max-w-[1180px]">

          {/* Desktop connecting line */}
          <div className="absolute left-[10%] right-[10%] top-[29px] hidden h-px bg-[#cfc6a8] lg:block" />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5 lg:gap-5">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.1,
                  }}
                  className="relative text-center"
                >
                  {/* Number / icon */}
                  <div className="relative z-10 mx-auto flex h-[60px] w-[60px] items-center justify-center rounded-full border border-[#cdbb7b] bg-[#f4f1e5]">
                    <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#285c24] shadow-[0_7px_15px_rgba(40,92,36,0.14)]">
                      <Icon
                        size={20}
                        strokeWidth={1.5}
                        className="text-[#e4c95d]"
                      />
                    </div>
                  </div>

                  {/* Number */}
                  <div className="mt-4 text-[9px] font-bold uppercase tracking-[0.2em] text-[#b08b30]">
                    Step {step.number}
                  </div>

                  {/* Title */}
                  <h3 className="mt-2 font-serif text-[20px] font-bold text-[#1e341f]">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mx-auto mt-2 max-w-[205px] text-[10px] leading-5 text-[#6d716a]">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            BOTTOM FEATURE
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="mx-auto mt-14 max-w-[1000px] overflow-hidden rounded-[18px] border border-[#d8cfb2] bg-[#fffdf6]"
        >
          <div className="grid items-center lg:grid-cols-[1fr_auto]">

            <div className="p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#edf3e9]">
                  <Wheat
                    size={20}
                    strokeWidth={1.4}
                    className="text-[#285c24]"
                  />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#b08b30]">
                    Our Commitment
                  </p>

                  <h3 className="mt-1 font-serif text-[23px] font-bold text-[#1c331d]">
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

            <div className="border-t border-[#e4dece] p-5 lg:border-l lg:border-t-0 lg:px-7">
              <div className="flex items-center gap-3">
                <Factory
                  size={22}
                  strokeWidth={1.4}
                  className="text-[#285c24]"
                />

                <div>
                  <div className="font-serif text-[20px] font-bold text-[#285c24]">
                    Modern
                  </div>

                  <div className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#777b72]">
                    Processing Facility
                  </div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* CTA */}
        <div className="mt-9 flex justify-center">
          <a
            href="/about"
            className="group inline-flex items-center gap-3 rounded-xl border border-[#285c24] px-6 py-3.5 text-[11px] font-semibold text-[#285c24] transition-all duration-300 hover:bg-[#285c24] hover:text-white"
          >
            Learn More About Our Process

            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>

      {/* Separator */}
      <div className="h-px bg-[#d9d2be]" />
    </section>
  );
}