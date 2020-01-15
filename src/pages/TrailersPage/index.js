import React, { useEffect, useState } from 'react';
import SideMenu from '../../components/SideMenu';
import Trailers from '../../components/Trailers';

import api from '../../services/youtube-api';
import './style.less';

export default function TrailersPage({ history }) {
    const [loading, setLoading] = useState(false);
    const [trailers, setTrailers] = useState([]);
    const [nextPageToken, setNextPageToken] = useState('');

    async function loadPlaylist(params) {
        const response = await api.get('/playlistItems', {
            params
        });
        
        let newTrailers = trailers.concat(response.data.items);
        
        setLoading(false);
        setTrailers(newTrailers);
        setNextPageToken(response.data.nextPageToken);
    }
    
    function loadMore(){
        setLoading(true);
        const params = {
            key: 'AIzaSyBh99ay4rru9-e4pccxqd8BXvPT76Nw4WQ',
            part: 'snippet',
            playlistId: 'PL6t93nUFQQ1ZiXMfhPyhjb0PX3LgEVMcF',
            pageToken: nextPageToken
        }
        loadPlaylist(params);
    }

    useEffect(() => {
        const params = {
            key: 'AIzaSyBh99ay4rru9-e4pccxqd8BXvPT76Nw4WQ',
            part: 'snippet',
            playlistId: 'PL6t93nUFQQ1ZiXMfhPyhjb0PX3LgEVMcF'
        }

        loadPlaylist(params);
    }, []);

    function logOut(){
        history.push('/');
    }

    return (
        <div className="trailers-page">
            <SideMenu logOut={logOut}/>
            <Trailers trailers={trailers} nextPageToken={nextPageToken} loadMore={loadMore} loading={loading}/>
        </div>
    );
}