import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const userEmailExist = this.usersRepository.findByEmail(email);

    if(userEmailExist) {
      throw new Error("Email already exist. Try a new email.");
    }

    return this.usersRepository.create({ email, name });
  }
}

export { CreateUserUseCase };
