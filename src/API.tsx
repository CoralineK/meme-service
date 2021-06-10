export const getMemes = async () => {
  const URL = `http://localhost:3500/memes`;
  const response = await fetch(URL);
  const data = await response.json();
  return data.reverse();
};

export const postMeme = async (data: any) => {
  const URL = `http://localhost:3500/memes`;
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response;
  } catch (error) {
    alert(`Error: ${error}`);
  } finally {
    
  }
};
