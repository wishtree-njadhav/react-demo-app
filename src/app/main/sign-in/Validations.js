import * as yup from 'yup';

export const initialState = {
    empId:"",
    password:""
}

export const Validations = yup.object().shape({
    empId: yup.string().required("Username is required"),
    password: yup.string().required("Password is required").matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,25}$/,"Password should contain min 8 characters, 1 uppercase, 1 lowercase ,1 number and 1 special symbol and max 25 characters")
  })