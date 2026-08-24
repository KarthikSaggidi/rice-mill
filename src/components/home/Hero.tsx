"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Leaf,
  Award,
  Truck,
  ChevronDown,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[760px] overflow-hidden bg-[#e9dfc2] pt-[105px] sm:min-h-[780px] lg:min-h-[820px]">

      {/* =========================================================
          HERO IMAGE
          
          IMPORTANT:
          Keep the same image path you are currently using if
          your existing hero image is stored somewhere else.
      ========================================================= */}

      <div className="absolute inset-0">
        <img
          src="/images/hero/rice-hero.jpg"
          alt="Rice mill and paddy fields"
          className="h-full w-full object-cover"
        />

        {/* Main overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#fff8e9]/95 via-[#fff8e9]/72 to-transparent" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-[#f5ecd5]/95 via-[#f5ecd5]/30 to-transparent" />

        {/* Subtle green tint on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#194d17]/10" />
      </div>

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div className="relative z-10 mx-auto flex min-h-[655px] max-w-[1536px] items-center px-6 pb-[135px] sm:px-10 lg:px-[72px]">

        <div className="max-w-[700px]">

          {/* Small heading */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-4 flex items-center gap-3"
          >
            <span className="h-px w-12 bg-[#b48b2b]" />

            <span className="font-serif text-[22px] italic text-[#285c24] sm:text-[27px]">
              From Our Fields
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="
              max-w-[720px]
              font-serif
              text-[55px]
              font-bold
              leading-[0.94]
              tracking-[-0.045em]
              text-[#164318]
              sm:text-[68px]
              lg:text-[82px]
              xl:text-[88px]
            "
          >
            To Your Table
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="
              mt-6
              max-w-[560px]
              text-[15px]
              leading-7
              text-[#303730]
              sm:text-[16px]
              sm:leading-7
            "
          >
            Premium quality rice, processed with advanced technology
            and delivered with purity, consistency and trust.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="/products"
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-xl
                bg-[#205719]
                px-7
                py-3.5
                text-[13px]
                font-semibold
                text-white
                shadow-[0_8px_22px_rgba(32,87,25,0.20)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#174719]
              "
            >
              Our Products

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

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
                bg-white/20
                px-7
                py-3.5
                text-[13px]
                font-semibold
                text-[#285c24]
                backdrop-blur-sm
                transition-all
                duration-300
                hover:bg-white/70
              "
            >
              Explore More

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </motion.div>
        </div>
      </div>

      {/* =========================================================
          HERO QUALITY STRIP
      ========================================================= */}

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="
          absolute
          bottom-0
          left-1/2
          z-20
          w-[calc(100%-32px)]
          max-w-[1380px]
          -translate-x-1/2
          rounded-t-[3px]
          border
          border-[#e3d8b8]
          bg-[#fbf3db]/95
          shadow-[0_-5px_25px_rgba(50,50,20,0.07)]
          backdrop-blur-md
        "
      >
        <div className="grid grid-cols-1 divide-y divide-[#d8ccb0] sm:grid-cols-3 sm:divide-x sm:divide-y-0">

          {/* Natural */}
          <div className="flex items-center gap-4 px-6 py-5 sm:px-7">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#285c24]/40">
              <Leaf
                size={20}
                strokeWidth={1.4}
                className="text-[#285c24]"
              />
            </div>

            <div>
              <h3 className="text-[12px] font-bold text-[#214d20]">
                100% Natural
              </h3>

              <p className="mt-1 text-[10px] text-[#67695f]">
                Pure & Chemical Free
              </p>
            </div>
          </div>

          {/* Quality */}
          <div className="flex items-center gap-4 px-6 py-5 sm:px-7">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#285c24]/40">
              <Award
                size={20}
                strokeWidth={1.4}
                className="text-[#285c24]"
              />
            </div>

            <div>
              <h3 className="text-[12px] font-bold text-[#214d20]">
                Premium Quality
              </h3>

              <p className="mt-1 text-[10px] text-[#67695f]">
                Carefully Processed
              </p>
            </div>
          </div>

          {/* Delivery */}
          <div className="flex items-center gap-4 px-6 py-5 sm:px-7">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#285c24]/40">
              <Truck
                size={20}
                strokeWidth={1.4}
                className="text-[#285c24]"
              />
            </div>

            <div>
              <h3 className="text-[12px] font-bold text-[#214d20]">
                Timely Delivery
              </h3>

              <p className="mt-1 text-[10px] text-[#67695f]">
                Fast & Reliable
              </p>
            </div>
          </div>

        </div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-3 left-1/2 z-30 hidden -translate-x-1/2 flex-col items-center text-[#285c24]/60 lg:flex">
        <span className="mb-1 text-[8px] font-semibold uppercase tracking-[0.25em]">
          Scroll
        </span>

        <ChevronDown size={14} className="animate-bounce" />
      </div>

      {/* Bottom green line */}
      <div className="absolute bottom-0 left-0 right-0 z-30 h-[3px] bg-[#285c24]" />
    </section>
  );
}