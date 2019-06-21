import { Model, Document } from 'mongoose';

type ExtractDoc<T> = T extends Model<infer U> ? U : never;
type ExtractI<T> = Pick<T, Exclude<keyof T, keyof Document>>;
export type ExtractInterface<T> = ExtractI<ExtractDoc<T>>;
