import { Client, Databases, ID, Account, Storage } from 'appwrite'
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
    const full_name = formData.get('fullName') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const vehicle = formData.get('vehicle') as string
    const pickup_date = formData.get('pickupDate')
    const return_date = formData.get('returnDate')
    const pickup_location = formData.get('pickupLocation') as string
    const message = formData.get('message') as string

    const missingFields: string[] = []

    if (!full_name) missingFields.push('fullName')
    if (!email) missingFields.push('email')
    if (!phone) missingFields.push('phone')
    if (!vehicle) missingFields.push('vehicle')
    if (!pickup_date) missingFields.push('pickUpDate')
    if (!return_date) missingFields.push('returnDate')
    if (!pickup_location) missingFields.push('pickUpLocation')

    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      )
    }

    const response = await databases.createDocument(
      process.env.APPWRITE_DATABASE_ID as string,
      process.env.APPWRITE_BOOKING_COLLECTION_ID as string,
      ID.unique(),
      {
        full_name,
        email,
        phone,
        vehicle,
        pickup_date,
        return_date,
        pickup_location,
        message,
      }
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
      { message: 'Vehicle booked successfully', data: filteredResponse },
      { status: 201 }
    )
  } catch (err: any) {
    console.error('Error in booking vehicle:', err)
    return NextResponse.json(
      { error: err?.message || 'Something went wrong' },
      { status: err.code ?? 500 }
    )
  }
}

export const GET = async (req: Request) => {
  try {
    const response = await databases.listDocuments(
      process.env.APPWRITE_DATABASE_ID as string,
      process.env.APPWRITE_BOOKING_COLLECTION_ID as string
    )

    const filteredDocuments = response.documents.map(
      ({
        $id,
        $createdAt,
        $updatedAt,
        $permissions,
        $databaseId,
        $collectionId,
        ...doc
      }) => doc
    )
    return NextResponse.json(
      { message: 'Booking fetched successfully', data: filteredDocuments },
      { status: 200 }
    )
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || 'Something went wrong' },
      { status: 500 }
    )
  }
}
