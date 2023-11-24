import { useEffect, useState } from "react";
import Seo from "../../components/Seo";
import Image from "next/image";
import { resolve } from "path";

const { Authorization } = require("../../config/tmdb.json");

const options = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization: Authorization,
	},
};
type Movie = {
	title: string;
	poster_path: string;
	id: number;
};

export default function Home() {
	const [movies, setMovie] = useState<Movie[]>();

	useEffect(() => {
		const getMovie = async () => {
			const result = await fetch(
				"https://api.themoviedb.org/3/trending/movie/day?language=ko-KR",
				options
			);
			const movieList = (await result.json()).results;
			setMovie(movieList);
			console.log(movieList);
		};
		getMovie();
	}, []);

	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			<Seo name="Home" />
			{!movies && <h4>Loading...</h4>}
			<div className="movieContainer">
				{movies?.map((movie) => {
					return (
						<div
							key={movie.id}
							style={{
								width: 250,
								display: "flex",
								flexDirection: "column",
								boxSizing: "border-box",
								// marginInline: 20,
								textAlign: "center",
							}}
						>
							<Image
								src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
								alt="이미지가 없음"
								width={250}
								height={350}
								style={{ alignSelf: "center" }}
							/>

							<text style={{}}>{movie.title}</text>
						</div>
					);
				})}
			</div>
			<style jsx>
				{`
					.movieContainer {
						display: flex;
						justify-content: center;
						width: 500px;
						flex-wrap: wrap;
						background-color: red;
					}
				`}
			</style>
		</div>
	);
}
