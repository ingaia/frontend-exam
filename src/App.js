import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'
import {

    CSSTransition,
    SwitchTransition,
    TransitionGroup

} from 'react-transition-group'

/* */

import Icons from 'components/Icon/Icons'
import Icon from 'components/Icon/Icon'
import Loader from 'components/Loader/Loader'

/* */

import Login from 'views/Login/Login'
import Home from 'views/Home/Home'

/* */

import styles from 'App.module.scss'

/* */

import { SetAuth } from 'state/actions/Auth'

/* */

const STORAGE_AUTH_HASH = 'A64FWFyCGbOodHgkC9bRTNJhF1t0cAFc'

/* */

class App extends React.Component {

    constructor(){

        super()

        this.state = {

            ready : false,
            loading: true

        }

    }

    /* */

    async componentDidMount(){

        if(localStorage.getItem(STORAGE_AUTH_HASH)){

            let auth = JSON.parse(localStorage.getItem(STORAGE_AUTH_HASH))

            this.setAuthData(auth)

        }

        setTimeout(() => {

            this.setState({

                loading : false

            })

        }, 2500)

    }

    /* */

    setAuthData(data){

        this.props.SetAuth(data)

        localStorage.setItem(STORAGE_AUTH_HASH, JSON.stringify(data))

    }

    setLogoutData(){

        this.props.SetAuth(null)

        localStorage.removeItem(STORAGE_AUTH_HASH)

    }

    /* */

    render(){

        return (

            <div className={ styles.App }>

                <Icons />

                <div className={ styles.AppWrapper }>

                    <div className={ styles.AppView } ref={ this.AppViewRef }>

                        <SwitchTransition mode="out-in">

                            <CSSTransition

                            key={ this.state.loading ? 'loader' : 'view' }
                            timeout={ 400 }
                            classNames="transition-fade"
                            unmountOnExit

                            >

                                 {

                                     this.state.loading ? <Loader key="loader" /> : (

                                        <SwitchTransition mode="out-in">

                                            <CSSTransition

                                            key={ this.props.auth ? 'ok' : 'forbidden' }
                                            timeout={ 400 }
                                            classNames="transition-fade"
                                            unmountOnExit

                                            >

                                                {

                                                    this.props.auth ? <Home key="home" items={ this.state.items } onLogout={ e => this.setLogoutData() } /> : <Login key="login" onSubmit={ data => this.setAuthData(data) } />

                                                }

                                            </CSSTransition>

                                        </SwitchTransition>

                                    )

                                 }

                             </CSSTransition>

                        </SwitchTransition>

                    </div>

                </div>

            </div>

        )

    }

}

/* */

export default connect(({ auth }) => ({

    auth

}), dispatch => bindActionCreators({ SetAuth }, dispatch))(App)
