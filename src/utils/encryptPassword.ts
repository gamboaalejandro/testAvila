import { Injectable } from '@nestjs/common';
import { createHash } from 'crypto';

@Injectable()
export class HashService {
  hash(data: string): string {
    const hash = createHash('sha256');
    hash.update(data);
    return hash.digest('hex');
  }
}