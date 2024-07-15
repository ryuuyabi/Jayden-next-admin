import DefaultSwr from "@/feature/api/DefaultSwr";
import { GetAuthOperatorEndpoint } from "@/type/endpoint/EndpointAuth";

export function GetAuthOperator() {
    return DefaultSwr<GetAuthOperatorEndpoint>(`http://admin.localhost/api/auth/operator`)
}
