class DateLimit {
  constructor() {
    this.date = new Date();
  }

  // Get the current date in ISO format
  min() {
    return this.date.toISOString().split("T")[0];
  }

  // Get the date (x) days from now in ISO format
  max(x) {
    this.date.setDate(this.date.getDate() + x);
    return this.date.toISOString().split("T")[0];
  }
}

const dateLimit = new DateLimit();

export default dateLimit;
