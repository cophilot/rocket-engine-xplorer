import type GradientColor from '../display/GradientColor';

export default class State {
	name: string;
	GradientColor: GradientColor;

	constructor(name: string, GradientColor: GradientColor) {
		this.name = name;
		this.GradientColor = GradientColor;
	}
}
