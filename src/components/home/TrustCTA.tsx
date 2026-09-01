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
  Phone,
} from "lucide-react";

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Quality Assured",
    description:
      "Every batch is carefully inspected to maintain cleanliness, consistency and quality before dispatch.",
  },
  {
    icon: Award,
    title: "Consistent Quality",
    description:
      "Modern processing and controlled handling help us maintain dependable grain quality.",
  },
  {
    icon: Handshake,
    title: "Trusted Supply",
    description:
      "Reliable service and professional support for retailers, distributors and bulk buyers.",
  },
  {
    icon: Truck,
    title: "Reliable Delivery",
    description:
      "Careful packing and dependable order fulfilment help keep your supply moving smoothly.",
  },
];

export default function TrustCTA() {
  return (
    <section className="relative overflow-hidden bg-[#172f18]">

      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================= */}

      <div className="pointer-events-none absolute -left-28 -top-28 opacity-[0.045]">
        <Wheat
          size={370}
          strokeWidth={0.65}
          className="rotate-[-20deg] text-[#e5c75d]"
        />
      </div>

      <div className="pointer-events-none absolute -bottom-28 -right-24 opacity-[0.045]">
        <Wheat
          size={390}
          strokeWidth={0.65}
          className="rotate-[20deg] text-[#e5c75d]"
        />
      </div>

      {/* Subtle center glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[650px] -translate-x-1/2 rounded-full bg-[#285c24]/20 blur-3xl" />

      {/* =========================================================
          TRUST CONTENT
      ========================================================= */}

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 pt-20 sm:px-8 lg:px-12 lg:pt-[95px]">

        {/* =======================================================
            HEADER
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
            <span className="h-px w-10 bg-[#c8aa4d]" />

            <div className="flex items-center gap-2">
              <Wheat
                size={14}
                strokeWidth={1.4}
                className="text-[#d8bc5b]"
              />

              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#d8bc5b]">
                Why Choose Us
              </span>
            </div>

            <span className="h-px w-10 bg-[#c8aa4d]" />
          </div>

          {/* Heading */}

          <h2 className="font-serif text-[38px] font-bold leading-[1.06] tracking-[-0.035em] text-white sm:text-[47px] lg:text-[53px]">
            Quality You Can See.
            <span className="block text-[#d9bf61]">
              Trust You Can Taste.
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-5 max-w-[670px] text-[13px] leading-6 text-white/60 sm:text-[14px]">
            We believe good rice starts with good practices. From sourcing
            quality paddy to carefully processing, inspecting and packing
            every grain, quality remains at the heart of what we do.
          </p>
        </motion.div>

        {/* =======================================================
            TRUST CARDS
        ======================================================= */}

        <div className="mx-auto mt-12 grid max-w-[1140px] gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {trustPoints.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[16px]
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
                {/* Top accent */}

                <div
                  className="
                    absolute
                    left-0
                    top-0
                    h-[2px]
                    w-0
                    bg-[#d9bf61]
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />

                {/* Icon */}

                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d1b654]/25 bg-[#d1b654]/10">
                  <Icon
                    size={19}
                    strokeWidth={1.45}
                    className="text-[#d9bf61]"
                  />
                </div>

                {/* Title */}

                <h3 className="mt-4 font-serif text-[19px] font-bold text-white">
                  {item.title}
                </h3>

                {/* Description */}

                <p className="mt-2 min-h-[50px] text-[10px] leading-5 text-white/50">
                  {item.description}
                </p>

                {/* Commitment */}

                <div className="mt-5 flex items-center gap-1.5 border-t border-white/10 pt-4">
                  <CheckCircle2
                    size={13}
                    strokeWidth={1.8}
                    className="text-[#d9bf61]"
                  />

                  <span className="text-[9px] font-semibold uppercase tracking-[0.13em] text-white/50">
                    Our Commitment
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* =======================================================
            SMALL TRUST STATEMENT
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mx-auto mt-9 flex max-w-[700px] items-center justify-center gap-3 text-center"
        >
          <span className="hidden h-px flex-1 bg-white/10 sm:block" />

          <div className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/40">
            <Wheat
              size={13}
              strokeWidth={1.4}
              className="text-[#d9bf61]"
            />

            From carefully selected paddy to every finished grain
          </div>

          <span className="hidden h-px flex-1 bg-white/10 sm:block" />
        </motion.div>
      </div>

      {/* =========================================================
          CTA AREA
      ========================================================= */}

      <div className="relative z-10 mx-auto mt-16 max-w-[1400px] px-5 pb-20 sm:px-8 lg:px-12 lg:pb-[95px]">

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="
            relative
            overflow-hidden
            rounded-[22px]
            border
            border-[#d1b654]/25
            bg-[#214b20]
            shadow-[0_20px_55px_rgba(0,0,0,0.16)]
          "
        >
          {/* =====================================================
              CTA DECORATION
          ===================================================== */}

          <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full border border-[#d9bf61]/10" />

          <div className="pointer-events-none absolute -right-2 -top-16 h-48 w-48 rounded-full border border-[#d9bf61]/10" />

          <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full border border-white/5" />

          {/* =====================================================
              CTA CONTENT
          ===================================================== */}

          <div className="relative z-10 flex flex-col gap-8 px-6 py-10 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-14 lg:py-12">

            {/* Text */}

            <div className="max-w-[720px]">

              <div className="mb-3 flex items-center gap-2">
                <Wheat
                  size={15}
                  strokeWidth={1.4}
                  className="text-[#d9bf61]"
                />

                <span className="text-[9px] font-bold uppercase tracking-[0.23em] text-[#d9bf61]">
                  Let's Work Together
                </span>
              </div>

              <h3 className="font-serif text-[30px] font-bold leading-[1.12] text-white sm:text-[38px]">
                Looking for Quality Rice
                <span className="text-[#d9bf61]">
                  {" "}for Your Business?
                </span>
              </h3>

              <p className="mt-4 max-w-[620px] text-[11px] leading-5 text-white/60 sm:text-[12px]">
                Get in touch with our team for product information, bulk
                requirements, pricing and reliable supply enquiries.
              </p>

              {/* Trust mini points */}

              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                <div className="flex items-center gap-1.5 text-[9px] font-medium text-white/55">
                  <CheckCircle2
                    size={13}
                    className="text-[#d9bf61]"
                  />
                  Quality Products
                </div>

                <div className="flex items-center gap-1.5 text-[9px] font-medium text-white/55">
                  <CheckCircle2
                    size={13}
                    className="text-[#d9bf61]"
                  />
                  Bulk Orders
                </div>

                <div className="flex items-center gap-1.5 text-[9px] font-medium text-white/55">
                  <CheckCircle2
                    size={13}
                    className="text-[#d9bf61]"
                  />
                  Reliable Supply
                </div>
              </div>
            </div>

            {/* =================================================
                CTA BUTTONS
            ================================================= */}

            <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col xl:flex-row">

              {/* Contact */}

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
                  hover:shadow-[0_12px_25px_rgba(0,0,0,0.18)]
                "
              >
                Contact Us

                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              {/* Products */}

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
                  hover:bg-white/[0.06]
                "
              >
                Explore Products
              </a>
            </div>
          </div>
        </motion.div>

        {/* =======================================================
            CONTACT LINE
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-7 flex justify-center"
        >
          <a
            href="tel:+919876543210"
            className="
              group
              flex
              items-center
              gap-2
              text-[10px]
              font-medium
              text-white/45
              transition-colors
              duration-200
              hover:text-[#d9bf61]
            "
          >
            <Phone
              size={13}
              strokeWidth={1.5}
            />

            Speak with our team:
            <span className="font-semibold text-white/60 group-hover:text-[#d9bf61]">
              +91 98765 43210
            </span>
          </a>
        </motion.div>
      </div>

      {/* =========================================================
          BOTTOM SEPARATOR
      ========================================================= */}

      <div className="h-[3px] bg-[#285c24]" />
    </section>
  );
}