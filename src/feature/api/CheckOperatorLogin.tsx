import { ApiResponse } from "@/type/ApiResponse";
import { IsLogin } from "@/type/ApiResponseData";
import useSWR from "swr";

export function CheckOperatorLogin(): ApiResponse<IsLogin>|undefined {
    const fetcher = (): Promise<ApiResponse<IsLogin>> => fetch('http://admin.localhost/api/auth/status').then(res => res.json());
    const { data } = useSWR<ApiResponse<IsLogin>>('http://admin.localhost/api/auth/status', fetcher);
    return data
}
