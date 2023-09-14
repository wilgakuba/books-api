const formatFullname = require('../formatFullname');
const expect = require('chai').expect;

describe('formatFullname', () => {
  it('should return the formatted full name for valid input', () => {
    expect(formatFullname('john doe')).to.equal('John Doe');
    expect(formatFullname('JOHN DOE')).to.equal('John Doe');
    expect(formatFullname('jOHn dOE')).to.equal('John Doe');
  });

  it('should return "Error" if no input is provided', () => {
    expect(formatFullname()).to.equal('Error');
  });

  it('should return "Error" if input is not a string', () => {
    expect(formatFullname(123)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
  });

  it('should return "Error" for invalid input format', () => {
    expect(formatFullname('John Doe Test')).to.equal('Error');
    expect(formatFullname('John')).to.equal('Error');
    expect(formatFullname('Doe')).to.equal('Error');
  });
});