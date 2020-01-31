import React from 'react'
import { mount } from 'enzyme-config'
const jsdom = require('jsdom')
const { JSDOM } = jsdom

/* */

import Player from './Player'

/* */

describe('Player.js', () => {

    it('Renderizar o iframe do YouTube', done => {

        const { window } = new JSDOM(`

        <html>

            <head>

                <script src="https://www.youtube.com/iframe_api"></script>

            </head>

            <body></body>

        </html>

        `, {

            runScripts: 'dangerously',
            resources: 'usable'

        })

        setTimeout(() => {

            global.YT = window.YT

            const component = mount(<Player id="dQw4w9WgXcQ" />)

            console.log(component.debug())

            done()

        }, 3000)

    })

})
