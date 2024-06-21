import Image from "next/image";
export default function Home() {
  return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="max-w-sm rounded overflow-hidden shadow-lg">
				<Image
					src="https://picsum.photos/400"
					alt=""
					width={400}
					height={400}
					className="w-full"
				/>
			</div>
		</main>
	);
}
