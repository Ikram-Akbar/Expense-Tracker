import { useState } from "react";
function App() {
  const [form, setForm] = useState({
    amount: 0,
    description: "",
    date: "",
  });
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/transaction", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "content-type":"application/json",
      }
    });
    const data = await res.json()
    console.log(data);
  };
  const handleInput = (e) => {
    // console.log(e.target.value);
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
