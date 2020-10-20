import { toast } from 'react-toastify';

const toastOptions = {
    position: "top-right",
    autoClose: 7000,
    closeOnClick: true,
    pauseOnHover: false
}

export default (err)=>{
    if (err.response) {
        const errors = err.response.data.errors;
        if (typeof errors == "object") {
            for (let key in errors) {
                toast.error(errors[key], toastOptions);
            }
        } else {
            const id = toast.error(errors, toastOptions);
            console.log(id);
        }
    }
}