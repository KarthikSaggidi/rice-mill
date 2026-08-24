"use client";

import { motion } from "framer-motion";
import {
  Leaf,
  Factory,
  ShieldCheck,
  Users,
  Wheat,
} from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Farm Fresh Paddy",
    description: "Sourced from the best farms",
  },
  {
    icon: Factory,
    title: "Advanced Milling",
    description: "Clean, modern & efficient",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description: "Tested for purity & quality",
  },
  {
    icon: Users,
    title: "Customer Satisfaction",
    description: "Your trust is our priority",
  },
];

export default function WelcomeSection() {
  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden bg-[#faf8f0]"
    >
      {/* Decorative rice graphics */}
      <div className="pointer-events-none absolute -left-20 top-8 opacity-[0.045]">
        <Wheat
          size={250}
          strokeWidth={0.7}
          className="rotate-[-18deg] text-[#8a6b25]"
        />
      </div>

      <div className="pointer-events-none absolute -right-20 top-8 opacity-[0.045]">
        <Wheat
          size={250}
          strokeWidth={0.7}
          className="rotate-[18deg] text-[#8a6b25]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-[78px]">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mx-auto max-w-[800px] text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#c5a448]" />

            <div className="flex items-center gap-2">
              <Wheat
                size={14}
                strokeWidth={1.5}
                className="text-[#b18b2c]"
              />

              <span className="text-[10px] font-bold uppercase tracking-[0.26em] text-[#285c24]">
                Welcome to Our Rice Mill
              </span>
            </div>

            <span className="h-px w-10 bg-[#c5a448]" />
          </div>

          <h2 className="font-serif text-[38px] font-bold leading-tight tracking-[-0.035em] text-[#172c18] sm:text-[46px] lg:text-[50px]">
            Quality Rice,{" "}
            <span className="text-[#285c24]">Healthy Life</span>
          </h2>

          <p className="mx-auto mt-4 max-w-[700px] text-[13px] leading-6 text-[#565c55] sm:text-[14px]">
            We are committed to providing the finest quality rice through
            modern milling techniques, strict quality control and a passion
            for perfection.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mx-auto mt-9 grid max-w-[1180px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
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
                  rounded-[13px]
                  border
                  border-[#e5dfd0]
                  bg-white
                  px-5
                  py-4
                  shadow-[0_5px_20px_rgba(40,60,30,0.04)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#d3c28d]
                  hover:shadow-[0_12px_28px_rgba(40,60,30,0.08)]
                "
              >
                <div className="absolute left-0 top-0 h-[2px] w-0 bg-[#285c24] transition-all duration-300 group-hover:w-full" />

                <div className="flex items-center gap-4">
                  <div className="flex h-[55px] w-[55px] shrink-0 items-center justify-center rounded-full bg-[#f7f6ef]">
                    <Icon
                      size={26}
                      strokeWidth={1.35}
                      className="text-[#285c24]"
                    />
                  </div>

                  <div>
                    <h3 className="text-[13px] font-bold text-[#1d291e]">
                      {feature.title}
                    </h3>

                    <p className="mt-1 text-[10px] leading-4 text-[#686d66]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}