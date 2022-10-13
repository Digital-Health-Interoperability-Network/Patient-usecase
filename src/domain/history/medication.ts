{
    "resourceType" : "Medication",
    // from Resource: id, meta, implicitRules, and language
    // from DomainResource: text, contained, extension, and modifierExtension
    "identifier" : [{ Identifier }], // Business identifier for this medication
    "code" : { CodeableConcept }, // Codes that identify this medication
    "status" : "<code>", // active | inactive | entered-in-error
    "manufacturer" : { Reference(Organization) }, // Manufacturer of the item
    "form" : { CodeableConcept }, // powder | tablets | capsule +
    "amount" : { Ratio }, // Amount of drug in package
    "batch" : { // Details about packaged medications
      "lotNumber" : "<string>", // Identifier assigned to batch
      "expirationDate" : "<dateTime>" // When batch will expire
    }
  }