import React, { useEffect, useState } from 'react'
import dp from '../images/dp.jpg';
import meme from '../images/meme.jpg';
import { useHistory } from 'react-router-dom'
const About = () => {
 
	   const history = useHistory();
      const [userData, setuserData] = useState({})
	const callAboutPage = async () => {
		try {
			const res = await fetch('/about', {
				method: "GET",
				headers:{
					Accept:"application/json",//for accepting token
					"Content-Type":"application/json"
				},
				credentials:"include"//for token
			});

        const data = await res.json();//data contains all the data of the user
        console.log(data);
		 setuserData(data);
		if (!res.status===200) {
			const error = new Error(res.error);
			throw error;
		}
		
		} catch (error) {
			console.log(error);
           history.push('/login')
		}
	}
	useEffect(() => {
		callAboutPage();//cannot use async function inside useeffect
	});

	return (
		<div>
			<form method="GET">
				<div id="myCarousel" className="carousel slide" data-ride="carousel">
					<div className="carousel-inner">
						<h2>About Me</h2>
						<div className="carousel-item active">
							<div className="img-box"><img src={userData.name==="subham"? dp : meme} alt="" /></div>

							<div className="container-lg">
								<div className="table-responsive">
									<div className="table-wrapper">
										<div className="table-title">
											<div className="row">
												<div className="col-sm-8"><h3>{ userData.name }</h3></div>
												<div className="col-sm-4">
													<button type="button" className="btn btn-info add-new"><i className="fa fa-plus"></i> Edit Profile</button>
												</div>
											</div>
										</div>
										<table className="table table-bordered">
											
											<tbody>
												<tr>
													<td><h6>User id</h6></td>
													<td>{ userData._id }</td>

												</tr>
												<tr>
													<td><h6>Name</h6></td>
													<td> subham</td>

												</tr>
												<tr>
													<td><h6>Email</h6></td>
													<td>{ userData.email }</td>

												</tr>
												<tr>
													<td><h6>Phone</h6></td>
													<td>{ userData.phone }</td>

												</tr>
												<tr>
													<td><h6>Profession</h6></td>
													<td>{ userData.work }</td>

												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>
			</form>
		</div>
	)
}

export default About
