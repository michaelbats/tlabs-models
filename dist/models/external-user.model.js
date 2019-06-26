"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_mongoose_1 = require("ts-mongoose");
const ExternalUserSchema = ts_mongoose_1.createSchema({
    _id: ts_mongoose_1.Type.string({ required: true }),
    signedIn: ts_mongoose_1.Type.boolean({ required: true, default: false }),
    clientId: ts_mongoose_1.Type.string({ required: true }),
    clientName: ts_mongoose_1.Type.string({ required: true }),
    googleId: ts_mongoose_1.Type.string({ unique: true, sparse: true }),
    microsoftId: ts_mongoose_1.Type.string({ unique: true, sparse: true }),
    email: ts_mongoose_1.Type.string({ required: true, unique: true }),
    firstname: ts_mongoose_1.Type.string({ required: true }),
    lastname: ts_mongoose_1.Type.string({ required: true }),
    createdAt: ts_mongoose_1.Type.date({ required: true, default: new Date(Date.now()) }),
    token: ts_mongoose_1.Type.string({ required: true }),
    permissions: ts_mongoose_1.Type.object({ required: true }).of({
        reports: ts_mongoose_1.Type.boolean({ required: true, default: false }),
        orders: ts_mongoose_1.Type.boolean({ required: true, default: false }),
        activityLog: ts_mongoose_1.Type.boolean({ required: true, default: false }),
        admin: ts_mongoose_1.Type.boolean({ required: true, default: false })
    })
});
/** Use this to interact with the 'external_users' collection in mongodb */
exports.ExternalUser = ts_mongoose_1.typedModel('external_users', ExternalUserSchema);
//# sourceMappingURL=external-user.model.js.map