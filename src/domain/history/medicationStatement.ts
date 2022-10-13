{
    "resourceType" : "MedicationStatement",
    // from Resource: id, meta, implicitRules, and language
    // from DomainResource: text, contained, extension, and modifierExtension
    "identifier" : [{ Identifier }], // External identifier
    "basedOn" : [{ Reference(CarePlan|MedicationRequest|ServiceRequest) }], // Fulfils plan, proposal or order
    "partOf" : [{ Reference(MedicationAdministration|MedicationDispense|
     MedicationStatement|Observation|Procedure) }], // Part of referenced event
    "status" : "<code>", // R!  active | completed | entered-in-error | intended | stopped | on-hold | unknown | not-taken
    "statusReason" : [{ CodeableConcept }], // Reason for current status
    "category" : { CodeableConcept }, // Type of medication usage
    // medication[x]: What medication was taken. One of these 2:
    "medicationCodeableConcept" : { CodeableConcept },
    "medicationReference" : { Reference(Medication) },
    "subject" : { Reference(Group|Patient) }, // R!  Who is/was taking  the medication
    "context" : { Reference(Encounter|EpisodeOfCare) }, // Encounter / Episode associated with MedicationStatement
    // effective[x]: The date/time or interval when the medication is/was/will be taken. One of these 2:
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