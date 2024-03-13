export interface NumbersPickFormProps {
  disabledButtons?: number[],
}

export interface NumbersPickFormEmits {
  (event: 'submit', numbers: number[]): void,
}

export interface NumberBtn {
  value: number,
  isPicked: boolean,
  isDisabled: boolean,
}
