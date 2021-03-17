export async function fetchApi(route, params) {
  const BASE_URL = process.env.BASE_URL || 'http://localhost:1337';
  let path = `${BASE_URL}/${route}`;
  if (params) {
    const arrayParams = [];
    for (let key of Object.keys(params)) {
      arrayParams.push(`${key}=${params[key]}`);
    }
    path += `?${arrayParams.join('&')}`;
  }
  const res = await fetch(path);
  return res.json();
}

export const limit = 10;