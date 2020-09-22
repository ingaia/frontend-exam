import React from 'react'

/* */

import Button from 'components/Button/Button'

/* */

import logo from 'assets/logo/logo_dark.png'
import cdProjektLogo from 'assets/logo/cd-projekt-red.png'
import ingaiaLogo from 'assets/logo/ingaia.png'
import styles from './Login.module.scss'

/* */

class Login extends React.Component {

    constructor(){

        super()

        this.state = {

            email: '',
            password: '',

            loading : false

        }

    }

    /* */

    handleFormSubmit(e){

        e.preventDefault()

        this.setState({

            loading: true

        })

        setTimeout(() => {

            this.props.onSubmit({

                email: this.state.email

            })

        }, 2000)

    }

    /* */

    render(){

        return (

            <div className={ styles.login }>

                <div className={ styles.loginLogos }>

                    <div className="row no-gutters align-items-center justify-content-center">

                        <div className="col-auto pr-4">

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

                <div className="container">

                    <div className="row justify-content-center">

                        <div className="col-9 col-sm-6 col-md-5 col-lg-4">

                            <figure className={ styles.loginLogo }>

                                <img src={ logo } alt="The Witcher &reg; 3: Wild Hunt Logo" />

                            </figure>

                            <form className={ styles.loginForm } onSubmit={ e => this.handleFormSubmit(e) }>

                                <div className={ styles.loginFormWrapper }>

                                    <input

                                    className={ styles.loginFormInput }

                                    type="email"
                                    name="ig_email"
                                    autoComplete="off"

                                    required

                                    value={ this.state.email }

                                    onChange={ e => {

                                        this.setState({ email: e.target.value })

                                    }}

                                    readOnly={ this.state.loading }

                                    />
                                    <label className={

                                        [

                                            styles.loginFormLabel,
                                            this.state.email.length && styles.loginFormLabelActive

                                        ].filter(Boolean).join(' ')

                                    } htmlFor="ig_email">E-mail</label>

                                </div>

                                <div className={ styles.loginFormWrapper }>

                                    <input

                                    className={ styles.loginFormInput }

                                    type="password"
                                    name="ig_password"
                                    autoComplete="new-password"

                                    required

                                    value={ this.state.password }

                                    onChange={ e => {

                                        this.setState({ password: e.target.value })

                                    }}

                                    readOnly={ this.state.loading }

                                    />
                                    <label  className={

                                        [

                                            styles.loginFormLabel,
                                            this.state.password.length && styles.loginFormLabelActive

                                        ].filter(Boolean).join(' ')

                                    } htmlFor="ig_password">Senha</label>

                                </div>

                                <div className="row justify-content-center">

                                    <div className="col-auto mt-5">

                                        <Button label="Login" color="gold" type="submit" loading={ this.state.loading } />

                                    </div>

                                </div>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        )

    }

}

export default Login
