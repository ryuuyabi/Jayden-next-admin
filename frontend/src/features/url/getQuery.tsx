import { useSearchParams } from "next/navigation";

export function getQuery(quey: string): string {
    const searchParams = useSearchParams();
    return searchParams.get(quey) ?? ''
}
