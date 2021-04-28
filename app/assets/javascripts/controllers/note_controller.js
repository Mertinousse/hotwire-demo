import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["removeButton"];

  connect() {
  }

  hideRemoveButton() {
    this.removeButtonTarget.style.display = 'none';
  }

  showRemoveButton() {
    this.removeButtonTarget.style.display = 'block';
  }
}
