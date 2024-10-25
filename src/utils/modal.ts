import Swal from 'sweetalert2'

export const showModal= ({title, text, type, didClose}:{title:string, text:string, type: 'success' | 'warning' | 'error', didClose?: () => void}, ) =>{
    return Swal.fire({
        title,
        text,
        icon: type,
        didClose,
      });
}