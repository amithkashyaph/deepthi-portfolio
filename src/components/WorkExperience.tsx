import { workExperiences } from "../utils/constants";
import { BriefcaseIcon } from "@heroicons/react/24/outline"; // Example icon

const WorkExperience = () => {
  return (
    <div className="py-12 dark:bg-gray-900 rounded-lg shadow-xl bg-transparent ">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center mb-8">
          <BriefcaseIcon className="h-8 w-8 text-indigo-500 mr-4" />
          <h2 className="text-3xl font-extrabold  text-gray-100 tracking-tight">
            My Professional Journey
          </h2>
        </div>
        <ul className="relative list-none">
          {workExperiences.map((experience, index) => (
            <li key={index} className="mb-10 ml-4 bg-transparent text-white">
              <div className="relative before:absolute before:w-3 before:h-3 before:rounded-full before:bg-indigo-400 before:left-[-17px] before:top-0">
                <div className="shadow-md rounded-lg px-6 hover:shadow-lg transition duration-300 ease-in-out  bg-transparent">
                  <div className="md:flex md:justify-between md:items-baseline mb-3">
                    <div>
                      <h3 className="text-xl font-semibold  dark:text-indigo-400 tracking-tight">
                        {experience.title}
                      </h3>
                      <p className=" dark:text-gray-300 text-sm">
                        {experience.company}
                      </p>
                    </div>
                    <p className=" dark:text-gray-400 text-sm italic">
                      {experience.years}
                    </p>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold  dark:text-gray-200 mb-2">
                      Responsibilities:
                    </h4>
                    <ul className="list-disc pl-5  dark:text-gray-300 space-y-2 text-sm">
                      {experience.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                  {experience.skills && experience.skills.length > 0 && (
                    <div>
                      <h4 className="text-md font-semibold dark:text-gray-200 mb-2">
                        Skills:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center rounded-full bg-indigo-100 dark:bg-indigo-700 px-3 py-1 text-xs font-medium text-indigo-700 dark:text-indigo-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </li>
          ))}
          {/* Vertical line connecting the bullet points */}
          <div className="absolute top-0 left-[4px] h-full border-l-2 border-indigo-300 dark:border-indigo-600"></div>
        </ul>
      </div>
    </div>
  );
};

export default WorkExperience;
