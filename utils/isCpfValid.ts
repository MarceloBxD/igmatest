function calculateFirstDigit(cpfParcial: number[]): number {
  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += cpfParcial[i] * (10 - i);
  }

  const remainder = soma % 11;
  const firstDigit = remainder < 2 ? 0 : 11 - remainder;
  return firstDigit;
}

function calculateSecondDigit(cpfComPrimeiroDigito: number[]): number {
  let soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += cpfComPrimeiroDigito[i] * (11 - i);
  }

  const remainder = soma % 11;
  const secondDigit = remainder < 2 ? 0 : 11 - remainder;
  return secondDigit;
}

export function isCpfValid(cpf: string): boolean {
  const cpfNumbers = cpf.replace(/\D/g, "").split("").map(Number);

  if (cpfNumbers.length !== 11) {
    return false;
  }

  const firstDigitCalculated = calculateFirstDigit(cpfNumbers.slice(0, 9));
  const secondDigitCalculated = calculateSecondDigit([
    ...cpfNumbers.slice(0, 9),
    firstDigitCalculated,
  ]);

  return (
    cpfNumbers[9] === firstDigitCalculated &&
    cpfNumbers[10] === secondDigitCalculated
  );
}
