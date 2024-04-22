export const getDevelopmentDetails = async () => {
  const response = await fetch('https://run.mocky.io/v3/32bc605c-45b7-49f9-8a1a-ee8aa84d2289');
  if (!response.ok) {
    throw new Error();
  }
  const data = await response.json();
  return data;
};
