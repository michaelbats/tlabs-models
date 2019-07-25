import { prop, Typegoose, Ref, arrayProp } from 'typegoose';
import { GoogleFile, GoogleFileExample } from './shared.models';

export class WorkingDay {
	@prop({ required: true })
	start: string;
	@prop({ required: true })
	end: string;
}

export const WorkingDayExample: WorkingDay = {
	start: 'string',
	end: 'string'
};

export class WorkingHours {
	@prop({ ref: WorkingDay, _id: false })
	monday: Ref<WorkingDay>;
	@prop({ ref: WorkingDay, _id: false })
	tuesday: Ref<WorkingDay>;
	@prop({ ref: WorkingDay, _id: false })
	wednesday: Ref<WorkingDay>;
	@prop({ ref: WorkingDay, _id: false })
	thursday: Ref<WorkingDay>;
	@prop({ ref: WorkingDay, _id: false })
	friday: Ref<WorkingDay>;
	@prop({ ref: WorkingDay, _id: false })
	saturday: Ref<WorkingDay>;
	@prop({ ref: WorkingDay, _id: false })
	sunday: Ref<WorkingDay>;
}

export const WorkingHoursExample: WorkingHours = {
	monday: WorkingDayExample,
	tuesday: WorkingDayExample,
	wednesday: WorkingDayExample,
	thursday: WorkingDayExample,
	friday: WorkingDayExample,
	saturday: WorkingDayExample,
	sunday: WorkingDayExample
};

export class Engineer {
	@prop()
	homePostcode?: string;
	@prop()
	ratePerHour?: number;
	@prop({ ref: WorkingHours, _id: false })
	workingHours: Ref<WorkingHours>;
	@arrayProp({ items: String })
	safetyEquipment?: string[];
	@arrayProp({ items: String })
	skills?: string[];
	@arrayProp({ items: String })
	inductedSites?: string[];
}

export const EngineerExample: Engineer = {
	homePostcode: 'string',
	ratePerHour: 12345,
	workingHours: WorkingHoursExample,
	safetyEquipment: ['string1', 'string2', 'string3'],
	skills: ['string1', 'string2', 'string3'],
	inductedSites: ['string1', 'string2', 'string3']
};

export class GlobalCalendar {
	@prop()
	maxTime?: string;
	@prop()
	minTime?: string;
}

export const GlobalCalendarExample: GlobalCalendar = {
	maxTime: 'string',
	minTime: 'string'
};

export class Settings {
	@prop({ ref: GlobalCalendar, _id: false })
	globalCalendar?: Ref<GlobalCalendar>;
}

export const SettingsExample: Settings = {
	globalCalendar: GlobalCalendarExample
};

export class UserSchema extends Typegoose {
	@prop({ required: true })
	_id: string;
	@prop({ required: true })
	firstname: string;
	@prop({ required: true })
	lastname: string;
	@prop({ required: true })
	email: string;
	@prop()
	pinColour?: string;
	@prop()
	jobTitle?: string;
	@prop()
	teamsId?: string;
	@prop({ default: new Date(Date.now()) })
	createdAt: string;
	@arrayProp({ items: String })
	tags?: string[];
	@prop({ ref: Settings, _id: false })
	settings?: Ref<Settings>;
	@prop({ ref: Engineer, _id: false })
	engineerAttributes?: Ref<Engineer>;
	@prop()
	permissions?: object;
	@prop({ default: false })
	disabled: boolean;
	@prop()
	roles?: object;
	@prop()
	workMobile?: number;
	@prop({ ref: GoogleFile, _id: false })
	usersSignature?: Ref<GoogleFile>;
}

export const User = new UserSchema().getModelForClass(UserSchema, {
	schemaOptions: { collection: 'users' }
});
export type IUser = Omit<UserSchema, 'getModelForClass' | 'setModelForClass' | 'buildSchema'>;

export const UserDocExample: IUser = {
	_id: 'string',
	firstname: 'string',
	lastname: 'string',
	email: 'string',
	pinColour: 'string',
	jobTitle: 'string',
	teamsId: 'string',
	createdAt: new Date(Date.now()).toISOString(),
	tags: ['string1', 'string2', 'string3'],
	settings: SettingsExample,
	engineerAttributes: EngineerExample,
	permissions: { key1: 'string', key2: 'string' },
	disabled: false,
	roles: { key1: 'string', key2: 'string' },
	workMobile: 12345,
	usersSignature: GoogleFileExample
};
