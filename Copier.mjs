class Copier {
  constructor(val) {
    // Sets val to undefined if no value passed
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

  get copy() {
    // Make sure value is object
    if (typeof this.val === 'object' && this.val !== null) {
      /**
       * No need for recursive function here could return
       * JSON.parse(JSON.stringify(this.val));
       */
      // Returns deep copy of object
      return this.handleDeepCopy(this.val);
    }
    return this.val;
  }

  // Would need to clean up the logic to get correct deep copy of object
  handleDeepCopy(value) {
    const deepCopy = {};
    if (typeof value === 'object' && value !== null) {
      for (const key in value) {
        const curValue = value[key];

        // Recursively (deep) copy for nested objects, including arrays
        if (typeof curValue === 'object' && curValue !== null) {
          deepCopy[key] = this.handleDeepCopy(curValue);
        } else {
          deepCopy[key] = value;
        }
      }
    } else if (Array.isArray(value)) {
      deepCopy[key] = curValue.map((val) => {
        if (typeof val === 'object' && val !== null) {
        } else {
          return val;
        }
      });
    }
    return deepCopy;
  }
}

export default Copier;
