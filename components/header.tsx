import Link from "next/link";
import { Logo } from "./logo";
import { EmailLink } from "./email";

const NavLink = ({ path, name }: { path: string; name: string }) => {
	return (
		<Link href={path} className="m-2">
			{name}
		</Link>
	);
};

export const Header = () => {
	return (
		<header className="flex justify-between items-center p-4 bg-sunshine text-aqua font-medium">
			<Logo />
			<nav className="flex">
				<NavLink path="/about" name="About" />
				<NavLink path="/schedule" name="Schedule" />
				<NavLink path="/contact" name="Contact" />
			</nav>
		</header>
	);
};
