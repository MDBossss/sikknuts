import Link from "./Link";

const links =["https://download1522.mediafire.com/c8zfxalf9bpg/ynibvtfh9chfsb2/Adobe+Software+Master+Collection+2021+Precracked.torrent","https://download1647.mediafire.com/g0bp8epvbvxg/ynwc1srfemzsm1z/Windows+and+Office+Activator.zip"]


const DownloadLinks = () => {
  return (
    <div className="downloads">
        <div className="sidebar">
            <div className="status"></div>
            <span className="sidebar-text">Online</span>
        </div>
        <div className="links">
            {links.map((link,index) => <Link link={link} key={index}/>)}
        </div>
    </div>
  )
}

export default DownloadLinks