import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifApp = () => {
	const [categorie, setCategorie] = useState(["Rick and Morty"]);
	return (
		<div className="container">
			<h2>GifApp</h2>
			<AddCategory setCategorie={setCategorie} />
			<hr />

			<ol className="wrapper">
				{categorie.map((category) => (
					<GifGrid key={category} category={category} />
				))}
			</ol>
		</div>
	);
};
