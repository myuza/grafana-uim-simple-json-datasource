'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GenericDatasourceQueryCtrl = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sdk = require('app/plugins/sdk');

require('./css/query-editor.css!');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GenericDatasourceQueryCtrl = exports.GenericDatasourceQueryCtrl = function (_QueryCtrl) {
  _inherits(GenericDatasourceQueryCtrl, _QueryCtrl);

  function GenericDatasourceQueryCtrl($scope, $injector) {
    _classCallCheck(this, GenericDatasourceQueryCtrl);

    var _this = _possibleConstructorReturn(this, (GenericDatasourceQueryCtrl.__proto__ || Object.getPrototypeOf(GenericDatasourceQueryCtrl)).call(this, $scope, $injector));

    // _this.scope = $scope;
    // _this.target.target = _this.target.target || 'select metric';
    // _this.target.type = _this.target.type || 'timeserie';
    // return _this;
    _this.scope = $scope;
    _this.target.metric = _this.target.metric || 'select metric';
    _this.target.apps = _this.target.apps || 'select apps';
    _this.target.source = _this.target.source || 'select source';
    _this.target.target = _this.target.target || 'select target';
    _this.target.legend = _this.target.legend || 'select legend';
    //_this.target.result = 'halo';
    _this.target.type = _this.target.type || 'timeserie';
    return _this;
  }

  _createClass(GenericDatasourceQueryCtrl, [{
    key: 'getOptions',
    value: function getOptions(query) {
      // return this.datasource.metricFindQuery(query || '');
      query = query+'|'+this.target.apps+'|'+this.target.source+'|'+this.target.target;
      return this.datasource.metricFindMetric(query || '');
    }
  }, {
    key: 'toggleEditorMode',
    value: function toggleEditorMode() {
      this.target.rawQuery = !this.target.rawQuery;
    }
  }, {
    key: 'getOptionsApps',
    value: function getOptions(query) {
      query = this.target.metric+'|'+query+'|'+this.target.source+'|'+this.target.target+"|"+this.target.legend;
      return this.datasource.metricFindApps(query || '');
    }
  }, {
    key: 'getOptionsSource',
    value: function getOptions(query) {
      query = this.target.metric+'|'+this.target.apps+'|'+query+'|'+this.target.target+"|"+this.target.legend;
      return this.datasource.metricFindSource(query || '');
    }
  }, {
    key: 'getOptionsTarget',
    value: function getOptions(query) {
      query = this.target.metric+'|'+this.target.apps+'|'+this.target.source+'|'+query+"|"+this.target.legend;
      return this.datasource.metricFindTarget(query || '');
    }
  }, {
    key: 'getOptionsLegend',
    value: function getOptions(query) {
      query = this.target.metric+'|'+this.target.apps+'|'+this.target.source+'|'+this.target.target+"|"+query;
      return this.datasource.metricFindLegend(query || '');
    }
  }, {
    key: 'onChangeInternal',
    value: function onChangeInternal() {
      this.panelCtrl.refresh(); // Asks the panel to refresh data.
    }
  }]);

  return GenericDatasourceQueryCtrl;
}(_sdk.QueryCtrl);

GenericDatasourceQueryCtrl.templateUrl = 'partials/query.editor.html';
//# sourceMappingURL=query_ctrl.js.map
