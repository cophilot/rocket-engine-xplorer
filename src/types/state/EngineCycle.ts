import type GradientColor from '../display/GradientColor';
import State from './State';

const gradient: GradientColor = {
	firstColor: '#49ff6b',
	secondColor: '#49ff6b',
	thirdColor: '#ffde00',
	fontColor: '#000000'
};

export default class EngineCycle extends State {
	public static readonly GAS_GENERATOR: State = new State('Gas Generator', gradient);

	public static readonly STAGED_COMBUSTION: State = new State('Staged Combustion', gradient);

	public static readonly EXPANDER: State = new State('Expander', gradient);
}
