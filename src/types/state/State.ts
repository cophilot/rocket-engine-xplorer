import type GradientColor from '../display/GradientColor';

export default class State {
	private value: string;
	private GradientColor: GradientColor;

	constructor(value: string, GradientColor: GradientColor) {
		this.value = value;
		this.GradientColor = GradientColor;
	}

	getGradient(): GradientColor {
		return this.GradientColor;
	}

	getValue(): string {
		return this.value;
	}
}
