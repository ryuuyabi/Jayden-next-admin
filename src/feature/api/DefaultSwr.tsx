import { ApiResponse } from '@/type/ApiResponse';
import useSWR from 'swr';

export default function DefaultSwr<T>(url: string) {
    const fetcher = (): Promise<ApiResponse<T>> => fetch(url).then(res => res.json());
    const { data, error } = useSWR<ApiResponse<T>>(url, fetcher);
    return { data, error }
}
