/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  SalariesAndWages as PrismaSalariesAndWages,
} from "@prisma/client";

export class SalariesAndWagesServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.SalariesAndWagesCountArgs, "select">
  ): Promise<number> {
    return this.prisma.salariesAndWages.count(args);
  }

  async salariesAndWagesItems(
    args: Prisma.SalariesAndWagesFindManyArgs
  ): Promise<PrismaSalariesAndWages[]> {
    return this.prisma.salariesAndWages.findMany(args);
  }
  async salariesAndWages(
    args: Prisma.SalariesAndWagesFindUniqueArgs
  ): Promise<PrismaSalariesAndWages | null> {
    return this.prisma.salariesAndWages.findUnique(args);
  }
  async createSalariesAndWages(
    args: Prisma.SalariesAndWagesCreateArgs
  ): Promise<PrismaSalariesAndWages> {
    return this.prisma.salariesAndWages.create(args);
  }
  async updateSalariesAndWages(
    args: Prisma.SalariesAndWagesUpdateArgs
  ): Promise<PrismaSalariesAndWages> {
    return this.prisma.salariesAndWages.update(args);
  }
  async deleteSalariesAndWages(
    args: Prisma.SalariesAndWagesDeleteArgs
  ): Promise<PrismaSalariesAndWages> {
    return this.prisma.salariesAndWages.delete(args);
  }
}
