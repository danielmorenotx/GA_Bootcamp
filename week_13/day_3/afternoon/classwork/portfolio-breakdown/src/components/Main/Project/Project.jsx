import ProjectCard from "../../ProjectCard/ProjectCard";

const Project = () => {
  const projectCardData = [
    {
      image: "https://via.placeholder.com/300x200",
      alt: "Project 1",
      projectName: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: "https://via.placeholder.com/300x200",
      alt: "Project 2",
      projectName: "Project 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: "https://via.placeholder.com/300x200",
      alt: "Project 3",
      projectName: "Project 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: "https://via.placeholder.com/300x200",
      alt: "Project 4",
      projectName: "Project 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: "https://via.placeholder.com/300x200",
      alt: "Project 5",
      projectName: "Project 5",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: "https://via.placeholder.com/300x200",
      alt: "Project 6",
      projectName: "Project 6",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    }
  ];
  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projectCardData.map((project, index) => {
          return (
            <ProjectCard key={index} image={project.image} alt={project.alt} projectName={project.projectName} description={project.description}/>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
