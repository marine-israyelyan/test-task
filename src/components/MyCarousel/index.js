import { Carousel } from 'antd';
import { useRef } from "react";

import './styles.css';

const MyCarousel = ()=>{
    const carouselRef = useRef(null);

    const arrowPress = (event)=>{
        if(event === 'prev'){
            carouselRef.current.prev();
        }else {
            carouselRef.current.next();
        }
    }

    return(
        <div>
            <div className='arrows-container'>
                <p onClick={()=>{
                    arrowPress('prev')
                }}>Prev</p>
                <p onClick={()=>{
                    arrowPress('next')
                }}>Next</p>
            </div>
            <Carousel ref={carouselRef}>
                <div>
                    <h3 className='content-style'>1</h3>
                </div>
                <div>
                    <h3 className='content-style'>2</h3>
                </div>
                <div>
                    <h3 className='content-style'>3</h3>
                </div>
                <div>
                    <h3 className='content-style'>4</h3>
                </div>
            </Carousel>
        </div>
    )
}

export default MyCarousel;
