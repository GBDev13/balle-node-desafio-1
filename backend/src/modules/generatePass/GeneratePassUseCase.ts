import emojis from "../../utils/emojis.js";

export class GeneratePassUseCase {
  async execute(size: number): Promise<string> {
    const emojiPass = Array.from(
      { length: size },
      () => emojis[~~(Math.random() * emojis.length)]
    ).join("");

    return emojiPass;
  }
}
