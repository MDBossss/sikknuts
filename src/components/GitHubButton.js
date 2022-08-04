import {FaGithub} from "react-icons/fa";
const GitHubButton = ({link}) => {
  return (
    <div className="button" onClick={() => window.open(link)} ><FaGithub/>github</div>
  )
}

export default GitHubButton