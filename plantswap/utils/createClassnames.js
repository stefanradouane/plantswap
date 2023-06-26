const createClassnames = (styles, elName, className, modifier) => {
  const defaultClass = styles[elName];
  const arrayModifiers = Array.isArray(modifier) ? modifier : [modifier];
  const arrayClassNames = Array.isArray(className) ? className : [className];

  const usedModifiers = arrayModifiers.map((modifier) =>
    classFromModifier(styles, elName, modifier)
  );

  return stringFromArray([defaultClass, ...usedModifiers, ...arrayClassNames]);
};

function classFromModifier(styles, elName, modifier) {
  return styles[`${elName}--${modifier}`];
}

function stringFromArray(array) {
  return array.filter((x) => x).join(" ");
}

export default createClassnames;
