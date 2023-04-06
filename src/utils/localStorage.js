export function saveTokenToLocalStorage(token) {
  localStorage.setItem("token", token);
}

export function removeTokenFromLocalStorage() {
  localStorage.removeItem("token");
}

export function getTokenFromLocalStorage() {
  const result = localStorage.getItem("token");
  const r = result ? result : null;
  return r;
}
