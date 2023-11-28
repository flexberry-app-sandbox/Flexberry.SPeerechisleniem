import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'S peerechisleniem',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'S peerechisleniem',
          title: 'S peerechisleniem'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-s-peerechisleniem-накладная-l': IISSPeerechisleniemНакладнаяLForm,
    'i-i-s-s-peerechisleniem-ответственный-l': IISSPeerechisleniemОтветственныйLForm,
    'i-i-s-s-peerechisleniem-накладная-e': IISSPeerechisleniemНакладнаяEForm,
    'i-i-s-s-peerechisleniem-ответственный-e': IISSPeerechisleniemОтветственныйEForm
  },

});

export default translations;
