import { useEffect, useRef, useState } from "react";

import './styles.css';

const MovingQube = ()=>{
    const qube = useRef(null);
    const timer = useRef(null);
    const [arrows, setArrows] = useState([]);

    const handleKeyDown = (event)=>{
        if(!arrows.includes(event.key) && ['ArrowDown', 'ArrowRight', 'ArrowLeft', 'ArrowUp'].includes(event.key)){
            setArrows([...arrows, event.key])
        }
    }

    const handleKeyUp = (event)=>{
        if(arrows.includes(event.key)){
            let arr = [...arrows]
            const index = arr.indexOf(event.key);
            if (index > -1) {
                arr.splice(index, 1);
                setArrows(arr)
            }
        }
    }

    const moveElement = ()=>{
        if(!arrows.length){
            clearInterval(timer.current);
        }else {
            arrows.forEach((arrow)=>{
                switch (arrow){
                    case 'ArrowRight':
                        qube.current.style.marginLeft = `${Number(qube.current.style.marginLeft.slice(0, -2)) + 2}px`;
                        break
                    case 'ArrowLeft':
                        qube.current.style.marginLeft = `${Number(qube.current.style.marginLeft.slice(0, -2)) - 2}px`;
                        break
                    case 'ArrowDown':
                        qube.current.style.marginTop = `${Number(qube.current.style.marginTop.slice(0, -2)) + 2}px`;
                        break
                    case 'ArrowUp':
                        qube.current.style.marginTop = `${Number(qube.current.style.marginTop.slice(0, -2)) - 2}px`;
                        break
                }
            })
        }
    }

    useEffect(()=>{
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);
        return ()=>{
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        }
    },[arrows]);

    useEffect(()=>{
        if(timer.current){
            clearInterval(timer.current)
        }
        timer.current = setInterval(moveElement,50);
    },[arrows]);

    return (
        <div className='content-container'>
            <div className='qube' ref={qube}>
                {arrows.map((item,index)=><p key={index.toString()}>{item.replace('Arrow', '')}</p>)}
            </div>
        </div>
    )
}

export default MovingQube;
