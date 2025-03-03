export const encodeUrlParam = (param: string): string => {
  return encodeURIComponent(param.toLowerCase().replace(/\s+/g, "-"));
};

export const decodeUrlParam = (param: string): string => {
  return decodeURIComponent(param)
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const encodeCountryParam = (country: string): string => {
  return country.toLowerCase();
};

export const getCountryUrl = (country: string): string => {
  return `/courses/${encodeCountryParam(country)}`;
};
