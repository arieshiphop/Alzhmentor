export default {
    API_PATH: 'http://localhost:5000/api',
    AUTH_PATH: 'http://localhost:5000/auth',
    createFetchSettings(sendMethod,headerContent,bodyContent) {
        const settings = {
            method: sendMethod,
                headers: {
                    "Content-Type": "application/json",
                    headerContent
                },
                body: bodyContent,
        }
        return settings
    }
}