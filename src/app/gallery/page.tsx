"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Factory,
  Image as ImageIcon,
  Leaf,
  Package,
  Wheat,
} from "lucide-react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const galleryItems = [
  {
    title: "Mahadal Rice Mill",
    category: "Mill",
    image: "/images/about/rice-mill.jpg",
    description:
      "A glimpse of our rice milling and processing facility.",
    size: "large",
  },
  {
    title: "Rice Processing",
    category: "Processing",
    image: "/images/hero/rice-hero.jpg",
    description:
      "Careful processing that helps maintain the quality of every grain.",
    size: "normal",
  },
  {
    title: "Quality Rice",
    category: "Products",
    image: "/images/hero/rice-hero.jpg",
    description:
      "Quality-focused rice products prepared for our customers.",
    size: "normal",
  },
  {
    title: "Our Operations",
    category: "Mill",
    image: "/images/about/rice-mill.jpg",
    description:
      "Our operations are focused on consistency and dependable output.",
    size: "normal",
  },
  {
    title: "From Paddy to Rice",
    category: "Processing",
    image: "/images/hero/rice-hero.jpg",
    description:
      "Every stage contributes to the quality of the final product.",
    size: "normal",
  },
  {
    title: "Mahadal Products",
    category: "Products",
    image: "/images/about/rice-mill.jpg",
    description:
      "Our packaged products represent our focus on quality and trust.",
    size: "large",
  },
];

const categories = [
  {
    title: "Our Mill",
    icon: Factory,
    description: "Our facility and milling operations.",
  },
  {
    title: "Processing",
    icon: Wheat,
    description: "The journey from paddy to rice.",
  },
  {
    title: "Products",
    icon: Package,
    description: "Our rice products and packaging.",
  },
  {
    title: "Quality",
    icon: Leaf,
    description: "Our focus on quality and consistency.",
  },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#f8f6ed] text-[#173b1b]">
      <Navbar />

      <main>
        {/* =====================================================
            HERO
        ===================================================== */}
        <section className="relative overflow-hidden bg-[#173f1b] pt-32">
          {/* Decorative elements */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#d3b34d]/20" />

          <div className="pointer-events-none absolute right-20 top-20 h-52 w-52 rounded-full border border-[#d3b34d]/10" />

          <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#d3b34d]/5 blur-3xl" />

          <Wheat
            size={170}
            strokeWidth={0.6}
            className="pointer-events-none absolute right-[10%] top-[35%] hidden text-[#d3b34d]/10 lg:block"
          />

          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              className="max-w-3xl"
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#d3b34d]" />

                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#d3b34d]">
                  Mahadal Gallery
                </span>
              </div>

              <h1 className="font-serif text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
                See Our
                <span className="block text-[#d3b34d]">
                  Journey.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                Explore Mahadal through our mill, processing operations,
                products and the work that goes into bringing quality rice
                to our customers.
              </p>
            </motion.div>
          </div>

          <div className="h-10 bg-[#f8f6ed] [clip-path:ellipse(65%_100%_at_50%_100%)]" />
        </section>

        {/* =====================================================
            INTRO
        ===================================================== */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid items-end gap-8 md:grid-cols-2">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#c5a43b]" />

                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#63702c]">
                    A Look Inside
                  </span>
                </div>

                <h2 className="font-serif text-4xl font-bold leading-tight text-[#173b1b] sm:text-5xl">
                  Where Quality
                  <span className="block text-[#63702c]">
                    Takes Shape.
                  </span>
                </h2>
              </div>

              <p className="max-w-xl text-sm leading-7 text-[#697068] md:justify-self-end">
                From the rice mill to the final product, every stage plays an
                important role. Browse through our gallery to get a closer
                look at Mahadal and our work.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            CATEGORY CARDS
        ===================================================== */}
        <section className="pb-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.06,
                    }}
                    className="group rounded-3xl border border-[#ddd8c8] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#c9af4e] hover:shadow-[0_18px_40px_rgba(25,55,25,0.07)]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf3e8] transition-colors group-hover:bg-[#173f1b]">
                      <Icon
                        size={22}
                        className="text-[#28622d] group-hover:text-[#d3b34d]"
                      />
                    </div>

                    <h3 className="mt-5 font-serif text-xl font-bold text-[#173b1b]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#70766e]">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            GALLERY
        ===================================================== */}
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            {/* Section heading */}
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <ImageIcon
                    size={18}
                    className="text-[#b0922f]"
                  />

                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#63702c]">
                    Explore Mahadal
                  </span>
                </div>

                <h2 className="font-serif text-4xl font-bold text-[#173b1b] sm:text-5xl">
                  Our Gallery
                </h2>
              </div>

              <p className="max-w-md text-sm leading-7 text-[#697068]">
                A visual look at our facility, processing journey and
                products.
              </p>
            </div>

            {/* Gallery grid */}
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {galleryItems.map((item, index) => (
                <motion.div
                  key={`${item.title}-${index}`}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.1,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  className={`group relative overflow-hidden rounded-[1.75rem] ${
                    item.size === "large"
                      ? "md:row-span-2 lg:row-span-2"
                      : ""
                  }`}
                >
                  <div
                    className={`relative w-full ${
                      item.size === "large"
                        ? "h-[500px]"
                        : "h-[310px]"
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#102e15]/90 via-[#173f1b]/10 to-transparent opacity-90" />

                    {/* Category */}
                    <div className="absolute left-5 top-5">
                      <span className="rounded-full border border-white/20 bg-[#173f1b]/70 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#e4cb72] backdrop-blur-md">
                        {item.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-serif text-2xl font-bold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-2 max-w-md text-xs leading-6 text-white/65">
                        {item.description}
                      </p>
                    </div>

                    {/* Hover icon */}
                    <div className="absolute right-5 top-5 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white/10 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <ArrowRight
                        size={17}
                        className="-rotate-45 text-white"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            PROCESS STRIP
        ===================================================== */}
        <section className="bg-[#f0ede2] py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#c5a43b]" />

                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#63702c]">
                    Our Journey
                  </span>
                </div>

                <h2 className="font-serif text-4xl font-bold leading-tight text-[#173b1b] sm:text-5xl">
                  From Field
                  <span className="block text-[#63702c]">
                    to Family.
                  </span>
                </h2>

                <p className="mt-5 text-sm leading-7 text-[#697068]">
                  The journey of rice involves many careful stages. Our
                  approach is focused on maintaining quality and consistency
                  throughout that journey.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  {
                    number: "01",
                    title: "Paddy",
                    icon: Wheat,
                  },
                  {
                    number: "02",
                    title: "Milling",
                    icon: Factory,
                  },
                  {
                    number: "03",
                    title: "Rice",
                    icon: Package,
                  },
                ].map((step) => {
                  const Icon = step.icon;

                  return (
                    <div
                      key={step.number}
                      className="rounded-3xl border border-[#dcd7c8] bg-white p-6"
                    >
                      <span className="text-xs font-bold text-[#b0922f]">
                        {step.number}
                      </span>

                      <div className="mt-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#173f1b]">
                        <Icon
                          size={22}
                          className="text-[#d3b34d]"
                        />
                      </div>

                      <h3 className="mt-5 font-serif text-xl font-bold text-[#173b1b]">
                        {step.title}
                      </h3>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CTA
        ===================================================== */}
        <section className="bg-[#173f1b] py-20 sm:py-24">
          <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#d3b34d]/30">
                <Leaf
                  size={24}
                  className="text-[#d3b34d]"
                />
              </div>

              <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-[#d3b34d]">
                Mahadal
              </p>

              <h2 className="mt-4 font-serif text-4xl font-bold text-white sm:text-5xl">
                Quality you can
                <span className="text-[#d3b34d]">
                  {" "}
                  trust.
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/60">
                Want to know more about Mahadal and our products? Get in
                touch with our team.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#d3b34d] px-7 py-3.5 text-sm font-bold text-[#173b1b] transition-all duration-300 hover:-translate-y-1 hover:bg-[#e0c45e]"
              >
                Contact Us
                <ArrowRight size={17} />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}