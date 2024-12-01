export default class StringUtils {
	public static normalizeString(str: string): string {
		return str.toLowerCase().replace(/ /g, '').replace(/-/g, '').replace(/_/g, '');
	}
}
