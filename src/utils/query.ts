type QueryFuncT = (
  rowKeyValue: string | number | Date,
  conditionName: string,
  conditionValue: string | number,
  op: string
) => boolean;

export const Query: QueryFuncT = (
  rowKeyValue,
  conditionName,
  conditionValue,
  op
) => {
  if (conditionName === "Date" && typeof rowKeyValue === "object") {
    const conditionValueInDate = new Date(conditionValue);
    rowKeyValue = rowKeyValue.getTime();
    conditionValue = conditionValueInDate.getTime();
  }

  switch (op) {
    case "eq":
      return rowKeyValue === conditionValue;
    case "neq":
      return rowKeyValue !== conditionValue;
    case "gt":
      return rowKeyValue > conditionValue;
    case "lt":
      return rowKeyValue < conditionValue;
    case "ge":
      return rowKeyValue >= conditionValue;
    case "le":
      return rowKeyValue <= conditionValue;
    default:
      return false;
  }
};
