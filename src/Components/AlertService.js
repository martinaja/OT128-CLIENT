import Swal from 'sweetalert2'
import { Redirect} from 'react-router-dom'

export function alertServiceInfoTimer(title, showConfirmButton, timer) {
  Swal.fire({
    position: 'center',
    icon: 'success',
    title,
    showConfirmButton,
    timer,
    background: 'black',
    color: 'White',
  })
}

export function alertServiceConfirm(title, confirmButtonText, action) {
  Swal.fire({
    title,
    backdrop: true,
    color: 'White',
    background: 'rgba(0,0,0,.8)',
    showDenyButton: true,
    showCancelButton: false,
    denyButtonText: `No ${confirmButtonText || 'Confirmar'}`,
    confirmButtonText: confirmButtonText || 'Confirmar',
    confirmButtonColor: '#95CD41',
    cancelButtonColor: '#92A9BD',
    width: '600',
    padding: '30',
    confirmButtonClass: 'btn-danger',
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(confirmButtonText || 'Hecho', '', 'success')
      action()
    } else if (result.isDenied) {
      Swal.fire('No se han hecho los cambios', '', 'info')
    }
  })
}

export function alertServiceError(title, text) {
  Swal.fire({
    icon: 'error',
    title,
    text,
    color: 'White',
    background: 'Black',
    // errorButtonColor: '#072227',
  })
}

export function alertDonationsMP(image) {
  Swal.fire({
    title: 'Ingrese su ayuda',
    input: 'text',
    inputAttributes: {
      autocapitalize: 'off',
    },
    color: 'White',
    background: 'Black',
    showCancelButton: true,

    confirmButtonText: 'Aceptar',
    showLoaderOnConfirm: true,
    preConfirm: () => {
      return 1
    },
    backdrop: false,
    allowOutsideClick: false,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: ` Gracias por su donación `,
        imageUrl: image,
        confirmButtonText: 'Ok',
        preConfirm: () => {
         <Redirect to='/gracias' />
        },
      })
    }
  })
}
