export const exclude = <T>(targetArrays: T[][], excluded: T[]) => {
  const excludedRecord = new Map(
    excluded.map((value) => [value, true]),
  );

  return targetArrays.filter(
    (arr) => !arr.some((value) => excludedRecord.get(value)),
  );
};
