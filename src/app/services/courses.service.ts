import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { Course } from "../model/course";

@Injectable({
  providedIn: "root",
})
export class CoursesService {
  constructor(private http: HttpClient) {}

  public loadAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>("api/courses").pipe(
      map((res) => res["payload"]),
      shareReplay()
    );
  }

  public saveCourse(
    courseId: string,
    changes: Partial<Course>
  ): Observable<any> {
    return this.http
      .put(`/api/courses/${courseId}`, changes)
      .pipe(shareReplay());
  }
}
