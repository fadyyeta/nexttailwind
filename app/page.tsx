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
				<div className="px-6 py-4">
					<div className="font-bold text-purple-500 text-xl mb-2">
						Photo by John Doe
					</div>
					<ul>
						<li>
							<strong>Views: </strong>
							4000
						</li>
						<li>
							<strong>Downloads: </strong>
							3000
						</li>
						<li>
							<strong>Likes: </strong>
							400
						</li>
					</ul>
				</div>
				<div className="px-6 py-4">
					<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
						#tag1
					</span>
					<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
						#tag2
					</span>
					<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
						#tag3
					</span>
				</div>
			</div>
		</main>
	);
}
