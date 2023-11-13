Check the package json file to  get the command to execute to get the convert the schema

The main file to modify is codegen.ts
The output file type (typescript, graphql, etc) depends on the plugin used:
- Use "typescrpt" for typescript
- Use "schema-ast" for .graphql file, of course the output file extension should match it