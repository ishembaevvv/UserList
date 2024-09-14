import React from "react";
import css from "../styles/User.module.css";
import "boxicons";

export default function User({
	id,
	avatar,
	first_name,
	last_name,
	email,
	clickInvite,
	inInvited,
}) {
	return (
		<li className={css.user} style={{ background: inInvited ? "#50564e" : "" }}>
			<div>
				<img className={css.avatar} src={avatar} />
			</div>
			<div>
				<h3>
					{first_name} {last_name}
				</h3>
				<p className={css.email}>{email}</p>
			</div>
			<p onClick={() => clickInvite(id)}>
				{inInvited ? (
					<box-icon type="solid" name="user-minus"></box-icon>
				) : (
					<box-icon type="solid" name="user-plus"></box-icon>
				)}
			</p>
		</li>
	);
}
