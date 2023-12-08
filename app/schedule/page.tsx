import { EmailLink } from "@/components/email";
import { Header } from "@/components/header";

const availableTimes = [
	{
		date: "Dec 9, 2023",
		times: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM"],
	},
	{
		date: "Dec 12, 2023",
		times: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM"],
	},
	{
		date: "Dec 13, 2023",
		times: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM"],
	},
	{
		date: "Dec 14, 2023",
		times: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM"],
	},
];

export default function Schedule() {
	return (
		<>
			<Header />
			<main className="flex flex-col flex-grow items-center p-6">
				<h2>
					Find a time that works for you, then {<EmailLink message={"contact me"} clsNm="text-aqua" />} to
					schedule an appointment.
				</h2>
				<p>
					Can't find a time that works? {<EmailLink message="email me" clsNm="text-aqua" />} and we can figure
					out a time that works.
				</p>
				<table className="m-2 p-1">
					<thead>
						<tr className="p-2 m-1">
							<th>Date</th>
							<th>Time</th>
						</tr>
					</thead>
					<tbody>
						{availableTimes.map((availableTime) =>
							availableTime.times.map((time) => (
								<tr className="m-4">
									<td className="px-2">{availableTime.date}</td>
									<td className="px-2">{time}</td>
								</tr>
							))
						)}
					</tbody>
				</table>
			</main>
		</>
	);
}
