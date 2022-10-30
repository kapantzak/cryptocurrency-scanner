const getCurrencyFormat = (amount) =>
  new Intl.NumberFormat(process.env.NEXT_PUBLIC_LOCALE, {
    style: "currency",
    currency: process.env.NEXT_PUBLIC_CURRENCY,
  }).format(amount);

export { getCurrencyFormat };
