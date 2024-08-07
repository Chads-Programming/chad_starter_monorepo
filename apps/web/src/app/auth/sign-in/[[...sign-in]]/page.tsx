import { SignIn } from '@clerk/nextjs'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Chads | Sign in',
	description: 'Simple authentication chad boilerplate dashboard',
}

export default function Page() {
	return (
		<div className="flex justify-center py-24">
			<SignIn />
		</div>
	)
}
