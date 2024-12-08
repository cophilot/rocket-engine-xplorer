import State from './State';

export class Propellant extends State {
	public static readonly META_LOX: Propellant = new State('MetaLOX');
	public static readonly HYDRO_LOX: Propellant = new State('HydroLOX');
	public static readonly KERO_LOX: Propellant = new State('KeroLOX');
}
