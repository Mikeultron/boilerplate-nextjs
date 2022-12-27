import { useEffect, useState } from "react";

const useSampleHooks = () => {
	const [state, setState] = useState(0);

	useEffect(() => {
		setState(1);
	}, []);

	return { state };
};

export default useSampleHooks;
