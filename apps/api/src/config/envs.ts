import 'dotenv/config';
import z from 'zod';

const PortSchema = z
.string()
.refine(
  (port) => parseInt(port) > 0 && parseInt(port) < 65536,
  'Invalid port number',
);

const envSchema = z.object({
  PORT: PortSchema,
  DATABASE_URL: z.string().url(),
  CLERK_ISSUER_URL: z.string().url(),
  CLERK_SECRET_KEY: z.string()
});

export type EnvVars = z.infer<typeof envSchema>;

const { error, data } = envSchema.safeParse(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = data;

export const envs = {
  PORT: envVars.PORT,
  DATABASE_URL: envVars.DATABASE_URL,
  CLERK_ISSUER_URL: envVars.CLERK_ISSUER_URL,
  CLERK_SECRET_KEY: envVars.CLERK_SECRET_KEY
} as EnvVars;
