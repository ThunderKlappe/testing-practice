/* eslint-disable no-undef */
import caesarCipher from "../functions/caesarCipher";

test("basic words", () => {
    expect(caesarCipher("abcde")).toBe("bcdef");
});
test("works with upper case", () => {
    expect(caesarCipher("AbCdE")).toBe("BcDeF");
});
test("works with z", () => {
    expect(caesarCipher("wxyz")).toBe("xyza");
});
test("works with Z", () => {
    expect(caesarCipher("WXYZ")).toBe("XYZA");
});
test("works with spaces", () => {
    expect(caesarCipher("A b c D e Z")).toBe("B c d E f A");
});
test("works with punctuation", () => {
    expect(caesarCipher("A, B, C, d, e, f, Z")).toBe("B, C, D, e, f, g, A");
});
