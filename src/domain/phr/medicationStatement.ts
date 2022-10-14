import Identifier from "domain/commonObjects/identifier"

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

export default interface medicationStatement{
    "identifier" : Identifier[],
    status : status
    statusReason : statusReason[],
    category : category,
    // "medicationReference" : { Reference(Medication) },
    // "subject" : { Reference(Group|Patient) }, // R!  Who is/was taking  the medication
    "effectiveDateTime" : "<dateTime>",
    "effectivePeriod" : { Period },
    "dateAsserted" : "<dateTime>", // When the statement was asserted?
    "informationSource" : { Reference(Organization|Patient|Practitioner|
     PractitionerRole|RelatedPerson) }, // Person or organization that provided the information about the taking of this medication
    "derivedFrom" : [{ Reference(Any) }], // Additional supporting information
    "reasonCode" : [{ CodeableConcept }], // Reason for why the medication is being/was taken
    "reasonReference" : [{ Reference(Condition|DiagnosticReport|Observation) }], // Condition or observation that supports why the medication is being/was taken
    "note" : [{ Annotation }], // Further information about the statement
    "dosage" : [{ Dosage }] // Details of how medication is/was taken or should be taken
  }