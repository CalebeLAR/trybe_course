function LuckyNumbers() {
  function luckyNumber() {
    return Math.floor(Math.random() * 60 + 1);
  }

  const show = true;

  return (
    <>
      <h2 className='subtitle'>Seus números da sorte da Mega-Sena são:</h2>
      {show ? (
        <ul>
          <li>{luckyNumber()}</li>
          <li>{luckyNumber()}</li>
          <li>{luckyNumber()}</li>
          <li>{luckyNumber()}</li>
          <li>{luckyNumber()}</li>
          <li>{luckyNumber()}</li>
        </ul>
      ) : (
        <h3>Não há números para serem exibidos 😢</h3>
      )}
    </>
  );
}

export default LuckyNumbers;
