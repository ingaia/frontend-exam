import TextSearch from './text-search'

describe('text-search.js', () => {

    it('Retorna verdadeiro caso todas as palavras chave estejam na string', () => {

        expect(TextSearch.textMatch([

            'lorem',
            'ipsum'

        ], 'Lorem ipsum dolor sit amet')).toBeTruthy()

    })

    it('Retorna falso caso todas as palavras chave não estejam na string', () => {

        expect(TextSearch.textMatch([

            'lorem',
            'adipisicing'

        ], 'Lorem ipsum dolor sit amet')).toBeFalsy()

    })

    it('Retorna verdadeiro independente da capitalização das palavras chave', () => {

        expect(TextSearch.textMatch([

            'LOREM',
            'IpSuM',
            'dolor',
            'sIt'

        ], 'lorem ipsum dolor sit amet')).toBeTruthy()

    })

    it('Remove os acentos da string', () => {

        expect(TextSearch.normalizeText('áàéèíìóòúùãõñ')).toBe('aaeeiioouuaon')

    })

})
