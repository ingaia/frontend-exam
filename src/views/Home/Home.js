import React from 'react'
import {

    CSSTransition

} from 'react-transition-group'

/* */

import axios from 'axios'
import moment from 'moment'

/* */

import Icon from 'components/Icon/Icon'
import Button from 'components/Button/Button'
import Confirm from 'components/Confirm/Confirm'
import Modal from 'components/Modal/Modal'
import Player from 'components/Player/Player'

/* */

import witcherLogo from 'assets/logo/logo_dark.png'
import wildHuntLogo from 'assets/logo/wild-hunt.png'
import cdProjektLogo from 'assets/logo/cd-projekt-red.png'
import ingaiaLogo from 'assets/logo/ingaia.png'
import styles from './Home.module.scss'

/* */

const YOUTUBE_API_KEY = 'AIzaSyDOem9i64TMUAHddg4-WF50mqX2BywNvos'

/* */

const Logo = props => (

    <figure className={

        [

            styles.homeMenuLogo,
            props.className

        ].join(' ')

    }>

        <img src={ witcherLogo } alt="The Witcher &reg; 3: Wild Hunt Logo" />

    </figure>

)

const LogoWildHunt = props => (

    <figure className={

        [

            styles.homeMenuLogoWildHunt,
            props.className

        ].join(' ')

    }>

        <img src={ wildHuntLogo } alt="The Witcher &reg; 3: Wild Hunt Logo" />

    </figure>

)

class Home extends React.Component {

    constructor(){

        super()

        this.state = {

            ready: false,
            loading: false,
            pagination : {

                total: 0,
                maxResults : 10,
                nextPageToken : null

            },
            items: [],
            player: {

                active: false,
                id: null

            },

            menu : false

        }

        /* */

        this.ConfirmRef = React.createRef()
        this.PlaylistRowRef = React.createRef()

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
                maxResults : this.state.pagination.maxResults,
                pageToken : this.state.pagination.nextPageToken

            }

        }).then(response => {

            let playlistItems = response.data.items

            /* */

            this.setState({

                pagination : {

                    ...this.state.pagination,
                    total : response.data.pageInfo.totalResults,
                    nextPageToken : response.data.nextPageToken

                }

            })

            /* */

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

                    }, this.state.ready ? 0 : 3000)

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

    logout(){

        return this.ConfirmRef.current.open(`Deseja realmente sair da aplicação?`, `Sim, quero sair`).then(() => {

            this.props.onLogout()

        }).catch(() => false)

    }

    openPlayer(e, id){

        e.preventDefault()

        this.setState({

            player : {

                active : true,
                id

            }

        })

    }

    closePlayer(){

        this.setState({

            player : {

                active : false,
                id: null

            }

        })

    }

    handlePlayerChange(data){

        console.log(data)

    }

    /* */

    render(){

        const getItems = this.getItems()

        return (

            <div className={ styles.home }>

                <aside className={ styles.homeMenu }>

                    <Logo className="d-none d-lg-block d-xl-block" />
                    <LogoWildHunt className="d-block d-lg-none d-xl-none"/>

                    <label className={ styles.homeMenuButtonsToggle } htmlFor="headerMenuCheckbox">

                        <Icon glyph="menu" />

                    </label>

                    <input

                    id="headerMenuCheckbox"
                    className={ styles.homeMenuButtonsCheckbox }
                    type="checkbox"
                    checked={ this.state.menu }

                    onChange={ e => this.setState({ menu : e.target.checked })}

                    />

                    <div className={ styles.homeMenuButtons }>

                        <button className={ styles.homeMenuButtonsClose } aria-label="Fechar" title="Fechar" onClick={ e => this.setState({ menu : false })}>

                            <Icon glyph="close" />

                        </button>

                        <Logo className="d-flex d-lg-none d-xl-none" />

                        <ul className={ styles.homeMenuButtonsRow }>

                            <li className={ styles.homeMenuButtonsList }>

                                <Button label="Trailers" color="gold" type="submit" full={ true } onClick={ e => this.setState({ menu : false })} />

                            </li>

                            <li className={ styles.homeMenuButtonsList }>

                                <Button label="Logout" color="grey" full={ true } onClick={ e => this.logout() } />

                            </li>

                        </ul>

                        <div className={

                            [

                                styles.homeMenuLogos

                            ].join(' ')

                        }>

                            <div className="row no-gutters align-items-center justify-content-between justify-content-sm-center justify-content-lg-between">

                                <div className="col-auto">

                                    <a href="https://en.cdprojektred.com/" target="_blank" rel="noopener noreferrer" title="CD PROJEKT RED">

                                        <img src={ cdProjektLogo } alt="CD PROJEKT RED" />

                                    </a>

                                </div>

                                <div className="col-auto pl-sm-4">

                                    <a href="https://www.ingaia.com.br/" target="_blank" rel="noopener noreferrer" title="inGaia">

                                        <img src={ ingaiaLogo } alt="inGaia" />

                                    </a>

                                </div>

                            </div>

                        </div>

                    </div>

                </aside>

                <main className={ styles.homeMain }>

                    <h1 className={

                        [

                            styles.homeMainTitle,
                            'd-lg-none d-xl-none'

                        ].join(' ')

                    }>Trailers</h1>

                    <div className={ styles.homePlaylist }>

                        <ul className={

                            [

                                styles.homePlaylistRow,
                                'row'

                            ].join(' ')

                        } ref={ this.PlaylistRowRef }>

                            {

                                getItems.map((val, index) => {

                                    return (

                                        <li className={

                                            [

                                                styles.homePlaylistList,
                                                'col-sm-6 col-md-4 col-lg-6 col-xl-3 mb-4 mb-sm-5'

                                            ].join(' ')

                                        } key={ val.id || index }>

                                            <div className="row no-gutters align-items-center">

                                                <div className="col-5 col-sm-12">

                                                    <a className={

                                                        [

                                                            styles.homePlaylistCover,
                                                            (this.state.loading && !this.state.ready) && styles.homePlaylistCoverLoading,
                                                            'mb-0 mb-sm-4'

                                                        ].filter(Boolean).join(' ')

                                                    } href={ `https://www.youtube.com/watch?v=` + val.id } title={ val.title } target="_blank" rel="noopener noreferrer"

                                                    style={{

                                                       animationDelay : `${(0.05 * index)}s`

                                                    }}

                                                    onClick={ e => this.openPlayer(e, val.id) }

                                                    >

                                                        <div className={ styles.homePlaylistCoverWrapper }>

                                                            {

                                                                this.state.ready && (

                                                                    <>

                                                                    <div className={ styles.homePlaylistCoverWrapperDuration }>{ this.getDuration(val.duration) }</div>
                                                                    <img src={ val.img } alt={ val.title } />

                                                                    </>

                                                                )

                                                            }

                                                        </div>

                                                    </a>

                                                </div>

                                                <div className="col col-sm-12 pl-4 pl-sm-0">

                                                    <div className={ styles.homePlaylistInfo }>

                                                        <div className={

                                                            [

                                                                styles.homePlaylistInfoTitle,
                                                                (this.state.loading && !this.state.ready) && styles.homePlaylistInfoTitleLoading

                                                            ].filter(Boolean).join(' ')

                                                        }

                                                        style={{

                                                           animationDelay : `${(0.05 * index)}s`

                                                        }}>{ this.state.ready ? val.title : <>&nbsp;</> }</div>

                                                        <a className={

                                                            [

                                                                styles.homePlaylistInfoOwner,
                                                                (this.state.loading && !this.state.ready) && styles.homePlaylistInfoOwnerLoading

                                                            ].filter(Boolean).join(' ')

                                                        } href={ `https://www.youtube.com/channel/` + (val.channel && val.channel.id) } target="_blank" rel="noopener noreferrer"

                                                        style={{

                                                           animationDelay : `${(0.05 * index)}s`

                                                        }}>{ this.state.ready ? (val.channel && val.channel.title) : <>&nbsp;</> }</a>

                                                    </div>

                                                </div>

                                            </div>

                                        </li>

                                    )

                                })

                            }

                            {

                                (this.state.ready && this.state.items.length < this.state.pagination.total) && (

                                    <li className="col-12">

                                        <div className="row justify-content-center mb-5">

                                            <div className="col-auto">

                                                <Button label="Carregar Mais Vídeos" color="gold" loading={ this.state.loading } onClick={ e => this.init() } />

                                            </div>

                                        </div>

                                    </li>

                                )

                            }

                        </ul>

                    </div>

                </main>

                <CSSTransition

                in={ this.state.player.active }
                timeout={ 200 }
                classNames="transition-fade"
                unmountOnExit

                >

                    <Modal

                    close={ true }

                    colXl="6"
                    colLg="8"
                    colMd="8"
                    col="12"

                    onClose={ () => this.closePlayer() }

                    >

                        <Player id={ this.state.player.id } onChange={ data => this.handlePlayerChange(data) } />

                    </Modal>

                </CSSTransition>

                <Confirm ref={ this.ConfirmRef } />

            </div>

        )

    }

}

export default Home
