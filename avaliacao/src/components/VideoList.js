import React, { Component } from 'react';
import axios from 'axios';
import ButtonMoreVideo from './ButtonMoreVideo';

import '../styles/VideoList.scss';

const maxResultLimit = 5;

export default class VideoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            pageToken: false,
            maxResult : maxResultLimit
        }
    }

    componentDidMount() {
        this.getVideos(this.state.maxResult, false);
    }

    getVideos = (maxResult, pageToken) => {
        let havePageToken = !pageToken ? '' : '&pageToken=' + pageToken;
        axios.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyBnCC6apcNE7-uz-BqZidy1EUoSewGTNjk&playlistId=PL6t93nUFQQ1ZiXMfhPyhjb0PX3LgEVMcF&maxResults=' + maxResult + havePageToken)
        .then((response) => {

            // handle success

            let incrementVideos = this.state.videos;
            let videosConcat = incrementVideos.concat(response.data.items);
            let totalResults = response.data.pageInfo.totalResults;
            this.setState({ 
                videos: videosConcat, 
                pageToken: response.data.nextPageToken ,
                maxResult: (totalResults  - videosConcat.length) < maxResultLimit ? (totalResults  - videosConcat.length) : maxResultLimit
            });
        })
        .catch(function (error) {

            // handle error

            console.log(error);
        })
    }

    render() {
        return (
            <div className="video-list-container">
                <ul>
                    {
                        this.state.videos.map((data, idx) =>
                        <li key={idx}>
                            <button onClick={() => this.props.funcaoOpenVideo(this.props.linkEmbed + data.snippet.resourceId.videoId)}>
                                <img src={data.snippet.thumbnails.standard.url} alt={data.snippet.title} />
                                <figcaption>
                                    <p>{data.snippet.title}</p>
                                </figcaption>
                            </button>
                        </li>
                        )
                    }

                    {
                        this.state.maxResult > 0 &&
                        <ButtonMoreVideo
                            funcaoVideo={this.getVideos}
                            maxResult={this.state.maxResult}
                            token={this.state.pageToken}
                        />  
                    }
                </ul>
            </div>
        )
    }
}
