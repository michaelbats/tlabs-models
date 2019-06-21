import { createSchema, Type, typedModel } from 'ts-mongoose';
import { ExtractInterface } from '../utils/type-extractors';

// Used to get types + schema
const OrderSchema = createSchema({
  _id: Type.string({ required: true }),
  status: Type.string({ required: true, default: 'draft' })
});

// mongoose usable schema
export const Order = typedModel('external_users', OrderSchema);
// usable type extracted
export type IOrder = ExtractInterface<typeof Order>;
