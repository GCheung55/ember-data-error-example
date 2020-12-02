'use strict';



;define("demo-app/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("demo-app/app", ["exports", "ember-resolver", "ember-load-initializers", "demo-app/config/environment"], function (_exports, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class App extends Ember.Application {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(this, "Resolver", _emberResolver.default);
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("demo-app/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
});
;define("demo-app/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("demo-app/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
});
;define("demo-app/helpers/app-version", ["exports", "demo-app/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("demo-app/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("demo-app/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("demo-app/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "demo-app/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("demo-app/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("demo-app/initializers/ember-cli-mirage", ["exports", "demo-app/config/environment", "demo-app/mirage/config", "ember-cli-mirage/get-rfc232-test-context", "ember-cli-mirage/start-mirage"], function (_exports, _environment, _config, _getRfc232TestContext, _startMirage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.startMirage = startMirage;
  _exports.default = void 0;
  //
  // This initializer does two things:
  //
  // 1. Pulls the mirage config objects from the application's config and
  //    registers them in the container so `ember-cli-mirage/start-mirage` can
  //    find them (since it doesn't have access to the app's namespace).
  // 2. Provides legacy support for auto-starting mirage in pre-rfc268 acceptance
  //    tests.
  //
  var _default = {
    name: 'ember-cli-mirage',

    initialize(application) {
      if (_config.default) {
        application.register('mirage:base-config', _config.default, {
          instantiate: false
        });
      }

      if (_config.testConfig) {
        application.register('mirage:test-config', _config.testConfig, {
          instantiate: false
        });
      }

      _environment.default['ember-cli-mirage'] = _environment.default['ember-cli-mirage'] || {};

      if (_shouldUseMirage(_environment.default.environment, _environment.default['ember-cli-mirage'])) {
        startMirage(_environment.default);
      }
    }

  };
  _exports.default = _default;

  function startMirage(env = _environment.default) {
    return (0, _startMirage.default)(null, {
      env,
      baseConfig: _config.default,
      testConfig: _config.testConfig
    });
  }

  function _shouldUseMirage(env, addonConfig) {
    if (typeof FastBoot !== 'undefined') {
      return false;
    }

    if ((0, _getRfc232TestContext.default)()) {
      return false;
    }

    let userDeclaredEnabled = typeof addonConfig.enabled !== 'undefined';

    let defaultEnabled = _defaultEnabled(env, addonConfig);

    return userDeclaredEnabled ? addonConfig.enabled : defaultEnabled;
  }
  /*
    Returns a boolean specifying the default behavior for whether
    to initialize Mirage.
  */


  function _defaultEnabled(env, addonConfig) {
    let usingInDev = env === 'development' && !addonConfig.usingProxy;
    let usingInTest = env === 'test';
    return usingInDev || usingInTest;
  }
});
;define("demo-app/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
});
;define("demo-app/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("demo-app/initializers/export-application-global", ["exports", "demo-app/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("demo-app/instance-initializers/ember-cli-mirage-autostart", ["exports", "ember-cli-mirage/instance-initializers/ember-cli-mirage-autostart"], function (_exports, _emberCliMirageAutostart) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberCliMirageAutostart.default;
    }
  });
});
;define("demo-app/instance-initializers/ember-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /* exists only for things that historically used "after" or "before" */
  var _default = {
    name: 'ember-data',

    initialize() {}

  };
  _exports.default = _default;
});
;define("demo-app/mirage/config", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;

  function _default() {
    this.get("/users/:id", () => {
      return {
        jsonapi: {
          version: "1.0"
        },
        links: {
          self: "/users/5"
        },
        data: {
          type: "user",
          id: "5",
          attributes: {
            "created-at": "2016-05-06T13:34:19.000Z",
            "updated-at": "2017-06-29T11:43:35.000Z",
            username: "test",
            password: "$2a$10$KQBMwuJacBJ0g1yPmLC8S.Jk/QZci/NCPfeinMyMhtU29rnQ9cMPC"
          },
          relationships: {
            role: {
              links: {
                related: {
                  href: "/users/5/role",
                  meta: {
                    count: 1
                  }
                }
              },
              data: {
                type: "role",
                id: "2"
              }
            },
            contact: {
              links: {
                related: {
                  href: "/users/5/contact",
                  meta: {
                    count: 1
                  }
                }
              },
              data: {
                type: "contact",
                id: "18"
              }
            }
          },
          links: {
            self: "/users/5"
          }
        },
        included: [{
          type: "role",
          id: "2",
          attributes: {
            "created-at": "2020-11-18T00:47:29.268Z",
            "updated-at": "2020-11-18T00:47:29.268Z",
            name: "admin",
            privileges: ["viewCompany", "createCompany", "modifyCompany", "deleteCompany", "viewContact", "createContact", "modifyContact", "deleteContact", "viewCostCode", "createCostCode", "modifyCostCode", "deleteCostCode", "viewDocumentTransmittal", "createDocumentTransmittal", "modifyDocumentTransmittal", "deleteDocumentTransmittal", "viewDrawing", "createDrawing", "modifyDrawing", "deleteDrawing", "viewFieldInspection", "createFieldInspection", "modifyFieldInspection", "deleteFieldInspection", "viewMeeting", "createMeeting", "modifyMeeting", "deleteMeeting", "viewMockup", "createMockup", "modifyMockup", "deleteMockup", "viewPcn", "createPcn", "modifyPcn", "deletePcn", "viewProgressDraw", "createProgressDraw", "modifyProgressDraw", "viewAllProject", "createProject", "modifyProject", "deleteProject", "viewPojectStaff", "modifyPojectStaff", "viewReportCard", "createReportCard", "modifyReportCard", "deleteReportCard", "viewRFI", "createRFI", "modifyRFI", "deleteRFI", "sendRFI", "viewSI", "createSI", "modifySI", "deleteSI", "sendSI", "viewSubmittal", "createSubmittal", "modifySubmittal", "deleteSubmittal", "sendSubmittal", "viewSubtrade", "createSubtrade", "modifySubtrade", "deleteSubtrade", "viewUser", "createUser", "modifyUser", "deleteUser", "sendProposedChangeNotice", "sendSubcontractChangeOrder", "sendChangeOrderCostCode", "sendChangeNoticeSummary", "sendSCOSummary", "sendRFILog", "sendMockupLog", "sendSILog", "sendSubmittalLog", "sendInvoiceRevisionLetter", "sendDrawingTransmittal", "sendCloseoutRequirements", "sendCvi", "sendCCPRH", "sendCVFRH", "sendCVPRH", "sendManagementContract", "sendCMLetterOfIntent", "sendCMCoverLetter", "sendLetterOfIntent", "sendGCCoverLetter", "sendGCTradeAmended", "sendShortFormContract", "sendShortFormCMTrade", "sendPhoneList", "sendTransmittal", "sendDocumentTransmittal", "sendSubcontract", "sendScoSummaryMultiple", "sendQuotationForChangeOrder", "sendRequestForChangeOrder"]
          },
          relationships: {
            users: {
              links: {
                related: {
                  href: "/roles/2/users",
                  meta: {
                    count: 15
                  }
                }
              }
            }
          },
          links: {
            self: "/roles/2"
          }
        }, {
          type: "contact",
          id: "18",
          attributes: {
            "created-at": "2019-11-08T19:14:00.000Z",
            "updated-at": "2019-11-08T19:14:00.000Z",
            "first-name": "Cody",
            "last-name": "McCulloch",
            honorific: null,
            title: "Deputy Director",
            email: "cody@expanda.co",
            phone: "7789903003",
            cell: "(778) 908-4540",
            fax: "",
            deleted: false
          },
          relationships: {
            "project-staff": {
              links: {
                related: {
                  href: "/contacts/18/projectStaff",
                  meta: {
                    count: 3
                  }
                }
              }
            }
          },
          links: {
            self: "/contacts/18"
          }
        }]
      };
    });
    this.get("/projects/:id", () => {
      return {
        jsonapi: {
          version: "1.0"
        },
        links: {
          self: "/projects/51"
        },
        data: {
          type: "project",
          id: "51",
          attributes: {
            "created-at": "2014-04-04T02:45:52.000Z",
            "updated-at": "2018-12-04T22:11:56.000Z",
            name: "Demo 2"
          },
          relationships: {
            staff: {
              links: {
                related: {
                  href: "/projects/51/staff",
                  meta: {
                    count: 5
                  }
                }
              },
              data: [{
                type: "project-staff",
                id: "39"
              }]
            }
          },
          links: {
            self: "/projects/51"
          }
        },
        included: [{
          type: "project-staff",
          id: "39",
          attributes: {
            "created-at": "2016-05-06T14:13:20.000Z",
            "updated-at": "2016-05-06T14:13:20.000Z",
            role: "Project Coordinator",
            "project-manager": false
          },
          relationships: {
            contact: {
              links: {
                related: {
                  href: "/projectStaffs/39/contact",
                  meta: {
                    count: 1
                  }
                }
              },
              data: {
                type: "contact",
                id: "20"
              }
            },
            project: {
              links: {
                related: {
                  href: "/projectStaffs/39/project",
                  meta: {
                    count: 0
                  }
                }
              },
              data: {
                type: "project",
                id: "51"
              }
            }
          },
          links: {
            self: "/projectStaffs/39"
          }
        }]
      };
    });
    this.get("projectStaffs/:id/contact", () => {
      return {
        jsonapi: {
          version: "1.0"
        },
        meta: {
          total: 1
        },
        links: {
          self: "/contacts"
        },
        data: [{
          type: "contact",
          id: "20",
          attributes: {
            "created-at": "2019-11-08T19:13:59.000Z",
            "updated-at": "2019-11-08T19:13:59.000Z",
            "first-name": "Shahin",
            "last-name": "Nikvand",
            honorific: null,
            title: null,
            email: "email",
            phone: null,
            cell: null,
            fax: null,
            deleted: false,
            links: {
              "project-staff": "/contacts/20/projectStaff"
            }
          },
          relationships: {
            "project-staff": {
              links: {
                related: {
                  href: "/contacts/20/projectStaff",
                  meta: {
                    count: 2
                  }
                }
              }
            }
          },
          links: {
            self: "/contacts/20"
          }
        }]
      };
    }); // These comments are here to help you get started. Feel free to delete them.

    /*
      Config (with defaults).
       Note: these only affect routes defined *after* them!
    */
    // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
    // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
    // this.timing = 400;      // delay for each request, automatically set to 0 during testing

    /*
      Shorthand cheatsheet:
       this.get('/posts');
      this.post('/posts');
      this.get('/posts/:id');
      this.put('/posts/:id'); // or this.patch
      this.del('/posts/:id');
       https://www.ember-cli-mirage.com/docs/route-handlers/shorthands
    */
  }
});
;define("demo-app/mirage/scenarios/default", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;

  function _default()
  /* server */
  {
    /*
      Seed your development database using your factories.
      This data will not be loaded in your tests.
    */
    // server.createList('post', 10);
  }
});
;define("demo-app/mirage/serializers/application", ["exports", "ember-cli-mirage"], function (_exports, _emberCliMirage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberCliMirage.JSONAPISerializer.extend({});

  _exports.default = _default;
});
;define("demo-app/models/contact", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let ContactModel = (_dec = (0, _model.attr)('string'), _dec2 = (0, _model.attr)('string'), _dec3 = (0, _model.attr)('string'), _dec4 = (0, _model.attr)('string'), _dec5 = (0, _model.attr)('string'), _dec6 = (0, _model.attr)('string'), _dec7 = (0, _model.attr)('string'), _dec8 = (0, _model.attr)('string'), _dec9 = (0, _model.hasMany)('project-staff', {
    inverse: 'contact'
  }), (_class = (_temp = class ContactModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "firstName", _descriptor, this);

      _initializerDefineProperty(this, "lastName", _descriptor2, this);

      _initializerDefineProperty(this, "title", _descriptor3, this);

      _initializerDefineProperty(this, "email", _descriptor4, this);

      _initializerDefineProperty(this, "phone", _descriptor5, this);

      _initializerDefineProperty(this, "cell", _descriptor6, this);

      _initializerDefineProperty(this, "fax", _descriptor7, this);

      _initializerDefineProperty(this, "honorific", _descriptor8, this);

      _initializerDefineProperty(this, "projectStaff", _descriptor9, this);
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "firstName", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "lastName", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "title", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "email", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "phone", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "cell", [_dec6], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "fax", [_dec7], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "honorific", [_dec8], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "projectStaff", [_dec9], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = ContactModel;
});
;define("demo-app/models/project-staff", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let ProjectStaffModel = (_dec = (0, _model.attr)('string'), _dec2 = (0, _model.attr)('boolean'), _dec3 = (0, _model.belongsTo)('contact', {
    inverse: 'projectStaff'
  }), _dec4 = (0, _model.belongsTo)('project', {
    inverse: 'staff'
  }), _dec5 = Ember.computed.alias('contact.name'), _dec6 = Ember.computed.alias('contact.nameOnly'), (_class = (_temp = class ProjectStaffModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "role", _descriptor, this);

      _initializerDefineProperty(this, "projectManager", _descriptor2, this);

      _initializerDefineProperty(this, "contact", _descriptor3, this);

      _initializerDefineProperty(this, "project", _descriptor4, this);

      _initializerDefineProperty(this, "name", _descriptor5, this);

      _initializerDefineProperty(this, "nameOnly", _descriptor6, this);
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "role", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "projectManager", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "contact", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "project", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "name", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "nameOnly", [_dec6], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = ProjectStaffModel;
});
;define("demo-app/models/project", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class, _descriptor, _descriptor2, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let ProjectStaffModel = (_dec = (0, _model.attr)('string'), _dec2 = (0, _model.hasMany)('project-staff', {
    inverse: 'project'
  }), (_class = (_temp = class ProjectStaffModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "name", _descriptor, this);

      _initializerDefineProperty(this, "staff", _descriptor2, this);
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "name", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "staff", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = ProjectStaffModel;
});
;define("demo-app/models/role", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class, _descriptor, _descriptor2, _descriptor3, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let Role = (_dec = (0, _model.attr)('string'), _dec2 = (0, _model.hasMany)('user'), (_class = (_temp = class Role extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "name", _descriptor, this);

      _initializerDefineProperty(this, "privileges", _descriptor2, this);

      _initializerDefineProperty(this, "users", _descriptor3, this);
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "name", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "privileges", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "users", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = Role;
});
;define("demo-app/models/user", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let UserModel = (_dec = (0, _model.attr)('string'), _dec2 = (0, _model.attr)('string'), _dec3 = (0, _model.belongsTo)('role', {
    inverse: 'users'
  }), _dec4 = (0, _model.hasMany)('report-card'), _dec5 = (0, _model.belongsTo)('contact', {
    inverse: null
  }), _dec6 = (0, _model.hasMany)('project', {
    inverse: 'userFavourites'
  }), _dec7 = Ember.computed.readOnly('contact.nameOnly'), _dec8 = Ember.computed.readOnly('role.privileges'), (_class = (_temp = class UserModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "username", _descriptor, this);

      _initializerDefineProperty(this, "password", _descriptor2, this);

      _initializerDefineProperty(this, "role", _descriptor3, this);

      _initializerDefineProperty(this, "reportCards", _descriptor4, this);

      _initializerDefineProperty(this, "contact", _descriptor5, this);

      _initializerDefineProperty(this, "favourites", _descriptor6, this);

      _initializerDefineProperty(this, "name", _descriptor7, this);

      _initializerDefineProperty(this, "privileges", _descriptor8, this);
    }

    hasPrivilege(privilege) {
      const privileges = this.privileges;
      return privileges && privileges.indexOf(privilege) !== -1;
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "username", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "password", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "role", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "reportCards", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "contact", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "favourites", [_dec6], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "name", [_dec7], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "privileges", [_dec8], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = UserModel;
});
;define("demo-app/router", ["exports", "demo-app/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Router extends Ember.Router {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "location", _environment.default.locationType);

      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(function () {});
});
;define("demo-app/routes/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let ApplicationRoute = (_dec = Ember.inject.service, (_class = (_temp = class ApplicationRoute extends Ember.Route {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "store", _descriptor, this);
    }

    async model() {
      const user = await this.store.findRecord('user', 5);
      const project = await this.store.findRecord('project', 51);
      project.staff.forEach(async staff => {
        await staff.contact;
      });
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = ApplicationRoute;
});
;define("demo-app/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
});
;define("demo-app/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("demo-app/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
});
;define("demo-app/serializers/application", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class ApplicationSerializer extends _jsonApi.default {}

  _exports.default = ApplicationSerializer;
});
;define("demo-app/serializers/company", ["exports", "demo-app/serializers/application"], function (_exports, _application) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class CompanySerializer extends _application.default {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "attrs", {
        contacts: {
          serialize: 'ids',
          deserialize: 'ids'
        },
        costCodes: {
          serialize: 'ids',
          deserialize: 'ids'
        }
      });
    }

  }

  _exports.default = CompanySerializer;
});
;define("demo-app/serializers/meeting", ["exports", "demo-app/serializers/application"], function (_exports, _application) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class MeetingSerializer extends _application.default {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "attrs", {
        absentees: {
          serialize: 'ids',
          deserialize: 'ids'
        },
        attendees: {
          serialize: 'ids',
          deserialize: 'ids'
        },
        oldBusiness: {
          serialize: false,
          deserialize: 'ids'
        },
        newBusiness: {
          serialize: false,
          deserialize: 'ids'
        }
      });
    }

  }

  _exports.default = MeetingSerializer;
});
;define("demo-app/serializers/message", ["exports", "demo-app/serializers/application"], function (_exports, _application) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class MessageSerializer extends _application.default {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "attrs", {
        contacts: {
          serialize: 'records',
          deserialize: 'ids'
        },
        loaMessages: {
          serialize: 'records',
          deserialize: 'ids'
        },
        contractMessages: {
          serialize: 'records',
          deserialize: 'ids'
        }
      });
    }

  }

  _exports.default = MessageSerializer;
});
;define("demo-app/serializers/pcn", ["exports", "demo-app/serializers/application"], function (_exports, _application) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class PcnSerializer extends _application.default {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "attrs", {
        labelValues: {
          embedded: 'always'
        },
        items: {
          serialize: 'records',
          deserialize: 'ids'
        }
      });
    }

    pushPayload(store, payload) {
      if (payload.pcns) {
        payload.pcns.forEach(pcn => {
          if (pcn.items && typeof pcn.items[0] === 'object') {
            payload.pcnItems = payload.pcnItems || [];
            pcn.items.forEach((item, idx) => {
              payload.pcnItems.push(item);
              pcn.items[idx] = item.id;
            });
          }
        });
      }

      return super.pushPayload(...arguments);
    }

    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
      if (payload.pcns) {
        payload.pcns.forEach(pcn => {
          pcn.labelValues.forEach(label => {
            label.id = label.label + '-' + pcn.id;
          });
        });
      } else if (payload.pcn) {
        payload.pcn.labelValues.forEach(label => {
          label.id = label.label + '-' + payload.pcn.id;
        });
      }

      return super.normalizeResponse(...arguments);
    }

  }

  _exports.default = PcnSerializer;
});
;define("demo-app/serializers/progress-draw", ["exports", "demo-app/serializers/application"], function (_exports, _application) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class ProgressDrawSerializer extends _application.default {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "attrs", {
        items: {
          serialize: 'records',
          deserialize: 'ids'
        }
      });
    }

  }

  _exports.default = ProgressDrawSerializer;
});
;define("demo-app/serializers/project", ["exports", "demo-app/serializers/application"], function (_exports, _application) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class ProjectSerializer extends _application.default {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "attrs", {
        staff: {
          serialize: false,
          deserialize: 'ids'
        },
        labels: {
          serialize: 'records',
          deserialize: 'ids'
        },
        messages: {
          serialize: false,
          deserialize: 'ids'
        }
      });
    }

  }

  _exports.default = ProjectSerializer;
});
;define("demo-app/serializers/rfi", ["exports", "demo-app/serializers/application"], function (_exports, _application) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class RfiSerializer extends _application.default {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "attrs", {
        contacts: {
          serialize: 'records',
          deserialize: 'ids'
        }
      });
    }

  }

  _exports.default = RfiSerializer;
});
;define("demo-app/serializers/si", ["exports", "demo-app/serializers/application"], function (_exports, _application) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class SiSerializer extends _application.default {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "attrs", {
        contacts: {
          serialize: 'records',
          deserialize: 'ids'
        }
      });
    }

  }

  _exports.default = SiSerializer;
});
;define("demo-app/serializers/submittal", ["exports", "demo-app/serializers/application"], function (_exports, _application) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class SubmittalSerializer extends _application.default {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "attrs", {
        traceRecords: {
          serialize: 'records',
          deserialize: 'ids'
        }
      });
    }

  }

  _exports.default = SubmittalSerializer;
});
;define("demo-app/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
});
;define("demo-app/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "njurP8lm",
    "block": "{\"symbols\":[],\"statements\":[[8,\"welcome-page\",[],[[],[]],null],[2,\"\\n\"],[2,\"\\n\"],[1,[30,[36,1],[[30,[36,0],null,null]],null]]],\"hasEval\":false,\"upvars\":[\"-outlet\",\"component\"]}",
    "meta": {
      "moduleName": "demo-app/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("demo-app/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
});
;define("demo-app/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
});
;define("demo-app/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
});
;define("demo-app/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
});
;

;define('demo-app/config/environment', [], function() {
  var prefix = 'demo-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("demo-app/app")["default"].create({"name":"demo-app","version":"0.0.0"});
          }
        
//# sourceMappingURL=demo-app.map
