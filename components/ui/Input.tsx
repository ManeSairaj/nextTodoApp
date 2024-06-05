import Button from "./Button";

interface inputProps {
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
}

const Input = ({ name, type, placeholder, value }: inputProps) => {
  return (
      <input
        className="w-full px-[1.23rem] py-[0.75rem] border border-gray-200  text-black font-semibold text-base rounded-l-full outline-none tracking-wider" 
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
      />
  );
};

export default Input;
