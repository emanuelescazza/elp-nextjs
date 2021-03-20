const BASE_URL = process.env.NEXT_PUBLIC_CMS_URL || 'http://localhost:1337';

export async function fetchApi(route, params) {
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

export async function postApi(route, body) {
  let path = `${BASE_URL}/${route}`;
  const res = await fetch(path, {
    method: "POST",
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
  return res.json();
}

export const limit = 10;
