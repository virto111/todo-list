const todoTemplate = ({ id, description }) => `
<div class="todo-item" data-item="todo-item" data-id="${id}">
  <div class="dispay-section">
  <span>${description}</span>
  <button class="edit" data-button="edit">Edit</button>
  <button class="delete" data-button="delete">Delete</button>
</div>
<div class="edit-section">
  <input class="new-description" type="text">
  <button class="save" data-button="save">Save</button>
  <button class="discard" data-button="discard">Disacard</button>
  </div>
</div>
`;

export { todoTemplate };
