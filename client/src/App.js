import { useState } from "react";

function App() {
  const [form, setform] = useState({
    amount:0,
    description:"",
    date:"",
  })
  function handleSubmit(e) {
    e.preventDefault()
    // console.log("form:- ", form);
    const res =  fetch('http://localhost:4000/transaction',{
      method:"POST",
      body:form,
    })
    console.log(res);
  }

  function handleInput(e) {
    console.log(e.target.value);
    setform({ ...form, [e.target.name]:e.target.value })
  }
  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <input type="number" name="amount" onChange={handleInput} value ={form.amount}  placeholder="Enter transaction amount"/>
        <input type="text" name="description" onChange={handleInput} value ={form.description} placeholder="Enter transaction details"/>
        <input type="date" name="date" onChange={handleInput} value ={form.date} placeholder="Enter transaction amount"/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
