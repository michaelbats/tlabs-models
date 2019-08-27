import { prop, arrayProp, Ref, Typegoose } from 'typegoose';
import { Without } from './shared.models';

export class Geometry {
	@prop({ required: true })
	type: string;
	@arrayProp({ items: Number, required: true })
	coordinates: [number, number];
}

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
export const Location = new LocationsSchema().getModelForClass(LocationsSchema, {
	schemaOptions: { collection: 'locations' }
});

export type ILocation = Without<
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

export type IProperties = Properties;
export type IGeometry = Geometry;
