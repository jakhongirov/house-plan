import './video.scss'

import Vd from '../../assets/image/video.mp4'

function Video() {
    return (
        <main className="main">
            <video src={Vd} autoPlay loop />
        </main>
    )
}

export default Video