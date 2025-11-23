import React, { useState, useEffect, createContext, useContext } from 'react';

const RouterContext = createContext();

export const useRouter = () => {
    const context = useContext(RouterContext);
    if (!context) {
        throw new Error('useRouter must be used within Router');
    }
    return context;
};

export const HashRouter = ({ children }) => {
    const [currentPath, setCurrentPath] = useState(window.location.hash.slice(1) || '/');

    useEffect(() => {
        const handleHashChange = () => {
            setCurrentPath(window.location.hash.slice(1) || '/');
        };

        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const navigate = (path) => {
        window.location.hash = path;
    };

    return (
        <RouterContext.Provider value={{ currentPath, navigate }}>
            {children}
        </RouterContext.Provider>
    );
};

export const Routes = ({ children }) => {
    const { currentPath } = useRouter();

    const routes = React.Children.toArray(children);
    const matchedRoute = routes.find(route => route.props.path === currentPath);

    return matchedRoute || routes.find(route => route.props.path === '/');
};

export const Route = ({ element }) => {
    return element;
};

export const Link = ({ to, children, className, onClick }) => {
    const handleClick = (e) => {
        e.preventDefault();
        window.location.hash = to;
        if (onClick) onClick();
    };

    return (
        <a href={`#${to}`} className={className} onClick={handleClick}>
            {children}
        </a>
    );
};

export const useLocation = () => {
    const { currentPath } = useRouter();
    return { pathname: currentPath };
};
