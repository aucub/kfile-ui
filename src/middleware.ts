import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Read more: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// }

// 配置中间件的匹配路径
export const config = {
    matcher: '/user/:path*',
}

export function middleware(request: NextRequest) {
    console.log('kkkkkkkkkkkkkk')
    return NextResponse.rewrite(new URL('http://localhost:8080' + request.url))
}