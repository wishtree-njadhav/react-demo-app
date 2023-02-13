
import React from "react";
import "../../shared-components/css/index.css";
import Slider from "../Pages/Slider";
import { useForm } from 'react-hook-form';
import TextField from '../../shared-components/CustomInputs/CustomTextField'
import { FormLabel } from '@mui/material';
import Button from "../../shared-components/CustomInputs/CustomButton";


import { yupResolver } from '@hookform/resolvers/yup';
import { Validations ,initialState} from "./Validations";
import { useFormik } from 'formik';
const Login = () => {
  const {
    register, handleSubmit, formState: { errors } }= 
    useForm( {resolver: yupResolver(Validations)});

    const formik = useFormik({
      initialValues: initialState,
      validationSchema: Validations,
      onSubmit : (data) => {
      alert(JSON.stringify(data));
    }
  })
  document.title = "Signin | Demo";

  return (
    <div >
      <div className="flex items-center justify-start  pl-[10%] my-[25px]">
        <header>
          <img src={`/assets/images/wishtreeLogo.png`} className="imgLogo" />
        </header>
      </div>
      <div>
        <div className="container">
          <div className="login-wrapper">
            <div className="login-leftblk">
              
              <div className="p-[20px] bg-[#ffffff] rounded-[5px] drop-shadow-[0px_0px_6px_#00000029] ml-[125px]">
              <div className="flex justify-center items-center">
              <img
                  src={`/assets/images/GHR.svg`}
                  alt=""
                 className="img-ghr"
                />
             
              </div>
             <div className="flex mt-[5px] text-[25px] font-bold opacity-90 text-text-default justify-center items-center">
              Hello there!
           
             </div>
             <form onSubmit={handleSubmit(formik)}>
          
             <div className="flex-row mt-[25px] items-center justify-start">
             <div className="mb-[10px]"> <FormLabel >Login ID</FormLabel> </div>
             <TextField
        
          size="small"
          id="outlined-error"
          name="empId"
          className="w-[100%] m-[0px]"
          {...register("empId")}
          error={formik.touched.empId && Boolean(formik.errors.empId)}
                 
                  helperText={formik.touched.empId && formik.errors.empId}
                  // FormHelperTextProps={{ classes: helperTextCssAddBuild }}
                   {...formik.getFieldProps("empId")}
          placeholder="Employee ID"
        />
        {/* {errors.empId && 
         <p>{errors.empId?.message}</p> } */}
             </div>
             <div className="flex-row items-center justify-start mt-[20px]">
             <div className="mb-[10px]"> <FormLabel className="mb-[10px]">Password</FormLabel></div>
             <TextField
          name="password"
          type="password"
          size="small"
          id="outlined-error"
          className="w-[100%] m-[0px]"
         {...register("password")}
          placeholder="Password"
        />
         {errors.password && 
         <p>{errors.password?.message}</p> }
             </div>
             <div className="flex items-center justify-start mt-[30px] w-full">
                <Button
                  variant="contained"
                  className="contained-btn"
                 
                  aria-label="Login"
                  size="small"
                  type="submit"
                >
                  Login
                </Button>
              </div>
             </form>

              </div>
            </div>
            <div className="login-rightblk">
              <div className="login-slider">
                <Slider />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
