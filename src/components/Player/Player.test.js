import React from 'react'
import { shallow, mount } from 'enzyme-config'
const jsdom = require('jsdom')
const { JSDOM } = jsdom

/* */

import Player from './Player'

/* */

const JSDOM_HTML = `

<html>

    <head>

        <script>

            var tag = document.createElement('script')
            tag.src = 'https://www.youtube.com/player_api'

            var firstScriptTag = document.getElementsByTagName('script')[0]
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

            function onYouTubePlayerAPIReady(){

                window.onModulesLoaded()

            }

        </script>

    </head>

</html>

`
const JSDOM_CONFIG = {

    runScripts: 'dangerously',
    resources: 'usable'

}

/* */

describe('Player.js', () => {

    it('Renderizar o iframe do YouTube', done => {

        const { window } = new JSDOM(JSDOM_HTML, JSDOM_CONFIG)

        window.onModulesLoaded = () => {

            global.window.YT = window.YT

            const component = mount(<Player id="dQw4w9WgXcQ" onChange={ e => false } />)

            expect(component.find('Player').prop('id')).toBe('dQw4w9WgXcQ')
            expect(component.find('#ytplayer').exists()).toBeTruthy()

            done()

        }

    })

    it('Emite o estado do player do YouTube', done => {

        const { window } = new JSDOM(JSDOM_HTML, JSDOM_CONFIG)

        window.onModulesLoaded = () => {

            global.window.YT = window.YT

            let onChange = (e) => {

                try {

                    expect(e).toBe('playing')

                    done()

                } catch(e){

                    done(e)

                }

            }

            const component = shallow(<Player id="dQw4w9WgXcQ" onChange={ e => onChange(e) } />)
            const instance = component.instance()

            instance.watchYouTubePlayerChange({

                data : 1

            })
        }

    })

})
