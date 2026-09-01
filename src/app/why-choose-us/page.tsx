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
    title: "Quality Raw Materials",
    description:
      "We carefully select quality paddy to maintain the natural taste, texture and appearance of every grain.",
  },
  {
    icon: Factory,
    title: "Modern Processing",
    description:
      "Our milling process combines modern equipment with careful handling to achieve consistent results.",
  },
  {
    icon: ShieldCheck,
    title: "Strict Quality Checks",
    description:
      "Rice is checked at different stages to maintain cleanliness, consistency and overall product quality.",
  },
  {
    icon: PackageCheck,
    title: "Careful Packing",
    description:
      "Finished products are packed carefully to protect the rice and maintain its quality until delivery.",
  },
  {
    icon: Truck,
    title: "Reliable Supply",
    description:
      "We focus on dependable order processing and timely supply for customers and business requirements.",
  },
  {
    icon: Handshake,
    title: "Customer Focus",
    description:
      "We value long-term relationships and work to understand and meet the requirements of every customer.",
  },
];

const qualitySteps = [
  {
    number: "01",
    title: "Select",
    description: "Quality paddy is carefully sourced and selected.",
  },
  {
    number: "02",
    title: "Process",
    description: "Modern milling methods are used with controlled processing.",
  },
  {
    number: "03",
    title: "Inspect",
    description: "Rice is checked for cleanliness, appearance and consistency.",
  },
  {
    number: "04",
    title: "Deliver",
    description: "Carefully packed products are prepared for reliable supply.",
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
              Quality Built on
              <span className="text-[#285c24]"> Trust</span>
            </h1>

            <p className="mx-auto mt-4 max-w-[680px] text-[13px] leading-6 text-[#5f655c] sm:text-[14px]">
              From carefully selected paddy to finished rice, every stage of
              our work is focused on quality, consistency and dependable
              service.
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
                Good Rice Starts With
                <span className="text-[#285c24]"> Good Practices</span>
              </h2>

              <p className="mt-5 text-[13px] leading-6 text-[#62675f]">
                We believe quality is not achieved at just one stage of
                production. It comes from paying attention to every part of
                the process — from sourcing and cleaning to milling,
                inspection and packing.
              </p>

              <p className="mt-4 text-[13px] leading-6 text-[#62675f]">
                Our focus is to provide rice that customers can rely on for
                its quality, consistency and everyday performance.
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
                    Quality First
                  </p>

                  <p className="mt-0.5 text-[10px] text-[#777b73]">
                    Consistency in every batch
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
                  "Carefully selected paddy",
                  "Controlled milling process",
                  "Consistent grain quality",
                  "Clean and careful handling",
                  "Reliable packing standards",
                  "Customer-focused service",
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
              Why Customers Choose Us
            </h2>

            <p className="mt-3 text-[12px] leading-6 text-[#666b63] sm:text-[13px]">
              A simple commitment to quality, careful processing and reliable
              service guides everything we do.
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
                From Paddy to
                <span className="text-[#285c24]"> Your Table</span>
              </h2>

              <p className="mt-4 max-w-[450px] text-[12px] leading-6 text-[#666b63]">
                Every stage has a purpose. Our process is designed to protect
                the quality of the grain while delivering a consistent
                finished product.
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