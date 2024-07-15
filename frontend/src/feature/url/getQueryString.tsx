import { useSearchParams } from "next/navigation";

export function getQueryString(): string {
    return useSearchParams().toString()
}
