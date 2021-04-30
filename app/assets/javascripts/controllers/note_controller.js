import { Controller } from 'stimulus';

export default class extends Controller {
  static targets = ['text'];

  connect() {
    setInterval(() => this.changeColor(), 500);
  }

  changeColor() {
    this.textTarget.style.color = '#' + Math.floor(Math.random()*16777215).toString(16);
  }
}
