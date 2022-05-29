import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { mail, password, nickname, } = await req.json();
    // const res = await fetch('/api/auth/findunique', {
    //     method: 'POST',
    //     body: JSON.stringify(mail),
    //     headers: { 'Content-Type': 'application/json' }
    // })
    const res = await fetch(process.env.BASE_URL + '/user/register', {
        method: 'POST',
        body: JSON.stringify(req.json()),
        headers: { 'Content-Type': 'application/json' }
    })
    if (!res.ok) {
        return NextResponse.json({ error: "Mail already exists" }, { status: 400 });
    } else {
        return res.json()
    }
}