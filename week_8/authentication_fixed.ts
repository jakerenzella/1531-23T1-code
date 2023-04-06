import { getHashOf } from "./hashing.js";

type Data = {
  users: { [email: string]: string };
};

const data: Data = {
  users: {},
};

function register(email: string, pw: string) {
  // don't register a duplicate email
  // hash the password
  const passwordHash = getHashOf(pw);
  if (email in data.users) {
    return false;

    // let's register the user...
  } else {
    data.users[email] = passwordHash;
    return true;
  }
}

function login(email: string, pw: string) {
  const passwordHash = getHashOf(pw);
  if (email in data.users) {
    if (passwordHash === data.users[email]) {
      return true;
    }
  }
  return false;
}
