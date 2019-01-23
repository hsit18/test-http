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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _flights_flights_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flights/flights.component */ "./src/app/flights/flights.component.ts");




var routes = [
    {
        path: 'flights',
        component: _flights_flights_component__WEBPACK_IMPORTED_MODULE_3__["FlightsComponent"],
        data: { title: 'Flights' }
    },
    { path: '',
        redirectTo: '/flights',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <span>Flight Search Assignment</span>\n</mat-toolbar>\n<router-outlet></router-outlet>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'flight-assignment';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _flight_search_flight_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./flight-search/flight-search.component */ "./src/app/flight-search/flight-search.component.ts");
/* harmony import */ var _flights_flights_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./flights/flights.component */ "./src/app/flights/flights.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _flights_flights_component__WEBPACK_IMPORTED_MODULE_10__["FlightsComponent"],
                _flight_search_flight_search_component__WEBPACK_IMPORTED_MODULE_9__["FlightSearchComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/flight-search/flight-search.component.css":
/*!***********************************************************!*\
  !*** ./src/app/flight-search/flight-search.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZsaWdodC1zZWFyY2gvZmxpZ2h0LXNlYXJjaC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/flight-search/flight-search.component.html":
/*!************************************************************!*\
  !*** ./src/app/flight-search/flight-search.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\">\n  <mat-form-field>\n    <input matInput placeholder=\"Departure\" #input (keyup.enter)=\"searchFlights(input)\">\n  </mat-form-field>\n</div>"

/***/ }),

/***/ "./src/app/flight-search/flight-search.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/flight-search/flight-search.component.ts ***!
  \**********************************************************/
/*! exports provided: FlightSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightSearchComponent", function() { return FlightSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _flight_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../flight.service */ "./src/app/flight.service.ts");



var FlightSearchComponent = /** @class */ (function () {
    function FlightSearchComponent(flightService) {
        this.flightService = flightService;
    }
    FlightSearchComponent.prototype.ngOnInit = function () {
    };
    FlightSearchComponent.prototype.searchFlights = function (input) {
        this.flightService.searchFlights(input.value);
    };
    FlightSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-flight-search',
            template: __webpack_require__(/*! ./flight-search.component.html */ "./src/app/flight-search/flight-search.component.html"),
            styles: [__webpack_require__(/*! ./flight-search.component.css */ "./src/app/flight-search/flight-search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_flight_service__WEBPACK_IMPORTED_MODULE_2__["FlightService"]])
    ], FlightSearchComponent);
    return FlightSearchComponent;
}());



/***/ }),

/***/ "./src/app/flight.service.ts":
/*!***********************************!*\
  !*** ./src/app/flight.service.ts ***!
  \***********************************/
/*! exports provided: FlightService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightService", function() { return FlightService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': '0a570f0bf03d46089b7829d7304831e4'
    })
};
var FlightService = /** @class */ (function () {
    function FlightService(http) {
        this.http = http;
        this.dataStore = { flights: [] };
        this.resultsSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
    }
    FlightService.prototype.searchFlights = function (param) {
        var _this = this;
        var requestUrl = "https://api.qa.alaskaair.net/aag/1/dayoftravel/airports/" + param + "/flights/flightInfo?minutesBefore=10&minutesAfter=120";
        console.log(requestUrl);
        // return this.http.get(requestUrl, httpOptions)
        //   .pipe(map((res:any)=> {
        //     this.resultsSource.next(res.response);
        //     return res.response;
        //   }))
        this.http.get(requestUrl).subscribe(function (data) {
            _this.resultsSource.next(data['data']);
        });
    };
    FlightService.prototype.getFlights = function () {
        return this.resultsSource.asObservable();
    };
    FlightService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FlightService);
    return FlightService;
}());



/***/ }),

/***/ "./src/app/flights/flights.component.css":
/*!***********************************************!*\
  !*** ./src/app/flights/flights.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    display: flex;\n}\n.sidebar {\n    margin-right: 25px;\n    padding: 5px;\n}\ntable, .content {\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmxpZ2h0cy9mbGlnaHRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvZmxpZ2h0cy9mbGlnaHRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuLnNpZGViYXIge1xuICAgIG1hcmdpbi1yaWdodDogMjVweDtcbiAgICBwYWRkaW5nOiA1cHg7XG59XG50YWJsZSwgLmNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/flights/flights.component.html":
/*!************************************************!*\
  !*** ./src/app/flights/flights.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"sidebar mat-elevation-z8\">\n      <app-flight-search></app-flight-search> \n  </div>\n  <div class=\"content\">\n      <table mat-table [dataSource]=\"flights\" class=\"mat-elevation-z8\">\n          <ng-container matColumnDef=\"FltId\">\n            <th mat-header-cell *matHeaderCellDef> Flight No. </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.FltId}} </td>\n          </ng-container>\n        \n          <!-- Name Column -->\n          <ng-container matColumnDef=\"Orig\">\n            <th mat-header-cell *matHeaderCellDef> Origin </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.Orig}} </td>\n          </ng-container>\n        \n          <!-- Weight Column -->\n          <ng-container matColumnDef=\"Dest\">\n            <th mat-header-cell *matHeaderCellDef> Destination </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.Dest}} </td>\n          </ng-container>\n        \n          <!-- Symbol Column -->\n          <ng-container matColumnDef=\"SchedDepTime\">\n            <th mat-header-cell *matHeaderCellDef> Departure Time </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.SchedDepTime}} </td>\n          </ng-container>\n        \n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/flights/flights.component.ts":
/*!**********************************************!*\
  !*** ./src/app/flights/flights.component.ts ***!
  \**********************************************/
/*! exports provided: FlightsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightsComponent", function() { return FlightsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _flight_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../flight.service */ "./src/app/flight.service.ts");



var FlightsComponent = /** @class */ (function () {
    function FlightsComponent(flightService) {
        this.flightService = flightService;
        this.displayedColumns = ['FltId', 'Orig', 'Dest', 'SchedDepTime'];
        this.flights = [
            {
                "FltId": "761",
                "Carrier": "AS",
                "Orig": "SLC",
                "Dest": "SEA",
                "CutOffTime": "40",
                "FltDirection": 0,
                "SchedDepTime": "2019-01-22T06:30:00",
                "EstDepTime": "2019-01-22T06:30:00",
                "SchedArrTime": "2019-01-22T07:50:00",
                "EstArrTime": "2019-01-22T07:50:00",
                "ActualTime": "",
                "OrigZuluOffset": "-7",
                "DestZuluOffset": "-8",
                "DestGate": "N4",
                "OrigGate": "A7",
                "CodeShares": [
                    {
                        "FltId": "6263",
                        "Carrier": "KE"
                    }
                ],
                "TailId": "546",
                "FleetType": "737-800",
                "Status": "ON TIME"
            },
            {
                "FltId": "181",
                "Carrier": "AS",
                "Orig": "SMF",
                "Dest": "SEA",
                "CutOffTime": "40",
                "FltDirection": 0,
                "SchedDepTime": "2019-01-22T06:00:00",
                "EstDepTime": "2019-01-22T06:00:00",
                "SchedArrTime": "2019-01-22T08:00:00",
                "EstArrTime": "2019-01-22T08:00:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-8",
                "DestGate": "C11",
                "OrigGate": "HG",
                "CodeShares": [
                    {
                        "FltId": "6904,3136,6228",
                        "Carrier": "AA,EK,KE"
                    }
                ],
                "TailId": "553",
                "FleetType": "737-800",
                "Status": "ON TIME"
            },
            {
                "FltId": "369",
                "Carrier": "AS",
                "Orig": "DEN",
                "Dest": "SEA",
                "CutOffTime": "45",
                "FltDirection": 0,
                "SchedDepTime": "2019-01-22T06:00:00",
                "EstDepTime": "2019-01-22T06:00:00",
                "SchedArrTime": "2019-01-22T08:10:00",
                "EstArrTime": "2019-01-22T08:10:00",
                "ActualTime": "",
                "OrigZuluOffset": "-7",
                "DestZuluOffset": "-8",
                "DestGate": "C20",
                "OrigGate": "HG",
                "CodeShares": [
                    {
                        "FltId": "6030",
                        "Carrier": "KE"
                    }
                ],
                "TailId": "268",
                "FleetType": "737-900R",
                "Status": "ON TIME"
            },
            {
                "FltId": "631",
                "Carrier": "AS",
                "Orig": "PHX",
                "Dest": "SEA",
                "CutOffTime": "40",
                "FltDirection": 0,
                "SchedDepTime": "2019-01-22T06:00:00",
                "EstDepTime": "2019-01-22T06:00:00",
                "SchedArrTime": "2019-01-22T08:10:00",
                "EstArrTime": "2019-01-22T08:10:00",
                "ActualTime": "",
                "OrigZuluOffset": "-7",
                "DestZuluOffset": "-8",
                "DestGate": "C3",
                "OrigGate": "11",
                "CodeShares": [
                    {
                        "FltId": "6226",
                        "Carrier": "KE"
                    }
                ],
                "TailId": "481",
                "FleetType": "737-900E",
                "Status": "ON TIME"
            },
            {
                "FltId": "1081",
                "Carrier": "AS",
                "Orig": "SFO",
                "Dest": "SEA",
                "CutOffTime": "40",
                "FltDirection": 0,
                "SchedDepTime": "2019-01-22T06:00:00",
                "EstDepTime": "2019-01-22T06:00:00",
                "SchedArrTime": "2019-01-22T08:10:00",
                "EstArrTime": "2019-01-22T08:10:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-8",
                "DestGate": "",
                "OrigGate": "",
                "CodeShares": [
                    {
                        "FltId": "",
                        "Carrier": ""
                    }
                ],
                "TailId": "529",
                "FleetType": "A319",
                "Status": "ON TIME"
            },
            {
                "FltId": "3489",
                "Carrier": "OO",
                "Orig": "FAT",
                "Dest": "SEA",
                "CutOffTime": "40",
                "FltDirection": 0,
                "SchedDepTime": "2019-01-22T06:00:00",
                "EstDepTime": "2019-01-22T06:00:00",
                "SchedArrTime": "2019-01-22T08:20:00",
                "EstArrTime": "2019-01-22T08:20:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-8",
                "DestGate": "C2",
                "OrigGate": "",
                "CodeShares": [
                    {
                        "FltId": "3272",
                        "Carrier": "EK"
                    }
                ],
                "TailId": "179",
                "FleetType": "E175",
                "Status": "ON TIME"
            },
            {
                "FltId": "896",
                "Carrier": "AS",
                "Orig": "BOI",
                "Dest": "SEA",
                "CutOffTime": "40",
                "FltDirection": 0,
                "SchedDepTime": "2019-01-22T08:05:00",
                "EstDepTime": "2019-01-22T08:05:00",
                "SchedArrTime": "2019-01-22T08:35:00",
                "EstArrTime": "2019-01-22T08:35:00",
                "ActualTime": "",
                "OrigZuluOffset": "-7",
                "DestZuluOffset": "-8",
                "DestGate": "N1",
                "OrigGate": "HG",
                "CodeShares": [
                    {
                        "FltId": "6843,6022",
                        "Carrier": "AA,KE"
                    }
                ],
                "TailId": "530",
                "FleetType": "737-800E",
                "Status": "ON TIME"
            },
            {
                "FltId": "401",
                "Carrier": "AS",
                "Orig": "LAS",
                "Dest": "SEA",
                "CutOffTime": "45",
                "FltDirection": 0,
                "SchedDepTime": "2019-01-22T06:00:00",
                "EstDepTime": "2019-01-22T06:00:00",
                "SchedArrTime": "2019-01-22T08:40:00",
                "EstArrTime": "2019-01-22T08:40:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-8",
                "DestGate": "C9",
                "OrigGate": "HG",
                "CodeShares": [
                    {
                        "FltId": "6112",
                        "Carrier": "KE"
                    }
                ],
                "TailId": "434",
                "FleetType": "737-900E",
                "Status": "ON TIME"
            },
            {
                "FltId": "321",
                "Carrier": "AS",
                "Orig": "SJC",
                "Dest": "SEA",
                "CutOffTime": "40",
                "FltDirection": 0,
                "SchedDepTime": "2019-01-22T06:30:00",
                "EstDepTime": "2019-01-22T06:30:00",
                "SchedArrTime": "2019-01-22T08:45:00",
                "EstArrTime": "2019-01-22T08:45:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-8",
                "DestGate": "N2",
                "OrigGate": "28",
                "CodeShares": [
                    {
                        "FltId": "6818,6128",
                        "Carrier": "AA,KE"
                    }
                ],
                "TailId": "523",
                "FleetType": "737-800",
                "Status": "ON TIME"
            },
            {
                "FltId": "526",
                "Carrier": "AS",
                "Orig": "BLI",
                "Dest": "SEA",
                "CutOffTime": "40",
                "FltDirection": 0,
                "SchedDepTime": "2019-01-22T08:00:00",
                "EstDepTime": "2019-01-22T08:00:00",
                "SchedArrTime": "2019-01-22T08:50:00",
                "EstArrTime": "2019-01-22T08:50:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-8",
                "DestGate": "D1",
                "OrigGate": "HG",
                "CodeShares": [
                    {
                        "FltId": "6790",
                        "Carrier": "AA"
                    }
                ],
                "TailId": "492",
                "FleetType": "737-900E",
                "Status": "ON TIME"
            },
            {
                "FltId": "2433",
                "Carrier": "QX",
                "Orig": "BIL",
                "Dest": "SEA",
                "CutOffTime": "40",
                "FltDirection": 0,
                "SchedDepTime": "2019-01-22T07:25:00",
                "EstDepTime": "2019-01-22T07:25:00",
                "SchedArrTime": "2019-01-22T08:50:00",
                "EstArrTime": "2019-01-22T08:50:00",
                "ActualTime": "",
                "OrigZuluOffset": "-7",
                "DestZuluOffset": "-8",
                "DestGate": "C2",
                "OrigGate": "B3",
                "CodeShares": [
                    {
                        "FltId": "6234",
                        "Carrier": "KE"
                    }
                ],
                "TailId": "628",
                "FleetType": "E175",
                "Status": "ON TIME"
            },
            {
                "FltId": "1777",
                "Carrier": "AS",
                "Orig": "LAX",
                "Dest": "SEA",
                "CutOffTime": "40",
                "FltDirection": 0,
                "SchedDepTime": "2019-01-22T06:00:00",
                "EstDepTime": "2019-01-22T06:00:00",
                "SchedArrTime": "2019-01-22T08:50:00",
                "EstArrTime": "2019-01-22T08:50:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-8",
                "DestGate": "",
                "OrigGate": "",
                "CodeShares": [
                    {
                        "FltId": "6104",
                        "Carrier": "KE"
                    }
                ],
                "TailId": "634",
                "FleetType": "A320",
                "Status": "ON TIME"
            },
            {
                "FltId": "39",
                "Carrier": "AS",
                "Orig": "MSP",
                "Dest": "SEA",
                "CutOffTime": "40",
                "FltDirection": 0,
                "SchedDepTime": "2019-01-22T06:35:00",
                "EstDepTime": "2019-01-22T06:35:00",
                "SchedArrTime": "2019-01-22T08:55:00",
                "EstArrTime": "2019-01-22T08:55:00",
                "ActualTime": "",
                "OrigZuluOffset": "-6",
                "DestZuluOffset": "-8",
                "DestGate": "N7",
                "OrigGate": "HG",
                "CodeShares": [
                    {
                        "FltId": "",
                        "Carrier": ""
                    }
                ],
                "TailId": "280",
                "FleetType": "737-900R",
                "Status": "ON TIME"
            },
            {
                "FltId": "176",
                "Carrier": "AS",
                "Orig": "JNU",
                "Dest": "SEA",
                "CutOffTime": "40",
                "FltDirection": 0,
                "SchedDepTime": "2019-01-22T05:30:00",
                "EstDepTime": "2019-01-22T05:30:00",
                "SchedArrTime": "2019-01-22T08:55:00",
                "EstArrTime": "2019-01-22T08:55:00",
                "ActualTime": "",
                "OrigZuluOffset": "-9",
                "DestZuluOffset": "-8",
                "DestGate": "D5",
                "OrigGate": "4",
                "CodeShares": [
                    {
                        "FltId": "6872,6052",
                        "Carrier": "AA,KE"
                    }
                ],
                "TailId": "419",
                "FleetType": "737-900E",
                "Status": "ON TIME"
            },
            {
                "FltId": "2299",
                "Carrier": "QX",
                "Orig": "RDM",
                "Dest": "SEA",
                "CutOffTime": "40",
                "FltDirection": 0,
                "SchedDepTime": "2019-01-22T07:45:00",
                "EstDepTime": "2019-01-22T07:45:00",
                "SchedArrTime": "2019-01-22T09:00:00",
                "EstArrTime": "2019-01-22T09:00:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-8",
                "DestGate": "C2",
                "OrigGate": "HG",
                "CodeShares": [
                    {
                        "FltId": "6050",
                        "Carrier": "KE"
                    }
                ],
                "TailId": "629",
                "FleetType": "E175",
                "Status": "ON TIME"
            },
            {
                "FltId": "683",
                "Carrier": "AS",
                "Orig": "MCI",
                "Dest": "SEA",
                "CutOffTime": "40",
                "FltDirection": 0,
                "SchedDepTime": "2019-01-22T07:00:00",
                "EstDepTime": "2019-01-22T07:00:00",
                "SchedArrTime": "2019-01-22T09:05:00",
                "EstArrTime": "2019-01-22T09:05:00",
                "ActualTime": "",
                "OrigZuluOffset": "-6",
                "DestZuluOffset": "-8",
                "DestGate": "N9",
                "OrigGate": "52",
                "CodeShares": [
                    {
                        "FltId": "3035",
                        "Carrier": "EK"
                    }
                ],
                "TailId": "557",
                "FleetType": "737-800E",
                "Status": "ON TIME"
            },
            {
                "FltId": "2250",
                "Carrier": "QX",
                "Orig": "RNO",
                "Dest": "SEA",
                "CutOffTime": "40",
                "FltDirection": 0,
                "SchedDepTime": "2019-01-22T07:05:00",
                "EstDepTime": "2019-01-22T07:05:00",
                "SchedArrTime": "2019-01-22T09:05:00",
                "EstArrTime": "2019-01-22T09:05:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-8",
                "DestGate": "C10",
                "OrigGate": "HG",
                "CodeShares": [
                    {
                        "FltId": "3292,6232",
                        "Carrier": "EK,KE"
                    }
                ],
                "TailId": "634",
                "FleetType": "E175",
                "Status": "ON TIME"
            },
            {
                "FltId": "1565",
                "Carrier": "AS",
                "Orig": "PSP",
                "Dest": "SEA",
                "CutOffTime": "40",
                "FltDirection": 0,
                "SchedDepTime": "2019-01-22T06:10:00",
                "EstDepTime": "2019-01-22T06:10:00",
                "SchedArrTime": "2019-01-22T09:05:00",
                "EstArrTime": "2019-01-22T09:05:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-8",
                "DestGate": "D2",
                "OrigGate": "HG",
                "CodeShares": [
                    {
                        "FltId": "",
                        "Carrier": ""
                    }
                ],
                "TailId": "636",
                "FleetType": "A320",
                "Status": "ON TIME"
            },
            {
                "FltId": "1005",
                "Carrier": "AS",
                "Orig": "AUS",
                "Dest": "SEA",
                "CutOffTime": "40",
                "FltDirection": 0,
                "SchedDepTime": "2019-01-22T06:25:00",
                "EstDepTime": "2019-01-22T06:25:00",
                "SchedArrTime": "2019-01-22T09:05:00",
                "EstArrTime": "2019-01-22T09:05:00",
                "ActualTime": "",
                "OrigZuluOffset": "-6",
                "DestZuluOffset": "-8",
                "DestGate": "D3",
                "OrigGate": "HG",
                "CodeShares": [
                    {
                        "FltId": "6130",
                        "Carrier": "KE"
                    }
                ],
                "TailId": "835",
                "FleetType": "A32B",
                "Status": "ON TIME"
            },
            {
                "FltId": "393",
                "Carrier": "AS",
                "Orig": "SFO",
                "Dest": "SEA",
                "CutOffTime": "40",
                "FltDirection": 0,
                "SchedDepTime": "2019-01-22T07:00:00",
                "EstDepTime": "2019-01-22T07:00:00",
                "SchedArrTime": "2019-01-22T09:15:00",
                "EstArrTime": "2019-01-22T09:15:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-8",
                "DestGate": "",
                "OrigGate": "",
                "CodeShares": [
                    {
                        "FltId": "6792",
                        "Carrier": "AA"
                    }
                ],
                "TailId": "275",
                "FleetType": "737-900R",
                "Status": "ON TIME"
            },
            {
                "FltId": "691",
                "Carrier": "AS",
                "Orig": "GEG",
                "Dest": "SEA",
                "CutOffTime": "40",
                "FltDirection": 0,
                "SchedDepTime": "2019-01-22T08:00:00",
                "EstDepTime": "2019-01-22T08:00:00",
                "SchedArrTime": "2019-01-22T09:15:00",
                "EstArrTime": "2019-01-22T09:15:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-8",
                "DestGate": "N6",
                "OrigGate": "C30",
                "CodeShares": [
                    {
                        "FltId": "6958",
                        "Carrier": "AA"
                    }
                ],
                "TailId": "548",
                "FleetType": "737-800",
                "Status": "ON TIME"
            },
            {
                "FltId": "2547",
                "Carrier": "QX",
                "Orig": "PDX",
                "Dest": "SEA",
                "CutOffTime": "40",
                "FltDirection": 0,
                "SchedDepTime": "2019-01-22T08:30:00",
                "EstDepTime": "2019-01-22T08:30:00",
                "SchedArrTime": "2019-01-22T09:25:00",
                "EstArrTime": "2019-01-22T09:20:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-8",
                "DestGate": "C16",
                "OrigGate": "HG",
                "CodeShares": [
                    {
                        "FltId": "",
                        "Carrier": ""
                    }
                ],
                "TailId": "437",
                "FleetType": "DH8-400",
                "Status": ""
            },
            {
                "FltId": "499",
                "Carrier": "AS",
                "Orig": "SAN",
                "Dest": "SEA",
                "CutOffTime": "40",
                "FltDirection": 0,
                "SchedDepTime": "2019-01-22T06:15:00",
                "EstDepTime": "2019-01-22T06:15:00",
                "SchedArrTime": "2019-01-22T09:20:00",
                "EstArrTime": "2019-01-22T09:20:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-8",
                "DestGate": "C20",
                "OrigGate": "13",
                "CodeShares": [
                    {
                        "FltId": "6970",
                        "Carrier": "AA"
                    }
                ],
                "TailId": "448",
                "FleetType": "737-900E",
                "Status": "ON TIME"
            },
            {
                "FltId": "141",
                "Carrier": "AS",
                "Orig": "LAS",
                "Dest": "SEA",
                "CutOffTime": "45",
                "FltDirection": 0,
                "SchedDepTime": "2019-01-22T07:00:00",
                "EstDepTime": "2019-01-22T07:00:00",
                "SchedArrTime": "2019-01-22T09:40:00",
                "EstArrTime": "2019-01-22T09:40:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-8",
                "DestGate": "C3",
                "OrigGate": "E12",
                "CodeShares": [
                    {
                        "FltId": "",
                        "Carrier": ""
                    }
                ],
                "TailId": "433",
                "FleetType": "737-900E",
                "Status": "ON TIME"
            },
            {
                "FltId": "358",
                "Carrier": "AS",
                "Orig": "SJC",
                "Dest": "SEA",
                "CutOffTime": "40",
                "FltDirection": 0,
                "SchedDepTime": "2019-01-22T07:35:00",
                "EstDepTime": "2019-01-22T07:35:00",
                "SchedArrTime": "2019-01-22T09:45:00",
                "EstArrTime": "2019-01-22T09:40:00",
                "ActualTime": "09:40 AM",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-8",
                "DestGate": "C9",
                "OrigGate": "HG",
                "CodeShares": [
                    {
                        "FltId": "6979",
                        "Carrier": "AA"
                    }
                ],
                "TailId": "585",
                "FleetType": "737-800E",
                "Status": ""
            },
            {
                "FltId": "1779",
                "Carrier": "AS",
                "Orig": "LAX",
                "Dest": "SEA",
                "CutOffTime": "40",
                "FltDirection": 0,
                "SchedDepTime": "2019-01-22T06:50:00",
                "EstDepTime": "2019-01-22T06:50:00",
                "SchedArrTime": "2019-01-22T09:40:00",
                "EstArrTime": "2019-01-22T09:40:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-8",
                "DestGate": "",
                "OrigGate": "",
                "CodeShares": [
                    {
                        "FltId": "",
                        "Carrier": ""
                    }
                ],
                "TailId": "628",
                "FleetType": "A320",
                "Status": "ON TIME"
            },
            {
                "FltId": "2555",
                "Carrier": "QX",
                "Orig": "BUR",
                "Dest": "SEA",
                "CutOffTime": "40",
                "FltDirection": 0,
                "SchedDepTime": "2019-01-22T07:00:00",
                "EstDepTime": "2019-01-22T07:00:00",
                "SchedArrTime": "2019-01-22T09:40:00",
                "EstArrTime": "2019-01-22T09:40:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-8",
                "DestGate": "C17",
                "OrigGate": "HG",
                "CodeShares": [
                    {
                        "FltId": "7584",
                        "Carrier": "AA"
                    }
                ],
                "TailId": "633",
                "FleetType": "E175",
                "Status": "ON TIME"
            },
            {
                "FltId": "2371",
                "Carrier": "QX",
                "Orig": "GEG",
                "Dest": "SEA",
                "CutOffTime": "40",
                "FltDirection": 0,
                "SchedDepTime": "2019-01-22T08:45:00",
                "EstDepTime": "2019-01-22T08:45:00",
                "SchedArrTime": "2019-01-22T10:00:00",
                "EstArrTime": "2019-01-22T09:42:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-8",
                "DestGate": "C16",
                "OrigGate": "C22",
                "CodeShares": [
                    {
                        "FltId": "",
                        "Carrier": ""
                    }
                ],
                "TailId": "411",
                "FleetType": "DH8-400",
                "Status": ""
            },
            {
                "FltId": "519",
                "Carrier": "AS",
                "Orig": "SNA",
                "Dest": "SEA",
                "CutOffTime": "40",
                "FltDirection": 0,
                "SchedDepTime": "2019-01-22T07:00:00",
                "EstDepTime": "2019-01-22T07:00:00",
                "SchedArrTime": "2019-01-22T09:50:00",
                "EstArrTime": "2019-01-22T09:50:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-8",
                "DestGate": "C18",
                "OrigGate": "12",
                "CodeShares": [
                    {
                        "FltId": "6924",
                        "Carrier": "AA"
                    }
                ],
                "TailId": "514",
                "FleetType": "737-800E",
                "Status": "ON TIME"
            },
            {
                "FltId": "2204",
                "Carrier": "QX",
                "Orig": "PDX",
                "Dest": "SEA",
                "CutOffTime": "40",
                "FltDirection": 0,
                "SchedDepTime": "2019-01-22T09:00:00",
                "EstDepTime": "2019-01-22T09:00:00",
                "SchedArrTime": "2019-01-22T10:05:00",
                "EstArrTime": "2019-01-22T10:05:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-8",
                "DestGate": "C10",
                "OrigGate": "HG",
                "CodeShares": [
                    {
                        "FltId": "",
                        "Carrier": ""
                    }
                ],
                "TailId": "426",
                "FleetType": "DH8-400",
                "Status": "ON TIME"
            },
            {
                "FltId": "637",
                "Carrier": "AS",
                "Orig": "PHX",
                "Dest": "SEA",
                "CutOffTime": "40",
                "FltDirection": 0,
                "SchedDepTime": "2019-01-22T08:00:00",
                "EstDepTime": "2019-01-22T08:00:00",
                "SchedArrTime": "2019-01-22T10:10:00",
                "EstArrTime": "2019-01-22T10:10:00",
                "ActualTime": "",
                "OrigZuluOffset": "-7",
                "DestZuluOffset": "-8",
                "DestGate": "C15",
                "OrigGate": "10",
                "CodeShares": [
                    {
                        "FltId": "",
                        "Carrier": ""
                    }
                ],
                "TailId": "468",
                "FleetType": "737-900E",
                "Status": "ON TIME"
            },
            {
                "FltId": "126",
                "Carrier": "AS",
                "Orig": "FAI",
                "Dest": "SEA",
                "CutOffTime": "40",
                "FltDirection": 0,
                "SchedDepTime": "2019-01-22T05:30:00",
                "EstDepTime": "2019-01-22T05:30:00",
                "SchedArrTime": "2019-01-22T10:15:00",
                "EstArrTime": "2019-01-22T10:15:00",
                "ActualTime": "",
                "OrigZuluOffset": "-9",
                "DestZuluOffset": "-8",
                "DestGate": "N9",
                "OrigGate": "2",
                "CodeShares": [
                    {
                        "FltId": "6800,3010",
                        "Carrier": "AA,EK"
                    }
                ],
                "TailId": "272",
                "FleetType": "737-900R",
                "Status": "ON TIME"
            },
            {
                "FltId": "2111",
                "Carrier": "QX",
                "Orig": "PSC",
                "Dest": "SEA",
                "CutOffTime": "40",
                "FltDirection": 0,
                "SchedDepTime": "2019-01-22T09:30:00",
                "EstDepTime": "2019-01-22T09:30:00",
                "SchedArrTime": "2019-01-22T10:35:00",
                "EstArrTime": "2019-01-22T10:18:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-8",
                "DestGate": "C16",
                "OrigGate": "HG",
                "CodeShares": [
                    {
                        "FltId": "",
                        "Carrier": ""
                    }
                ],
                "TailId": "434",
                "FleetType": "DH8-400",
                "Status": ""
            },
            {
                "FltId": "2025",
                "Carrier": "QX",
                "Orig": "DAL",
                "Dest": "SEA",
                "CutOffTime": "40",
                "FltDirection": 0,
                "SchedDepTime": "2019-01-22T08:15:00",
                "EstDepTime": "2019-01-22T08:15:00",
                "SchedArrTime": "2019-01-22T10:20:00",
                "EstArrTime": "2019-01-22T10:20:00",
                "ActualTime": "",
                "OrigZuluOffset": "-6",
                "DestZuluOffset": "-8",
                "DestGate": "C2",
                "OrigGate": "HG",
                "CodeShares": [
                    {
                        "FltId": "",
                        "Carrier": ""
                    }
                ],
                "TailId": "632",
                "FleetType": "E175",
                "Status": "ON TIME"
            },
            {
                "FltId": "1259",
                "Carrier": "AS",
                "Orig": "SFO",
                "Dest": "SEA",
                "CutOffTime": "40",
                "FltDirection": 0,
                "SchedDepTime": "2019-01-22T08:15:00",
                "EstDepTime": "2019-01-22T08:15:00",
                "SchedArrTime": "2019-01-22T10:25:00",
                "EstArrTime": "2019-01-22T10:25:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-8",
                "DestGate": "",
                "OrigGate": "",
                "CodeShares": [
                    {
                        "FltId": "",
                        "Carrier": ""
                    }
                ],
                "TailId": "523",
                "FleetType": "A319",
                "Status": "ON TIME"
            },
            {
                "FltId": "673",
                "Carrier": "AS",
                "Orig": "DEN",
                "Dest": "SEA",
                "CutOffTime": "45",
                "FltDirection": 0,
                "SchedDepTime": "2019-01-22T08:15:00",
                "EstDepTime": "2019-01-22T08:15:00",
                "SchedArrTime": "2019-01-22T10:30:00",
                "EstArrTime": "2019-01-22T10:30:00",
                "ActualTime": "",
                "OrigZuluOffset": "-7",
                "DestZuluOffset": "-8",
                "DestGate": "D3",
                "OrigGate": "C39",
                "CodeShares": [
                    {
                        "FltId": "3022",
                        "Carrier": "EK"
                    }
                ],
                "TailId": "273",
                "FleetType": "737-900R",
                "Status": "ON TIME"
            },
            {
                "FltId": "7",
                "Carrier": "AS",
                "Orig": "JFK",
                "Dest": "SEA",
                "CutOffTime": "40",
                "FltDirection": 0,
                "SchedDepTime": "2019-01-22T07:00:00",
                "EstDepTime": "2019-01-22T07:00:00",
                "SchedArrTime": "2019-01-22T10:30:00",
                "EstArrTime": "2019-01-22T10:30:00",
                "ActualTime": "",
                "OrigZuluOffset": "-5",
                "DestZuluOffset": "-8",
                "DestGate": "N7",
                "OrigGate": "9",
                "CodeShares": [
                    {
                        "FltId": "",
                        "Carrier": ""
                    }
                ],
                "TailId": "568",
                "FleetType": "737-800E",
                "Status": "ON TIME"
            },
            {
                "FltId": "88",
                "Carrier": "AS",
                "Orig": "ANC",
                "Dest": "SEA",
                "CutOffTime": "40",
                "FltDirection": 0,
                "SchedDepTime": "2019-01-22T06:00:00",
                "EstDepTime": "2019-01-22T06:00:00",
                "SchedArrTime": "2019-01-22T10:35:00",
                "EstArrTime": "2019-01-22T10:35:00",
                "ActualTime": "",
                "OrigZuluOffset": "-9",
                "DestZuluOffset": "-8",
                "DestGate": "C17",
                "OrigGate": "C7",
                "CodeShares": [
                    {
                        "FltId": "",
                        "Carrier": ""
                    }
                ],
                "TailId": "474",
                "FleetType": "737-900E",
                "Status": "ON TIME"
            },
            {
                "FltId": "619",
                "Carrier": "AS",
                "Orig": "LAS",
                "Dest": "SEA",
                "CutOffTime": "45",
                "FltDirection": 0,
                "SchedDepTime": "2019-01-22T08:00:00",
                "EstDepTime": "2019-01-22T08:00:00",
                "SchedArrTime": "2019-01-22T10:40:00",
                "EstArrTime": "2019-01-22T10:40:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-8",
                "DestGate": "D1",
                "OrigGate": "E15",
                "CodeShares": [
                    {
                        "FltId": "",
                        "Carrier": ""
                    }
                ],
                "TailId": "270",
                "FleetType": "737-900R",
                "Status": "ON TIME"
            },
            {
                "FltId": "2600",
                "Carrier": "QX",
                "Orig": "BOI",
                "Dest": "SEA",
                "CutOffTime": "40",
                "FltDirection": 0,
                "SchedDepTime": "2019-01-22T09:55:00",
                "EstDepTime": "2019-01-22T09:55:00",
                "SchedArrTime": "2019-01-22T10:35:00",
                "EstArrTime": "2019-01-22T10:43:00",
                "ActualTime": "",
                "OrigZuluOffset": "-7",
                "DestZuluOffset": "-8",
                "DestGate": "C16",
                "OrigGate": "C1",
                "CodeShares": [
                    {
                        "FltId": "7557",
                        "Carrier": "AA"
                    }
                ],
                "TailId": "438",
                "FleetType": "DH8-400",
                "Status": ""
            },
            {
                "FltId": "2170",
                "Carrier": "QX",
                "Orig": "SFO",
                "Dest": "SEA",
                "CutOffTime": "40",
                "FltDirection": 0,
                "SchedDepTime": "2019-01-22T08:30:00",
                "EstDepTime": "2019-01-22T08:30:00",
                "SchedArrTime": "2019-01-22T10:45:00",
                "EstArrTime": "2019-01-22T10:45:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-8",
                "DestGate": "",
                "OrigGate": "",
                "CodeShares": [
                    {
                        "FltId": "7623",
                        "Carrier": "AA"
                    }
                ],
                "TailId": "423",
                "FleetType": "DH8-400",
                "Status": "ON TIME"
            },
            {
                "FltId": "737",
                "Carrier": "AS",
                "Orig": "BOS",
                "Dest": "SEA",
                "CutOffTime": "40",
                "FltDirection": 0,
                "SchedDepTime": "2019-01-22T07:05:00",
                "EstDepTime": "2019-01-22T07:05:00",
                "SchedArrTime": "2019-01-22T10:45:00",
                "EstArrTime": "2019-01-22T10:45:00",
                "ActualTime": "",
                "OrigZuluOffset": "-5",
                "DestZuluOffset": "-8",
                "DestGate": "D5",
                "OrigGate": "HG",
                "CodeShares": [
                    {
                        "FltId": "6222",
                        "Carrier": "KE"
                    }
                ],
                "TailId": "464",
                "FleetType": "737-900E",
                "Status": "ON TIME"
            },
            {
                "FltId": "23",
                "Carrier": "AS",
                "Orig": "ORD",
                "Dest": "SEA",
                "CutOffTime": "40",
                "FltDirection": 0,
                "SchedDepTime": "2019-01-22T08:00:00",
                "EstDepTime": "2019-01-22T08:00:00",
                "SchedArrTime": "2019-01-22T10:45:00",
                "EstArrTime": "2019-01-22T10:45:00",
                "ActualTime": "",
                "OrigZuluOffset": "-6",
                "DestZuluOffset": "-8",
                "DestGate": "D2",
                "OrigGate": "H4",
                "CodeShares": [
                    {
                        "FltId": "",
                        "Carrier": ""
                    }
                ],
                "TailId": "588",
                "FleetType": "737-800E",
                "Status": "ON TIME"
            },
            {
                "FltId": "677",
                "Carrier": "AS",
                "Orig": "TUS",
                "Dest": "SEA",
                "CutOffTime": "40",
                "FltDirection": 0,
                "SchedDepTime": "2019-01-22T08:30:00",
                "EstDepTime": "2019-01-22T08:30:00",
                "SchedArrTime": "2019-01-22T10:45:00",
                "EstArrTime": "2019-01-22T10:45:00",
                "ActualTime": "",
                "OrigZuluOffset": "-7",
                "DestZuluOffset": "-8",
                "DestGate": "N3",
                "OrigGate": "HG",
                "CodeShares": [
                    {
                        "FltId": "",
                        "Carrier": ""
                    }
                ],
                "TailId": "607",
                "FleetType": "737-700W",
                "Status": "ON TIME"
            },
            {
                "FltId": "2559",
                "Carrier": "QX",
                "Orig": "OAK",
                "Dest": "SEA",
                "CutOffTime": "40",
                "FltDirection": 0,
                "SchedDepTime": "2019-01-22T08:40:00",
                "EstDepTime": "2019-01-22T08:40:00",
                "SchedArrTime": "2019-01-22T10:45:00",
                "EstArrTime": "2019-01-22T10:45:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-8",
                "DestGate": "C2",
                "OrigGate": "HG",
                "CodeShares": [
                    {
                        "FltId": "7561",
                        "Carrier": "AA"
                    }
                ],
                "TailId": "624",
                "FleetType": "E175",
                "Status": "ON TIME"
            },
            {
                "FltId": "9",
                "Carrier": "AS",
                "Orig": "MCO",
                "Dest": "SEA",
                "CutOffTime": "40",
                "FltDirection": 0,
                "SchedDepTime": "2019-01-22T07:20:00",
                "EstDepTime": "2019-01-22T07:20:00",
                "SchedArrTime": "2019-01-22T10:50:00",
                "EstArrTime": "2019-01-22T10:50:00",
                "ActualTime": "",
                "OrigZuluOffset": "-5",
                "DestZuluOffset": "-8",
                "DestGate": "N2",
                "OrigGate": "111",
                "CodeShares": [
                    {
                        "FltId": "",
                        "Carrier": ""
                    }
                ],
                "TailId": "277",
                "FleetType": "737-900R",
                "Status": "ON TIME"
            },
            {
                "FltId": "323",
                "Carrier": "AS",
                "Orig": "LAX",
                "Dest": "SEA",
                "CutOffTime": "40",
                "FltDirection": 0,
                "SchedDepTime": "2019-01-22T08:00:00",
                "EstDepTime": "2019-01-22T08:00:00",
                "SchedArrTime": "2019-01-22T10:50:00",
                "EstArrTime": "2019-01-22T10:50:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-8",
                "DestGate": "C11",
                "OrigGate": "62",
                "CodeShares": [
                    {
                        "FltId": "6106,3729",
                        "Carrier": "KE,QF"
                    }
                ],
                "TailId": "307",
                "FleetType": "737-900W",
                "Status": "ON TIME"
            },
            {
                "FltId": "2201",
                "Carrier": "QX",
                "Orig": "YKM",
                "Dest": "SEA",
                "CutOffTime": "40",
                "FltDirection": 0,
                "SchedDepTime": "2019-01-22T10:00:00",
                "EstDepTime": "2019-01-22T10:00:00",
                "SchedArrTime": "2019-01-22T10:50:00",
                "EstArrTime": "2019-01-22T10:50:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-8",
                "DestGate": "C2",
                "OrigGate": "HG",
                "CodeShares": [
                    {
                        "FltId": "7471",
                        "Carrier": "AA"
                    }
                ],
                "TailId": "407",
                "FleetType": "DH8-400",
                "Status": "ON TIME"
            },
            {
                "FltId": "2612",
                "Carrier": "QX",
                "Orig": "RDM",
                "Dest": "SEA",
                "CutOffTime": "40",
                "FltDirection": 0,
                "SchedDepTime": "2019-01-22T09:35:00",
                "EstDepTime": "2019-01-22T09:35:00",
                "SchedArrTime": "2019-01-22T10:50:00",
                "EstArrTime": "2019-01-22T10:50:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-8",
                "DestGate": "C10",
                "OrigGate": "HG",
                "CodeShares": [
                    {
                        "FltId": "",
                        "Carrier": ""
                    }
                ],
                "TailId": "636",
                "FleetType": "E175",
                "Status": "ON TIME"
            },
            {
                "FltId": "2296",
                "Carrier": "QX",
                "Orig": "EUG",
                "Dest": "SEA",
                "CutOffTime": "40",
                "FltDirection": 0,
                "SchedDepTime": "2019-01-22T09:45:00",
                "EstDepTime": "2019-01-22T09:45:00",
                "SchedArrTime": "2019-01-22T10:55:00",
                "EstArrTime": "2019-01-22T10:55:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-8",
                "DestGate": "C2",
                "OrigGate": "B",
                "CodeShares": [
                    {
                        "FltId": "7526,3281",
                        "Carrier": "AA,EK"
                    }
                ],
                "TailId": "414",
                "FleetType": "DH8-400",
                "Status": "ON TIME"
            },
            {
                "FltId": "907",
                "Carrier": "AS",
                "Orig": "PDX",
                "Dest": "SEA",
                "CutOffTime": "40",
                "FltDirection": 0,
                "SchedDepTime": "2019-01-22T10:00:00",
                "EstDepTime": "2019-01-22T10:00:00",
                "SchedArrTime": "2019-01-22T10:55:00",
                "EstArrTime": "2019-01-22T10:55:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-8",
                "DestGate": "C20",
                "OrigGate": "C1",
                "CodeShares": [
                    {
                        "FltId": "6852",
                        "Carrier": "AA"
                    }
                ],
                "TailId": "477",
                "FleetType": "737-900E",
                "Status": "ON TIME"
            },
            {
                "FltId": "327",
                "Carrier": "AS",
                "Orig": "SJC",
                "Dest": "SEA",
                "CutOffTime": "40",
                "FltDirection": 0,
                "SchedDepTime": "2019-01-22T08:45:00",
                "EstDepTime": "2019-01-22T08:45:00",
                "SchedArrTime": "2019-01-22T10:55:00",
                "EstArrTime": "2019-01-22T10:55:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-8",
                "DestGate": "C3",
                "OrigGate": "28",
                "CodeShares": [
                    {
                        "FltId": "6832",
                        "Carrier": "AA"
                    }
                ],
                "TailId": "560",
                "FleetType": "737-800E",
                "Status": "ON TIME"
            },
            {
                "FltId": "717",
                "Carrier": "AS",
                "Orig": "SLC",
                "Dest": "SEA",
                "CutOffTime": "40",
                "FltDirection": 0,
                "SchedDepTime": "2019-01-22T09:35:00",
                "EstDepTime": "2019-01-22T09:35:00",
                "SchedArrTime": "2019-01-22T11:00:00",
                "EstArrTime": "2019-01-22T11:00:00",
                "ActualTime": "",
                "OrigZuluOffset": "-7",
                "DestZuluOffset": "-8",
                "DestGate": "N1",
                "OrigGate": "A6",
                "CodeShares": [
                    {
                        "FltId": "3249",
                        "Carrier": "EK"
                    }
                ],
                "TailId": "278",
                "FleetType": "737-900R",
                "Status": "ON TIME"
            },
            {
                "FltId": "2649",
                "Carrier": "QX",
                "Orig": "BLI",
                "Dest": "SEA",
                "CutOffTime": "40",
                "FltDirection": 0,
                "SchedDepTime": "2019-01-22T10:15:00",
                "EstDepTime": "2019-01-22T10:15:00",
                "SchedArrTime": "2019-01-22T11:00:00",
                "EstArrTime": "2019-01-22T11:00:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-8",
                "DestGate": "",
                "OrigGate": "B",
                "CodeShares": [
                    {
                        "FltId": "7585",
                        "Carrier": "AA"
                    }
                ],
                "TailId": "439",
                "FleetType": "DH8-400",
                "Status": "ON TIME"
            },
            {
                "FltId": "2673",
                "Carrier": "QX",
                "Orig": "GEG",
                "Dest": "SEA",
                "CutOffTime": "40",
                "FltDirection": 0,
                "SchedDepTime": "2019-01-22T09:45:00",
                "EstDepTime": "2019-01-22T09:45:00",
                "SchedArrTime": "2019-01-22T11:00:00",
                "EstArrTime": "2019-01-22T11:00:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-8",
                "DestGate": "C2",
                "OrigGate": "HG",
                "CodeShares": [
                    {
                        "FltId": "7556",
                        "Carrier": "AA"
                    }
                ],
                "TailId": "440",
                "FleetType": "DH8-400",
                "Status": "ON TIME"
            },
            {
                "FltId": "471",
                "Carrier": "AS",
                "Orig": "SAN",
                "Dest": "SEA",
                "CutOffTime": "40",
                "FltDirection": 0,
                "SchedDepTime": "2019-01-22T08:00:00",
                "EstDepTime": "2019-01-22T08:00:00",
                "SchedArrTime": "2019-01-22T11:00:00",
                "EstArrTime": "2019-01-22T11:00:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-8",
                "DestGate": "N8",
                "OrigGate": "HG",
                "CodeShares": [
                    {
                        "FltId": "6830",
                        "Carrier": "AA"
                    }
                ],
                "TailId": "508",
                "FleetType": "737-800E",
                "Status": "ON TIME"
            },
            {
                "FltId": "775",
                "Carrier": "AS",
                "Orig": "ABQ",
                "Dest": "SEA",
                "CutOffTime": "40",
                "FltDirection": 0,
                "SchedDepTime": "2019-01-22T08:45:00",
                "EstDepTime": "2019-01-22T08:45:00",
                "SchedArrTime": "2019-01-22T11:00:00",
                "EstArrTime": "2019-01-22T11:00:00",
                "ActualTime": "",
                "OrigZuluOffset": "-7",
                "DestZuluOffset": "-8",
                "DestGate": "C18",
                "OrigGate": "B6",
                "CodeShares": [
                    {
                        "FltId": "",
                        "Carrier": ""
                    }
                ],
                "TailId": "524",
                "FleetType": "737-800",
                "Status": "ON TIME"
            },
            {
                "FltId": "1",
                "Carrier": "AS",
                "Orig": "DCA",
                "Dest": "SEA",
                "CutOffTime": "40",
                "FltDirection": 0,
                "SchedDepTime": "2019-01-22T08:00:00",
                "EstDepTime": "2019-01-22T08:00:00",
                "SchedArrTime": "2019-01-22T11:05:00",
                "EstArrTime": "2019-01-22T11:05:00",
                "ActualTime": "",
                "OrigZuluOffset": "-5",
                "DestZuluOffset": "-8",
                "DestGate": "N6",
                "OrigGate": "18",
                "CodeShares": [
                    {
                        "FltId": "",
                        "Carrier": ""
                    }
                ],
                "TailId": "520",
                "FleetType": "737-800",
                "Status": "ON TIME"
            },
            {
                "FltId": "2115",
                "Carrier": "QX",
                "Orig": "PHX",
                "Dest": "SEA",
                "CutOffTime": "40",
                "FltDirection": 0,
                "SchedDepTime": "2019-01-22T09:10:00",
                "EstDepTime": "2019-01-22T09:10:00",
                "SchedArrTime": "2019-01-22T11:15:00",
                "EstArrTime": "2019-01-22T11:15:00",
                "ActualTime": "",
                "OrigZuluOffset": "-7",
                "DestZuluOffset": "-8",
                "DestGate": "C10",
                "OrigGate": "HG",
                "CodeShares": [
                    {
                        "FltId": "",
                        "Carrier": ""
                    }
                ],
                "TailId": "620",
                "FleetType": "E175",
                "Status": "ON TIME"
            },
            {
                "FltId": "1385",
                "Carrier": "AS",
                "Orig": "SFO",
                "Dest": "SEA",
                "CutOffTime": "40",
                "FltDirection": 0,
                "SchedDepTime": "2019-01-22T09:15:00",
                "EstDepTime": "2019-01-22T09:15:00",
                "SchedArrTime": "2019-01-22T11:25:00",
                "EstArrTime": "2019-01-22T11:25:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-8",
                "DestGate": "",
                "OrigGate": "",
                "CodeShares": [
                    {
                        "FltId": "",
                        "Carrier": ""
                    }
                ],
                "TailId": "632",
                "FleetType": "A320",
                "Status": "ON TIME"
            },
            {
                "FltId": "3319",
                "Carrier": "OO",
                "Orig": "SEA",
                "Dest": "FAT",
                "CutOffTime": "40",
                "FltDirection": 1,
                "SchedDepTime": "2019-01-22T09:45:00",
                "EstDepTime": "2019-01-22T09:45:00",
                "SchedArrTime": "2019-01-22T11:55:00",
                "EstArrTime": "2019-01-22T11:55:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-8",
                "DestGate": "",
                "OrigGate": "C2E",
                "CodeShares": [
                    {
                        "FltId": "",
                        "Carrier": ""
                    }
                ],
                "TailId": "179",
                "FleetType": "E175",
                "Status": "ON TIME"
            },
            {
                "FltId": "2545",
                "Carrier": "QX",
                "Orig": "SEA",
                "Dest": "PDX",
                "CutOffTime": "40",
                "FltDirection": 1,
                "SchedDepTime": "2019-01-22T09:45:00",
                "EstDepTime": "2019-01-22T09:45:00",
                "SchedArrTime": "2019-01-22T10:40:00",
                "EstArrTime": "2019-01-22T10:40:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-8",
                "DestGate": "A6",
                "OrigGate": "C2F",
                "CodeShares": [
                    {
                        "FltId": "",
                        "Carrier": ""
                    }
                ],
                "TailId": "402",
                "FleetType": "DH8-400",
                "Status": "ON TIME"
            },
            {
                "FltId": "2402",
                "Carrier": "QX",
                "Orig": "SEA",
                "Dest": "YLW",
                "CutOffTime": "60",
                "FltDirection": 1,
                "SchedDepTime": "2019-01-22T09:45:00",
                "EstDepTime": "2019-01-22T09:45:00",
                "SchedArrTime": "2019-01-22T10:55:00",
                "EstArrTime": "2019-01-22T10:55:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-8",
                "DestGate": "HG",
                "OrigGate": "C10A",
                "CodeShares": [
                    {
                        "FltId": "3767",
                        "Carrier": "QF"
                    }
                ],
                "TailId": "436",
                "FleetType": "DH8-400",
                "Status": "ON TIME"
            },
            {
                "FltId": "724",
                "Carrier": "AS",
                "Orig": "SEA",
                "Dest": "BNA",
                "CutOffTime": "40",
                "FltDirection": 1,
                "SchedDepTime": "2019-01-22T09:45:00",
                "EstDepTime": "2019-01-22T09:45:00",
                "SchedArrTime": "2019-01-22T16:05:00",
                "EstArrTime": "2019-01-22T16:05:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-6",
                "DestGate": "HG",
                "OrigGate": "C11",
                "CodeShares": [
                    {
                        "FltId": "",
                        "Carrier": ""
                    }
                ],
                "TailId": "553",
                "FleetType": "737-800",
                "Status": "ON TIME"
            },
            {
                "FltId": "843",
                "Carrier": "AS",
                "Orig": "SEA",
                "Dest": "KOA",
                "CutOffTime": "40",
                "FltDirection": 1,
                "SchedDepTime": "2019-01-22T09:45:00",
                "EstDepTime": "2019-01-22T09:45:00",
                "SchedArrTime": "2019-01-22T14:25:00",
                "EstArrTime": "2019-01-22T14:25:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-10",
                "DestGate": "6",
                "OrigGate": "N8",
                "CodeShares": [
                    {
                        "FltId": "",
                        "Carrier": ""
                    }
                ],
                "TailId": "563",
                "FleetType": "737-800E",
                "Status": "ON TIME"
            },
            {
                "FltId": "2313",
                "Carrier": "QX",
                "Orig": "SEA",
                "Dest": "RDM",
                "CutOffTime": "40",
                "FltDirection": 1,
                "SchedDepTime": "2019-01-22T09:45:00",
                "EstDepTime": "2019-01-22T09:45:00",
                "SchedArrTime": "2019-01-22T10:45:00",
                "EstArrTime": "2019-01-22T10:45:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-8",
                "DestGate": "HG",
                "OrigGate": "C2H",
                "CodeShares": [
                    {
                        "FltId": "",
                        "Carrier": ""
                    }
                ],
                "TailId": "629",
                "FleetType": "E175",
                "Status": "ON TIME"
            },
            {
                "FltId": "656",
                "Carrier": "AS",
                "Orig": "SEA",
                "Dest": "PHX",
                "CutOffTime": "40",
                "FltDirection": 1,
                "SchedDepTime": "2019-01-22T09:50:00",
                "EstDepTime": "2019-01-22T09:50:00",
                "SchedArrTime": "2019-01-22T13:40:00",
                "EstArrTime": "2019-01-22T13:40:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-7",
                "DestGate": "10",
                "OrigGate": "D5",
                "CodeShares": [
                    {
                        "FltId": "",
                        "Carrier": ""
                    }
                ],
                "TailId": "419",
                "FleetType": "737-900E",
                "Status": "ON TIME"
            },
            {
                "FltId": "2444",
                "Carrier": "QX",
                "Orig": "SEA",
                "Dest": "GTF",
                "CutOffTime": "40",
                "FltDirection": 1,
                "SchedDepTime": "2019-01-22T09:50:00",
                "EstDepTime": "2019-01-22T09:50:00",
                "SchedArrTime": "2019-01-22T12:30:00",
                "EstArrTime": "2019-01-22T12:30:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-7",
                "DestGate": "HG",
                "OrigGate": "C10F",
                "CodeShares": [
                    {
                        "FltId": "7594",
                        "Carrier": "AA"
                    }
                ],
                "TailId": "433",
                "FleetType": "DH8-400",
                "Status": "ON TIME"
            },
            {
                "FltId": "968",
                "Carrier": "AS",
                "Orig": "SEA",
                "Dest": "SLC",
                "CutOffTime": "40",
                "FltDirection": 1,
                "SchedDepTime": "2019-01-22T09:50:00",
                "EstDepTime": "2019-01-22T09:50:00",
                "SchedArrTime": "2019-01-22T12:50:00",
                "EstArrTime": "2019-01-22T12:50:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-7",
                "DestGate": "A6",
                "OrigGate": "N2",
                "CodeShares": [
                    {
                        "FltId": "",
                        "Carrier": ""
                    }
                ],
                "TailId": "517",
                "FleetType": "737-800E",
                "Status": "ON TIME"
            },
            {
                "FltId": "2234",
                "Carrier": "QX",
                "Orig": "SEA",
                "Dest": "GEG",
                "CutOffTime": "40",
                "FltDirection": 1,
                "SchedDepTime": "2019-01-22T09:55:00",
                "EstDepTime": "2019-01-22T09:55:00",
                "SchedArrTime": "2019-01-22T10:55:00",
                "EstArrTime": "2019-01-22T10:55:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-8",
                "DestGate": "HG",
                "OrigGate": "C16A",
                "CodeShares": [
                    {
                        "FltId": "",
                        "Carrier": ""
                    }
                ],
                "TailId": "410",
                "FleetType": "DH8-400",
                "Status": "ON TIME"
            },
            {
                "FltId": "805",
                "Carrier": "AS",
                "Orig": "SEA",
                "Dest": "OGG",
                "CutOffTime": "40",
                "FltDirection": 1,
                "SchedDepTime": "2019-01-22T09:55:00",
                "EstDepTime": "2019-01-22T09:55:00",
                "SchedArrTime": "2019-01-22T14:25:00",
                "EstArrTime": "2019-01-22T14:25:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-10",
                "DestGate": "5",
                "OrigGate": "C15",
                "CodeShares": [
                    {
                        "FltId": "",
                        "Carrier": ""
                    }
                ],
                "TailId": "538",
                "FleetType": "737-800E",
                "Status": "ON TIME"
            },
            {
                "FltId": "478",
                "Carrier": "AS",
                "Orig": "SEA",
                "Dest": "MCI",
                "CutOffTime": "40",
                "FltDirection": 1,
                "SchedDepTime": "2019-01-22T09:55:00",
                "EstDepTime": "2019-01-22T09:55:00",
                "SchedArrTime": "2019-01-22T15:25:00",
                "EstArrTime": "2019-01-22T15:25:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-6",
                "DestGate": "52",
                "OrigGate": "N9",
                "CodeShares": [
                    {
                        "FltId": "",
                        "Carrier": ""
                    }
                ],
                "TailId": "557",
                "FleetType": "737-800E",
                "Status": "ON TIME"
            },
            {
                "FltId": "2542",
                "Carrier": "QX",
                "Orig": "SEA",
                "Dest": "YEG",
                "CutOffTime": "60",
                "FltDirection": 1,
                "SchedDepTime": "2019-01-22T09:55:00",
                "EstDepTime": "2019-01-22T09:55:00",
                "SchedArrTime": "2019-01-22T12:45:00",
                "EstArrTime": "2019-01-22T12:45:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-7",
                "DestGate": "86",
                "OrigGate": "C2G",
                "CodeShares": [
                    {
                        "FltId": "6169,3719",
                        "Carrier": "KE,QF"
                    }
                ],
                "TailId": "628",
                "FleetType": "E175",
                "Status": "ON TIME"
            },
            {
                "FltId": "1630",
                "Carrier": "AS",
                "Orig": "SEA",
                "Dest": "LAS",
                "CutOffTime": "40",
                "FltDirection": 1,
                "SchedDepTime": "2019-01-22T09:55:00",
                "EstDepTime": "2019-01-22T09:55:00",
                "SchedArrTime": "2019-01-22T12:20:00",
                "EstArrTime": "2019-01-22T12:20:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-8",
                "DestGate": "HG",
                "OrigGate": "D4",
                "CodeShares": [
                    {
                        "FltId": "",
                        "Carrier": ""
                    }
                ],
                "TailId": "634",
                "FleetType": "A320",
                "Status": "ON TIME"
            },
            {
                "FltId": "2388",
                "Carrier": "QX",
                "Orig": "SEA",
                "Dest": "BZN",
                "CutOffTime": "40",
                "FltDirection": 1,
                "SchedDepTime": "2019-01-22T10:00:00",
                "EstDepTime": "2019-01-22T10:00:00",
                "SchedArrTime": "2019-01-22T12:45:00",
                "EstArrTime": "2019-01-22T12:45:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-7",
                "DestGate": "8",
                "OrigGate": "C16E",
                "CodeShares": [
                    {
                        "FltId": "",
                        "Carrier": ""
                    }
                ],
                "TailId": "443",
                "FleetType": "DH8-400",
                "Status": "ON TIME"
            },
            {
                "FltId": "500",
                "Carrier": "AS",
                "Orig": "SEA",
                "Dest": "IND",
                "CutOffTime": "40",
                "FltDirection": 1,
                "SchedDepTime": "2019-01-22T10:00:00",
                "EstDepTime": "2019-01-22T10:00:00",
                "SchedArrTime": "2019-01-22T17:15:00",
                "EstArrTime": "2019-01-22T17:15:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-5",
                "DestGate": "B5",
                "OrigGate": "N2",
                "CodeShares": [
                    {
                        "FltId": "",
                        "Carrier": ""
                    }
                ],
                "TailId": "523",
                "FleetType": "737-800",
                "Status": "ON TIME"
            },
            {
                "FltId": "418",
                "Carrier": "AS",
                "Orig": "SEA",
                "Dest": "SBA",
                "CutOffTime": "40",
                "FltDirection": 1,
                "SchedDepTime": "2019-01-22T10:00:00",
                "EstDepTime": "2019-01-22T10:00:00",
                "SchedArrTime": "2019-01-22T12:30:00",
                "EstArrTime": "2019-01-22T12:30:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-8",
                "DestGate": "HG",
                "OrigGate": "N1",
                "CodeShares": [
                    {
                        "FltId": "",
                        "Carrier": ""
                    }
                ],
                "TailId": "530",
                "FleetType": "737-800E",
                "Status": "ON TIME"
            },
            {
                "FltId": "2620",
                "Carrier": "QX",
                "Orig": "SEA",
                "Dest": "YYC",
                "CutOffTime": "60",
                "FltDirection": 1,
                "SchedDepTime": "2019-01-22T10:00:00",
                "EstDepTime": "2019-01-22T10:00:00",
                "SchedArrTime": "2019-01-22T12:40:00",
                "EstArrTime": "2019-01-22T12:40:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-7",
                "DestGate": "HG",
                "OrigGate": "C10D",
                "CodeShares": [
                    {
                        "FltId": "6152,3735",
                        "Carrier": "KE,QF"
                    }
                ],
                "TailId": "634",
                "FleetType": "E175",
                "Status": "ON TIME"
            },
            {
                "FltId": "1158",
                "Carrier": "AS",
                "Orig": "SEA",
                "Dest": "LAX",
                "CutOffTime": "40",
                "FltDirection": 1,
                "SchedDepTime": "2019-01-22T10:00:00",
                "EstDepTime": "2019-01-22T10:00:00",
                "SchedArrTime": "2019-01-22T12:45:00",
                "EstArrTime": "2019-01-22T12:45:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-8",
                "DestGate": "",
                "OrigGate": "",
                "CodeShares": [
                    {
                        "FltId": "3058,1265",
                        "Carrier": "EK,SQ"
                    }
                ],
                "TailId": "636",
                "FleetType": "A320",
                "Status": "ON TIME"
            },
            {
                "FltId": "2110",
                "Carrier": "QX",
                "Orig": "SEA",
                "Dest": "PSC",
                "CutOffTime": "40",
                "FltDirection": 1,
                "SchedDepTime": "2019-01-22T10:05:00",
                "EstDepTime": "2019-01-22T10:05:00",
                "SchedArrTime": "2019-01-22T11:00:00",
                "EstArrTime": "2019-01-22T11:00:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-8",
                "DestGate": "HG",
                "OrigGate": "C16C",
                "CodeShares": [
                    {
                        "FltId": "7550",
                        "Carrier": "AA"
                    }
                ],
                "TailId": "429",
                "FleetType": "DH8-400",
                "Status": "ON TIME"
            },
            {
                "FltId": "502",
                "Carrier": "AS",
                "Orig": "SEA",
                "Dest": "SNA",
                "CutOffTime": "40",
                "FltDirection": 1,
                "SchedDepTime": "2019-01-22T10:05:00",
                "EstDepTime": "2019-01-22T10:05:00",
                "SchedArrTime": "2019-01-22T12:50:00",
                "EstArrTime": "2019-01-22T12:50:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-8",
                "DestGate": "6",
                "OrigGate": "N6",
                "CodeShares": [
                    {
                        "FltId": "6888",
                        "Carrier": "AA"
                    }
                ],
                "TailId": "548",
                "FleetType": "737-800",
                "Status": "ON TIME"
            },
            {
                "FltId": "1176",
                "Carrier": "AS",
                "Orig": "SEA",
                "Dest": "SAN",
                "CutOffTime": "40",
                "FltDirection": 1,
                "SchedDepTime": "2019-01-22T10:05:00",
                "EstDepTime": "2019-01-22T10:05:00",
                "SchedArrTime": "2019-01-22T12:50:00",
                "EstArrTime": "2019-01-22T12:50:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-8",
                "DestGate": "HG",
                "OrigGate": "D3",
                "CodeShares": [
                    {
                        "FltId": "",
                        "Carrier": ""
                    }
                ],
                "TailId": "835",
                "FleetType": "A32B",
                "Status": "ON TIME"
            },
            {
                "FltId": "516",
                "Carrier": "AS",
                "Orig": "SEA",
                "Dest": "SJC",
                "CutOffTime": "40",
                "FltDirection": 1,
                "SchedDepTime": "2019-01-22T10:10:00",
                "EstDepTime": "2019-01-22T10:10:00",
                "SchedArrTime": "2019-01-22T12:25:00",
                "EstArrTime": "2019-01-22T12:25:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-8",
                "DestGate": "28",
                "OrigGate": "D1",
                "CodeShares": [
                    {
                        "FltId": "6882",
                        "Carrier": "AA"
                    }
                ],
                "TailId": "492",
                "FleetType": "737-900E",
                "Status": "ON TIME"
            },
            {
                "FltId": "206",
                "Carrier": "AS",
                "Orig": "SEA",
                "Dest": "PVR",
                "CutOffTime": "60",
                "FltDirection": 1,
                "SchedDepTime": "2019-01-22T10:15:00",
                "EstDepTime": "2019-01-22T10:15:00",
                "SchedArrTime": "2019-01-22T17:00:00",
                "EstArrTime": "2019-01-22T17:00:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-6",
                "DestGate": "HG",
                "OrigGate": "N7",
                "CodeShares": [
                    {
                        "FltId": "",
                        "Carrier": ""
                    }
                ],
                "TailId": "280",
                "FleetType": "737-900R",
                "Status": "ON TIME"
            },
            {
                "FltId": "2158",
                "Carrier": "QX",
                "Orig": "SEA",
                "Dest": "EAT",
                "CutOffTime": "40",
                "FltDirection": 1,
                "SchedDepTime": "2019-01-22T10:20:00",
                "EstDepTime": "2019-01-22T10:20:00",
                "SchedArrTime": "2019-01-22T11:10:00",
                "EstArrTime": "2019-01-22T11:10:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-8",
                "DestGate": "HG",
                "OrigGate": "C16D",
                "CodeShares": [
                    {
                        "FltId": "",
                        "Carrier": ""
                    }
                ],
                "TailId": "437",
                "FleetType": "DH8-400",
                "Status": "ON TIME"
            },
            {
                "FltId": "36",
                "Carrier": "AS",
                "Orig": "SEA",
                "Dest": "MSP",
                "CutOffTime": "40",
                "FltDirection": 1,
                "SchedDepTime": "2019-01-22T10:25:00",
                "EstDepTime": "2019-01-22T10:25:00",
                "SchedArrTime": "2019-01-22T15:45:00",
                "EstArrTime": "2019-01-22T15:45:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-6",
                "DestGate": "E1",
                "OrigGate": "C20",
                "CodeShares": [
                    {
                        "FltId": "",
                        "Carrier": ""
                    }
                ],
                "TailId": "448",
                "FleetType": "737-900E",
                "Status": "ON TIME"
            },
            {
                "FltId": "2198",
                "Carrier": "QX",
                "Orig": "SEA",
                "Dest": "LAS",
                "CutOffTime": "40",
                "FltDirection": 1,
                "SchedDepTime": "2019-01-22T10:30:00",
                "EstDepTime": "2019-01-22T10:30:00",
                "SchedArrTime": "2019-01-22T12:55:00",
                "EstArrTime": "2019-01-22T12:55:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-8",
                "DestGate": "HG",
                "OrigGate": "C17",
                "CodeShares": [
                    {
                        "FltId": "6099",
                        "Carrier": "KE"
                    }
                ],
                "TailId": "633",
                "FleetType": "E175",
                "Status": "ON TIME"
            },
            {
                "FltId": "56",
                "Carrier": "AS",
                "Orig": "SEA",
                "Dest": "ORD",
                "CutOffTime": "40",
                "FltDirection": 1,
                "SchedDepTime": "2019-01-22T10:35:00",
                "EstDepTime": "2019-01-22T10:35:00",
                "SchedArrTime": "2019-01-22T16:40:00",
                "EstArrTime": "2019-01-22T16:40:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-6",
                "DestGate": "H4",
                "OrigGate": "N3",
                "CodeShares": [
                    {
                        "FltId": "",
                        "Carrier": ""
                    }
                ],
                "TailId": "275",
                "FleetType": "737-900R",
                "Status": "ON TIME"
            },
            {
                "FltId": "2197",
                "Carrier": "QX",
                "Orig": "SEA",
                "Dest": "PDX",
                "CutOffTime": "40",
                "FltDirection": 1,
                "SchedDepTime": "2019-01-22T10:45:00",
                "EstDepTime": "2019-01-22T10:45:00",
                "SchedArrTime": "2019-01-22T11:40:00",
                "EstArrTime": "2019-01-22T11:40:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-8",
                "DestGate": "A12",
                "OrigGate": "C2B",
                "CodeShares": [
                    {
                        "FltId": "6007",
                        "Carrier": "KE"
                    }
                ],
                "TailId": "403",
                "FleetType": "DH8-400",
                "Status": "ON TIME"
            },
            {
                "FltId": "438",
                "Carrier": "AS",
                "Orig": "SEA",
                "Dest": "SFO",
                "CutOffTime": "40",
                "FltDirection": 1,
                "SchedDepTime": "2019-01-22T10:45:00",
                "EstDepTime": "2019-01-22T10:45:00",
                "SchedArrTime": "2019-01-22T13:00:00",
                "EstArrTime": "2019-01-22T13:00:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-8",
                "DestGate": "",
                "OrigGate": "",
                "CodeShares": [
                    {
                        "FltId": "6868,3036,5428",
                        "Carrier": "AA,EK,JL"
                    }
                ],
                "TailId": "526",
                "FleetType": "737-800",
                "Status": "ON TIME"
            },
            {
                "FltId": "2061",
                "Carrier": "QX",
                "Orig": "SEA",
                "Dest": "BOI",
                "CutOffTime": "40",
                "FltDirection": 1,
                "SchedDepTime": "2019-01-22T10:50:00",
                "EstDepTime": "2019-01-22T10:50:00",
                "SchedArrTime": "2019-01-22T13:15:00",
                "EstArrTime": "2019-01-22T13:15:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-7",
                "DestGate": "HG",
                "OrigGate": "C2C",
                "CodeShares": [
                    {
                        "FltId": "7588,6021",
                        "Carrier": "AA,KE"
                    }
                ],
                "TailId": "404",
                "FleetType": "DH8-400",
                "Status": "ON TIME"
            },
            {
                "FltId": "2074",
                "Carrier": "QX",
                "Orig": "SEA",
                "Dest": "FCA",
                "CutOffTime": "40",
                "FltDirection": 1,
                "SchedDepTime": "2019-01-22T10:50:00",
                "EstDepTime": "2019-01-22T10:50:00",
                "SchedArrTime": "2019-01-22T13:10:00",
                "EstArrTime": "2019-01-22T13:10:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-7",
                "DestGate": "HG",
                "OrigGate": "C2A",
                "CodeShares": [
                    {
                        "FltId": "6031",
                        "Carrier": "KE"
                    }
                ],
                "TailId": "422",
                "FleetType": "DH8-400",
                "Status": "ON TIME"
            },
            {
                "FltId": "119",
                "Carrier": "AS",
                "Orig": "SEA",
                "Dest": "ANC",
                "CutOffTime": "40",
                "FltDirection": 1,
                "SchedDepTime": "2019-01-22T10:50:00",
                "EstDepTime": "2019-01-22T10:50:00",
                "SchedArrTime": "2019-01-22T13:35:00",
                "EstArrTime": "2019-01-22T13:35:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-9",
                "DestGate": "C6",
                "OrigGate": "C3",
                "CodeShares": [
                    {
                        "FltId": "6980,6005",
                        "Carrier": "AA,KE"
                    }
                ],
                "TailId": "433",
                "FleetType": "737-900E",
                "Status": "ON TIME"
            },
            {
                "FltId": "173",
                "Carrier": "AS",
                "Orig": "SEA",
                "Dest": "LIH",
                "CutOffTime": "40",
                "FltDirection": 1,
                "SchedDepTime": "2019-01-22T11:15:00",
                "EstDepTime": "2019-01-22T11:15:00",
                "SchedArrTime": "2019-01-22T15:55:00",
                "EstArrTime": "2019-01-22T15:55:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-10",
                "DestGate": "HG",
                "OrigGate": "C18",
                "CodeShares": [
                    {
                        "FltId": "",
                        "Carrier": ""
                    }
                ],
                "TailId": "514",
                "FleetType": "737-800E",
                "Status": "ON TIME"
            },
            {
                "FltId": "2382",
                "Carrier": "QX",
                "Orig": "SEA",
                "Dest": "PDX",
                "CutOffTime": "40",
                "FltDirection": 1,
                "SchedDepTime": "2019-01-22T11:25:00",
                "EstDepTime": "2019-01-22T11:25:00",
                "SchedArrTime": "2019-01-22T12:15:00",
                "EstArrTime": "2019-01-22T12:15:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-8",
                "DestGate": "HG",
                "OrigGate": "C2D",
                "CodeShares": [
                    {
                        "FltId": "6009",
                        "Carrier": "KE"
                    }
                ],
                "TailId": "632",
                "FleetType": "E175",
                "Status": "ON TIME"
            },
            {
                "FltId": "2088",
                "Carrier": "QX",
                "Orig": "SEA",
                "Dest": "HLN",
                "CutOffTime": "40",
                "FltDirection": 1,
                "SchedDepTime": "2019-01-22T11:35:00",
                "EstDepTime": "2019-01-22T11:35:00",
                "SchedArrTime": "2019-01-22T14:20:00",
                "EstArrTime": "2019-01-22T14:20:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-7",
                "DestGate": "HG",
                "OrigGate": "C2E",
                "CodeShares": [
                    {
                        "FltId": "7467,6033",
                        "Carrier": "AA,KE"
                    }
                ],
                "TailId": "407",
                "FleetType": "DH8-400",
                "Status": "ON TIME"
            },
            {
                "FltId": "2562",
                "Carrier": "QX",
                "Orig": "SEA",
                "Dest": "SMF",
                "CutOffTime": "40",
                "FltDirection": 1,
                "SchedDepTime": "2019-01-22T11:35:00",
                "EstDepTime": "2019-01-22T11:35:00",
                "SchedArrTime": "2019-01-22T13:30:00",
                "EstArrTime": "2019-01-22T13:30:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-8",
                "DestGate": "HG",
                "OrigGate": "C10F",
                "CodeShares": [
                    {
                        "FltId": "7635,6227",
                        "Carrier": "AA,KE"
                    }
                ],
                "TailId": "426",
                "FleetType": "DH8-400",
                "Status": "ON TIME"
            },
            {
                "FltId": "1688",
                "Carrier": "AS",
                "Orig": "SEA",
                "Dest": "LAS",
                "CutOffTime": "40",
                "FltDirection": 1,
                "SchedDepTime": "2019-01-22T11:35:00",
                "EstDepTime": "2019-01-22T11:35:00",
                "SchedArrTime": "2019-01-22T14:00:00",
                "EstArrTime": "2019-01-22T14:00:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-8",
                "DestGate": "HG",
                "OrigGate": "D4",
                "CodeShares": [
                    {
                        "FltId": "6109",
                        "Carrier": "KE"
                    }
                ],
                "TailId": "628",
                "FleetType": "A320",
                "Status": "ON TIME"
            },
            {
                "FltId": "634",
                "Carrier": "AS",
                "Orig": "SEA",
                "Dest": "PSP",
                "CutOffTime": "40",
                "FltDirection": 1,
                "SchedDepTime": "2019-01-22T11:40:00",
                "EstDepTime": "2019-01-22T11:40:00",
                "SchedArrTime": "2019-01-22T14:25:00",
                "EstArrTime": "2019-01-22T14:25:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-8",
                "DestGate": "HG",
                "OrigGate": "D1",
                "CodeShares": [
                    {
                        "FltId": "",
                        "Carrier": ""
                    }
                ],
                "TailId": "270",
                "FleetType": "737-900R",
                "Status": "ON TIME"
            },
            {
                "FltId": "204",
                "Carrier": "AS",
                "Orig": "SEA",
                "Dest": "SJD",
                "CutOffTime": "60",
                "FltDirection": 1,
                "SchedDepTime": "2019-01-22T11:40:00",
                "EstDepTime": "2019-01-22T11:40:00",
                "SchedArrTime": "2019-01-22T16:55:00",
                "EstArrTime": "2019-01-22T16:55:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-7",
                "DestGate": "1",
                "OrigGate": "N9",
                "CodeShares": [
                    {
                        "FltId": "",
                        "Carrier": ""
                    }
                ],
                "TailId": "272",
                "FleetType": "737-900R",
                "Status": "ON TIME"
            },
            {
                "FltId": "2384",
                "Carrier": "QX",
                "Orig": "SEA",
                "Dest": "YYJ",
                "CutOffTime": "60",
                "FltDirection": 1,
                "SchedDepTime": "2019-01-22T11:40:00",
                "EstDepTime": "2019-01-22T11:40:00",
                "SchedArrTime": "2019-01-22T12:30:00",
                "EstArrTime": "2019-01-22T12:30:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-8",
                "DestGate": "5",
                "OrigGate": "C16C",
                "CodeShares": [
                    {
                        "FltId": "6173,3747",
                        "Carrier": "KE,QF"
                    }
                ],
                "TailId": "411",
                "FleetType": "DH8-400",
                "Status": "ON TIME"
            },
            {
                "FltId": "2400",
                "Carrier": "QX",
                "Orig": "SEA",
                "Dest": "BIL",
                "CutOffTime": "40",
                "FltDirection": 1,
                "SchedDepTime": "2019-01-22T11:40:00",
                "EstDepTime": "2019-01-22T11:40:00",
                "SchedArrTime": "2019-01-22T14:40:00",
                "EstArrTime": "2019-01-22T14:40:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-7",
                "DestGate": "B3",
                "OrigGate": "C16D",
                "CodeShares": [
                    {
                        "FltId": "7522,6233",
                        "Carrier": "AA,KE"
                    }
                ],
                "TailId": "423",
                "FleetType": "DH8-400",
                "Status": "ON TIME"
            },
            {
                "FltId": "2096",
                "Carrier": "QX",
                "Orig": "SEA",
                "Dest": "ALW",
                "CutOffTime": "40",
                "FltDirection": 1,
                "SchedDepTime": "2019-01-22T11:40:00",
                "EstDepTime": "2019-01-22T11:40:00",
                "SchedArrTime": "2019-01-22T12:40:00",
                "EstArrTime": "2019-01-22T12:40:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-8",
                "DestGate": "HG",
                "OrigGate": "C16A",
                "CodeShares": [
                    {
                        "FltId": "",
                        "Carrier": ""
                    }
                ],
                "TailId": "434",
                "FleetType": "DH8-400",
                "Status": "ON TIME"
            },
            {
                "FltId": "75",
                "Carrier": "AS",
                "Orig": "SEA",
                "Dest": "JNU",
                "CutOffTime": "40",
                "FltDirection": 1,
                "SchedDepTime": "2019-01-22T11:40:00",
                "EstDepTime": "2019-01-22T11:40:00",
                "SchedArrTime": "2019-01-22T13:15:00",
                "EstArrTime": "2019-01-22T13:15:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-9",
                "DestGate": "4",
                "OrigGate": "C17",
                "CodeShares": [
                    {
                        "FltId": "",
                        "Carrier": ""
                    }
                ],
                "TailId": "474",
                "FleetType": "737-900E",
                "Status": "ON TIME"
            },
            {
                "FltId": "2040",
                "Carrier": "QX",
                "Orig": "SEA",
                "Dest": "ICT",
                "CutOffTime": "40",
                "FltDirection": 1,
                "SchedDepTime": "2019-01-22T11:40:00",
                "EstDepTime": "2019-01-22T11:40:00",
                "SchedArrTime": "2019-01-22T17:05:00",
                "EstArrTime": "2019-01-22T17:05:00",
                "ActualTime": "",
                "OrigZuluOffset": "-8",
                "DestZuluOffset": "-6",
                "DestGate": "HG",
                "OrigGate": "C10D",
                "CodeShares": [
                    {
                        "FltId": "",
                        "Carrier": ""
                    }
                ],
                "TailId": "636",
                "FleetType": "E175",
                "Status": "ON TIME"
            }
        ];
    }
    FlightsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.flightService.getFlights().subscribe(function (res) {
            console.log(res);
            _this.flights = res;
        });
    };
    FlightsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-flights',
            template: __webpack_require__(/*! ./flights.component.html */ "./src/app/flights/flights.component.html"),
            styles: [__webpack_require__(/*! ./flights.component.css */ "./src/app/flights/flights.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_flight_service__WEBPACK_IMPORTED_MODULE_2__["FlightService"]])
    ], FlightsComponent);
    return FlightsComponent;
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/admin/Documents/HARPREET/projects/angular/flight-assignment/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map