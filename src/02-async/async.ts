import axios from "axios";

const jsonURL = "https://jsonplaceholder.typicode.com";

export const fetchData = async (id: number) => {
	const result = await axios.get(`${jsonURL}/todos/${id}`);
	return result;
};
