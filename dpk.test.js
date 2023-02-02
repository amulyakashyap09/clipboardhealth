const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {

  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns '0' string when given empty string input", () => {
    const event = "";
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe("0");
    expect(typeof trivialKey).toBe("string");
  });

  it("Returns the hash string when given empty object input", () => {
    const event = {};
    const trivialKey = deterministicPartitionKey(event);
    expect(typeof trivialKey).toBe("string");
  });

  it("Returns the hash string when given input string", () => {
    const event = {
      "partitionKey": "1234"
    };
    const trivialKey = deterministicPartitionKey(event);
    expect(typeof trivialKey).toBe("string");
    expect(trivialKey).not.toBe(null);
  });

  it("Returns the hash string when given input non string", () => {
    const event = {
      "partitionKey": 1234
    };
    const trivialKey = deterministicPartitionKey(event);
    expect(typeof trivialKey).toBe("string");
    expect(trivialKey).not.toBe(null);
  });

  it("Returns the hash string when given input is > 256 length", () => {
    const event = {
      "partitionKey": "c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862"
    };
    const trivialKey = deterministicPartitionKey(event);
    expect(typeof trivialKey).toBe("string");
    expect(trivialKey.length < 256).toBe(true);
    expect(trivialKey).not.toBe(null);
  });
});
