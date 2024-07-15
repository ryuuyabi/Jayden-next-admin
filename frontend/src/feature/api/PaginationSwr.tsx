import { ApiResponsePagination } from '@/type/ApiResponse';
import useSWR from 'swr';

export default function PaginationSwr<T>(url: string) {
    const fetcher = (): Promise<ApiResponsePagination<T>> => fetch(url).then(res => res.json());
    const { data, error } = useSWR<ApiResponsePagination<T>>(url, fetcher);
    return { data, error }
}
