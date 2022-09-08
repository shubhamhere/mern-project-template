import React, { useEffect, useState } from 'react'

const Contact = () => {


	const [userData, setuserData] = useState({ name: "", email: "", phone: "", message: "" });
	const userContact = async () => {
		try {
			const res = await fetch('/about', {
				method: "GET",
				headers: {
					"Content-Type": "application/json"
				},

			});
 
			const data = await res.json();//data contains all the data of the user
			console.log(data);
			setuserData({ ...userData, name: data.name, email: data.email, phone: data.phone });
			if (!res.status === 200) {
				const error = new Error(res.error);
				throw error;
			}

		} catch (error) {
			console.log(error);

		}
	}
	useEffect(() => {
		userContact();//cannot use async function inside useeffect
	}, []);
	//storing data in states  
	const handleInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		setuserData({ ...userData, [name]: value })
	}
	//send data to backend

	const contactForm = async (e) => {
		e.preventDefault();

		const { name, email, phone, message } = userData

		const res = await fetch('/contact', {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				name, email, phone, message  //as key and value are same 
			})
		});
		const data = await res.json();

		if (!data) {
			console.log(`message not sent`);

		} else {
			alert("Message sent")
			setuserData({ ...userData, message: "" })
		}

	}
	return (
		<>
			<div className="contact-form">
				<form method="POST">
					<h2>Contact Us</h2>
					<p className="hint-text">We'd love to hear from you, please drop us a line if you've any query related to our products or services.</p>
					<div className="form-group">
						<label htmlFor="inputName">Name</label>
						<input type="text" className="form-control" placeholder="" onChange={handleInput} name="name" value={userData.name} id="inputName" required />
					</div>
					<div className="form-group">
						<label htmlFor="inputEmail">Email Address</label>
						<input type="email" className="form-control" placeholder="enter your email" onChange={handleInput} name="email" value={userData.email} id="inputEmail" required />
					</div>
					<div className="form-group">
						<label htmlFor="inputPhone">Phone Number</label>
						<input type="number" className="form-control" placeholder="enter your phone number" onChange={handleInput} name="phone" value={userData.phone} id="inputEmail" required />
					</div>
					<div className="form-group">
						<label htmlFor="inputMessage">Message</label>
						<textarea className="form-control" placeholder="enter your message" id="inputMessage"
							onChange={handleInput} name="message" value={userData.message}
							rows="2" required></textarea>
					</div>
					<button type="submit" onClick={contactForm} className="btn btn-primary btn-block" ><i className="fa fa-paper-plane"></i> Send Message</button>
				</form>
			</div>

		</>
	)
}

export default Contact
