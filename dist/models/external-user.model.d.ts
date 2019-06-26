/// <reference types="mongoose" />
import { ExtractProps } from 'ts-mongoose';
declare const ExternalUserSchema: import("mongoose").Schema<any> & {
    definition: import("ts-mongoose").ConvertObject<{
        _id: string;
        signedIn: boolean;
        clientId: string;
        clientName: string;
        googleId: string;
        microsoftId: string;
        email: string;
        firstname: string;
        lastname: string;
        createdAt: Date;
        token: string;
        permissions: import("ts-mongoose").ConvertObject<{
            reports: boolean;
            orders: boolean;
            activityLog: boolean;
            admin: boolean;
        }>;
    }>;
    options: import("mongoose").SchemaOptions;
};
/** Use this to interact with the 'external_users' collection in mongodb */
export declare const ExternalUser: import("mongoose").Model<import("mongoose").Document & {
    _id: string;
    clientId: string;
    createdAt: Date;
    email: string;
    signedIn: boolean;
    clientName: string;
    googleId: string;
    microsoftId: string;
    firstname: string;
    lastname: string;
    token: string;
    permissions: import("ts-mongoose").ConvertObject<{
        reports: boolean;
        orders: boolean;
        activityLog: boolean;
        admin: boolean;
    }>;
} & {}, {}>;
/** Interface extracted from ExternalUser with the 'Document' parts removed */
export declare type IExternalUser = ExtractProps<typeof ExternalUserSchema>;
/** frontend interface of how the user object returned from the token upon authentication, to be used on frontend */
export interface IJWTUser {
    _id: string;
    firstname: string;
    lastname: string;
    signedIn: boolean;
    email: string;
    permissions: {
        admin: boolean;
        orders: boolean;
        reports: boolean;
        activityLog: boolean;
    };
    exp: number;
    iat: number;
    clientId: string;
    clientName: string;
    googleId?: string;
    microsoftId?: string;
}
export {};
