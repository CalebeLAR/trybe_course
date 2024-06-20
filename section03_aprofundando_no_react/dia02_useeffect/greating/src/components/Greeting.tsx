type GreetingProps = {
  name: string;
};

let registerNumber = 0;

function Greeting({ name }: GreetingProps) {
  registerNumber = registerNumber + 1;

  return (
    <div className="greeting-card">
      <h2>{`Meu nome é ${name}!`}</h2>
      <p>{`Meu número de registro é ${registerNumber}`}</p>
    </div>
  );
}

export default Greeting;
