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
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          type="number"
          placeholder="Enter your transaction"
          name="amount"
          value={form.amount}
          onChange={handleInput}
        ></input>
        <input
          type="text"
          name="description"
          placeholder="Enter your description"
          value={form.description}
          onChange={handleInput}
        ></input>
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleInput}
        ></input>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;
