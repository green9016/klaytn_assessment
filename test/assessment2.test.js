const expect = require("chai").expect;
const fibonacci_even_sum = require("../app/assessment2.js").default;


describe("Even Sum of Fibonacci numbers", () => {
  it("0 => should be 0", () => {
    const result = fibonacci_even_sum(0);
    expect(result).to.equal(0);
  });
  it("1 => should be 0", () => {
    const result = fibonacci_even_sum(1);
    expect(result).to.equal(0);
  });
  it("2 => should be 2", () => {
    const result = fibonacci_even_sum(2);
    expect(result).to.equal(2);
  });
  it("3 => should be 2", () => {
    const result = fibonacci_even_sum(3);
    expect(result).to.equal(2);
  });
  it("10 => should be 10", () => {
    const result = fibonacci_even_sum(10);
    expect(result).to.equal(10);
  });
  it("100 => should be 44", () => {
    const result = fibonacci_even_sum(100);
    expect(result).to.equal(44);
  });
  it("144 => should be 188", () => {
    const result = fibonacci_even_sum(144);
    expect(result).to.equal(188);
  });
});