import React, { useEffect, useRef } from 'react';
import '../styles/index/TestSlider.css';

const TextSlider = ({ sliderText, sliderColor, sliderTime }) => {
    const sliderContainerRef = useRef(null);

    useEffect(() => {
        const sliderContainer = sliderContainerRef.current;
        const textSlider = sliderContainer.querySelector('.text-slider');

        if (textSlider) {
            const totalWidth = textSlider.scrollWidth;

            // Append clones to the textSlider itself, not the container
            while (sliderContainer.scrollWidth < totalWidth * 3) {
                const clone = textSlider.cloneNode(true);
                textSlider.appendChild(clone);
            }

            // Dynamically set animation duration for the entire textSlider
            textSlider.style.animationDuration = `${sliderTime}`;
        }
    }, [sliderTime]);

    return (
        <div className="slider-container" ref={sliderContainerRef} style={{ backgroundColor: sliderColor }}>
            <div className="text-slider">
                <p>{sliderText}</p>
            </div>
        </div>
    );
};

export default TextSlider;