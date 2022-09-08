import React from 'react'
import { NavLink  } from "react-router-dom";
function Errorpage() {
	return (
		<div>
			<div className="modal-dialog modal-confirm">
				<div className="modal-content">
					<div className="modal-header justify-content-center">
						<div className="icon-box">
							<i className="material-icons">&#xE5CD;</i>
						</div>
						
					</div>
					<div className="modal-body text-center">
						<h4>Ooops!</h4>
						<p>The page doesn't exist.</p>
						<button className="btn btn-success" data-dismiss="modal"><NavLink to="/">BACK TO HOME</NavLink></button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Errorpage
