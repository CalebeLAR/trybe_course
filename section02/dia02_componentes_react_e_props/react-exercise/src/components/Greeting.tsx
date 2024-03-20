type GreetingProps = {
  person: {
    firstName: string;
    lastName: string;
  };
};

function Greeting({ person }: GreetingProps) {
  return (
    <h1 className='greeting'>
      Olá {`${person.firstName} ${person.lastName}`}
      <img src='https://i.imgur.com/rqvLd3q.png' alt='' />
    </h1>
  );
}

export default Greeting;
