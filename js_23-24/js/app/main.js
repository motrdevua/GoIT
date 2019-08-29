    requirejs.config({
      paths: {
        'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery'
      },
      shim: {
        'jquery': {
          exports: 'jquery'
        }
      }
    });
    require(
      [
        'jquery',
        'tmpl',
        'model',
        'view',
        'controller'
      ],
      function($, tmpl, model, view, controller) {
        var firstToDoList = ['make hw23', 'make hw24', 'make exam'];
        var model = new model.model(firstToDoList);
        var view = new view.view(model);
        var controller = new controller.controller(model, view);
      }
    );
