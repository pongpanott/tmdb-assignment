import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { en } from "./en";
import { th } from "./th";

const resources = {
	en: {
		translation: en,
	},
	th: {
		translation: th,
	},
};

i18n.use(initReactI18next).init({
	initImmediate: false,
	resources,
	lng: "th",
	fallbackLng: "th",
	debug: false,
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
