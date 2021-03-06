System.register(['angular2/core', 'angular2/router', './../../service/todo.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, todo_service_1;
    var ViewTodoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (todo_service_1_1) {
                todo_service_1 = todo_service_1_1;
            }],
        execute: function() {
            ViewTodoComponent = (function () {
                function ViewTodoComponent(rourter, rParams, service) {
                    this.rourter = rourter;
                    this.rParams = rParams;
                    this.service = service;
                    var id = rParams.params['id'];
                    this.item = service.getItem(+id);
                }
                ViewTodoComponent.prototype.edit = function () {
                    this.rourter.navigate(['Edit', { id: this.item.id }]);
                };
                ViewTodoComponent = __decorate([
                    core_1.Component({
                        selector: 'view-todo',
                        template: "\n    <button class='button' type='submit' (click)='edit()'>Edit</button>\n    <table class='prop-table'>\n        <tr>\n            <td>Id</td>\n            <td>{{item?.id}}</td>\n        </tr>\n        <tr>\n            <td>Title</td>\n            <td>{{item?.title}}</td>\n        </tr>\n        <tr>\n            <td>Description</td>\n            <td>{{item?.description}}</td>\n        </tr>\n    </table>\n    "
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, todo_service_1.TodoService])
                ], ViewTodoComponent);
                return ViewTodoComponent;
            }());
            exports_1("ViewTodoComponent", ViewTodoComponent);
        }
    }
});
//# sourceMappingURL=todo.view.component.js.map