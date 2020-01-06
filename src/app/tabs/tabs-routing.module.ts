import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "profile",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../profile/profile.module").then(m => m.ProfilePageModule)
          }
        ]
      },
      {
        path: "attendance",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../attendance/attendance.module").then(
                m => m.AttendancePageModule
              )
          }
        ]
      },
      {
        path: "tab3",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../tab3/tab3.module").then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: "",
        redirectTo: "/tabs/attendance",
        pathMatch: "full"
      }
    ]
  },
  {
    path: "",
    redirectTo: "/tabs/attendance",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
