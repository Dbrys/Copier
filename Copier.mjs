class Copier {
  constructor(val) {
    this.val = !!val ? val : undefined;
  }

  get copy() {
    return this.val;
  }
}

export default Copier;
