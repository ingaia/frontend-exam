import React from 'react'

/* */

import styles from './Player.module.scss'

/* */

const YT = window.YT

class Player extends React.Component {

    constructor(){

        super()

        this.state = {

            player : null

        }

    }

    /* */

    componentDidMount(){

        this.initYouTubePlayer()

    }

    componentWillUnmount(){

        this.props.onChange('stopped')

    }

    initYouTubePlayer(){

        this.setState({

            player : new YT.Player('ytplayer', {

                height: '100%',
                width: '100%',
                videoId: this.props.id,
                playerVars : {

                    autoplay: 1,
                    modestbranding: 1

                },
                events: {

                    'onStateChange' : this.watchYouTubePlayerChange.bind(this)

                }

            })

        })

    }

    watchYouTubePlayerChange(e){

        if(e.data == YT.PlayerState.PLAYING){

            this.props.onChange('playing')

        } else if(e.data === YT.PlayerState.ENDED){

            this.props.onChange('stopped')

        } else if([YT.PlayerState.PAUSED, YT.PlayerState.BUFFERING, YT.PlayerState.CUED].includes(e.data)){

            this.props.onChange('waiting')

        }

    }

    /* */

    render(){

        return (

            <div className={ styles.Player }>

                <div id="ytplayer"></div>

            </div>

        )

    }

}

export default Player
