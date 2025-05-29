import { projects } from "../utils/constants";

const ProjectCard = () => {
  return (
    <div className="w-full mt-16 opacity-100 overflow-x-hidden">
      <h1 className="text-white text-center text-5xl mb-10 uppercase tracking-widest">
        Projects
      </h1>
      <div className="mx-auto w-[80%] flex flex-col">
        <h3 className=" text-white text-3xl mb-10 uppercase tracking-widest flex justify-baseline">
          Exterior Projects
        </h3>
        <div className="flex gap-10 overflow-x-auto">
          {projects.map((project) => (
            <div
              // className="w-[350px] p-5 flex-shrink-0  rounded-xl overflow-hidden  hover:opacity-100 hover:scale-[1.05] bg-red-900/20 text-white hover:bg-red-950 cursor-pointer">
              className="w-[350px] p-5 flex-shrink-0 rounded-xl overflow-hidden bg-red-900/20 hover:bg-red-950 hover:opacity-100 hover:scale-[.98] text-white cursor-pointer transition duration-300"
            >
              <div>
                <img src={project.image} className="rounded-xl" />
              </div>
              <div>
                <p className="text-2xl my-2.5 tracking-wide">{project.name}</p>
                <p className="text-wrap">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto w-[80%] my-20">
        <h3 className=" text-white text-3xl mb-10 uppercase tracking-widest flex justify-baseline">
          Interior Projects
        </h3>
        <div className="flex gap-10 overflow-x-auto">
          {projects.map((project) => (
            <div
              // className="w-[350px] p-5 flex-shrink-0  rounded-xl overflow-hidden  hover:opacity-100 hover:scale-[1.05] bg-red-900/20 text-white hover:bg-red-950 cursor-pointer">
              className="w-[350px] p-5 flex-shrink-0 rounded-xl overflow-hidden bg-red-900/20 hover:bg-red-950 hover:opacity-100 hover:scale-[.98] text-white cursor-pointer transition duration-300"
            >
              <div>
                <img src={project.image} className="rounded-xl" />
              </div>
              <div>
                <p className="text-2xl my-2.5 tracking-wide">{project.name}</p>
                <p className="text-wrap">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
