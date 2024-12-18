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
}
