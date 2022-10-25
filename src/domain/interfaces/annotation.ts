export default interface Annotation{
  // "authorReference" : { Reference(Organization|Patient|Practitioner|RelatedPerson) },
  time : Date, // When the annotation was made
  text : string // R!  The annotation  - text content (as markdown)
}