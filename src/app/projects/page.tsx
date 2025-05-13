import Navigation from "@/components/Navigation";
import Testimonial from "@/components/Testimonial";

const Projects = () => {
  return (
    <>
      <div className="h-screen bg-gray-600 bg-[url(/deepthi-cover-2.jpg)] bg-blend-overlay">
        <Navigation />
        <div className="flex flex-col items-center justify-center">
          <Testimonial />
        </div>
      </div>
    </>
  );
};

export default Projects;
