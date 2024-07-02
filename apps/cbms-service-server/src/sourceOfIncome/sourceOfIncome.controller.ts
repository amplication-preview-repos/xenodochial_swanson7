import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SourceOfIncomeService } from "./sourceOfIncome.service";
import { SourceOfIncomeControllerBase } from "./base/sourceOfIncome.controller.base";

@swagger.ApiTags("sourceOfIncomes")
@common.Controller("sourceOfIncomes")
export class SourceOfIncomeController extends SourceOfIncomeControllerBase {
  constructor(
    protected readonly service: SourceOfIncomeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
