export interface Propellant {
	comp1: string;
	comp2?: string;
	nickname?: string;
}

export class PropellantUtils {
	public static readonly META_LOX: Propellant = {
		comp1: 'CH4',
		comp2: 'LOX',
		nickname: 'Meta-LOX'
	};

	public static readonly HYDRO_LOX: Propellant = {
		comp1: 'H2',
		comp2: 'LOX',
		nickname: 'Hydro-LOX'
	};

	public static readonly KERO_LOX: Propellant = {
		comp1: 'RP1',
		comp2: 'LOX',
		nickname: 'Kero-LOX'
	};
}
