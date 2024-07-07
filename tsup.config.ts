import { glob } from 'glob';
import { defineConfig } from 'tsup';

const entry = await glob('src/**/*.ts');

export default defineConfig({
  entry,
  clean: true,
  publicDir: true,
});
