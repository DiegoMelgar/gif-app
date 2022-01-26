import { GifGridItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

	const { data: gifs, loading } = useFetchGifs(category)

	return (
		<>
			<h2 className="title">{category}</h2>
			{loading && <p className="title animate__animated animate__flash ">Loading</p>}
			<div className="card-grid" >
				{
					gifs.map((gif) => {
						return <GifGridItem key={gif.id} {...gif} />;
					})}
			</div>
		</>
	);
};
