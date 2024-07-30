import { useState } from "react";

function SearchBar() {
	const [count, setCount] = useState(0)

	const tambah = () => {
		setCount(count + 1)
	}

	const kurang = () => {
		setCount(count - 1)
	}

	return (
		<div className="crement">
			<button className="btn btn-sm btn-secondary" onClick={kurang}>Kurang</button>
			<span>{count}</span>
			<button className="btn btn-sm btn-primary" onClick={tambah}>Tambah</button>
		</div>
	)
}

export default SearchBar;