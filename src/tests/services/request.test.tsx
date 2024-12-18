import { describe, it, expect, vi, afterEach } from "vitest";
import { getRequest } from "../../services/requests";

describe("getRequest", async () => {
  const mockFn = vi.fn().mockImplementation(await getRequest("products"));
  afterEach(() => {
    vi.clearAllMocks(); // Reset mocks after each test
  });

  it("should return data when fetch is successful", async () => {
    console.log(mockFn.getMockImplementation);
  });
});
