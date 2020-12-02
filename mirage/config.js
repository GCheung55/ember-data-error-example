export default function() {

  this.get('/users/:id', () => {
    return {
      "jsonapi": {
          "version": "1.0"
        },
        "links": {
          "self": "http://localhost:3000/users/5"
        },
        "data": {
          "type": "user",
          "id": "5",
          "attributes": {
            "created-at": "2016-05-06T13:34:19.000Z",
            "updated-at": "2017-06-29T11:43:35.000Z",
            "username": "test",
            "password": "$2a$10$KQBMwuJacBJ0g1yPmLC8S.Jk/QZci/NCPfeinMyMhtU29rnQ9cMPC"
          },
          "relationships": {
            "role": {
              "links": {
                "related": {
                  "href": "http://localhost:3000/users/5/role",
                  "meta": {
                    "count": 1
                  }
                }
              },
              "data": {
                "type": "role",
                "id": "2"
              }
            },
            "contact": {
              "links": {
                "related": {
                  "href": "http://localhost:3000/users/5/contact",
                  "meta": {
                    "count": 1
                  }
                }
              },
              "data": {
                "type": "contact",
                "id": "18"
              }
            }
          },
          "links": {
            "self": "http://localhost:3000/users/5"
          }
        },
        "included": [
          {
            "type": "role",
            "id": "2",
            "attributes": {
              "created-at": "2020-11-18T00:47:29.268Z",
              "updated-at": "2020-11-18T00:47:29.268Z",
              "name": "admin",
              "privileges": [
                "viewCompany",
                "createCompany",
                "modifyCompany",
                "deleteCompany",
                "viewContact",
                "createContact",
                "modifyContact",
                "deleteContact",
                "viewCostCode",
                "createCostCode",
                "modifyCostCode",
                "deleteCostCode",
                "viewDocumentTransmittal",
                "createDocumentTransmittal",
                "modifyDocumentTransmittal",
                "deleteDocumentTransmittal",
                "viewDrawing",
                "createDrawing",
                "modifyDrawing",
                "deleteDrawing",
                "viewFieldInspection",
                "createFieldInspection",
                "modifyFieldInspection",
                "deleteFieldInspection",
                "viewMeeting",
                "createMeeting",
                "modifyMeeting",
                "deleteMeeting",
                "viewMockup",
                "createMockup",
                "modifyMockup",
                "deleteMockup",
                "viewPcn",
                "createPcn",
                "modifyPcn",
                "deletePcn",
                "viewProgressDraw",
                "createProgressDraw",
                "modifyProgressDraw",
                "viewAllProject",
                "createProject",
                "modifyProject",
                "deleteProject",
                "viewPojectStaff",
                "modifyPojectStaff",
                "viewReportCard",
                "createReportCard",
                "modifyReportCard",
                "deleteReportCard",
                "viewRFI",
                "createRFI",
                "modifyRFI",
                "deleteRFI",
                "sendRFI",
                "viewSI",
                "createSI",
                "modifySI",
                "deleteSI",
                "sendSI",
                "viewSubmittal",
                "createSubmittal",
                "modifySubmittal",
                "deleteSubmittal",
                "sendSubmittal",
                "viewSubtrade",
                "createSubtrade",
                "modifySubtrade",
                "deleteSubtrade",
                "viewUser",
                "createUser",
                "modifyUser",
                "deleteUser",
                "sendProposedChangeNotice",
                "sendSubcontractChangeOrder",
                "sendChangeOrderCostCode",
                "sendChangeNoticeSummary",
                "sendSCOSummary",
                "sendRFILog",
                "sendMockupLog",
                "sendSILog",
                "sendSubmittalLog",
                "sendInvoiceRevisionLetter",
                "sendDrawingTransmittal",
                "sendCloseoutRequirements",
                "sendCvi",
                "sendCCPRH",
                "sendCVFRH",
                "sendCVPRH",
                "sendManagementContract",
                "sendCMLetterOfIntent",
                "sendCMCoverLetter",
                "sendLetterOfIntent",
                "sendGCCoverLetter",
                "sendGCTradeAmended",
                "sendShortFormContract",
                "sendShortFormCMTrade",
                "sendPhoneList",
                "sendTransmittal",
                "sendDocumentTransmittal",
                "sendSubcontract",
                "sendScoSummaryMultiple",
                "sendQuotationForChangeOrder",
                "sendRequestForChangeOrder"
              ]
            },
            "relationships": {
              "users": {
                "links": {
                  "related": {
                    "href": "http://localhost:3000/roles/2/users",
                    "meta": {
                      "count": 15
                    }
                  }
                }
              }
            },
            "links": {
              "self": "http://localhost:3000/roles/2"
            }
          },
          {
            "type": "contact",
            "id": "18",
            "attributes": {
              "created-at": "2019-11-08T19:14:00.000Z",
              "updated-at": "2019-11-08T19:14:00.000Z",
              "first-name": "Cody",
              "last-name": "McCulloch",
              "honorific": null,
              "title": "Deputy Director",
              "email": "cody@expanda.co",
              "phone": "7789903003",
              "cell": "(778) 908-4540",
              "fax": "",
              "deleted": false
            },
            "relationships": {
              "project-staff": {
                "links": {
                  "related": {
                    "href": "http://localhost:3000/contacts/18/projectStaff",
                    "meta": {
                      "count": 3
                    }
                  }
                }
              }
            },
            "links": {
              "self": "http://localhost:3000/contacts/18"
            }
          }
        ]
    };
  });

  this.get('/projects/:id', () => {
    return {
      "jsonapi": {
        "version": "1.0"
      },
      "links": {
        "self": "http://localhost:3000/projects/51"
      },
      "data": {
        "type": "project",
        "id": "51",
        "attributes": {
          "created-at": "2014-04-04T02:45:52.000Z",
          "updated-at": "2018-12-04T22:11:56.000Z",
          "name": "Demo 2"
        },
        "relationships": {
          "staff": {
            "links": {
              "related": {
                "href": "http://localhost:3000/projects/51/staff",
                "meta": {
                  "count": 5
                }
              }
            },
            "data": [{
                "type": "project-staff",
                "id": "39"
              }
            ]
          }
        },
        "links": {
          "self": "http://localhost:3000/projects/51"
        }
      },
      "included": [{
          "type": "project-staff",
          "id": "39",
          "attributes": {
            "created-at": "2016-05-06T14:13:20.000Z",
            "updated-at": "2016-05-06T14:13:20.000Z",
            "role": "Project Coordinator",
            "project-manager": false
          },
          "relationships": {
            "contact": {
              "links": {
                "related": {
                  "href": "http://localhost:3000/projectStaffs/39/contact",
                  "meta": {
                    "count": 1
                  }
                }
              },
              "data": {
                "type": "contact",
                "id": "20"
              }
            },
            "project": {
              "links": {
                "related": {
                  "href": "http://localhost:3000/projectStaffs/39/project",
                  "meta": {
                    "count": 0
                  }
                }
              },
              "data": {
                "type": "project",
                "id": "51"
              }
            }
          },
          "links": {
            "self": "http://localhost:3000/projectStaffs/39"
          }
        }
      ]
    }
  });

  this.get('projectStaffs/:id/contact', () => {
    return {
      "jsonapi": {
        "version": "1.0"
      },
      "meta": {
        "total": 1
      },
      "links": {
        "self": "http://localhost:3000/contacts"
      },
      "data": [{
        "type": "contact",
        "id": "20",
        "attributes": {
          "created-at": "2019-11-08T19:13:59.000Z",
          "updated-at": "2019-11-08T19:13:59.000Z",
          "first-name": "Shahin",
          "last-name": "Nikvand",
          "honorific": null,
          "title": null,
          "email": "email",
          "phone": null,
          "cell": null,
          "fax": null,
          "deleted": false,
          "links": {
            "project-staff": "http://localhost:3000/contacts/20/projectStaff",
          }
        },
        "relationships": {
          "project-staff": {
            "links": {
              "related": {
                "href": "http://localhost:3000/contacts/20/projectStaff",
                "meta": {
                  "count": 2
                }
              }
            }
          }
        },
        "links": {
          "self": "http://localhost:3000/contacts/20"
        }
      }]
    }
  });

  // These comments are here to help you get started. Feel free to delete them.

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
