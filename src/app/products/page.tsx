import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Leaf,
  Package,
  Wheat,
} from "lucide-react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const products = [
  {
    name: "Mahadal Rice",
    category: "Premium Rice",
    image: "/images/products/mahadal-rice.jpg",
    description:
      "Carefully processed rice with a focus on quality, cleanliness and consistent grains.",
    features: [
      "Carefully processed",
      "Clean & sorted",
      "Consistent quality",
    ],
  },
  {
    name: "Mahadal Premium Rice",
    category: "Premium Selection",
    image: "/images/products/mahadal-premium.jpg",
    description:
      "A premium selection prepared for customers who value quality and consistency in every meal.",
    features: [
      "Premium selection",
      "Quality focused",
      "Carefully packed",
    ],
  },
  {
    name: "Mahadal Rice",
    category: "Everyday Rice",
    image: "/images/products/mahadal-rice.jpg",
    description:
      "A dependable rice option designed for everyday cooking and family meals.",
    features: [
      "Reliable quality",
      "Clean processing",
      "Everyday use",
    ],
  },
];

const qualities = [
  {
    icon: Wheat,
    title: "Quality Grains",
    text: "We focus on maintaining the quality and consistency of the rice throughout processing.",
  },
  {
    icon: Leaf,
    title: "Careful Processing",
    text: "Our approach places importance on proper cleaning, sorting and processing.",
  },
  {
    icon: Package,
    title: "Secure Packaging",
    text: "Products are packed carefully to maintain their quality until they reach customers.",
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-[#f8f6ed] text-[#173b1b]">
      <Navbar />

      <main>
        {/* =========================================
            HERO
        ========================================= */}
        <section className="relative overflow-hidden bg-[#173f1b] pt-32">
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#d3b34d]/15" />

          <div className="pointer-events-none absolute right-20 top-24 h-48 w-48 rounded-full border border-[#d3b34d]/10" />

          <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#d3b34d]/5 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
            <div className="max-w-3xl">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#d3b34d]" />

                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#d3b34d]">
                  Mahadal Products
                </span>
              </div>

              <h1 className="font-serif text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
                Quality in
                <span className="block text-[#d3b34d]">
                  Every Grain.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                Explore Mahadal rice products, carefully processed and
                prepared with a focus on quality, consistency and customer
                satisfaction.
              </p>
            </div>
          </div>

          <div className="h-10 bg-[#f8f6ed] [clip-path:ellipse(65%_100%_at_50%_100%)]" />
        </section>

        {/* =========================================
            INTRO
        ========================================= */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#c5a43b]" />

                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#63702c]">
                    Our Products
                  </span>
                </div>

                <h2 className="font-serif text-4xl font-bold leading-tight sm:text-5xl">
                  Rice Made with
                  <span className="block text-[#63702c]">
                    Care.
                  </span>
                </h2>
              </div>

              <p className="max-w-2xl text-sm leading-7 text-[#697068]">
                At Mahadal, we understand that good rice starts with good
                raw material and careful processing. Our products are
                developed with attention to cleanliness, consistency and
                dependable quality.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================
            PRODUCTS
        ========================================= */}
        <section className="pb-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <article
                  key={product.name + product.category}
                  className="group overflow-hidden rounded-[2rem] border border-[#ddd8c8] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#c8ad45] hover:shadow-[0_20px_50px_rgba(24,59,27,0.08)]"
                >
                  {/* Product Image */}
                  <div className="relative h-[360px] overflow-hidden bg-[#f2efe4]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute left-5 top-5">
                      <span className="rounded-full border border-white/30 bg-[#173f1b]/90 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#e2c95f]">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  {/* Product Content */}
                  <div className="p-7">
                    <h3 className="font-serif text-2xl font-bold text-[#173b1b]">
                      {product.name}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#6c736b]">
                      {product.description}
                    </p>

                    <div className="mt-6 space-y-3 border-t border-[#ebe7da] pt-5">
                      {product.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3 text-sm text-[#4e5b50]"
                        >
                          <CheckCircle2
                            size={16}
                            className="shrink-0 text-[#637d32]"
                          />

                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href="/contact"
                      className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#285c2c] transition-colors hover:text-[#a08328]"
                    >
                      Enquire Now
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================
            QUALITY SECTION
        ========================================= */}
        <section className="bg-[#173f1b] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-5 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d3b34d]/30">
                  <Leaf
                    size={21}
                    className="text-[#d3b34d]"
                  />
                </div>
              </div>

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d3b34d]">
                The Mahadal Standard
              </p>

              <h2 className="mt-4 font-serif text-4xl font-bold text-white sm:text-5xl">
                More than a product.
                <span className="block text-[#d3b34d]">
                  It is our promise.
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/60">
                Every stage of our process contributes to delivering rice
                that customers can depend on.
              </p>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {qualities.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-white/10 bg-white/[0.04] p-7"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d3b34d]/10">
                      <Icon
                        size={22}
                        className="text-[#d3b34d]"
                      />
                    </div>

                    <h3 className="mt-6 font-serif text-xl font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white/55">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================
            CTA
        ========================================= */}
        <section className="bg-[#f8f6ed] py-20">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#63702c]">
              Looking for Mahadal Rice?
            </p>

            <h2 className="mt-4 font-serif text-4xl font-bold text-[#173b1b] sm:text-5xl">
              Let&apos;s talk about
              <span className="text-[#63702c]">
                {" "}
                your requirements.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#6b716b]">
              Get in touch with our team for product information,
              availability and business enquiries.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#173f1b] px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#285c2c]"
            >
              Contact Mahadal
              <ArrowRight size={17} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}