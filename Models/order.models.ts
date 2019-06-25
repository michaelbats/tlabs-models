import { createSchema, Type, typedModel, ExtractProps } from 'ts-mongoose';
import { SiteObject } from './site.models';

const SurveyObject = {
  scheduleId: Type.string(),
  property: Type.optionalObject().of({
    type: Type.string(),
    totalFloors: Type.number(),
    allProperty: Type.object().of({
      flooring: Type.object().of({
        survey: Type.boolean(),
        details: Type.optionalString()
      }),
      windows: Type.object().of({
        survey: Type.boolean(),
        details: Type.optionalString()
      }),
      heating: Type.object().of({
        survey: Type.boolean(),
        details: Type.optionalString()
      }),
      roof: Type.object().of({
        survey: Type.boolean(),
        details: Type.optionalString()
      }),
      ceiling: Type.object().of({
        survey: Type.boolean(),
        details: Type.optionalString()
      }),
      externalWalls: Type.object().of({
        survey: Type.boolean(),
        details: Type.optionalString()
      }),
      intercom: Type.object().of({
        survey: Type.boolean(),
        details: Type.optionalString()
      }),
      rewire: Type.object().of({
        survey: Type.boolean(),
        details: Type.optionalString()
      })
    }),
    utilities: Type.object().of({
      boiler: Type.object().of({
        survey: Type.boolean(),
        details: Type.optionalString()
      })
    }),
    kitchen: Type.object().of({
      furniture: Type.object().of({
        survey: Type.boolean(),
        details: Type.optionalString()
      }),
      flooring: Type.object().of({
        survey: Type.boolean(),
        details: Type.optionalString()
      }),
      detectors: Type.object().of({
        survey: Type.boolean(),
        details: Type.optionalString()
      }),
      windows: Type.object().of({
        survey: Type.boolean(),
        details: Type.optionalString()
      }),
      ceiling: Type.object().of({
        survey: Type.boolean(),
        details: Type.optionalString()
      })
    }),
    bathroom: Type.object().of({
      toilet: Type.object().of({
        survey: Type.boolean(),
        details: Type.optionalString()
      }),
      tiles: Type.object().of({
        survey: Type.boolean(),
        details: Type.optionalString()
      })
    })
  })
};

const ResidentObject = {
  isVoid: Type.string(),
  name: Type.optionalString(),
  email: Type.optionalString(),
  phone: Type.optionalString(),
  details: Type.optionalString
};
const ResidentSchema = createSchema({ ResidentObject });

const OrderSchema = createSchema({
  _id: Type.string(),
  status: Type.string({ default: 'draft' }),
  clientId: Type.string(),
  site: Type.object().of(SiteObject),
  survey: Type.optionalObject().of(SurveyObject),
  resident: Type.optionalObject().of(ResidentObject)
});

// mongoose usable schema
export const Order = typedModel('orders', OrderSchema);
// usable type extracted
export type IOrder = ExtractProps<typeof OrderSchema>;
export type IOrderResident = ExtractProps<typeof ResidentSchema>;
