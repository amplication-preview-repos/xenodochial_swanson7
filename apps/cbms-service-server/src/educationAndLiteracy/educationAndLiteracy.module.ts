import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EducationAndLiteracyModuleBase } from "./base/educationAndLiteracy.module.base";
import { EducationAndLiteracyService } from "./educationAndLiteracy.service";
import { EducationAndLiteracyController } from "./educationAndLiteracy.controller";
import { EducationAndLiteracyResolver } from "./educationAndLiteracy.resolver";

@Module({
  imports: [EducationAndLiteracyModuleBase, forwardRef(() => AuthModule)],
  controllers: [EducationAndLiteracyController],
  providers: [EducationAndLiteracyService, EducationAndLiteracyResolver],
  exports: [EducationAndLiteracyService],
})
export class EducationAndLiteracyModule {}
