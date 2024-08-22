import { createClient } from 'smtpexpress'

const API_URL = import.meta.env.VITE_SMTP_PROJECT_ID
const API_URL2 = import.meta.env.VITE_SMTP_PROJECT_SECRET

export const smtpexpressClient = createClient({
    projectId: API_URL,
    projectSecret: API_URL2
})
