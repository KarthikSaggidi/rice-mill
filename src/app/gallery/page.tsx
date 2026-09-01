"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ArrowUpRight,
  Wheat,
  Factory,
  Leaf,
  Package,
} from "lucide-react";

const galleryItems = [
  {
    id: 1,
    title: "Quality Paddy Selection",
    category: "Raw Paddy",
    image: "/images/gallery/paddy-selection.jpg",
    description:
      "Carefully selected paddy forms the foundation of our rice processing. We focus on good grain quality, maturity and consistency before the milling process begins.",
    icon: Wheat,
  },
  {
    id: 2,
    title: "Paddy Fields",
    category: "From the Fields",
    image: "/images/gallery/paddy-fields.jpg",
    description:
      "Our journey begins with quality paddy sourced from agricultural regions. Proper sourcing helps us maintain consistency throughout the processing cycle.",
    icon: Leaf,
  },
  {
    id: 3,
    title: "Modern Rice Mill",
    category: "Our Facility",
    image: "/images/gallery/rice-mill.jpg",
    description:
      "Our milling facility is designed to support efficient and controlled rice processing while maintaining cleanliness and product quality.",
    icon: Factory,
  },
  {
    id: 4,
    title: "Rice Processing",
    category: "Milling Process",
    image: "/images/gallery/rice-processing.jpg",
    description:
      "Modern milling equipment helps process paddy with precision, separating impurities and unwanted materials while protecting the quality of the grain.",
    icon: Factory,
  },
  {
    id: 5,
    title: "Clean & Processed Rice",
    category: "Finished Grain",
    image: "/images/gallery/processed-rice.jpg",
    description:
      "After processing and quality checks, the finished rice is prepared to meet the expected standards of cleanliness, appearance and consistency.",
    icon: Wheat,
  },
  {
    id: 6,
    title: "Rice Packing",
    category: "Packaging",
    image: "/images/gallery/rice-packing.jpg",
    description:
      "Finished rice is carefully packed to maintain product quality and ensure that it reaches customers in clean and suitable condition.",
    icon: Package,
  },
  {
    id: 7,
    title: "Bulk Rice Supply",
    category: "Distribution",
    image: "/images/gallery/bulk-rice.jpg",
    description:
      "We support bulk and commercial requirements with organized packing and dependable order handling for retailers, distributors and other buyers.",
    icon: Package,
  },
  {
    id: 8,
    title: "Grain Quality",
    category: "Quality Assurance",
    image: "/images/gallery/rice-grains.jpg",
    description:
      "Quality remains an important part of our process. Rice is checked for appearance, cleanliness, consistency and overall grain quality.",
    icon: Wheat,
  },
  {
    id: 9,
    title: "Our Rice Mill",
    category: "Our Journey",
    image: "/images/gallery/factory.jpg",
    description:
      "Our rice mill brings together agricultural sourcing, modern processing and careful quality practices to deliver dependable rice products.",
    icon: Factory,
  },
];

export default function GalleryPage() {
  const [selectedItem, setSelectedItem] = useState<
    (typeof galleryItems)[number] | null
  >(null);

  /* =========================================================
     ESCAPE KEY
  ========================================================= */

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedItem(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  /* =========================================================
     PREVENT BODY SCROLL WHEN POPUP IS OPEN
  ========================================================= */

  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedItem]);

  return (
    <>
      <main className="min-h-screen bg-[#faf9f4] pt-[105px]">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <section className="relative overflow-hidden border-b border-[#e5dfd0] bg-[#f4f1e5]">
          {/* Decorative wheat */}
          <div className="pointer-events-none absolute -left-24 -top-20 opacity-[0.035]">
            <Wheat
              size={300}
              strokeWidth={0.7}
              className="rotate-[-18deg] text-[#285c24]"
            />
          </div>

          <div className="pointer-events-none absolute -right-24 -bottom-20 opacity-[0.035]">
            <Wheat
              size={300}
              strokeWidth={0.7}
              className="rotate-[18deg] text-[#285c24]"
            />
          </div>

          <div className="relative z-10 mx-auto max-w-[1400px] px-5 py-14 text-center sm:px-8 sm:py-16 lg:px-12 lg:py-20">
            
            {/* Small heading */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 flex items-center justify-center gap-3"
            >
              <span className="h-px w-10 bg-[#b59438]" />

              <div className="flex items-center gap-2">
                <Wheat
                  size={14}
                  strokeWidth={1.4}
                  className="text-[#b59438]"
                />

                <span className="text-[10px] font-bold uppercase tracking-[0.27em] text-[#285c24]">
                  Our Gallery
                </span>
              </div>

              <span className="h-px w-10 bg-[#b59438]" />
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.05 }}
              className="
                font-serif
                text-[38px]
                font-bold
                leading-tight
                tracking-[-0.035em]
                text-[#172c18]
                sm:text-[47px]
                lg:text-[54px]
              "
            >
              A Glimpse Into
              <span className="text-[#285c24]"> Our Journey</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="
                mx-auto
                mt-4
                max-w-[680px]
                text-[13px]
                leading-6
                text-[#62685f]
                sm:text-[14px]
              "
            >
              Explore our fields, milling facility, processing practices,
              finished grains and the people and processes behind our rice.
            </motion.p>
          </div>
        </section>

        {/* =====================================================
            GALLERY
        ===================================================== */}

        <section className="relative overflow-hidden bg-[#faf9f4]">
          <div className="mx-auto max-w-[1400px] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">

            {/* Gallery intro */}
            <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#b08b30]">
                  Inside Our Work
                </p>

                <h2 className="mt-1 font-serif text-[27px] font-bold text-[#1c341d] sm:text-[31px]">
                  From Paddy to Finished Grain
                </h2>
              </div>

              <p className="max-w-[430px] text-[10px] leading-5 text-[#777b72] sm:text-right">
                Click any image to learn more about the work, process and
                quality practices represented in each photograph.
              </p>
            </div>

            {/* =================================================
                GALLERY GRID
            ================================================= */}

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

              {galleryItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedItem(item)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{
                      once: true,
                      amount: 0.15,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: Math.min(index * 0.05, 0.25),
                    }}
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-[16px]
                      border
                      border-[#e4dfd2]
                      bg-white
                      text-left
                      shadow-[0_5px_22px_rgba(40,60,30,0.045)]
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-[#d3c18a]
                      hover:shadow-[0_15px_35px_rgba(40,60,30,0.10)]
                      focus:outline-none
                      focus:ring-2
                      focus:ring-[#285c24]/30
                    "
                  >
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#e6e0cc]">

                      <img
                        src={item.image}
                        alt={item.title}
                        loading={index < 3 ? "eager" : "lazy"}
                        className="
                          h-full
                          w-full
                          object-cover
                          transition-transform
                          duration-700
                          ease-out
                          group-hover:scale-[1.045]
                        "
                      />

                      {/* Dark overlay */}
                      <div className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-[#102f12]/75
                        via-[#102f12]/10
                        to-transparent
                        opacity-80
                        transition-opacity
                        duration-300
                        group-hover:opacity-95
                      " />

                      {/* Number */}
                      <div className="
                        absolute
                        left-4
                        top-4
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/25
                        bg-black/15
                        backdrop-blur-md
                      ">
                        <span className="font-serif text-[12px] font-bold text-white">
                          {String(item.id).padStart(2, "0")}
                        </span>
                      </div>

                      {/* Open indicator */}
                      <div className="
                        absolute
                        right-4
                        top-4
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/25
                        bg-black/15
                        text-white
                        opacity-0
                        backdrop-blur-md
                        transition-all
                        duration-300
                        group-hover:opacity-100
                      ">
                        <ArrowUpRight size={16} />
                      </div>

                      {/* Bottom information */}
                      <div className="absolute inset-x-0 bottom-0 p-5">

                        <div className="flex items-center gap-2">
                          <Icon
                            size={13}
                            strokeWidth={1.5}
                            className="text-[#d9bf61]"
                          />

                          <span className="
                            text-[8px]
                            font-bold
                            uppercase
                            tracking-[0.18em]
                            text-[#e0c76e]
                          ">
                            {item.category}
                          </span>
                        </div>

                        <h3 className="
                          mt-1
                          font-serif
                          text-[21px]
                          font-bold
                          leading-tight
                          text-white
                        ">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    {/* Small card footer */}
                    <div className="flex items-center justify-between px-5 py-3.5">

                      <span className="text-[9px] font-semibold text-[#747970]">
                        View details
                      </span>

                      <ArrowUpRight
                        size={14}
                        className="
                          text-[#285c24]
                          transition-transform
                          duration-300
                          group-hover:translate-x-0.5
                          group-hover:-translate-y-0.5
                        "
                      />
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            BOTTOM INFORMATION
        ===================================================== */}

        <section className="border-t border-[#e4dfd1] bg-[#f4f1e5]">
          <div className="mx-auto max-w-[1000px] px-5 py-12 text-center sm:px-8 sm:py-14">

            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#e8efe4]">
              <Wheat
                size={20}
                strokeWidth={1.4}
                className="text-[#285c24]"
              />
            </div>

            <h2 className="mt-4 font-serif text-[25px] font-bold text-[#1c341d]">
              Quality Begins at the Source
            </h2>

            <p className="mx-auto mt-3 max-w-[650px] text-[11px] leading-5 text-[#6d726a]">
              Every image reflects a part of our journey — from carefully
              selected paddy and modern milling to quality inspection,
              packaging and dependable supply.
            </p>
          </div>
        </section>
      </main>

      {/* =======================================================
          IMAGE POPUP / MODAL
      ======================================================= */}

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="
              fixed
              inset-0
              z-[200]
              flex
              items-center
              justify-center
              bg-[#071107]/80
              p-4
              backdrop-blur-md
              sm:p-6
            "
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setSelectedItem(null);
              }
            }}
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
                y: 15,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
                y: 15,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              className="
                relative
                max-h-[92vh]
                w-full
                max-w-[1050px]
                overflow-hidden
                rounded-[20px]
                border
                border-white/15
                bg-[#faf9f4]
                shadow-[0_25px_80px_rgba(0,0,0,0.35)]
              "
            >

              {/* =================================================
                  CLOSE BUTTON
              ================================================= */}

              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                aria-label="Close image details"
                className="
                  absolute
                  right-4
                  top-4
                  z-30
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/25
                  bg-black/30
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-200
                  hover:bg-black/50
                "
              >
                <X size={19} />
              </button>

              {/* =================================================
                  POPUP CONTENT
              ================================================= */}

              <div className="grid max-h-[92vh] overflow-y-auto lg:grid-cols-[1.15fr_0.85fr]">

                {/* Image */}
                <div className="
                  relative
                  min-h-[280px]
                  bg-[#ded7c1]
                  sm:min-h-[380px]
                  lg:min-h-[600px]
                ">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="h-full w-full object-cover"
                  />

                  {/* Image overlay */}
                  <div className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#102f12]/45
                    via-transparent
                    to-transparent
                  " />

                  {/* Category */}
                  <div className="
                    absolute
                    bottom-5
                    left-5
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/20
                    bg-black/20
                    px-3
                    py-2
                    backdrop-blur-md
                  ">
                    <selectedItem.icon
                      size={13}
                      strokeWidth={1.5}
                      className="text-[#e0c76e]"
                    />

                    <span className="
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-white
                    ">
                      {selectedItem.category}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="
                  flex
                  flex-col
                  justify-center
                  bg-[#faf9f4]
                  p-7
                  sm:p-9
                  lg:p-10
                ">

                  <div className="flex items-center gap-2">
                    <span className="h-px w-8 bg-[#b59438]" />

                    <span className="
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-[#b08b30]
                    ">
                      Gallery Detail
                    </span>
                  </div>

                  <h2 className="
                    mt-4
                    font-serif
                    text-[30px]
                    font-bold
                    leading-tight
                    tracking-[-0.025em]
                    text-[#19331b]
                    sm:text-[35px]
                  ">
                    {selectedItem.title}
                  </h2>

                  <p className="
                    mt-5
                    text-[12px]
                    leading-6
                    text-[#62685f]
                    sm:text-[13px]
                  ">
                    {selectedItem.description}
                  </p>

                  {/* Information box */}
                  <div className="
                    mt-7
                    rounded-[14px]
                    border
                    border-[#e2ddcf]
                    bg-white
                    p-5
                  ">
                    <div className="flex items-start gap-3">

                      <div className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#edf3e9]
                      ">
                        <Wheat
                          size={17}
                          strokeWidth={1.4}
                          className="text-[#285c24]"
                        />
                      </div>

                      <div>
                        <p className="
                          text-[9px]
                          font-bold
                          uppercase
                          tracking-[0.15em]
                          text-[#285c24]
                        ">
                          Our Approach
                        </p>

                        <p className="
                          mt-1.5
                          text-[10px]
                          leading-5
                          text-[#73776f]
                        ">
                          We combine careful sourcing, controlled processing
                          and quality-focused practices to maintain reliable
                          rice quality from beginning to end.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Close */}
                  
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}