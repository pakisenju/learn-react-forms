import React, { useState } from "react";

function Calculator() {
	const [input, setInput] = useState("");

	const handleButtonClick = (value) => {
		setInput(input + value);
	};

	const clearInput = () => {
		setInput("");
	};

	const calculateResult = () => {
		try {
			setInput(eval(input).toString());
		} catch (error) {
			setInput("Error");
		}
	};

	return (
		<div className="calculator">
			<div className="display">
				<input type="text" value={input} placeholder="0" readOnly />
			</div>
			<div className="buttons">
				<button className="btn" onClick={() => handleButtonClick("1")}>
					1
				</button>
				<button className="btn" onClick={() => handleButtonClick("2")}>
					2
				</button>
				<button className="btn" onClick={() => handleButtonClick("3")}>
					3
				</button>
				<button className="btn" onClick={() => handleButtonClick("+")}>
					+
				</button>
				<button className="btn" onClick={() => handleButtonClick("4")}>
					4
				</button>
				<button className="btn" onClick={() => handleButtonClick("5")}>
					5
				</button>
				<button className="btn" onClick={() => handleButtonClick("6")}>
					6
				</button>
				<button className="btn" onClick={() => handleButtonClick("-")}>
					-
				</button>
				<button className="btn" onClick={() => handleButtonClick("7")}>
					7
				</button>
				<button className="btn" onClick={() => handleButtonClick("8")}>
					8
				</button>
				<button className="btn" onClick={() => handleButtonClick("9")}>
					9
				</button>
				<button className="btn" onClick={() => handleButtonClick("*")}>
					*
				</button>
				<button className="btn" onClick={() => handleButtonClick("0")}>
					0
				</button>
				<button className="btn" onClick={() => handleButtonClick("/")}>
					/
				</button>
				<button className="btn" onClick={clearInput}>
					C
				</button>
				<button className="btn" onClick={calculateResult}>
					=
				</button>
			</div>
		</div>
	);
}

export default Calculator;
