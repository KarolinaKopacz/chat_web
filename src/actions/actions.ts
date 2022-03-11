export const getData = () => {
  return fetch("https://run.mocky.io/v3/a3edd15c-ca50-46d5-99e5-59b71a80c0d8", {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(async (response) => {
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  });
};
