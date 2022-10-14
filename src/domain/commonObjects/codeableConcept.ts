type Coding = {
    system: string,
    version: string,
    code: string, //should be enum of values
    display: string,
    userSelected: boolean
}

type CodeableConcept = {
    coding: Coding[],
    text: string
}