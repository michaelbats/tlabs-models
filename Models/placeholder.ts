import { Document } from 'mongoose';

export interface DraftOrder {
  _id?: string | undefined;
  status?: 'draft' | 'published';
  clientId: string;
  site?: {
    isNew: boolean;
    UPRN: string;
    UPRNLabel: string;
    postcode: string;
    addressLine1: string;
    city: string;
    county: string;
    mandatoryInduction: boolean;
  };
  survey?: {
    scheduleId: string;
    property: Room[];
  };
}

export interface Room {
  floor: number;
  name: string;
  details: string;
  elements?: string[];
}

export interface OrderDocument extends Document {
  _id: string;
  status?: 'draft' | 'published';
  clientId: string;
  site?: {
    isNew: boolean;
    UPRN: string;
    UPRNLabel: string;
    postcode: string;
    addressLine1: string;
    city: string;
    county: string;
    mandatoryInduction: boolean;
  };
  survey?: {
    scheduleId: string;
    property: {
      type: 'flat' | 'house';
      totalFloors: number;
      allProperty: {
        flooring: { survey: boolean; details: string };
        windows: { survey: boolean; details: string };
        heating: { survey: boolean; details: string };
        roof: { survey: boolean; details: string };
        ceiling: { survey: boolean; details: string };
        externalWalls: { survey: boolean; details: string };
        intercom: { survey: boolean; details: string };
        rewire: { survey: boolean; details: string };
      };
      utilities: {
        boiler: { survey: boolean; details: string };
      };
      kitchen: {
        furniture: { survey: boolean; details: string };
        flooring: { survey: boolean; details: string };
        detectors: { survey: boolean; details: string };
        windows: { survey: boolean; details: string };
        ceiling: { survey: boolean; details: string };
      };
      bathroom: {
        toilet: { survey: boolean; details: string };
        tiles: { survey: boolean; details: string };
      };
    };
  };
}
