import MakeCards from "./MakeCards";

describe("MakeCards", () => {
  it("should make all the cards", () => {
    const cards = new MakeCards().build();
    expect(cards).toMatchSnapshot();
  });
});
