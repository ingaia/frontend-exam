import React from 'react'

/* */

import Button from 'components/Button/Button'

/* */

import logo from 'assets/logo/logo_dark.png'
import styles from './Login.module.scss'

/* */

class Login extends React.Component {

    constructor(){

        super()

        this.state = {

            email: '',
            password: ''

        }

    }

    /* */

    handleFormSubmit(e){

        e.preventDefault()

        this.props.onSubmit({

            email: this.state.email

        })

    }

    /* */

    render(){

        return (

            <div className={ styles.login }>

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

                                    />
                                    <label className={ styles.loginFormLabel } htmlFor="ig_password">Senha</label>

                                </div>

                                <div className="row justify-content-center">

                                    <div className="col-auto mt-5">

                                        <Button label="LOGIN" color="gold" type="submit" />

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
