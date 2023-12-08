import Link from "next/link";

export const EmailLink = ({ message, clsNm }: { message: string; clsNm?: string }) => {
	// Replace 'recipient@example.com' with the desired email address
	const email = "ridatutor@gmail.com";

	return (
		// Wrap the link with the Link component from next/link
		<Link href={`mailto:${email}`} target="_blank" className={clsNm}>
			{message}
		</Link>
	);
};
