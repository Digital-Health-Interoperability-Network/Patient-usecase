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

enum site {
  "Kupffer cell",
  "Right lower lobe of lung",
  "Lateral myocardium",
  "Superior labial artery",
  "Wall of urinary bladder",
  "Embryonic structure",
  "Head of phalanx of great toe",
  "Bronchus"
}

enum method {
  "Suck",
  "Chew", 
  "Take",
  "Apply",
  "Inhale"
}


interface doseAndRate {
  type: doseAndRateType, //The kind of dose or rate specified
  doseRange: Range
}

export default interface Dosage {
sequence : number, // The order of the dosage instructions
text : string, // Free text dosage instructions e.g. SIG
additionalInstruction : additionalInstruction,
patientInstruction : string, // Patient or consumer oriented instructions
site : site, // Body site to administer to
method : method, // Technique for administering medication
doseAndRate : doseAndRate[] // Amount of medication administered
}