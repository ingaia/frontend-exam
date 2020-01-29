import React from 'react'

/* */

import logo from 'assets/logo/logo_dark.png'
import styles from './Home.module.scss'

/* */

class Home extends React.Component {

    constructor(){

        super()

        this.state = {

        }

    }

    /* */

    render(){

        return (

            <div className={ styles.home }>

                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia consectetur provident, nulla, cum esse deserunt quidem accusamus tempora iusto? Asperiores sint, porro aut tempora nesciunt velit iusto natus ipsam sapiente!

            </div>

        )

    }

}

export default Home
