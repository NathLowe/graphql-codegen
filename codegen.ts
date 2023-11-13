
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://dev.njanda.cm/graphql",
  generates: {
    './output/test.ts': {
      plugins: ['typescript']
    }
  },  
};

export default config;
