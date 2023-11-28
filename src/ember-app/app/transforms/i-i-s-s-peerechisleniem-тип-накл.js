import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ТипНаклEnum from '../enums/i-i-s-s-peerechisleniem-тип-накл';

export default FlexberryEnum.extend({
  enum: ТипНаклEnum,
  sourceType: 'IIS.SPeerechisleniem.ТипНакл'
});
