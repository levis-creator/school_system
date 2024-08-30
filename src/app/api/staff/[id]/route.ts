import { NextResponse } from "next/server";

export const PUT = async (
  request: Request,
  { params }: { params: { id: any } }
) => {
  const { id } = params;
  const body = await request.json();
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/staff/${id}`,
    {
      method: "PUT",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    }
  )
    .then((res) => {
      return NextResponse.json(res);
    })
    .catch((error) =>
      NextResponse.json({
        error,
      })
    );
  return data;
};

export const DELETE = async (
  request: Request,
  { params }: { params: { id: any } }
) => {
  const { id } = params;
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/staff/${id}`,
    {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }
  )
    .then((res) => {
      return NextResponse.json(res);
    })
    .catch((error) =>
      NextResponse.json({
        error,
      })
    );
  return data;
};
