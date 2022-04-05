import Swal from "sweetalert2";

export function okAlert(title, text,router = "") {
  Swal.fire({
    title: title,
    text: text,
    icon: "success",
    confirmButtonText: "Ok"
  }).then(function () {
    if(router !== "")
      router.push("/exercises")
    else
        return
});
}
export function onError(title, text) {
  Swal.fire({
    title: title,
    text: text,
    icon: "error",
    confirmButtonText: "Ok"
  });
}