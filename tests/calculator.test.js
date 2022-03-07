/* eslint-disable no-undef */
import calculator from "../functions/calculator";

test("adds", () => {
    expect(calculator.add(4, 6)).toBe(10);
});

test("subtracts", () => {
    expect(calculator.subtract(4, 6)).toBe(-2);
});

test("multiplies", () => {
    expect(calculator.multiply(4, 6)).toBe(24);
});

test("divides", () => {
    expect(calculator.divide(10, 2)).toBe(5);
});
test("both numbers", () => {
    expect(calculator.bothNumbers("apple", 3)).toBe(false);
});

test("not numbers arithmetic", () => {
    expect(calculator.add("apple", 3)).toBe("Error");
    expect(calculator.subtract("apple", 3)).toBe("Error");
    expect(calculator.multiply("apple", 3)).toBe("Error");
    expect(calculator.divide("apple", 3)).toBe("Error");
});

test("divide by zero is Error", () => {
    expect(calculator.divide(5, 0)).toBe("Error");
});
