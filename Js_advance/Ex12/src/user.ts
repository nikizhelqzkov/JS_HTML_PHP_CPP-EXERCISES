import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { IUser } from "./interfaces/user";

@customElement("user-component")
export class User extends LitElement {
  static styles = css`
    :host {
    }

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

  //   private handleClick(e:Event){
  //       console.log(e.target);
  //   }
  handleClick = () => {
    console.log(this.user.userId);
    const event = new CustomEvent("selectUser", { bubbles: true, composed: true ,detail: this.user});
    this.dispatchEvent(event);
  };
  render() {
    return html`<ul class="user-list" @click=${this.handleClick}>
      <li>${this.user.userId}</li>
      <li>${this.user.name}</li>
      <li>${this.user.username}</li>
      <li>${this.user.email}</li>
    </ul>`;
  }
}
