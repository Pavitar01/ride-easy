import { Client, Account } from 'appwrite'

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT as string)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID as string)

const account = new Account(client)

export const checkUserSession = async () => {
  try {
    const user = await account.get() 
    console.log('User is authenticated:', user)
  } catch (error) {
    console.error('User is not logged in:', error)
  }
}

