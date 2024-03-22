type InputProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input({ onChange }: InputProps) {
  return (
    <>
      <h1>Digite o seu primeiro nome:</h1>
      <input name="firstName" onChange={ onChange } />
    </>
  );
}

export default Input;
