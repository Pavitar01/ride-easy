import { Client, Account } from 'appwrite'
import { NextResponse } from 'next/server'

const endpoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT
const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID;
const appUrl= process.env.NEXT_PUBLIC_APP_URL

if (!endpoint || !projectId || !appUrl) {
  throw new Error('Missing Appwrite configuration in environment variables')
}

const client = new Client()
client.setEndpoint(endpoint)
client.setProject(projectId)

const account = new Account(client)

export const POST = async (req: Request) => {
  try {
    const { email } = await req.json()

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    const redirectUrl = `${appUrl}/api/auth/magic-link-callback`
    await account.createMagicURLToken('unique()', email, redirectUrl)

    return NextResponse.json({ message: 'Magic link sent to email' })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
