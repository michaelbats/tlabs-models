/// <reference types="mongoose" />
import { ExtractProps } from 'ts-mongoose';
export declare const GoogleFileObject: {
    fileId: string;
    fileName: string;
    fileUrl: string;
    hideFromEngineer: boolean;
};
declare const GoogleFileSchema: import("mongoose").Schema<any> & {
    definition: import("ts-mongoose").ConvertObject<{
        fileId: string;
        fileName: string;
        fileUrl: string;
        hideFromEngineer: boolean;
    }>;
    options: import("mongoose").SchemaOptions;
};
export declare const GoogleFolderObject: {
    id: string;
    name: string;
    url: string;
};
declare const GoogleFolderSchema: import("mongoose").Schema<any> & {
    definition: import("ts-mongoose").ConvertObject<{
        id: string;
        name: string;
        url: string;
    }>;
    options: import("mongoose").SchemaOptions;
};
export declare const ElementObject: {
    _id: string;
    name: string;
    description: string;
    duration: number;
    price: number;
    priceWeekend: number;
    reference: number;
};
declare const ElementSchema: import("mongoose").Schema<any> & {
    definition: import("ts-mongoose").ConvertObject<{
        _id: string;
        name: string;
        description: string;
        duration: number;
        price: number;
        priceWeekend: number;
        reference: number;
    }>;
    options: import("mongoose").SchemaOptions;
};
export declare const WorkflowStepsObject: {
    numberOfDays: number | null | undefined;
    steps: undefined[] | null[] | import("ts-mongoose").ConvertObject<{
        type: import("ts-mongoose").ConvertObject<{
            action: string | null | undefined;
            percentage: number | null | undefined;
            delay: number | null | undefined;
            associatedRole: string | null | undefined;
        }> | null | undefined;
        label: string | null | undefined;
    }>[] | null | undefined;
};
export declare const RequirementsObject: {
    reqId: string;
    quantity: number;
    clientCost: number;
    externalCost: number;
};
declare const RequirementsSchema: import("mongoose").Schema<any> & {
    definition: import("ts-mongoose").ConvertObject<{
        reqId: string;
        quantity: number;
        clientCost: number;
        externalCost: number;
    }>;
    options: import("mongoose").SchemaOptions;
};
export declare const WorkflowObject: {
    presite: import("ts-mongoose").ConvertObject<{
        numberOfDays: number | null | undefined;
        steps: undefined[] | null[] | import("ts-mongoose").ConvertObject<{
            type: import("ts-mongoose").ConvertObject<{
                action: string | null | undefined;
                percentage: number | null | undefined;
                delay: number | null | undefined;
                associatedRole: string | null | undefined;
            }> | null | undefined;
            label: string | null | undefined;
        }>[] | null | undefined;
    }> | null | undefined;
    site: import("ts-mongoose").ConvertObject<{
        numberOfDays: number | null | undefined;
        steps: undefined[] | null[] | import("ts-mongoose").ConvertObject<{
            type: import("ts-mongoose").ConvertObject<{
                action: string | null | undefined;
                percentage: number | null | undefined;
                delay: number | null | undefined;
                associatedRole: string | null | undefined;
            }> | null | undefined;
            label: string | null | undefined;
        }>[] | null | undefined;
    }> | null | undefined;
    postsite: import("ts-mongoose").ConvertObject<{
        numberOfDays: number | null | undefined;
        steps: undefined[] | null[] | import("ts-mongoose").ConvertObject<{
            type: import("ts-mongoose").ConvertObject<{
                action: string | null | undefined;
                percentage: number | null | undefined;
                delay: number | null | undefined;
                associatedRole: string | null | undefined;
            }> | null | undefined;
            label: string | null | undefined;
        }>[] | null | undefined;
    }> | null | undefined;
};
declare const WorkflowSchema: import("mongoose").Schema<any> & {
    definition: import("ts-mongoose").ConvertObject<{
        presite: import("ts-mongoose").ConvertObject<{
            numberOfDays: number | null | undefined;
            steps: undefined[] | null[] | import("ts-mongoose").ConvertObject<{
                type: import("ts-mongoose").ConvertObject<{
                    action: string | null | undefined;
                    percentage: number | null | undefined;
                    delay: number | null | undefined;
                    associatedRole: string | null | undefined;
                }> | null | undefined;
                label: string | null | undefined;
            }>[] | null | undefined;
        }> | null | undefined;
        site: import("ts-mongoose").ConvertObject<{
            numberOfDays: number | null | undefined;
            steps: undefined[] | null[] | import("ts-mongoose").ConvertObject<{
                type: import("ts-mongoose").ConvertObject<{
                    action: string | null | undefined;
                    percentage: number | null | undefined;
                    delay: number | null | undefined;
                    associatedRole: string | null | undefined;
                }> | null | undefined;
                label: string | null | undefined;
            }>[] | null | undefined;
        }> | null | undefined;
        postsite: import("ts-mongoose").ConvertObject<{
            numberOfDays: number | null | undefined;
            steps: undefined[] | null[] | import("ts-mongoose").ConvertObject<{
                type: import("ts-mongoose").ConvertObject<{
                    action: string | null | undefined;
                    percentage: number | null | undefined;
                    delay: number | null | undefined;
                    associatedRole: string | null | undefined;
                }> | null | undefined;
                label: string | null | undefined;
            }>[] | null | undefined;
        }> | null | undefined;
    }>;
    options: import("mongoose").SchemaOptions;
};
export declare const SamplesObject: {
    quantity: number | null | undefined;
    trackingCode: string | null | undefined;
    isUrgent: boolean | null | undefined;
    isUrgentContact: string | null | undefined;
    isUrgentReason: string | null | undefined;
    analysisStartTime: Date | null | undefined;
    analysisEndTime: Date | null | undefined;
    qaStartTime: Date | null | undefined;
    qaEndTime: Date | null | undefined;
    qaAction: "Urgent Attention Required" | "Repair/Encapsulate" | "Action Required" | "Removal Recommended" | "Material to be managed as asbestos" | "No asbestos detected" | "No suspect material identified";
    qaIssues: boolean | null | undefined;
    qaIssueType: "Lab Issues" | "Surveyor Issues" | "Admin Issues" | "Other";
    teamsReport: string | null | undefined;
};
declare const SamplesSchema: import("mongoose").Schema<any> & {
    definition: import("ts-mongoose").ConvertObject<{
        quantity: number | null | undefined;
        trackingCode: string | null | undefined;
        isUrgent: boolean | null | undefined;
        isUrgentContact: string | null | undefined;
        isUrgentReason: string | null | undefined;
        analysisStartTime: Date | null | undefined;
        analysisEndTime: Date | null | undefined;
        qaStartTime: Date | null | undefined;
        qaEndTime: Date | null | undefined;
        qaAction: "Urgent Attention Required" | "Repair/Encapsulate" | "Action Required" | "Removal Recommended" | "Material to be managed as asbestos" | "No asbestos detected" | "No suspect material identified";
        qaIssues: boolean | null | undefined;
        qaIssueType: "Lab Issues" | "Surveyor Issues" | "Admin Issues" | "Other";
        teamsReport: string | null | undefined;
    }>;
    options: import("mongoose").SchemaOptions;
};
export declare const ScheduleOfRatesObject: {
    _id: string;
    title: string;
    normalHourse: number | null | undefined;
    weekend: number | null | undefined;
    duration: number | null | undefined;
    internalProcedure: string | null | undefined;
    description: string | null | undefined;
    reqSkills: string[] | null | undefined;
    teamsAppointmentType: string | null | undefined;
    teamsSurveyType: string | null | undefined;
    teamsPropertyType: string | null | undefined;
    teamsDistanceBand: string | null | undefined;
    numberOfPumps: number | null | undefined;
    teamsAirTestType: string | null | undefined;
    elements: string[] | null | undefined;
    reference: number | null | undefined;
};
declare const ScheduleOfRatesSchema: import("mongoose").Schema<any> & {
    definition: import("ts-mongoose").ConvertObject<{
        _id: string;
        title: string;
        normalHourse: number | null | undefined;
        weekend: number | null | undefined;
        duration: number | null | undefined;
        internalProcedure: string | null | undefined;
        description: string | null | undefined;
        reqSkills: string[] | null | undefined;
        teamsAppointmentType: string | null | undefined;
        teamsSurveyType: string | null | undefined;
        teamsPropertyType: string | null | undefined;
        teamsDistanceBand: string | null | undefined;
        numberOfPumps: number | null | undefined;
        teamsAirTestType: string | null | undefined;
        elements: string[] | null | undefined;
        reference: number | null | undefined;
    }>;
    options: import("mongoose").SchemaOptions;
};
export declare type ISamples = ExtractProps<typeof SamplesSchema>;
export declare type IWorlflow = ExtractProps<typeof WorkflowSchema>;
export declare type IRequirements = ExtractProps<typeof RequirementsSchema>;
export declare type IGoogleFile = ExtractProps<typeof GoogleFileSchema>;
export declare type IGoogleFolder = ExtractProps<typeof GoogleFolderSchema>;
export declare type IElement = ExtractProps<typeof ElementSchema>;
export declare type IScheduleOfRates = ExtractProps<typeof ScheduleOfRatesSchema>;
export {};
