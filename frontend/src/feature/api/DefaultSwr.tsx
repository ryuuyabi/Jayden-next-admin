import { ApiResponse } from '@/type/ApiResponse';
import { error } from 'console';
import useSWR from 'swr';

export default function DefaultSwr<T>(url: string) {
    const fetcher = (): Promise<ApiResponse<T>> => fetch(url).then(res => res.json());
    const { data, error } = useSWR<ApiResponse<T>>(url, fetcher);
    if (data === undefined) {
        return data
    }
    return { data, error }
}
