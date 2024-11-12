export const callApi = async (route, method, body, errorMessage) => {
  const {
    public: { apiBaseUrl },
  } = useRuntimeConfig();
  try {
    const options = {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    if (method !== "GET" && body) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(`${apiBaseUrl}${route}`, options);

    if (!response.ok) {
      throw new Error(`${errorMessage}: (Status: ${response.status})`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error in API call to ${route}:`, error);
    alert(`Failed to call API route ${route}`);
    return null;
  }
};
