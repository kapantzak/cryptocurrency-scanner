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

export { getCurrencyFormat, getFormatedDate, getPercentage };
