"use client";
import React from "react";
import { ContainerScroll } from "./Container";
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden -mt-96">
      <ContainerScroll>
        <div className="relative w-full h-full">
          {/* Desktop Image */}
          <Image
            src={`/assets/main.png`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top hidden md:block"
            draggable={false}
          />
          {/* Mobile Image */}
          <Image
            src={`/assets/mobile-main.png`} // Change the mobile image path here
            alt="hero-mobile"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top block md:hidden"
            draggable={false}
          />
        </div>
      </ContainerScroll>
    </div>
  );
}
