interface IRegisterUser {
  name:string;
  email: string;
  password: string;
  confirmPassword: string;
}
interface IRegisterResponse {
  name: string;
  status?: string;
  userId?: string;
  token?: string;
  message?: string;
}
export const RegisterController = async (
  props: IRegisterUser
): Promise<IRegisterResponse | undefined> => {
  const res = await fetch("http://localhost:3000/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(props),
  })

  const registerResponse: IRegisterResponse = await res.json();
  registerResponse.status = res.status;
  return registerResponse;
};
