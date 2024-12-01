export default class WindowUtils {
	static innerWidth: number = 0;

	public static init(innerWidth: number): void {
		this.innerWidth = innerWidth;
	}

	public static isMobile(): boolean {
		return this.innerWidth < 768;
	}
}
