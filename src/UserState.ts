import { ClassState } from "./ClassState";

export interface IUser {
  avatar: string;
  firstName: string;
  lastName: string;
  fullName: string;
  location: string;
}

export class UserState extends ClassState<IUser> {
  private avatar: string = "";
  private firstName: string = "";
  private lastName: string = "";
  private location: string = "";

  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  get(): IUser {
    return {
      avatar: this.avatar,
      firstName: this.firstName,
      lastName: this.lastName,
      fullName: this.fullName,
      location: this.location,
    };
  }

  setAvatar = (newLink: string): this => {
    this.avatar = newLink;
    return this;
  };

  setFirstName = (newFirstName: string): this => {
    this.firstName = newFirstName;
    return this;
  };

  setLastName = (newLastName: string): this => {
    this.lastName = newLastName;
    return this;
  };
}

export class ClassHookUtil {
  static fromInputEvent(handler: (arg: string) => ClassState<any>) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log("set");
      handler(e.currentTarget.value).set();
    };
  }
}
