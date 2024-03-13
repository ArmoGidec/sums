export interface InputFormEmits {
  (event: 'submit', payload: { sum: number, num: number }): void;
}
