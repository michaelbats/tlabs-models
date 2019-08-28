export enum QAActions {
    UrgentAttentionRequired = 'Urgent Attention Required',
    RepairEncapsulate = 'Repair/Encapsulate',
    ActionRequired = 'Action Required',
    RemovalRecommended = 'Removal Recommended',
    MaterialToBeManagedAsAsbestos = 'Material to be managed as asbestos',
    NoAsbestosDetected = 'No asbestos detected',
    NoSuspectMaterialIdnetified = 'No suspect material identified'
}

export enum QAIssueType {
    LabIssues = 'Lab Issues',
    SurveyorIssues = 'Surveyor Issues',
    AdminIssues = 'Admin Issues',
    Other = 'Other'
}

export enum RaiseInvoice {
    Manual = 'manual',
    Automatic = 'automatic',
    Bulk = 'bulk'
}

export enum AutomaticAnalysisReport {
    Manual = 'manual',
    Automatic = 'automatic'
}

export enum Likelihood {
    CertainGuaranteed = 'Certain/Guaranteed',
    Likely = 'Likely',
    Possible = 'Possible',
    Unlikely = 'Unlikely'
}

export enum Status {
    NotBooked = 'Not Booked',
    Booked = 'Booked',
    Finished = 'Finished'
}

export enum Reason {
    NoAnswer = 'No Answer',
    CallRejectedByContact = 'Call Rejected By Contact',
    WrongNumber = 'Wrong Number',
    ContactUnavailable = 'Contact Unavailable',
    CallbackRequested = 'Callback Requested'
}

export enum RelatedCollection {
    Clients = 'clients',
    Contacts = 'contacts',
    Jobs = 'jobs',
    Leads = 'leads',
    Personal = 'personal',
    Projects = 'projects',
    Quotes = 'quotes',
    Sites = 'sites'
}

export enum ActivityType {
    Email = 'email',
    Note = 'note',
    Call = 'call',
    Update = 'update',
    Meeting = 'meeting'
}

export enum Offices {
    All = 'All',
    Fen = 'Fenstanton',
    Les = 'Leicester',
    Lon = 'London'
}

export enum SurveyType {
    Management = 'Management',
    Refurbishment = 'Refurbishment',
    PartRefurbishment = 'Part-Refurbishment',
    Demolition = 'Demolition'
}
