import React from 'react'
import { shallow } from 'enzyme-config'

/* */

import Loader from './Loader'

/* */

describe('Loader.js', () => {

    it('Renderiza o loader', () => {

        const component = shallow(<Loader />)

        expect(component.find(`.loader`).exists()).toBeTruthy()
        expect(component.find(`.loader svg`).exists()).toBeTruthy()

    })

})
