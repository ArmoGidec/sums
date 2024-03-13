export const include = <T>(targetArrays: T[][], included: T[]) => {
  return targetArrays.filter(
    (target) => included.every((num) => target.includes(num)),
  );
};
