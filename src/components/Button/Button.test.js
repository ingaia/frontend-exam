import React from 'react'
import { mount } from 'enzyme-config'

/* */

import Button from './Button'

/* */

describe('Button.js', () => {

    it('Renderizar o Button completamente', () => {

        const component = mount(<Button label="Clique em mim" />)

        expect(component.find(`button`).exists()).toBeTruthy()

        expect(component.find('button').prop('style').color).toBe('var(--md-blue-500)')
        expect(component.find('button').prop('style').borderColor).toBe('var(--md-blue-500)')

        expect(component.find('.button__background').prop('style').borderColor).toBe('var(--md-blue-500)')

        expect(component.find('button').text()).toBe('Clique em mim')

    })

    it('Renderizar o Button com a cor red-500', () => {

        const component = mount(<Button label="Clique em mim" color="red" />)

        expect(component.find('button').prop('style').color).toBe('var(--md-red-500)')
        expect(component.find('button').prop('style').borderColor).toBe('var(--md-red-500)')

        expect(component.find('.button__background').prop('style').borderColor).toBe('var(--md-red-500)')

    })

    it('Renderizar o Button com a cor red-900', () => {

        const component = mount(<Button label="Clique em mim" color="red-900" />)

        expect(component.find('button').prop('style').color).toBe('var(--md-red-900)')
        expect(component.find('button').prop('style').borderColor).toBe('var(--md-red-900)')

        expect(component.find('.button__background').prop('style').borderColor).toBe('var(--md-red-900)')

    })

    it('Renderizar o Button com as classes', () => {

        const component = mount(<Button label="Clique em mim" color="green" small full loading />)

        expect(component.find('button').render().hasClass('button--small')).toBeTruthy()
        expect(component.find('button').render().hasClass('button--loading')).toBeTruthy()
        expect(component.find('button').render().hasClass('button--full')).toBeTruthy()

    })

    it('Quando clicar no botão deve executar a função prop onClick', done => {

        let onClick = e => {

            done()

        }

        /* */

        const component = mount((

            <Button label="Clique em mim" onClick={ e => onClick() } />

        ))

        component.find(`button`).simulate('click')

    })

})
