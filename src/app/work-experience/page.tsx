import Navigation from "@/components/Navigation";
import WorkExperience from "@/components/WorkExperience";

const WorkExperiencePage = () => {
  return (
    <>
      <div className="h-[100%] bg-gray-600 bg-[url(/deepthi-cover-2.jpg)] bg-blend-overlay ">
        <Navigation />
        <div>
          <WorkExperience />
        </div>
      </div>
    </>
  );
};

export default WorkExperiencePage;
