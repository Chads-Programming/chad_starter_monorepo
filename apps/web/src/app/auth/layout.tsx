import { Background } from '@/shared/components/background'
import type React from 'react'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<main className="h-screen w-full flex flex-col">
			<Background />
			{children}
		</main>
	)
}
