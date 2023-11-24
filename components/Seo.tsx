import Head from "next/head";

type SeoProps = {
	name: string;
};

export default function Seo({ name }: SeoProps) {
	return (
		<Head>
			<title>{name} | Next Movie</title>
		</Head>
	);
}
