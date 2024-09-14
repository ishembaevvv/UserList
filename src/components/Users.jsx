import React from "react";
import Skeleton from "./Skeleton";
import css from "../styles/Users.module.css";
import User from "./User";

export default function Users({
	items,
	isLoading,
	searchValue,
	onChangeSearch,
	clickInvite,
	invites,
}) {
	return (
		<div className={css.users}>
			<div className={css.search}>
				<box-icon color="#acb7a8" name="search-alt-2"></box-icon>
				<input
					value={searchValue}
					onChange={onChangeSearch}
					type="text"
					placeholder="search..."
				/>
			</div>
			{isLoading ? (
				<div className={css.skeleton_list}>
					<Skeleton />
					<Skeleton />
					<Skeleton />
					<Skeleton />
				</div>
			) : (
				<div>
					{items
						// чтобы сравнит value поиска с именами или с email
						.filter(obj => {
							const full_name = (obj.first_name + obj.last_name).toLowerCase();
							// toLowerCase чтобы переводит внижний регистор для поиска с нижним и верним регисторам

							if (
								full_name.includes(searchValue.toLowerCase()) ||
								obj.email.toLowerCase().includes(searchValue.toLowerCase())
							) {
								return true;
							}
						})
						// рендерит после того как сровнить
						.map((obj, id) => {
							return (
								<User
									inInvited={invites.includes(obj.id)}
									clickInvite={clickInvite}
									{...obj}
									key={id}
								/>
							);
						})}
				</div>
			)}
		</div>
	);
}
