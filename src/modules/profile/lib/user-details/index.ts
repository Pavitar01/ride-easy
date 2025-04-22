import { Client, Databases } from "node-appwrite";

const client = new Client()
const databases = new Databases(client)

export const getFilteredUserDetails = async () => {
    try {
        console.log(process.env.APPWRITE_DATABASE_ID,'ddddddd')
        const databaseId = process.env.APPWRITE_DATABASE_ID!;
        const collectionId = process.env.USER_PROFILE_COLLECTION!;
        const response = await databases.listDocuments(databaseId, collectionId);
        console.log('Filtered user details:', response);
        const userDetails = response.documents;
        console.log(userDetails);
    } catch (error) {
        console.log(error)
        console.error('Error fetching filtered user details:', error);
    }
};