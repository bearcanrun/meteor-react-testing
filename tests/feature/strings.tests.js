/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

import assert from 'assert';
import strings from '../../imports/lib/strings.js';

describe('strings module @focus', function () {
  it('should camelCase string with one dash', function () {
    const dashed = 'sample-string';
    const expected = 'sampleString';

    const camel = strings.camelCase(dashed);

    assert.equal(camel, expected);
  });

  it('should camelCase string with three dashes', function () {
    const dashed = 'sample-string-with-dashes';
    const expected = 'sampleStringWithDashes';

    const camel = strings.camelCase(dashed);

    assert.equal(camel, expected);
  });

  it('should not camelCase string with no dashes', function () {
    const dashed = 'samplestring';
    const expected = 'samplestring';

    const camel = strings.camelCase(dashed);

    assert.equal(camel, expected);
  });

  it('should camelCase string with dashes and numbers', function () {
    const dashed = 'sample-string-123';
    const expected = 'sampleString123';

    const camel = strings.camelCase(dashed);

    assert.equal(camel, expected);
  });

  it('should not camelCase string with numbers no dashes', function () {
    const dashed = 'sample123';
    const expected = 'sample123';

    const camel = strings.camelCase(dashed);

    assert.equal(camel, expected);
  });

  it('should replace capitalized letters with lower-case letter and dash', function () {
    const camel = 'sampleString';
    const expected = 'sample-string';

    const dashed = strings.dashSeparated(camel);

    assert.equal(dashed, expected);
  });

  it('should replace capitalized letters with lower-case letters prefixed by dashes', function () {
    const camel = 'sampleStringWithDashes';
    const expected = 'sample-string-with-dashes';

    const dashed = strings.dashSeparated(camel);

    assert.equal(dashed, expected);
  });

  it('should insert dash in front of numbers', function () {
    const camel = 'sample1';
    const expected = 'sample-1';

    const dashed = strings.dashSeparated(camel);

    assert.equal(dashed, expected);
  });

  it('should insert dash in front of numbers but keep numbers grouped', function () {
    const camel = 'sample123';
    const expected = 'sample-123';

    const dashed = strings.dashSeparated(camel);

    assert.equal(dashed, expected);
  });

  it('should insert dash & lower-case capitalized letters and insert dash before number groups',
    function () {
      const camel = 'sample123Dashed456TEST7a';
      const expected = 'sample-123-dashed-456-t-e-s-t-7a';

      const dashed = strings.dashSeparated(camel);
      assert.equal(dashed, expected);
    });
});
