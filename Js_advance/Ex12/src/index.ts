import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./userList";
import "./userDetails";
import { IUser } from "./interfaces/user";

@customElement("app-component")
export class AppC extends LitElement {
  static styles = css`
    :host {
    }
    header {
      text-align: center;
    }
    .wrapper {
      display: flex;
      gap: 1rem;
    }
    .wrapper user-list {
      flex: 1;
    }
    .wrapper user-details {
      flex: 1;
    }
  `;
  @property()
  selectedUser: IUser | null = null;

  headerTemplate() {
    return html`<header>User list</header>`;
  }

  mainTemplate() {
    return html`
      <div class="wrapper">
        <user-list
          @selectUser=${(e: CustomEvent) => (this.selectedUser = e.detail)}
        ></user-list>
        <user-details .user=${this.selectedUser}></user-details>
      </div>
    `;
  }

  render() {
    return html`${this.headerTemplate()} ${this.mainTemplate()}`;
  }
}

const app = new AppC();

document.body.appendChild(app);
