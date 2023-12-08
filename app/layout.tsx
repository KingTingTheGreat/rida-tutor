import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "RidaTutor",
	description: "Sign up for top tier tutoring from Rida, a tutor with 400+ hours of professional experience.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="flex flex-col min-h-screen">{children}</div>
			</body>
		</html>
	);
}
