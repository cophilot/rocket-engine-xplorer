import Engine from '../../types/Engine';
import { EngineCycleUtils } from '../../types/EngineCycle';
import type EngineStats from '../../types/EngineStats';
import { PropellantUtils } from '../../types/Propellant';
import { Weight } from '../../types/units/Weight';
import { ISP } from '../../types/units/ISP';
import { Size } from '../../types/units/Size';

/**
 * @author cophilot
 */
const F1: EngineStats = {
	name: 'F-1',
	url: 'https://en.wikipedia.org/wiki/Rocketdyne_F-1',
	imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/16/S-IC_engines_and_Von_Braun.jpg',
	schemanticUrl:
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpGWtZ0VQRF-kGHelKxkPTCslk51UObDWOqQ&s',
	propellant: PropellantUtils.KERO_LOX,
	cycle: EngineCycleUtils.GAS_GENERATOR,
	specificImpulseSeaLevel: new ISP(263),
	specificImpulseVacuum: new ISP(304),
	height: new Size(5.6),
	diameter: new Size(3.7),
	massDry: new Weight(8400)
};

export default new Engine(F1);
