import isNumberInWords from "../src/utils/isNumberInWords";

describe("isNumberInWords", () => {
  // Should correctly convert single digit numbers written in words
  it("should correctly convert single digit numbers written in words", () => {
    expect(isNumberInWords("zero")).toBe(0);
    expect(isNumberInWords("one")).toBe(1);
    expect(isNumberInWords("two")).toBe(2);
    expect(isNumberInWords("three")).toBe(3);
    expect(isNumberInWords("four")).toBe(4);
    expect(isNumberInWords("five")).toBe(5);
    expect(isNumberInWords("six")).toBe(6);
    expect(isNumberInWords("seven")).toBe(7);
    expect(isNumberInWords("eight")).toBe(8);
    expect(isNumberInWords("nine")).toBe(9);
  });

  // Should correctly convert double digit numbers written in words
  it("should correctly convert double digit numbers written in words", () => {
    expect(isNumberInWords("ten")).toBe(10);
    expect(isNumberInWords("eleven")).toBe(11);
    expect(isNumberInWords("twelve")).toBe(12);
    expect(isNumberInWords("thirteen")).toBe(13);
    expect(isNumberInWords("fourteen")).toBe(14);
    expect(isNumberInWords("fifteen")).toBe(15);
    expect(isNumberInWords("sixteen")).toBe(16);
    expect(isNumberInWords("seventeen")).toBe(17);
    expect(isNumberInWords("eighteen")).toBe(18);
    expect(isNumberInWords("nineteen")).toBe(19);
    expect(isNumberInWords("twenty")).toBe(20);
    expect(isNumberInWords("thirty")).toBe(30);
    expect(isNumberInWords("forty")).toBe(40);
    expect(isNumberInWords("fifty")).toBe(50);
    expect(isNumberInWords("sixty")).toBe(60);
    expect(isNumberInWords("seventy")).toBe(70);
    expect(isNumberInWords("eighty")).toBe(80);
    expect(isNumberInWords("ninety")).toBe(90);
  });

  // Should correctly convert triple digit numbers written in words
  it("should correctly convert triple digit numbers written in words", () => {
    expect(isNumberInWords("one hundred")).toBe(100);
    expect(isNumberInWords("two hundred")).toBe(200);
    expect(isNumberInWords("three hundred")).toBe(300);
    expect(isNumberInWords("four hundred")).toBe(400);
    expect(isNumberInWords("five hundred")).toBe(500);
    expect(isNumberInWords("six hundred")).toBe(600);
    expect(isNumberInWords("seven hundred")).toBe(700);
    expect(isNumberInWords("eight hundred")).toBe(800);
    expect(isNumberInWords("nine hundred")).toBe(900);
  });

  // Should return null when given an empty string
  it("should return null when given an empty string", () => {
    expect(isNumberInWords("")).toBeNull();
  });

  // Should return null when given a string with unrecognized words
  it("should return null when given a string with unrecognized words", () => {
    expect(isNumberInWords("eleven hundred and fifty")).toBeNull();
    expect(isNumberInWords("five hundred and sixty two")).toBeNull();
    expect(isNumberInWords("thirty two thousand and ten")).toBeNull();
  });

  // Should return null when given a string with unrecognized words and valid words
  it("should return null when given a string with unrecognized words and valid words", () => {
    expect(isNumberInWords("twenty one hundred and fifty")).toBeNull();
    expect(isNumberInWords("eleven hundred and sixty two")).toBeNull();
    expect(isNumberInWords("five hundred and thirty two thousand")).toBeNull();
    expect(isNumberInWords("thirty two thousand and ten million")).toBeNull();
  });
});
