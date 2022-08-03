import React from "react"
import {FaDownload} from "react-icons/fa"

const Link = ({link}) => {
    
    const split = link.split("/");
    const title = split[split.length-1].replaceAll("+"," ").split(".")[0]

  return (
    <div>
        <h3 className="link-title" onClick={() => window.open(link)}>{title} <FaDownload style={{color: "black"}}/></h3>
    </div>
  )
}

export default Link