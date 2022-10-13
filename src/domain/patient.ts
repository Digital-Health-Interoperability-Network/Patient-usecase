type PatientProp = {
    id: string,
    active : boolean,
    name : HumanName,
    telecom : Telecom[],
    gender : string, //code
    birthDate : Date,
    deceasedBoolean : boolean,
    deceasedDateTime: Date,
    address : Address[],
    maritalStatus : CodeableConcept,
    multipleBirthBoolean : boolean,
    multipleBirthInteger : number,
    photo : string[],
    contact : ContactPerson[],
    communication : string[],
    generalPractitioner : string[], //should be id of string
    managingOrganization : string, //should be id of organization
}

enum gender {
    male
}