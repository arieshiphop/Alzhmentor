export function getIfIsLogged() {
  let isLogged = localStorage.getItem("isLogged");
  if (isLogged == "true") {
    return true;
  }
  if (isLogged == "false") {
    return false;
  }
}
