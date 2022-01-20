export default (value: string): string => {
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
