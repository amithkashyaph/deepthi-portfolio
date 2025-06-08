import Link from "next/link";
import Navigation from "./Navigation";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="h-screen bg-gray-600 bg-[url(/deepthi-cover-2.JPG)] bg-blend-overlay  relative w-[100%] overflow-hidden">
      <div className="z-30">
        <Navigation />
      </div>
      <div className="absolute w-[90%] mx-auto top-[10%]  h-full  flex justify-center items-center">
        <div className="w-[50%] ml-48">
          <h1 className="text-8xl text-white font-bold animate-fade-in-left">
            Hello
          </h1>
          <div className="text-7xl text-white font-bold">
            <span className="block animate-fade-in-right">I&apos;m </span>
            <p className="inline-block text-9xl animate-fade-in-bottom">
              Deepthi,
            </p>
          </div>
          <h3 className="text-white text-[20px] mt-6 animate-fade-in-appear">
            a space shaper and visual storyteller. With a background in
            architecture and a passion for design that speaks, I love blending
            structure with creativity. Whether it’s designing a cozy home, a
            smart retail layout or a striking brand identity, I aim to make
            every project meaningful and visually compelling.
          </h3>
          <h3 className="text-white text-[20px] mt-6 animate-fade-in-appear">
            I believe good design isn’t just seen—it’s felt. Let’s build
            something beautiful.
          </h3>
          <div className="flex gap-4 mt-8">
            <Link href={"/projects"}>
              <button className="border-none px-6 py-3 bg-amber-500 text-[18px] tracking-wider rounded-3xl  hover:bg-amber-600 hover:text-white cursor-pointer w-4xs animate-fade-in-appear">
                View Portfolio
              </button>
            </Link>
            <button className="border-none px-6 py-3 bg-amber-500 text-[18px] tracking-wider  rounded-3xl  hover:bg-amber-600 hover:text-white cursor-pointer  w-4xs animate-fade-in-appear">
              <a href="/CV.pdf" target="_blank" rel="noopener noreferrer">
                Download CV
              </a>
            </button>
          </div>
        </div>
        <div className="w-[40%] mb-60">
          <Image
            src="/02.png"
            alt=""
            className=" object-cover h-[800px]"
            height={800}
            width={690}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
