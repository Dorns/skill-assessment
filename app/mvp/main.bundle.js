webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routes__ = __webpack_require__("./src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_login_login_component__ = __webpack_require__("./src/app/views/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_dashboard_dashboard_component__ = __webpack_require__("./src/app/views/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_services_auth_guard_service__ = __webpack_require__("./src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__views_menu_menu_component__ = __webpack_require__("./src/app/views/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__views_rodape_rodape_component__ = __webpack_require__("./src/app/views/rodape/rodape.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__views_teste_teste_component__ = __webpack_require__("./src/app/views/teste/teste.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__views_thankyou_thankyou_jr_thankyou_jr_component__ = __webpack_require__("./src/app/views/thankyou/thankyou-jr/thankyou-jr.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__views_thankyou_thankyou_pl_thankyou_pl_component__ = __webpack_require__("./src/app/views/thankyou/thankyou-pl/thankyou-pl.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__views_thankyou_thankyou_sr_thankyou_sr_component__ = __webpack_require__("./src/app/views/thankyou/thankyou-sr/thankyou-sr.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__views_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_5__views_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_13__views_menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_14__views_rodape_rodape_component__["a" /* RodapeComponent */],
            __WEBPACK_IMPORTED_MODULE_15__views_teste_teste_component__["a" /* TesteComponent */],
            __WEBPACK_IMPORTED_MODULE_19__views_thankyou_thankyou_jr_thankyou_jr_component__["a" /* ThankyouJrComponent */],
            __WEBPACK_IMPORTED_MODULE_20__views_thankyou_thankyou_pl_thankyou_pl_component__["a" /* ThankyouPlComponent */],
            __WEBPACK_IMPORTED_MODULE_21__views_thankyou_thankyou_sr_thankyou_sr_component__["a" /* ThankyouSrComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__app_routes__["a" /* AppRoutes */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].firebase, 'angular-auth-firebase'),
            __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_12__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_18_angularfire2_firestore__["b" /* AngularFirestoreModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_11_app_services_auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_16__services_user_service__["a" /* UserService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_login_login_component__ = __webpack_require__("./src/app/views/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_dashboard_dashboard_component__ = __webpack_require__("./src/app/views/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_guard_service__ = __webpack_require__("./src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_teste_teste_component__ = __webpack_require__("./src/app/views/teste/teste.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_thankyou_thankyou_jr_thankyou_jr_component__ = __webpack_require__("./src/app/views/thankyou/thankyou-jr/thankyou-jr.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_thankyou_thankyou_pl_thankyou_pl_component__ = __webpack_require__("./src/app/views/thankyou/thankyou-pl/thankyou-pl.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_thankyou_thankyou_sr_thankyou_sr_component__ = __webpack_require__("./src/app/views/thankyou/thankyou-sr/thankyou-sr.component.ts");








var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__views_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'dashboard',
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__services_auth_guard_service__["a" /* AuthGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_2__views_dashboard_dashboard_component__["a" /* DashboardComponent */]
    },
    {
        path: 'teste',
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__services_auth_guard_service__["a" /* AuthGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_4__views_teste_teste_component__["a" /* TesteComponent */]
    },
    {
        path: 'thank-you-jr',
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__services_auth_guard_service__["a" /* AuthGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_5__views_thankyou_thankyou_jr_thankyou_jr_component__["a" /* ThankyouJrComponent */]
    },
    {
        path: 'thank-you-pl',
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__services_auth_guard_service__["a" /* AuthGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_6__views_thankyou_thankyou_pl_thankyou_pl_component__["a" /* ThankyouPlComponent */]
    },
    {
        path: 'thank-you-sr',
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__services_auth_guard_service__["a" /* AuthGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_7__views_thankyou_thankyou_sr_thankyou_sr_component__["a" /* ThankyouSrComponent */]
    }
];
var AppRoutes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['/']);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__("./node_modules/firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(_firebaseAuth, router) {
        var _this = this;
        this._firebaseAuth = _firebaseAuth;
        this.router = router;
        this.userDetails = null;
        this.curruser = '';
        this.user = _firebaseAuth.authState;
        this.user.subscribe(function (user) {
            if (user) {
                _this.userDetails = user;
                console.log(_this.userDetails);
            }
            else {
                _this.userDetails = null;
            }
        });
    }
    AuthService.prototype.signInWithTwitter = function () {
        return this._firebaseAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].TwitterAuthProvider());
    };
    AuthService.prototype.signInWithGoogle = function () {
        return this._firebaseAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].GoogleAuthProvider());
    };
    AuthService.prototype.signInWithFacebook = function () {
        return this._firebaseAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].FacebookAuthProvider());
    };
    AuthService.prototype.isLoggedIn = function () {
        if (this.userDetails == null) {
            return false;
        }
        else {
            return true;
        }
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        this._firebaseAuth.auth.signOut()
            .then(function (res) { return _this.router.navigate(['/']); });
    };
    AuthService.prototype.signInRegular = function (email, password) {
        var credential = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].EmailAuthProvider.credential(email, password);
        return this._firebaseAuth.auth.signInWithEmailAndPassword(email, password);
    };
    AuthService.prototype.emailSignUp = function (email, password) {
        return this._firebaseAuth.auth.createUserWithEmailAndPassword(email, password);
    };
    AuthService.prototype.getCurrentUser = function () {
        var _this = this;
        return this._firebaseAuth.authState.subscribe(function (user) {
            if (user)
                return _this.curruser = user.email;
        });
    };
    AuthService.prototype.getCurruser = function () {
        return this.curruser;
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "./src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__("./node_modules/firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = (function () {
    function UserService(db, afAuth) {
        this.db = db;
        this.afAuth = afAuth;
    }
    UserService.prototype.getCurrentUser = function () {
        return new Promise(function (resolve, reject) {
            var user = __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().onAuthStateChanged(function (user) {
                if (user) {
                    resolve(user);
                }
                else {
                    reject('No user logged in');
                }
            });
        });
    };
    UserService.prototype.updateCurrentUser = function (value) {
        return new Promise(function (resolve, reject) {
            var user = __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().currentUser;
            user.updateProfile({
                displayName: value.name,
                photoURL: user.photoURL
            }).then(function (res) {
                resolve(res);
            }, function (err) { return reject(err); });
        });
    };
    Object.defineProperty(UserService.prototype, "resultado", {
        get: function () {
            return this.string;
        },
        set: function (string) {
            this.string = string;
        },
        enumerable: true,
        configurable: true
    });
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _b || Object])
], UserService);

var _a, _b;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "./src/app/views/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ".cor-fundo {\r\n  background-color: rgba(0, 165, 200, 0.4);\r\n}\r\n\r\n.cor-azul {\r\n  color: #00A5C8;\r\n  font-weight: bold;\r\n  text-align: center;\r\n}\r\n\r\n.botao-comecar {\r\n  width: 100px;\r\n  height: 45px;\r\n  border-radius: 5px;\r\n  font-weight: bold;\r\n  background-color: #ea5c37;\r\n  border: none;\r\n  border-bottom: 5px solid #e93d13;\r\n  color: #FFF;\r\n}\r\n\r\n.alinhamento {\r\n  text-align: center;\r\n  height: 100vh; \r\n}\r\n\r\n.img {\r\n  max-height: 250px;\r\n  text-align: center;\r\n  margin: 0 auto;\r\n}\r\n\r\n.junior {\r\n  font-weight: bold;\r\n  color: #8eb939;\r\n}\r\n\r\n.pleno {\r\n  font-weight: bold;\r\n  color: #00A5C8; \r\n}\r\n\r\n.senior {\r\n  font-weight: bold;\r\n  color: #e93d13;\r\n}\r\n\r\n.texto {\r\n  font-weight: bold;\r\n}\r\n\r\n.margem {\r\n  margin-top: 20px;\r\n}"

/***/ }),

/***/ "./src/app/views/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\r\n<div class=\"main__body cor-fundo\">\r\n  <div class=\"container\">\r\n    <div class=\"login__page alinhamento align-middle\">\r\n      <div class=\"card col-md-12 margem\">\r\n        <img src=\"assets/img/Socorro.png\" alt=\"Socorro\" class=\"img-responsive img-circle img\">\r\n      </div>\r\n      <div class=\"card col-md-12\">\r\n        <h2 class=\"row cor-azul\">Como o teste funciona?</h2>\r\n        <p class=\"row texto\">O teste contém questões dos mais diversos conteúdos sobre Marketing Digital, cada questão contém um peso, que no\r\n          final será indicado uma pontuação, medindo a sua senioridade e dependendo de sua pontuação, você será classificado\r\n          como\r\n          <span class=\"junior\">Júnior</span>,\r\n          <span class=\"pleno\"> Pleno</span> ou\r\n          <span class=\"senior\">Sênior</span>.</p>\r\n        <h2 class=\"row cor-azul\">E aí, pronto para começar?</h2>\r\n        <button type=\"buton\" class=\"btn botao-comecar\" style=\"margin-bottom: 20px\" routerLink=\"/teste\">\r\n          Começar!\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <!-- end card -->\r\n  </div>\r\n  <!-- end container -->\r\n</div>"

/***/ }),

/***/ "./src/app/views/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("./src/app/views/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("./src/app/views/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "./src/app/views/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".cor-login {\r\n  background-color: rgba(0, 165, 200, 0.5);\r\n  border-radius: 10px;\r\n}\r\n\r\n.texto-header {\r\n  color: #94c13d;\r\n  font-size: 30px;\r\n  text-align: center;\r\n  margin: 50px 80px 50px 80px;\r\n  font-weight: bold;\r\n}\r\n\r\n.img {\r\n  max-height: 250px;\r\n  text-align: center;\r\n  margin: 0 auto;\r\n}\r\n\r\n.texto-help {\r\n  font-size: 20px;\r\n  margin: 0 80px 10px 80px;\r\n  color: #505050;\r\n}\r\n\r\n.texto-corpo {\r\n  margin: 0 95px 10px 95px;\r\n  color: #383838;\r\n}\r\n\r\n.texto-vem {\r\n  color: #00A5C8;\r\n  font-weight: bold;\r\n  margin: 0 75px 0 75px;\r\n  font-size: 20px;\r\n}\r\n\r\n.botao-cadastro { \r\n  width: 100px;\r\n  height: 45px;\r\n  border-radius: 5px;\r\n  font-weight: bold;\r\n  background-color: #94c13d;\r\n  border: none;\r\n  border-bottom: 5px solid #8fb648;\r\n  color: #FFF;\r\n}\r\n\r\n.cor-verde {\r\n  background-color: #94c13d;\r\n}\r\n\r\n.texto-branco {\r\n  color: #FFF;\r\n}\r\n\r\n.erroSenha {\r\n  display: none;\r\n}\r\n\r\n.erroEmail {\r\ndisplay: none;\r\n}\r\n\r\n.botao-login {\r\n  width: 100px;\r\n  height: 45px;\r\n  border-radius: 5px;\r\n  font-weight: bold;\r\n  background-color: #ea5c37;\r\n  border: none;\r\n  border-bottom: 5px solid #e93d13;\r\n  color: #FFF;\r\n}\r\n\r\n.botao-fb {\r\n  background-color: #3b5998;\r\n  color: #FFF;\r\n}\r\n\r\n.botao-google {\r\n  background-color: #dd4b39;\r\n  color: #FFF;\r\n}\r\n\r\n.botao-tw {\r\n  background-color: #55acee;\r\n  color: #FFF;\r\n}\r\n\r\n.link-senha {\r\n  color: #FFF;\r\n}"

/***/ }),

/***/ "./src/app/views/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\r\n<div class=\"main__body\">\r\n  <div class=\"container\">\r\n    <div class=\"login__page\">\r\n      <h2 class=\"row texto-header\">Teste suas habilidades em Marketing Digital e melhore seu desempenho!</h2>\r\n      <div class=\"row\">\r\n        <div class=\"card col-md-6\">\r\n          <img src=\"assets/img/Socorro.png\" alt=\"Socorro\" class=\"img-responsive img-circle img\">\r\n          <strong>\r\n            <p class=\"text-center texto-help\">\r\n              Olá! Eu sou a Socorro, e tô aqui pra te ajudar!\r\n            </p>\r\n          </strong>\r\n          <p class=\"text-center texto-corpo\">\r\n            Já pensou em fazer um teste capaz de medir suas habilidades técnicas de forma justa e te dar um feedback com dicas para melhorar\r\n            seu desempenho?\r\n          </p>\r\n          <p class=\"text-center texto-vem\">Vem comigo que eu te explico! É só se cadastrar!</p>\r\n        </div>\r\n        <div class=\"card col-md-4 col-md-offset-1\">\r\n          <div class=\"login__card cor-login\">\r\n            <div class=\"card-block\">\r\n              <form name=\"signInForm\" method=\"post\" #formCadst=\"ngForm\">\r\n                <h3 align=\"center\" class=\"texto-branco\">Cadastre-se</h3>\r\n                <div class=\"form-group\">\r\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.nome\" name=\"nome\" placeholder=\"Nome\" pattern=\"(.*)\\s(.*)\" oninvalid=\"this.setCustomValidity('Favor Inserir Nome Completo')\"\r\n                    required>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <input id=\"email\" type=\"email\" class=\"form-control\" [(ngModel)]=\"user.email\" name=\"email\" placeholder=\"Email\" pattern=\"(.*)+@(.*)+\\.(.*)\"\r\n                    oninvalid=\"this.setCustomValidity('Favor Inserir Email no formato nome@dominio.exemplo')\" required>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <input id=\"senha\" type=\"password\" class=\"form-control\" [(ngModel)]=\"user.password\" name=\"password\" placeholder=\"Senha\" required>\r\n                </div>\r\n                <div class=\"form-group text-center\">\r\n                  <button type=\"buton\" class=\"btn botao-cadastro\" style=\"margin-bottom: 20px\" (click)=\"signUpWithEmail()\" [disabled]=\"formCadst.form.invalid\">\r\n                    Cadastrar\r\n                  </button>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <button type=\"button\" class=\"btn btn-block botao-fb\" (click)=\"signInWithFacebook()\">\r\n                    <i class=\"fa fa-facebook\" aria-hidden=\"true\"></i>\r\n                    Login com Facebook\r\n                  </button>\r\n                  <button type=\"button\" class=\"btn btn-block botao-tw\" (click)=\"signInWithTwitter()\">\r\n                    <i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>\r\n                    Login com Twitter\r\n                  </button>\r\n                  <button type=\"button\" class=\"btn btn-block botao-google\" (click)=\"signInWithGoogle()\">\r\n                    <i class=\"fa fa-google\" aria-hidden=\"true\"></i>\r\n                    Login com Google\r\n                  </button>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- end card -->\r\n  </div>\r\n  <!-- end container -->\r\n  <app-rodape></app-rodape>\r\n</div>\r\n<div class=\"modal\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content cor-verde\">\r\n      <div class=\"modal-body texto-branco\">\r\n        <form name=\"userform\" method=\"post\" #formCtrl=\"ngForm\">\r\n          <h3 align=\"center\">Login</h3>\r\n          <div class=\"form-group texto-branco\">\r\n            <input type=\"email\" class=\"form-control\" [(ngModel)]=\"user.email\" name=\"email\" placeholder=\"Email\" pattern=\"(.*)+@(.*)+\\.(.*)\"\r\n              oninvalid=\"this.setCustomValidity('Favor Inserir Email no formato nome@dominio.exemplo')\" required>\r\n          </div>\r\n          <div class=\"form-group texto-branco\">\r\n            <input type=\"password\" class=\"form-control\" [(ngModel)]=\"user.password\" name=\"password\" placeholder=\"Senha\" required>\r\n          </div>\r\n          <div class=\"form-group text-center\">\r\n            <button type=\"buton\" class=\"btn botao-login\" style=\"margin-bottom: 20px\" (click)=\"signInWithEmail()\" [disabled]=\"formCtrl.form.invalid\">\r\n              Login\r\n            </button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/views/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.user = {
            email: '',
            password: '',
            name: ''
        };
    }
    LoginComponent.prototype.signInWithTwitter = function () {
        var _this = this;
        this.authService.signInWithTwitter()
            .then(function (res) {
            $('#loginButton').hide();
            $('#logoffButton').show();
            _this.router.navigate(['dashboard']);
        })
            .catch(function (err) { return console.log(err); });
    };
    LoginComponent.prototype.signInWithGoogle = function () {
        var _this = this;
        this.authService.signInWithGoogle()
            .then(function (res) {
            $('#loginButton').hide();
            $('#logoffButton').show();
            _this.router.navigate(['dashboard']);
        })
            .catch(function (err) { return console.log(err); });
    };
    LoginComponent.prototype.signInWithFacebook = function () {
        var _this = this;
        this.authService.signInWithFacebook()
            .then(function (res) {
            $('#loginButton').hide();
            $('#logoffButton').show();
            _this.router.navigate(['dashboard']);
        })
            .catch(function (err) { return console.log(err); });
    };
    LoginComponent.prototype.signInWithEmail = function () {
        var _this = this;
        this.authService.signInRegular(this.user.email, this.user.password)
            .then(function (res) {
            console.log(res);
            $('#loginButton').hide();
            $('#logoffButton').show();
            _this.router.navigate(['dashboard']);
            $('#exampleModal').modal('hide');
        })
            .catch(function (err) { return console.log('error: ' + err); });
    };
    LoginComponent.prototype.signUpWithEmail = function () {
        var _this = this;
        this.authService.emailSignUp(this.user.email, this.user.password)
            .then(function (res) {
            console.log(res);
            $('#loginButton').hide();
            $('#logoffButton').show();
            _this.router.navigate(['dashboard']);
        })
            .catch(function (err) { return console.log('error: ' + err); });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("./src/app/views/login/login.component.html"),
        styles: [__webpack_require__("./src/app/views/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "./src/app/views/menu/menu.component.css":
/***/ (function(module, exports) {

module.exports = ".cor {\r\n  background-color: #00a5c8;\r\n}\r\n\r\n.cor-fonte {\r\n  color: #FFF;\r\n}\r\n\r\n.imagem {\r\n  height: 45px;\r\n}\r\n\r\n.cor-botao {\r\n  background-color: #00a5c8;\r\n}\r\n\r\n.alinha {\r\n  text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/views/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top cor\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\"\r\n        aria-controls=\"navbar\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <img src=\"assets/img/logo_hr_recruta_bco.png\" class=\"img-responsive imagem\">\r\n    </div>\r\n    <div id=\"navbar\" class=\"collapse navbar-collapse\">\r\n      <ul class=\"nav navbar-nav navbar-right alinha\">\r\n        <li>\r\n          <button id=\"loginButton\" type=\"button\" class=\"btn btn-default navbar-btn cor-fonte cor-botao\" data-toggle=\"modal\" data-target=\"#exampleModal\"> Login </button>\r\n        </li>\r\n        <li>\r\n          <button id=\"logoffButton\"type=\"button\" class=\"btn btn-default navbar-btn cor-fonte cor-botao\" (click)=\"authService.logout()\" hidden> Sair </button>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <!--/.nav-collapse -->\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/views/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bootstrap__ = __webpack_require__("./node_modules/bootstrap/dist/js/npm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuComponent = (function () {
    function MenuComponent(authService) {
        this.authService = authService;
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-menu',
        template: __webpack_require__("./src/app/views/menu/menu.component.html"),
        styles: [__webpack_require__("./src/app/views/menu/menu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], MenuComponent);

var _a;
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "./src/app/views/rodape/rodape.component.css":
/***/ (function(module, exports) {

module.exports = ".conteudoRodape {\r\n  background-color: #CCCCCC;\r\n  color: #666666;\r\n  text-align: center;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-pack: distribute;\r\n      justify-content: space-around;\r\n  padding-top: 5px;\r\n  height: 15px;\r\n}"

/***/ }),

/***/ "./src/app/views/rodape/rodape.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"navbar custom-navbar navbar-fixed-bottom conteudoRodape\">\n    <small>Copyright © 2018 | HR TECH | All Rights Reserved</small>\n    <small>\n        <a href=\"#\">Terms of service</a>|<a href=\"#\">Privacy Policy</a>\n    </small>\n</footer>\n"

/***/ }),

/***/ "./src/app/views/rodape/rodape.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RodapeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RodapeComponent = (function () {
    function RodapeComponent() {
    }
    RodapeComponent.prototype.ngOnInit = function () {
    };
    return RodapeComponent;
}());
RodapeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-rodape',
        template: __webpack_require__("./src/app/views/rodape/rodape.component.html"),
        styles: [__webpack_require__("./src/app/views/rodape/rodape.component.css")]
    }),
    __metadata("design:paramtypes", [])
], RodapeComponent);

//# sourceMappingURL=rodape.component.js.map

/***/ }),

/***/ "./src/app/views/teste/teste.component.css":
/***/ (function(module, exports) {

module.exports = ".botao-laranja {\r\n  width: 100px;\r\n  height: 45px;\r\n  border-radius: 5px;\r\n  font-weight: bold;\r\n  background-color: #ea5c37;\r\n  border: none;\r\n  border-bottom: 5px solid #e93d13;\r\n  color: #FFF;\r\n}\r\n\r\n.img {\r\n  max-height: 250px;\r\n  text-align: center;\r\n  margin: 0 auto;\r\n}\r\n\r\n.pergunta {\r\n  color: #ea5c37;\r\n}\r\n\r\n.resposta {\r\n  \r\n}"

/***/ }),

/***/ "./src/app/views/teste/teste.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\n<div class=\"main__body\">\n  <div class=\"container\">\n    <div class=\"login__page\">\n      <img src=\"assets/img/Socorro_perguntas.png\" alt=\"Socorro\" class=\"img-responsive img-circle img\">\n      <form ngNativeValidate (ngSubmit)=\"pontos()\" class=\"text-center\">\n        <div class=\"container\" *ngFor=\"let pergunta of perguntas\">\n          <h2 class=\"pergunta\">{{pergunta.pergunta}} </h2>\n          <label class=\"radio text-left\" *ngFor=\"let alternativa of pergunta.alternativas\">\n            <input required class=\"\" type=\"radio\" [attr.name]=\"pergunta.pergunta\" [value]=\"alternativa.value\" [attr.id]=\"alternativa.id\"\n              [attr.required]=\"true\" [attr.class]=\"alternativa.class\">\n            <span class=\"radio\">{{alternativa.resposta}}</span>\n          </label>\n        </div>\n        <div class=\"submit text-center\">\n          <input type=\"submit\" id=\"submit\" value=\"Enviar\" class=\"btn btn-success botao-laranja\" />\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/views/teste/teste.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TesteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TesteComponent = (function () {
    function TesteComponent(userService, http, router, db, route, location, authService) {
        this.userService = userService;
        this.http = http;
        this.router = router;
        this.db = db;
        this.route = route;
        this.location = location;
        this.authService = authService;
        this.user = '';
        this.perguntas = [
            {
                id: '1',
                pergunta: 'Qual é a importância do Blog Institucional dentro do SEO?',
                alternativas: [
                    { resposta: 'Criar autoridade em motores de busca com conteúdo relevante para o usuário.', value: 3, class: 'sr' },
                    { resposta: 'Melhorar a visibilidade da empresa frente a parceiros.', value: 1, class: 'jr' },
                    { resposta: 'Criar conteúdo relevante com links externos.', value: 2, class: 'pl' }
                ]
            },
            {
                id: '2',
                pergunta: 'Qual você considera a melhor forma de utilização de keywords dentro de um blogpost?',
                alternativas: [
                    { resposta: 'Utilizar no título da página e apenas uma vez no corpo do texto.', value: 2, class: 'pl' },
                    { resposta: 'Aplicar em todas as seções localizáveis pelos mecanismos de buscas e com volume relevante no corpo do texto.', value: 3, class: 'sr' },
                    { resposta: 'Repetir a palavra-chave o maior número de vezes possível para ter recorrência na página.', value: 1, class: 'jr' }
                ]
            },
            {
                id: '3',
                pergunta: 'Para que servem o SEO e SEM, respectivamente?',
                alternativas: [
                    { resposta: 'Melhorar desempenho em redes sociais e Melhorar rankeamento nos mecanismos de busca.', value: 1, class: 'jr' },
                    { resposta: 'Melhorar rankeamento nos mecanismos de busca e Melhorar desempenho em redes sociais.', value: 2, class: 'pl' },
                    { resposta: 'Melhorar desempenho em mecanismos de busca e boas práticas para buscas pagas.', value: 3, class: 'sr' }
                ]
            },
            {
                id: '4',
                pergunta: 'Dentre as opções abaixo quais são os canais de aquisições?',
                alternativas: [
                    { resposta: 'SEO, SEM e Social Ads.', value: 3, class: 'sr' },
                    { resposta: 'SEO, Outbound e Inbound.', value: 2, class: 'pl' },
                    { resposta: 'Social Ads, SEM, Outbound.', value: 1, class: 'jr' }
                ]
            },
            {
                id: '5',
                pergunta: 'Quais são os objetivos sugeridos pelo Facebook na tela de criação de campanha?',
                alternativas: [
                    { resposta: 'Alcance, Consideração e Conversão.', value: 2, class: 'pl' },
                    { resposta: 'Reconhecimento, Consideração e Conversão.', value: 3, class: 'sr' },
                    { resposta: 'Alcance, Conversão e Credibilidade.', value: 1, class: 'jr' }
                ]
            },
            {
                id: '6',
                pergunta: 'Se o CPC de uma campanha no google Adwords está alta, quais métricas você avaliaria?',
                alternativas: [
                    { resposta: 'CTR, Índice de qualidade, Formato da palavra.', value: 3, class: 'sr' },
                    { resposta: 'Formato da palavra, Numero de impressões, Pesquisa com o usuário', value: 1, class: 'jr' },
                    { resposta: 'Índice de qualidade, CTR, Numero de impressões.', value: 2, class: 'pl' }
                ]
            },
            {
                id: '7',
                pergunta: 'Qual ferramenta do Google Analitycs permite visualizar o hábito de navegação dos usuários na página?',
                alternativas: [
                    { resposta: 'Fluxo de Comportamento.', value: 3, class: 'sr' },
                    { resposta: 'Fluxo de Navegação.', value: 2, class: 'pl' },
                    { resposta: 'Perfil de Tráfego.', value: 1, class: 'jr' }
                ]
            },
            {
                id: '8',
                pergunta: 'Quais são as etapas principais para o desenvolvimento de um processo de Growth?',
                alternativas: [
                    { resposta: 'Ideação, Prototipação, Brainstorming, Testar.', value: 2, class: 'pl' },
                    { resposta: 'Desenvolver ideias, Brainstorming, Prototipação, testar e analisar a ideia.', value: 1, class: 'jr' },
                    { resposta: 'Brainstorming, priorização, desenvolver a ideia, testar a ideia e analisar a ideia.', value: 3, class: 'sr' }
                ]
            },
            {
                id: '9',
                pergunta: 'Em qual etapa do processo de aquisição e conversão está inserido o Growth Hacker?',
                alternativas: [
                    { resposta: 'Planejamento, deixando as etapas de execução para equipes operacionais.', value: 1, class: 'jr' },
                    { resposta: 'Somente operação, trabalhando com briefing pré-definido por outras equipes.', value: 2, class: 'pl' },
                    { resposta: 'Em todas as etapas, desempenhando maior controle e participação nos processos.', value: 3, class: 'sr' }
                ]
            },
            {
                id: '10',
                pergunta: 'Há quanto tempo você trabalha com Mkt Digital?',
                alternativas: [
                    { resposta: 'Até 1 ano.', value: 1, class: 'jr' },
                    { resposta: '1 a 3 anos.', value: 2, class: 'pl' },
                    { resposta: 'Acima de 3 anos.', value: 3, class: 'sr' }
                ]
            }
        ];
    }
    TesteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (routeData) {
            var data = routeData['data'];
            if (data) {
                _this.user = data;
                console.log(_this.user);
            }
        });
    };
    TesteComponent.prototype.pontos = function () {
        var _this = this;
        this.junior = [].slice.call(document.querySelectorAll(".jr:checked"));
        this.pleno = [].slice.call(document.querySelectorAll(".pl:checked"));
        this.senior = [].slice.call(document.querySelectorAll(".sr:checked"));
        var resultado = this.junior.length + (this.pleno.length * 2) + (this.senior.length * 3);
        var req = this.http.post(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].firebase.databaseURL + "/resultado.json", {
            resultado: resultado,
            user: this.user
        })
            .subscribe(function (res) {
            console.log(res);
            if (resultado >= 0 && resultado <= 15) {
                _this.router.navigate(['/thank-you-jr']);
            }
            else if (resultado >= 16 && resultado <= 26) {
                _this.router.navigate(['/thank-you-pl']);
            }
            else {
                _this.router.navigate(['/thank-you-sr']);
            }
        }, function (err) {
            console.log("Error occured");
        });
    };
    return TesteComponent;
}());
TesteComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-teste',
        template: __webpack_require__("./src/app/views/teste/teste.component.html"),
        styles: [__webpack_require__("./src/app/views/teste/teste.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__["a" /* AngularFirestore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__["a" /* AngularFirestore */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _g || Object])
], TesteComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=teste.component.js.map

/***/ }),

/***/ "./src/app/views/thankyou/thankyou-jr/thankyou-jr.component.css":
/***/ (function(module, exports) {

module.exports = ".espacamento {\r\n  margin-top: 40px;\r\n}\r\n\r\n.texto-header {\r\n  color: #94c13d;\r\n  font-size: 30px;\r\n  margin-top: 60px;\r\n  font-weight: bold;\r\n}\r\n\r\n.img {\r\n  max-height: 250px;\r\n  text-align: center;\r\n  margin: 0 auto;\r\n}\r\n\r\n.texto {\r\n  font-size: 30px;\r\n}"

/***/ }),

/***/ "./src/app/views/thankyou/thankyou-jr/thankyou-jr.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\n<div class=\"main__body cor-fundo\">\n  <div class=\"container\">\n    <div class=\"login__page espacamento\">\n      <div class=\"card col-md-4\">\n        <img src=\"assets/img/Socorro.png\" alt=\"Socorro\" class=\"img-responsive img-circle img\">\n      </div>\n      <div class=\"card col-md-8\">\n        <h2 class=\"row texto-header\">Muito Bem! Aqui estão seus resultados:</h2>\n        <p class=\"row texto\">Você obteve o nível\n          <strong>Júnior</strong>\n        </p>\n        <!-- To do -->\n        <p class=\"row texto\">Texto descritivo das atribuiçoes medias do cargo</p>\n        <!-- To do -->\n      </div>\n    </div>\n    <div class=\"card col-md-12\">\n      <h2 class=\"row texto-header\">Como posso melhorar?</h2>\n      <!-- To do como posso melhorar -->\n    </div>\n  </div>\n</div>\n<app-rodape></app-rodape>"

/***/ }),

/***/ "./src/app/views/thankyou/thankyou-jr/thankyou-jr.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThankyouJrComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ThankyouJrComponent = (function () {
    function ThankyouJrComponent() {
    }
    ThankyouJrComponent.prototype.ngOnInit = function () {
    };
    return ThankyouJrComponent;
}());
ThankyouJrComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-thankyou-jr',
        template: __webpack_require__("./src/app/views/thankyou/thankyou-jr/thankyou-jr.component.html"),
        styles: [__webpack_require__("./src/app/views/thankyou/thankyou-jr/thankyou-jr.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ThankyouJrComponent);

//# sourceMappingURL=thankyou-jr.component.js.map

/***/ }),

/***/ "./src/app/views/thankyou/thankyou-pl/thankyou-pl.component.css":
/***/ (function(module, exports) {

module.exports = ".espacamento {\r\n  margin-top: 40px;\r\n}\r\n\r\n.texto-header {\r\n  color: #94c13d;\r\n  font-size: 30px;\r\n  margin-top: 60px;\r\n  font-weight: bold;\r\n}\r\n\r\n.img {\r\n  max-height: 250px;\r\n  text-align: center;\r\n  margin: 0 auto;\r\n}\r\n\r\n.texto {\r\n  font-size: 30px;\r\n}"

/***/ }),

/***/ "./src/app/views/thankyou/thankyou-pl/thankyou-pl.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\n<div class=\"main__body cor-fundo\">\n  <div class=\"container\">\n    <div class=\"login__page espacamento\">\n      <div class=\"card col-md-4\">\n        <img src=\"assets/img/Socorro.png\" alt=\"Socorro\" class=\"img-responsive img-circle img\">\n      </div>\n      <div class=\"card col-md-8\">\n        <h2 class=\"row texto-header\">Muito Bem! Aqui estão seus resultados:</h2>\n        <p class=\"row texto\">Você obteve o nível\n          <strong>Pleno</strong>\n        </p>\n        <!-- To do -->\n        <p class=\"row texto\">Texto descritivo das atribuiçoes medias do cargo</p>\n        <!-- To do -->\n      </div>\n    </div>\n    <div class=\"card col-md-12\">\n      <h2 class=\"row texto-header\">Como posso melhorar?</h2>\n      <!-- To do como posso melhorar -->\n    </div>\n  </div>\n</div>\n<app-rodape></app-rodape>"

/***/ }),

/***/ "./src/app/views/thankyou/thankyou-pl/thankyou-pl.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThankyouPlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ThankyouPlComponent = (function () {
    function ThankyouPlComponent() {
    }
    ThankyouPlComponent.prototype.ngOnInit = function () {
    };
    return ThankyouPlComponent;
}());
ThankyouPlComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-thankyou-pl',
        template: __webpack_require__("./src/app/views/thankyou/thankyou-pl/thankyou-pl.component.html"),
        styles: [__webpack_require__("./src/app/views/thankyou/thankyou-pl/thankyou-pl.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ThankyouPlComponent);

//# sourceMappingURL=thankyou-pl.component.js.map

/***/ }),

/***/ "./src/app/views/thankyou/thankyou-sr/thankyou-sr.component.css":
/***/ (function(module, exports) {

module.exports = ".espacamento {\r\n  margin-top: 40px;\r\n}\r\n\r\n.texto-header {\r\n  color: #94c13d;\r\n  font-size: 30px;\r\n  margin-top: 60px;\r\n  font-weight: bold;\r\n}\r\n\r\n.img {\r\n  max-height: 250px;\r\n  text-align: center;\r\n  margin: 0 auto;\r\n}\r\n\r\n.texto {\r\n  font-size: 30px;\r\n}"

/***/ }),

/***/ "./src/app/views/thankyou/thankyou-sr/thankyou-sr.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\n<div class=\"main__body cor-fundo\">\n  <div class=\"container\">\n    <div class=\"login__page espacamento\">\n      <div class=\"card col-md-4\">\n        <img src=\"assets/img/Socorro.png\" alt=\"Socorro\" class=\"img-responsive img-circle img\">\n      </div>\n      <div class=\"card col-md-8\">\n        <h2 class=\"row texto-header\">Muito Bem! Aqui estão seus resultados:</h2>\n        <p class=\"row texto\">Você obteve o nível\n          <strong>Sênior</strong>\n        </p>\n        <!-- To do -->\n        <p class=\"row texto\">Texto descritivo das atribuiçoes medias do cargo</p>\n        <!-- To do -->\n      </div>\n    </div>\n    <div class=\"card col-md-12\">\n      <h2 class=\"row texto-header\">Como posso melhorar?</h2>\n      <!-- To do como posso melhorar -->\n    </div>\n  </div>\n</div>\n<app-rodape></app-rodape>"

/***/ }),

/***/ "./src/app/views/thankyou/thankyou-sr/thankyou-sr.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThankyouSrComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ThankyouSrComponent = (function () {
    function ThankyouSrComponent() {
    }
    ThankyouSrComponent.prototype.ngOnInit = function () {
    };
    return ThankyouSrComponent;
}());
ThankyouSrComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-thankyou-sr',
        template: __webpack_require__("./src/app/views/thankyou/thankyou-sr/thankyou-sr.component.html"),
        styles: [__webpack_require__("./src/app/views/thankyou/thankyou-sr/thankyou-sr.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ThankyouSrComponent);

//# sourceMappingURL=thankyou-sr.component.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyC9kHRqa_vFseX0_J8_GYQSi92-5OoSMrg",
        authDomain: "assigment-3-45055.firebaseapp.com",
        databaseURL: "https://assigment-3-45055.firebaseio.com",
        projectId: "assigment-3-45055",
        storageBucket: "assigment-3-45055.appspot.com",
        messagingSenderId: "518545836753"
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map