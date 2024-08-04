import { useAuth } from '@clerk/nextjs'
import axios from 'axios'


export default function useAuthFetch() {
	const { getToken } = useAuth()

	const authenticatedFetch = async (
		input: string
	) => {
		return axios.get(input, {
			headers: { Authorization: `Bearer ${await getToken()}` },
		}).then((res) => res.data)
	}
	return authenticatedFetch
}
