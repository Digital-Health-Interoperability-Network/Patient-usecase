 import Identifier from "domain/interfaces/identifier"
 import Annotation from "domain/interfaces/annotation"
 import Range from "domain/commonObjects/range"

 type Age = string

 enum status {
  partial,
  completed,
  "entered-in-error",
  "health-unknown",
 }

 enum relationship {
  "family member",
  "child",
  "extended family member",
  "step child",
  "aunt",
  "uncle",
  "grandmother",
  "grandfather",
  "granddaughter",
  "grandson",
  "others"
 }

 enum dataAbsentReason {
  "Subject Unknown",
  "Information Withheld",
  "Unable to Obtain", 
  "Deferred"
 }

 export default interface FamilyMemberHistory{
    "identifier" : Identifier[],
    status : status
    "dataAbsentReason" : dataAbsentReason, // subject-unknown | withheld | unable-to-obtain | deferred
    // "patient" : { Reference(Patient) }, 
    date : Date, // When history was recorded or last updated
    name : string, // The family member described
    "relationship" : relationship, // R!  Relationship to the subject 
    "sex" : gender, // male | female | other | unknown
    bornDate : Date,
    ageAge : Age ,
    ageRange : Range,
    estimatedAge : boolean, // C? Age is estimated?
    "deceasedBoolean" : boolean,
    "deceasedAge" : Age ,
    "deceasedRange" : Range,
    "deceasedDate" : Date,
    "note" : Annotation[], // General note about related person
  }