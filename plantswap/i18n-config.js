import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

const i18n = {
  defaultLocale: "nl",
  locales: ["en", "nl"],
  headers: { "accept-language": "nl-NL,nl;q=0.5" },

  getLocale(request) {
    return match(
      new Negotiator({
        "accept-language": "nl-NL,nl;q=0.5",
      }).languages(),
      ["en", "nl"],
      "nl"
    );
  },
};

export default i18n;
