import { prop, arrayProp, Ref, Typegoose } from 'typegoose';
import { Without } from './shared.models';

export class Geometry {
	@prop({ required: true })
	type: string;
	@arrayProp({ items: Number, required: true })
	coordinates: [number, number];
}

export const GeometryExample: Geometry = {
	type: 'string',
	coordinates: [12345, 12345]
};

export class Properties {
	@prop()
	UPRN?: string;
	@prop()
	clientId?: string;
	@prop()
	clientName?: string;
	@prop()
	addressLine1?: string;
	@prop()
	postcode?: string;
}

export const PropertiesExample: Properties = {
	UPRN: 'string',
	clientId: 'string',
	clientName: 'string',
	addressLine1: 'string',
	postcode: 'string'
};

export class LocationsSchema extends Typegoose {
	@prop({ required: true })
	_id: string;
	@prop({ required: true })
	type: string;
	@prop({ ref: Geometry, _id: false })
	geometry: Geometry;
	@prop({ ref: Properties, _id: false })
	properties: Properties;
	@prop({ default: new Date(Date.now()) })
	modifiedAt: string;
	@prop({ required: true })
	modifiedBy: string;
}

// ALL EXPORTS:
// MAIN EXPORT
export const Locations = new LocationsSchema().getModelForClass(LocationsSchema, {
	schemaOptions: { collection: 'locations' }
});

export type ILocations = Without<
	LocationsSchema,
	'getModelForClass' | 'setModelForClass' | 'buildSchema'
>;
// SECONDARY STUFF
export interface IGeoJson {
	type: string;
	geometry: Geometry;
	properties?: Properties;
	$key?: string;
}

export const GeoJsonExample: IGeoJson = {
	type: 'string',
	geometry: GeometryExample,
	properties: PropertiesExample,
	$key: 'string'
};

export const LocationsDocExample: ILocations = {
	_id: 'string',
	type: 'string',
	geometry: GeometryExample,
	properties: PropertiesExample,
	modifiedAt: new Date(Date.now()).toISOString(),
	modifiedBy: 'string'
};
