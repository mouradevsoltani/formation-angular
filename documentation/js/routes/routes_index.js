var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"appRoutes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"","redirectTo":"/login","pathMatch":"full"},{"path":"prestations","loadChildren":"./prestation/prestation.module#PrestationModule","children":[{"kind":"module","children":[{"name":"appRoutes","filename":"src/app/prestation/prestations-routing-module.module.ts","module":"PrestationsRoutingModuleModule","children":[{"path":"","component":"ListPrestationsComponent"}],"kind":"module"}],"module":"PrestationModule"}]}],"kind":"module"},{"name":"appRoutes","filename":"src/app/login/login-routing.module.ts","module":"LoginRoutingModule","children":[{"path":"login","component":"LoginComponent"}],"kind":"module"},{"name":"appRoutes","filename":"src/app/page-not-found/page-not-found-routing.module.ts","module":"PageNotFoundRoutingModule","children":[{"path":"**","component":"PageNotFoundComponent"}],"kind":"module"}]}