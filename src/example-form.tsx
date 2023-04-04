import { useState } from "react";

export function App() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
  });

  function handleInputChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const fieldName = event.currentTarget.name;

    setFormState({
      ...formState,
      [fieldName]: event.currentTarget.value,
    });
  }

  const [agreed, setAgreed] = useState(false);

  // const isFirstNameValid = useMemo(() => {
  //   return formState.firstName.length < 10;
  // }, [formState.firstName]);

  return (
    <div>
      <h1>Hallo Welt</h1>

      <input
        name="firstName"
        onChange={handleInputChange}
      />

      <input
        type="checkbox"
        onChange={() => setAgreed(!agreed)}
        checked={agreed}
      />

      {agreed ? "yes" : "no"}

      <button onClick={() => setAgreed(false)}>
        Reset!
      </button>

      <input name="lastName" onChange={handleInputChange} />
    </div>
  );
}
