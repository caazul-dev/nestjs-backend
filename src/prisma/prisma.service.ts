import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaService {
  public user = {
    findFirst: async (args: any) => null,
    create: async (args: any) => ({ id: 1, ...args.data }),
  };
}