import Unit from './Unit';

export class Cost extends Unit<number> {
	constructor(value: number) {
		super(value, 'M$');
	}

	isBetterThan(other: Cost): boolean {
		return this.value < other.value;
	}

	getValueAsString(): string {
		// return value comma like 1,000.00
		return `${this.value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	}
}
