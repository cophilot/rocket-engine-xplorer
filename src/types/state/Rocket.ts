import State from './State';

class RocketState extends State {
	constructor(value: string) {
		const gradient = {
			firstColor: '#00eaff',
			secondColor: '#ff0090',
			thirdColor: '#ffde00'
		};
		super(value, gradient, undefined);
	}
}

export default class Rocket extends State {
	public static readonly SATURN_V: State = new RocketState('Saturn V');
	public static readonly SATURN_I: State = new RocketState('Saturn I');
	public static readonly SATURN_IB: State = new RocketState('Saturn IB');
	public static readonly ATLAS_III: State = new RocketState('Atlas III');
	public static readonly ATLAS_V: State = new RocketState('Atlas V');
	public static readonly SLS: State = new RocketState('SLS');
	public static readonly SPACE_SHUTTLE: State = new RocketState('Space Shuttle');
	public static readonly DELTA_II: State = new RocketState('Delta II');
	public static readonly DELTA_III: State = new RocketState('Delta III');
	public static readonly DELTA_IV: State = new RocketState('Delta IV');
	public static readonly DELTA_IV_HEAVY: State = new RocketState('Delta IV Heavy');
	public static readonly VULCAN: State = new RocketState('Vulcan');
	public static readonly TITAN_III: State = new RocketState('Titan III');
	public static readonly TITAN_IV: State = new RocketState('Titan IV');
	public static readonly ARIANE_1: State = new RocketState('Ariane 1');
	public static readonly ARIANE_2: State = new RocketState('Ariane 2');
	public static readonly ARIANE_3: State = new RocketState('Ariane 3');
	public static readonly ARIANE_4: State = new RocketState('Ariane 4');
	public static readonly ARIANE_5: State = new RocketState('Ariane 5');
	public static readonly ARIANE_6: State = new RocketState('Ariane 6');
	public static readonly FALCON_1: State = new RocketState('Falcon 1');
	public static readonly FALCON_9: State = new RocketState('Falcon 9');
	public static readonly FALCON_HEAVY: State = new RocketState('Falcon Heavy');
	public static readonly STARSHIP: State = new RocketState('Starship');
	public static readonly ELECTRON: State = new RocketState('Electron');
	public static readonly NEW_GLENN: State = new RocketState('New Glenn');
	public static readonly ORION: State = new RocketState('Orion');
	public static readonly H3: State = new RocketState('H3');
	public static readonly APOLLO_CSM: State = new RocketState('Apollo CSM');
}
