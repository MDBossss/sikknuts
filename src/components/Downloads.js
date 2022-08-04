import DiscordButton from "./DiscordButton"
import GitHubButton from "./GitHubButton"
import GoogleButton from "./GoogleButton"

const Downloads = () => {
  return (
    <div className="downloads">
      <h1>downloads</h1>
      <span>login to access downloads</span>
      <div className="login-options">
        <DiscordButton link="https://www.youtube.com/watch?v=dQw4w9WgXcQ&t"/>
        <GitHubButton link="https://www.youtube.com/watch?v=dQw4w9WgXcQ&t"/>
        <GoogleButton link="https://www.youtube.com/watch?v=dQw4w9WgXcQ&t"/>
      </div>
    </div>
  )
}

export default Downloads