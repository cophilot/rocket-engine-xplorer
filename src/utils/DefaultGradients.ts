import type GradientColor from '../types/display/GradientColor';

export default class DefaultGradients {
	public static readonly TRANSPARENT: GradientColor = { firstColor: 'transparent' };
	public static readonly PRIMARY: GradientColor = { firstColor: '#00eaff', secondColor: '#ff0090' };
}
