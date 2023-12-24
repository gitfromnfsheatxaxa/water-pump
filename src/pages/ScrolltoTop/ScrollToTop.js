import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
        // Scroll to the top of the page when the route changes
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return null; // This component doesn't render anything
};

export default ScrollToTop;
