import React from "react"

const Link = ({link}) => {

    const split = link.split("/");
    const title = split[split.length-1].replaceAll("+"," ").split(".")[0]

  return (
    <div>
        <h2>{title}</h2>
    </div>
  )
}

export default Link