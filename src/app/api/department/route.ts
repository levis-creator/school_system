import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const body = await request.json();
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/department`,
    {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    }
  )
    .then((res) => {
      return NextResponse.json("success", { status: res.status });
    })
    .catch((error) =>
      NextResponse.json({
        error,
      })
    );
  return data;
};

export const GET = async (request: Request) => {
  try {
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/department`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((data) => {
      return data.json();
    });
    return NextResponse.json(data);
  } catch (error) {
    NextResponse.json({
      error,
    });
  }
};
