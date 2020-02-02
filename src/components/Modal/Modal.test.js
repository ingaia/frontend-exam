import React from 'react'
import { mount } from 'enzyme-config'

/* */

import Modal from './Modal'

/* */

describe('Modal.js', () => {

    it('Renderizar a Modal completa', () => {

        const component = mount((

            <Modal

            close={ true }

            colXl="12"
            colLg="11"
            colMd="10"
            colSm="9"
            colXs="8"
            col="7"

            >

                <p>Lorem ipsum dolor sit amet</p>

            </Modal>

        ))

        expect(component.find(`.Modal`).exists()).toBeTruthy()
        expect(component.find(`.ModalClose`).exists()).toBeTruthy()

        expect(component.find(`.container-fluid .row > div`).render().hasClass('col-xl-12')).toBeTruthy()
        expect(component.find(`.container-fluid .row > div`).render().hasClass('col-lg-11')).toBeTruthy()
        expect(component.find(`.container-fluid .row > div`).render().hasClass('col-md-10')).toBeTruthy()
        expect(component.find(`.container-fluid .row > div`).render().hasClass('col-sm-9')).toBeTruthy()
        expect(component.find(`.container-fluid .row > div`).render().hasClass('col-xs-8')).toBeTruthy()
        expect(component.find(`.container-fluid .row > div`).render().hasClass('col-7')).toBeTruthy()

        expect(component.find(`.ModalContent`).find('p').text()).toBe('Lorem ipsum dolor sit amet')

    })

    it('Renderizar a Modal sem o botão de fechar', () => {

        const component = mount((

            <Modal>

                <span>Eveniet illum, error repudiandae placeat distinctio</span>

            </Modal>

        ))

        expect(component.find(`.Modal`).exists()).toBeTruthy()
        expect(component.find(`.ModalClose`).exists()).toBeFalsy()

        expect(component.find(`.ModalContent`).find('span').text()).toBe('Eveniet illum, error repudiandae placeat distinctio')

    })

    it('Quando clicar no botão de fechar, deve executar a função prop onClose', done => {

        let onClose = e => {

            done()

        }

        /* */

        const component = mount((

            <Modal close={ true } onClose={ e => onClose(e) } />

        ))

        expect(component.find(`.ModalClose`).exists()).toBeTruthy()

        component.find(`.ModalClose`).simulate('click')

    })

})
