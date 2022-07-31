import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const listUsers = this.usersRepository.findById(user_id);

    if(!listUsers) {
      throw new Error("List cannot found!");
    }

    if(!listUsers.admin) {
      throw new Error("User is not admin!");

    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
