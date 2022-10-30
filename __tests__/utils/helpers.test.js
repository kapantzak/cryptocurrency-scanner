import { trimString } from "../../utils/helpers";

describe("trimString()", () => {
  describe("with an empty string", () => {
    it("returns an empty string", () => {
      expect(trimString("")).toBe("");
    });
  });

  describe("with a string of less characters than the default limit (20)", () => {
    it("returns the same string", () => {
      expect(trimString("This is a text")).toBe("This is a text");
    });
  });

  describe("with a string of more characters than the default limit (20)", () => {
    it("returns the same string", () => {
      expect(trimString("This is a text that should be trimmed")).toBe(
        "This is a text that..."
      );
    });
  });
});
