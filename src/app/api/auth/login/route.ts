import { Client, Account } from 'appwrite'
import { NextResponse } from 'next/server'

const client = new Client()
client.setEndpoint(process.env.APPWRITE_ENDPOINT!)
client.setProject(process.env.APPWRITE_PROJECT_ID!)

const account = new Account(client)

export const POST = async (req: Request) => {
  try {
    const { email } = await req.json()

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    const redirectUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/magic-link-callback`
    await account.createMagicURLToken('unique()', email, redirectUrl)

    return NextResponse.json({ message: 'Magic link sent to email' })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
