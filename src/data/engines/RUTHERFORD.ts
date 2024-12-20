import Engine from '../../types/Engine';
import type EngineStats from '../../types/EngineStats';
import { Propellant } from '../../types/state/Propellant';
import { Weight } from '../../types/units/Weight';
import { ISP } from '../../types/units/ISP';
import { Size } from '../../types/units/Size';
import Country from '../../types/state/Country';
import Status from '../../types/state/Status';
import EngineCycle from '../../types/state/EngineCycle';
import Company from '../../types/state/Company';
import Rocket from '../../types/state/Rocket';
import { Cost } from '../../types/units/Cost';

/**
 * The Rutherford rocket engine.
 * @author cophilot
 * @date 2024-12-20
 */
const RUTHERFORD: EngineStats = {
	name: 'Rutherford',
	url: 'https://en.wikipedia.org/wiki/Rutherford_(rocket_engine)',
	imageUrl: 'https://ids.si.edu/ids/deliveryService?id=NASM-NASM2023-01180&max=900',
	schemanticUrl: '',
	country: Country.NEW_ZEALAND,
	status: Status.IN_USE,
	company: Company.ROCKET_LAB,
	firstFlight: '2017',
	rockets: [Rocket.ELECTRON],
	propellant: Propellant.KERO_LOX,
	cycle: EngineCycle.ELECTRIC_PUMP,
	specificImpulseSeaLevel: new ISP(311),
	specificImpulseVacuum: new ISP(343),
	height: new Size(1.38),
	diameter: new Size(0.6),
	massDry: new Weight(30),
	cost: new Cost(0.375)
};

export default new Engine(RUTHERFORD);
