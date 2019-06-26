/// <reference types="mongoose" />
import { ExtractProps } from 'ts-mongoose';
declare const SystemSchema: import("mongoose").Schema<any> & {
    definition: import("ts-mongoose").ConvertObject<{
        _id: string;
        lists: import("ts-mongoose").ConvertObject<{
            engineerSkills: import("ts-mongoose").ConvertObject<{
                name: string;
                _id: string;
            }>[];
            requirements: import("ts-mongoose").ConvertObject<{
                name: string;
                clientCost: number;
                externalCost: number;
                _id: string;
            }>[];
            sectors: import("ts-mongoose").ConvertObject<{
                name: string;
                _id: string;
            }>[];
            sources: import("ts-mongoose").ConvertObject<{
                name: string;
                _id: string;
            }>[];
            safetyEquipments: import("ts-mongoose").ConvertObject<{
                name: string;
                _id: string;
            }>[];
            siteItems: import("ts-mongoose").ConvertObject<{
                para: string;
                item: string;
            }>[];
            riskAssessments: import("ts-mongoose").ConvertObject<{
                _id: string;
                name: string;
                applicable: boolean;
            }>[];
            caveats: import("ts-mongoose").ConvertObject<{
                name: string;
                description: string;
                _id: string;
            }>[];
            elements: import("ts-mongoose").ConvertObject<{
                _id: string;
                name: string;
                description: string;
                duration: number;
                price: number;
                priceWeekend: number;
                reference: number;
            }>[];
            cancellationReasons: import("ts-mongoose").ConvertObject<{
                name: string;
                _id: string;
            }>[];
            onHoldReasons: import("ts-mongoose").ConvertObject<{
                name: string;
                _id: string;
            }>[];
        }>[];
        rag: import("ts-mongoose").ConvertObject<{
            danger: number;
            warniing: number;
        }>;
        scheduleOfRates: import("ts-mongoose").ConvertObject<{
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
        }>[];
        lastSiteDownload: Date;
        callScript: string;
        lastJobDownload: Date;
        reportEmailText: string;
        latestJobsOutputReport: import("ts-mongoose").ConvertObject<{
            fileId: string;
            fileName: string;
            fileUrl: string;
            hideFromEngineer: boolean;
        }>;
        reportEmail: string;
        currentTLuprn: number;
        dayEnd: string;
        dayStart: string;
        weeklyTaskReport: import("ts-mongoose").ConvertObject<{
            type: string;
            data: {
                of<T>(schema: T): import("ts-mongoose").ConvertObject<T>;
            }[];
        }>[];
        engineerLocations: import("ts-mongoose").ConvertObject<{
            emails: string[];
            name: string;
            report: string[];
        }>[];
        weeklyTaskReportConfig: import("ts-mongoose").ConvertObject<{
            emails: string[];
        }>;
    }>;
    options: import("mongoose").SchemaOptions;
};
export declare const System: import("mongoose").Model<import("mongoose").Document & {
    _id: string;
    reportEmail: string;
    scheduleOfRates: import("ts-mongoose").ConvertObject<{
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
    }>[];
    lists: import("ts-mongoose").ConvertObject<{
        engineerSkills: import("ts-mongoose").ConvertObject<{
            name: string;
            _id: string;
        }>[];
        requirements: import("ts-mongoose").ConvertObject<{
            name: string;
            clientCost: number;
            externalCost: number;
            _id: string;
        }>[];
        sectors: import("ts-mongoose").ConvertObject<{
            name: string;
            _id: string;
        }>[];
        sources: import("ts-mongoose").ConvertObject<{
            name: string;
            _id: string;
        }>[];
        safetyEquipments: import("ts-mongoose").ConvertObject<{
            name: string;
            _id: string;
        }>[];
        siteItems: import("ts-mongoose").ConvertObject<{
            para: string;
            item: string;
        }>[];
        riskAssessments: import("ts-mongoose").ConvertObject<{
            _id: string;
            name: string;
            applicable: boolean;
        }>[];
        caveats: import("ts-mongoose").ConvertObject<{
            name: string;
            description: string;
            _id: string;
        }>[];
        elements: import("ts-mongoose").ConvertObject<{
            _id: string;
            name: string;
            description: string;
            duration: number;
            price: number;
            priceWeekend: number;
            reference: number;
        }>[];
        cancellationReasons: import("ts-mongoose").ConvertObject<{
            name: string;
            _id: string;
        }>[];
        onHoldReasons: import("ts-mongoose").ConvertObject<{
            name: string;
            _id: string;
        }>[];
    }>[];
    rag: import("ts-mongoose").ConvertObject<{
        danger: number;
        warniing: number;
    }>;
    lastSiteDownload: Date;
    callScript: string;
    lastJobDownload: Date;
    reportEmailText: string;
    latestJobsOutputReport: import("ts-mongoose").ConvertObject<{
        fileId: string;
        fileName: string;
        fileUrl: string;
        hideFromEngineer: boolean;
    }>;
    currentTLuprn: number;
    dayEnd: string;
    dayStart: string;
    weeklyTaskReport: import("ts-mongoose").ConvertObject<{
        type: string;
        data: {
            of<T>(schema: T): import("ts-mongoose").ConvertObject<T>;
        }[];
    }>[];
    engineerLocations: import("ts-mongoose").ConvertObject<{
        emails: string[];
        name: string;
        report: string[];
    }>[];
    weeklyTaskReportConfig: import("ts-mongoose").ConvertObject<{
        emails: string[];
    }>;
} & {}, {}>;
export declare type ISystem = ExtractProps<typeof SystemSchema>;
export {};
