import axios from "axios";

const client = axios.create({
  baseURL: "https://api.snaildos.com",
});

export interface UserResponse {
  id: string;
  username?: string;
  name?: string;
  email?: string;
  avatar?: string;
}

export class BubbleID {
  private appID: string;
  private token: string;

  constructor(appID: string, token: string) {
    this.appID = appID;
    this.token = token;
  }

  async findUser(
    query: { id: string } | { email: string } | { username: string }
  ) {
    return (
      await client.post<UserResponse>("/users/login", {
        token: this.token,
        ...query,
      })
    ).data;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async createUser(email: string, name: string, pass: string, captcha: string) {
    return (
      client.post('/users/create', {
        email: email,
        name: name,
        pass: pass,
        captcha: captcha
      })
      .then(function (response) {
        console.log(response);
      })
    )
  }

  async getUserFromToken(token: string) {
    return (
      await client.get<UserResponse>("/users/@me", {
        headers: {
          authorization: token,
        },
      })
    ).data;
  }

  createURL(callback: string) {
    return (
      `https://login.snaildos.com/?redir=` +
      new URLSearchParams({ callback, id: this.appID })    )
  }
}
