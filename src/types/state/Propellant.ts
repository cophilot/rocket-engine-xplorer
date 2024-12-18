import State from './State';

export class Propellant extends State {
	public static readonly HYDRO_LOX: Propellant = new State('HydroLOX', {
		firstColor: '#88CCFF',
		secondColor: '#E6F7FF',
		thirdColor: '#FFFFFF',
		fontColor: '#000000'
	});
	public static readonly META_LOX: Propellant = new State('MethaLOX', {
		firstColor: '#0080FF',
		secondColor: '#E6FFE6',
		thirdColor: '#FFDD99',
		fontColor: '#000000'
	});
	public static readonly KERO_LOX: Propellant = new State('KeroLOX', {
		firstColor: '#FF6600',
		secondColor: '#990000',
		thirdColor: '#333333'
	});
}
