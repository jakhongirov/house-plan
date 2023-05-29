import { useNavigate } from 'react-router-dom'
import './main.scss'

import Img from '../../assets/image/planshet-1.png'

function Main() {
    const navigate = useNavigate()

    return (
        <main className='main'>
            <img className='img' src={Img} alt="plan" />

            <div className='btn-box'>
                <button onClick={() => navigate('/images')}>Images</button>
                <button onClick={() => navigate('/video')}>Video</button>
            </div>
        </main>
    )
}

export default Main