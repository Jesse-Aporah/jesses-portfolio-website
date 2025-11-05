"use client";
import { serviceData, works } from "@/app/assets/assets";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { use, useRef, useState } from "react";

type worksKey = keyof typeof works;

// key helper
const getKey = (slug: string): worksKey => {
  const [first, ...rest] = slug.split("-");
  return (first +
    rest
      .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
      .join("")) as worksKey;
};

export default function ServiceDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  const key = getKey(slug);
  const serviceCategory = works[key];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [clicked, setClicked] = useState(false);

  const currentWork = serviceCategory.works[currentIndex];

  const serviceWorkImages = serviceCategory.works.map((work) => work.image);

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const { clientWidth, scrollLeft, scrollWidth } = scrollRef.current;

    let newScrollPosition =
      direction === "left"
        ? scrollLeft - clientWidth
        : scrollLeft + clientWidth;

    scrollRef.current.scrollTo({
      left: newScrollPosition,
      behavior: "smooth",
    });
  };

  const handleNext = () => {
    if (!clicked) {
      setClicked(true);
      setTimeout(() => {
        if (currentIndex < serviceWorkImages.length - 1) {
          setCurrentIndex((prev) => prev + 1);
          scroll("right");
          setClicked(false);
        }
      }, 500);
    }
  };

  const handlePrev = () => {
    if (!clicked) {
      setClicked(true);
      setTimeout(() => {
        if (currentIndex > 0) {
          setCurrentIndex((prev) => prev - 1);
          scroll("left");
          setClicked(false);
        }
      }, 500);
    }
  };

  // if service is not found
  const service = serviceData.find((item) => item.slug === slug);

  if (!service) {
    return (
      
      <div className="px-[12%] py-20 text-center">
        <h2 className="text-3xl font-semibold">Service not found</h2>
        <Link
          href="/#services"
          className="mt-4 inline-block border border-gray-500 px-4 py-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          ← Back to Services
        </Link>
      </div>
    );
  }

  return (
    <section className="min-h-screen px-[12%] py-20">
      <div className="min-h-screen bg-background p-3 sm:p-6">
        <div className="max-w-7xl mx-auto lg:mb-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 justify-center items-start">
            {/* Left Side - Content */}
            <div className="space-y-6">
              {/* Large Number */}
              <div>
                <div className="text-8xl text-primary">0{currentIndex + 1}</div>
              </div>

              {/* Title */}
              <div>
                <h2 className="text-primary capitalize">{currentWork.title}</h2>
              </div>

              {/* Description */}
              <p className="text-foreground">{currentWork.description}</p>

              {/* Tools */}
              <div>
                <h3 className="text-foreground mb-3">Technologies & Tools</h3>
                <ul className="flex flex-wrap gap-3">
                  {currentWork.technologies.map((item) => (
                    <li
                      key={item}
                      className="bg-amber-500 dark:bg-amber-700 rounded-xl py-1 px-2 text-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Separator */}
              <hr className="border-t border-muted" />

              {/* Links */}
              <div className="flex gap-4 mb-6">
                <a
                  href={currentWork.webLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  <ExternalLink className="w-4 h-4" />
                  Visit Website
                </a>
                <a
                  href={currentWork.gitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                </a>
              </div>
            </div>

            {/* Right Side - Image and Navigation */}
            <div className="space-y-4 mt-12">
              {/* Service Image */}
              <div className="aspect-4/3 relative bg-muted overflow-hidden">
                <div
                  ref={scrollRef}
                  className="w-full h-full flex overflow-x-scroll scroll-smooth snap-x snap-mandatory"
                >
                  {serviceWorkImages.map((image, i) => (
                    <div
                      key={i}
                      className="min-w-full h-full shrink-0 snap-center relative"
                    >
                      <Image
                        src={image}
                        alt={`Slide ${i}`}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-3 justify-center mb-10 lg:mb-0">
                <button onClick={handlePrev}>
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button onClick={handleNext}>
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <Link
          href="/#services"
          className="px-5 py-2 border border-gray-500 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          ← Back to Services
        </Link>
      </div>
    </section>
  );
}
