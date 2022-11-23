import React, { useEffect, useState } from 'react';

function index(props) {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    return (
        <span onClick={() => {
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
          }} className={`scrollup ${scrollPosition >= 350 ? 'show-scrollup-btn' : ''}`} id="scroll-up">
            <i className="ri-arrow-up-line"></i>
        </span>
    );
}

export default index;