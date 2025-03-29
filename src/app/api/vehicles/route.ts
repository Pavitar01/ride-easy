import {
  Client,
  Databases,
  ID,
  Permission,
  Role,
  Account,
  Storage,
} from 'appwrite'
import { NextResponse } from 'next/server'

const client = new Client()
  .setEndpoint(process.env.APPWRITE_ENDPOINT as string)
  .setProject(process.env.APPWRITE_PROJECT_ID as string)

const databases = new Databases(client)
const storage = new Storage(client)
const account = new Account(client)

export const POST = async (req: Request) => {
  try {
    const formData = await req.formData()
    const name = formData.get('name') as string
    const price = Number(formData.get('price'))
    const transmission = formData.get('transmission') as string
    const fuel = formData.get('fuel') as string
    const passengers = Number(formData.get('passengers'))
    const userId = formData.get('userId')
    const image = formData.get('image') as File

    const missingFields: string[] = []

    if (!name) missingFields.push('name')
    if (!price) missingFields.push('price')
    if (!transmission) missingFields.push('transmission')
    if (!fuel) missingFields.push('fuel')
    if (!passengers) missingFields.push('passengers')
    if (!userId) missingFields.push('userId')
    if (!image) missingFields.push('image')

    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      )
    }

    const uploadedFile = await storage.createFile(
      process.env.APPWRITE_STORAGE_BUCKET_ID as string,
      ID.unique(),
      image
    )

    const imageUrl = storage.getFileView(
      process.env.APPWRITE_STORAGE_BUCKET_ID as string,
      uploadedFile.$id
    )

    const response = await databases.createDocument(
      process.env.APPWRITE_DATABASE_ID as string,
      process.env.APPWRITE_VEHICLES_COLLECTION_ID as string,
      ID.unique(),
      { name, price, transmission, fuel, passengers, imageUrl }
    )

    const {
      $permissions,
      $createdAt,
      $updatedAt,
      $databaseId,
      $collectionId,
      id: $id,
      ...filteredResponse
    } = response
    return NextResponse.json(
      { message: 'Vehicle added successfully', data: filteredResponse },
      { status: 201 }
    )
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.response?.message || 'Something went wrong' },
      { status: 500 }
    )
  }
}

export const GET = async (req: Request) => {
  try {
    const response = await databases.listDocuments(
      process.env.APPWRITE_DATABASE_ID as string,
      process.env.APPWRITE_VEHICLES_COLLECTION_ID as string
    )

    const filteredDocuments = response.documents.map(
      ({
        $createdAt,
        $updatedAt,
        $permissions,
        $databaseId,
        $collectionId,
        ...doc
      }) => doc
    )
    return NextResponse.json(
      { message: 'Vehicles fetched successfully', data: filteredDocuments },
      { status: 200 }
    )
  } catch (err: any) {
    console.error('Error fetching vehicles:', err)
    return NextResponse.json(
      { error: err?.message || 'Something went wrong' },
      { status: 500 }
    )
  }
}
