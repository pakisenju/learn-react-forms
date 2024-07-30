import { useState } from "react";
import "./Object.css";

function Object() {
	const [object, setObject] = useState("teal");

	const handleWarna = (event) => {
		setObject(event.target.value);
	};

	return (
		<div
			id="target-DOM"
			style={{ backgroundColor: object }}
			onChange={handleWarna}
		>
			<h1>UBAH OBJEK INI SESUKANYA</h1>
			<p>isi value pada input untuk mengubah warna</p>
			<div className="form-control w-full max-w-xs">
				<label className="label">
					<span className="label-text">Value on CSS</span>
					<span className="label-text-alt">example: teal / #eaea / rgb / hsl </span>
				</label>
				<input
					type="text"
					placeholder="Type here"
					className="input input-bordered input-xs w-full max-w-xs input-info"
                    onChange={handleWarna}
				/>
			</div>
		</div>
	);
}

export default Object;
