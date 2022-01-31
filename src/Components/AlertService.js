import Swal from "sweetalert2";

export function alertServiceInfoTimer(
  position,
  icon,
  title,
  showConfirmButton,
  timer
) {
  Swal.fire({
    position: "top",
    icon: "info",
    title,
    showConfirmButton,
    timer,
    background: "black",
    color: "White",
  });
}

export function alertServiceConfirm(title, confirmButtonText) {
  Swal.fire({
    title,
    color: "White",
    background: "black",
    showDenyButton: true,
    showCancelButton: true,
    denyButtonText: `No ${confirmButtonText || "Confirmar"}`,
    confirmButtonText: confirmButtonText || "Confirmar",
    confirmButtonColor: "#95CD41",
    cancelButtonColor: "#92A9BD",
    width: "600",
    padding: "30",
    confirmButtonClass: "btn-danger",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(confirmButtonText || "Hecho", "", "success");
    } else if (result.isDenied) {
      Swal.fire("No se han hecho los cambios", "", "info");
    }
  });
}
export function alertServiceError(title, text) {
  Swal.fire({
    icon: "error",
    title,
    text,
    color: "White",
    background: "Black",
    errorButtonColor: "#072227",
  });
}
