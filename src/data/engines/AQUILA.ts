import Engine from '../../types/Engine';
import type EngineStats from '../../types/EngineStats';
import { Propellant } from '../../types/state/Propellant';
import { Weight } from '../../types/units/Weight';
import { ISP } from '../../types/units/ISP';
import { Size } from '../../types/units/Size';
import Country from '../../types/state/Country';
import Status from '../../types/state/Status';
import EngineCycle from '../../types/state/EngineCycle';
import { Thrust } from '../../types/units/Thrust';
import Rocket from '../../types/state/Rocket';

/**
 * The Aquila rocket engine.
 * @author cophilot
 * @date 2026-9-14
 */
const AQUILA: EngineStats = {
	name: 'Aquila',
	url: 'https://en.wikipedia.org/wiki/Spectrum_(rocket)',
	imageUrl: 'https://isaraerospace.com/images/Hotfire-V4.2.00_00_19_23.Standbild001-small.jpg',
	schemanticUrl: '',
	country: Country.GERMANY,
	status: Status.IN_USE,
	firstFlight: '2025',
	rockets: [Rocket.SPECTRUM],
	propellant: Propellant.PROPA_LOX,
	cycle: EngineCycle.GAS_GENERATOR,
	specificImpulseSeaLevel: new ISP(0),
	specificImpulseVacuum: new ISP(0),
	thrustSeaLevel: new Thrust(675_000),
	thrustVacuum: new Thrust(95_000),
	height: new Size(0),
	diameter: new Size(0),
	massDry: new Weight(0)
};

export default new Engine(AQUILA);
