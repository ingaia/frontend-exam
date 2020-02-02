import React from 'react'
import { shallow, mount } from 'enzyme-config'

/* */

import Home from './Home'

/* */

describe('Home.js', () => {

    it('Renderiza o Home', () => {

        const component = mount(<Home />)

        expect(component.find('.home').exists()).toBeTruthy()

    })

    it('Carrega os vídeos do YouTube e atualiza o state', done => {

        const component = shallow(<Home />)
        const instance = component.instance()

        expect(component.state('items')).toStrictEqual([])

        instance.init().then(() => {

            expect(component.state('items').length).toBeGreaterThan(0)

            done()

        }).catch(error => {

            done(error.response.data)

        })

    })

    it('Converte a duração para texto humanizado', () => {

        const component = shallow(<Home />)

        expect(component.instance().getDuration('PT2M22S')).toBe('02:22')
        expect(component.instance().getDuration('PT11M30S')).toBe('11:30')
        expect(component.instance().getDuration('PT11M5S')).toBe('11:05')
        expect(component.instance().getDuration('PT1H5S')).toBe('01:00:05')

    })

    it('Abre a modal do YouTube', done => {

        const component = shallow(<Home />)
        const instance = component.instance()

        instance.init().then(() => {

            let firstVideo = component.state('items')[0]

            component.instance().openPlayer({

                preventDefault(){}

            }, firstVideo.id)

            expect(component.state('player')).toStrictEqual({

                active : true,
                id : firstVideo.id

            })

            expect(component.find('CSSTransition').prop('in')).toBeTruthy()
            expect(component.find('Player').prop('id')).toBe(firstVideo.id)

            done()

        }).catch(error => {

            done(error.response.data)

        })

    })

    it('Abre e fecha a modal do YouTube', done => {

        const component = shallow(<Home />)
        const instance = component.instance()

        instance.init().then(() => {

            let firstVideo = component.state('items')[0]

            component.instance().openPlayer({

                preventDefault(){}

            }, firstVideo.id)

            component.instance().closePlayer()

            expect(component.state('player')).toStrictEqual({

                active : false,
                id : null

            })

            expect(component.find('CSSTransition').prop('in')).toBeFalsy()
            expect(component.find('Player').prop('id')).toBe(null)

            done()

        }).catch(error => {

            done(error.response.data)

        })

    })

    it('Executa a função de logoff', done => {

        let onLogout = () => {

            done()

        }

        const component = mount(<Home onLogout={ e => onLogout() } />)
        const instance = component.instance()

        instance.props.onLogout()

    })

})
