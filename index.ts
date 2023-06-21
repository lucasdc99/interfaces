export interface ILabelValueItem<
  T extends number | string,
  P extends boolean | number | string = boolean | number | string
> {
  [key: string]: P | T | string;
  value: T;
  label: string;
}

export type TLabelValue<T extends number | string> = Readonly<ILabelValueItem<T>[]>;
