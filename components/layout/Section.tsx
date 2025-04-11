import React from "react";
import Image from "next/image";
import { RiCheckboxCircleFill } from "react-icons/ri";

export default function Section() {
  return (
    <section className="py-8 md:py-12 lg:py-24 rounded-xl bg-zinc-200/50 my-8">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4 p-12">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Why Choose Our Mugs?
            </h2>
            <ul className="gap-4 py-4 list-disc list-inside space-y-4">
              <li className="flex items-start gap-4">
                <RiCheckboxCircleFill size={24} className="mt-1" />
                <div className="space-y-1">
                  <h3 className="font-semibold text-lg">
                    High-Quality Ceramic
                  </h3>
                  <p className="text-zinc-500">
                    Our mugs are made from premium ceramic that keeps your
                    drinks hot for longer.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <RiCheckboxCircleFill size={24} className="mt-1" />
                <div className="space-y-1">
                  <h3 className="font-semibold text-lg">
                    Dishwasher & Microwave Safe
                  </h3>
                  <p className="text-zinc-500">
                    All our mugs are dishwasher and microwave safe for easy use
                    and cleaning.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <RiCheckboxCircleFill size={24} className="mt-1" />
                <div className="space-y-1">
                  <h3 className="font-semibold text-lg">
                    Vibrant, Long-lasting Prints
                  </h3>
                  <p className="text-zinc-500">
                    Our printing technology ensures the memes stay vibrant wash
                    after wash.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <Image
              src="/section_image.jpg"
              alt="Mug collection"
              width={400}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
