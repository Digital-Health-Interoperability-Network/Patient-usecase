 import Identifier from "domain/commonObjects/identifier"
 import Annotation from "domain/commonObjects/annotation"
 import Range from "domain/commonObjects/range"

 type Age = string

 export default interface familyMemberHistory{
    "identifier" : Identifier[],
    "status" : "<code>", // R!  partial | completed | entered-in-error | health-unknown
    // "dataAbsentReason" : { CodeableConcept }, // subject-unknown | withheld | unable-to-obtain | deferred
    // "patient" : { Reference(Patient) }, 
    date : Date, // When history was recorded or last updated
    name : string, // The family member described
    // "relationship" : { CodeableConcept }, // R!  Relationship to the subject 
    "sex" : gender, // male | female | other | unknown
    // born[x]: (approximate) date of birth. One of these 3:
    bornDate : Date,
    // age[x]: (approximate) age. One of these 3:
    ageAge : Age ,
    ageRange : Range,
    estimatedAge : boolean, // C? Age is estimated?
    "deceasedBoolean" : boolean,
    "deceasedAge" : Age ,
    "deceasedRange" : Range,
    "deceasedDate" : Date,
    // "reasonCode" : [{ CodeableConcept }], // Why was family member history performed?
    "note" : Annotation[], // General note about related person
    // "condition" : [{ // Condition that the related person had
    //   "code" : { CodeableConcept }, // R!  Condition suffered by relation
    //   "outcome" : { CodeableConcept }, // deceased | permanent disability | etc.
    //   "contributedToDeath" : <boolean>, // Whether the condition contributed to the cause of death
    //   // onset[x]: When condition first manifested. One of these 4:
    //   "onsetAge" : { Age },
    //   "onsetRange" : { Range },
    //   "onsetPeriod" : { Period },
    //   "onsetString" : "<string>",
    //   "note" : Annotation[] // Extra information about condition
    // }]
  }