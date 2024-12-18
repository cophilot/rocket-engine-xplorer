import Engine from '../../types/Engine';
import type EngineStats from '../../types/EngineStats';
import { Propellant } from '../../types/state/Propellant';
import { Weight } from '../../types/units/Weight';
import { ISP } from '../../types/units/ISP';
import { Size } from '../../types/units/Size';
import Country from '../../types/state/Country';
import Status from '../../types/state/Status';
import EngineCycle from '../../types/state/EngineCycle';

/**
 * The $$name$$ rocket engine.
 * @author $$git-name$$
 * @date $$year$$-$$month$$-$$day$$
 */
const $$name.u$$: EngineStats = {
	name: '$$name$$',
	url: '',
	imageUrl: '',
	schemanticUrl: '',
	country: Country.USA,
	status: Status.IN_USE,
	firstFlight: '',
	rockets: [],
	propellant: Propellant.HYDRO_LOX,
	cycle: EngineCycle.GAS_GENERATOR,
	specificImpulseSeaLevel: new ISP(0),
	specificImpulseVacuum: new ISP(0),
	height: new Size(0),
	diameter: new Size(0),
	massDry: new Weight(0)
};

export default new Engine($$name.u$$);
