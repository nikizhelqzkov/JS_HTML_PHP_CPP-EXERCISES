import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./user";
import { IUser } from "./interfaces/user";

@customElement("user-list")
export class UserList extends LitElement {
  constructor() {
    super();

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        this.users = data;
      });
  }

  @property()
  users: IUser[] = [];

  render() {
    return html`
      ${this.users.map((user) => {
        return html`<user-component
         .user=${user}
        ></user-component>`;
      })}
    `;
  }
}
