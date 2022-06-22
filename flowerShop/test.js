let {expect} = require('chai')
let {flowerShop} = require('./flowerShop.js')

describe('Test', () => {
    describe('calcPriceOfFlowers', () => {
        it('happy case', () => {
            expect(flowerShop.calcPriceOfFlowers('test', 1, 2)).to.equal('You need $2.00 to buy test!')
            expect(flowerShop.calcPriceOfFlowers('test', 2, 1)).to.equal('You need $2.00 to buy test!')
        })

        it('invalid input', () => {
            expect(() => flowerShop.calcPriceOfFlowers(5, 1, 2)).to.throw()
            expect(() => flowerShop.calcPriceOfFlowers(5, '1', 2)).to.throw()
            expect(() => flowerShop.calcPriceOfFlowers(5, 1, '2')).to.throw()
            expect(() => flowerShop.calcPriceOfFlowers(5, '1', '2')).to.throw()
            expect(() => flowerShop.calcPriceOfFlowers([], 1, 2)).to.throw()
            expect(() => flowerShop.calcPriceOfFlowers('1', [], 2)).to.throw()
            expect(() => flowerShop.calcPriceOfFlowers('1', 1, [])).to.throw()
        })
    })

    describe('checkFlowersAvailable', () => {
        it('happy case', () => {
            expect(flowerShop.checkFlowersAvailable('test', ['test'])).to.equal('The test are available!')
            expect(flowerShop.checkFlowersAvailable('test', ['test', 'test1'])).to.equal('The test are available!')
            expect(flowerShop.checkFlowersAvailable('test', ['test2', 'test1', 'test'])).to.equal('The test are available!')
        })

        it('not available', () => {
            expect(flowerShop.checkFlowersAvailable('test', [])).to.equal('The test are sold! You need to purchase more!')
            expect(flowerShop.checkFlowersAvailable('test', ['test1'])).to.equal('The test are sold! You need to purchase more!')
            expect(flowerShop.checkFlowersAvailable('test', ['test1', 'test2'])).to.equal('The test are sold! You need to purchase more!')
        })
    })

    describe('sellFlowers', () => {
        it('happy case', () => {
            expect(flowerShop.sellFlowers(['test'], 0)).to.equal('')
            expect(flowerShop.sellFlowers(['test', 'test1'], 0)).to.equal('test1')
            expect(flowerShop.sellFlowers(['test', 'test1'], 1)).to.equal('test')
            expect(flowerShop.sellFlowers(['test', 'test1', 'test2'], 1)).to.equal('test / test2')
            expect(flowerShop.sellFlowers(['test', 'test1', 'test2'], 0)).to.equal('test1 / test2')
        })

        it('invalid input', () => {
            expect(() => flowerShop.sellFlowers('test', 0)).to.throw()
            expect(() => flowerShop.sellFlowers(['test'], 1)).to.throw()
            expect(() => flowerShop.sellFlowers(['test', 'test2'], 2)).to.throw()
            expect(() => flowerShop.sellFlowers(['test'], [])).to.throw()
            expect(() => flowerShop.sellFlowers([], 0)).to.throw()
            expect(() => flowerShop.sellFlowers([], [])).to.throw()
        })
    })
})