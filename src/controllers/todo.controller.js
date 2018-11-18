"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var repository_1 = require("@loopback/repository");
var rest_1 = require("@loopback/rest");
var models_1 = require("../models");
var repositories_1 = require("../repositories");
var TodoController = /** @class */ (function () {
    function TodoController(todoRepository) {
        this.todoRepository = todoRepository;
    }
    TodoController.prototype.create = function (todo) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.todoRepository.create(todo)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TodoController.prototype.find = function (filter) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.todoRepository.find(filter)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TodoController.prototype.updateAll = function (todo, where) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.todoRepository.updateAll(todo, where)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TodoController.prototype.findById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.todoRepository.findById(id)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TodoController.prototype.updateById = function (id, todo) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.todoRepository.updateById(id, todo)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TodoController.prototype.deleteById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.todoRepository.deleteById(id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TodoController.prototype.count = function (where) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.todoRepository.count(where)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    __decorate([
        rest_1.post('/todos', {
            responses: {
                '200': {
                    description: 'Todo model instance',
                    content: { 'application/json': { schema: { 'x-ts-type': models_1.Todo } } }
                }
            }
        }),
        __param(0, rest_1.requestBody())
    ], TodoController.prototype, "create");
    __decorate([
        rest_1.get('/todos', {
            responses: {
                '200': {
                    description: 'Array of Todo model instances',
                    content: {
                        'application/json': {
                            schema: { type: 'array', items: { 'x-ts-type': models_1.Todo } }
                        }
                    }
                }
            }
        }),
        __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Todo)))
    ], TodoController.prototype, "find");
    __decorate([
        rest_1.patch('/todos', {
            responses: {
                '200': {
                    description: 'Todo PATCH success count',
                    content: { 'application/json': { schema: repository_1.CountSchema } }
                }
            }
        }),
        __param(0, rest_1.requestBody()),
        __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Todo)))
    ], TodoController.prototype, "updateAll");
    __decorate([
        rest_1.get('/todos/{id}', {
            responses: {
                '200': {
                    description: 'Todo model instance',
                    content: { 'application/json': { schema: { 'x-ts-type': models_1.Todo } } }
                }
            }
        }),
        __param(0, rest_1.param.path.number('id'))
    ], TodoController.prototype, "findById");
    __decorate([
        rest_1.patch('/todos/{id}', {
            responses: {
                '204': {
                    description: 'Todo PATCH success'
                }
            }
        }),
        __param(0, rest_1.param.path.number('id')),
        __param(1, rest_1.requestBody())
    ], TodoController.prototype, "updateById");
    __decorate([
        rest_1.del('/todos/{id}', {
            responses: {
                '204': {
                    description: 'Todo DELETE success'
                }
            }
        }),
        __param(0, rest_1.param.path.number('id'))
    ], TodoController.prototype, "deleteById");
    __decorate([
        rest_1.get('/todos/count', {
            responses: {
                '200': {
                    description: 'Todo model count',
                    content: { 'application/json': { schema: repository_1.CountSchema } }
                }
            }
        }),
        __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Todo)))
    ], TodoController.prototype, "count");
    TodoController = __decorate([
        __param(0, repository_1.repository(repositories_1.TodoRepository))
    ], TodoController);
    return TodoController;
}());
exports.TodoController = TodoController;
