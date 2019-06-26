/// <reference types="mongoose" />
import { ExtractProps } from 'ts-mongoose';
declare const ActivitySchema: import("mongoose").Schema<any> & {
    definition: import("ts-mongoose").ConvertObject<{
        _id: string | null | undefined;
        title: string;
        details: string;
        type: "update" | "email" | "note" | "call" | "meeting";
        createdBy: string;
        relatedId: string;
        relatedCollection: "sites" | "clients" | "jobs" | "contacts" | "leads" | "personal" | "projects" | "quotes";
        createdAt: Date;
    }>;
    options: import("mongoose").SchemaOptions;
};
export declare const Activity: import("mongoose").Model<import("mongoose").Document & {
    details: string;
    title: string;
    type: "update" | "email" | "note" | "call" | "meeting";
    createdAt: Date;
    createdBy: string;
    relatedCollection: "sites" | "clients" | "jobs" | "contacts" | "leads" | "personal" | "projects" | "quotes";
    relatedId: string;
} & {
    _id?: string | null | undefined;
}, {}>;
export declare type IActivity = ExtractProps<typeof ActivitySchema>;
export {};
