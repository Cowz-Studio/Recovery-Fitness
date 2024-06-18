import React, { useEffect, useRef, useState } from 'react';
import '../styles/index/TestSlider.css';

/**
 * TestSlider Component
 * 
 * This component displays a scrolling text slider with an optional background image
 * that appears on hover. The text color changes to white when the slider is hovered.
 * 
 * Parameters:
 * sliderText - The text to be displayed in the slider.
 * sliderColor - The background color of the slider.
 * sliderTime - The duration of the scrolling animation.
 * hoverImage - The URL of the image to be displayed as the background on hover.
 * 
 * @returns {JSX.Element} A React component that renders the text slider.
 */


const TestSlider = ({ sliderText, sliderColor, sliderTime, hoverImage }) => {
    const sliderContainerRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

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
        <div
            className={`slider-container ${isHovered ? 'hovered' : ''}`}
            ref={sliderContainerRef}
            style={{ backgroundColor: sliderColor }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="text-slider">
                <p>{sliderText}</p>
            </div>
            {hoverImage && (
                <div
                    className={`background-image ${isHovered ? 'visible' : ''}`}
                    style={{ backgroundImage: `url(${hoverImage})` }}
                />
            )}
        </div>
    );
};

export default TestSlider;