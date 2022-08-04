import Typical from "react-typical";
import DiscordButton from "./DiscordButton";


const Header = () => {
  return (
    <div className="header">
        <h1>sikknuts</h1>
        <Typical steps={[2500,"jer budale nemaju kuda."]} wrapper="p" loop="no"/>
        <DiscordButton link="https://discord.gg/nB6GxNje"/>
    </div>
  )
}

export default Header