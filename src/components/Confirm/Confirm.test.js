import React from 'react'
import { shallow } from 'enzyme-config'

/* */

import Confirm from './Confirm'

/* */

describe('Confirm.js', () => {

    it('Renderiza o Confirm completamente', () => {

        const component = shallow(<Confirm />)

        expect(component.find('CSSTransition').exists()).toBeTruthy()
        expect(component.find('Modal').exists()).toBeTruthy()

    })

    it('Abre a modal de confirmação', () => {

        const component = shallow(<Confirm />)

        const instance = component.instance()

        instance.open('Teste de descrição', 'Sim')

        expect(component.state('active')).toBeTruthy()

        expect(component.state('message')).toBe('Teste de descrição')
        expect(component.find('.ConfirmDescription').render().text()).toBe('Teste de descrição')

        expect(component.state('buttonOkText')).toBe('Sim')

        expect(typeof component.state('resolve')).toBe('function')
        expect(typeof component.state('reject')).toBe('function')

    })

    it('Abre a modal de confirmação e clica no botão de confirmação', done => {

        const component = shallow(<Confirm />)

        const instance = component.instance()

        instance.open('Teste de descrição').then(() => {

            expect(component.state('active')).toBeFalsy()

            done()

        }).catch(error => false)

        /* */

        expect(component.state('active')).toBeTruthy()

        component.find('Button').at(1).simulate('click')

    })

    it('Abre a modal de confirmação e clica no botão de cancelar', done => {

        const component = shallow(<Confirm />)

        const instance = component.instance()

        instance.open('Teste de descrição').then(() => false).catch(() => {

            expect(component.state('active')).toBeFalsy()

            done()

        })

        /* */

        expect(component.state('active')).toBeTruthy()

        component.find('Button').at(0).simulate('click')

    })


})
