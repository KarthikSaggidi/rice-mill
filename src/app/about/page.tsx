"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Factory,
  Handshake,
  Leaf,
  ShieldCheck,
  Wheat,
} from "lucide-react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const values = [
  {
    icon: Wheat,
    title: "Quality First",
    text: "We focus on maintaining quality throughout the journey, from the selection of paddy to the final packaged rice.",
  },
  {
    icon: ShieldCheck,
    title: "Consistency",
    text: "Our approach is built around careful processing and attention to detail to deliver consistent products.",
  },
  {
    icon: Handshake,
    title: "Trust",
    text: "We believe long-term relationships are built through dependable products, honest communication and reliable service.",
  },
  {
    icon: Leaf,
    title: "Responsible Approach",
    text: "We value careful handling of agricultural products and strive to maintain a responsible approach to our operations.",
  },
];

const journey = [
  {
    number: "01",
    title: "Paddy Selection",
    text: "Carefully selected raw material forms the foundation of a quality rice product.",
  },
  {
    number: "02",
    title: "Processing",
    text: "The paddy goes through systematic milling and processing with attention to quality.",
  },
  {
    number: "03",
    title: "Cleaning & Sorting",
    text: "Cleaning and sorting help us maintain the desired consistency in the finished product.",
  },
  {
    number: "04",
    title: "Packaging",
    text: "The finished rice is packed carefully and prepared for distribution and customers.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f8f6ed] text-[#173b1b]">
      <Navbar />

      <main>
        {/* =====================================================
            HERO
        ===================================================== */}
        <section className="relative overflow-hidden bg-[#173f1b] pt-32">
          {/* Decorative circles */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#d3b34d]/20" />

          <div className="pointer-events-none absolute -right-12 top-16 h-64 w-64 rounded-full border border-[#d3b34d]/10" />

          <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[#d3b34d]/5 blur-3xl" />

          <Wheat
            size={190}
            strokeWidth={0.7}
            className="pointer-events-none absolute right-[8%] top-[35%] hidden text-[#d3b34d]/10 lg:block"
          />

          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#d3b34d]" />

                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#d3b34d]">
                  About Mahadal
                </span>
              </div>

              <h1 className="font-serif text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
                Rooted in Rice.
                <span className="block text-[#d3b34d]">
                  Built on Trust.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                Mahadal is a rice milling business focused on quality,
                consistency and dependable service. We bring together careful
                processing and a commitment to delivering rice products our
                customers can trust.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-full bg-[#d3b34d] px-7 py-3.5 text-sm font-bold text-[#173b1b] transition-all duration-300 hover:-translate-y-1 hover:bg-[#e0c45e]"
                >
                  Get in Touch
                  <ArrowRight size={17} />
                </Link>

                <Link
                  href="/gallery"
                  className="inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:border-[#d3b34d] hover:text-[#d3b34d]"
                >
                  View Our Gallery
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Bottom transition */}
          <div className="h-10 bg-[#f8f6ed] [clip-path:ellipse(65%_100%_at_50%_100%)]" />
        </section>

        {/* =====================================================
            COMPANY INTRODUCTION
        ===================================================== */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid items-center gap-14 lg:grid-cols-2">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="relative overflow-hidden rounded-[2rem]">
                  <Image
                    src="/images/about/rice-mill.jpg"
                    alt="Mahadal rice mill"
                    width={1000}
                    height={800}
                    className="h-[480px] w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#173f1b]/55 via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-[#173f1b]/85 px-5 py-4 backdrop-blur-md">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#d3b34d]">
                        <Factory
                          size={20}
                          className="text-[#173b1b]"
                        />
                      </div>

                      <div>
                        <p className="text-sm font-bold text-white">
                          Mahadal
                        </p>

                        <p className="text-xs text-white/60">
                          Rice Milling & Processing
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative block */}
                <div className="absolute -bottom-5 -right-5 -z-10 h-28 w-28 rounded-full bg-[#d3b34d]/20" />
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#c5a43b]" />

                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#63702c]">
                    Who We Are
                  </span>
                </div>

                <h2 className="font-serif text-4xl font-bold leading-tight text-[#173b1b] sm:text-5xl">
                  Bringing Care to
                  <span className="block text-[#63702c]">
                    Every Grain.
                  </span>
                </h2>

                <p className="mt-6 text-[15px] leading-8 text-[#62685f]">
                  Rice is more than a staple food. It is part of everyday
                  life, family traditions and communities. At Mahadal, we
                  understand the importance of delivering a product that
                  customers can depend on.
                </p>

                <p className="mt-4 text-[15px] leading-8 text-[#62685f]">
                  Our focus is on careful processing, quality-conscious
                  handling and dependable packaging so that our rice products
                  reach customers with the consistency they expect.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    "Quality-focused rice processing",
                    "Careful handling and sorting",
                    "Consistent product standards",
                    "Customer-focused service",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2
                        size={19}
                        className="shrink-0 text-[#2e6a31]"
                      />

                      <span className="text-sm font-semibold text-[#3f473e]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =====================================================
            MISSION / VISION
        ===================================================== */}
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
                className="relative overflow-hidden rounded-[2rem] bg-[#173f1b] p-8 sm:p-10"
              >
                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-[#d3b34d]/15" />

                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d3b34d]">
                    <Wheat
                      size={26}
                      className="text-[#173b1b]"
                    />
                  </div>

                  <p className="mt-7 text-xs font-bold uppercase tracking-[0.25em] text-[#d3b34d]">
                    Our Mission
                  </p>

                  <h3 className="mt-3 font-serif text-3xl font-bold text-white">
                    Delivering rice with care and consistency.
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-white/65">
                    Our mission is to focus on quality at every stage of rice
                    processing while building dependable relationships with
                    customers and business partners.
                  </p>
                </div>
              </motion.div>

              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.1 }}
                className="relative overflow-hidden rounded-[2rem] border border-[#ddd8c8] bg-[#f8f6ed] p-8 sm:p-10"
              >
                <div className="absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-[#d3b34d]/10" />

                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#173f1b]">
                    <Leaf
                      size={26}
                      className="text-[#d3b34d]"
                    />
                  </div>

                  <p className="mt-7 text-xs font-bold uppercase tracking-[0.25em] text-[#63702c]">
                    Our Vision
                  </p>

                  <h3 className="mt-3 font-serif text-3xl font-bold text-[#173b1b]">
                    Growing through quality and trust.
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-[#666d64]">
                    We aim to build Mahadal as a trusted name in rice by
                    continuously improving our processes and creating
                    long-lasting relationships.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =====================================================
            VALUES
        ===================================================== */}
        <section className="bg-[#f0ede2] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-5 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-[#c5a43b]" />

                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#63702c]">
                  What Guides Us
                </span>

                <span className="h-px w-10 bg-[#c5a43b]" />
              </div>

              <h2 className="font-serif text-4xl font-bold text-[#173b1b] sm:text-5xl">
                Our Core Values
              </h2>

              <p className="mt-5 text-sm leading-7 text-[#686e65] sm:text-base">
                The principles that shape the way we work and the way we
                serve our customers.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => {
                const Icon = value.icon;

                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.07,
                    }}
                    className="group rounded-3xl border border-[#ddd8c8] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#cbb35a] hover:shadow-[0_18px_40px_rgba(25,55,25,0.08)]"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#edf3e8] transition-colors duration-300 group-hover:bg-[#173f1b]">
                      <Icon
                        size={24}
                        strokeWidth={1.8}
                        className="text-[#28622d] transition-colors group-hover:text-[#d3b34d]"
                      />
                    </div>

                    <h3 className="mt-6 font-serif text-xl font-bold text-[#173b1b]">
                      {value.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#687068]">
                      {value.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            OUR PROCESS
        ===================================================== */}
        <section className="bg-[#f8f6ed] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid items-center gap-12 lg:grid-cols-[0.75fr_1.25fr]">
              {/* Heading */}
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65 }}
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#c5a43b]" />

                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#63702c]">
                    How We Work
                  </span>
                </div>

                <h2 className="font-serif text-4xl font-bold leading-tight text-[#173b1b] sm:text-5xl">
                  From Paddy
                  <span className="block text-[#63702c]">
                    to Product.
                  </span>
                </h2>

                <p className="mt-6 max-w-lg text-[15px] leading-8 text-[#62685f]">
                  We believe every stage matters. Our process focuses on
                  maintaining quality and consistency from the beginning to
                  the final packaged product.
                </p>

                <Link
                  href="/why-choose-us"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#28622d] transition-colors hover:text-[#b0922f]"
                >
                  Why Choose Mahadal
                  <ArrowRight size={17} />
                </Link>
              </motion.div>

              {/* Process */}
              <div className="grid gap-4 sm:grid-cols-2">
                {journey.map((item, index) => (
                  <motion.div
                    key={item.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.07,
                    }}
                    className="relative overflow-hidden rounded-3xl border border-[#ddd8c8] bg-white p-7"
                  >
                    <span className="absolute right-5 top-1 font-serif text-7xl font-bold text-[#f0eee6]">
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
            TRUST CTA
        ===================================================== */}
        <section className="bg-[#173f1b] py-20 sm:py-24">
          <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#d3b34d]/30">
                <Handshake
                  size={28}
                  className="text-[#d3b34d]"
                />
              </div>

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.25em] text-[#d3b34d]">
                Let&apos;s Build a Relationship
              </p>

              <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl">
                Looking for dependable
                <span className="block text-[#d3b34d]">
                  rice products?
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
                Get in touch with Mahadal to learn more about our products,
                business and services.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#d3b34d] px-7 py-3.5 text-sm font-bold text-[#173b1b] transition-all hover:-translate-y-1 hover:bg-[#e0c45e]"
                >
                  Contact Mahadal
                  <ArrowRight size={17} />
                </Link>

                <Link
                  href="/gallery"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 px-7 py-3.5 text-sm font-bold text-white transition-all hover:border-[#d3b34d] hover:text-[#d3b34d]"
                >
                  Explore Gallery
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}