import { Header } from "@/components/header";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<Header />
			<main className="flex flex-col flex-grow items-center justify-between p-6">
				<h2>Hi! I'm Rida. Need help preparing for finals? Hire me to tutor you!</h2>
				<h4>
					I have over 400 hours of professional tutoring experience and can help you with Chemistry, Biology,
					Calculus, Linear Algebra, Physics, Computer Science, or Statistics.
				</h4>
				<p>
					Accepted Payment:{" "}
					{
						<Link href="https://en.wikipedia.org/wiki/Cash" target="_blank">
							Cash
						</Link>
					}
					{", "}
					{
						<Link href="https://www.zellepay.com/" target="_blank">
							Zelle
						</Link>
					}
					{", "}
					{
						<Link href="https://venmo.com/pay/businesses/" target="_blank">
							Venmo
						</Link>
					}
				</p>
			</main>
		</>
	);
}
