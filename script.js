const cpfs = document.querySelectorAll('.cpf li');

const elementsInnerText = ([...elements]) => {

  return elements.map(element =>  element.innerText)
}

const limparCPF = (cpf) => {
  return cpf.replace(/\D/g, '');
}

const construirCPF = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
}



const formatarCPF = (cpfs) => {
  return cpfs.map(limparCPF).map(construirCPF);
}

const substituirCPF = (cpfElements) => {
  const cpfs = elementsInnerText(cpfElements);
  const cpfsFormatados = formatarCPF(cpfs);

  cpfElements.forEach((element, index) => {
    element.innerText = cpfsFormatados[index];
  } )
}

substituirCPF(cpfs);