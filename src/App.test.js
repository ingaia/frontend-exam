import React from 'react'
import { shallow, mount } from 'enzyme-config'

/* */

import { Provider } from 'react-redux'
import { Store } from 'state/store'
import App from './App'

/* */

const STORAGE_AUTH_HASH = 'A64FWFyCGbOodHgkC9bRTNJhF1t0cAFc'

/* */

describe('App.js', () => {

    it('Renderiza o App', () => {

        const component = mount((

            <Provider store={ Store }>

                <App />

            </Provider>

        ))

        expect(component.find('.App').exists()).toBeTruthy()

    })

    it('Loga o usuário e atualiza a store', () => {

        const component = mount((

            <Provider store={ Store }>

                <App />

            </Provider>

        ))

        const instance = component.find('App').instance()

        instance.setAuthData({

            email: 'john.doe@gmail.com'

        })

        component.update()

        expect(localStorage.getItem(STORAGE_AUTH_HASH)).toStrictEqual(JSON.stringify({

            email: 'john.doe@gmail.com'

        }))

        expect(component.find('App').prop('auth')).toStrictEqual({

            email: 'john.doe@gmail.com'

        })

    })

    it('Loga o usuário e atualiza a store automaticamente caso o localStorage esteja preenchido', () => {

        const localStorage = window.localStorage

        localStorage.setItem(STORAGE_AUTH_HASH, JSON.stringify({

            email: 'john.doe@gmail.com'

        }))

        const component = mount((

            <Provider store={ Store }>

                <App />

            </Provider>

        ))

        expect(component.find('App').prop('auth')).toStrictEqual({

            email: 'john.doe@gmail.com'

        })

    })

    it('Desloga o usuário e atualiza a store', () => {

        const component = mount((

            <Provider store={ Store }>

                <App />

            </Provider>

        ))

        const instance = component.find('App').instance()

        instance.setLogoutData()

        component.update()

        expect(localStorage.getItem(STORAGE_AUTH_HASH)).toBe(null)
        expect(component.find('App').prop('auth')).toBe(null)

    })

})
