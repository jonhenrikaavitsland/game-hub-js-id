export function getId() {
  // getting querystring
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("id");
  return id;
}
