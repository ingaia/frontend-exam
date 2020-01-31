import React from 'react'

/* */

import axios from 'axios'
import moment from 'moment'

/* */

import witcherLogo from 'assets/logo/logo_dark.png'
import cdProjektLogo from 'assets/logo/cd-projekt-red.png'
import ingaiaLogo from 'assets/logo/ingaia.png'
import styles from './Home.module.scss'

/* */

const YOUTUBE_API_KEY = 'AIzaSyDOem9i64TMUAHddg4-WF50mqX2BywNvos'

/* */

class Home extends React.Component {

    constructor(){

        super()

        this.state = {

            ready: false,
            loading: false,
            items: []

        }

    }

    async componentDidMount(){

        await this.init()

    }

    /* */

    init(){

        this.setState({

            loading : true

        })

        /* */

        return axios.get(`https://www.googleapis.com/youtube/v3/playlistItems`, {

            params : {

                key: YOUTUBE_API_KEY,
                part : 'snippet,contentDetails',
                playlistId: 'PL6t93nUFQQ1ZiXMfhPyhjb0PX3LgEVMcF',
                maxResults : 10

            }

        }).then(response => {

            let playlistItems = response.data.items

            return axios.get(`https://www.googleapis.com/youtube/v3/videos`, {

                params : {

                    key: YOUTUBE_API_KEY,
                    part : 'id,snippet,contentDetails',
                    id: playlistItems.map(val => val.contentDetails.videoId).join(',')

                }

            }).then(response => {

                let videoItems = response.data.items

                this.setState({

                    items : [

                        ...this.state.items,
                        ...playlistItems.map(val => {

                            let videoItemInfo = videoItems.find(({ id }) => id === val.contentDetails.videoId)

                            if(videoItemInfo){

                                return {

                                    id : videoItemInfo.id,
                                    title: videoItemInfo.snippet.title,
                                    description: videoItemInfo.snippet.description,
                                    img : videoItemInfo.snippet.thumbnails.maxres.url,
                                    duration: videoItemInfo.contentDetails.duration,
                                    channel : {

                                        id : videoItemInfo.snippet.channelId,
                                        title : videoItemInfo.snippet.channelTitle

                                    }

                                }

                            }

                        }).filter(Boolean)

                    ]

                }, () => {

                    setTimeout(() => {

                        this.setState({

                            loading : false,
                            ready : true

                        })

                    }, 2000)

                })

            })

        })

    }

    getDuration(duration){

        let

        hours   = moment.duration(duration).hours(),
        minutes = moment.duration(duration).minutes(),
        seconds = moment.duration(duration).seconds()

        return [

            hours && hours.toString().padStart(2, 0),
            minutes.toString().padStart(2, 0),
            seconds.toString().padStart(2, 0)

        ].filter(Boolean).join(':')

    }

    getItems(){

        if(this.state.loading && !this.state.ready){

            return [...new Array(10).keys()]

        } else {

            return this.state.items

        }

    }

    /* */

    render(){

        const getItems = this.getItems()

        return (

            <div className={ styles.home }>

                <aside className={ styles.homeMenu }>

                    <figure className={ styles.homeMenuLogo }>

                        <img src={ witcherLogo } alt="The Witcher &reg; 3: Wild Hunt Logo" />

                    </figure>

                    <div className={ styles.homeMenuLogos }>

                        <div className="row no-gutters align-items-center justify-content-between">

                            <div className="col-auto">

                                <a href="https://en.cdprojektred.com/" target="_blank" rel="noopener noreferrer" title="CD PROJEKT RED">

                                    <img src={ cdProjektLogo } alt="CD PROJEKT RED" />

                                </a>

                            </div>

                            <div className="col-auto">

                                <a href="https://www.ingaia.com.br/" target="_blank" rel="noopener noreferrer" title="inGaia">

                                    <img src={ ingaiaLogo } alt="inGaia" />

                                </a>

                            </div>

                        </div>

                    </div>

                </aside>

                <main className={ styles.homeMain }>

                    {

                        // <h1 className={ styles.homeMainTitle }>Trailers</h1>

                    }

                    <div className={ styles.homePlaylist }>

                        <ul className={

                            [

                                styles.homePlaylistRow,
                                'row'

                            ].join(' ')

                        }>

                            {

                                getItems.map((val, index) => {

                                    return (

                                        <li className={

                                            [

                                                styles.homePlaylistList,
                                                'col-lg-6 col-xl-3'

                                            ].join(' ')

                                        } key={ val.id }>

                                            <a className={

                                                [

                                                    styles.homePlaylistCover,
                                                    (this.state.loading && !this.state.ready) && styles.homePlaylistCoverLoading

                                                ].filter(Boolean).join(' ')

                                            } href={ `https://www.youtube.com/watch?v=` + val.id } title={ val.title } target="_blank" rel="noopener noreferrer"

                                            style={{

                                               animationDelay : `${(0.05 * index)}s`

                                            }}>

                                                <div className={ styles.homePlaylistCoverWrapper }>

                                                    {

                                                        (!this.state.loading && this.state.ready) && (

                                                            <>

                                                            <div className={ styles.homePlaylistCoverWrapperDuration }>{ this.getDuration(val.duration) }</div>
                                                            <img src={ val.img } alt={ val.title } />

                                                            </>

                                                        )

                                                    }

                                                </div>

                                            </a>

                                            <div className={ styles.homePlaylistInfo }>

                                                <div className={

                                                    [

                                                        styles.homePlaylistInfoTitle,
                                                        (this.state.loading && !this.state.ready) && styles.homePlaylistInfoTitleLoading

                                                    ].filter(Boolean).join(' ')

                                                }

                                                style={{

                                                   animationDelay : `${(0.05 * index)}s`

                                                }}>{ !this.state.loading && this.state.ready ? val.title : <>&nbsp;</> }</div>

                                                <a className={

                                                    [

                                                        styles.homePlaylistInfoOwner,
                                                        (this.state.loading && !this.state.ready) && styles.homePlaylistInfoOwnerLoading

                                                    ].filter(Boolean).join(' ')

                                                } href={ `https://www.youtube.com/channel/` + (val.channel && val.channel.id) } target="_blank" rel="noopener noreferrer"

                                                style={{

                                                   animationDelay : `${(0.05 * index)}s`

                                                }}>{ !this.state.loading && this.state.ready ? (val.channel && val.channel.title) : <>&nbsp;</> }</a>

                                            </div>

                                        </li>

                                    )

                                })

                            }

                        </ul>

                    </div>

                </main>

            </div>

        )

    }

}

export default Home
