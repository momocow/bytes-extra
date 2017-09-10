const expect = require('chai').expect
const bytes = require('../')

describe('bytes-extra', function(){
  it('should export the API provided by the original package, \'bytes\'', function(){
    expect(bytes).to.be.a('function')
    expect(bytes.parse).to.be.a('function')
    expect(bytes.format).to.be.a('function')
  })
  it('should behave just like the original \'bytes\' while directly called except that the first argument is a string', function(){
    let res1 = bytes(1024), res2 = bytes({type: "invalid"}), res3 = bytes('1024MB')
    expect(res1).to.be.a('string').that.equal('1KB')
    expect(res2).to.be.null
    expect(res3).to.be.a('object').but.not.to.be.a('number')
  })
  it('should return an object with the conversion result and the function #to() while directly called with a string', function(){
    let res = bytes('1024MB')
    expect(res).to.be.a('object').that.has.all.keys(['result', 'to'])
    expect(res.result).to.be.a('number')
    expect(res.to).to.be.a('function')
  })
  it('should return \'1GB\' as the conversion result from \'1024MB\'', function(){
    let res = bytes('1024MB').to('GB')
    expect(res).to.be.a('string').that.equal('1GB')
  })
})
