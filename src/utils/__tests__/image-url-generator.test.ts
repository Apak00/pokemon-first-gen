import { generateImgUrl } from "../image-url-generator";

it("return right url for current usages", () => {
  const imageUrl: string = generateImgUrl("balbasuar");
  expect(imageUrl).toBe(
    `https://img.pokemondb.net/sprites/black-white/anim/normal/balbasuar.gif`
  );
});
