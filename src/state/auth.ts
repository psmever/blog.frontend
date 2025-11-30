import { atom } from "recoil";

export type SessionUser = {
    id: number;
    name: string;
    email: string;
};

export const sessionUserState = atom<SessionUser | null>({
    key: "sessionUserState",
    default: null,
});
