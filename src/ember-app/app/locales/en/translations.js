import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISSPeerechisleniemНакладнаяLForm from './forms/i-i-s-s-peerechisleniem-накладная-l';
import IISSPeerechisleniemОтветственныйLForm from './forms/i-i-s-s-peerechisleniem-ответственный-l';
import IISSPeerechisleniemНакладнаяEForm from './forms/i-i-s-s-peerechisleniem-накладная-e';
import IISSPeerechisleniemОтветственныйEForm from './forms/i-i-s-s-peerechisleniem-ответственный-e';
import IISSPeerechisleniemНакладнаяModel from './models/i-i-s-s-peerechisleniem-накладная';
import IISSPeerechisleniemОтветственныйModel from './models/i-i-s-s-peerechisleniem-ответственный';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-s-peerechisleniem-накладная': IISSPeerechisleniemНакладнаяModel,
    'i-i-s-s-peerechisleniem-ответственный': IISSPeerechisleniemОтветственныйModel
  },

  'application-name': 'S peerechisleniem',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'S peerechisleniem',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'S peerechisleniem',
          title: 'S peerechisleniem'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        's-peerechisleniem': {
          caption: 'SPeerechisleniem',
          title: 'SPeerechisleniem',
          'i-i-s-s-peerechisleniem-накладная-l': {
            caption: 'Накладная',
            title: ''
          },
          'i-i-s-s-peerechisleniem-ответственный-l': {
            caption: 'Ответственный',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-s-peerechisleniem-накладная-l': IISSPeerechisleniemНакладнаяLForm,
    'i-i-s-s-peerechisleniem-ответственный-l': IISSPeerechisleniemОтветственныйLForm,
    'i-i-s-s-peerechisleniem-накладная-e': IISSPeerechisleniemНакладнаяEForm,
    'i-i-s-s-peerechisleniem-ответственный-e': IISSPeerechisleniemОтветственныйEForm
  },

});

export default translations;
