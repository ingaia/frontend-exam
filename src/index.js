import React, { useEffect, useState } from 'react';

import Routes from './routes';
import Loading from './components/Loading';

import "./main.less";

export default function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            { loading ? <Loading /> : <Routes />}
        </>
    )
}