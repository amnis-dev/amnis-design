---
inject: true
append: true
to: <%= `packages/amnis-${type}/src/index.ts` %>
---
export * from './<%= Name %>';