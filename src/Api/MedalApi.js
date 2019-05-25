export default class MedalApi {
	static async getCountries() {
		try {
			const url = `https://s3-us-west-2.amazonaws.com/reuters.medals-widget/medals.json`;
			const response = await fetch(url);
			const data = await response.json();
			let countries = data.map((i) => (i = { ...i, total: i.gold + i.silver + i.bronze }));
			return countries;
		} catch (e) {
			throw e;
		}
	}
}
