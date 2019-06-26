/// <reference types="mongoose" />
import { ExtractProps } from 'ts-mongoose';
declare const UserSchema: import("mongoose").Schema<any> & {
    definition: import("ts-mongoose").ConvertObject<{
        _id: string;
        firstname: string;
        lastname: string;
        email: string;
        workMobile: number | null | undefined;
        usersSignature: import("ts-mongoose").ConvertObject<{
            fileId: string;
            fileName: string;
            fileUrl: string;
            hideFromEngineer: boolean;
        }> | null | undefined;
        jobTitle: string | null | undefined;
        teamsId: string | null | undefined;
        roles: {
            of<T>(schema: T): import("ts-mongoose").ConvertObject<T> | null | undefined;
        };
        disabled: boolean;
        permissions: {
            of<T>(schema: T): import("ts-mongoose").ConvertObject<T> | null | undefined;
        };
        pinColour: string | null | undefined;
        createdAt: Date | null | undefined;
        engineerAttributes: import("ts-mongoose").ExtractSchema<import("mongoose").Schema<any> & {
            definition: import("ts-mongoose").ConvertObject<{
                homePostcode: string | null | undefined;
                ratePerHour: number | null | undefined;
                workingHours: import("ts-mongoose").ConvertObject<{
                    monday: import("ts-mongoose").ConvertObject<{
                        start: string;
                        end: string;
                    }>;
                    tuesday: import("ts-mongoose").ConvertObject<{
                        start: string;
                        end: string;
                    }>;
                    wednesday: import("ts-mongoose").ConvertObject<{
                        start: string;
                        end: string;
                    }>;
                    thursday: import("ts-mongoose").ConvertObject<{
                        start: string;
                        end: string;
                    }>;
                    friday: import("ts-mongoose").ConvertObject<{
                        start: string;
                        end: string;
                    }>;
                    saturday: import("ts-mongoose").ConvertObject<{
                        start: string;
                        end: string;
                    }>;
                    sunday: import("ts-mongoose").ConvertObject<{
                        start: string;
                        end: string;
                    }>;
                }> | null | undefined;
                safetyEquipment: string[] | null | undefined;
                skills: string[] | null | undefined;
                inductedSites: string[] | null | undefined;
            }>;
            options: import("mongoose").SchemaOptions;
        }> | null | undefined;
        settings: import("ts-mongoose").ConvertObject<{
            globalCalendar: import("ts-mongoose").ConvertObject<{
                maxTime: string | null | undefined;
                minTime: string | null | undefined;
            }> | null | undefined;
        }> | null | undefined;
        tags: string[] | null | undefined;
    }>;
    options: import("mongoose").SchemaOptions;
};
export declare const User: import("mongoose").Model<import("mongoose").Document & {
    disabled: boolean;
    _id: string;
    email: string;
    firstname: string;
    lastname: string;
    permissions: {
        of<T>(schema: T): import("ts-mongoose").ConvertObject<T> | null | undefined;
    };
    roles: {
        of<T>(schema: T): import("ts-mongoose").ConvertObject<T> | null | undefined;
    };
} & {
    createdAt?: Date | null | undefined;
    teamsId?: string | null | undefined;
    tags?: string[] | null | undefined;
    workMobile?: number | null | undefined;
    usersSignature?: import("ts-mongoose").ConvertObject<{
        fileId: string;
        fileName: string;
        fileUrl: string;
        hideFromEngineer: boolean;
    }> | null | undefined;
    jobTitle?: string | null | undefined;
    pinColour?: string | null | undefined;
    engineerAttributes?: import("ts-mongoose").ExtractSchema<import("mongoose").Schema<any> & {
        definition: import("ts-mongoose").ConvertObject<{
            homePostcode: string | null | undefined;
            ratePerHour: number | null | undefined;
            workingHours: import("ts-mongoose").ConvertObject<{
                monday: import("ts-mongoose").ConvertObject<{
                    start: string;
                    end: string;
                }>;
                tuesday: import("ts-mongoose").ConvertObject<{
                    start: string;
                    end: string;
                }>;
                wednesday: import("ts-mongoose").ConvertObject<{
                    start: string;
                    end: string;
                }>;
                thursday: import("ts-mongoose").ConvertObject<{
                    start: string;
                    end: string;
                }>;
                friday: import("ts-mongoose").ConvertObject<{
                    start: string;
                    end: string;
                }>;
                saturday: import("ts-mongoose").ConvertObject<{
                    start: string;
                    end: string;
                }>;
                sunday: import("ts-mongoose").ConvertObject<{
                    start: string;
                    end: string;
                }>;
            }> | null | undefined;
            safetyEquipment: string[] | null | undefined;
            skills: string[] | null | undefined;
            inductedSites: string[] | null | undefined;
        }>;
        options: import("mongoose").SchemaOptions;
    }> | null | undefined;
    settings?: import("ts-mongoose").ConvertObject<{
        globalCalendar: import("ts-mongoose").ConvertObject<{
            maxTime: string | null | undefined;
            minTime: string | null | undefined;
        }> | null | undefined;
    }> | null | undefined;
}, {}>;
export declare type IUser = ExtractProps<typeof UserSchema>;
export {};
