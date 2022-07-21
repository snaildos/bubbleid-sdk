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

export class InnaticalID {
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
