const expect = require("chai").expect;
const multiples3_5 = require("../app/assessment1.js").default;


describe("Multiple of 3 or 5", () => {
  it("0 => should be 0", () => {
    const result = multiples3_5(0);
    expect(result).to.equal(0);
  });
  it("1 => should be 0", () => {
    const result = multiples3_5(1);
    expect(result).to.equal(0);
  });
  it("2 => should be 0", () => {
    const result = multiples3_5(2);
    expect(result).to.equal(0);
  });
  it("negative => should be 0", () => {
    const result = multiples3_5(-1);
    expect(result).to.equal(0);
  });
  it("10 => should be 23", () => {
    const result = multiples3_5(10);
    expect(result).to.equal(23);
  });
});