'use client'
import { Account, Client, Databases, Query } from 'appwrite'
import { useEffect, useState } from 'react'
export const useDetails = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useState({
        session: {
            $id: "",
            $createdAt: "",
            expire: "",
            countryName: "",
            deviceName: "",
            clientCode: ""
        },
        details: {
            email: "",
            name: "",
            age: 18,
            description: null,
            role: "Customer",
            emailVerification: false,
            phoneVerification: false,
            passwordUpdate: "",
            accessedAt: "",
            registration: "",
            phone: "",
            $id: "",
            address: null,
            skills: ["UI/UX", "Adobe XD", "Mobile Apps", "User Research", "Wireframing"],
            bookings: [
                {
                    $id: "122344",
                    pickup_location: "Dehradun",
                    pickup_date: "03/02/2024",
                    return_date: "04/02/2024",
                    vehicle: "Activa 2G"
                },
                {
                    $id: "1234",
                    pickup_location: "Mussorie",
                    pickup_date: "06/02/2024",
                    return_date: "08/02/2024",
                    vehicle: "Activa 5G"
                }
            ]
        }
    })
    const client = new Client()
    const account = new Account(client);
    const databases = new Databases(client)

    useEffect(() => {
        (async () => {
            if (isLoading) {
                return
            };
            setIsLoading(true)
            try {
                const session = await account.getSession('current');
                const currentUser = await account.get();
                setUser({
                    details: {
                        ...user.details,
                        ...currentUser
                    },
                    session: session
                })
            } catch (err) {
                console.log(err)
                console.error("some error occurred")
            } finally {
                setIsLoading(false)
            }
        })()
    }, [])
    return { user, isLoading }
}

