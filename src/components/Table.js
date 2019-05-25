import React, { Component } from 'react';
import '../styles/styles.css';
import Button from './Button';
import { MedalType } from '../utils/Medaltype';

class Table extends Component {
	constructor(props) {
		super(props);

		this.state = {
			activeType: props.sort
		};
	}

	isActive = (activeType) => {
		return this.state.activeType === activeType;
	};

	setActive = (activeType) => {
		this.setState({ activeType });
	};

	setButtoninActive = (activeType) => {
		this.setActive(activeType);
	};

	renderMedalTable = (props) => {
		return (
			<table className="table">
				<thead>
					<tr>
						<th />
						<th />
						<th className="w-25" />
						<th>
							<Button
								type={MedalType.GOLD}
								active={this.isActive(MedalType.GOLD)}
								sortCountries={props.sortCountries}
								buttonClass="circle bg-gold"
								setButtoninActive={this.setButtoninActive}
							/>
						</th>
						<th>
							<Button
								type={MedalType.SILVER}
								active={this.isActive(MedalType.SILVER)}
								sortCountries={props.sortCountries}
								buttonClass="circle bg-grey"
								setButtoninActive={this.setButtoninActive}
							/>
						</th>
						<th>
							<Button
								type={MedalType.BRONZE}
								active={this.isActive(MedalType.BRONZE)}
								sortCountries={props.sortCountries}
								buttonClass="circle bg-brown"
								setButtoninActive={this.setButtoninActive}
							/>
						</th>
						<th>
							<Button
								type={MedalType.TOTAL}
								active={this.isActive(MedalType.TOTAL)}
								sortCountries={props.sortCountries}
								buttonClass=""
								setButtoninActive={this.setButtoninActive}
							/>
						</th>
					</tr>
				</thead>
				<tbody>
					{props.countries.slice(0, 10).map((country, index) => (
						<tr key={country.code} id={country.code}>
							<td>{index + 1}</td>
							<td>
								<div className="flag" />
							</td>
							<td className="left-align">{country.code}</td>
							<td>{country.gold}</td>
							<td>{country.silver}</td>
							<td>{country.bronze}</td>
							<td>{country.total}</td>
						</tr>
					))}
				</tbody>
			</table>
		);
	};

	render() {
		return (
			<React.Fragment>
				<h1>MEDAL COUNT</h1>
				{this.renderMedalTable(this.props)}
			</React.Fragment>
		);
	}
}

export default Table;
