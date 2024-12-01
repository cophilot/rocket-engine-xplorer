import Unit from './Unit';

export class ISP extends Unit<number> {
	constructor(value: number) {
		super(value, 's');
	}

	isBetterThan(other: ISP): boolean {
		return this.value > other.value;
	}
}
