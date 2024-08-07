import { SignUp } from '@clerk/nextjs'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Chads | Sign up',
	description: 'Simple authentication chad boilerplate dashboard',
}

export default function Page() {
	return (
		<div className="flex justify-center py-24">
			<SignUp />
		</div>
	)
}
