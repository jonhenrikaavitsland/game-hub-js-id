export function createErrorMessage(parent1, error, parent2) {
  parent1.innerHTML = `<div class="error">
  <p>Oops! An error occurred, ${error}</p>
  </div>`;
  parent2.innerHTML = `<div class="error">
  <p>Oops! An error occurred, ${error}</p>
  </div>`;
}
