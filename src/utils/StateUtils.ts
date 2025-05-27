import State from '../types/state/State';

export default class StateUtils {
	public static boolToState(
		b: boolean | undefined,
		trueString = 'Yes',
		falseString = 'No'
	): State | undefined {
		if (b === undefined) {
			return undefined;
		}
		return b
			? new State(trueString, {
					firstColor: '#43e97b',
					secondColor: '#38f9d7',
					thirdColor: '#15c39a'
				})
			: new State(
					falseString,

					{
						firstColor: '#ff2d2d',
						secondColor: '#ff0000',
						thirdColor: '#b20000'
					}
				);
	}
}
