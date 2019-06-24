import { createSchema, Type, typedModel, ExtractProps } from 'ts-mongoose';

// Used to get types + schema
const OrderSchema = createSchema({
  _id: Type.string({ required: true }),
  status: Type.string({ required: true, default: 'draft' })
});

// mongoose usable schema
export const Order = typedModel('orders', OrderSchema);
// usable type extracted
export type IOrder = ExtractProps<typeof OrderSchema>;
