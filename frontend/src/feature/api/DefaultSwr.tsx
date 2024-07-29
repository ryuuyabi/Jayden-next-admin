import { ApiResponse } from '@/type/ApiResponse';
import useSWR from 'swr';
import { GetJwt } from '../jwt/JwtService';

export default function DefaultSwr<T>(url: string, isAuthorization: boolean = false) {
    const fetcher = (): Promise<ApiResponse<T>> => isAuthorization ? fetchWithAuthorization(url) : fetchDefault(url);
    const { data, error } = useSWR<ApiResponse<T>>(url, fetcher);

    // 型エラー防止のため
    if (data === undefined) {
        return data
    }
    return { data, error }
}

async function fetchDefault(url: string){
    return fetch(url).then(res => res.json());
}

async function fetchWithAuthorization(url: string){
    const jwt = await GetJwt()
    return fetch(url,{
        headers: {
            'Authorization': `Bearer: ${jwt}`,
            'Content-Type': 'application/json',
        }
    }).then(res => res.json());
}
