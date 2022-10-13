 type ContactPerson = {
    relationship: string,
    name: string,
    telecom: string,
    address: string[],
    gender: string[],
    // organization: id[],
    period: {
      startDate: string,
      endDate: string,
    },
}