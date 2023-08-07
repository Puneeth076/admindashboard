type register = {
  username: string;
  email: string;
  password: string;
};
type login = {
  email: string;
  password: string;
};
import toast from "react-hot-toast";
const options: any = {
  position: "top-center",
  style: { background: "grey", color: "white" },
};

export function registerToast({ username, email, password }: register) {
  if (email.length === 0) {
    toast.error("Email is required", options);
    return false;
  } else if (username.length === 0) {
    toast.error("Username is required", options);
    return false;
  } else if (password.length === 0) {
    toast.error("Password is required", options);
    return false;
  } else if (password.length < 8) {
    toast.error("Password min lengt is 8", options);

    return false;
  }
  return true;
}
export function loginToast({ email, password }: login) {
  if (email.length === 0) {
    toast.error("Email is required", options);
    return false;
  } else if (password.length === 0) {
    toast.error("Password is required", options);
    return false;
  }
  return true;
}
