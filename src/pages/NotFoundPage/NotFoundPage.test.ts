import { describe, expect, it } from "vitest";

import { BACKGROUND_IMAGE_URL, ASTRONAUT_IMAGE_URL } from "./styles";

describe("NotFoundPage constants", () => {
  it("BACKGROUND_IMAGE_URL points to the expected public asset", () => {
    expect(BACKGROUND_IMAGE_URL).toBe("/notFound/bg.webp");
  });

  it("ASTRONAUT_IMAGE_URL points to the expected public asset", () => {
    expect(ASTRONAUT_IMAGE_URL).toBe("/notFound/astronaut.webp");
  });
});
