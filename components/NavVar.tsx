import Link from "next/link";
import { useRouter } from "next/router";
export default function NavBar() {
	const router = useRouter();

	return (
		<nav>
			<Link href={"/"}>
				<text className={router.pathname === "/" ? "active" : ""}>Home</text>
			</Link>
			<Link href={"/about"}>
				<text className={router.pathname === "/about" ? "active" : ""}>
					About
				</text>
			</Link>
			<style jsx>{`
				.active {
					color: red;
				}
				nav {
					display: flex;
					justify-content: space-around;
					width: 50%;
					margin: 0 auto;
				}
				text {
					font-size: xx-large;
				}
			`}</style>
		</nav>
	);
}
