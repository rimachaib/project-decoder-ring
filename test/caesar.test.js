// Write your tests here!
const expect = require("chai").expect;
const caesarModule = require("../src/caesar");

describe("Caesar", () => {
  it("should return false if shift is equal to 0", () => {
    const expected = false;
    const actual = caesarModule("Thinkful", 0);
    expect(actual).to.equal(expected);
  });
  it("should return false if shift is greater than 25", () => {
    const expected = false;
    const actual = caesarModule("Thinkful", 32);
    expect(actual).to.equal(expected);
  });
  it("should return false if shift is less than -25", () => {
    const expected = false;
    const actual = caesarModule("Thinkful", -32);
    expect(actual).to.equal(expected);
  });
  it("should maintain spaces and other non-alphabetic symbols when encoding", () => {
    const expected = "bpqa qa i amkzmb umaaiom!";
    const actual = caesarModule("This is a secret message!", 8);
    expect(actual).to.equal(expected);
  });
  it("should maintain spaces and other non-alphabetic symbols when decoding", () => {
    const expected = "this is a secret message!";
    const actual = caesarModule("BPQA qa I amkzmb umaaiom!", 8, false);
    expect(actual).to.equal(expected);
  });
  it("should decode if set to false and the shift is known", () => {
    const expected = "thinkful!";
    const actual = caesarModule("wklqnixo!", 3, false);
    expect(actual).to.equal(expected);
  });
  it("should ignore uppercase letters", () => {
    const expected = "wklqnixo!";
    const actual = caesarModule("THINKFUL!", 3);
    expect(actual).to.equal(expected);
  });

  it("should loop over the end of the alphabet", () => {
    const expected = "c vq b!";
    const actual = caesarModule("A to Z!", 2);
    expect(actual).to.equal(expected);
  });
});