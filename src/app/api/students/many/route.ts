import { NextResponse } from "next/server";
export const POST = async (request: Request) => {
  const body = await request.json();
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/students/many`,
    {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    }
  )
    .then((res) => {
      return res.json();
    })
    .catch((error) =>
      NextResponse.json({
        error,
      })
    );
  return Response.json(data);
};
