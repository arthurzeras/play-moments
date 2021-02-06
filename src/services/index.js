async function fetchObjects() {
  const response = await fetch(process.env.VUE_APP_FUNCTION_URL);

  if (!response.ok) {
    throw await response.json();
  }

  return response.json();
}

export { fetchObjects };
