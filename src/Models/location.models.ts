import { prop, arrayProp, Ref, Typegoose } from 'typegoose';

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
	geometry: Ref<Geometry>;
	@prop({ ref: Properties, _id: false })
	properties: Ref<Properties>;
	@prop({ default: new Date(Date.now()) })
	modifiedAt: Date;
	@prop({ required: true })
	modifiedBy: string;
}

// ALL EXPORTS:
// MAIN EXPORT
export const Locations = new LocationsSchema().getModelForClass(LocationsSchema, {
	schemaOptions: { collection: 'locations' }
});

export type ILocations = LocationsSchema;
// SECONDARY STUFF
export type IGeometry = Geometry;
export type IProperties = Properties;
export interface IGeoJson {
	type: string;
	geometry: IGeometry;
	properties?: IProperties;
	$key?: string;
}
