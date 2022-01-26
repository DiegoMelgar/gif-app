import React, { useState } from "react";
import propTypes from 'prop-types'

export const AddCategory = ({ setCategorie }) => {
	const [inputValue, setInputValue] = useState(" ");

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputValue.trim().length > 2) {
			setCategorie((category) => [inputValue, ...category]);
			setInputValue(" ");
		}
	};

	return (
		<form onSubmit={handleSubmit} value="Hola">
			<input type="text" value={inputValue} onChange={handleInputChange} />
		</form>
	);
};

AddCategory.propTypes = {
	setCategorie: propTypes.func.isRequired
}
