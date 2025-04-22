import { account, databases } from "@/shared/config/appwrite";
import { Query } from "appwrite";
import { NextRequest } from "next/server";

const DATABASE_ID = "67e00c2600248178764b";
const COLLECTION_ID = "680745940027e4b27c17";

export const GET = async (request: NextRequest) => {
    const currentUser = await account.get()
    const userId = request.nextUrl.searchParams.get('userId') as string;
    try {
        const response = await databases.listDocuments(
            DATABASE_ID,
            COLLECTION_ID,
            [
                Query.equal("userId", userId)
            ]
        );
        return Response.json({ data: response.documents[0] }, { status: 200 })
    } catch (error) {
        console.log(error)
        return Response.json({ error }, { status: 500 })
    }
};