
import { type I18n, createI18n } from "vue-i18n";
import type { App, WritableComputedRef } from "vue";
import { responsiveStorageNameSpace } from "@/config";
import { storageLocal, isObject } from "@pureadmin/utils";

import enLocale from "element-plus/es/locale/lang/en";
import viLocale from "element-plus/es/locale/lang/vi";

const siphonI18n = (function () {

  let cache = Object.fromEntries(
    Object.entries(
      import.meta.glob("../../locales/*.y(a)?ml", { eager: true })
    ).map(([key, value]: any) => {
      const matched = key.match(/([A-Za-z0-9-_]+)\./i)[1];
      return [matched, value.default];
    })
  );
  return (prefix = "en") => {
    return cache[prefix];
  };
})();

export const localesConfigs = {
  en: {
    ...siphonI18n("en"),
    ...enLocale
  },
  vi: {
    ...siphonI18n("vi"),
    ...viLocale
  }
};


function getObjectKeys(obj) {
  const stack = [];
  const keys: Set<string> = new Set();

  stack.push({ obj, key: "" });

  while (stack.length > 0) {
    const { obj, key } = stack.pop();

    for (const k in obj) {
      const newKey = key ? `${key}.${k}` : k;

      if (obj[k] && isObject(obj[k])) {
        stack.push({ obj: obj[k], key: newKey });
      } else {
        keys.add(newKey);
      }
    }
  }

  return keys;
}


const keysCache: Map<string, Set<string>> = new Map();
const flatI18n = (prefix = "en") => {
  let cache = keysCache.get(prefix);
  if (!cache) {
    cache = getObjectKeys(siphonI18n(prefix));
    keysCache.set(prefix, cache);
  }
  return cache;
};

/**
 * 
 * @param message message
 * @returns 转化后的message
 */
export function transformI18n(message: any = "") {
  if (!message) {
    return "";
  }

 
  if (typeof message === "object") {
    const locale: string | WritableComputedRef<string> | any =
      i18n.global.locale;
    return message[locale?.value];
  }

  const key = message.match(/(\S*)\./)?.input;
  // console.log("message",message,)
  if (key && flatI18n("en").has(key)) {
    return i18n.global.t.call(i18n.global.locale, message);
  }
  // else if (!key && Object.hasOwn(siphonI18n("en"), message)) { 
  //   return i18n.global.t.call(i18n.global.locale, message);
  // }
  else {
    return message;
  }
}

export const $t = (key: string) => key;

export const i18n: I18n = createI18n({
  legacy: false,
  locale:
    storageLocal().getItem<StorageConfigs>(
      `${responsiveStorageNameSpace()}locale`
    )?.locale ?? "en",
  fallbackLocale: "vi",
  messages: localesConfigs
});

export function useI18n(app: App) {
  app.use(i18n);
}
