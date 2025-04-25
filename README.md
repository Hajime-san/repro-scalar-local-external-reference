# repro-scalar-local-external-reference

## Step to reproduce

1. Install [Deno](https://docs.deno.com/runtime/getting_started/installation/)

2. Run `deno task start-scalar` in you terminal

Browser's console shows below.

```bash
standalone.js:28602 @scalar/api-reference@1.28.26
standalone.js:14473 should not use proxy  ./petstore.yaml
standalone.js:16009 fetch: 34 ms (./petstore.yaml)
standalone.js:16010 size: 3 kB
standalone.js:15999 dereference: 8 ms
standalone.js:16000 Please open an issue on https://github.com/scalar/scalar
 Scalar OpenAPI Parser Warning:
 Array(1)0: code: "EXTERNAL_REFERENCE_NOT_FOUND"message: "Can’t resolve external reference: ./pet.yaml"[[Prototype]]: Objectlength: 1[[Prototype]]: Array(0)
MG.e.proxyUrl @ standalone.js:16000
standalone.js:16370 workspace: 1 ms
```

However [Swagger UI](https://swagger.io/tools/swagger-ui/) works well when you
run `deno task start-swagger`.
