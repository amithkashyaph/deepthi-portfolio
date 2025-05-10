import Navigation from "@/components/Navigation";
import Image from "next/image";

const AboutPage = () => {
  return (
    <>
      <div className="h-screen bg-gray-600 bg-[url(/deepthi-cover-2.jpg)] bg-blend-overlay">
        <Navigation />
        <div className="flex items-center w-[1200px] mx-auto gap-16 mt-32">
          <div className="">
            <Image
              src="/amith.png"
              alt="Amith"
              width={700}
              height={700}
              className="rounded-3xl"
            />
          </div>
          <div className="text-white w-[70%]">
            <h1 className="text-5xl">Hi there!</h1>
            <p className="text-8xl"> I'm Deepthi</p>
            <p className="leading-[1.9] mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
              numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Labore, laborum! Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Nam animi dolores pariatur mollitia voluptas id
              fuga ullam quos! Totam, praesentium!
            </p>
            <p className="leading-[1.9] mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
              numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Labore, laborum!
            </p>
            <button className="border-none px-8 py-4 bg-amber-500 text-2xl rounded-3xl mt-8 hover:bg-amber-600 hover:text-white cursor-pointer">
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
