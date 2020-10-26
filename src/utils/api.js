const API_ID = process.env.REACT_APP_API_ID;
const APP_KEY = process.env.REACT_APP_APP_KEY;

export function fetchRecipes(food = "") {
  food = food.trim();

  return fetch(
    `https://api.edamam.com/search?q=${food}&app_id=${"7758f4fd"}&app_key=${"83edb18be7c69ac0a1363c2af49456ed"}`
  )
    .then((res) => res.json())
    .then(({ hits }) => hits.map(({ recipe }) => recipe));
}
