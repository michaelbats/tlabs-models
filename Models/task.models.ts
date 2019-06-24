import { createSchema, Type, typedModel, ExtractProps } from 'ts-mongoose';

const NextTaskSchema = createSchema({
  _id: Type.optionalString(),
  title: Type.string({ required: true }),
  details: Type.optionalString(),
  dueDate: Type.optionalDate(),
  higherLimit: Type.optionalDate(),
  lowerLimit: Type.optionalDate(),
  assigneeIds: Type.optionalArray().of(Type.string()),
  nextTask: Type.optionalObject()
});

const TaskSchema = createSchema({
  _id: Type.optionalString({ required: true }),
  title: Type.string({ required: true }),
  complete: Type.boolean({ required: true, default: false }),
  completedAt: Type.optionalDate(),
  assigneeIds: Type.optionalArray().of(Type.string()),
  groupAssigneeId: Type.optionalString(),
  details: Type.optionalString(),
  dueDate: Type.date({ required: true }),
  lowerLimit: Type.optionalDate(),
  higherLimit: Type.optionalDate(),
  raisedBy: Type.optionalString({ required: true }),
  relatedCollection: Type.string({ required: true }) as
    | 'clients'
    | 'contacts'
    | 'jobs'
    | 'leads'
    | 'personal'
    | 'projects'
    | 'quotes'
    | 'sites',
  relatedId: Type.string({ required: true }),
  relatedStage: Type.optionalString(),
  relatedStep: Type.optionalNumber(),
  relatedStepAction: Type.optionalString(),
  nextTask: Type.optionalSchema().of(NextTaskSchema),
  dismissedAlert: Type.optionalBoolean({ default: false }),
  tags: Type.optionalArray().of(Type.string()),
  createdAt: Type.date({ default: new Date(Date.now()) })
});

export const Task = typedModel('tasks', TaskSchema);
export type ITask = ExtractProps<typeof TaskSchema>;
