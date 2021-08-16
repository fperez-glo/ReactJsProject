import swal from 'sweetalert2'

export default class AlertHelper {
    static success(message, html,timeOut= 2000, showConfirmButton= false, buttonTitle = 'Confirmar', title= "") {
        swal.fire({
            title: title,
            icon: "success",
            html: html,
            text: message,
            timer : timeOut,
            confirmButtonText: buttonTitle,
            showConfirmButton: showConfirmButton,
        })
      }
      static info(message, timeOut= 2000, title= "", buttonTitle = "Confirmar") {
        swal.fire({
            title: title,
            icon: "info",
            text: message,
            timer : timeOut,
            button: buttonTitle,
            showConfirmButton: false,
        })
        
      }
      static error(message, timeOut= 2000, title= "", buttonTitle = "Confirmar") {
        swal.fire({
            title: title,
            icon: "error",
            text: message,
            timer : timeOut,
            button: buttonTitle,
        })
      }
}