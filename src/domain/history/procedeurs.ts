{
    "resourceType" : "Procedure",
  // from Resource: id, meta, implicitRules, and language
  // from DomainResource: text, contained, extension, and modifierExtension
  "identifier" : [{ Identifier }], // External Identifiers for this procedure
  "instantiatesCanonical" : [{ canonical(ActivityDefinition|Measure|
   OperationDefinition|PlanDefinition|Questionnaire) }], // Instantiates FHIR protocol or definition
  "instantiatesUri" : ["<uri>"], // Instantiates external protocol or definition
  "basedOn" : [{ Reference(CarePlan|ServiceRequest) }], // A request for this procedure
  "partOf" : [{ Reference(MedicationAdministration|Observation|Procedure) }], // Part of referenced event
  "status" : "<code>", // R!  preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown
  "statusReason" : { CodeableConcept }, // Reason for current status
  "category" : { CodeableConcept }, // Classification of the procedure
  "code" : { CodeableConcept }, // Identification of the procedure
  "subject" : { Reference(Group|Patient) }, // R!  Who the procedure was performed on
  "encounter" : { Reference(Encounter) }, // Encounter created as part of
  // performed[x]: When the procedure was performed. One of these 5:
  "performedDateTime" : "<dateTime>",
  "performedPeriod" : { Period },
  "performedString" : "<string>",
  "performedAge" : { Age },
  "performedRange" : { Range },
  "recorder" : { Reference(Patient|Practitioner|PractitionerRole|
   RelatedPerson) }, // Who recorded the procedure
  "asserter" : { Reference(Patient|Practitioner|PractitionerRole|
   RelatedPerson) }, // Person who asserts this procedure
  "performer" : [{ // The people who performed the procedure
    "function" : { CodeableConcept }, // Type of performance
    "actor" : { Reference(Device|Organization|Patient|Practitioner|
    PractitionerRole|RelatedPerson) }, // R!  The reference to the practitioner
    "onBehalfOf" : { Reference(Organization) } // Organization the device or practitioner was acting for
  }],
  "location" : { Reference(Location) }, // Where the procedure happened
  "reasonCode" : [{ CodeableConcept }], // Coded reason procedure performed
  "reasonReference" : [{ Reference(Condition|DiagnosticReport|
   DocumentReference|Observation|Procedure) }], // The justification that the procedure was performed
  "bodySite" : [{ CodeableConcept }], // Target body sites
  "outcome" : { CodeableConcept }, // The result of procedure
  "report" : [{ Reference(Composition|DiagnosticReport|DocumentReference) }], // Any report resulting from the procedure
  "complication" : [{ CodeableConcept }], // Complication following the procedure
  "complicationDetail" : [{ Reference(Condition) }], // A condition that is a result of the procedure
  "followUp" : [{ CodeableConcept }], // Instructions for follow up
  "note" : [{ Annotation }], // Additional information about the procedure
  "focalDevice" : [{ // Manipulated, implanted, or removed device
    "action" : { CodeableConcept }, // Kind of change to device
    "manipulated" : { Reference(Device) } // R!  Device that was changed
  }],
  "usedReference" : [{ Reference(Device|Medication|Substance) }], // Items used during procedure
  "usedCode" : [{ CodeableConcept }] // Coded items used during the procedure
}