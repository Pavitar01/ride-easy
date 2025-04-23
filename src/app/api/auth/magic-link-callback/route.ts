import { Account, Client } from 'appwrite'
import { NextResponse } from 'next/server'
const endpoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT
const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID

if (!endpoint || !projectId) {
  throw new Error('Missing Appwrite configuration in environment variables')
}

const client = new Client()
client.setEndpoint(endpoint)
client.setProject(projectId)

const account = new Account(client)

export async function GET(req: Request) {
  try {
    const url = new URL(req.url)
    const userId = url.searchParams.get('userId')
    const secret = url.searchParams.get('secret')

    if (!userId || !secret) {
      return NextResponse.json({ error: 'Missing parameters' }, { status: 400 })
    }
    await account.updateMagicURLSession(userId, secret)
    return NextResponse.redirect(new URL(`/home?userId=${userId}`, req.url))
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
