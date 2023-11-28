import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  типНакл: DS.attr('i-i-s-s-peerechisleniem-тип-накл'),
  ответственный: DS.belongsTo('i-i-s-s-peerechisleniem-ответственный', { inverse: null, async: false })
});

export let ValidationRules = {
  типНакл: {
    descriptionKey: 'models.i-i-s-s-peerechisleniem-накладная.validations.типНакл.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  ответственный: {
    descriptionKey: 'models.i-i-s-s-peerechisleniem-накладная.validations.ответственный.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('НакладнаяE', 'i-i-s-s-peerechisleniem-накладная', {
    типНакл: attr('Тип накл', { index: 0 }),
    ответственный: belongsTo('i-i-s-s-peerechisleniem-ответственный', 'Ответственный', {
      фамилия: attr('Фамилия', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'фамилия' })
  });

  modelClass.defineProjection('НакладнаяL', 'i-i-s-s-peerechisleniem-накладная', {
    типНакл: attr('Тип накл', { index: 0 }),
    ответственный: belongsTo('i-i-s-s-peerechisleniem-ответственный', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
