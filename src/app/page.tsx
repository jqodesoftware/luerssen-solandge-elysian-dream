import Hero from "./Hero";
import React from "react";
import Introduction from "./Introduction/Introduction";
import Background from "./Background/Background";
import InfoCards from "./InfoCards/InfoCards";
import Milestones from "./Milestones/Milestones";
import GalleryPreview from "@/app/GalleryPreview";
import Specifications from "@/app/Specifications/Specifications";
import Interior from "@/app/Interior";

export default function Home() {
  return (
      <main className="min-h-screen relative ">
          <Hero/>
          <Introduction/>
          <Background/>
          <InfoCards/>
          <Milestones/>
          <GalleryPreview/>
          <Specifications/>
          <Interior/>
      </main>
  );
}
