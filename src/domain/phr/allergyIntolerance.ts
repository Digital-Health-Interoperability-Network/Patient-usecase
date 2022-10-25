import allergyType from  "../enums/allergyIntolerance/type"
import Identifier from '../interfaces/identifier'
import clinicalStatus from '../enums/allergyIntolerance/clinicalStatus'
import verificationStatus from "../enums/allergyIntolerance/verificationStatus"
import code from "../enums/allergyIntolerance/code"
import category from "../enums/allergyIntolerance/category"
import criticality from "../enums/allergyIntolerance/criticality"
import Range from "../commonObjects/range"
import Annotation from "domain/interfaces/annotation"


interface AllergyIntolerance {
    resourceType : "AllergyIntolerance",
    identifier : Identifier[],
    clinicalStatus : clinicalStatus,
    verificationStatus : verificationStatus,
    type : allergyType,
    category : category[],
    criticality : criticality,
    code : code,
    // "patient" : { Reference(Patient) },
    onsetRange : Range ,
    recordedDate : Date, // Date first version of the resource instance was recorded
    // "recorder" : { Reference(Patient|Practitioner|PractitionerRole|RelatedPerson) }, // Who recorded the sensitivity
    lastOccurrence : Date,
    note : Annotation[], // Additional text not captured in other fields
   }

export default AllergyIntolerance