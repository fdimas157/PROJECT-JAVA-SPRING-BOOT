export async function api(path, method = "GET", body) {
  const response = await fetch(`https://jsonplaceholder.typicode.com${path}`, {
    method,
    body: body && JSON.stringify(body),
  });
  const data = await response.json();
  return data;
}
