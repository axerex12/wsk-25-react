// filepath: c:\Users\axela\Desktop\vscodeprojects\wsk_25_react\src\utils\fetchData.js
export const fetchData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};
