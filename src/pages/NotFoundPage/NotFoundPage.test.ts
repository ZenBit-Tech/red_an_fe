import { describe, expect, it } from "vitest";

import {
  NOT_FOUND_BG_URL,
  NOT_FOUND_ASTRONAUT_URL,
  NOT_FOUND_DECORATIVE_FONT_SIZE_PX,
  NOT_FOUND_DECORATIVE_FONT_SIZE_TABLET_PX,
  NOT_FOUND_DECORATIVE_FONT_SIZE_MOBILE_PX,
} from "./constants";

describe("NotFoundPage constants", () => {
  it("NOT_FOUND_BG_URL points to the expected public asset", () => {
    expect(NOT_FOUND_BG_URL).toBe("/notFound/bg.png");
  });

  it("NOT_FOUND_ASTRONAUT_URL points to the expected public asset", () => {
    expect(NOT_FOUND_ASTRONAUT_URL).toBe("/notFound/astronaut.png");
  });

  it("NOT_FOUND_DECORATIVE_FONT_SIZE_PX is a positive number", () => {
    expect(typeof NOT_FOUND_DECORATIVE_FONT_SIZE_PX).toBe("number");
    expect(NOT_FOUND_DECORATIVE_FONT_SIZE_PX).toBeGreaterThan(0);
  });

  it("NOT_FOUND_DECORATIVE_FONT_SIZE_TABLET_PX is a positive number smaller than desktop", () => {
    expect(typeof NOT_FOUND_DECORATIVE_FONT_SIZE_TABLET_PX).toBe("number");
    expect(NOT_FOUND_DECORATIVE_FONT_SIZE_TABLET_PX).toBeGreaterThan(0);
    expect(NOT_FOUND_DECORATIVE_FONT_SIZE_TABLET_PX).toBeLessThan(
      NOT_FOUND_DECORATIVE_FONT_SIZE_PX,
    );
  });

  it("NOT_FOUND_DECORATIVE_FONT_SIZE_MOBILE_PX is a positive number smaller than tablet", () => {
    expect(typeof NOT_FOUND_DECORATIVE_FONT_SIZE_MOBILE_PX).toBe("number");
    expect(NOT_FOUND_DECORATIVE_FONT_SIZE_MOBILE_PX).toBeGreaterThan(0);
    expect(NOT_FOUND_DECORATIVE_FONT_SIZE_MOBILE_PX).toBeLessThan(
      NOT_FOUND_DECORATIVE_FONT_SIZE_TABLET_PX,
    );
  });
});
