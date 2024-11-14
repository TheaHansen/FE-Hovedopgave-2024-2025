const apiUrl = process.env.REACT_APP_API_URL;

//Together
function getRequest(endpoint: string): void {
  if (!apiUrl) {
    console.log("API URL is not defined");
    return;
  }
  fetch(`${apiUrl}${endpoint}`)
    .then((response) => response.json())
    .then((res) => console.log(res))
    .catch((error) => console.error("Error fetching data:", error));
}

export { getRequest };
