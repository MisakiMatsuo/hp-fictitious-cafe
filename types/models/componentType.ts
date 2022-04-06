export interface ColumnData {
  src: string;
  texts: string[];
}

export interface ColumnItemData {
  title: string;
  subTitle: string;
  details: ColumnData[];
}
