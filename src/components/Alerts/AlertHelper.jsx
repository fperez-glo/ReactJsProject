import swal from 'sweetalert2'

export default class AlertHelper {
    static success(message, timeOut= 2000, title= "", buttonTitle = "Confirmar") {
        swal.fire({
            title: title,
            icon: "success",
            text: message,
            timer : timeOut,
            button: buttonTitle,
            showConfirmButton: false,
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