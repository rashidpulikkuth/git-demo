// this file will contain all the authentication logic for the application

export const login = (username, password) => {
  // logic to authenticate the user with the provided username and password
  // this could involve making an API call to a backend server
  // for now, we'll just simulate a successful login
  if (username === "admin" && password === "password") {
    return { success: true, token: "fake-jwt-token" };
  } else {
    return { success: false, message: "Invalid username or password" };
  }
};
