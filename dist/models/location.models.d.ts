/// <reference types="mongoose" />
import { ExtractProps } from 'ts-mongoose';
declare const Geometry: import("mongoose").Schema<any> & {
    definition: import("ts-mongoose").ConvertObject<{
        type: string;
        coordinates: [number, number];
    }>;
    options: import("mongoose").SchemaOptions;
};
declare const Properties: import("mongoose").Schema<any> & {
    definition: import("ts-mongoose").ConvertObject<{
        UPRN: string | null | undefined;
        clientId: string | null | undefined;
        clientName: string | null | undefined;
        addressLine1: string | null | undefined;
        postcode: string | null | undefined;
    }>;
    options: import("mongoose").SchemaOptions;
};
declare const LocationsSchema: import("mongoose").Schema<any> & {
    definition: import("ts-mongoose").ConvertObject<{
        _id: string;
        type: string;
        geometry: import("ts-mongoose").ExtractSchema<import("mongoose").Schema<any> & {
            definition: import("ts-mongoose").ConvertObject<{
                type: string;
                coordinates: [number, number];
            }>;
            options: import("mongoose").SchemaOptions;
        }>;
        properties: import("ts-mongoose").ExtractSchema<import("mongoose").Schema<any> & {
            definition: import("ts-mongoose").ConvertObject<{
                UPRN: string | null | undefined;
                clientId: string | null | undefined;
                clientName: string | null | undefined;
                addressLine1: string | null | undefined;
                postcode: string | null | undefined;
            }>;
            options: import("mongoose").SchemaOptions;
        }>;
        modifiedBy: string;
        modifiedAt: Date;
    }>;
    options: import("mongoose").SchemaOptions;
};
export declare const Locations: import("mongoose").Model<import("mongoose").Document & {
    _id: string;
    type: string;
    geometry: import("ts-mongoose").ExtractSchema<import("mongoose").Schema<any> & {
        definition: import("ts-mongoose").ConvertObject<{
            type: string;
            coordinates: [number, number];
        }>;
        options: import("mongoose").SchemaOptions;
    }>;
    properties: import("ts-mongoose").ExtractSchema<import("mongoose").Schema<any> & {
        definition: import("ts-mongoose").ConvertObject<{
            UPRN: string | null | undefined;
            clientId: string | null | undefined;
            clientName: string | null | undefined;
            addressLine1: string | null | undefined;
            postcode: string | null | undefined;
        }>;
        options: import("mongoose").SchemaOptions;
    }>;
    modifiedBy: string;
    modifiedAt: Date;
} & {}, {}>;
export declare type ILocations = ExtractProps<typeof LocationsSchema>;
export declare type IGeometry = ExtractProps<typeof Geometry>;
export declare type IProperties = ExtractProps<typeof Properties>;
export interface IGeoJson {
    type: string;
    geometry: IGeometry;
    properties?: IProperties;
    $key?: string;
}
export {};
