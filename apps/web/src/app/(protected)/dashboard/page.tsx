'use client'

import { useFindUserProfileQuery } from '@/auth/hooks/queries.ts'

export default function Page() {
	const { data } = useFindUserProfileQuery()

	return (
		<div className="w-full flex flex-col justify-center items-center">
			<span>Welcome back, {data?.firstName}</span>
		</div>
	)
}
