'use client'

import { useFindUserProfileQuery } from '@/auth/hooks/queries.ts'
import { Icon } from '@iconify/react'
import { Button } from '@repo/ui'
import { useRouter } from 'next/navigation'

export const Welcome = () => {
	const router = useRouter()
	const { data } = useFindUserProfileQuery()
	const navigateToSignIn = () => router.push('/auth/sign-in')

	return (
		<div className="container p-4 flex flex-col items-center justify-center gap-4 bg-white border border-border rounded-md max-w-md">
			<h1 className="text-pretty text-2xl font-semibold">Admin panel</h1>
			<p className="text-pretty font-regular">
				Hey there 👋, welcome to chad admin panel, let's start
			</p>

			{data ? (
				<div className="flex flex-col justify-center items-center gap-2">
					<h2 className="">Hello again, {data.firstName}!</h2>
					<Button variant="outline" onClick={() => router.push('/business')}>
						Continue to dashboard
					</Button>
				</div>
			) : (
				<Button
					onClick={navigateToSignIn}
					className="inline-flex gap-0 justify-center mx-2 group"
					variant="default"
				>
					<span>Sign in to continue</span>
					<Icon
						icon="lucide:chevron-right"
						className="w-5 h-5 group-hover:translate-x-1 transition-all ease-in"
					/>
				</Button>
			)}
		</div>
	)
}
