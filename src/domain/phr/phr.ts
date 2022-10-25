import Procedure from "./procedure";
import Observation from "./observation";
import Medication from "./medication";
import MedicationStatement from "./medicationStatement";
import FamilyMemberHistory from "./familyMemberHistory";
import AllergyIntolerance from "./allergyIntolerance";

export default interface PHR {
    patientId: string,
    procedure: Procedure,
    Observation: Observation,
    medication: Medication,
    medicationStatement: MedicationStatement,
    familyMemberHistory: FamilyMemberHistory,
    allergyIntolerance: AllergyIntolerance,
}