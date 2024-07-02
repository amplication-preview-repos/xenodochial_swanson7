/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Identification as PrismaIdentification } from "@prisma/client";

export class IdentificationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.IdentificationCountArgs, "select">
  ): Promise<number> {
    return this.prisma.identification.count(args);
  }

  async identifications(
    args: Prisma.IdentificationFindManyArgs
  ): Promise<PrismaIdentification[]> {
    return this.prisma.identification.findMany(args);
  }
  async identification(
    args: Prisma.IdentificationFindUniqueArgs
  ): Promise<PrismaIdentification | null> {
    return this.prisma.identification.findUnique(args);
  }
  async createIdentification(
    args: Prisma.IdentificationCreateArgs
  ): Promise<PrismaIdentification> {
    return this.prisma.identification.create(args);
  }
  async updateIdentification(
    args: Prisma.IdentificationUpdateArgs
  ): Promise<PrismaIdentification> {
    return this.prisma.identification.update(args);
  }
  async deleteIdentification(
    args: Prisma.IdentificationDeleteArgs
  ): Promise<PrismaIdentification> {
    return this.prisma.identification.delete(args);
  }
}
