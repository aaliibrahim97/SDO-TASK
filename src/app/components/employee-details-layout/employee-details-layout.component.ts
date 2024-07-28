import { ChangeDetectorRef, Component, OnDestroy } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MediaMatcher } from "@angular/cdk/layout";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "app-employee-details-layout",
  standalone: true,
  imports: [MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule],
  templateUrl: "./employee-details-layout.component.html",
  styleUrl: "./employee-details-layout.component.scss",
})
export class EmployeeDetailsLayoutComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia("(max-width: 600px)");
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
