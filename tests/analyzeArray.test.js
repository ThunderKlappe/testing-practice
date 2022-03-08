/* eslint-disable no-undef */
import analyzeArray from "../functions/analyzeArray";

test("gives array length", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
});
test("gives array length 2", () => {
    expect(analyzeArray([4, 5, 10, 3]).length).toBe(4);
});
test("gives array average", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
});
test("gives array average 2", () => {
    expect(analyzeArray([4, 5, 10, 3]).average).toBe(5.5);
});
test("gives array min", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
});
test("gives array min 2", () => {
    expect(analyzeArray([4, 5, 10, 3]).min).toBe(3);
});
test("gives array max", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
});
test("gives array max 2", () => {
    expect(analyzeArray([4, 5, 10, 3]).max).toBe(10);
});
test("returns error when elements are not all numbers", () => {
    expect(analyzeArray([4, "apple", 10, 3])).toBe("Error!");
});
