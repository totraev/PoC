import { createContainer } from "@/core/createContainer";

interface HeaderProps {
  message: string;
  onChange: (value: string) => void;
}

export function Header({ message, onChange }: HeaderProps) {
  function handleChange(e) {
    onChange?.(e.target.value);
  }

  return (
    <div>
      Hello, {message}
      <input name="search" onChange={handleChange} />
    </div>
  );
}

export default createContainer(
  (state) => ({ message: state.message }),
  (ee) => ({
    onChange: (...args) => ee.emit("INIT_APP", ...args),
  })
);
