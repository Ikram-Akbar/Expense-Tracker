import { useState } from "react";
function App() {
  const [form, setForm] = useState({
    amount: 0,
    description: "",
    date: "",
  });
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("clicked");
  };
  const handleInput = (e) => {
    console.log(e.target.value);
    setForm({ ...form, amount: e.target.value });
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          type="number"
          value={form.amount}
          name="transaction"
          onChange={handleInput}
          placeholder="Enter your transaction"
        ></input>
        <input
          type="text"
          value={form.description}
          name="description"
          placeholder="Enter your description"
        ></input>
        <input type="date" value={form.date} name="date"></input>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;
