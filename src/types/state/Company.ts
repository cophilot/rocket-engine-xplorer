import State from './State';

export default class Company extends State {
	public static readonly SPACE_X: State = new State('SpaceX', {
		firstColor: '#000000',
		secondColor: '#000000',
		thirdColor: '#a5a5a5'
	});

	public static readonly BLUE_ORIGIN: State = new State('Blue Origin', {
		firstColor: '#232f3e',
		secondColor: '#232f3e',
		thirdColor: '#00a1e4'
	});

	public static readonly ROCKET_LAB: State = new State('Rocket Lab', {
		firstColor: '#000000',
		secondColor: '#000000',
		thirdColor: '#ff0000'
	});

	public static readonly FIRE_FLY: State = new State('Firefly Aerospace', {
		firstColor: '#000000',
		secondColor: '#d0df00',
		thirdColor: '#d0df00'
	});
}
