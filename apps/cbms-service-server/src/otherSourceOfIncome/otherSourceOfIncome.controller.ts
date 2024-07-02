import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OtherSourceOfIncomeService } from "./otherSourceOfIncome.service";
import { OtherSourceOfIncomeControllerBase } from "./base/otherSourceOfIncome.controller.base";

@swagger.ApiTags("otherSourceOfIncomes")
@common.Controller("otherSourceOfIncomes")
export class OtherSourceOfIncomeController extends OtherSourceOfIncomeControllerBase {
  constructor(
    protected readonly service: OtherSourceOfIncomeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
