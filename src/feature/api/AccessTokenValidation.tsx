export function AccessTokenValidation(): boolean {
    try {
        const accessToken: string|null = localStorage.getItem('access_token')
        const expiredAt: string|null = localStorage.getItem('expired_at')

        if (accessToken === null) {
            throw new Error('アクセストークンが空です')
        }
        return false
    } catch (error) {
        console.error(error)
        return false
    }
}

async function checkAccessToken(accessToken: string) {

}
