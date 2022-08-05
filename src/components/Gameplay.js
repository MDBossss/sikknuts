import React from 'react'

const Gameplay = () => {
  return (
    <div className="gameplay">
        <div className="gameplay-right">
            {/* <h1>iskusimo epske trenutke zajedno</h1> */}
            <div className="gameplay-games">
                <div className="game">
                    <img src="https://cdn2.steamgriddb.com/file/sgdb-cdn/logo_thumb/fbad057973f18db4d1045d3538e69c50.png" alt="" />
                </div>
                <div className="game">
                    <img src="https://sn9jpk.media.zestyio.com/Shield-Solid-On-Dark.png" alt="" />
                </div>
                <div className="game">
                    <img src="https://www.pngkey.com/png/full/1010-10108712_apex-legends-logo-apex-legends-logo-png.png" alt="" />
                </div>
            </div>
        </div>
        <div className="gameplay-left">
            <video src="https://media2.giphy.com/media/erKuTa5GdkqYuhK7KD/giphy480p.mp4?cid=790b7611d8bd401beae2883b4091c807edcdd36191dd59c7&rid=giphy480p.mp4&ct=v&cc=en" autoPlay playsInline crossOrigin="anonymous" muted="true" loop="true"></video>
        </div>
        
    </div>
  )
}

export default Gameplay