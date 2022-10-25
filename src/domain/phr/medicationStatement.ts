import Identifier from "domain/interfaces/identifier"
import IPeriod from 'domain/commonObjects/period'
import Dosage from "domain/interfaces/dosage"
import Annotation from "domain/interfaces/annotation"

enum status {
  active,
  completed,
  "entered-in-error",
  intended,
  stopped,
  "on-hold",
  unknown,
  "not-taken"
}

enum statusReason {
  "Drugs not taken/completed",
  "Drug not taken - dislike taste",
  "Drug not taken - dislike form",
  "Drug not taken - side-effects",
  "Drug not taken - inconvenient",
  "Treatment stopped - alternative therapy undertaken",
  "Drug not taken - patient lost tablets",
  "Drug discontinued - reason unknown",
}

enum category {
  inpatient,
  outpatient,
  community,
  patientSpecified,
}

enum reasonCode {
  "Clinical finding (finding)",
  "Anxiety disorder of childhood OR adolescence",
  "Choroidal hemorrhage",
  "Chronic pharyngitis",
  "Normal peripheral vision",
  "Injury of intercostal artery",
  "Sycosis",
  "EEG finding",
  "Poisoning by oxytocin",
  "Boil of penis",
  "Tic disorder",
  "Hypertrophy of lip"
}

export default interface MedicationStatement{
    "identifier" : Identifier[],
    status : status
    statusReason : statusReason[],
    category : category,
    // "medicationReference" : { Reference(Medication) },
    // "subject" : { Reference(Group|Patient) }, // R!  Who is/was taking  the medication
    effectiveDateTime : Date,
    effectivePeriod :  IPeriod ,
    dateAsserted : Date, // When the statement was asserted?
    reasonCode : reasonCode[], // Reason for why the medication is being/was taken
    // "reasonReference" : [{ Reference(Condition|DiagnosticReport|Observation) }], // Condition or observation that supports why the medication is being/was taken
    "note" : Annotation[], // Further information about the statement
    "dosage" : Dosage[] // Details of how medication is/was taken or should be taken
  }