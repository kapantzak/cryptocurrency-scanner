const requestOptions = (daysSelection) => {
  switch (daysSelection) {
    case "1D":
      return {
        days: "1",
      };
    case "14D":
      return {
        days: "14",
      };
    case "1M":
      return {
        days: "30",
      };
    case "2M":
      return {
        days: "60",
        interval: "daily",
      };
    case "1Y":
      return {
        days: "365",
        interval: "daily",
      };
    case "ALL":
      return {
        days: "max",
        interval: "daily",
      };
  }
};

const priceSinceLiteral = (daysSelection) => {
  switch (daysSelection) {
    case "1D":
      return "Last day";
    case "14D":
      return "Last 14 days";
    case "1M":
      return "Last month";
    case "2M":
      return "Last 2 months";
    case "1Y":
      return "Last year";
    case "ALL":
      return "From the beginning";
  }
};

const dateTime = (time) => {
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  };

  return new Intl.DateTimeFormat(
    process.env.NEXT_PUBLIC_LOCALE,
    options
  ).format(time);
};

export { requestOptions, dateTime, priceSinceLiteral };
