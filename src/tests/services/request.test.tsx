import { it, expect, afterEach, vi } from "vitest";
import { getRequest, apiUrl } from "../../services/requests";
import mockProducts from "../mockData/product.mock";

afterEach(() => {
  vi.clearAllMocks();
});

it("should return data when fetch is successful", async () => {
  global.fetch = vi.fn().mockResolvedValueOnce({
    json: vi.fn().mockResolvedValueOnce(mockProducts),
  });

  const data = await getRequest("products");
  expect(fetch).toHaveBeenCalledWith(`${apiUrl}products`);
  expect(data).toEqual(mockProducts);
});

it("should return null with wrong endpoint", async () => {
  global.fetch = vi.fn().mockResolvedValueOnce({
    ok: false,
    status: 404,
    statusText: "Not Found",
  });
  const data = await getRequest("wrongendpoint");
  expect(fetch).toHaveBeenCalledWith(`${apiUrl}wrongendpoint`);
  expect(data).toEqual(null);

  const fetchCall = (fetch as any).mock.results[0].value;
  await fetchCall.then((response: Response) => {
    expect(response.status).toBe(404);
    expect(response.statusText).toBe("Not Found");
  });
});
