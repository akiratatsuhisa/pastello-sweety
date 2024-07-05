import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost:5500/graphql',
  documents: ['graphql/**/*.graphql'],
  generates: {
    './src/graphql/types-and-hooks.g.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
    },
  },
  config: {
    scalars: {
      DateTime: 'string',
      BigInt: 'string',
    },
  },
};

export default config;
