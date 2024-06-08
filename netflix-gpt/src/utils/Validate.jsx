export const checkValidateData = (email, password, name) => {
  const isEmailValide = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValide =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);

  if (!isNameValid) return "Username is not valid";
  if (!isEmailValide) return "Email id is not valid";
  if (!isPasswordValide) return "password is not valid";
};
