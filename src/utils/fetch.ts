const apiFetch = async () => {
  try {
    const response = await fetch("https://catfact.ninja/facts");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
};

export { apiFetch };
