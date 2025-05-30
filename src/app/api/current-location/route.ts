import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  try {
    const res = await fetch("https://ipinfo.io/json");
    const data = await res.json();

    return NextResponse.json(data, { status: 200 });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return NextResponse.json(
        { error: err.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: "An unknown error occurred" },
      { status: 500 }
    );
  }
};
