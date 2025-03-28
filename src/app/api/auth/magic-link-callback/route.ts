import { Account, Client } from 'appwrite'
import { NextResponse } from 'next/server'

const client = new Client()
client.setEndpoint(process.env.APPWRITE_ENDPOINT!)
client.setProject(process.env.APPWRITE_PROJECT_ID!)

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
