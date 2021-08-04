import swal from 'sweetalert'

export default class AlertHelper {
    static success(message, timeOut= 2000, title= "", buttonTitle = "Confirmar") {
        swal({
            title: title,
            icon: "success",
            text: message,
            timer : timeOut,
            button: buttonTitle,
        })
      }
      static info(message, timeOut= 2000, title= "", buttonTitle = "Confirmar") {
        swal({
            title: title,
            icon: "info",
            text: message,
            timer : timeOut,
            button: buttonTitle,
        })
      }
      static error(message, timeOut= 2000, title= "", buttonTitle = "Confirmar") {
        swal({
            title: title,
            icon: "error",
            text: message,
            timer : timeOut,
            button: buttonTitle,
        })
      }
}