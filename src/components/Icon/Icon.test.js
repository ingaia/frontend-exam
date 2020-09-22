import React from 'react'
import { mount } from 'enzyme-config'

/* */

import Icon from './Icon'
import Icons from './Icons'

/* */

let

iconGlyph = 'close',
iconPath = 'M18.3 5.71a1 1 0 00-1.41 0L12 10.59 7.11 5.7A1 1 0 105.7 7.11L10.59 12 5.7 16.89a1 1 0 101.41 1.41L12 13.41l4.89 4.89a1 1 0 101.41-1.41L13.41 12l4.89-4.89a1 1 0 000-1.4z'

/* */

describe('Icon.js', () => {

    it('Renderiza o ícone', () => {

        const component = mount((

            <div>

                <Icons />
                <Icon glyph={ iconGlyph } />

            </div>

        ))

        expect(component.find(`#${iconGlyph} path`).prop('d')).toBe(iconPath)
        expect(component.find('use').prop('href')).toBe(`#${iconGlyph}`)

    })

})
