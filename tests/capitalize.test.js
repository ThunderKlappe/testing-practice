/* eslint-disable no-undef */
import capitalize from "../functions/capitalize";

test("Capitalizes first letter", () => {
    expect(capitalize("word")).toBe("Word");
});
