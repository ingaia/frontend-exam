import React from 'react'
import { shallow, mount } from 'enzyme-config'

/* */

import Login from './Login'

/* */

describe('Login.js', () => {

    it('Renderiza o Login completamente', () => {

        const component = shallow(<Login />)

        expect(component.find('.login').exists()).toBeTruthy()

        expect(component.find('input').length).toBe(2)
        expect(component.find('Button').exists()).toBeTruthy()

    })

    it('Digita o login e senha', () => {

        const component = shallow(<Login />)

        component.find('input').at(0).simulate('change', {

            target : {

                value: 'dian.cabral@gmail.com'

            }

        })

        expect(component.find('input').at(0).prop('value')).toBe('dian.cabral@gmail.com')
        expect(component.state('email')).toBe('dian.cabral@gmail.com')

        /* */

        component.find('input').at(1).simulate('change', {

            target : {

                value: '1234567890'

            }

        })

        expect(component.find('input').at(1).prop('value')).toBe('1234567890')
        expect(component.state('password')).toBe('1234567890')

    })

    it('Digita o login e senha e clica no botão de login', done => {

        let onSubmit = data => {

            expect(data).toStrictEqual({

                email: 'dian.cabral@gmail.com'

            })

            done()

        }

        const component = shallow(<Login onSubmit={ e => onSubmit(e) } />)

        component.find('input').at(0).simulate('change', {

            target : {

                value: 'dian.cabral@gmail.com'

            }

        })

        component.find('input').at(1).simulate('change', {

            target : {

                value: '1234567890'

            }

        })

        /* */

        component.find('form').simulate('submit', {

            preventDefault : () => {}

        })

    })

})
