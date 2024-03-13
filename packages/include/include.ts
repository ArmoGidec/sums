export const include = <T>(targetArrays: T[][], included: T[]) => {
  const includedRecord = new Map(
    included.map((value) => [value, true]),
  );

  return targetArrays.filter(
    (target) => target.some((value) => includedRecord.get(value)),
  );
};
