export const passwordValidator = (password: string) => {
  if (password.length < 8) {
    return "Password must be atleast 8 characters long";
  } else if (password.length > 20) {
    return "Password must be atmost 20 characters long";
  } else if (
    !password.match(/[a-z]/g) ||
    !password.match(/[A-Z]/g) ||
    !password.match(/[0-9]/g) ||
    !password.match(/[^a-zA-Z\d]/g)
  ) {
    return "Password must contain atleast one uppercase letter, one lowercase letter, one number and one special character";
  }
  return "";
};
export const emailValidator = (email: string) => {
  if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    return "Invalid email";
  }
  return "";
};
