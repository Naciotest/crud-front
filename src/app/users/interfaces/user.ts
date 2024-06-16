export interface User {
  id?: number;
  name: string;
  email: string;
  country: string;
  state: State;
}

export enum State {
  ACTIVE,
  INACTIVE,
  PENDING,
  BLOCKED,
  New
}
