/// <reference types="mongoose" />
import { ExtractProps } from 'ts-mongoose';
declare const ContactSchema: import("mongoose").Schema<any> & {
    definition: import("ts-mongoose").ConvertObject<{
        _id: string | null | undefined;
        firstname: string;
        lastname: string;
        jobRole: string | null | undefined;
        email: string;
        telephone: import("ts-mongoose").ConvertObject<{
            type: string;
            number: string;
        }>[] | null | undefined;
        notes: string | null | undefined;
        clientId: string;
        ownerId: string;
        source: string;
        status: "active" | "inactive";
        tags: string[] | null | undefined;
        createdAt: Date;
    }>;
    options: import("mongoose").SchemaOptions;
};
export declare const Contact: import("mongoose").Model<import("mongoose").Document & {
    source: string;
    clientId: string;
    createdAt: Date;
    email: string;
    firstname: string;
    lastname: string;
    status: "active" | "inactive";
    ownerId: string;
} & {
    _id?: string | null | undefined;
    notes?: string | null | undefined;
    tags?: string[] | null | undefined;
    telephone?: import("ts-mongoose").ConvertObject<{
        type: string;
        number: string;
    }>[] | null | undefined;
    jobRole?: string | null | undefined;
}, {}>;
export declare type IContact = ExtractProps<typeof ContactSchema>;
export {};
