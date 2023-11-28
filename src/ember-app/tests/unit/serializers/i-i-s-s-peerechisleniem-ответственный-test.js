import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-s-peerechisleniem-ответственный', 'Unit | Serializer | i-i-s-s-peerechisleniem-ответственный', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-s-peerechisleniem-ответственный',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-s-peerechisleniem-тип-накл',

    'model:i-i-s-s-peerechisleniem-накладная',
    'model:i-i-s-s-peerechisleniem-ответственный',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
