import State from './State';

export default class Country {
	public static readonly USA: State = new State('USA', {
		startColor: '#032d61',
		endColor: '#b51240'
	});

	public static readonly SOVIET_UNION: State = new State('Soviet Union', {
		startColor: '#ffd800',
		endColor: '#cd0000'
	});
}
