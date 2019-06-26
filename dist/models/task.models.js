"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_mongoose_1 = require("ts-mongoose");
const NextTaskSchema = ts_mongoose_1.createSchema({
    _id: ts_mongoose_1.Type.optionalString(),
    title: ts_mongoose_1.Type.string({ required: true }),
    details: ts_mongoose_1.Type.optionalString(),
    dueDate: ts_mongoose_1.Type.optionalDate(),
    higherLimit: ts_mongoose_1.Type.optionalDate(),
    lowerLimit: ts_mongoose_1.Type.optionalDate(),
    assigneeIds: ts_mongoose_1.Type.optionalArray().of(ts_mongoose_1.Type.string()),
    nextTask: ts_mongoose_1.Type.optionalObject()
});
const TaskSchema = ts_mongoose_1.createSchema({
    _id: ts_mongoose_1.Type.optionalString({ required: true }),
    title: ts_mongoose_1.Type.string({ required: true }),
    complete: ts_mongoose_1.Type.boolean({ required: true, default: false }),
    completedAt: ts_mongoose_1.Type.optionalDate(),
    assigneeIds: ts_mongoose_1.Type.optionalArray().of(ts_mongoose_1.Type.string()),
    groupAssigneeId: ts_mongoose_1.Type.optionalString(),
    details: ts_mongoose_1.Type.optionalString(),
    dueDate: ts_mongoose_1.Type.date({ required: true }),
    lowerLimit: ts_mongoose_1.Type.optionalDate(),
    higherLimit: ts_mongoose_1.Type.optionalDate(),
    raisedBy: ts_mongoose_1.Type.optionalString({ required: true }),
    relatedCollection: ts_mongoose_1.Type.string({ required: true }),
    relatedId: ts_mongoose_1.Type.string({ required: true }),
    relatedStage: ts_mongoose_1.Type.optionalString(),
    relatedStep: ts_mongoose_1.Type.optionalNumber(),
    relatedStepAction: ts_mongoose_1.Type.optionalString(),
    nextTask: ts_mongoose_1.Type.optionalSchema().of(NextTaskSchema),
    dismissedAlert: ts_mongoose_1.Type.optionalBoolean({ default: false }),
    tags: ts_mongoose_1.Type.optionalArray().of(ts_mongoose_1.Type.string()),
    createdAt: ts_mongoose_1.Type.date({ default: new Date(Date.now()) })
});
exports.Task = ts_mongoose_1.typedModel('tasks', TaskSchema);
//# sourceMappingURL=task.models.js.map