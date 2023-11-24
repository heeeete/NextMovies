import NavBar from "../../components/NavVar";

export default function Layout({ children }: any) {
	return (
		<>
			<NavBar />
			<div>{children}</div>
		</>
	);
}
