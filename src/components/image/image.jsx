import './image.scss'

import img1 from '../../assets/image/3.jpg'
import img2 from '../../assets/image/render.jpg'
import img3 from '../../assets/image/render_Photo - 1.jpg'
import img4 from '../../assets/image/render_Photo - 2.jpg'
import img5 from '../../assets/image/render_Photo - 3.jpg'
import img6 from '../../assets/image/render_Photo - 4.jpg'

function Image() {
    return (
        <main className='main'>
            <ul className='list'>
                <li className='item'>
                    <img src={img1} alt="photo" />
                </li>
                <li className='item'>
                    <img src={img2} alt="photo" />
                </li>
                <li className='item'>
                    <img src={img3} alt="photo" />
                </li>
                <li className='item'>
                    <img src={img4} alt="photo" />
                </li>
                <li className='item'>
                    <img src={img5} alt="photo" />
                </li>
                <li className='item'>
                    <img src={img6} alt="photo" />
                </li>
            </ul>
        </main>
    )
}

export default Image