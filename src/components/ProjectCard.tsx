import Link from "next/link";
import {
  exteriorProjects,
  interiorProjects,
  graphicDesignProjects,
} from "../utils/constants";
import Image from "next/image";

const ProjectCard = () => {
  return (
    <div className="w-full mt-16 opacity-100 overflow-x-hidden">
      <h1 className="text-white text-center text-5xl mb-10 uppercase tracking-widest">
        Projects
      </h1>
      <div className="mx-auto w-[80%] my-20">
        <h3 className=" text-white text-3xl mb-10 uppercase tracking-widest flex justify-baseline">
          Graphic Design Projects
        </h3>
        <div className="flex gap-10 overflow-x-auto">
          {graphicDesignProjects.map((project) => (
            <Link
              href={`/projects/${encodeURIComponent(project.id)}`}
              key={project.id}
            >
              <div
                // className="w-[350px] p-5 flex-shrink-0  rounded-xl overflow-hidden  hover:opacity-100 hover:scale-[1.05] bg-red-900/20 text-white hover:bg-red-950 cursor-pointer">
                className="w-[350px] h-[430px] p-5 flex-shrink-0 rounded-xl overflow-hidden bg-red-900/20 hover:bg-red-950 hover:opacity-100 hover:scale-[.98] text-white cursor-pointer transition duration-300 relative"
              >
                <div className="relative md:max-w-[350px] h-[220px]">
                  <Image
                    src={project.images[0]}
                    className="rounded-xl max-h-[220px] w-full object-cover "
                    alt="project image"
                    fill
                  />
                </div>
                <div>
                  <p
                    className={`${
                      project.name.length > 24 ? "text-[22px]" : "text-2xl"
                    } my-2.5 tracking-wide`}
                  >
                    {project.name}
                  </p>
                  <p className="text-wrap">{project.shortDescription}</p>
                </div>
                <button className="absolute bottom-4 left-1/2 translate-x-[-50%] px-6 py-3 tracking-wider rounded-xl bg-amber-700 w-[90%] cursor-pointer">
                  Click to know more
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="mx-auto w-[80%] flex flex-col">
        <h3 className=" text-white text-3xl mb-10 uppercase tracking-widest flex justify-baseline">
          Exterior Projects
        </h3>
        <div className="flex gap-10 overflow-x-auto">
          {exteriorProjects.map((project) => (
            <Link
              href={`/projects/${encodeURIComponent(project.id)}`}
              key={project.id}
            >
              <div className="w-[350px] h-[430px] p-5 flex-shrink-0 rounded-xl overflow-hidden bg-red-900/20 hover:bg-red-950 hover:opacity-100 hover:scale-[.98] text-white cursor-pointer transition duration-300 relative">
                <div className="relative md:max-w-[350px] h-[220px]">
                  <Image
                    src={project.images[0]}
                    className="rounded-xl w-full h-full object-cover"
                    alt="project image"
                    fill
                  />
                </div>
                <div>
                  <p
                    className={`${
                      project.name.length > 24 ? "text-[22px]" : "text-2xl"
                    } my-2.5 tracking-wide`}
                  >
                    {project.name}
                  </p>
                  <p className="text-wrap">{project.shortDescription}</p>
                </div>
                <button className="absolute bottom-4 left-1/2 translate-x-[-50%] px-6 py-3 tracking-wider rounded-xl bg-amber-700 w-[90%] cursor-pointer">
                  Click to know more
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="mx-auto w-[80%] my-20">
        <h3 className=" text-white text-3xl mb-10 uppercase tracking-widest flex justify-baseline">
          Interior Projects
        </h3>
        <div className="flex gap-10 overflow-x-auto">
          {interiorProjects.map((project) => (
            <Link
              href={`/projects/${encodeURIComponent(project.id)}`}
              key={project.id}
            >
              <div
                // className="w-[350px] p-5 flex-shrink-0  rounded-xl overflow-hidden  hover:opacity-100 hover:scale-[1.05] bg-red-900/20 text-white hover:bg-red-950 cursor-pointer">
                className="w-[350px] h-[430px] p-5 flex-shrink-0 rounded-xl overflow-hidden bg-red-900/20 hover:bg-red-950 hover:opacity-100 hover:scale-[.98] text-white cursor-pointer transition duration-300 relative"
              >
                <div className="relative md:max-w-[350px] h-[220px]">
                  <Image
                    src={project.images[0]}
                    className="rounded-xl w-full h-full object-cover"
                    alt="project image"
                    fill
                  />
                </div>
                <div>
                  <p
                    className={`${
                      project.name.length > 24 ? "text-[22px]" : "text-2xl"
                    } my-2.5 tracking-wide`}
                  >
                    {project.name}
                  </p>
                  <p className="text-wrap">{project.shortDescription}</p>
                </div>
                <button className="absolute bottom-4 left-1/2 translate-x-[-50%] px-6 py-3 tracking-wider rounded-xl bg-amber-700 w-[90%] cursor-pointer">
                  Click to know more
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
