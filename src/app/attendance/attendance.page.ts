import { Component } from "@angular/core";
import { Plugins, CameraResultType, CameraSource } from "@capacitor/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

const { Camera } = Plugins;
@Component({
  selector: "app-attendance",
  templateUrl: "attendance.page.html",
  styleUrls: ["attendance.page.scss"]
})
export class AttendancePage {
  photo: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) {}
  async takePicture() {
    const image = await Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });

    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(
      image && image.dataUrl
    );
  }
}
