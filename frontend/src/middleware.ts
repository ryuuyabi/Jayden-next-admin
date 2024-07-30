import { NextResponse, type NextRequest } from 'next/server'
import CheckAuthOperator from './features/auth/CheckAuthOperator'

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

    const pathname: string = request.nextUrl.pathname
    const response = NextResponse.next()

    if (isAllowedOrigin) {
        response.headers.set('Access-Control-Allow-Origin', origin)
    }
    Object.entries(corsOptions).forEach(([key, value]) => {
        response.headers.set(key, value)
    })

    const check_auth_operator: boolean = await CheckAuthOperator();

    // 未ログインだったらログイン画面に遷移させる
    if (check_auth_operator === false && gestUrl.includes(pathname) === false) {
        return NextResponse.redirect(new URL('/auth/login', request.url))
    }

    // ログイン状態でログイン画面を開いたらTOP画面に遷移させる
    if (check_auth_operator === true && gestUrl.includes(pathname) === true) {
        return NextResponse.redirect(new URL('/top', request.url))
    }

    if(pathname === '/') return NextResponse.redirect(new URL('/top', request.url));

    return response
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)"]
}
const gestUrl = ['/auth/login', '/auth/register'];
