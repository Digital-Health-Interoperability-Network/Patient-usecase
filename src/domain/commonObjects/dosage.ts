import Range from "./range"

enum additionalInstruction {
  "Half to one hour before food",
  "With or after food",
  "Take on an empty stomach",
  "This medicine may color the urine",
  "Warning. Avoid alcoholic drink",
  "Dissolved under the tongue",
  "Do not stop taking this medicine except on your doctor's advice"
}

enum doseAndRateType {
  calculated,
  ordered,
}

interface doseAndRate {
  type: doseAndRateType,
  doseRange: Range
}

export default interface Dosage {
sequence : number, // The order of the dosage instructions
text : string, // Free text dosage instructions e.g. SIG
additionalInstruction : additionalInstruction,
patientInstruction : string, // Patient or consumer oriented instructions
site : { CodeableConcept }, // Body site to administer to
method : { CodeableConcept }, // Technique for administering medication
doseAndRate : [{ // Amount of medication administered
  type : { CodeableConcept, // The kind of dose or rate specified
  doseRange :  Range,
  rateRange : Range
}],
}