import Identifier from "domain/commonObjects/identifier"

enum status {
  'active' = "active",
  "inactive" = "inactive",
  "entered-in-error" = "entered-in-error"
}

enum form {
  "powder" = "powder",
  "tablets" = "tablets",
  "capsule" = "capsule"

}

type Ratio = number

export default interface Medication {
    // from Resource: id, meta, implicitRules, and language
    // from DomainResource: text, contained, extension, and modifierExtension
    identifier : Identifier[], // Business identifier for this medication
    // "code" : { CodeableConcept }, // Codes that identify this medication
    status : status, // active | inactive | entered-in-error
    form : form, // powder | tablets | capsule +
    amount : Ratio, // Amount of drug in package
  }