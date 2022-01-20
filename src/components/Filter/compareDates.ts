export default (rowKeyValue: Date, conditionValue: string, op: string) => {
  const conditionValueInDate = new Date(conditionValue);
  const rowDateInNumber = rowKeyValue.getTime();
  const conditionDateInNumber = conditionValueInDate.getTime();
  switch (op) {
    case "eq":
      return rowDateInNumber === conditionDateInNumber;
    case "neq":
      return rowDateInNumber !== conditionDateInNumber;
    case "gt":
      return rowKeyValue > conditionValueInDate;
    case "lt":
      return rowKeyValue < conditionValueInDate;
    case "ge":
      return rowKeyValue >= conditionValueInDate;
    case "le":
      return rowKeyValue <= conditionValueInDate;
    default:
      return false;
  }
};
