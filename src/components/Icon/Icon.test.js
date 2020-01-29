import React from 'react'
import { mount } from 'enzyme-config'

/* */

import Icon from './Icon'
import Icons from './Icons'

/* */

let

iconGlyph = 'search',
iconPath = 'M15.5 14h-.8l-.3-.3a6.5 6.5 0 10-.7.7l.3.3v.8l4.3 4.3a1 1 0 001.4-1.5L15.5 14zm-6 0a4.5 4.5 0 110-9 4.5 4.5 0 010 9z'

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
