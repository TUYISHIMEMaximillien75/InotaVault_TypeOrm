import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { hashPassword } from 'src/utils/Password.util';
import { comparePassword } from 'src/utils/Password.util';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepo: Repository<User>
    ) { }

    async createUser(name: string, email: string, password: string): Promise<User> {

        const emailExist = await this.userRepo.findOne({ where: { email } })
        if (emailExist) {
            throw new ConflictException("Email already exist")
        }

        const hashedPassowrd = await hashPassword(password)

        const user = this.userRepo.create({
            name,
            email,
            password: hashedPassowrd
        })

        return this.userRepo.save(user)

    }

    async loginUser(email: string, password: string){
        const user = await this.findByEmail(email)
        if(!user){
            throw new UnauthorizedException("Invalid credentials")
        }
        const isPasswordMatched = await comparePassword(password, user.password)
        if(!isPasswordMatched){
            throw new UnauthorizedException("Invalid credentials")
        }
        return user
    }

    async findByEmail(email: string): Promise<User | null> {
        return this.userRepo.findOne({ where: { email } });
    }


}
