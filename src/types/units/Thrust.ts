import Unit from './Unit';

export class Thrust extends Unit<number> {
	private parsedValue: [string, string];

	constructor(value: number) {
		super(value, 'N');
		this.parsedValue = convertNumberToString(value);
	}

	isBetterThan(other: Thrust): boolean {
		return this.value > other.value;
	}

	toString(): string {
		return `${this.parsedValue[0]} ${this.parsedValue[1]}${this.units}`;
	}

	getValueAsString(): string {
		return this.parsedValue[0];
	}

	getUnits(): string {
		return this.parsedValue[1] + this.units;
	}
}

function convertNumberToString(value: number): [string, string] {
	if (value >= 1e9) {
		return [(value / 1e9).toFixed(1), 'G'];
	}
	if (value >= 1e6) {
		return [(value / 1e6).toFixed(1), 'M'];
	}
	if (value >= 1e3) {
		return [(value / 1e3).toFixed(1), 'k'];
	}
	return [value.toFixed(1), ''];
}
