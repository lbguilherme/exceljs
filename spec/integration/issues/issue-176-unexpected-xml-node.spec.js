'use strict';

var chai = require('chai');

var verquire = require('../../utils/verquire');

var Excel = verquire('excel');

var expect = chai.expect;

describe('github issues', function() {
  it('issue 176 - Unexpected xml node in parseOpen', function() {
    var wb = new Excel.Workbook();
    return wb.xlsx.readFile('./spec/integration/data/test-issue-176.xlsx')
      .then(function() {
        // arriving here is success
        expect(true).to.equal(true);
      });
  });
});
