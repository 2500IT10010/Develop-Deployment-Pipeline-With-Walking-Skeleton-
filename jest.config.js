const { login } = require("./login");

describe("Login Function", () => {
    test("returns true for valid credentials", () => {
        expect(login("admin", "123")).toBe(true);
    });

    test("returns false for invalid username", () => {
        expect(login("user", "123")).toBe(false);
    });

    test("returns false for invalid password", () => {
        expect(login("admin", "wrong")).toBe(false);
    });

    test("returns false for both invalid username and password", () => {
        expect(login("user", "wrong")).toBe(false);
    });
});
