import { NextResponse } from "next/server"
import { citiesGroupedByState } from "@/utils/cities"

export const GET = (req: Request) => {
    try {
        const url = new URL(req.url)
        const searchParams = url.searchParams
        const state_code = searchParams.get('state_code')

        if (!state_code) {
            return NextResponse.json(
                { error: 'state code is required' },
                { status: 400 }
            )
        }
        const cities = citiesGroupedByState[state_code as keyof typeof citiesGroupedByState]
        return NextResponse.json(cities, { status: 200 })
    }
    catch (err: unknown) {
        if (err instanceof Error) {
            return NextResponse.json(
                { error: err.message },
                { status: 500 }
            )
        }
    }
}