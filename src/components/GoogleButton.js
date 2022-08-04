import {FaGoogle} from "react-icons/fa";
const GoogleButton = ({link}) => {
  return (
    <div className="button" onClick={() => window.open(link)} ><FaGoogle/>google</div>
  )
}

export default GoogleButton