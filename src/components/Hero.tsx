import Navigation from "./Navigation";

const Hero = () => {
  return (
    <div className="h-screen bg-gray-600 bg-[url(/deepthi-cover-2.jpg)] bg-blend-overlay  relative w-[100%]">
      <div className="z-30">
        <Navigation />
      </div>
      <div className="absolute w-[90%] mx-auto top-[10%]  h-full  flex justify-center items-center">
        <div className="w-[60%] ml-48">
          <h1 className="text-8xl text-white font-bold animate-fade-in-left">
            Hello
          </h1>
          <div className="text-7xl text-white font-bold">
            <span className="block animate-fade-in-right">I'm </span>
            <p className="inline-block text-9xl animate-fade-in-bottom">
              Deepthi,
            </p>
          </div>
          <h3 className="text-white text-[20px] mt-6 animate-fade-in-appear">
            a space shaper and visual storyteller. With a background in
            architecture and a passion for design that speaks, I love blending
            structure with creativity. Whether it’s designing a cozy home, a
            smart retail layout, or a striking brand identity, I aim to make
            every project meaningful and visually compelling.
          </h3>
          <h3 className="text-white text-[20px] mt-6 animate-fade-in-appear">
            I believe good design isn’t just seen—it’s felt. Let’s build
            something beautiful.
          </h3>
          <div className="flex gap-4 mt-8">
            <button className="border-none px-6 py-3 bg-amber-500 text-[20px] rounded-3xl  hover:bg-amber-600 hover:text-white cursor-pointer w-4xs animate-fade-in-appear">
              View Portfolio
            </button>
            <button className="border-none px-6 py-3 bg-amber-500 text-[20px]  rounded-3xl  hover:bg-amber-600 hover:text-white cursor-pointer  w-4xs animate-fade-in-appear">
              <a href="/CV.pdf" target="_blank" rel="noopener noreferrer">
                Download CV
              </a>
            </button>
          </div>
        </div>
        <div className="w-[30%] mb-72">
          <img src="/hero.png" alt="" className=" object-cover  z-20" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
