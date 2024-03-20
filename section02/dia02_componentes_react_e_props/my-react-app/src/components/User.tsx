const user = {
  name: 'name',
  lastName: 'lastName',
};

function User() {
  return <span>{`${user.name} ${user.lastName}`}</span>;
}

export default User;
