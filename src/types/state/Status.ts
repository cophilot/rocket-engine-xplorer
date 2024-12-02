import State from './State';

export default class Status {
	public static readonly RETIRED: State = new State('Retired', {
		startColor: '#032d61',
		endColor: '#b51240'
	});

	public static readonly IN_USE: State = new State('In Use', {
		startColor: '#ffd800',
		endColor: '#cd0000'
	});
}
