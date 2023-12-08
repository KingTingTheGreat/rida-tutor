import { Header } from "@/components/header";
import Link from "next/link";

export default function NotFound() {
	return (
		<>
			<Header />
			<main className="w-full min-h-screen flex flex-col justify-center items-center">
				<h1 className="text-3xl">404 - Page Not Found</h1>
				<Link href="/">← Back to home</Link>
			</main>
		</>
	);
}
