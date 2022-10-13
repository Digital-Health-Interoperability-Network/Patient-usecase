interface Dosage {
sequence : number, // The order of the dosage instructions
text : string, // Free text dosage instructions e.g. SIG
additionalInstruction : [{ CodeableConcept }], // Supplemental instruction or warnings to the patient - e.g. "with meals", "may cause drowsiness"
patientInstruction : string, // Patient or consumer oriented instructions
// asNeeded[x]: Take "as needed" (for x). One of these 2:
site : { CodeableConcept }, // Body site to administer to
route : { CodeableConcept }, // How drug should enter body
method : { CodeableConcept }, // Technique for administering medication
doseAndRate : [{ // Amount of medication administered
  type : { CodeableConcept }, // The kind of dose or rate specified
  // dose[x]: Amount of medication per dose. One of these 2:
  doseRange :  Range,
  doseQuantity : { Quantity(SimpleQuantity) },
  // rate[x]: Amount of medication per unit of time. One of these 3:
  rateRatio : { Ratio }
  rateRange : { Range }
  rateQuantity : { Quantity(SimpleQuantity) }
}],
}