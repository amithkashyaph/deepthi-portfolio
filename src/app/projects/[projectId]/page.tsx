import ImageRow from "@/components/ImageRow";
import ProjectHero4 from "@/components/ProjectHero4";
import ProjectInfo from "@/components/ProjectInfo";
import { allProjects } from "@/utils/constants";

interface Params {
  params: Promise<{ projectId: number }>;
}

const ProjectDetails = async ({ params }: Params) => {
  const projectId = (await params).projectId;

  const index = Number(projectId) - 1;
  const projectDetails = allProjects[index];

  return (
    <main>
      <ProjectHero4
        images={projectDetails.images}
        name={projectDetails.name}
        description={projectDetails.shortDescription}
        video={projectDetails.video}
      />
      {/* More content */}
      {projectDetails.images.length >= 2 && (
        <ImageRow images={projectDetails.images} title="Hello" />
      )}
      <ProjectInfo
        additionalInfo={projectDetails.additionalInfo}
        description={projectDetails.description}
        designHighlights={projectDetails.designHighlights}
        toolsUsed={projectDetails.toolsUsed}
      />
    </main>
  );
};

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    projectId: project.id.toString(),
  }));
}

export default ProjectDetails;
