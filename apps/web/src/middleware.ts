import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher(['/auth/sign-up(.*)', '/auth/sign-in(.*)', '/'])

export default clerkMiddleware(async (auth, request) => {
	if (isPublicRoute(request)) {
		return
	}

	const token = await auth().getToken()

	if (!token) {
		auth().redirectToSignIn()

		return
	}

	return
})

export const config = {
	matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
