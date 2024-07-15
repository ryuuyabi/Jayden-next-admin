import { NextResponse, type NextRequest } from 'next/server'

const allowedOrigins = ['http://admin.localhost/']
const corsOptions = {
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

export async function middleware(request: NextRequest) {
    // ログを出力する
    // IPアドレス制限を実装する

    // Check the origin from the request
    const origin = request.headers.get('origin') ?? ''
    const isAllowedOrigin = allowedOrigins.includes(origin)

    // Handle preflighted requests
    const isPreflight = request.method === 'OPTIONS'

    if (isPreflight) {
        const preflightHeaders = {
            ...(isAllowedOrigin && { 'Access-Control-Allow-Origin': origin }),
            ...corsOptions,
        }
        return NextResponse.json({}, { headers: preflightHeaders })
    }

    // Handle simple requests
    const response = NextResponse.next()

    if (isAllowedOrigin) {
        response.headers.set('Access-Control-Allow-Origin', origin)
    }
    Object.entries(corsOptions).forEach(([key, value]) => {
        response.headers.set(key, value)
    })

    // 未ログインだったらログイン画面に遷移させる
    if (true) {
        NextResponse.redirect(new URL('/auth/login', request.url))
    }

    return response
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)"]
}
