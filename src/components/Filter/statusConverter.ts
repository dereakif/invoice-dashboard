export default (value: string): string => {
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
