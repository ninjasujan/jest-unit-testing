let list: string[] = [];

beforeAll(() => {
	console.log("[Before All]");
	list = ["bread", "milk", "jam", "eggs", "apple"];
});

beforeEach(() => {
	console.log("[Before Each]");
	list = ["bread", "milk", "jam", "eggs", "apple"];
});

afterEach(() => {
	console.log("[After Each]");
	list = ["bread", "milk", "jam", "eggs", "apple"];
});

afterAll(() => {
	console.log("[After All]");
	list = ["bread", "milk", "jam", "eggs", "apple"];
});

describe("setting and trearing test", () => {
	it("shopping list should contain apple", () => {
		expect(list).toContain("apple");
	});

	it("add new item to shopping list", () => {
		list.push("fish");
		expect(list).toContain("fish");
	});

	it("should contain only 3", () => {
		expect(list.length).toBe(5);
	});
});

// it.only() only runs the particular tests
