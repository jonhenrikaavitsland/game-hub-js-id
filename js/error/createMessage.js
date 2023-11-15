export function createErrorMessage(parent1, error, parent2) {
  parent1.innerHTML = `<div>
  <p>An error occurred, ${error}</p>
  </div>`;
  parent2.innerHTML = `<div>
  <p>An error occurred, ${error}</p>
  </div>`;
}
