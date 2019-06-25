import { createSchema, Type, typedModel, ExtractProps } from 'ts-mongoose';
import {
  ElementObject,
  ScheduleOfRatesObject,
  GoogleFileObject
} from './shared.models';

const SystemSchema = createSchema({
  _id: Type.string(),
  lists: Type.array().of(
    Type.object().of({
      engineerSkills: Type.array().of(
        Type.object().of({ name: Type.string(), _id: Type.string() })
      ),
      requirements: Type.array().of(
        Type.object().of({
          name: Type.string(),
          clientCost: Type.number(),
          externalCost: Type.number(),
          _id: Type.string()
        })
      ),
      sectors: Type.array().of(
        Type.object().of({ name: Type.string(), _id: Type.string() })
      ),
      sources: Type.array().of(
        Type.object().of({ name: Type.string(), _id: Type.string() })
      ),
      safetyEquipments: Type.array().of(
        Type.object().of({ name: Type.string(), _id: Type.string() })
      ),
      siteItems: Type.array().of(
        Type.object().of({ para: Type.string(), item: Type.string() })
      ),
      riskAssessments: Type.array().of(
        Type.object().of({
          _id: Type.string(),
          name: Type.string(),
          applicable: Type.boolean()
        })
      ),
      caveats: Type.array().of(
        Type.object().of({
          name: Type.string(),
          description: Type.string(),
          _id: Type.string()
        })
      ),
      elements: Type.array().of(Type.object().of(ElementObject)),
      cancellationReasons: Type.array().of(
        Type.object().of({ name: Type.string(), _id: Type.string() })
      ),
      onHoldReasons: Type.array().of(
        Type.object().of({ name: Type.string(), _id: Type.string() })
      )
    })
  ),
  rag: Type.object().of({ danger: Type.number(), warniing: Type.number() }),
  scheduleOfRates: Type.array().of(Type.object().of(ScheduleOfRatesObject)),
  lastSiteDownload: Type.date(),
  callScript: Type.string(),
  lastJobDownload: Type.date(),
  reportEmailText: Type.string(),
  latestJobsOutputReport: Type.object().of(GoogleFileObject),
  reportEmail: Type.string(),
  currentTLuprn: Type.number(),
  dayEnd: Type.string(),
  dayStart: Type.string(),
  weeklyTaskReport: Type.array().of(
    Type.object().of({
      type: Type.string(),
      data: Type.array().of(Type.object())
    })
  ),
  engineerLocations: Type.array().of(
    Type.object().of({
      emails: Type.array().of(Type.string()),
      name: Type.string(),
      report: Type.array().of(Type.string())
    })
  ),
  weeklyTaskReportConfig: Type.object().of({
    emails: Type.array().of(Type.string())
  })
});

export const System = typedModel('system', SystemSchema);
export type ISystem = ExtractProps<typeof SystemSchema>;
