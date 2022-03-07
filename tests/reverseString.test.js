/* eslint-disable no-undef */
import reverseString from "../functions/reverseString";

test("reverses string", () => {
    expect(reverseString("string")).toBe("gnirts");
});
test("works with capitals", () => {
    expect(reverseString("String")).toBe("gnirtS");
});
