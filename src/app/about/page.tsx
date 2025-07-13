import Navigation from "@/components/Navigation";
import Image from "next/image";

const AboutPage = () => {
  return (
    <>
      <div className="h-screen bg-gray-600 bg-[url(/bg-option-07.png)] bg-blend-overlay bg-cover bg-center bg-no-repeat">
        <Navigation />
        <div className="flex items-center w-[1200px] mx-auto gap-16 mt-32">
          <div className="">
            <Image
              src="/deepthi-cover.jpeg"
              alt="Amith"
              width={700}
              height={700}
              className="rounded-3xl"
            />
          </div>
          <div className="text-white w-[70%]">
            <h1 className="text-5xl animate-fade-in-left">Hi there!</h1>
            <p className="text-8xl animate-fade-in-right"> I&apos;m Deepthi,</p>
            <p className="leading-[1.9] mt-6 animate-fade-in-bottom text-[18px]">
              With over 4 years of experience across 30+ residential projects,
              branded retail layouts, and graphic design campaigns, I specialize
              in creating spaces and visuals that tell a story. I’ve developed
              design packs for multi-format stores across Europe, delivered 20+
              brand identity projects, and crafted visual content that bridges
              function with aesthetics. My approach blends structured thinking
              with creative expression—always focused on clarity, engagement.
            </p>
            <p className="leading-[1.5] mt-5 animate-fade-in-bottom text-[18px]">
              I believe good design isn’t just seen—it’s felt. Let’s build
              something beautiful.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
