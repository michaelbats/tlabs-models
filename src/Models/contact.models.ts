import { createSchema, Type, typedModel, ExtractProps } from 'ts-mongoose';

const ContactSchema = createSchema({
  _id: Type.optionalString(),
  firstname: Type.string(),
  lastname: Type.string(),
  jobRole: Type.optionalString(),
  email: Type.string(),
  telephone: Type.optionalArray().of(
    Type.object().of({
      type: Type.string(),
      number: Type.string()
    })
  ),
  notes: Type.optionalString(),
  clientId: Type.string(),
  ownerId: Type.string(),
  source: Type.string(),
  status: Type.string({ default: 'active' }) as 'active' | 'inactive',
  tags: Type.optionalArray().of(Type.string()),
  createdAt: Type.date({ default: new Date(Date.now()) })
});

export const Contact = typedModel('contacts', ContactSchema);
export type IContact = ExtractProps<typeof ContactSchema>;
