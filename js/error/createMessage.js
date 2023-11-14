export function createErrorMessage(parent1, parent2, error) {
  parent1.innerHTML = `<div>
  <p>An error occurred, ${error}</p>
  </div>`;
  parent2.innerHTML = `<div>
  <p>An error occurred, ${error}</p>
  </div>`;
}
