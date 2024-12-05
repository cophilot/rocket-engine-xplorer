import type GradientColor from '../display/GradientColor';

export default class State {
	private value: string;
	private secondLine: string | undefined;
	private fontSize: string | undefined;
	private GradientColor: GradientColor;

	constructor(
		value: string,
		GradientColor: GradientColor,
		fontSize: string | undefined = undefined
	) {
		if (value.includes('\n')) {
			const lines = value.split('\n');
			this.value = lines[0];
			this.secondLine = lines[1];
		} else {
			this.value = value;
		}
		this.GradientColor = GradientColor;
		this.fontSize = fontSize;
	}

	getGradient(): GradientColor {
		return this.GradientColor;
	}

	getValue(): string {
		return this.value;
	}

	getFontSize(): string | undefined {
		return this.fontSize;
	}

	getSecondLine(): string | undefined {
		return this.secondLine;
	}
}
