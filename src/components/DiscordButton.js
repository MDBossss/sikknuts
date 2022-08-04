import {FaDiscord} from "react-icons/fa";
const DiscordButton = ({link}) => {
  return (
    <div className="button" onClick={() => window.open(link)} ><FaDiscord/>discord</div>
  )
}

export default DiscordButton