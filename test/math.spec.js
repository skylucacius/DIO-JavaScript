const Math = require('../math.js')
const assert = require('assert')
const expect = require('chai').expect
const sinon = require('sinon')
const { spy } = require('sinon')

describe('Classe matemática', () => {
    it('soma dois números', function(done) {
        const math = new Math()
        this.timeout(3000)
        math.sum(5,5, (value) => {
            expect(value).to.equal(10)
            done()
        })
    })

    it('multiplica dois números', function() {
        const math = new Math()
        expect(math.multiply(5,5)).to.equal(25)
    })
    
    it.only('chama request com os valores de soma e index', function() {
        const req = {}
        const res = {load: function load() {
            console.log('Foi chamada!')
        }}
        const math = new Math()
        // sinon.spy(res,'load')
        sinon.stub(res,'load').returns('xpto')
        math.printSum(req,res,5,5)
        res.restore()
        // expect(res.load.called).to.be.true
        expect(res.load.args[0][1]).to.equal(10)
        
    })
})