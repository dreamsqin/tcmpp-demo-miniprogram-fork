import en from './locales/en'
import bi from './locales/bi';
import fr from './locales/fr';

const language = {
  en, 
  fr,
  bi
};

class I18n {
  locale;
  locales;
  context;

  constructor(locales) {
    this.locale = "";
    this.locales = locales || {};
  }

  setLocale(locale) {
    this.locale = locale;
  }

  getLocale() {
    return this.locale;
  }

  loadTranslations(locales) {
    this.locales = locales;
    return this.context && this.effect(this.context);
  }

  mergeTranslations(newLocales) {
    for (const key in newLocales) {
      if (this.locales[key]) {
        this.locales[key] = {
          ...this.locales[key],
          ...newLocales[key],
        };
      } else {
        this.locales[key] = newLocales[key];
      }
    }

    return this.context && this.effect(this.context);
  }

  getLanguage(text) {
    return this.locales[this.locale];
  }

  effect(context) {
    this.context = context;
    if (!context?.setData) {
      return;
    }
    return new Promise((resolve) => {
      context.setData(
        {
          $language: this.getLocale(),
        },
        () => {
          resolve(context["$language"]);
        }
      );
    });
  }

  toggleLanguage(locale) {
    this.setLocale(locale);
    return this.effect(this.context);
  }

  $t(text, params) {
    const textArr = text.match(/\{(.+?)\}+/g) || [];
    let realText = this.locales[this.locale]?.[text] || language.en?.[text] || text;
    textArr.map((item) => {
      let realKey = item.replace('{', '');
      realKey = realKey.replace('}', '');
      realText = `${params[realKey]}` ? realText.replace(item, params[realKey]) : realText;
      return item;
    });
    // console.log('=====realText', this.locale, realText) // debug
    return realText;
  }
}

let i18nInstance;
const i18n = {
  init: () => {
    i18nInstance = new I18n();
    const lang = wx.getSystemInfoSync().language || 'en';
    i18nInstance.loadTranslations(language);
    i18nInstance.setLocale(lang);
  },
  changeLanguage: (lang) => {
    i18nInstance?.toggleLanguage(lang);
  },
  effect: (instance) => {
    i18nInstance?.effect(instance);
  },
  t: (text, params = {}) => {
    return i18nInstance?.$t(text, params);
  }
}

export default i18n;