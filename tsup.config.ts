import { defineConfig } from 'tsup';
import { glob } from 'glob';

const entry = await glob('src/**/*.ts');

export default defineConfig({
    entry,
    clean: true,
    publicDir: true,
});