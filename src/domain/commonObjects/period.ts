type IPeriod = {
    startDate: Date,
    endDate: Date,
}

class Period implements IPeriod {
    public readonly startDate: Date;
    public readonly endDate: Date;

    private constructor(period:IPeriod) {
        this.startDate = period.startDate
        this.endDate = period.endDate
    }

    static add(period: IPeriod) {
        if(period.startDate > period.startDate) {
            throw new Error('low cannot be greater than high')
        }
        new Period(period)
    }
}


export default IPeriod