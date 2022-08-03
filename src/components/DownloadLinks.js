import Link from "./Link";

const links =["https://download1522.mediafire.com/c8zfxalf9bpg/ynibvtfh9chfsb2/Adobe+Software+Master+Collection+2021+Precracked.torrent"]


const DownloadLinks = () => {
  return (
    <div>
    {links.map((link,index) => <Link link={link} key={index}/>)}
    </div>
  )
}

export default DownloadLinks