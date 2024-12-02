import State from './State';

export default class Status extends State {
	public static readonly RETIRED: State = new State('Retired', {
		firstColor: '#620d0e',
		secondColor: '#ff2225',
		thirdColor: '#ff5557'
	});

	public static readonly IN_USE: State = new State('In Use', {
		firstColor: '#66ffa3',
		secondColor: '#00ff65',
		thirdColor: '#006226',
		fontColor: '#000000'
	});
}
