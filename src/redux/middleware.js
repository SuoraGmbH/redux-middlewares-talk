const baseUrl = "http://localhost:3001";

export const middleware = (storeAPI) => (next) => async (action) => {
  if (!action.apiPayload) {
    return next(action);
  }

  let body;

  if (action.apiPayload.body) {
    body = JSON.stringify(action.apiPayload.body);
  }

  const response = await fetch(`${baseUrl}${action.apiPayload.url}`, {
    method: action.apiPayload.method || "GET",
    headers: { "Content-Type": "application/json" },
    body,
  });
  const data = await response.json();

  return next({
    ...action,
    payload: data,
  });
};
