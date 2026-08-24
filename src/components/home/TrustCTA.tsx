"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Handshake,
  ShieldCheck,
  Truck,
  Wheat,
} from "lucide-react";

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Quality Assured",
    description: "Every batch is carefully inspected before dispatch.",
  },
  {
    icon: Award,
    title: "Consistent Quality",
    description: "Modern processing helps maintain grain quality.",
  },
  {
    icon: Handshake,
    title: "Trusted Supply",
    description: "Reliable service for retailers and bulk buyers.",
  },
  {
    icon: Truck,
    title: "Reliable Delivery",
    description: "Careful packing and dependable order fulfilment.",
  },
];

export default function TrustCTA() {
  return (
    <section className="relative overflow-hidden bg-[#172f18]">

      {/* =========================================================
          DECORATIVE ELEMENTS
      ========================================================= */}

      <div className="pointer-events-none absolute -left-24 -top-24 opacity-[0.055]">
        <Wheat
          size={360}
          strokeWidth={0.7}
          className="rotate-[-20deg] text-[#e5c75d]"
        />
      </div>

      <div className="pointer-events-none absolute -bottom-28 -right-20 opacity-[0.055]">
        <Wheat
          size={380}
          strokeWidth={0.7}
          className="rotate-[20deg] text-[#e5c75d]"
        />
      </div>

      {/* =========================================================
          TRUST SECTION
      ========================================================= */}

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 pt-20 sm:px-8 lg:px-12 lg:pt-[90px]">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mx-auto max-w-[760px] text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#c8aa4d]" />

            <div className="flex items-center gap-2">
              <Wheat
                size={14}
                strokeWidth={1.4}
                className="text-[#d8bc5b]"
              />

              <span className="text-[10px] font-bold uppercase tracking-[0.27em] text-[#d8bc5b]">
                Why Choose Us
              </span>
            </div>

            <span className="h-px w-10 bg-[#c8aa4d]" />
          </div>

          <h2 className="font-serif text-[38px] font-bold leading-[1.08] tracking-[-0.035em] text-white sm:text-[46px] lg:text-[51px]">
            Quality You Can See.
            <span className="block text-[#d9bf61]">
              Trust You Can Taste.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[650px] text-[13px] leading-6 text-white/60 sm:text-[14px]">
            We believe good rice starts with good practices. From sourcing
            quality paddy to carefully processing and packing every grain,
            quality remains at the heart of what we do.
          </p>
        </motion.div>

        {/* =========================================================
            TRUST CARDS
        ========================================================= */}

        <div className="mx-auto mt-12 grid max-w-[1120px] gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="
                  group
                  rounded-[15px]
                  border
                  border-white/10
                  bg-white/[0.045]
                  p-5
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#d1b654]/35
                  hover:bg-white/[0.07]
                "
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d1b654]/25 bg-[#d1b654]/10">
                  <Icon
                    size={18}
                    strokeWidth={1.5}
                    className="text-[#d9bf61]"
                  />
                </div>

                <h3 className="mt-4 font-serif text-[18px] font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-[10px] leading-5 text-white/50">
                  {item.description}
                </p>

                <div className="mt-4 flex items-center gap-1.5">
                  <CheckCircle2
                    size={13}
                    strokeWidth={1.8}
                    className="text-[#d9bf61]"
                  />

                  <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-white/55">
                    Our Commitment
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* =========================================================
          CTA
      ========================================================= */}

      <div className="relative z-10 mx-auto mt-20 max-w-[1400px] px-5 pb-20 sm:px-8 lg:px-12 lg:pb-[90px]">

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            relative
            overflow-hidden
            rounded-[22px]
            border
            border-[#d1b654]/25
            bg-[#214b20]
            px-6
            py-10
            shadow-[0_20px_50px_rgba(0,0,0,0.15)]
            sm:px-10
            lg:px-14
            lg:py-12
          "
        >

          {/* CTA decorative circles */}

          <div className="pointer-events-none absolute -right-12 -top-24 h-64 w-64 rounded-full border border-[#d9bf61]/10" />

          <div className="pointer-events-none absolute -right-2 -top-14 h-44 w-44 rounded-full border border-[#d9bf61]/10" />

          <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">

            {/* Text */}

            <div className="max-w-[720px]">
              <div className="mb-3 flex items-center gap-2">
                <Wheat
                  size={15}
                  strokeWidth={1.4}
                  className="text-[#d9bf61]"
                />

                <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#d9bf61]">
                  Let's Work Together
                </span>
              </div>

              <h3 className="font-serif text-[30px] font-bold leading-tight text-white sm:text-[37px]">
                Looking for Quality Rice
                <span className="text-[#d9bf61]">
                  {" "}for Your Business?
                </span>
              </h3>

              <p className="mt-3 max-w-[620px] text-[11px] leading-5 text-white/60 sm:text-[12px]">
                Get in touch with our team for product information, bulk
                requirements, pricing and supply enquiries.
              </p>
            </div>

            {/* Buttons */}

            <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col xl:flex-row">

              <a
                href="/contact"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  bg-[#d9bf61]
                  px-6
                  py-3.5
                  text-[11px]
                  font-bold
                  text-[#173217]
                  shadow-[0_8px_20px_rgba(0,0,0,0.12)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#e5cc70]
                "
              >
                Contact Us

                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="/products"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-white/20
                  px-6
                  py-3.5
                  text-[11px]
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:border-white/40
                  hover:bg-white/5
                "
              >
                Explore Products
              </a>

            </div>
          </div>
        </motion.div>
      </div>

      {/* Separator */}

      <div className="h-px bg-white/10" />
    </section>
  );
}