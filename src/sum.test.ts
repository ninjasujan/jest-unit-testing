import { addNumbers } from "./sum";

it("should add 1 + 2 to 3", () => {
	const sum = addNumbers(1, 2);
	expect(sum).toBe(3);
});
