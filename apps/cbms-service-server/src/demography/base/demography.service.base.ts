/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Demography as PrismaDemography } from "@prisma/client";

export class DemographyServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.DemographyCountArgs, "select">
  ): Promise<number> {
    return this.prisma.demography.count(args);
  }

  async demographies(
    args: Prisma.DemographyFindManyArgs
  ): Promise<PrismaDemography[]> {
    return this.prisma.demography.findMany(args);
  }
  async demography(
    args: Prisma.DemographyFindUniqueArgs
  ): Promise<PrismaDemography | null> {
    return this.prisma.demography.findUnique(args);
  }
  async createDemography(
    args: Prisma.DemographyCreateArgs
  ): Promise<PrismaDemography> {
    return this.prisma.demography.create(args);
  }
  async updateDemography(
    args: Prisma.DemographyUpdateArgs
  ): Promise<PrismaDemography> {
    return this.prisma.demography.update(args);
  }
  async deleteDemography(
    args: Prisma.DemographyDeleteArgs
  ): Promise<PrismaDemography> {
    return this.prisma.demography.delete(args);
  }
}
