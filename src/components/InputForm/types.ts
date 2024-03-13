export interface InputFormEmits {
  (event: 'submit', payload: { sum: number, num: number }): void;
  (event: 'reset'): void;
}

export interface InputFormProps { 
  disabled?: boolean,
}
