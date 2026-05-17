import { apiClient, apiRequest, type ApiResult } from "@/lib/apiClient";

export type BaseDataCode = {
    code: string;
    label: string;
    description: string;
    sort_order: number;
    meta: unknown | null;
};

export type BaseData = {
    app: {
        name: string;
        env: string;
        url: string;
        version: string;
    };
    server_time: string;
    common_codes: Record<string, BaseDataCode[]>;
};

export type BaseDataResult = ApiResult<BaseData>;

export async function fetchBaseData(): Promise<BaseDataResult> {
    return apiRequest<BaseData>(apiClient.get("/v1/base-data"));
}
