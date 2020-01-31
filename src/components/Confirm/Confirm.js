import React from 'react'
import {

    CSSTransition

} from 'react-transition-group'

/* */

import Button from 'components/Button/Button'
import Modal from 'components/Modal/Modal'

/* */

import styles from './Confirm.module.scss'

/* */

class Confirm extends React.Component {

    constructor(){

        super()

        this.state = {

            active : false,
            message: '',
            buttonOkText : 'OK',
            buttonCancelText : 'Não',

            resolve : null,
            reject : null

        }

    }

    open(message, buttonOkText){

        return new Promise((resolve, reject) => {

            this.setState({

                active : true,
                buttonOkText : buttonOkText ? buttonOkText : this.state.buttonOkText,
                message,
                resolve,
                reject

            })

        })

    }

    close(){

        this.setState({

            active : false

        })

        setTimeout(() => {

            this.setState({

                resolve: null,
                reject : null,
                buttonOkText : 'OK'

            })

        }, 300)

    }

    ok(){

        this.state.resolve()

        this.close()

    }

    cancel(){

        this.state.reject()

        this.close()

    }

    render(){

        return (

            <CSSTransition

            in={ this.state.active }
            timeout={ 200 }
            classNames="transition-fade"
            unmountOnExit

            >

                <Modal

                close={ false }

                colXl="4"
                colLg="6"
                colMd="6"
                col="11"

                onClose={ () => this.close() }

                >

                    <div className={ styles.Confirm }>

                        <div className={ styles.ConfirmTitle }>Atenção</div>
                        <div className={ styles.ConfirmDescription } dangerouslySetInnerHTML={{ __html : this.state.message }}></div>

                        <div className="row no-gutters">

                            <div className="col-12 col-sm-auto">

                                <Button label={ this.state.buttonCancelText } color="grey" onClick={ () => this.cancel() } full={ true } />

                            </div>

                            <div className="col-12 mt-4 mt-sm-0 col-sm-auto pl-sm-4">

                                <Button label={ this.state.buttonOkText } color="gold" onClick={ () => this.ok() } full={ true } />

                            </div>

                        </div>

                    </div>

                </Modal>

            </CSSTransition>

        )

    }

}

export default Confirm
