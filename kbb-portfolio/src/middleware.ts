import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    // BAKIM MODU AKTİF Mİ? (true yaparsan herkes bakım sayfasını görür)
    const isMaintenanceMode = true;

    if (isMaintenanceMode) {
        // Bakım sayfası ve statik dosyaların (görseller vb.) sonsuz döngüye girmesini engelle
        if (
            request.nextUrl.pathname.startsWith('/bakimda') ||
            request.nextUrl.pathname.includes('.') // .png, .jpg gibi dosyalar için
        ) {
            return NextResponse.next();
        }

        // Herkesi /bakimda sayfasına yönlendir
        return NextResponse.redirect(new URL('/bakimda', request.url))
    }

    return NextResponse.next();
}

// Hangi yollarda çalışacağını seç
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}