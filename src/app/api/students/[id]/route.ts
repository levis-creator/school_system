import { NextResponse } from "next/server";

export const PUT = async (
  request: Request,
  { params }: { params: { id: any } }
) => {
  const { id } = params;
  const body = await request.json();
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/students/${id}`,
    {
      method: "PUT",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    }
  )
    .then((res) => {
      return new Response("success", { status: res.status });
    })
    .catch((error) =>
      NextResponse.json({
        error,
      })
    );
  return data;
};
