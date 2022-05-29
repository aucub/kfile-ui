import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { email, password, nickname, } = await req.json();
    const res = await fetch('/api/auth/findunique', {
        method: 'POST',
        body: JSON.stringify(email),
        headers: { 'Content-Type': 'application/json' }
    })

    if (!res.ok) {
        return NextResponse.json({ error: "User already exists" }, { status: 400 });
    } else {
        const res = await fetch('/api/auth/register', {
            method: 'POST',
            body: JSON.stringify(req.json()),
            headers: { 'Content-Type': 'application/json' }
        })
        if (res.ok) {
            return res.json()
        }
        return null
    }
}