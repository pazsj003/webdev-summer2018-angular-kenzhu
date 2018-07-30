(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".test{\n  color:red;\n}\n.courseContainer{\n  margin:20px;\n\n}\n.inlineStyle{\n  display: inline-block;\n}\n.li:focus{\n  background-color: yellow;\n  outline: 1px;\n}\n.list-group-item-action1:target{\n  color: red;\n  text-decoration: none;\n  background-color: red;\n}\n\n"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" href=\"#\">White Board</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n\n        <li class=\"nav-item\">\n          <a   class=\"nav-link\"  routerLink=\"/profile\">Profile</a>\n\n        </li>\n\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" (click)=\"logout()\">Logout</a>\n\n        </li>\n\n      </ul>\n    </div>\n  </nav>\n</div>\n\n\n<div *ngIf=\" null !== courses \" class=\"container-fluid p-4\" >\n\n  <h1 class=\"navbar-brand\" >\n    Admin Page\n  </h1>\n\n\n  <table  class=\"form-control \" >\n\n\n    <div class=\"container-fluid p-2\">\n\n    <input [(ngModel)]=\"sectionName\"\n           placeholder=\"Section Name\"\n           class=\"form-control p-3 \"\n           >\n\n\n    <input [(ngModel)]=\"seats\"\n           placeholder=\"Seats available\"\n           class=\"form-control p-3\">\n\n\n    <button [hidden]=\"checkCourse\" (click)=\"createSection(sectionName, seats)\" class=\"btn btn-success mb-2\">\n       Add Section\n    </button>\n\n\n    <button [hidden]=\"updateCheck\" (click)=\"updateSection(sectionName, seats)\" class=\"btn btn-success mb-2\">\n      Update\n    </button>\n      </div>\n\n\n\n    <div *ngFor=\"let course of courses\" >\n      <div class=\"container-fluid courseContainer\" >\n\n          <h5 class=\"card-title inlineStyle\">{{course.title}}</h5>\n\n           <button\n                   (click)=\"addSection (course)\"\n              class=\"float-right btn btn-primary inlineStyle\">+</button>\n\n      </div>\n\n      <ul class=\"list-group\">\n        <li\n          *ngFor=\"let section of this.map.get(course.id)\"\n          (click)=\"selectSection(section)\"\n          class=\"list-group-item list-group-item-action \"\n          data-toggle=\"list\">\n\n          <div >\n            <a     >{{section.name}}</a>\n            Seat:  {{section.seats}}\n\n          <button (click)=\"delete (section)\"\n                  class=\"float-right btn btn-primary\">delete</button>\n          </div>\n        </li>\n      </ul>\n\n\n\n  </div>\n  </table>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/course.service.client */ "./src/app/services/course.service.client.ts");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/section.service.client */ "./src/app/services/section.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminComponent = /** @class */ (function () {
    function AdminComponent(service, Sectionservice, router, route) {
        this.service = service;
        this.Sectionservice = Sectionservice;
        this.router = router;
        this.route = route;
        this.sectionId = '';
        this.courses = [];
        this.sectionName = '';
        this.seats = '';
        this.courseId = '';
        this.checkCourseId = '';
        this.sections = [];
        this.checkCourse = false;
        this.updateCheck = true;
        this.map = new Map();
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.findAllCourses()
            .then(function (courses) { return _this.mapCourse(courses); });
    };
    AdminComponent.prototype.mapCourse = function (courses) {
        var _this = this;
        this.courses = courses;
        var _loop_1 = function (course) {
            console.log('load map ' + JSON.stringify(course));
            this_1.Sectionservice
                .findSectionsForCourse(course.id)
                .then(function (sections) {
                console.log('load sections ' + JSON.stringify(sections));
                _this.map.set(course.id, sections);
            });
        };
        var this_1 = this;
        for (var _i = 0, courses_1 = courses; _i < courses_1.length; _i++) {
            var course = courses_1[_i];
            _loop_1(course);
        }
        setTimeout(function () {
            for (var _i = 0, courses_2 = courses; _i < courses_2.length; _i++) {
                var course = courses_2[_i];
                console.log('create map ' + JSON.stringify(_this.map.get(course.id)));
            }
        }, 2000);
    };
    AdminComponent.prototype.selectSection = function (section) {
        this.updateCheck = false;
        this.checkCourse = true;
        this.sectionId = section._id;
        this.courseId = section.courseId;
        this.sectionName = section.name;
        this.seats = section.seats;
    };
    AdminComponent.prototype.renderSections = function (courseId) {
        var _this = this;
        if (this.checkCourseId === '') {
            this.courseId = courseId;
            this.checkCourseId = this.courseId;
            console.log('2 course id ' + courseId);
            return this
                .Sectionservice
                .findSectionsForCourse(courseId)
                .then(function (sections) {
                if (sections !== null) {
                    _this.sections = sections;
                    console.log(' section 1 ' + JSON.stringify(sections));
                }
            });
        }
        else if (this.checkCourseId !== '' && this.checkCourseId !== courseId) {
            this.courseId = courseId;
            this.checkCourseId = '';
            console.log('3 course id ' + courseId);
            return this
                .Sectionservice
                .findSectionsForCourse(courseId)
                .then(function (sections) {
                if (sections !== null) {
                    _this.sections = sections;
                    console.log(' section 2 ' + JSON.stringify(sections));
                }
            });
        }
    };
    AdminComponent.prototype.loadSections = function (courseId) {
        var _this = this;
        this.courseId = courseId;
        this
            .Sectionservice
            .findSectionsForCourse(courseId)
            .then(function (sections) {
            return _this.map.set(courseId, sections);
        });
    };
    AdminComponent.prototype.delete = function (section) {
        var _this = this;
        this
            .Sectionservice
            .deleteSection(section)
            .then(function () {
            _this.loadSections(section.courseId);
        });
    };
    AdminComponent.prototype.addSection = function (course) {
        this.updateCheck = true;
        this.checkCourse = false;
        this.courseId = course.id;
        this.sectionName = course.title + '  section';
        this.seats = '50';
    };
    AdminComponent.prototype.updateSection = function (sectionName, seats) {
        var _this = this;
        this
            .Sectionservice
            .updateSection(this.sectionId, sectionName, seats)
            .then(function () {
            _this.loadSections(_this.courseId);
        });
    };
    AdminComponent.prototype.createSection = function (sectionName, seats) {
        var _this = this;
        this
            .Sectionservice
            .createSection(this.courseId, sectionName, seats)
            .then(function () {
            _this.loadSections(_this.courseId);
        });
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_services_course_service_client__WEBPACK_IMPORTED_MODULE_1__["CourseServiceClient"],
            _services_section_service_client__WEBPACK_IMPORTED_MODULE_2__["SectionServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _hello_world_hello_world_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hello-world/hello-world.component */ "./src/app/hello-world/hello-world.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_course_navigator_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/course-navigator.service.client */ "./src/app/services/course-navigator.service.client.ts");
/* harmony import */ var _course_navigator_course_navigator_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./course-navigator/course-navigator.component */ "./src/app/course-navigator/course-navigator.component.ts");
/* harmony import */ var _white_board_white_board_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./white-board/white-board.component */ "./src/app/white-board/white-board.component.ts");
/* harmony import */ var _course_grid_course_grid_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./course-grid/course-grid.component */ "./src/app/course-grid/course-grid.component.ts");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/course.service.client */ "./src/app/services/course.service.client.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./course-viewer/course-viewer.component */ "./src/app/course-viewer/course-viewer.component.ts");
/* harmony import */ var _module_list_module_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./module-list/module-list.component */ "./src/app/module-list/module-list.component.ts");
/* harmony import */ var _services_module_service_client__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/module.service.client */ "./src/app/services/module.service.client.ts");
/* harmony import */ var _lesson_tabs_lesson_tabs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lesson-tabs/lesson-tabs.component */ "./src/app/lesson-tabs/lesson-tabs.component.ts");
/* harmony import */ var _services_lesson_service_client__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/lesson.service.client */ "./src/app/services/lesson.service.client.ts");
/* harmony import */ var _widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./widget-list/widget-list.component */ "./src/app/widget-list/widget-list.component.ts");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _section_list_section_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./section-list/section-list.component */ "./src/app/section-list/section-list.component.ts");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/section.service.client */ "./src/app/services/section.service.client.ts");
/* harmony import */ var _quiz_list_quiz_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./quiz-list/quiz-list.component */ "./src/app/quiz-list/quiz-list.component.ts");
/* harmony import */ var _services_quiz_service_client__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/quiz.service.client */ "./src/app/services/quiz.service.client.ts");
/* harmony import */ var _quiz_taker_quiz_taker_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./quiz-taker/quiz-taker.component */ "./src/app/quiz-taker/quiz-taker.component.ts");
/* harmony import */ var _quiz_submissions_quiz_submissions_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./quiz-submissions/quiz-submissions.component */ "./src/app/quiz-submissions/quiz-submissions.component.ts");
/* harmony import */ var _topic_list_topic_list_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./topic-list/topic-list.component */ "./src/app/topic-list/topic-list.component.ts");
/* harmony import */ var _services_topic_service_client__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/topic.service.client */ "./src/app/services/topic.service.client.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _hello_world_hello_world_component__WEBPACK_IMPORTED_MODULE_3__["HelloWorldComponent"],
                _course_navigator_course_navigator_component__WEBPACK_IMPORTED_MODULE_6__["CourseNavigatorComponent"],
                _white_board_white_board_component__WEBPACK_IMPORTED_MODULE_7__["WhiteBoardComponent"],
                _course_grid_course_grid_component__WEBPACK_IMPORTED_MODULE_8__["CourseGridComponent"],
                _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_11__["CourseViewerComponent"],
                _module_list_module_list_component__WEBPACK_IMPORTED_MODULE_12__["ModuleListComponent"],
                _lesson_tabs_lesson_tabs_component__WEBPACK_IMPORTED_MODULE_14__["LessonTabsComponent"],
                _widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_16__["WidgetListComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_19__["RegisterComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_20__["ProfileComponent"],
                _section_list_section_list_component__WEBPACK_IMPORTED_MODULE_22__["SectionListComponent"],
                _quiz_list_quiz_list_component__WEBPACK_IMPORTED_MODULE_24__["QuizListComponent"],
                _quiz_taker_quiz_taker_component__WEBPACK_IMPORTED_MODULE_26__["QuizTakerComponent"],
                _quiz_submissions_quiz_submissions_component__WEBPACK_IMPORTED_MODULE_27__["QuizSubmissionsComponent"],
                _topic_list_topic_list_component__WEBPACK_IMPORTED_MODULE_28__["TopicListComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_30__["AdminComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_10__["routing"]
            ],
            providers: [
                _services_course_navigator_service_client__WEBPACK_IMPORTED_MODULE_5__["CourseNavigatorServiceClient"],
                _services_course_service_client__WEBPACK_IMPORTED_MODULE_9__["CourseServiceClient"],
                _services_module_service_client__WEBPACK_IMPORTED_MODULE_13__["ModuleServiceClient"],
                _services_lesson_service_client__WEBPACK_IMPORTED_MODULE_15__["LessonServiceClient"],
                _services_topic_service_client__WEBPACK_IMPORTED_MODULE_29__["TopicServiceClient"],
                _services_widget_service_client__WEBPACK_IMPORTED_MODULE_17__["WidgetServiceClient"],
                _services_user_service_client__WEBPACK_IMPORTED_MODULE_21__["UserServiceClient"],
                _services_section_service_client__WEBPACK_IMPORTED_MODULE_23__["SectionServiceClient"],
                _services_quiz_service_client__WEBPACK_IMPORTED_MODULE_25__["QuizServiceClient"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _white_board_white_board_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./white-board/white-board.component */ "./src/app/white-board/white-board.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course-viewer/course-viewer.component */ "./src/app/course-viewer/course-viewer.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _section_list_section_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./section-list/section-list.component */ "./src/app/section-list/section-list.component.ts");
/* harmony import */ var _quiz_list_quiz_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./quiz-list/quiz-list.component */ "./src/app/quiz-list/quiz-list.component.ts");
/* harmony import */ var _quiz_taker_quiz_taker_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./quiz-taker/quiz-taker.component */ "./src/app/quiz-taker/quiz-taker.component.ts");
/* harmony import */ var _quiz_submissions_quiz_submissions_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./quiz-submissions/quiz-submissions.component */ "./src/app/quiz-submissions/quiz-submissions.component.ts");











var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _white_board_white_board_component__WEBPACK_IMPORTED_MODULE_1__["WhiteBoardComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"] },
    { path: 'quizzes', component: _quiz_list_quiz_list_component__WEBPACK_IMPORTED_MODULE_8__["QuizListComponent"] },
    { path: 'quiz/:quizId', component: _quiz_taker_quiz_taker_component__WEBPACK_IMPORTED_MODULE_9__["QuizTakerComponent"] },
    { path: 'quiz/:quizId/submissions', component: _quiz_submissions_quiz_submissions_component__WEBPACK_IMPORTED_MODULE_10__["QuizSubmissionsComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"] },
    { path: 'course/:courseId', component: _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_3__["CourseViewerComponent"] },
    { path: 'course/:courseId/section', component: _section_list_section_list_component__WEBPACK_IMPORTED_MODULE_7__["SectionListComponent"] },
    { path: 'course/:courseId/module/:moduleId', component: _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_3__["CourseViewerComponent"] },
    { path: 'course/:courseId/module/:moduleId/lesson/:lessonId', component: _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_3__["CourseViewerComponent"] },
    { path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId', component: _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_3__["CourseViewerComponent"] },
    { path: '**', component: _white_board_white_board_component__WEBPACK_IMPORTED_MODULE_1__["WhiteBoardComponent"] } // last
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes, { useHash: true });


/***/ }),

/***/ "./src/app/course-grid/course-grid.component.css":
/*!*******************************************************!*\
  !*** ./src/app/course-grid/course-grid.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  margin-bottom: 15px;\n}\n"

/***/ }),

/***/ "./src/app/course-grid/course-grid.component.html":
/*!********************************************************!*\
  !*** ./src/app/course-grid/course-grid.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\" p-4  \" >\n<div class=\"row\">\n  <div *ngFor=\"let course of courses\" class=\"col-lg-3\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <a\n\n            routerLink=\"/course/{{course.id}}\"\n           class=\"btn btn-light form-control\">{{course.title}}</a>\n\n        <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n\n        <a routerLink=\"/course/{{course.id}}/section\"\n           class=\"btn btn-warning\">Enroll</a>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/course-grid/course-grid.component.ts":
/*!******************************************************!*\
  !*** ./src/app/course-grid/course-grid.component.ts ***!
  \******************************************************/
/*! exports provided: CourseGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseGridComponent", function() { return CourseGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/course.service.client */ "./src/app/services/course.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CourseGridComponent = /** @class */ (function () {
    function CourseGridComponent(service) {
        this.service = service;
        this.courses = [];
        this.checkedCourseId = '';
    }
    CourseGridComponent.prototype.enrolledAction = function (courseId) {
        this.checkedCourseId = courseId + '&0';
    };
    CourseGridComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.findAllCourses()
            .then(function (courses) { return _this.courses = courses; });
    };
    CourseGridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-course-grid',
            template: __webpack_require__(/*! ./course-grid.component.html */ "./src/app/course-grid/course-grid.component.html"),
            styles: [__webpack_require__(/*! ./course-grid.component.css */ "./src/app/course-grid/course-grid.component.css")]
        }),
        __metadata("design:paramtypes", [_services_course_service_client__WEBPACK_IMPORTED_MODULE_1__["CourseServiceClient"]])
    ], CourseGridComponent);
    return CourseGridComponent;
}());



/***/ }),

/***/ "./src/app/course-navigator/course-navigator.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/course-navigator/course-navigator.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/course-navigator/course-navigator.component.html":
/*!******************************************************************!*\
  !*** ./src/app/course-navigator/course-navigator.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid p-4\">\n<h1>Course Navigator ({{courses.length}})</h1>\n\n  <div class=\"row\">\n    <div class=\"col-3\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item active\">Courses</li>\n        <li *ngFor=\"let course of courses\"\n            (click)=\"selectCourse(course.id)\"\n            class=\"list-group-item\">\n          {{course.title}}\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-3\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item active\">Modules</li>\n        <li *ngFor=\"let module of modules\" class=\"list-group-item\">\n          {{module.title}}\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-3\">lessons</div>\n    <div class=\"col-3\">widgets</div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/course-navigator/course-navigator.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/course-navigator/course-navigator.component.ts ***!
  \****************************************************************/
/*! exports provided: CourseNavigatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseNavigatorComponent", function() { return CourseNavigatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_course_navigator_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/course-navigator.service.client */ "./src/app/services/course-navigator.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CourseNavigatorComponent = /** @class */ (function () {
    function CourseNavigatorComponent(service) {
        this.service = service;
        this.courses = [];
        this.modules = [];
    }
    CourseNavigatorComponent.prototype.selectCourse = function (courseId) {
        var _this = this;
        this.service.findAllModulesForCourses(courseId)
            .then(function (modules) { return _this.modules = modules; });
    };
    CourseNavigatorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.findAllCourses()
            .then(function (courses) { return _this.courses = courses; });
    };
    CourseNavigatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-course-navigator',
            template: __webpack_require__(/*! ./course-navigator.component.html */ "./src/app/course-navigator/course-navigator.component.html"),
            styles: [__webpack_require__(/*! ./course-navigator.component.css */ "./src/app/course-navigator/course-navigator.component.css")]
        }),
        __metadata("design:paramtypes", [_services_course_navigator_service_client__WEBPACK_IMPORTED_MODULE_1__["CourseNavigatorServiceClient"]])
    ], CourseNavigatorComponent);
    return CourseNavigatorComponent;
}());



/***/ }),

/***/ "./src/app/course-viewer/course-viewer.component.css":
/*!***********************************************************!*\
  !*** ./src/app/course-viewer/course-viewer.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/course-viewer/course-viewer.component.html":
/*!************************************************************!*\
  !*** ./src/app/course-viewer/course-viewer.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\" null !== course \" class=\"container-fluid \">\n  <div class=\"container-fluid\">\n    <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n      <a class=\"navbar-brand\" href=\"#\">White Board</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n        <ul class=\"navbar-nav\">\n          <li class=\"nav-item active\">\n            <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/login\">Login</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/register\">Register</a>\n          </li>\n          <li class=\"nav-item \">\n            <a class=\"nav-link\" routerLink=\"/profile\">Profile</a>\n\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </div>\n  <div class=\"p-4\">\n  <h2>{{course.title}}</h2>\n  <app-module-list></app-module-list>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/course-viewer/course-viewer.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/course-viewer/course-viewer.component.ts ***!
  \**********************************************************/
/*! exports provided: CourseViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseViewerComponent", function() { return CourseViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/course.service.client */ "./src/app/services/course.service.client.ts");
/* harmony import */ var _models_coruse_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/coruse.model.client */ "./src/app/models/coruse.model.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CourseViewerComponent = /** @class */ (function () {
    function CourseViewerComponent(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.course = new _models_coruse_model_client__WEBPACK_IMPORTED_MODULE_3__["Course"]();
    }
    CourseViewerComponent.prototype.loadCourse = function (courseId) {
        var _this = this;
        this.service.findCourseById(courseId)
            .then(function (course) { return _this.course = course; });
    };
    CourseViewerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { return _this.loadCourse(params['courseId']); });
    };
    CourseViewerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-course-viewer',
            template: __webpack_require__(/*! ./course-viewer.component.html */ "./src/app/course-viewer/course-viewer.component.html"),
            styles: [__webpack_require__(/*! ./course-viewer.component.css */ "./src/app/course-viewer/course-viewer.component.css")]
        }),
        __metadata("design:paramtypes", [_services_course_service_client__WEBPACK_IMPORTED_MODULE_2__["CourseServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CourseViewerComponent);
    return CourseViewerComponent;
}());



/***/ }),

/***/ "./src/app/hello-world/hello-world.component.css":
/*!*******************************************************!*\
  !*** ./src/app/hello-world/hello-world.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/hello-world/hello-world.component.html":
/*!********************************************************!*\
  !*** ./src/app/hello-world/hello-world.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{message}}</h1>\n\n<h2>Courses ({{courses.length}})</h2>\n\n<ul>\n  <li *ngFor=\"let course of courses\" class=\"list-item\" style=\"\">\n    {{course.title}}\n    <button (click)=\"deleteCourse(course.id)\">Delete</button>\n  </li>\n</ul>\n<input [(ngModel)]=\"courseTitle\"/>\n<button (click)=\"addCourse(courseTitle)\">\n  Add Course\n</button>\n"

/***/ }),

/***/ "./src/app/hello-world/hello-world.component.ts":
/*!******************************************************!*\
  !*** ./src/app/hello-world/hello-world.component.ts ***!
  \******************************************************/
/*! exports provided: HelloWorldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelloWorldComponent", function() { return HelloWorldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelloWorldComponent = /** @class */ (function () {
    function HelloWorldComponent() {
        this.message = 'Hello from Hello World Component!';
        this.courses = [
            { title: 'CS5200', id: 123 },
            { title: 'CS5610', id: 234 },
            { title: 'CS3200', id: 345 },
            { title: 'CS4550', id: 456 }
        ];
    }
    HelloWorldComponent.prototype.deleteCourse = function (courseId) {
        this.courses = this.courses.filter(function (course) {
            return course.id !== courseId;
        });
    };
    HelloWorldComponent.prototype.addCourse = function (title) {
        this.courses.push({
            title: title,
            id: title
        });
        this.courseTitle = '';
    };
    HelloWorldComponent.prototype.ngOnInit = function () {
    };
    HelloWorldComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hello-world',
            template: __webpack_require__(/*! ./hello-world.component.html */ "./src/app/hello-world/hello-world.component.html"),
            styles: [__webpack_require__(/*! ./hello-world.component.css */ "./src/app/hello-world/hello-world.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HelloWorldComponent);
    return HelloWorldComponent;
}());



/***/ }),

/***/ "./src/app/lesson-tabs/lesson-tabs.component.css":
/*!*******************************************************!*\
  !*** ./src/app/lesson-tabs/lesson-tabs.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wbdv.active {\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n\n.wbdv a {\n  color: black;\n}\n\n.wbdv.active a {\n  color: white;\n}\n"

/***/ }),

/***/ "./src/app/lesson-tabs/lesson-tabs.component.html":
/*!********************************************************!*\
  !*** ./src/app/lesson-tabs/lesson-tabs.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\" null !== lessons \">\n<ul class=\"nav nav-tabs\">\n  <li *ngFor=\"let lesson of lessons\"\n      class=\"nav-item wbdv  \">\n\n    <a class=\"nav-link\"\n       [ngClass]=\"{'active': lesson.id == lessonId}\"\n       routerLink=\"/course/{{courseId}}/module/{{moduleId}}/lesson/{{lesson.id}}\">\n      {{lesson.title}}\n    </a>\n  </li>\n</ul>\n\n\n  <app-topic-list></app-topic-list>\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/lesson-tabs/lesson-tabs.component.ts":
/*!******************************************************!*\
  !*** ./src/app/lesson-tabs/lesson-tabs.component.ts ***!
  \******************************************************/
/*! exports provided: LessonTabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonTabsComponent", function() { return LessonTabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_lesson_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/lesson.service.client */ "./src/app/services/lesson.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LessonTabsComponent = /** @class */ (function () {
    function LessonTabsComponent(service, route) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.lessons = null;
        this.route.params.subscribe(function (params) { return _this.setParams(params); });
    }
    LessonTabsComponent.prototype.setParams = function (params) {
        this.courseId = params['courseId'];
        this.moduleId = params['moduleId'];
        this.lessonId = params['lessonId'];
        console.log('course 1121 id ' + this.courseId);
        console.log('module 1121 id ' + this.moduleId);
        if (this.moduleId !== undefined) {
            this.loadLessons(this.courseId, this.moduleId);
        }
    };
    LessonTabsComponent.prototype.loadLessons = function (courseId, moduleId) {
        var _this = this;
        // this.moduleId = moduleId;
        console.log('course 321 id ' + courseId);
        console.log('module 321 id ' + moduleId);
        if (courseId !== undefined || moduleId !== undefined) {
            this.service.findLessonsForModule(courseId, moduleId)
                .then(function (lessons) { return _this.lessons = lessons; });
        }
    };
    LessonTabsComponent.prototype.ngOnInit = function () {
    };
    LessonTabsComponent.prototype.ngAfterContentInit = function () {
    };
    LessonTabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lesson-tabs',
            template: __webpack_require__(/*! ./lesson-tabs.component.html */ "./src/app/lesson-tabs/lesson-tabs.component.html"),
            styles: [__webpack_require__(/*! ./lesson-tabs.component.css */ "./src/app/lesson-tabs/lesson-tabs.component.css")]
        }),
        __metadata("design:paramtypes", [_services_lesson_service_client__WEBPACK_IMPORTED_MODULE_2__["LessonServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], LessonTabsComponent);
    return LessonTabsComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" href=\"#\">White Board</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/register\">Register</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</div>\n\n\n<div class=\"container-fluid p-4\">\n  <h1 class=\"navbar-brand\">Login</h1>\n\n  <input [(ngModel)]=\"username\"\n         placeholder=\"username\"\n         class=\"form-control\"/>\n  <input [(ngModel)]=\"password\"\n         placeholder=\"password\"\n         class=\"form-control\"/>\n  <button (click)=\"login(username, password)\"\n          class=\"btn btn-primary btn-block\">\n    Login\n  </button>\n\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, service) {
        this.router = router;
        this.service = service;
    }
    LoginComponent.prototype.login = function (username, password) {
        var _this = this;
        console.log([username, password]);
        this.service
            .login(username, password)
            .then(function (code) {
            _this.checkUser(code);
        });
    };
    LoginComponent.prototype.checkUser = function (user) {
        console.log(' back information ' + user.status);
        if (user.status === 404) {
            alert('username and password is not match ');
        }
        else {
            if (user.status === 201) {
                alert('admin mode ! ');
            }
            this.router.navigate(['profile']);
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/coruse.model.client.ts":
/*!***********************************************!*\
  !*** ./src/app/models/coruse.model.client.ts ***!
  \***********************************************/
/*! exports provided: Course */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Course", function() { return Course; });
var Course = /** @class */ (function () {
    function Course() {
    }
    return Course;
}());



/***/ }),

/***/ "./src/app/module-list/module-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/module-list/module-list.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wbdv.active {\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n\n.wbdv a {\n  color: black;\n}\n\n.wbdv.active a {\n  color: white;\n}\n"

/***/ }),

/***/ "./src/app/module-list/module-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/module-list/module-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\" null !== modules \" class=\"row\">\n\n  <div class=\"col-3\">\n    <ul class=\"list-group rounded\">\n      <li class=\"list-group-item   active btn btn-light\">Modules</li>\n      <li [ngClass]=\"{'active': module.id == moduleId}\" *ngFor=\"let module of modules\"\n          class=\"list-group-item wbdv active btn btn-outline-success\">\n\n        <a    routerLink=\"/course/{{courseId}}/module/{{module.id}}\">\n          {{module.title}}</a>\n      </li>\n    </ul>\n  </div>\n  <div class=\"col-8\">\n    <app-lesson-tabs></app-lesson-tabs>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/module-list/module-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/module-list/module-list.component.ts ***!
  \******************************************************/
/*! exports provided: ModuleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleListComponent", function() { return ModuleListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_module_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/module.service.client */ "./src/app/services/module.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModuleListComponent = /** @class */ (function () {
    function ModuleListComponent(service, route) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.modules = null;
        this.route.params.subscribe(function (params) { return _this.setParams(params); });
        this.loadModules(this.courseId);
    }
    ModuleListComponent.prototype.setParams = function (params) {
        this.courseId = params['courseId'];
        this.moduleId = params['moduleId'];
        console.log('course id ' + this.courseId);
        console.log('moduleId id 22 ' + this.moduleId);
    };
    ModuleListComponent.prototype.loadModules = function (courseId) {
        var _this = this;
        console.log('course id 22 ' + courseId);
        // this.courseId = courseId;
        if (courseId !== undefined)
            this.service.findModulesForCourse(courseId)
                .then(function (modules) {
                _this.modules = modules;
            });
    };
    ModuleListComponent.prototype.ngOnInit = function () {
        console.log('oninit moudles id 22 ' + JSON.stringify(this.modules));
    };
    ModuleListComponent.prototype.ngOnChanges = function (changes) {
    };
    ModuleListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-module-list',
            template: __webpack_require__(/*! ./module-list.component.html */ "./src/app/module-list/module-list.component.html"),
            styles: [__webpack_require__(/*! ./module-list.component.css */ "./src/app/module-list/module-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_module_service_client__WEBPACK_IMPORTED_MODULE_2__["ModuleServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ModuleListComponent);
    return ModuleListComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container-fluid\">\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" href=\"#\">White Board</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n\n        <li class=\"nav-item\">\n          <a   class=\"nav-link\" [hidden]=\"adminMode\" routerLink=\"/admin\">Admin</a>\n\n        </li>\n\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" (click)=\"logout()\">Logout</a>\n\n        </li>\n\n      </ul>\n    </div>\n  </nav>\n</div>\n\n\n<div *ngIf=\" null !== sections \" class=\"container-fluid p-4\">\n  <h1>Profile</h1>\n\n  <input [(ngModel)]=\"user.username\"\n         placeholder=\"username\"\n         class=\"form-control\"/>\n  <input [(ngModel)]=\"user.firstName\"\n         placeholder=\"first name\"\n         class=\"form-control\"/>\n  <input [(ngModel)]=\"user.lastName\"\n         placeholder=\"lastName\"\n         class=\"form-control\"/>\n  <input [(ngModel)]=\"user.email\"\n         placeholder=\"email\"\n         class=\"form-control\"/>\n  <input [(ngModel)]=\"user.phoneNumber\"\n         placeholder=\"phone number\"\n         class=\"form-control\"/>\n  <input [(ngModel)]=\"user.address\"\n         placeholder=\"address\"\n         class=\"form-control\"/>\n  <button (click)=\"update()\"\n          class=\"btn btn-primary btn-block\">\n    Update\n  </button>\n\n  <h2>Sections ({{sections.length}})</h2>\n\n  <ul class=\"list-group\">\n    <li *ngFor=\"let enrollment of sections\" class=\"list-group-item\">\n      <a routerLink=\"/course/{{enrollment.section.courseId}}\"  >{{enrollment.section.name}}</a>\n      ({{enrollment.section.seats}})\n      <button (click)=\"unenroll (enrollment)\"\n              class=\"float-right btn btn-primary\">delete</button>\n    </li>\n\n\n  </ul>\n\n\n\n\n\n\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/section.service.client */ "./src/app/services/section.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(service, sectionService, router) {
        this.service = service;
        this.sectionService = sectionService;
        this.router = router;
        this.user = {};
        this.sections = [];
        this.adminMode = true;
        this.checkedCourseId = '';
    }
    ProfileComponent.prototype.update = function () {
        var _this = this;
        this.service
            .update(this.user)
            .then(function (user) {
            return _this.updateUser(user);
        });
    };
    ProfileComponent.prototype.checkAdmin = function (user) {
        if (user.username === 'admin') {
            this.adminMode = false;
        }
        else {
            this.adminMode = true;
        }
        this.user = user;
    };
    ProfileComponent.prototype.enrolledAction = function (courseId) {
        this.checkedCourseId = courseId + '&1';
    };
    ProfileComponent.prototype.updateUser = function (user) {
        if (user.status !== 404) {
            this.checkAdmin(user);
            setTimeout(alert('update success'), 1000);
            console.log(' user' + JSON.stringify(user));
        }
        else {
            alert('not success!');
        }
    };
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.service
            .logout()
            .then(function () {
            return _this.router.navigate(['login']);
        });
    };
    ProfileComponent.prototype.unenroll = function (enroll) {
        var _this = this;
        console.log('in front check enroll find ' + JSON.stringify(enroll));
        this
            .sectionService
            .unenrollSection(enroll)
            .then(function () {
            _this.sectionService
                .findSectionsForStudent()
                .then(function (sections) {
                console.log('in front check section find ' + JSON.stringify(sections));
                _this.sections = sections;
            });
        });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('user ' + JSON.stringify(this.user));
        this.service
            .profile()
            .then(function (user) {
            console.log('user111 ' + JSON.stringify(user));
            if (user.status !== undefined && user.status === 404) {
                alert('you are not login! ');
                _this.router.navigate(['login']);
            }
            _this.checkAdmin(user);
        });
        this.sectionService
            .findSectionsForStudent()
            .then(function (sections) {
            _this.sections = sections;
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_1__["UserServiceClient"],
            _services_section_service_client__WEBPACK_IMPORTED_MODULE_3__["SectionServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/quiz-list/quiz-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/quiz-list/quiz-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/quiz-list/quiz-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/quiz-list/quiz-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h2>Quizzes</h2>\n\n  <ul class=\"list-group\">\n    <li *ngFor=\"let quiz of quizzes\" class=\"list-group-item\">\n      {{quiz.name}}\n\n      <a routerLink=\"/quiz/{{quiz._id}}/submissions\" class=\"btn btn-info float-right\">Submissions</a>\n      <a routerLink=\"/quiz/{{quiz._id}}\" class=\"btn btn-success float-right\">Take</a>\n    </li>\n  </ul>\n\n</div>\n"

/***/ }),

/***/ "./src/app/quiz-list/quiz-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/quiz-list/quiz-list.component.ts ***!
  \**************************************************/
/*! exports provided: QuizListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizListComponent", function() { return QuizListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_quiz_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/quiz.service.client */ "./src/app/services/quiz.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuizListComponent = /** @class */ (function () {
    function QuizListComponent(service) {
        this.service = service;
        this.quizzes = [];
    }
    QuizListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.findAllQuizzes()
            .then(function (quizzes) { return _this.quizzes = quizzes; });
    };
    QuizListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quiz-list',
            template: __webpack_require__(/*! ./quiz-list.component.html */ "./src/app/quiz-list/quiz-list.component.html"),
            styles: [__webpack_require__(/*! ./quiz-list.component.css */ "./src/app/quiz-list/quiz-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_quiz_service_client__WEBPACK_IMPORTED_MODULE_1__["QuizServiceClient"]])
    ], QuizListComponent);
    return QuizListComponent;
}());



/***/ }),

/***/ "./src/app/quiz-submissions/quiz-submissions.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/quiz-submissions/quiz-submissions.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/quiz-submissions/quiz-submissions.component.html":
/*!******************************************************************!*\
  !*** ./src/app/quiz-submissions/quiz-submissions.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h2>Submissions</h2>\n\n  <ul class=\"list-group\">\n    <li *ngFor=\"let submission of submissions\" class=\"list-group-item\">\n      {{submission.username}}\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/quiz-submissions/quiz-submissions.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/quiz-submissions/quiz-submissions.component.ts ***!
  \****************************************************************/
/*! exports provided: QuizSubmissionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizSubmissionsComponent", function() { return QuizSubmissionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_quiz_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/quiz.service.client */ "./src/app/services/quiz.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuizSubmissionsComponent = /** @class */ (function () {
    function QuizSubmissionsComponent(service, aRoute) {
        var _this = this;
        this.service = service;
        this.aRoute = aRoute;
        this.quizId = '';
        this.submissions = [];
        this.aRoute.params.subscribe(function (params) {
            return _this.loadSubmissions(params['quizId']);
        });
    }
    QuizSubmissionsComponent.prototype.loadSubmissions = function (quizId) {
        var _this = this;
        this.quizId = quizId;
        this.service.loadSubmissions(this.quizId)
            .then(function (submissions) { return _this.submissions = submissions; });
    };
    QuizSubmissionsComponent.prototype.ngOnInit = function () {
    };
    QuizSubmissionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quiz-submissions',
            template: __webpack_require__(/*! ./quiz-submissions.component.html */ "./src/app/quiz-submissions/quiz-submissions.component.html"),
            styles: [__webpack_require__(/*! ./quiz-submissions.component.css */ "./src/app/quiz-submissions/quiz-submissions.component.css")]
        }),
        __metadata("design:paramtypes", [_services_quiz_service_client__WEBPACK_IMPORTED_MODULE_2__["QuizServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], QuizSubmissionsComponent);
    return QuizSubmissionsComponent;
}());



/***/ }),

/***/ "./src/app/quiz-taker/quiz-taker.component.css":
/*!*****************************************************!*\
  !*** ./src/app/quiz-taker/quiz-taker.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/quiz-taker/quiz-taker.component.html":
/*!******************************************************!*\
  !*** ./src/app/quiz-taker/quiz-taker.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h2>Quiz: {{quizId}}</h2>\n  <ul class=\"list-group\">\n    <li *ngFor=\"let question of quiz.questions\" class=\"list-group-item\">\n      <div [ngSwitch]=\"question.type\">\n        <div *ngSwitchCase=\"'essay'\">\n          <h1>Essay Question</h1>\n          <textarea [(ngModel)]=\"submission[question._id]\" class=\"form-control\"></textarea>\n        </div>\n      </div>\n    </li>\n  </ul>\n  <button (click)=\"submit(submission)\">Submit</button>\n</div>\n"

/***/ }),

/***/ "./src/app/quiz-taker/quiz-taker.component.ts":
/*!****************************************************!*\
  !*** ./src/app/quiz-taker/quiz-taker.component.ts ***!
  \****************************************************/
/*! exports provided: QuizTakerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizTakerComponent", function() { return QuizTakerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_quiz_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/quiz.service.client */ "./src/app/services/quiz.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuizTakerComponent = /** @class */ (function () {
    function QuizTakerComponent(service, activatedRoute) {
        var _this = this;
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.quizId = '';
        this.quiz = {};
        this.submission = {};
        this.activatedRoute
            .params
            .subscribe(function (params) { return _this.loadQuiz(params['quizId']); });
    }
    QuizTakerComponent.prototype.loadQuiz = function (quizId) {
        var _this = this;
        this.quizId = quizId;
        this.service
            .findQuizById(quizId)
            .then(function (quiz) { return _this.quiz = quiz; });
    };
    QuizTakerComponent.prototype.submit = function (submission) {
        console.log(this.submission);
        this.service
            .submitQuiz(this.submission, this.quizId);
    };
    QuizTakerComponent.prototype.ngOnInit = function () {
    };
    QuizTakerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quiz-taker',
            template: __webpack_require__(/*! ./quiz-taker.component.html */ "./src/app/quiz-taker/quiz-taker.component.html"),
            styles: [__webpack_require__(/*! ./quiz-taker.component.css */ "./src/app/quiz-taker/quiz-taker.component.css")]
        }),
        __metadata("design:paramtypes", [_services_quiz_service_client__WEBPACK_IMPORTED_MODULE_2__["QuizServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], QuizTakerComponent);
    return QuizTakerComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" href=\"#\">White Board</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/login\">Login</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</div>\n\n<div class=\"container-fluid p-4\">\n  <h1 class=\"navbar-brand\">Register</h1>\n\n  <input [(ngModel)]=\"username\"\n         placeholder=\"username\"\n         class=\"form-control\"/>\n  <input [(ngModel)]=\"password\"\n         placeholder=\"password\"\n         class=\"form-control\"/>\n  <input [(ngModel)]=\"password2\"\n         placeholder=\"verify password\"\n         class=\"form-control\"/>\n  <button (click)=\"register(username, password, password2)\"\n          class=\"btn btn-primary btn-block\">\n    Register\n  </button>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, service) {
        this.router = router;
        this.service = service;
    }
    RegisterComponent.prototype.register = function (username, password, password2) {
        var _this = this;
        if (password !== password2) {
            alert('password is not match');
        }
        else {
            this.service
                .createUser(username, password)
                .then(function (res) {
                return _this.checkUser(res);
            });
        }
    };
    RegisterComponent.prototype.checkUser = function (user) {
        console.log(' back information ' + user.status);
        if (user.status === 401) {
            alert('user already register');
        }
        else {
            this.router.navigate(['profile']);
        }
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/section-list/section-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/section-list/section-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/section-list/section-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/section-list/section-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" href=\"#\">White Board</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/login\">Login</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/register\">Register</a>\n        </li>\n        <li class=\"nav-item \">\n          <a class=\"nav-link\" routerLink=\"/profile\">Profile</a>\n\n        </li>\n      </ul>\n    </div>\n  </nav>\n</div>\n\n\n<div class=\"container-fluid p-4\">\n  <h1 class=\"navbar-brand\">Sections for course: {{course.title}}</h1>\n\n  <ul class=\"list-group\">\n    <li *ngFor=\"let section of sections\" class=\"list-group-item\">\n      {{section.name}}  seat: {{section.seats}}\n      <button  *ngIf= \"section.seats!==0\" (click)=\"enroll(section)\"\n              class=\"float-right btn btn-primary\">Enroll</button>\n    </li>\n  </ul>\n\n</div>\n"

/***/ }),

/***/ "./src/app/section-list/section-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/section-list/section-list.component.ts ***!
  \********************************************************/
/*! exports provided: SectionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionListComponent", function() { return SectionListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/section.service.client */ "./src/app/services/section.service.client.ts");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/course.service.client */ "./src/app/services/course.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SectionListComponent = /** @class */ (function () {
    function SectionListComponent(service, courseServer, router, route) {
        var _this = this;
        this.service = service;
        this.courseServer = courseServer;
        this.router = router;
        this.route = route;
        this.sectionName = '';
        this.seats = '';
        this.courseId = '';
        this.sections = [];
        this.course = '';
        this.route.params.subscribe(function (params) { return _this.loadSections(params['courseId']); });
    }
    SectionListComponent.prototype.loadSections = function (courseId) {
        var _this = this;
        this.courseId = courseId;
        this.
            courseServer
            .findCourseById(courseId)
            .then(function (course) { return _this.course = course; });
        this
            .service
            .findSectionsForCourse(courseId)
            .then(function (sections) { return _this.sections = sections; });
    };
    SectionListComponent.prototype.createSection = function (sectionName, seats) {
        var _this = this;
        this
            .service
            .createSection(this.courseId, sectionName, seats)
            .then(function () {
            _this.loadSections(_this.courseId);
        });
    };
    SectionListComponent.prototype.enroll = function (section) {
        var _this = this;
        this.service
            .enrollStudentInSection(section._id)
            .then(function (back) {
            _this.checkEnroll(back);
        });
    };
    SectionListComponent.prototype.checkEnroll = function (user) {
        console.log(' back information ' + user.status);
        if (user.status === 401) {
            alert('user already enrolled this section');
        }
        else {
            this.router.navigate(['profile']);
        }
    };
    SectionListComponent.prototype.ngOnInit = function () {
    };
    SectionListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-section-list',
            template: __webpack_require__(/*! ./section-list.component.html */ "./src/app/section-list/section-list.component.html"),
            styles: [__webpack_require__(/*! ./section-list.component.css */ "./src/app/section-list/section-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_section_service_client__WEBPACK_IMPORTED_MODULE_2__["SectionServiceClient"],
            _services_course_service_client__WEBPACK_IMPORTED_MODULE_3__["CourseServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], SectionListComponent);
    return SectionListComponent;
}());



/***/ }),

/***/ "./src/app/services/course-navigator.service.client.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/course-navigator.service.client.ts ***!
  \*************************************************************/
/*! exports provided: CourseNavigatorServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseNavigatorServiceClient", function() { return CourseNavigatorServiceClient; });
var CourseNavigatorServiceClient = /** @class */ (function () {
    function CourseNavigatorServiceClient() {
        // url = 'http://localhost:8080';
        this.url = 'https://webdev-summerfull-2018.herokuapp.com';
    }
    CourseNavigatorServiceClient.prototype.findAllCourses = function () {
        return fetch(this.url + '/api/course')
            .then(function (response) { return response.json(); });
    };
    CourseNavigatorServiceClient.prototype.findAllModulesForCourses = function (courseId) {
        return fetch(this.url + '/api/course/' + courseId + '/module')
            .then(function (response) { return response.json(); });
    };
    return CourseNavigatorServiceClient;
}());



/***/ }),

/***/ "./src/app/services/course.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/course.service.client.ts ***!
  \***************************************************/
/*! exports provided: CourseServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseServiceClient", function() { return CourseServiceClient; });
var CourseServiceClient = /** @class */ (function () {
    function CourseServiceClient() {
        // url = 'http://localhost:8080';
        this.url = 'https://webdev-summerfull-2018.herokuapp.com';
        this.COURSE_URL = this.url + '/api/course';
    }
    CourseServiceClient.prototype.findAllCourses = function () {
        return fetch(this.COURSE_URL)
            .then(function (response) { return response.json(); });
    };
    CourseServiceClient.prototype.findCourseById = function (courseId) {
        return fetch(this.COURSE_URL + '/' + courseId)
            .then(function (response) { return response.json(); });
    };
    return CourseServiceClient;
}());



/***/ }),

/***/ "./src/app/services/lesson.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/lesson.service.client.ts ***!
  \***************************************************/
/*! exports provided: LessonServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonServiceClient", function() { return LessonServiceClient; });
var LessonServiceClient = /** @class */ (function () {
    function LessonServiceClient() {
        // url = 'http://localhost:8080';
        this.url = 'https://webdev-summerfull-2018.herokuapp.com';
    }
    LessonServiceClient.prototype.findLessonsForModule = function (courseId, moduleId) {
        return fetch(this.url + '/api/course/' + courseId + '/module/' + moduleId + '/lesson')
            .then(function (response) { return response.json(); });
    };
    return LessonServiceClient;
}());



/***/ }),

/***/ "./src/app/services/module.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/module.service.client.ts ***!
  \***************************************************/
/*! exports provided: ModuleServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleServiceClient", function() { return ModuleServiceClient; });
var ModuleServiceClient = /** @class */ (function () {
    function ModuleServiceClient() {
        // url = 'http://localhost:8080';
        this.url = 'https://webdev-summerfull-2018.herokuapp.com';
        this.MODULE_URL = this.url + '/api/course/COURSE_ID/module';
    }
    ModuleServiceClient.prototype.findModulesForCourse = function (courseId) {
        return fetch(this.MODULE_URL.replace('COURSE_ID', courseId))
            .then(function (response) { return response.json(); });
    };
    return ModuleServiceClient;
}());



/***/ }),

/***/ "./src/app/services/quiz.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/quiz.service.client.ts ***!
  \*************************************************/
/*! exports provided: QuizServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizServiceClient", function() { return QuizServiceClient; });
var QuizServiceClient = /** @class */ (function () {
    function QuizServiceClient() {
    }
    QuizServiceClient.prototype.loadSubmissions = function (quizId) {
        return fetch('http://localhost:4000/api/quiz/' + quizId + '/submissions')
            .then(function (response) { return response.json(); });
    };
    QuizServiceClient.prototype.submitQuiz = function (quiz, quizId) {
        return fetch('http://localhost:4000/api/quiz/' + quizId, {
            method: 'post',
            body: JSON.stringify(quiz),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(function (response) { return response.json(); });
    };
    QuizServiceClient.prototype.findQuizById = function (quizId) {
        return fetch('http://localhost:4000/api/quiz/' + quizId)
            .then(function (response) { return response.json(); });
    };
    QuizServiceClient.prototype.findAllQuizzes = function () {
        return fetch('http://localhost:4000/api/quiz')
            .then(function (response) { return response.json(); });
    };
    return QuizServiceClient;
}());



/***/ }),

/***/ "./src/app/services/section.service.client.ts":
/*!****************************************************!*\
  !*** ./src/app/services/section.service.client.ts ***!
  \****************************************************/
/*! exports provided: SectionServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionServiceClient", function() { return SectionServiceClient; });
var SectionServiceClient = /** @class */ (function () {
    function SectionServiceClient() {
        // URL = 'http://localhost:4000';
        this.URL = 'https://web-summer2018-nodejs-kenzhu.herokuapp.com';
        this.SECTION_URL = this.URL + '/api/course/COURSEID/section';
        this.Find = this.URL + '/api/student/section';
        this.delete = this.URL + '/api/section/sectionId';
        this.update = this.URL + '/api/section/sectionId';
        this.unenrollment = this.URL + '/api/student/section/sectionId';
    }
    SectionServiceClient.prototype.findSectionsForStudent = function () {
        return fetch(this.Find, {
            credentials: 'include'
        })
            .then(function (response) {
            console.log('resoponse 52 ' + JSON.stringify(response));
            if (response.status === 404) {
                return response;
            }
            else {
                return response.json();
            }
        });
    };
    SectionServiceClient.prototype.enrollStudentInSection = function (sectionId) {
        var url = this.URL + '/api/student/section/' + sectionId;
        return fetch(url, {
            method: 'post',
            credentials: 'include'
        });
    };
    SectionServiceClient.prototype.unenrollSection = function (enroll) {
        var url = this.unenrollment.replace('sectionId', enroll.section._id);
        return fetch(url, {
            method: 'delete',
            body: JSON.stringify(enroll),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    SectionServiceClient.prototype.findSectionsForCourse = function (courseId) {
        return fetch(this.SECTION_URL.replace('COURSEID', courseId))
            .then(function (response) { return response.json(); });
    };
    SectionServiceClient.prototype.createSection = function (courseId, name, seats) {
        var section = { courseId: courseId, name: name, seats: seats };
        return fetch(this.SECTION_URL.replace('COURSEID', courseId), {
            method: 'post',
            body: JSON.stringify(section),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    SectionServiceClient.prototype.updateSection = function (sectionId, sectionName, seats) {
        var section = {
            id: sectionId,
            name: sectionName,
            seats: seats
        };
        console.log('update in section 4 insde ' + JSON.stringify(section));
        return fetch(this.delete.replace('sectionId', sectionId), {
            method: 'put',
            body: JSON.stringify(section),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    SectionServiceClient.prototype.deleteSection = function (section) {
        console.log('delete in section 4 insde ' + JSON.stringify(section));
        return fetch(this.delete.replace('sectionId', section.id), {
            method: 'delete',
            body: JSON.stringify(section),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    return SectionServiceClient;
}());



/***/ }),

/***/ "./src/app/services/topic.service.client.ts":
/*!**************************************************!*\
  !*** ./src/app/services/topic.service.client.ts ***!
  \**************************************************/
/*! exports provided: TopicServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicServiceClient", function() { return TopicServiceClient; });
var TopicServiceClient = /** @class */ (function () {
    function TopicServiceClient() {
        // url = 'http://localhost:8080';
        this.url = 'https://webdev-summerfull-2018.herokuapp.com';
    }
    TopicServiceClient.prototype.findTopicsForLesson = function (courseId, moduleId, LessonId) {
        return fetch(this.url + '/api/course/' + courseId + '/module/' + moduleId + '/lesson/' + LessonId + '/topic')
            .then(function (response) { return response.json(); });
    };
    return TopicServiceClient;
}());



/***/ }),

/***/ "./src/app/services/user.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/user.service.client.ts ***!
  \*************************************************/
/*! exports provided: UserServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserServiceClient", function() { return UserServiceClient; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
// const Host = 'http://localhost:4000';
var Host = 'https://web-summer2018-nodejs-kenzhu.herokuapp.com';
var APIUSER = Host + '/api/user/';
var APILOGIN = Host + '/api/login';
var APILOGOUT = Host + '/api/profile';
var APIPROFILE = Host + '/api/profile';

var router = _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"];
var UserServiceClient = /** @class */ (function () {
    function UserServiceClient() {
    }
    UserServiceClient.prototype.findUserById = function (userId) {
        return fetch(APIUSER + userId)
            .then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.login = function (username, password) {
        var credentials = {
            username: username,
            password: password
        };
        return fetch(APILOGIN, {
            method: 'post',
            body: JSON.stringify(credentials),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    UserServiceClient.prototype.logout = function () {
        return fetch(APILOGOUT, {
            method: 'delete',
            credentials: 'include'
        });
    };
    UserServiceClient.prototype.profile = function () {
        return fetch(APIPROFILE, {
            credentials: 'include',
        })
            .then(function (response) {
            console.log('resoponse22 ' + response);
            if (response.status === 404) {
                return response;
            }
            else {
                console.log('resoponse ' + JSON.stringify(response));
                return response.json();
            }
        });
    };
    UserServiceClient.prototype.update = function (user) {
        return fetch(APIPROFILE, {
            body: JSON.stringify(user),
            credentials: 'include',
            method: 'put',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.createUser = function (username, password) {
        var user = {
            username: username,
            password: password
        };
        return fetch(APIUSER, {
            body: JSON.stringify(user),
            credentials: 'include',
            method: 'post',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    return UserServiceClient;
}());



/***/ }),

/***/ "./src/app/services/widget.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/widget.service.client.ts ***!
  \***************************************************/
/*! exports provided: WidgetServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetServiceClient", function() { return WidgetServiceClient; });
var WidgetServiceClient = /** @class */ (function () {
    function WidgetServiceClient() {
        // url = 'http://localhost:8080';
        this.url = 'https://webdev-summerfull-2018.herokuapp.com';
    }
    WidgetServiceClient.prototype.findWidgetsForTopic = function (topicId) {
        return fetch(this.url + '/api/topic/' + topicId + '/widget')
            .then(function (response) { return response.json(); });
    };
    return WidgetServiceClient;
}());



/***/ }),

/***/ "./src/app/topic-list/topic-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/topic-list/topic-list.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wbdv1.active {\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n\n.wbdv1 a {\n  color: black;\n}\n\n.wbdv1.active a {\n  color: white;\n}\n"

/***/ }),

/***/ "./src/app/topic-list/topic-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/topic-list/topic-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\" null !== topics \">\n<ul class=\"nav nav-tabs\">\n  <li *ngFor=\"let topic of topics\"\n      class=\"nav-item wbdv1\">\n\n    <a class=\"nav-link\"\n       [ngClass]=\"{'active': topic.id == topicId}\"\n       routerLink=\"/course/{{courseId}}/module/{{moduleId}}/lesson/{{lessonId}}/topic/{{topic.id}}\">\n      {{topic.title}}\n    </a>\n  </li>\n</ul>\n\n<app-widget-list></app-widget-list>\n</div>\n"

/***/ }),

/***/ "./src/app/topic-list/topic-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/topic-list/topic-list.component.ts ***!
  \****************************************************/
/*! exports provided: TopicListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicListComponent", function() { return TopicListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_topic_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/topic.service.client */ "./src/app/services/topic.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TopicListComponent = /** @class */ (function () {
    function TopicListComponent(service, route) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.topics = null;
        this.route.params.subscribe(function (params) { return _this.setParams(params); });
        this.loadTopics(this.courseId, this.moduleId, this.lessonId);
    }
    TopicListComponent.prototype.setParams = function (params) {
        this.courseId = params['courseId'];
        this.moduleId = params['moduleId'];
        this.lessonId = params['lessonId'];
        this.topicId = params['topicId'];
    };
    TopicListComponent.prototype.loadTopics = function (courseId, moduleId, lessonId) {
        var _this = this;
        this.courseId = courseId;
        if (lessonId !== undefined) {
            this.service.findTopicsForLesson(courseId, moduleId, lessonId)
                .then(function (topics) {
                _this.topics = topics;
            });
        }
    };
    TopicListComponent.prototype.ngOnInit = function () {
    };
    TopicListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-topic-list',
            template: __webpack_require__(/*! ./topic-list.component.html */ "./src/app/topic-list/topic-list.component.html"),
            styles: [__webpack_require__(/*! ./topic-list.component.css */ "./src/app/topic-list/topic-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_topic_service_client__WEBPACK_IMPORTED_MODULE_2__["TopicServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], TopicListComponent);
    return TopicListComponent;
}());



/***/ }),

/***/ "./src/app/white-board/white-board.component.css":
/*!*******************************************************!*\
  !*** ./src/app/white-board/white-board.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/white-board/white-board.component.html":
/*!********************************************************!*\
  !*** ./src/app/white-board/white-board.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n\n\n  <div class=\"container-fluid\">\n      <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n        <a class=\"navbar-brand\" href=\"#\">White Board</a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n          <ul class=\"navbar-nav\">\n            <li class=\"nav-item active\">\n              <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLink=\"/login\">Login</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLink=\"/register\">Register</a>\n            </li>\n            <li class=\"nav-item \">\n              <a class=\"nav-link\" routerLink=\"/profile\">Profile</a>\n\n            </li>\n          </ul>\n        </div>\n      </nav>\n  </div>\n\n  <app-course-grid></app-course-grid>\n"

/***/ }),

/***/ "./src/app/white-board/white-board.component.ts":
/*!******************************************************!*\
  !*** ./src/app/white-board/white-board.component.ts ***!
  \******************************************************/
/*! exports provided: WhiteBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhiteBoardComponent", function() { return WhiteBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WhiteBoardComponent = /** @class */ (function () {
    function WhiteBoardComponent() {
    }
    WhiteBoardComponent.prototype.ngOnInit = function () {
    };
    WhiteBoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-white-board',
            template: __webpack_require__(/*! ./white-board.component.html */ "./src/app/white-board/white-board.component.html"),
            styles: [__webpack_require__(/*! ./white-board.component.css */ "./src/app/white-board/white-board.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WhiteBoardComponent);
    return WhiteBoardComponent;
}());



/***/ }),

/***/ "./src/app/widget-list/widget-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/widget-list/widget-list.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/widget-list/widget-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/widget-list/widget-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\" null !== widgets \" >\n\n  <div class=\"border p-4   rounded\">\n  <div *ngFor=\"let widget of map\">\n\n  <div [ngSwitch]=\"widget.widgetType\">\n\n    <div *ngSwitchCase=\"'Heading'\">\n      <div [ngSwitch]=\"widget.size\">\n        <h1 *ngSwitchCase=\"'1'\">{{widget.text}}</h1>\n        <h2 *ngSwitchCase=\"'2'\">{{widget.text}}</h2>\n        <h3 *ngSwitchCase=\"'3'\">{{widget.text}}</h3>\n\n      </div>\n    </div>\n\n\n    <div *ngSwitchCase=\"'Paragraph'\">\n\n        <p>{{widget.text}}</p>\n\n    </div>\n\n\n    <div class = \"p-4\" *ngSwitchCase=\"'Link'\">\n      <a href=\"{{widget.href}}\">{{widget.text}}</a>\n    </div>\n\n    <div class = \"p-4\" *ngSwitchCase=\"'List'\">\n\n      <div [ngSwitch]=\"widget.listType\">\n        <div *ngSwitchCase=\"'unordered'\">\n      <ul class=\"list-group\">\n        <li\n            *ngFor=\"let item of widget.listItems.split('\\n')\">\n          {{item}}\n        </li>\n      </ul>\n        </div>\n\n        <div *ngSwitchCase=\"'ordered'\">\n          <ol class=\"list-group\">\n            <li\n                *ngFor=\"let item of widget.listItems.split('\\n')\">\n              {{item}}\n            </li>\n          </ol>\n        </div>\n\n      </div>\n\n    </div>\n\n\n    <div *ngSwitchCase=\"'Image'\">\n\n      <p>{{widget.text}}</p>\n      <img class = \"p-4\"\n           src={{widget.src}}/>\n\n    </div>\n\n\n  </div>\n  </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/widget-list/widget-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/widget-list/widget-list.component.ts ***!
  \******************************************************/
/*! exports provided: WidgetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetListComponent", function() { return WidgetListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetListComponent = /** @class */ (function () {
    function WidgetListComponent(service, route) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.widgets = null;
        this.map = [];
        this.route.params.subscribe(function (params) { return _this.setContext(params); });
    }
    WidgetListComponent.prototype.setContext = function (params) {
        this.context = params;
        this.loadWidgets(params.topicId);
    };
    WidgetListComponent.prototype.loadWidgets = function (TopicId) {
        var _this = this;
        if (TopicId !== undefined) {
            this.service.findWidgetsForTopic(TopicId)
                .then(function (widgets) {
                _this.mapWidget(widgets);
            });
        }
    };
    WidgetListComponent.prototype.mapWidget = function (widgets) {
        this.widgets = widgets;
        console.log(' widget ' + JSON.stringify(widgets));
        for (var _i = 0, widgets_1 = widgets; _i < widgets_1.length; _i++) {
            var widget = widgets_1[_i];
            this.map[widget.orderList - 1] = widget;
        }
        console.log(' map ' + JSON.stringify(this.map));
    };
    WidgetListComponent.prototype.ngOnInit = function () {
    };
    WidgetListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-widget-list',
            template: __webpack_require__(/*! ./widget-list.component.html */ "./src/app/widget-list/widget-list.component.html"),
            styles: [__webpack_require__(/*! ./widget-list.component.css */ "./src/app/widget-list/widget-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], WidgetListComponent);
    return WidgetListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sijiazhu/webdev/2018/webdev-summerfull2018-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map