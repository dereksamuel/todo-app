export const chooseVariantButton = (variant) => {
  const originalTemplate = `text-lg font-extrabold font-primary border-2`;
  const primary = `bg-primary text-dark ${originalTemplate}`;
  const secondary = `text-dark-70 p-2 font-semibold text-small`;

  const variants = {
    primary,
    "primary-rounded": `${primary} rounded-full`,
    "secondary-gray": `bg-gray ${secondary}`,
    "secondary-danger": `bg-danger ${secondary}`,
    danger: `${originalTemplate} bg-danger-active`,
    dark: `${originalTemplate} bg-dark rounded-full text-white`,
  };

  return variants[variant] || variants.primary;
};

export const chooseVariantInput = (variant) => {
  const checkbox = `border-2 rounded-none flex justify-center items-center`;
  const variants = {
    search: "",
    textarea: `max-h-16 pb-12`,
    checkbox: `border-2 rounded-none w-8 h-8 flex justify-center items-center`,
    "checkbox--small": `${checkbox} w-5 h-5`,
  };

  return variants[variant] || variants.search;
};

export const chooseVariantText = (variant) => {
  const variants = {
    title: "font-black text-2xl uppercase",
    subtitle: "font-bold text-xl leading-6",
    "subtitle-filter": "font-bold text-lg leading-6",
    small: "text-base",
    p: "text-lg opacity-80",
  };

  return variants[variant] || variants.p;
};
