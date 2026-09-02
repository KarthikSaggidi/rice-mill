"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Package,
  Wheat,
} from "lucide-react";

const products = [
  {
    number: "01",
    name: "Toor Dal",
    subtitle: "Pigeon Pea",
    description:
      "Carefully graded pigeon peas processed for clean, uniform grains, high protein retention, and dependable cooking quality.",
    image: "/images/products/toor-dal.jpg",
    uses: "Dal tadka, sambar & everyday meals",
  },

  {
    number: "02",
    name: "Moong Dal",
    subtitle: "Split Green Gram",
    description:
      "Light, easy-to-digest split green gram sortex-cleaned for uniform size, purity, and wholesome everyday nourishment.",
    image: "/images/products/moong-dal.jpg",
    uses: "Khichdi, light dal & wholesome soups",
  },

  {
    number: "03",
    name: "Urad Dal",
    subtitle: "Black Gram",
    description:
      "Carefully processed black gram selected for superior fermentation properties, rich texture, and classic traditional dishes.",
    image: "/images/products/urad-dal.jpg",
    uses: "Idli, dosa batters, dal makhani & vadas",
  },

  {
    number: "04",
    name: "Chana Dal",
    subtitle: "Split Bengal Gram",
    description:
      "Premium dehulled split chickpeas offering a rich, nutty flavor, high dietary fiber, and firm cooking texture.",
    image: "/images/products/chana-dal.jpg",
    uses: "Dal preparations, savory snacks & puran poli",
  },

  {
    number: "05",
    name: "Masoor Dal",
    subtitle: "Red Lentils",
    description:
      "Finely graded red lentils with quick-cooking characteristics, high natural iron content, and delicate earthy flavor.",
    image: "/images/products/masoor-dal.jpg",
    uses: "Quick-cook dal, hearty soups & curries",
  },

  {
    number: "06",
    name: "Raw Toor",
    subtitle: "Whole Pigeon Pea Harvest",
    description:
      "Premium raw pigeon peas sourced directly from farming belts, screened thoroughly for moisture balance and grain health.",
    image: "/images/products/raw-toor.jpg",
    uses: "Pulse processing, bulk milling & wholesale supply",
  },

  {
    number: "07",
    name: "Pulse Husk Feed",
    subtitle: "Chunni & Nutritious Feed",
    description:
      "Wholesome pulse by-product rich in natural protein and crude fiber, ideal for balanced livestock and dairy cattle feed.",
    image: "/images/products/cattle-feed.jpg",
    uses: "Dairy cattle, sheep & livestock feed",
  },

  {
    number: "08",
    name: "Toor Dal Unpolished",
    subtitle: "Natural Unpolished Dal",
    description:
      "100% natural, unpolished pigeon peas free from artificial water, oil, or stone polish to keep authentic fiber and nutrients intact.",
    image: "/images/products/toor-dal-unpolished.jpg",
    uses: "High-fiber traditional cooking & healthy meals",
  },

  {
    number: "09",
    name: "Whole Green Gram",
    subtitle: "Whole Moong",
    description:
      "Carefully harvested, intact green gram with vibrant natural luster, high germination rates, and clean appearance.",
    image: "/images/products/whole-moong.jpg",
    uses: "Sprouts, healthy salads & wholesome gravies",
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#faf8f0] pt-[105px]">

      {/* =========================================================
          PAGE HEADER
      ========================================================= */}

      <section className="relative overflow-hidden border-b border-[#e5dfcf] bg-[#f4f0e2]">
        {/* Decorative wheat */}
        <div className="pointer-events-none absolute -left-24 top-4 opacity-[0.035]">
          <Wheat
            size={320}
            strokeWidth={0.7}
            className="rotate-[-18deg] text-[#285c24]"
          />
        </div>

        <div className="pointer-events-none absolute -right-24 bottom-0 opacity-[0.035]">
          <Wheat
            size={320}
            strokeWidth={0.7}
            className="rotate-[18deg] text-[#285c24]"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[1400px] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-[72px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="mx-auto max-w-[820px] text-center"
          >
            {/* Label */}
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#b59438]" />

              <div className="flex items-center gap-2">
                <Wheat
                  size={14}
                  strokeWidth={1.4}
                  className="text-[#b59438]"
                />

                <span className="text-[10px] font-bold uppercase tracking-[0.27em] text-[#285c24]">
                  Our Pulses Range
                </span>
              </div>

              <span className="h-px w-10 bg-[#b59438]" />
            </div>

            {/* Heading */}
            <h1 className="font-serif text-[40px] font-bold leading-[1.05] tracking-[-0.035em] text-[#172c18] sm:text-[50px] lg:text-[58px]">
              Pure, Protein-Rich Pulses for{" "}
              <span className="text-[#285c24]">
                Every Kitchen
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-[680px] text-[13px] leading-6 text-[#656a62] sm:text-[14px]">
              We source directly from trusted farmers and process naturally,
              ensuring sortex-cleaned, unadulterated dals and legumes that preserve
              vital plant protein, natural flavor, and wholesome nutrition.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          PRODUCTS
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#faf8f0]">
        <div className="mx-auto max-w-[1400px] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-[78px]">

          {/* Small intro */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"
          >
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#b08b30]">
                Our Range
              </p>

              <h2 className="mt-1 font-serif text-[29px] font-bold text-[#1d341e] sm:text-[34px]">
                Carefully Selected Dals & Pulses
              </h2>
            </div>

            <div className="flex items-center gap-2 text-[10px] font-medium text-[#73776e]">
              <Package
                size={15}
                strokeWidth={1.5}
                className="text-[#285c24]"
              />

              Sortex cleaned & quality checked
            </div>
          </motion.div>

          {/* =====================================================
              PERFECT 3 × 2 GRID
          ===================================================== */}

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {products.map((product, index) => (
              <motion.article
                key={product.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.06,
                }}
                className="
                  group
                  flex
                  h-full
                  flex-col
                  overflow-hidden
                  rounded-[18px]
                  border
                  border-[#e3ddce]
                  bg-white
                  shadow-[0_6px_25px_rgba(35,55,30,0.045)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#d1bf82]
                  hover:shadow-[0_18px_40px_rgba(35,55,30,0.10)]
                "
              >
                {/* =================================================
                    IMAGE
                ================================================= */}

                <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-[#e6dfca]">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-[1.05]
                    "
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102f10]/65 via-transparent to-transparent" />

                  {/* Number */}
                  <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/20 backdrop-blur-md">
                    <span className="font-serif text-[12px] font-bold text-white">
                      {product.number}
                    </span>
                  </div>

                  {/* Bottom image label */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#e5cd70]">
                      {product.subtitle}
                    </p>
                  </div>
                </div>

                {/* =================================================
                    CONTENT
                ================================================= */}

                <div className="flex flex-1 flex-col p-5 sm:p-6">

                  {/* Product heading */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-[23px] font-bold leading-tight text-[#1b351d]">
                        {product.name}
                      </h3>

                      <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.17em] text-[#b08b30]">
                        {product.subtitle}
                      </p>
                    </div>

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#edf3e9]">
                      <Wheat
                        size={17}
                        strokeWidth={1.35}
                        className="text-[#285c24]"
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-[11px] leading-5 text-[#686e66]">
                    {product.description}
                  </p>

                  {/* Uses */}
                  <div className="mt-auto pt-5">
                    <div className="border-t border-[#e8e3d7] pt-4">
                      <div className="flex items-start gap-2">
                        <CheckCircle2
                          size={14}
                          strokeWidth={1.8}
                          className="mt-0.5 shrink-0 text-[#285c24]"
                        />

                        <div>
                          <p className="text-[8px] font-bold uppercase tracking-[0.14em] text-[#8b8e85]">
                            Ideal For
                          </p>

                          <p className="mt-1 text-[10px] font-semibold text-[#3b493b]">
                            {product.uses}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="h-[3px] w-0 bg-[#285c24] transition-all duration-300 group-hover:w-full" />
              </motion.article>
            ))}
          </div>

          {/* =====================================================
              BOTTOM INFORMATION
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              mx-auto
              mt-12
              max-w-[1050px]
              rounded-[16px]
              border
              border-[#ddd5bd]
              bg-[#f5f0df]
              px-6
              py-6
              sm:px-8
            "
          >
            <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e8efdf]">
                  <Package
                    size={19}
                    strokeWidth={1.4}
                    className="text-[#285c24]"
                  />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#b08b30]">
                    Bulk & Commercial Supply
                  </p>

                  <h3 className="mt-1 font-serif text-[20px] font-bold text-[#203620]">
                    Looking for institutional or wholesale quantities?
                  </h3>

                  <p className="mt-1 max-w-[600px] text-[10px] leading-5 text-[#6c7169]">
                    We supply custom packaging (25kg, 30kg, 50kg bags) and bulk lots
                    for wholesalers, distributors, retail chains, and food manufacturers.
                  </p>
                </div>
              </div>

              <a
                href="/contact"
                className="
                  group
                  inline-flex
                  shrink-0
                  items-center
                  gap-2
                  rounded-xl
                  bg-[#285c24]
                  px-5
                  py-3
                  text-[10px]
                  font-bold
                  text-white
                  shadow-[0_7px_18px_rgba(40,92,36,0.14)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#1b4a17]
                "
              >
                Inquire For Bulk

                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom separator */}
      <div className="h-[2px] bg-[#285c24]" />
    </main>
  );
}