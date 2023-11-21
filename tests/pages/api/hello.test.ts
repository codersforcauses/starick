import type { PageConfig } from "next";
import { testApiHandler } from "next-test-api-route-handler";
import { expect } from "chai";

import { cleanup } from "../../utils";
import { teardown } from "../../utils";
import prisma from "../../../src/lib/prisma";
import endpoint, { config } from "../../../src/pages/api/hello";

// Respect the Next.js config object if it's exported
const handler: typeof endpoint & { config?: PageConfig } = endpoint;
handler.config = config;

describe("/api/hello", () => {
  before(async () => {
    await cleanup();

    const user = await prisma.user.create({
      data: {
        name: "Frinze"
      }
    });
    await prisma.message.create({
      data: {
        authorId: user.id,
        content: "Hello World"
      }
    });
  });

  it("should send messages from the database", async () => {
    await testApiHandler({
      handler,
      url: `/?content=Hello%20World`,
      test: async ({ fetch }) => {
        const res = await fetch({ method: "GET" });
        const body = await res.json();

        console.log(body);

        expect(res.status).to.equal(200);
        expect(body).to.exist;
        expect(body.length).to.equal(1);
        expect(body[0].content).to.equal("Hello World");
      }
    });
  });

  it("should NOT send messages from the database", async () => {
    await testApiHandler({
      handler,
      url: `/?content=Dummy`,
      test: async ({ fetch }) => {
        const res = await fetch({ method: "GET" });
        const body = await res.json();

        console.log(body);

        expect(res.status).to.equal(200);
        expect(body).to.exist;
        expect(body.length).to.equal(0);
      }
    });
  });

  after(() => {
    teardown();
  });
});
