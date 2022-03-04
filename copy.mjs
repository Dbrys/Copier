import Copier from './Copier.mjs';

const CopierTest = async () => {
  const copier = new Copier('Testing');

  // Testing get function
  console.log(await copier.getVal);

  // Testing delete function
  console.log(await copier.delete);
};

export default CopierTest;
