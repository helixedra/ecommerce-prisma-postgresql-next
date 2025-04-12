import React from "react";
import Link from "next/link";
import Button from "@/components/shared/Button";
import Center from "../shared/Center";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <section className="w-full min-h-[400px] lg:min-h-[600px] flex items-center justify-center bg-black/40 relative overflow-hidden rounded-xl md:p-12 lg:p-24 mt-6">
        <Image
          src="/promo_image.jpg"
          alt="Hero Image"
          width={1920}
          height={1920}
          priority
          quality={70}
          className="object-cover -z-1 absolute lg:scale-120 lg:left-15 lg:top-15 inset-0 w-full h-full"
        />
        <div className="">
          <Center className="space-y-8 px-6 py-12 flex-col">
            <div className="flex flex-col items-center space-y-8 text-center">
              <h1 className="text-3xl text-white font-bold tracking-tight sm:text-4xl md:text-5xl md:max-w-4xl leading-tight">
                Elevate Your Coffee Experience with Our Cool Mugs
              </h1>
              <p className="max-w-[700px] text-white/70 text-muted-foreground lg:text-xl">
                Our mugs feature the internet's funniest memes. Perfect for
                coffee lovers and meme enthusiasts alike, these mugs are sure to
                brighten your mornings.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/products">
                <Button className="bg-white text-black hover:transform hover:scale-110 transition-transform duration-100 font-bold">
                  Shop Now
                </Button>
              </Link>
            </div>
          </Center>
        </div>
      </section>
    </>
  );
}
