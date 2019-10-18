import React from 'react';
import { ReactComponent as Loader } from '../assets/images/loader.svg';

import '../styles/Loading.scss';

export default function Loading() {
    return (
        <div id="loading-overlay" className="loading-overlay">
            <Loader className="loading-svg" width="100" height="100" />
        </div>
    )
}
