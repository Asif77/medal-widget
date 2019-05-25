import { MedalType } from './Medaltype';

export function SortCountries(sortType, countries) {
	let sortedCountries = countries;
	switch (sortType) {
		case MedalType.TOTAL:
			sortedCountries.sort((a, b) => compare(a, b, MedalType.TOTAL, MedalType.GOLD));
			break;
		case MedalType.SILVER:
			sortedCountries.sort((a, b) => compare(a, b, MedalType.SILVER, MedalType.GOLD));
			break;
		case MedalType.BRONZE:
			sortedCountries.sort((a, b) => compare(a, b, MedalType.BRONZE, MedalType.GOLD));
			break;
		case MedalType.GOLD:
			sortedCountries.sort((a, b) => compare(a, b, MedalType.GOLD, MedalType.SILVER));
			break;
		default:
	}
	return sortedCountries;
}

function compare(a, b, first, second) {
	if (a[`${first}`] === b[`${first}`]) {
		return a[`${second}`] > b[`${second}`] ? -1 : 1;
	}
	return b[`${first}`] - a[`${first}`];
}
