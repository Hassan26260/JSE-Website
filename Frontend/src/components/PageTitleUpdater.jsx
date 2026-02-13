import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageTitleUpdater = () => {
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        let title = 'JSE Engineering Pvt Ltd';

        // Map paths to titles
        if (path === '/') {
            title = 'Home - JSE Engineering';
        } else if (path === '/services') {
            title = 'Services - JSE Engineering';
        } else if (path === '/portfolio') {
            title = 'Portfolio - JSE Engineering';
        } else if (path === '/internship') {
            title = 'Internship - JSE Engineering';
        } else if (path === '/career') {
            title = 'Career - JSE Engineering';
        } else if (path === '/contact') {
            title = 'Contact - JSE Engineering';
        } else if (path.startsWith('/services/design/')) {
            // Dynamic handling for design services
            const serviceName = path.split('/').pop().replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
            title = `${serviceName} - JSE Services`;
        }

        document.title = title;
    }, [location]);

    return null;
};

export default PageTitleUpdater;
