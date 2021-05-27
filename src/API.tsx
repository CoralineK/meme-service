export const getMemes = async () => {
  const TO_URL = `http://localhost:3500/memes`;
  const response = await fetch(TO_URL);
  const data = await response.json();
  return data;
};
