import State from './State';

export default class Country extends State {
	public static readonly USA: State = new State('USA', {
		firstColor: '#032d61',
		secondColor: '#fff',
		thirdColor: '#b51240',
		fontColor: '#000'
	});

	public static readonly SOVIET_UNION: State = new State('Soviet Union', {
		firstColor: '#cd0000',
		secondColor: '#cd0000',
		thirdColor: '#ffd800'
	});

	public static readonly RUSSIA: State = new State('Russia', {
		firstColor: '#ffffff',
		secondColor: '#0036a8',
		thirdColor: '#d62718'
	});

	public static readonly EUROPE: State = new State('Europe', {
		firstColor: '#00309a',
		secondColor: '#00309a',
		thirdColor: '#ffcd00'
	});

	public static readonly CHINA: State = new State('China', {
		firstColor: '#ff0000',
		secondColor: '#ff0000',
		thirdColor: '#ffcc00'
	});

	public static readonly INDIA: State = new State('India', {
		firstColor: '#f93',
		secondColor: '#f93',
		thirdColor: '#fff'
	});

	public static readonly JAPAN: State = new State('Japan', {
		firstColor: '#fff',
		secondColor: '#bc002d',
		thirdColor: '#fff'
	});

	public static readonly NEW_ZEALAND: State = new State('New Zealand', {
		firstColor: '#c9082a',
		secondColor: '#001b69',
		thirdColor: '#001b69'
	});
}
