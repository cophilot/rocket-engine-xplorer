import State from './State';

export default class Rocket extends State {
	public static readonly SATURN_V: State = new State('Saturn V');
	public static readonly SATURN_I: State = new State('Saturn I');
	public static readonly ATLAS_III: State = new State('Atlas III');
	public static readonly ATLAS_V: State = new State('Atlas V');
	public static readonly SLS: State = new State('SLS');
	public static readonly SPACE_SHUTTLE: State = new State('Space Shuttle');
	public static readonly DELTA_III: State = new State('Delta III');
	public static readonly DELTA_IV: State = new State('Delta IV');
	public static readonly DELTA_IV_HEAVY: State = new State('Delta IV Heavy');
	public static readonly VULCAN: State = new State('Vulcan');
	public static readonly TITAN_III: State = new State('Titan III');
	public static readonly TITAN_IV: State = new State('Titan IV');
	public static readonly ARIANE_1: State = new State('Ariane 1');
	public static readonly ARIANE_2: State = new State('Ariane 2');
	public static readonly ARIANE_3: State = new State('Ariane 3');
	public static readonly ARIANE_4: State = new State('Ariane 4');
	public static readonly ARIANE_5: State = new State('Ariane 5');
	public static readonly ARIANE_6: State = new State('Ariane 6');
	public static readonly FALCON_1: State = new State('Falcon 1');
	public static readonly FALCON_9: State = new State('Falcon 9');
	public static readonly FALCON_HEAVY: State = new State('Falcon Heavy');
	public static readonly STARSHIP: State = new State('Starship');
	public static readonly ELECTRON: State = new State('Electron');
	public static readonly NEW_GLENN: State = new State('New Glenn');
}
