import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
 const CustomButton = styled(Button)({
    '&.contained-btn':{
       width: "100%",
        padding: "10px 22px",
        whiteSpace: "nowrap",
        
        lineHeight: '20px', 
        backgroundColor: '#226EB5',
        border: '1px solid ',
        borderRadius: '5px',
        opacity: 1,
        borderColor:"#226EB5",
        color:"#FFFFFF",
        fontSize:"14px",
        '&.contained-btn:hover':{
            backgroundColor:"#1C5E9D"
        }
     },

     '&.outlined-btn':{
       // width: "fit-content",
       
        padding: "10px 22px",
        whiteSpace: "nowrap",
        
        lineHeight: '22px', 
        backgroundColor: '#ffffff',
        border: '1px solid',
        borderRadius: '5px',
        opacity: 1,
        borderColor:"#1C5E9D",
        color:"#226EB5",
        fontSize:"14px",
        '&.outlined-btn:hover':{
            backgroundColor:"#226EB5",
        borderColor:"#226EB5",
        color:"#ffffff",


        }
     },
     
     
 });

 export default CustomButton;