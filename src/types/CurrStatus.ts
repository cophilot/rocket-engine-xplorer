export interface CurrStatus {
	name: string;
	color: string;
}

export class StatusUtils {
	public static readonly IN_USE: CurrStatus = { name: 'In use', color: 'green' };
}
