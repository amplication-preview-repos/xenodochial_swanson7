import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PoliticalParticipationModuleBase } from "./base/politicalParticipation.module.base";
import { PoliticalParticipationService } from "./politicalParticipation.service";
import { PoliticalParticipationController } from "./politicalParticipation.controller";
import { PoliticalParticipationResolver } from "./politicalParticipation.resolver";

@Module({
  imports: [PoliticalParticipationModuleBase, forwardRef(() => AuthModule)],
  controllers: [PoliticalParticipationController],
  providers: [PoliticalParticipationService, PoliticalParticipationResolver],
  exports: [PoliticalParticipationService],
})
export class PoliticalParticipationModule {}
