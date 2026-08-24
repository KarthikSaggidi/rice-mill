"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
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

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const reasons = [
  {
    icon: Wheat,
    title: "Quality Rice",
    text: "We focus on carefully selected rice and paddy to deliver products with dependable quality and consistency.",
  },
  {
    icon: Factory,
    title: "Efficient Processing",
    text: "Our processing approach focuses on careful handling, cleaning, sorting and milling to maintain product quality.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Focus",
    text: "Quality is considered throughout the journey, from raw material selection to the final packaged product.",
  },
  {
    icon: PackageCheck,
    title: "Secure Packaging",
    text: "Our products are packed carefully to support cleanliness, protection and convenient handling.",
  },
  {
    icon: Leaf,
    title: "Careful Handling",
    text: "We give attention to the product at every stage to help preserve its natural characteristics.",
  },
  {
    icon: Handshake,
    title: "Customer Trust",
    text: "We believe strong business relationships are built through reliable products, communication and service.",
  },
];

const process = [
  {
    number: "01",
    title: "Selection",
    text: "Suitable rice and paddy are selected with attention to quality.",
  },
  {
    number: "02",
    title: "Processing",
    text: "The selected material goes through systematic processing and milling.",
  },
  {
    number: "03",
    title: "Sorting",
    text: "Cleaning and sorting help maintain consistency in the finished product.",
  },
  {
    number: "04",
    title: "Packaging",
    text: "Finished rice is carefully packed and prepared for customers.",
  },
];

const commitments = [
  "Quality-focused processing",
  "Careful product handling",
  "Consistent packaging",
  "Customer-focused service",
];

export default function WhyChooseUsPage() {
  return (
    <div className="min-h-screen bg-[#f8f6ed] text-[#173b1b]">
      {/* Navbar */}
      <Navbar />

      <main>
        {/* =====================================================
            HERO
        ===================================================== */}
        <section className="relative overflow-hidden bg-[#173f1b] pt-32">
          {/* Decorative circles */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#d3b34d]/20" />

          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border border-[#d3b34d]/10" />

          <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#d3b34d]/5 blur-3xl" />

          <Wheat
            className="pointer-events-none absolute right-[8%] top-[35%] hidden text-[#d3b34d]/10 lg:block"
            size={190}
            strokeWidth={0.7}
          />

          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6 flex items-center gap-3"
              >
                <span className="h-px w-10 bg-[#d3b34d]" />

                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d3b34d]">
                  Why Choose Mahadal
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.08 }}
                className="font-serif text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl"
              >
                Quality You
                <span className="block text-[#d3b34d]">
                  Can Trust.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.16 }}
                className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg"
              >
                At Mahadal, we believe good rice begins with careful
                selection, responsible processing and a commitment to
                consistent quality.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.24 }}
                className="mt-9"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-full bg-[#d3b34d] px-7 py-3.5 text-sm font-bold text-[#173b1b] transition-all duration-300 hover:-translate-y-1 hover:bg-[#e0c45e]"
                >
                  Talk to Us
                  <ArrowRight size={17} />
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Bottom wave */}
          <div className="h-10 bg-[#f8f6ed] [clip-path:ellipse(65%_100%_at_50%_100%)]" />
        </section>

        {/* =====================================================
            INTRODUCTION
        ===================================================== */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65 }}
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#c5a43b]" />

                  <span className="text-xs font-bold uppercase tracking-[0.23em] text-[#63702c]">
                    The Mahadal Difference
                  </span>
                </div>

                <h2 className="font-serif text-4xl font-bold leading-tight text-[#173b1b] sm:text-5xl">
                  More Than Rice.
                  <span className="block text-[#63702c]">
                    A Commitment to Quality.
                  </span>
                </h2>

                <p className="mt-6 text-[15px] leading-8 text-[#62685f]">
                  Mahadal is focused on delivering dependable rice products
                  through careful selection, processing, sorting and packaging.
                </p>

                <p className="mt-4 text-[15px] leading-8 text-[#62685f]">
                  We believe that quality is not just about the finished
                  product. It is about maintaining care and consistency at
                  every stage of the process.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {commitments.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2
                        size={18}
                        className="shrink-0 text-[#2e6a31]"
                      />

                      <span className="text-sm font-semibold text-[#394239]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Quality card */}
              <motion.div
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65 }}
                className="relative"
              >
                <div className="relative overflow-hidden rounded-[2rem] bg-[#173f1b] p-8 shadow-[0_25px_60px_rgba(23,63,27,0.14)] sm:p-10">
                  <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#d3b34d]/20" />

                  <div className="relative">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#d3b34d]">
                      <Award
                        size={30}
                        className="text-[#173b1b]"
                      />
                    </div>

                    <p className="mt-8 text-xs font-bold uppercase tracking-[0.25em] text-[#d3b34d]">
                      Our Promise
                    </p>

                    <h3 className="mt-3 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl">
                      Quality at
                      <span className="block text-[#d3b34d]">
                        every stage.
                      </span>
                    </h3>

                    <div className="mt-8 space-y-4">
                      {commitments.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-3 border-b border-white/10 pb-4 last:border-0 last:pb-0"
                        >
                          <CheckCircle2
                            size={18}
                            className="shrink-0 text-[#d3b34d]"
                          />

                          <span className="text-sm text-white/75">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-5 -right-5 -z-10 h-28 w-28 rounded-full bg-[#d3b34d]/20" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* =====================================================
            REASONS
        ===================================================== */}
        <section className="relative overflow-hidden bg-white py-20 sm:py-24">
          <Wheat
            className="pointer-events-none absolute -left-16 top-20 text-[#173f1b]/[0.035]"
            size={220}
            strokeWidth={0.7}
          />

          <Wheat
            className="pointer-events-none absolute -right-16 bottom-10 rotate-45 text-[#173f1b]/[0.035]"
            size={220}
            strokeWidth={0.7}
          />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-5 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-[#c5a43b]" />

                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#63702c]">
                  Our Strengths
                </span>

                <span className="h-px w-10 bg-[#c5a43b]" />
              </div>

              <h2 className="font-serif text-4xl font-bold text-[#173b1b] sm:text-5xl">
                Why Customers Choose Mahadal
              </h2>

              <p className="mt-5 text-sm leading-7 text-[#686e65] sm:text-base">
                Our approach combines quality-focused processing, careful
                handling and dependable customer service.
              </p>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;

                return (
                  <motion.div
                    key={reason.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.06,
                    }}
                    className="group rounded-3xl border border-[#e6e2d7] bg-[#fffefa] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#cbb35a] hover:shadow-[0_18px_45px_rgba(25,55,25,0.08)]"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#edf3e8] transition-colors duration-300 group-hover:bg-[#173f1b]">
                      <Icon
                        size={25}
                        strokeWidth={1.8}
                        className="text-[#28622d] transition-colors group-hover:text-[#d3b34d]"
                      />
                    </div>

                    <h3 className="mt-6 font-serif text-xl font-bold text-[#173b1b]">
                      {reason.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#687068]">
                      {reason.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            PROCESS
        ===================================================== */}
        <section className="bg-[#f0ede2] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              {/* Left */}
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65 }}
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#c5a43b]" />

                  <span className="text-xs font-bold uppercase tracking-[0.23em] text-[#63702c]">
                    Our Approach
                  </span>
                </div>

                <h2 className="font-serif text-4xl font-bold leading-tight text-[#173b1b] sm:text-5xl">
                  From Grain
                  <span className="block text-[#63702c]">
                    to Pack.
                  </span>
                </h2>

                <p className="mt-6 max-w-lg text-[15px] leading-8 text-[#62685f]">
                  We focus on maintaining care and consistency throughout the
                  rice processing journey — from selection to the final
                  product.
                </p>

                <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#d9d3c2] bg-white px-5 py-3">
                  <Wheat size={18} className="text-[#b0922f]" />

                  <span className="text-sm font-semibold text-[#3e463d]">
                    Care at every stage
                  </span>
                </div>
              </motion.div>

              {/* Process cards */}
              <div className="grid gap-4 sm:grid-cols-2">
                {process.map((item, index) => (
                  <motion.div
                    key={item.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.08,
                    }}
                    className="relative overflow-hidden rounded-3xl border border-[#ded9c9] bg-white p-7"
                  >
                    <span className="absolute right-5 top-0 font-serif text-7xl font-bold text-[#f0eee6]">
                      {item.number}
                    </span>

                    <div className="relative">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#173f1b] text-xs font-bold text-[#d3b34d]">
                        {item.number}
                      </div>

                      <h3 className="mt-6 font-serif text-xl font-bold text-[#173b1b]">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-[#697069]">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            TRUST SECTION
        ===================================================== */}
        <section className="bg-[#173f1b] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-5 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-[#d3b34d]" />

                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#d3b34d]">
                  Built on Trust
                </span>

                <span className="h-px w-10 bg-[#d3b34d]" />
              </div>

              <h2 className="font-serif text-4xl font-bold text-white sm:text-5xl">
                A Relationship Beyond the Transaction.
              </h2>

              <p className="mt-5 text-sm leading-7 text-white/60 sm:text-base">
                We aim to build lasting relationships through quality products,
                dependable service and clear communication.
              </p>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {[
                {
                  icon: Award,
                  title: "Quality Driven",
                  text: "Quality remains central to our product and processing approach.",
                },
                {
                  icon: Handshake,
                  title: "Long-Term Relationships",
                  text: "We value customers and business partners who grow with us.",
                },
                {
                  icon: Truck,
                  title: "Dependable Service",
                  text: "We strive to provide a straightforward and reliable customer experience.",
                },
              ].map((item, index) => {
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
                    className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center"
                  >
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#d3b34d]/30">
                      <Icon
                        size={24}
                        className="text-[#d3b34d]"
                      />
                    </div>

                    <h3 className="mt-5 font-serif text-xl font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white/55">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            CTA
        ===================================================== */}
        <section className="bg-[#f8f6ed] px-6 py-20 sm:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[#d3b34d]"
          >
            <div className="relative px-7 py-14 text-center sm:px-12 sm:py-16">
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full border-[25px] border-white/10" />

              <div className="relative z-10">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#405629]">
                  Choose Mahadal
                </p>

                <h2 className="mx-auto mt-4 max-w-3xl font-serif text-4xl font-bold leading-tight text-[#173b1b] sm:text-5xl">
                  Good rice deserves a good standard.
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#43563c] sm:text-base">
                  Get in touch with our team to learn more about Mahadal and
                  our rice products.
                </p>

                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 rounded-full bg-[#173f1b] px-7 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:bg-[#0e2f13]"
                  >
                    Contact Us
                    <ArrowRight size={17} />
                  </Link>

                  <Link
                    href="/gallery"
                    className="inline-flex items-center gap-3 rounded-full border border-[#173f1b]/30 px-7 py-3.5 text-sm font-bold text-[#173f1b] transition-all hover:bg-[#173f1b] hover:text-white"
                  >
                    View Gallery
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}