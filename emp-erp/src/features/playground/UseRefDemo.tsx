import { useRef } from "react";

function UseRefTest() {
  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <input ref={inputRef} />

      <br />
      <br />

      <button ref={buttonRef} onClick={() => inputRef.current?.focus()}>
        Focus input
      </button>
         <br />
      <br />
      <button
        onClick={() =>
          buttonRef.current &&
          (buttonRef.current.style.backgroundColor = "lightblue")
        }
      >
        Change color
      </button>
    </>
  );
}

export default UseRefTest;
