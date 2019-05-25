import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import { MedalType } from '../utils/Medaltype';

class Button extends Component {
	handleButtonClick = (sortType) => {
		this.props.setButtoninActive(sortType);
		this.props.sortCountries(sortType);
	};

	render() {
		return (
			<div className={this.props.active ? 'br-top-grey pad-top' : 'pad-top br-top-white'}>
				<button className={this.props.buttonClass} onClick={() => this.handleButtonClick(this.props.type)}>
					{this.props.type === 'total' ? 'TOTAL' : ''}
				</button>
			</div>
		);
	}
}

Button.defaultProps = {
	sortCountries: null,
	type: MedalType.GOLD,
	buttonClass: null,
	active: false
};

Button.propTypes = {
	sortCountries: PropTypes.func,
	type: PropTypes.oneOf(Object.values(MedalType)),
	buttonClass: PropTypes.string,
	active: PropTypes.bool
};

export default Button;
