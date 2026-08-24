"use client";

import { motion } from "framer-motion";
import {
  Award,
  Factory,
  Users,
  Handshake,
} from "lucide-react";

const stats = [
  {
    value: "25+",
    label: "Years Experience",
    icon: Award,
  },
  {
    value: "500+",
    label: "Tons Processed Monthly",
    icon: Factory,
  },
  {
    value: "1000+",
    label: "Happy Customers",
    icon: Users,
  },
  {
    value: "20+",
    label: "Distributors & Partners",
    icon: Handshake,
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-[#1b5017]">
      {/* Subtle background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-20 -top-32 h-[320px] w-[320px] rounded-full border border-[#d7b84d]/10" />

        <div className="absolute -bottom-32 -left-20 h-[280px] w-[280px] rounded-full border border-[#d7b84d]/[0.07]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">

        <div className="flex min-h-[175px] items-center py-8 lg:min-h-[190px]">

          {/* Left label */}
          <div className="hidden w-[190px] shrink-0 lg:block">
            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#d9bf66]">
              Our Journey
            </p>

            <h3 className="mt-2 font-serif text-[23px] font-bold leading-tight text-white">
              Growing With
              <br />
              Every Grain
            </h3>
          </div>

          {/* Divider */}
          <div className="mr-8 hidden h-[75px] w-px bg-white/15 lg:block" />

          {/* Stats */}
          <div className="grid w-full grid-cols-2 sm:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className={`
                    flex
                    items-center
                    justify-center
                    gap-3
                    px-3
                    sm:px-4
                    ${
                      index > 0
                        ? "border-l border-white/10"
                        : ""
                    }
                  `}
                >
                  {/* Icon */}
                  <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d5b84e]/45 bg-[#174714] sm:flex">
                    <Icon
                      size={17}
                      strokeWidth={1.4}
                      className="text-[#d9bd5b]"
                    />
                  </div>

                  {/* Text */}
                  <div>
                    <div className="font-serif text-[31px] font-bold leading-none tracking-[-0.03em] text-[#e0c55e] sm:text-[36px]">
                      {stat.value}
                    </div>

                    <p className="mt-1.5 max-w-[125px] text-[9px] font-medium leading-4 text-white/65 sm:text-[10px]">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Gold bottom line */}
      <div className="h-[2px] bg-[#cfae3e]" />
    </section>
  );
}