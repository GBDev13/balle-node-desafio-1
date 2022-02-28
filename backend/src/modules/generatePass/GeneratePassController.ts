import { Request, Response } from "express";
import { GeneratePassUseCase } from "./GeneratePassUseCase";

const sizes = {
  small: 5,
  medium: 10,
  large: 20,
};

export class GeneratePassController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { size } = req.body;

      const numberSize = sizes[size] ?? 10;

      const generatePassUseCase = new GeneratePassUseCase();

      const password = await generatePassUseCase.execute(numberSize);

      return res.json({
        error: false,
        password,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        error: true,
        message: "Ocorreu um erro ao gerar sua senha",
      });
    }
  }
}
