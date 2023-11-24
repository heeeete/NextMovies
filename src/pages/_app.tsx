import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "../../components/NavVar";
import Layout from "./layout";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
