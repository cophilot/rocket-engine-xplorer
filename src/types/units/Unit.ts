export default class Unit<T> {
	public readonly isComparable = true;
	protected value: T;
	protected units: string;
	protected description: string;

	constructor(value: T, units: string) {
		this.value = value;
		this.units = units;
		this.description = '';
	}

	toString(): string {
		return `${this.value} ${this.units}`;
	}

	isBetterThan(other: Unit<T>): boolean {
		return this.value > other.value;
	}

	getValue(): T {
		return this.value;
	}

	getValueAsString(): string {
		return `${this.value}`;
	}

	getUnits(): string {
		return this.units;
	}
}
