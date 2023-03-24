export function saveTokenToLocalStorage(token) {
  localStorage.setItem("token", token);
}

export function removeTokenFromLocalStorage() {
  localStorage.removeItem("token");
}
