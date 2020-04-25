import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as helmet from "helmet";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());

  const options = {
    origin: "*",
  };
  app.enableCors(options);

  await app.listen(3000);
}
bootstrap();
