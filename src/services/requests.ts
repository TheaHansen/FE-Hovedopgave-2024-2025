const apiUrl = import.meta.env.VITE_API_URL;

//Together
async function getRequest(endpoint: string): Promise<any> {
  if (!apiUrl) {
    console.log("API URL is not defined");
    return null;
  }
  try {
    const response = await fetch(`${apiUrl}${endpoint}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

export { getRequest, apiUrl };
