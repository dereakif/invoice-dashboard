export default function (op: string, type: string) {
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
}
