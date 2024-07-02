import { RedisModule } from "./redis/redis.module";
import { Module } from "@nestjs/common";
import { WasteManagementModule } from "./wasteManagement/wasteManagement.module";
import { HouseholdsCharacteristicsModule } from "./householdsCharacteristics/householdsCharacteristics.module";
import { SalariesAndWagesModule } from "./salariesAndWages/salariesAndWages.module";
import { HouseCharacteristicsModule } from "./houseCharacteristics/houseCharacteristics.module";
import { DemographyModule } from "./demography/demography.module";
import { IdentificationModule } from "./identification/identification.module";
import { SourceOfIncomeModule } from "./sourceOfIncome/sourceOfIncome.module";
import { CrimeModule } from "./crime/crime.module";
import { PoliticalParticipationModule } from "./politicalParticipation/politicalParticipation.module";
import { HousingModule } from "./housing/housing.module";
import { HealthAndOtherCharacteristicsModule } from "./healthAndOtherCharacteristics/healthAndOtherCharacteristics.module";
import { EducationAndLiteracyModule } from "./educationAndLiteracy/educationAndLiteracy.module";
import { CropFarmingModule } from "./cropFarming/cropFarming.module";
import { ClimateModule } from "./climate/climate.module";
import { EconomicActivityModule } from "./economicActivity/economicActivity.module";
import { WaterAndSanitationModule } from "./waterAndSanitation/waterAndSanitation.module";
import { NutritionModule } from "./nutrition/nutrition.module";
import { AgricultureFarmingModule } from "./agricultureFarming/agricultureFarming.module";
import { LivestockRaisingModule } from "./livestockRaising/livestockRaising.module";
import { FishingModule } from "./fishing/fishing.module";
import { OtherSourceOfIncomeModule } from "./otherSourceOfIncome/otherSourceOfIncome.module";
import { UserModule } from "./user/user.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { KafkaModule } from "./redis/kafka.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    KafkaModule,
    WasteManagementModule,
    HouseholdsCharacteristicsModule,
    SalariesAndWagesModule,
    HouseCharacteristicsModule,
    DemographyModule,
    IdentificationModule,
    SourceOfIncomeModule,
    CrimeModule,
    PoliticalParticipationModule,
    HousingModule,
    HealthAndOtherCharacteristicsModule,
    EducationAndLiteracyModule,
    CropFarmingModule,
    ClimateModule,
    EconomicActivityModule,
    WaterAndSanitationModule,
    NutritionModule,
    AgricultureFarmingModule,
    LivestockRaisingModule,
    FishingModule,
    OtherSourceOfIncomeModule,
    UserModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
    RedisModule,
  ],
  providers: [],
})
export class AppModule {}
