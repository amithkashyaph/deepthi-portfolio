import Navigation from "./Navigation";

const Hero = () => {
  return (
    <div className="h-screen bg-gray-600 bg-[url(/deepthi-cover-2.jpg)] bg-blend-overlay bg-cover relative w-[100%]">
      <Navigation />
      <div className="absolute top-[50%] left-[50%] translate-x-[-150%] translate-y-[-50%] w-96">
        <h1 className="text-8xl text-white font-bold animate-fade-in-left">
          Hello
        </h1>
        <div className="text-7xl text-white font-bold">
          <span className="block animate-fade-in-right">I'm </span>
          <p className="inline-block text-9xl animate-fade-in-bottom">
            Deepthi
          </p>
        </div>
        <h3 className="text-white text-2xl mt-6 animate-fade-in-appear">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
          eum explicabo, architecto assumenda inventore non earum cumque magnam
          facilis deserunt.
        </h3>
        <div className="flex gap-4 mt-8">
          <button className="border-none px-6 py-3 bg-amber-500 text-[20px] rounded-3xl  hover:bg-amber-600 hover:text-white cursor-pointer w-4xs animate-fade-in-appear">
            View Portfolio
          </button>
          <button className="border-none px-6 py-3 bg-amber-500 text-[20px]  rounded-3xl  hover:bg-amber-600 hover:text-white cursor-pointer  w-4xs animate-fade-in-appear">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
