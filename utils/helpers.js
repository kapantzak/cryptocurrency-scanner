const getCurrencyFormat = (amount) =>
  new Intl.NumberFormat(process.env.NEXT_PUBLIC_LOCALE, {
    style: "currency",
    currency: process.env.NEXT_PUBLIC_CURRENCY,
  }).format(amount);

const getFormatedDate = (time) => {
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };

  return new Intl.DateTimeFormat(
    process.env.NEXT_PUBLIC_LOCALE,
    options
  ).format(time);
};

const getPercentage = (number) =>
  Intl.NumberFormat(process.env.NEXT_PUBLIC_LOCALE, {
    style: "percent",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(number);

const trimString = (string, charsNumber = 20) => {
  if (!string) return "";

  if (string.length <= charsNumber) return string;

  return `${string.slice(0, charsNumber).trim()}...`;
};

const compactNumber = (number) =>
  Intl.NumberFormat(process.env.NEXT_PUBLIC_LOCALE, {
    notation: "compact",
    compactDisplay: "short",
  })
    .format(number)
    .replace("K", "k");

export {
  getCurrencyFormat,
  getFormatedDate,
  getPercentage,
  trimString,
  compactNumber,
};
