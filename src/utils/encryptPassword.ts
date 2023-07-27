import { hash } from 'bcrypt';
import { Injectable } from '@nestjs/common';

@Injectable()
export class HashService {
  async hash(data: string): Promise<string> {
    return await hash(data,10);
  }
  //implements compareHash

}