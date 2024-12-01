import Unit from './Unit';

export class Size extends Unit<number> {
	constructor(value: number) {
		super(value, 'm');
	}

	isBetterThan(other: Size): boolean {
		return this.value > other.value;
	}
}
