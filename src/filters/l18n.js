var strings = {
  fr: {
    about: "A PROPOS"
  },
  default: {
    about: "ABOUT"
  }
};

module.exports = function (value,lang) {
  if (typeof(x[lang]) !== 'undefined'){
    return strings[lang][value];
  }
  return strings.default[value];
};
