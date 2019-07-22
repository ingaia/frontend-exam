import React from 'react';
import PropTypes from 'prop-types';
import { TextFieldStyled, Input, Label } from './styled';

const TextField = ({id, onChange, value, type, label, className}) => {
	return(
		<TextFieldStyled className={className}>
			<Input id={id} onChange={onChange} value={value} type={type} required/>
			<Label htmlFor={id}>{label}</Label>
		</TextFieldStyled>
	)
};

export default TextField

TextField.propTypes = {
	onChange: PropTypes.func.isRequired,
  	type: PropTypes.string.isRequired,
  	value: PropTypes.string.isRequired,
		label: PropTypes.string
};