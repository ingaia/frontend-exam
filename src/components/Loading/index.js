import React from 'react';

import Loader from '../../../assets/loader.svg';
import './style.less';

export default function Loading(){
    return (
        <div className="loading-page">
            <Loader/>
        </div>
    );
}