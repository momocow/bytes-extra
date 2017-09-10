const expect = require('chai').expect
const bytes = require('../')

describe('bytes-extra', function(){
  it('should export the API provided by the original package, \'bytes\'', function(){
    expect(bytes).to.be.a('function')
    expect(bytes.parse).to.be.a('function')
    expect(bytes.format).to.be.a('function')
  })
  it('should behave just like the original \'bytes\' while directly called', function(){
    let res1 = bytes(1024), res2 = bytes({type: "invalid"}), res3 = bytes('1024MB')
    expect(res1).to.be.a('string').that.equal('1KB')
    expect(res2).to.be.null
    expect(res3).to.be.a('number')
  })
  it('called with #bytes(\'1024MB\', {unit: \'GB\'}) should return \'1GB\'', function(){
    let res = bytes('1024MB', {unit: 'GB'})
    expect(res).to.be.a('string').that.equal('1GB')
  })
})
