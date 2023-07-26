import { api } from "./api";
interface SessionMV {
  success: boolean;
  guest_session_id: string;
  expires_at: string;
}
export const generateSession = async (): Promise<SessionMV> => {
  return api
    .get<SessionMV>(`/authentication/guest_session/new`)
    .then((res) => res);
};
