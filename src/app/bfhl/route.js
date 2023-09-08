import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    operation_code: 1,
  });
}

export async function POST(req) {
  const data = await req.json();
  const arr = data.data;

  const alphabets = arr
    .filter((el) => el.length == 1)
    .filter((el) => el.match(/[A-Z]/i));

  const numbers = arr.filter(Number);

  const highest_alphabet = [alphabets.sort((a, b) => b.localeCompare(a)).at(0)];

  return NextResponse.json({
    user_id: "Shreyash_Mishra_14052002",
    is_success: true,
    roll_number: "RA2011030020049",
    numbers,
    alphabets,
    highest_alphabet,
  });
}