import React from 'react';
import PropTypes from 'prop-types';
import Table from './Table';
import MedalApi from '../Api/MedalApi';
import { SortCountries } from '../utils/SortCountries';
import { MedalType } from '../utils/Medaltype';

class MedalWidget extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			countries: []
		};
	}

	async componentDidMount() {
		try {
			let countries = await MedalApi.getCountries();
			this.sortCountries(this.props.sort, countries);
		} catch (e) {
			console.log(e);
			this.setState({
				error: 'Failed to get countries information.'
			});
		}
	}

	sortCountries = (type, countriesList) => {
		this.setState({
			countries: SortCountries(type, countriesList || this.state.countries)
		});
	};

	render() {
		return (
			<React.Fragment>
				<Table
					countries={this.state.countries}
					sortCountries={this.sortCountries}
					sort={this.state.countries.length === 0 ? '' : this.props.sort}
				/>
				{this.state.error ? <div className="text-red">{this.state.error}</div> : null}
			</React.Fragment>
		);
	}
}

MedalWidget.propTypes = {
	element_id: PropTypes.string,
	Sort: PropTypes.oneOf(Object.values(MedalType))
};

MedalWidget.defaultProps = {
	element_id: null,
	sort: MedalType.GOLD
};

export default MedalWidget;
