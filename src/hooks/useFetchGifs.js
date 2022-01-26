import { useState, useEffect } from 'react'
import { getGifs } from "../helpes/getGifs";

export const useFetchGifs = (category) => {
	const [state, setState] = useState({
		data: [],
		loading: true,
	})

	useEffect(() => {
		getGifs(category).then((gif) => setState({ data: gif, loading: false }));
	}, [category]);


	return state; // {data: [], loading: true,}
}

