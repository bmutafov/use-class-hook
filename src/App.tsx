import { ItemsState } from "./ItemsState";
import { useClassState } from "./useClassState";
import { ClassHookUtil, UserState } from "./UserState";

function App() {
  const state = useClassState(new ItemsState());

  const add = () => {
    const nextItem = state.nextAlphabetic();
    state.addItem(nextItem).approveItem(nextItem).set();
  };

  return (
    <>
      Items: {state.get().items.join(", ")} <hr />
      Items: {state.get().approvedItems.join(", ")} <hr />
      Items: {state.get().deniedItems.join(", ")} <hr />
      <button onClick={add}>Add</button>
    </>
  );
}

export default App;
