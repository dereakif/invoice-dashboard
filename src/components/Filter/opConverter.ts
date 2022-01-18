export default function (type: string) {
  let text = "";
  switch (type) {
    case "eq":
      text = "esittir";
      break;

    case "neq":
      text = "esit degildir";
      break;

    case "gt":
      text = "buyuktur";
      break;

    case "lt":
      text = "kucuktur";
      break;

    case "ge":
      text = "buyuk esittir";
      break;

    case "le":
      text = "kucuk esittir";
      break;

    default:
      break;
  }
  return text;
}
