interface IRange  {
    readonly low: number,
    readonly high: number,
} 

class Range implements IRange {
    public readonly low: number;
    public readonly high: number;

    private constructor(range:IRange) {
        this.low = range.low
        this.high = range.high
    }

    static add(range: IRange) {
        if(range.low > range.high) {
            throw new Error('low cannot be greater than high')
        }
        new Range(range)
    }
}