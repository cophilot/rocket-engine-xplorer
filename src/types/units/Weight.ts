import Unit from './Unit';

export class Weight extends Unit<number> {
	constructor(value: number) {
		super(value, 'kg');
	}

	isBetterThan(other: Weight): boolean {
		return this.value < other.value;
	}
}
