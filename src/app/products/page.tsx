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
    subtitle: "Mahadal",
    description:
      "Clean and carefully processed toor dal with a smooth texture and consistent quality.",
    image: "/images/products/toor-dal.jpg",
    uses: "Everyday dal, sambar & curries",
  },
  {
    number: "02",
    name: "Moong Dal",
    subtitle: "Mahadal",
    description:
      "Light and easy to cook, with clean grains and a naturally mild taste.",
    image: "/images/products/moong-dal.jpg",
    uses: "Khichdi, dal & light meals",
  },
  {
    number: "03",
    name: "Urad Dal",
    subtitle: "Mahadal",
    description:
      "Well-processed urad dal with good texture, suitable for traditional Indian recipes.",
    image: "/images/products/urad-dal.jpg",
    uses: "Idli, dosa, vada & dal makhani",
  },
  {
    number: "04",
    name: "Chana Dal",
    subtitle: "Mahadal",
    description:
      "Clean, evenly processed chana dal with a rich taste and firm texture after cooking.",
    image: "/images/products/chana-dal.jpg",
    uses: "Dal, snacks & traditional dishes",
  },
  {
    number: "05",
    name: "Whole Moong ",
    subtitle: "Tripple Arrow",
    description:
      "Clean whole green gram with good appearance and quality for everyday use.",
    image: "/images/products/whole-moong.jpg",
    uses: "Sprouts, curries & healthy meals",
  },
  
  
  {
    number: "06",
    name: "Toor dal",
    subtitle: "Tripple Arrow",
    description:
      "Clean and quick-cooking toor dal, suitable for simple everyday meals.",
    image: "/images/products/toor-dal-tripple-arrow.jpg",
    uses: "Dal, soups & everyday cooking",
  },
  {
    number: "07",
    name: "Cattle Feed",
    subtitle: "Tripple Arrow",
    description:
      "Processed feed suitable for cattle and livestock as part of regular farm feeding.",
    image: "/images/products/cattle-feed.jpg",
    uses: "Cattle & livestock",
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
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-4 opacity-[0.035]"
        >
          <Wheat
            size={320}
            strokeWidth={0.7}
            className="rotate-[-18deg] text-[#285c24]"
          />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 bottom-0 opacity-[0.035]"
        >
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
              Quality Pulses for{" "}
              <span className="text-[#285c24]">Every Kitchen</span>
            </h1>

            <p className="mx-auto mt-5 max-w-[650px] text-[12px] leading-6 text-[#676d65] sm:text-[13px]">
              A simple range of carefully processed pulses and feed products,
              prepared with attention to cleanliness, quality and consistency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          PRODUCTS
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#faf8f0]">
        <div className="mx-auto max-w-[1400px] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-[78px]">
          {/* Section intro */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mb-10"
          >
            <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#b08b30]">
              Our Range
            </p>

            <h2 className="mt-1 font-serif text-[29px] font-bold text-[#1d341e] sm:text-[34px]">
              Clean, consistent and carefully processed
            </h2>

            <p className="mt-2 max-w-[650px] text-[11px] leading-5 text-[#6b7068]">
              From everyday dals to whole pulses and cattle feed, our products
              are prepared with care for dependable quality and supply.
            </p>
          </motion.div>

          {/* =====================================================
              PRODUCT GRID — 4 CARDS PER ROW
          ===================================================== */}

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {products.map((product, index) => (
              <motion.article
                key={product.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.04,
                }}
                className="
                  group
                  flex
                  h-full
                  flex-col
                  overflow-hidden
                  rounded-[16px]
                  border
                  border-[#e3ddce]
                  bg-white
                  shadow-[0_5px_22px_rgba(35,55,30,0.04)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#d1bf82]
                  hover:shadow-[0_16px_35px_rgba(35,55,30,0.09)]
                "
              >
                {/* =================================================
                    IMAGE
                ================================================= */}

                <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-[#e6dfca]">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading={index > 3 ? "lazy" : "eager"}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102f10]/60 via-transparent to-transparent" />

                  {/* Product number */}
                  <div className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-black/20 backdrop-blur-md">
                    <span className="font-serif text-[11px] font-bold text-white">
                      {product.number}
                    </span>
                  </div>

                  {/* Image label */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-[8px] font-bold uppercase tracking-[0.17em] text-[#e5cd70]">
                      {product.subtitle}
                    </p>
                  </div>
                </div>

                {/* =================================================
                    CONTENT
                ================================================= */}

                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  {/* Product heading */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="font-serif text-[21px] font-bold leading-tight text-[#1b351d]">
                        {product.name}
                      </h3>

                      <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.15em] text-[#b08b30]">
                        {product.subtitle}
                      </p>
                    </div>

                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#edf3e9]">
                      <Wheat
                        size={15}
                        strokeWidth={1.35}
                        className="text-[#285c24]"
                      />
                    </div>
                  </div>

                  {/* Simple description */}
                  <p className="mt-3 text-[10px] leading-[1.65] text-[#686e66]">
                    {product.description}
                  </p>

                  {/* Ideal for */}
                  <div className="mt-auto pt-4">
                    <div className="border-t border-[#e8e3d7] pt-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle2
                          size={13}
                          strokeWidth={1.8}
                          className="mt-0.5 shrink-0 text-[#285c24]"
                        />

                        <div>
                          <p className="text-[7px] font-bold uppercase tracking-[0.13em] text-[#8b8e85]">
                            Ideal For
                          </p>

                          <p className="mt-1 text-[9px] font-semibold leading-4 text-[#3b493b]">
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
              BULK INFORMATION
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
                    Need larger quantities?
                  </h3>

                  <p className="mt-1 max-w-[600px] text-[10px] leading-5 text-[#6c7169]">
                    We supply bulk quantities and custom packaging for
                    wholesalers, distributors, retailers and food businesses.
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