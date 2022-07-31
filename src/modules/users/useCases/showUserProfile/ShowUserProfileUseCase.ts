import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userID = this.usersRepository.findById(user_id);

    if(!userID) {
      throw new Error("ID not found!");
    }

    return userID;
  }
}

export { ShowUserProfileUseCase };
