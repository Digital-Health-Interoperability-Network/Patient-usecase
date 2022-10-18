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

enum code {
  "Medicinal product",
  "Product containing hypothalamic releasing factor",
  "Therapeutic radioisotope",
  "Hypotensive agent",
  "Product containing flumetasone (medicinal product)",
  "Antithyroid agent",
  "Product containing Latrodectus mactans antivenom (medicinal product)",
  "Expectorant agent",
  "Cytomegalovirus antibody-containing product",
  "Tetracyclic antidepressant",
  "Multivitamin preparation",
}

type Ratio = number

export default interface Medication {
    identifier : Identifier[], // Business identifier for this medication
    "code" : code, // Codes that identify this medication
    status : status, // active | inactive | entered-in-error
    form : form, // powder | tablets | capsule +
    amount : Ratio, // Amount of drug in package
  }