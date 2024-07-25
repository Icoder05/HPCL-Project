import React, { useRef } from 'react'
import './Career.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/quote-1.png'
import user_2 from '../../assets/quote-2.png'
import user_3 from '../../assets/quote-3.png'
import user_4 from '../../assets/quote-4.png'
import user_5 from '../../assets/quote-5.png'

const Career = () => {
    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if(tx > -80){
            tx -= 20;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slideBackward = () => {
        if(tx < 0){
            tx += 20;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
      return (
        <div className="career-1">
            <h1>CAREER IN FIRE&SAFETY</h1>
            <h3>What We Make U Learn(Career Growth)</h3>
    <div className='career'>
        <img src={next_icon} alt="" className='next_btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back_btn' onClick={slideBackward}/>
        <div className='slider'>
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="quote">
                            <img src={user_1} alt="" />
                        </div>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="quote">
                            <img src={user_2} alt="" />
                        </div>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="quote">
                            <img src={user_3} alt="" />
                        </div>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="quote">
                            <img src={user_4} alt="" />
                        </div>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="quote">
                            <img src={user_5} alt="" />
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    </div>
  )
}

export default Career