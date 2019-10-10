
const expect = require('chai').expect;
const login = require('../Login/index');

it('must contain form functions and actions', () =>{
    expect(login).to.be.a('function')
})