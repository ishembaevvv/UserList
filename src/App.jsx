import { useEffect, useState } from "react";
import Users from "./components/Users";
import css from "./styles/App.module.css";

function App() {
	const [users, setUsers] = useState([]);
	const [invites, setInvites] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [searchValue, setSearchValue] = useState("");

	useEffect(() => {
		fetch(`https://reqres.in/api/users`)
			.then(res => res.json())
			.then(json => setUsers(json.data))
			.catch(error => console.warn(error))
			.finally(() => setIsLoading(false));
	}, []);

	const onChangeSearch = e => {
		setSearchValue(e.target.value);
	};

	function clickInvite(id) {
		if (invites.includes(id)) {
			setInvites(prev => prev.filter(_id => _id !== id));
		} else {
			setInvites(prev => [...prev, id]);
		}
	}

	return (
		<div className={css.app}>
			<Users
				items={users}
				isLoading={isLoading}
				onChangeSearch={onChangeSearch}
				searchValue={searchValue}
				clickInvite={clickInvite}
				invites={invites}
			/>
		</div>
	);
}

export default App;
