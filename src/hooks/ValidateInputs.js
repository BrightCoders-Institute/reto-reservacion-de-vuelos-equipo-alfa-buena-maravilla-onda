const ValidateInputs = (input, indice) => {
  let errorMessage = '';
  let hasError = false;
  switch (indice) {
    case 0:
      if (input === '' || input === null) {
        errorMessage = 'El origen no puede estar vacío';
        hasError = true;
      }
      break;
    case 1:
      if (input === '') {
        errorMessage = 'El destino no puede estar vacío';
        hasError = true;
      }
      break;
    case 2:
      if (
        !/^(?:January|February|March|April|May|June|July|August|September|October|November|December)\s\d{1,2},\s\d{4}$/.test(
          input,
        )
      ) {
        errorMessage = 'La fecha no es válida';
        hasError = true;
      }
      break;
    default:
      break;
  }
  return [hasError, errorMessage];
};

export default ValidateInputs;
