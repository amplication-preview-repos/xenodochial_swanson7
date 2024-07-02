import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { HealthAndOtherCharacteristicsController } from "../healthAndOtherCharacteristics.controller";
import { HealthAndOtherCharacteristicsService } from "../healthAndOtherCharacteristics.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  chronicDiseases: "exampleChronicDiseases",
  createdAt: new Date(),
  disabilityStatus: "true",
  healthInsuranceStatus: "true",
  id: "exampleId",
  primaryHealthProvider: "examplePrimaryHealthProvider",
  updatedAt: new Date(),
  vaccinationStatus: "true",
};
const CREATE_RESULT = {
  chronicDiseases: "exampleChronicDiseases",
  createdAt: new Date(),
  disabilityStatus: "true",
  healthInsuranceStatus: "true",
  id: "exampleId",
  primaryHealthProvider: "examplePrimaryHealthProvider",
  updatedAt: new Date(),
  vaccinationStatus: "true",
};
const FIND_MANY_RESULT = [
  {
    chronicDiseases: "exampleChronicDiseases",
    createdAt: new Date(),
    disabilityStatus: "true",
    healthInsuranceStatus: "true",
    id: "exampleId",
    primaryHealthProvider: "examplePrimaryHealthProvider",
    updatedAt: new Date(),
    vaccinationStatus: "true",
  },
];
const FIND_ONE_RESULT = {
  chronicDiseases: "exampleChronicDiseases",
  createdAt: new Date(),
  disabilityStatus: "true",
  healthInsuranceStatus: "true",
  id: "exampleId",
  primaryHealthProvider: "examplePrimaryHealthProvider",
  updatedAt: new Date(),
  vaccinationStatus: "true",
};

const service = {
  createHealthAndOtherCharacteristics() {
    return CREATE_RESULT;
  },
  healthAndOtherCharacteristicsItems: () => FIND_MANY_RESULT,
  healthAndOtherCharacteristics: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("HealthAndOtherCharacteristics", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: HealthAndOtherCharacteristicsService,
          useValue: service,
        },
      ],
      controllers: [HealthAndOtherCharacteristicsController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /healthAndOtherCharacteristics", async () => {
    await request(app.getHttpServer())
      .post("/healthAndOtherCharacteristics")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /healthAndOtherCharacteristics", async () => {
    await request(app.getHttpServer())
      .get("/healthAndOtherCharacteristics")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /healthAndOtherCharacteristics/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/healthAndOtherCharacteristics"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /healthAndOtherCharacteristics/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/healthAndOtherCharacteristics"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /healthAndOtherCharacteristics existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/healthAndOtherCharacteristics")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/healthAndOtherCharacteristics")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
