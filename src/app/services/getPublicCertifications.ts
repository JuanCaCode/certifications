import { BASE_URL } from '../constant/baseUrl'

export const getPublicCertifications = async (username: string) => {
  try {
    const response = await fetch(`${BASE_URL}/api/get-certifications?username=${username}`, {
      next: {
        revalidate: 1000
      }
    })
    const { user } = await response.json()
    return user
  } catch (error) {
    console.error('Error fetching certifications:', error)
    return []
  }
}
