import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  фамилия: DS.attr('string')
});

export let ValidationRules = {
  фамилия: {
    descriptionKey: 'models.i-i-s-s-peerechisleniem-ответственный.validations.фамилия.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОтветственныйE', 'i-i-s-s-peerechisleniem-ответственный', {
    фамилия: attr('Фамилия', { index: 0 })
  });

  modelClass.defineProjection('ОтветственныйL', 'i-i-s-s-peerechisleniem-ответственный', {
    фамилия: attr('Фамилия', { index: 0 })
  });
};
