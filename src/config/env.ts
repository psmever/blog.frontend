export function requireEnv(name: string, value: string | undefined) {
    const normalizedValue = value?.trim();

    if (!normalizedValue) {
        throw new Error(`${name} 환경 변수가 설정되지 않았습니다.`);
    }

    return normalizedValue;
}
