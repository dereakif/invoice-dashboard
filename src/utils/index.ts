export const nameConverter = (value: string): string => {
  switch (value) {
    case "Service":
      return "Servis adi";

    case "Date":
      return "Tarih";

    case "Amount":
      return "Miktar";

    case "Status":
      return "Durum";

    case "Servis adi":
      return "Service";

    case "Tarih":
      return "Date";

    case "Miktar":
      return "Amount";

    case "Durum":
      return "Status";

    default:
      return "";
  }
};

export const opConverter = (op: string, type: string) => {
  let text = "";
  let sign = "";
  switch (op) {
    case "eq":
      text = "esittir";
      sign = "=";
      break;

    case "neq":
      text = "esit degildir";
      sign = "!=";
      break;

    case "gt":
      text = "buyuktur";
      sign = ">";
      break;

    case "lt":
      text = "kucuktur";
      sign = "<";
      break;

    case "ge":
      text = "buyuk esittir";
      sign = ">=";
      break;

    case "le":
      text = "kucuk esittir";
      sign = "<=";
      break;

    default:
      break;
  }
  if (type === "asText") return text;
  if (type === "asSign") return sign;
};

export const statusConverter = (value: string): string => {
  switch (value) {
    case "Odendi":
      return "paid";

    case "Bekliyor":
      return "pending";

    case "Odenmedi":
      return "notPaid";

    case "paid":
      return "Odendi";

    case "pending":
      return "Bekliyor";

    case "notPaid":
      return "Odenmedi";

    default:
      return "";
  }
};

export const formatDate = (date: string) => {
  const newDate = new Date(date);
  const formattedDate =
    newDate.toLocaleString("default", { month: "long" }) +
    " " +
    newDate.getDate() +
    ", " +
    newDate.getFullYear();
  return formattedDate;
};
