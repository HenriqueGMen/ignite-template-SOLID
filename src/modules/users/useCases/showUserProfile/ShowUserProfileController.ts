import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;
    const id = user_id.toString();

    try {
      const showUser = this.showUserProfileUseCase.execute({ user_id: id});
      return response.status(201).json(showUser);
    } catch(error) {
      return response.status(404).json({ error: "Cannot show user!"})
    }
  }
}

export { ShowUserProfileController };