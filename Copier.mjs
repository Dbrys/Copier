class Copier {
  constructor(val) {
    this.val = !!val ? val : undefined;
  }

  get getVal() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.val);
      }, 1000);
    });
  }

  get delete() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(new Error('Cannot delete!'));
      }, 1000);
    });
  }
}

export default Copier;
