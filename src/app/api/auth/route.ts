import { Client, Account } from 'appwrite'
import { NextResponse } from 'next/server'

const client = new Client()
  .setEndpoint(process.env.APPWRITE_ENDPOINT as string)
  .setProject(process.env.APPWRITE_PROJECT_ID as string)

const account = new Account(client)

const loginUser = async (email: string, password: string) => {
  try {
    const session = await account.createEmailPasswordSession(email, password)
    return NextResponse.json(session)
  } catch (error) {
    return NextResponse.json(error)
  }
}

export const GET = () => {
  return loginUser('mickeynegi924@gmail.com', 'hello01@aaA')
}
