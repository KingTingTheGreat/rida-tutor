import { Header } from "@/components/header";
import Link from "next/link";
import { EmailLink } from "@/components/email";

export default function About() {
	return (
		<>
			<Header />
			<main className="flex flex-col flex-grow items-center p-6">
				<h2>
					If you'd like to learn more about me and my credentials,{" "}
					{
						<Link
							href="https://cs-people.bu.edu/ridan/cs392/projects/mini-projects/mp4/build/"
							target="_blank"
							className="text-aqua">
							here is a link
						</Link>
					}{" "}
					to my resume. Feel free to {<EmailLink message={"contact me"} clsNm="text-aqua" />} if you have any
					further questions.
				</h2>
			</main>
		</>
	);
}
