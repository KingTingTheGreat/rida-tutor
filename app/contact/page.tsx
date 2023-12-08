import { Header } from "@/components/header";
import Link from "next/link";
import { EmailLink } from "@/components/email";

export default function About() {
	return (
		<>
			<Header />
			<main className="flex flex-col flex-grow items-center p-6">
				<h2>
					If you'd like to schedule an appointment or ask any questions, you can reach me at{" "}
					<EmailLink message="ridatutor@gmail.com" clsNm="text-aqua" />.
				</h2>
			</main>
		</>
	);
}
