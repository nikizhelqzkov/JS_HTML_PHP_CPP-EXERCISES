import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { IUser, IUserDetail } from "./interfaces/user";

@customElement("user-details")
export class UserDetails extends LitElement {
  static styles = css`
    :host {
    }
    .user-detail__container ul{
      list-style-type: none;
      background:#fafade;
      padding: 1rem;
    }
    h4{ 
      text-align: center;
    }
    }
  `;
  // constructor() {
  //   super();
  //
  // }

  @property()
  user!: IUserDetail;

  render() {
    if (this.user) {
      return html`<div class="user-detail__container">
        <h4>Basic Info</h4>
        <ul class="user-detail__basic">
          <li>User id: ${this.user.id}</li>
          <li>Name: ${this.user.name}</li>
          <li>Username: ${this.user.username}</li>
          <li>Email: ${this.user.email}</li>
          <li>Phone: ${this.user.phone}</li>
          <li>Website: ${this.user.website}</li>
        </ul>
        <h4>Address:</h4>
        <ul>
          <li>Street: ${this.user.address.street}</li>
          <li>Suite: ${this.user.address.suite}</li>
          <li>City: ${this.user.address.city}</li>
          <li>Zipcode: ${this.user.address.zipcode}</li>
          <li>Street: ${this.user.address.street}</li>
          <li>
            Coordinates: lat: ${this.user.address.geo.lat}, lng:
            ${this.user.address.geo.lng}
          </li>
        </ul>
        <h4>Company:</h4>
        <ul>
          <li>Name: ${this.user.company.name}</li>
          <li>CatchPhrase: ${this.user.company.catchPhrase}</li>
          <li>Bs: ${this.user.company.bs}</li>
        </ul>
      </div>`;
    } else {
      return html`<h4>Not selected User</h4>`;
    }
  }
}
