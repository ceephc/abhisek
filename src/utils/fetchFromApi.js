let BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export async function fetchFromApi(url) {
  let res = await fetch(`${BASE_URL}/${url}`, options);
  let data = await res.json();
  return data;
}
