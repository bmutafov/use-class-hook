import { ClassState } from "./ClassState";

export interface IItems {
  items: string[];
  approvedItems: string[];
  deniedItems: string[];
}

export class ItemsState extends ClassState<IItems> {
  private items: string[] = ["a", "b", "c", "d"];
  private approvedItems: string[] = [];
  private deniedItems: string[] = [];

  get(): IItems {
    return {
      items: this.items,
      approvedItems: this.approvedItems,
      deniedItems: this.deniedItems,
    };
  }

  addItem(item: string): this {
    this.items.push(item);
    return this;
  }

  editItem(index: number, newVal: string): this {
    this.items[index] = newVal;
    return this;
  }

  approveItem(item: string): this {
    this.approvedItems.push(item);
    return this;
  }

  nextAlphabetic(): string {
    const last = this.items.at(-1) || "a";
    const lastCharCode = last.charCodeAt(0);
    const next = String.fromCharCode(lastCharCode + 1);
    return next;
  }
}

export class ClassHookUtil {
  static fromInputEvent(handler: (arg: string) => ClassState<any>) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log("set");
      handler(e.currentTarget.value).set();
    };
  }
}
