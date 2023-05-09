import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import UndeployedProjectContainer from '../ProjectContainer/UndeployedContainer'
import './Projects.css'

const Projects = () => {
  if (!projects.length) return null

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Projects</h2>

      <div className='projects__grid'>
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
        <UndeployedProjectContainer projectArray={[
          { name: 'Clamor', url: "https://github.com/AJLosey/Clamor" },
          { name: 'E-commerce Back-end', url: "https://github.com/AJLosey/E-commerce-back-end" },
          { name: 'Employee Tracker', url: "https://github.com/AJLosey/employee-tracker" },
          { name: 'Team Profile Generator', url: "https://github.com/AJLosey/Team-Profile-Generator" },
          { name: 'Readme Generator', url: "https://github.com/AJLosey/Readme-generator" }
        ]} />
      </div>
    </section>
  )
}

export default Projects
