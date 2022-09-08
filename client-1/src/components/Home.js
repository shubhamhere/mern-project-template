import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const  Home = () => {
      
    const [userName, setuserName] = useState('')
    const [show, setshow] = useState(false)
   
	const callHomePage = async () => {
		try {
			const res = await fetch('/getdata', {
				method: "GET",
				headers:{
					Accept:"application/json",//for accepting token
					"Content-Type":"application/json"
				},
				
			});

        const data = await res.json();//data contains all the data of the user
        console.log(data);
		 setuserName(data.name);
		
		 setshow(true)
		} catch (error) {
			console.log(error);
		}
	}
	useEffect(() => {
		callHomePage();//cannot use async function inside useeffect
	});


    return (
        <div className="homes" >
            <h3>WELCOME </h3>
            <h1 className="h9"> <span  >{ userName }</span> </h1>
            <h1>{ show ? 'Happy to see you back😍!! ': <NavLink to="/login"> Login here for more🙌  </NavLink>} </h1>
			
        </div>
    )
}

export default Home
