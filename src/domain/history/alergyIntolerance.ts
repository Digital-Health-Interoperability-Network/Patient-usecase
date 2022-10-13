
interface AllergyIntolerance {
    resourceType : "AllergyIntolerance",
    identifier : Identifier[], // External ids for this item
    clinicalStatus : { CodeableConcept }, // C? active | inactive | resolved
    verificationStatus : { CodeableConcept }, // C? unconfirmed | confirmed | refuted | entered-in-error
    "type" : "<code>", // allergy | intolerance - Underlying mechanism (if known)
    "category" : ["<code>"], // food | medication | environment | biologic
    "criticality" : "<code>", // low | high | unable-to-assess
    "code" : { CodeableConcept }, // Code that identifies the allergy or intolerance
    "patient" : { Reference(Patient) }, // R!  Who the sensitivity is for
    "encounter" : { Reference(Encounter) }, // Encounter when the allergy or intolerance was asserted
    // onset[x]: When allergy or intolerance was identified. One of these 5:
    "onsetRange" : { Range },
    "recordedDate" : "<dateTime>", // Date first version of the resource instance was recorded
    "recorder" : { Reference(Patient|Practitioner|PractitionerRole|
     RelatedPerson) }, // Who recorded the sensitivity
    "lastOccurrence" : "<dateTime>", // Date(/time) of last known occurrence of a reaction
    "note" : [{ Annotation }], // Additional text not captured in other fields
    "reaction" : [{ // Adverse Reaction Events linked to exposure to substance
      "substance" : { CodeableConcept }, // Specific substance or pharmaceutical product considered to be responsible for event
      "manifestation" : [{ CodeableConcept }], // R!  Clinical symptoms/signs associated with the Event
      "description" : "<string>", // Description of the event as a whole
      "onset" : "<dateTime>", // Date(/time) when manifestations showed
      "severity" : "<code>", // mild | moderate | severe (of event as a whole)
      "exposureRoute" : { CodeableConcept }, // How the subject was exposed to the substance
      "note" : [{ Annotation }] // Text about event not captured in other fields
    }]
  }


  {
          identifier: "Id",
          clinicalStatus: string, // code
          verificationStatus: string, //code
          _type: string, //
          category: string[], //code
          criticality: string[], //code,
          patient: patientId, //id
          encounter: encounterId, //id
          onsetRange: Range, //age
          recordedDate: Date,
          recorder: patient | practitioner //id,
          lastOccurence: Date,
          note: Annotation, //
          reaction: {
              substance: {
                  type: String
              },
              manifestation: {
                  type: Array
              },
              description: {
                  type: String
              },
              onset: {
                  type: Date
              },
              severity: {
                  type: String
              },
              exposureRouter: {
                  type: String
              },
              note: {
                  author: {
                      authorReference: {
                          type: String
                      },
                      authorString: {
                          type: String
                      }
                  },
                  time: {
                      type: Date
                  },
                  text: {
                      type: String
                  }
              }
          }
  }