import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    faCar: "",
    isvisible: true,
    mode: ""
  });

  const submithandler = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const changeHandler = (event) => {
    const { type, name, value, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };
  return (
    <div className="flex h-screen  justify-center bg-gradient-to-tr from-blue-300  to-cyan-300">
      <form
        onSubmit={submithandler}
        className="flex flex-col space-y-1 rounded-md text-2xl"
      >
        <label>First</label>
        <input
          type="text"
          placeholder="first name"
          onChange={changeHandler}
          name="firstName"
        />
        <label>Last</label>
        <input
          type="text"
          placeholder="last name"
          onChange={changeHandler}
          name="lastName"
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="email"
          onChange={changeHandler}
          name="email"
        />
        <div className="flex justify-between">
          <label htmlFor="isvisible">is form visible ?</label>
          <input
            name="isvisible"
            onChange={changeHandler}
            checked={formData.isvisible}
            id="isvisible"
            type="checkbox"
          />
        </div>
        <select
          name="faCar"
          id="faCar"
          onChange={changeHandler}
          value={formData.faCar}
        >
          <option value="scorpio">scorpio</option>
          <option value="fortuner">fortuner</option>
          <option value="bmw">bmw</option>
          <option value="bluelace">Blucelace</option>
        </select>
        <button className="m-10 border border-black" type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default Form;
