import React, { useContext, useEffect } from 'react'
import {  useHistory } from 'react-router'
import { UserContext } from "../App";
const Logout=()=> {
      
	const {state,dispatch} = useContext(UserContext)

    const history= useHistory();

    const goLogoutPage = async () => {
		try {
			const res = await fetch('/logout', {
				method: "GET",
				headers:{
					Accept:"application/json",//for accepting token
					"Content-Type":"application/json"
				},
				// credentials:"include"//for token data
			});
            if (res) { 
				dispatch({type:"USER",payload:false})
              history.push('/login',{ replace: true }) 
            }	
            if (res.status !== 200) {
                const error = new Error(res.error);
                throw error;
            }
		} catch (error) {
			console.log(error);
          
		}
	}
	useEffect(() => {
		goLogoutPage();//cannot use async function inside useeffect
	});  
  

    return (
        <>
            <h1>logout page</h1>
        </>
    )
}

export default Logout
