import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.s-peerechisleniem.caption'),
          title: i18n.t('forms.application.sitemap.s-peerechisleniem.title'),
          children: [{
            link: 'i-i-s-s-peerechisleniem-накладная-l',
            caption: i18n.t('forms.application.sitemap.s-peerechisleniem.i-i-s-s-peerechisleniem-накладная-l.caption'),
            title: i18n.t('forms.application.sitemap.s-peerechisleniem.i-i-s-s-peerechisleniem-накладная-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-s-peerechisleniem-ответственный-l',
            caption: i18n.t('forms.application.sitemap.s-peerechisleniem.i-i-s-s-peerechisleniem-ответственный-l.caption'),
            title: i18n.t('forms.application.sitemap.s-peerechisleniem.i-i-s-s-peerechisleniem-ответственный-l.title'),
            icon: 'table',
            children: null
          }]
        }
      ]
    };
  }),
})