import { Background } from '@/shared/components/background.tsx'
import { Welcome } from '@/shared/components/welcome.tsx'
import { type Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Chads boilerplate',
	description: 'Simple authentication chad boilerplate dashboard',
}

export default function Page() {
	return (
		<main className="flex flex-col items-center justify-center min-h-screen w-full">
			<Background />
			<Welcome />
		</main>
	)
}
