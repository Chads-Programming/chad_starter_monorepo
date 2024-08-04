import type React from 'react'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<main className="h-screen w-full flex flex-col">
			<div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
			{children}
		</main>
	)
}
