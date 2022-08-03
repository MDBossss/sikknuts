import Typical from "react-typical";
import Button from "./Button";


const Header = () => {
  return (
    <div className="header">
        <h1>sikknuts</h1>
        <Typical steps={[2500,"jer budale nemaju kuda."]} wrapper="p" loop="no"/>
        <Button/>
    </div>
  )
}

export default Header