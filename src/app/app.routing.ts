import { Route } from "@angular/router"
import { IndexComponent } from "./index/index.component"
import { CandidatesComponent } from "./candidates/candidates.component"
import { ServicesComponent } from "./services/services.component"

export var routes: Route[] = [
    { path: "", component: IndexComponent },
    { path: "candidates", component: CandidatesComponent },
    { path: "services", component: ServicesComponent }
]