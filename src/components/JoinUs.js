import React from 'react'
import DiscordButton from './DiscordButton'
import image from "../images/channel.png"
import Typical from "react-typical";

const JoinUs = () => {
  return (
    <div className="joinus">
        
        <div className="joinus-right">
            <img src={image} alt="channel" />
        </div>
        <div className="joinus-left">
            <div className="joinus-title">
              <span>PRIDRUŽI SE</span>
              <h1>DANAS</h1>
            </div>
            <Typical steps={[2500,"ne zaboravno iskustvo",2500,"aktivni članovi",2500,"prijateljska zajednica"]} wrapper="p" loop={Infinity}/>
            <DiscordButton link="https://discord.gg/nB6GxNje"/>
        </div>
    </div>
  )
}

export default JoinUs
