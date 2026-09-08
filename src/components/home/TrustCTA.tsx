"use client";

import Link from "next/link";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Handshake,
  Phone,
  ShieldCheck,
  Truck,
  Wheat,
} from "lucide-react";

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Quality Assured",
    description:
      "Every batch is carefully inspected to maintain cleanliness, consistency and dependable quality before dispatch.",
  },
  {
    icon: Award,
    title: "Consistent Quality",
    description:
      "Careful sourcing and modern processing help us maintain reliable quality across our dal and pulse range.",
  },
  {
    icon: Handshake,
    title: "Trusted Supply",
    description:
      "Reliable service and professional support for retailers, distributors and customers with regular requirements.",
  },
  {
    icon: Truck,
    title: "Reliable Delivery",
    description:
      "Careful packaging and dependable order fulfilment help ensure products reach customers safely and efficiently.",
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

        <div className="mx-auto max-w-[780px] text-center">
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
            Global Standards,
            <span className="block text-[#d9bf61]">
              Indian Heritage.
            </span>
          </h2>

          {/* Description */}

          
        </div>

        {/* =======================================================
            TRUST CARDS
        ======================================================= */}

        <div className="mx-auto mt-12 grid max-w-[1140px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
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

                
              </article>
            );
          })}
        </div>

        {/* =======================================================
            SMALL TRUST STATEMENT
        ======================================================= */}

        
      </div>

      {/* =========================================================
          CTA AREA
      ========================================================= */}

      <div className="relative z-10 mx-auto mt-16 max-w-[1400px] px-5 pb-20 sm:px-8 lg:px-12 lg:pb-[95px]">
        <div
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
                Deal with Trust,
                <span className="text-[#d9bf61]">
                  {" "}Grow with Quality.
                </span>
              </h3>
            </div>

            {/* =================================================
                CTA BUTTONS
            ================================================= */}

            <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col xl:flex-row">
              {/* Contact */}

              <Link
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
              </Link>

              {/* Products */}

              <Link
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
              </Link>
            </div>
          </div>
        </div>

        {/* =======================================================
            CONTACT LINE
        ======================================================= */}

        
      </div>

      {/* =========================================================
          BOTTOM SEPARATOR
      ========================================================= */}

      <div className="h-[3px] bg-[#285c24]" />
    </section>
  );
}