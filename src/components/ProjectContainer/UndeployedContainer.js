import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'

const ProjectContainer = ({ projectArray }) => (
  <div className='project'>
    <h3>Undeployed Projects</h3>

    {
      projectArray.map((project) => (<a href={project.url}>{project.name}</a>)
      )
    }

  </div>
)

export default ProjectContainer
