import "./ProjectCard.css"

const ProjectCard = ({image, alt, projectName, description }) => {
  return (
    <div className="project-card">
      <img src={image} alt={alt} />
      <h3>{projectName}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProjectCard;
