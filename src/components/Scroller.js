import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';


const Scroller = ({ children }) => {
    const containerRef = useRef(null);
    const [boundary, setBoundary] = useState('left');
    const slidepower = 300;

    useEffect(() => {
    }, [boundary]);

    const left = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({
                top: 0,
                left: -slidepower,
                behaviour: 'smooth'
            })

            if (containerRef.current.scrollLeft == 0) {
                console.log('left');
                setBoundary('left');
            } else {
                setBoundary('');
            }
        }
    }

    const right = () => {

        if (containerRef.current) {
            containerRef.current.scrollBy({
                top: 0,
                left: slidepower,
                behaviour: 'smooth'
            })

            if (Math.round(containerRef.current.scrollLeft) == containerRef.current.scrollWidth - containerRef.current.offsetWidth) {
                setBoundary('right');
            } else {
                setBoundary('');
            }
        }
    }
    return (

        <div className="relative flex items-center overflow-y-auto">
            {containerRef.current && containerRef.current.childElementCount > 4 &&
                <div className={`hidden ${boundary === 'left' ? 'md:hidden' : 'md:flex'}  items-center justify-center absolute z-40 left-0 top-2/4 text-5xl w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-full`}
                    onClick={left}>
                    <ChevronLeft />
                </div>
            }
            <div className="dress-cards-overflow" ref={containerRef}>
                {children}
            </div >
            {containerRef.current && containerRef.current.childElementCount > 4 &&
                <div className={`hidden md:flex items-center ${boundary === 'right' ? 'md:hidden' : 'md:flex'}  justify-center absolute z-40 right-0 top-2/4 text-5xl w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-full`}
                    onClick={() => right()}>
                    <ChevronRight />
                </div>
            }
        </div>



    )
}


export default Scroller;