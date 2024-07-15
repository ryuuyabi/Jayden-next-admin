import { cookies } from 'next/headers'

export default function CheckAuthOperator(): boolean {
    const cookieStore = cookies();
    const authOperator = cookieStore.get('authOperator');
    if (authOperator === undefined) {
        return false
    }
    if (authOperator) {
        return true
    }
    return false
}
