import {
  createSchema,
  Type,
  typedModel,
  ExtractProps,
  ExtractSchema
} from 'ts-mongoose';
import { SiteSchema } from './site.models';

const SurveySchema = createSchema({
  scheduleId: Type.string({ required: true }),
  property: Type.optionalObject().of({
    type: Type.string({ required: true }),
    totalFloors: Type.number({ required: true }),
    allProperty: Type.object({ required: true }).of({
      flooring: Type.object({ required: true }).of({
        survey: Type.boolean({ required: true }),
        details: Type.optionalString()
      }),
      windows: Type.object({ required: true }).of({
        survey: Type.boolean({ required: true }),
        details: Type.optionalString()
      }),
      heating: Type.object({ required: true }).of({
        survey: Type.boolean({ required: true }),
        details: Type.optionalString()
      }),
      roof: Type.object({ required: true }).of({
        survey: Type.boolean({ required: true }),
        details: Type.optionalString()
      }),
      ceiling: Type.object({ required: true }).of({
        survey: Type.boolean({ required: true }),
        details: Type.optionalString()
      }),
      externalWalls: Type.object({ required: true }).of({
        survey: Type.boolean({ required: true }),
        details: Type.optionalString()
      }),
      intercom: Type.object({ required: true }).of({
        survey: Type.boolean({ required: true }),
        details: Type.optionalString()
      }),
      rewire: Type.object({ required: true }).of({
        survey: Type.boolean({ required: true }),
        details: Type.optionalString()
      })
    }),
    utilities: Type.object({ required: true }).of({
      boiler: Type.object({ required: true }).of({
        survey: Type.boolean({ required: true }),
        details: Type.optionalString()
      })
    }),
    kitchen: Type.object({ required: true }).of({
      furniture: Type.object({ required: true }).of({
        survey: Type.boolean({ required: true }),
        details: Type.optionalString()
      }),
      flooring: Type.object({ required: true }).of({
        survey: Type.boolean({ required: true }),
        details: Type.optionalString()
      }),
      detectors: Type.object({ required: true }).of({
        survey: Type.boolean({ required: true }),
        details: Type.optionalString()
      }),
      windows: Type.object({ required: true }).of({
        survey: Type.boolean({ required: true }),
        details: Type.optionalString()
      }),
      ceiling: Type.object({ required: true }).of({
        survey: Type.boolean({ required: true }),
        details: Type.optionalString()
      })
    }),
    bathroom: Type.object({ required: true }).of({
      toilet: Type.object({ required: true }).of({
        survey: Type.boolean({ required: true }),
        details: Type.optionalString()
      }),
      tiles: Type.object({ required: true }).of({
        survey: Type.boolean({ required: true }),
        details: Type.optionalString()
      })
    })
  })
});

const ResidentSchema = createSchema({
  isVoid: Type.string({ required: true }),
  name: Type.optionalString(),
  email: Type.optionalString(),
  phone: Type.optionalString(),
  details: Type.optionalString
});

const OrderSchema = createSchema({
  _id: Type.string({ required: true }),
  status: Type.string({ required: true, default: 'draft' }),
  clientId: Type.string({ required: true }),
  site: Type.schema({ required: true }).of(SiteSchema),
  survey: Type.optionalSchema().of(SurveySchema),
  resident: Type.optionalSchema().of(ResidentSchema)
});

// mongoose usable schema
export const Order = typedModel('orders', OrderSchema);
// usable type extracted
export type IOrder = ExtractProps<typeof OrderSchema>;
export type IOrderProperty = ExtractProps<typeof SiteSchema>;
export type IOrderResident = ExtractProps<typeof ResidentSchema>;
