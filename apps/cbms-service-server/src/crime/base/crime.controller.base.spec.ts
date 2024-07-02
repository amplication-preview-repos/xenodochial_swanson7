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
import { CrimeController } from "../crime.controller";
import { CrimeService } from "../crime.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  dateOfIncident: new Date(),
  id: "exampleId",
  incidentsOfCrime: "exampleIncidentsOfCrime",
  locationOfIncident: "exampleLocationOfIncident",
  outcome: "exampleOutcome",
  reportedToAuthorities: "true",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  createdAt: new Date(),
  dateOfIncident: new Date(),
  id: "exampleId",
  incidentsOfCrime: "exampleIncidentsOfCrime",
  locationOfIncident: "exampleLocationOfIncident",
  outcome: "exampleOutcome",
  reportedToAuthorities: "true",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    dateOfIncident: new Date(),
    id: "exampleId",
    incidentsOfCrime: "exampleIncidentsOfCrime",
    locationOfIncident: "exampleLocationOfIncident",
    outcome: "exampleOutcome",
    reportedToAuthorities: "true",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  dateOfIncident: new Date(),
  id: "exampleId",
  incidentsOfCrime: "exampleIncidentsOfCrime",
  locationOfIncident: "exampleLocationOfIncident",
  outcome: "exampleOutcome",
  reportedToAuthorities: "true",
  updatedAt: new Date(),
};

const service = {
  createCrime() {
    return CREATE_RESULT;
  },
  crimes: () => FIND_MANY_RESULT,
  crime: ({ where }: { where: { id: string } }) => {
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

describe("Crime", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CrimeService,
          useValue: service,
        },
      ],
      controllers: [CrimeController],
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

  test("POST /crimes", async () => {
    await request(app.getHttpServer())
      .post("/crimes")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dateOfIncident: CREATE_RESULT.dateOfIncident.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /crimes", async () => {
    await request(app.getHttpServer())
      .get("/crimes")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          dateOfIncident: FIND_MANY_RESULT[0].dateOfIncident.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /crimes/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/crimes"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /crimes/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/crimes"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        dateOfIncident: FIND_ONE_RESULT.dateOfIncident.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /crimes existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/crimes")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dateOfIncident: CREATE_RESULT.dateOfIncident.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/crimes")
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
