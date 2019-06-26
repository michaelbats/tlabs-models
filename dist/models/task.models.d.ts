/// <reference types="mongoose" />
import { ExtractProps } from 'ts-mongoose';
declare const TaskSchema: import("mongoose").Schema<any> & {
    definition: import("ts-mongoose").ConvertObject<{
        _id: string | null | undefined;
        title: string;
        complete: boolean;
        completedAt: Date | null | undefined;
        assigneeIds: string[] | null | undefined;
        groupAssigneeId: string | null | undefined;
        details: string | null | undefined;
        dueDate: Date;
        lowerLimit: Date | null | undefined;
        higherLimit: Date | null | undefined;
        raisedBy: string | null | undefined;
        relatedCollection: "sites" | "clients" | "jobs" | "contacts" | "leads" | "personal" | "projects" | "quotes";
        relatedId: string;
        relatedStage: string | null | undefined;
        relatedStep: number | null | undefined;
        relatedStepAction: string | null | undefined;
        nextTask: import("ts-mongoose").ExtractSchema<import("mongoose").Schema<any> & {
            definition: import("ts-mongoose").ConvertObject<{
                _id: string | null | undefined;
                title: string;
                details: string | null | undefined;
                dueDate: Date | null | undefined;
                higherLimit: Date | null | undefined;
                lowerLimit: Date | null | undefined;
                assigneeIds: string[] | null | undefined;
                nextTask: {
                    of<T>(schema: T): import("ts-mongoose").ConvertObject<T> | null | undefined;
                };
            }>;
            options: import("mongoose").SchemaOptions;
        }> | null | undefined;
        dismissedAlert: boolean | null | undefined;
        tags: string[] | null | undefined;
        createdAt: Date;
    }>;
    options: import("mongoose").SchemaOptions;
};
export declare const Task: import("mongoose").Model<import("mongoose").Document & {
    complete: boolean;
    title: string;
    createdAt: Date;
    dueDate: Date;
    relatedCollection: "sites" | "clients" | "jobs" | "contacts" | "leads" | "personal" | "projects" | "quotes";
    relatedId: string;
} & {
    details?: string | null | undefined;
    _id?: string | null | undefined;
    tags?: string[] | null | undefined;
    lowerLimit?: Date | null | undefined;
    higherLimit?: Date | null | undefined;
    completedAt?: Date | null | undefined;
    assigneeIds?: string[] | null | undefined;
    groupAssigneeId?: string | null | undefined;
    raisedBy?: string | null | undefined;
    relatedStage?: string | null | undefined;
    relatedStep?: number | null | undefined;
    relatedStepAction?: string | null | undefined;
    nextTask?: import("ts-mongoose").ExtractSchema<import("mongoose").Schema<any> & {
        definition: import("ts-mongoose").ConvertObject<{
            _id: string | null | undefined;
            title: string;
            details: string | null | undefined;
            dueDate: Date | null | undefined;
            higherLimit: Date | null | undefined;
            lowerLimit: Date | null | undefined;
            assigneeIds: string[] | null | undefined;
            nextTask: {
                of<T>(schema: T): import("ts-mongoose").ConvertObject<T> | null | undefined;
            };
        }>;
        options: import("mongoose").SchemaOptions;
    }> | null | undefined;
    dismissedAlert?: boolean | null | undefined;
}, {}>;
export declare type ITask = ExtractProps<typeof TaskSchema>;
export {};
