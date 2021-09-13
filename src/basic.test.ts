import { addNumbers, checkForAndroidPlatform } from "./basic";

describe("equality check test", () => {
	it("should add 1 + 2 to 3", () => {
		const sum = addNumbers(1, 2);
		expect(sum).toBe(3);
	});

	it("should result to equal on comparing empty object", () => {
		const obj = {};
		expect(obj).toEqual({});
	});
});

describe("truthy and falsey check", () => {
	it("should evaluate to true", () => {
		const isLoggedIn = true;
		expect(isLoggedIn).toBeTruthy();
	});

	it("should evaluate to false", () => {
		const obj = null;
		expect(obj).not.toBeTruthy();
	});

	it("should evaluate to null", () => {
		const name = null;
		expect(name).toBeNull();
	});

	it("should evaluate to null", () => {
		let age;
		expect(age).toBeUndefined();
	});
});

describe("relational operator check", () => {
	it("shoul be greater", () => {
		expect(3).toBeGreaterThan(0);
	});

	it("should be less than or equal", () => {
		expect(2).toBeLessThanOrEqual(2);
	});
});

describe("close value check", () => {
	it("should evaluate to true", () => {
		expect(3).toBeCloseTo(2.99999);
	});
});

describe("strings checks", () => {
	it("should match the regex exp", () => {
		expect("shaun peiling").toMatch(/^shaun/);
	});
});

describe("array checks", () => {
	it("should have eggs in shopping list", () => {
		const shoppingList = ["eggs", "breads", "milks"];
		expect(shoppingList).toContain("eggs");
	});
});

describe("checks for exceptions", () => {
	it("should raise an exception on invalid platform", () => {
		expect(() => checkForAndroidPlatform()).toThrow("Not a valid platform");
	});
});
