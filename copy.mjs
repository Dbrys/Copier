import Copier from './Copier.mjs';

const CopierTest = async () => {
  const src = { a: 'b', c: { d: 'e', f: ['g', { h: 'i' }] } };
  const copier = new Copier('Testing');

  // Testing getVal method
  console.log(await copier.getVal);

  // Testing delete method
  console.log(await copier.delete);

  // Testing copy method non-object
  console.log(copier.copy);

  //############################

  // Test Copier class with object as value
  const copierObject = new Copier(src);

  console.log(copierObject.copy === src);
};

export default CopierTest;
