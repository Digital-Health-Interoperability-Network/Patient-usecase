import Identifier from "domain/commonObjects/identifier"
import Annotation from "domain/commonObjects/annotation"
import IPeriod from 'domain/commonObjects/period'

enum status {
  "Registered",
  "Preliminary",
  "Final",
  "Amended",
  "Corrected",
  "Cancelled",
  "Entered in Error",
  "Unknown"
}

enum category {
  "Social History",
  "Vital Signs",
  "Imaging",
  "Laboratory", 
  "Procedure",
  "Survey",
  "Exam",
  "Therapy",
  "Activity",
}

enum code {
  "Acyclovir [Susceptibility]",
  "Amdinocillin [Susceptibility] by Serum bactericidal titer",
  "Cefoperazone [Susceptibility] by Minimum inhibitory concentration (MIC)",
  "No injury related to procedure equipment, medical supplies, or instrumentation",
  "SETBP1 gene mutations found [Identifier] in Blood or Tissue by Molecular genetics method Nominal",
  "Axis II: Spatial aspects score [Mainz Pain Staging System]",
  "Atovaquone [Susceptibility]",
  "Fluoroquinolone [Susceptibility]",
  "Eye Image magnification",
  "Right cornea Type of Analysis method by Specular microscopy",
  "Filaria IgG and IgM panel - Serum",
  "R' wave amplitude in lead AVR",
  "Campylobacter sp Ab panel - Serum",
  "DBG Ab [Presence] in Serum or Plasma",
  "SARS-CoV-2 (COVID-19) lineage [Type] in Specimen by Sequencing",
  "6(R+S)-oxo-propylpiperidine-2-carboxylate [Moles/volume] in Plasma",
  "R' wave duration in lead AVR",
}

enum interpretation {
  "GeneticObservationInterpretation",
  "Carrier",
  "ObservationInterpretationChange",
  "Better",
  "Significant change down",
  "Significant change up",
  "Worse",
  "ObservationInterpretationExceptions",
  "Off scale low",
  "Off scale high",
  "Insufficient evidence",
  "ObservationInterpretationNormality",
  "Abnormal",
  "Critical abnormal",
  "Critical high",
  "Critical low",
  "	High",
  "Significantly high",
  "Low",
  "Significantly low",
  "Normal",
  "ObservationInterpretationSusceptibility",
  "Intermediate",
  "No CLSI defined breakpoint",
  "Non-susceptible",
  "Resistant",
  "Synergy - resistant",
  "Susceptible",
  "Susceptible-dose dependent",
  "Synergy - susceptible",
  "outside threshold",
  "above high threshold",
  "below low threshold",
  "ObservationInterpretationDetection",
  "Indeterminate",
  "Equivocal",
  "Negative",
  "Not detected",
  "Positive",
  "Detected",
  "ObservationInterpretationExpectation",
  "Expected",
  "Unexpected",
  "ReactivityObservationInterpretation",
  "Non-reactive",
  "Reactive",
  "Weakly reactive"
}

enum bodySite {
  "Posterior carpal region",
  "Fetal part of placenta",
  "Entire condylar emissary vein",
  "Visceral layer of Bowman's capsule",
  "Parathyroid gland",
  "Subcutaneous tissue of medial surface of index finger",
  "Gluteus maximus muscle",
  "Central axillary lymph node",
  "Anastomosis, heterocladic",
  "Inferior surface of tongue",
  "Palpebral fissure",
  "Body of ischium",
  "Ovarian vein",
  "Odontoid process of axis",
  "Gastric serosa",
  "Ligamentum teres of liver"
}

enum method {
  "Technique",
  "Competitive protein binding assay",
  "Total measurement",
  "Bladder filling technique",
  "Provocation technique",
  "Acidometric method",
  "Enzyme method"
}

enum componentCode {
  "Specimen care is maintained",
  "No injury related to procedure equipment, medical supplies, or instrumentation",
  "Demonstrates knowledge of the expected psychosocial responses to the procedure",
  ""
}

export default interface Observation {
  identifier : Identifier[], // Business Identifier for observation
  // "partOf" : [{ Reference(MedicationStatement) }], // Part of referenced event
  status : status, // R!  registered | preliminary | final | amended +
  category : category, // Classification of  type of observation
  code : code, // R!  Type of observation (code / type)
  // "subject" : { Reference(Patient) }, // Who and/or what the observation is about
  // encounter : { Reference(Encounter) }, // Healthcare event during which this observation is made
  // effective[x]: Clinically relevant time/time-period for observation. One of these 4:
  effectivePeriod : IPeriod,
  // "performer" : [{ Reference(Practitioner)}], // Who is responsible for the observation
  // value[x]: Actual result. One of these 11:
  valueBoolean : boolean,
  interpretation : interpretation, // High, low, normal, etc.
  note : Annotation[], // Comments about the observation
  bodySite : bodySite, // Observed body part
}