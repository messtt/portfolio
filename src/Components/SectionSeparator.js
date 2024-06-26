import React, { useEffect } from 'react';
import '../Styles/SectionSeparator.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function SectionSeparator() {
    useEffect(() => {

    }, []);

    return (
        <div className="section_separator"></div>
    );
}

export default SectionSeparator;
