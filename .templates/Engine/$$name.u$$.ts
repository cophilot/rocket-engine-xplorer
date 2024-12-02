import Engine from '../../types/Engine';
import { EngineCycleUtils } from '../../types/EngineCycle';
import type EngineStats from '../../types/EngineStats';
import { PropellantUtils } from '../../types/Propellant';
import { Weight } from '../../types/units/Weight';
import { ISP } from '../../types/units/ISP';
import { Size } from '../../types/units/Size';
import Country from '../../types/state/Country';

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
	propellant: PropellantUtils.HYDRO_LOX,
	cycle: EngineCycleUtils.GAS_GENERATOR,
	specificImpulseSeaLevel: new ISP(0),
	specificImpulseVacuum: new ISP(0),
	height: new Size(0),
	diameter: new Size(0),
	massDry: new Weight(0)
};

export default new Engine($$name.u$$);
