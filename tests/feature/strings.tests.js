import strings from '../../imports/lib/strings.js';
import assert from 'assert';

describe ('strings module @focus', function(){
  it('should camelCase string with one dash', function() {
    var dashed = 'sample-string';
    var expected = 'sampleString';

    var camel = strings.camelCase(dashed);

    assert.equal(camel, expected);
  });

  it('should camelCase string with three dashes', function() {
    var dashed = 'sample-string-with-dashes';
    var expected = 'sampleStringWithDashes';

    var camel = strings.camelCase(dashed);

    assert.equal(camel, expected);
  });

  it('should not camelCase string with no dashes', function() {
    var dashed = 'samplestring';
    var expected = 'samplestring';

    var camel = strings.camelCase(dashed);

    assert.equal(camel, expected);
  });

  it('should camelCase string with dashes and numbers', function() {
    var dashed = 'sample-string-123';
    var expected = 'sampleString123';

    var camel = strings.camelCase(dashed);

    assert.equal(camel, expected);
  });

  it('should not camelCase string with numbers no dashes', function() {
    var dashed = 'sample123';
    var expected = 'sample123';

    var camel = strings.camelCase(dashed);

    assert.equal(camel, expected);
  });

  it('should replace capitalized letters with lower-case letter and dash', function() {
    var camel = 'sampleString';
    var expected = 'sample-string';

    var dashed = strings.dashSeparated(camel);

    assert.equal(dashed, expected);
  });

  it('should replace capitalized letters with lower-case letters prefixed by dashes', function() {
    var camel = 'sampleStringWithDashes';
    var expected = 'sample-string-with-dashes';

    var dashed = strings.dashSeparated(camel);

    assert.equal(dashed, expected);
  });

  it('should insert dash in front of numbers', function() {
    var camel = 'sample1';
    var expected = 'sample-1';

    var dashed = strings.dashSeparated(camel);

    assert.equal(dashed, expected);
  });

  it('should insert dash in front of numbers but keep numbers grouped', function() {
    var camel = 'sample123';
    var expected = 'sample-123';

    var dashed = strings.dashSeparated(camel);

    assert.equal(dashed, expected);
  });

  it('should insert dash & lower-case capitalized letters and insert dash before number groups', function() {
    var camel = 'sample123Dashed456TEST7a';
    var expected = 'sample-123-dashed-456-t-e-s-t-7a';

    var dashed = strings.dashSeparated(camel)
    assert.equal(dashed, expected);
  });
});
