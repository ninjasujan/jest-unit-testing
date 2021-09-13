import { fetchData } from "./async";

describe("checks for async call", () => {
	it("should match the todo id with given id", async () => {
		let id = 1;
		const result = await fetchData(id);
		expect(result.data.id).toBe(id);
	});
});
