import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { User } from './user.schema';
@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) { }
    async getUsers() {
        const users = await this.userRepository.findAll();
        return {
            message: "Users fetched successfully",
            data: users
        };
    }

    async createUser(body: Partial<User>) {
        const user = await this.userRepository.create(body);
        return {
            message: "User created successfully",
            data: user
        };
    }

    async getUserById(id: string) {
        const user = await this.userRepository.findById(id);
        return {
            message: "User fetched successfully",
            data: user
        };
    }
}