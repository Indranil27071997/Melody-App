(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Training material DXC\DXC\localMusicPlayer\src\main.ts */"zUnb");


/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");





var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.currentProgress$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](0);
        this.currentTime$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.songs = [];
        this.audio = new Audio();
        this.isPlaying = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.songs = this.getListOfSongs();
        this.player.nativeElement.src = this.songs[0];
        this.player.nativeElement.load();
        this.activeSong = this.songs[0];
        this.isPlaying = false;
    };
    AppComponent.prototype.playSong = function (song) {
        this.durationTime = undefined;
        this.audio.pause();
        this.player.nativeElement.src = song.path;
        this.player.nativeElement.load();
        this.player.nativeElement.play();
        this.activeSong = song;
        this.isPlaying = true;
    };
    AppComponent.prototype.onTimeUpdate = function () {
        // Set song duration time
        if (!this.durationTime) {
            this.setSongDuration();
        }
        // Emit converted audio currenttime in user friendly ex. 01:15
        var currentMinutes = this.generateMinutes(this.player.nativeElement.currentTime);
        var currentSeconds = this.generateSeconds(this.player.nativeElement.currentTime);
        this.currentTime$.next(this.generateTimeToDisplay(currentMinutes, currentSeconds));
        // Emit amount of song played percents
        var percents = this.generatePercentage(this.player.nativeElement.currentTime, this.player.nativeElement.duration);
        if (!isNaN(percents)) {
            this.currentProgress$.next(percents);
        }
    };
    // Play song that comes after active song
    AppComponent.prototype.playNextSong = function () {
        var _this = this;
        var nextSongIndex = this.songs.findIndex(function (song) { return song.id === _this.activeSong.id + 1; });
        if (nextSongIndex === -1) {
            this.playSong(this.songs[0]);
        }
        else {
            this.playSong(this.songs[nextSongIndex]);
        }
    };
    // Play song that comes before active song
    AppComponent.prototype.playPreviousSong = function () {
        var _this = this;
        var prevSongIndex = this.songs.findIndex(function (song) { return song.id === _this.activeSong.id - 1; });
        if (prevSongIndex === -1) {
            this.playSong(this.songs[this.songs.length - 1]);
        }
        else {
            this.playSong(this.songs[prevSongIndex]);
        }
    };
    // Calculate song duration and set it to user friendly format, ex. 01:15
    AppComponent.prototype.setSongDuration = function () {
        var durationInMinutes = this.generateMinutes(this.player.nativeElement.duration);
        var durationInSeconds = this.generateSeconds(this.player.nativeElement.duration);
        if (!isNaN(this.player.nativeElement.duration)) {
            this.durationTime = this.generateTimeToDisplay(durationInMinutes, durationInSeconds);
        }
    };
    // Generate minutes from audio time
    AppComponent.prototype.generateMinutes = function (currentTime) {
        return Math.floor(currentTime / 60);
    };
    // Generate seconds from audio time
    AppComponent.prototype.generateSeconds = function (currentTime) {
        var secsFormula = Math.floor(currentTime % 60);
        return secsFormula < 10 ? '0' + String(secsFormula) : secsFormula;
    };
    AppComponent.prototype.generateTimeToDisplay = function (currentMinutes, currentSeconds) {
        return currentMinutes + ":" + currentSeconds;
    };
    // Generate percentage of current song
    AppComponent.prototype.generatePercentage = function (currentTime, duration) {
        return Math.round((currentTime / duration) * 100);
    };
    AppComponent.prototype.onPause = function () {
        this.isPlaying = false;
        this.currentProgress$.next(0);
        this.currentTime$.next('0:00');
        this.durationTime = undefined;
    };
    AppComponent.prototype.getListOfSongs = function () {
        return [
            {
                id: 1,
                title: 'Evanescence-Bring Me To Life(with lyrics).mp3',
                path: './assets/Evanescence-Bring Me To Life(with lyrics).mp3'
            },
            {
                id: 2,
                title: 'Numb (Official Video) - Linkin Park.mp3',
                path: './assets/Numb (Official Video) - Linkin Park.mp3'
            },
            {
                id: 3,
                title: 'System Of A Down - Toxicity (Official Video).mp3',
                path: './assets/System Of A Down - Toxicity (Official Video).mp3'
            }
        ];
    };
    AppComponent.propDecorators = {
        player: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['player', { static: true },] }]
    };
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ui container center-screen\">\n  <div class=\"row justify-content-center\">\n      <div class=\"col-12\">\n        <img src=\"'../../assets/logo.png\" alt=\"...\" class=\"img-thumbnail\">\n      </div>\n  </div>\n  <br>\n  <br>\n  <div class=\"row\">\n    <div class=\"col-12\"><h4>{{ activeSong?.title }}</h4></div>\n  </div>\n  <br>\n  <div class=\"row justify-content-center\">\n    <div class=\"col-12\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-6 text-left\">\n            {{ currentTime$ | async }}\n          </div>\n          <div class=\"col-6 text-right\" *ngIf=\"player?.duration\">\n            {{ durationTime }}\n          </div>\n        </div>\n      </div>\n      <div class=\"progress\">\n        <div class=\"progress-bar bg-info\" role=\"progressbar\"\n             [ngStyle]=\"{'width': (currentProgress$ | async) + '%'}\"\n             [attr.aria-valuenow]=\"(currentProgress$ | async) \"\n             aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n      </div>\n      <br>\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"playPreviousSong()\"><b>{{ '<<' }}</b></button>\n\n      <button type=\"button\" class=\"btn btn-outline-dark\" *ngIf=\"isPlaying\" (click)=\"player.pause()\">Stop</button>\n      <button type=\"button\" class=\"btn btn-outline-dark\" *ngIf=\"!isPlaying\" (click)=\"playSong(activeSong)\">Play</button>\n\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"playNextSong()\"><b>{{ '>>' }}</b></button>\n    </div>\n  </div>\n</div>\n  <audio #player\n         (timeupdate)=\"onTimeUpdate()\"\n         (pause)=\"onPause()\"></audio>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map