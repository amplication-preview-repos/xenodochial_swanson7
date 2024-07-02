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
import { PoliticalParticipationController } from "../politicalParticipation.controller";
import { PoliticalParticipationService } from "../politicalParticipation.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  activeInCommunityOrganizations: "true",
  createdAt: new Date(),
  hasVotedInLastElection: "true",
  id: "exampleId",
  interestInPublicOffice: "true",
  participationInPoliticalRallies: "true",
  politicalPartyAffiliation: "examplePoliticalPartyAffiliation",
  updatedAt: new Date(),
  voterRegistrationStatus: "true",
};
const CREATE_RESULT = {
  activeInCommunityOrganizations: "true",
  createdAt: new Date(),
  hasVotedInLastElection: "true",
  id: "exampleId",
  interestInPublicOffice: "true",
  participationInPoliticalRallies: "true",
  politicalPartyAffiliation: "examplePoliticalPartyAffiliation",
  updatedAt: new Date(),
  voterRegistrationStatus: "true",
};
const FIND_MANY_RESULT = [
  {
    activeInCommunityOrganizations: "true",
    createdAt: new Date(),
    hasVotedInLastElection: "true",
    id: "exampleId",
    interestInPublicOffice: "true",
    participationInPoliticalRallies: "true",
    politicalPartyAffiliation: "examplePoliticalPartyAffiliation",
    updatedAt: new Date(),
    voterRegistrationStatus: "true",
  },
];
const FIND_ONE_RESULT = {
  activeInCommunityOrganizations: "true",
  createdAt: new Date(),
  hasVotedInLastElection: "true",
  id: "exampleId",
  interestInPublicOffice: "true",
  participationInPoliticalRallies: "true",
  politicalPartyAffiliation: "examplePoliticalPartyAffiliation",
  updatedAt: new Date(),
  voterRegistrationStatus: "true",
};

const service = {
  createPoliticalParticipation() {
    return CREATE_RESULT;
  },
  politicalParticipations: () => FIND_MANY_RESULT,
  politicalParticipation: ({ where }: { where: { id: string } }) => {
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

describe("PoliticalParticipation", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: PoliticalParticipationService,
          useValue: service,
        },
      ],
      controllers: [PoliticalParticipationController],
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

  test("POST /politicalParticipations", async () => {
    await request(app.getHttpServer())
      .post("/politicalParticipations")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /politicalParticipations", async () => {
    await request(app.getHttpServer())
      .get("/politicalParticipations")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /politicalParticipations/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/politicalParticipations"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /politicalParticipations/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/politicalParticipations"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /politicalParticipations existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/politicalParticipations")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/politicalParticipations")
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
