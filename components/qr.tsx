import QRCode from "react-qr-code";

export const QrCode = () => {
	const url = "hi";
	return (
		<div className="bg-[#ffffff] p-2 flex justify-center">
			<QRCode value={url} />
		</div>
	);
};
