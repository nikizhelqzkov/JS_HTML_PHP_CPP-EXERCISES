import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { IUser } from "./interfaces/user";

@customElement("user-component")
export class User extends LitElement {
  static styles = css`
    .user-list {
      list-style-type: none;
      border: 1px solid #000;
      padding: 1rem;
    }
    .user-list:hover {
      background-color: #fdfdea;
      cursor: pointer;
    }
  `;

  @property()
  user!: IUser;

  handleClick = () => {
    const event = new CustomEvent("selectUser", { bubbles: true, composed: true ,detail: this.user});
    this.dispatchEvent(event);
  };
  render() {
    return html`<ul class="user-list" @click=${this.handleClick}>
      <li>User id: ${this.user.id}</li>
      <li>Name: ${this.user.name}</li>
      <li>Username: ${this.user.username}</li>
      <li>Email: ${this.user.email}</li>
    </ul>`;
  }
}
