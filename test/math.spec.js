const Math = require('../math.js')
const assert = require('assert')

describe('Classe matemática', () => {
    it('soma dois números', () => {
        const math = new Math()

        assert.equal(math.sum(5,5), 10)
    })
})