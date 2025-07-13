import Navigation from "@/components/Navigation";
import WorkExperience from "@/components/WorkExperience";

const WorkExperiencePage = () => {
  return (
    <>
      <div className="h-[100%] bg-[url(/bg-option-07.png)] bg-blend-overlay bg-cover bg-center bg-no-repeat">
        <Navigation />
        <div>
          <WorkExperience />
        </div>
      </div>
    </>
  );
};

export default WorkExperiencePage;
