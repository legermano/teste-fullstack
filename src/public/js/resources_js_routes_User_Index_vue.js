"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_routes_User_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/routes/User/Index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/routes/User/Index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      form: {
        id: '',
        background_color: '',
        text_color: '',
        file: ''
      }
    };
  },
  mounted: function mounted() {
    var _this = this;

    // FIX-ME
    setTimeout(function () {
      _this.form.background_color = _this.$store.state.user.background_color;
      _this.form.text_color = _this.$store.state.user.text_color;
    }, 400);
  },
  methods: {
    linkForm: function linkForm(id) {
      this.$router.push({
        name: 'user.link',
        params: {
          id: id
        }
      });
    },
    deleteLink: function deleteLink(id) {
      var _this2 = this;

      this.$swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#2fa360',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(function (result) {
        if (result.isConfirmed) {
          axios["delete"]('/api/link/' + id).then(function (_) {
            _this2.$store.commit('removeFromLinks', id);

            _this2.$toastr.s("The link was succesfull deleted!");
          })["catch"](function (error) {
            console.error(error);

            _this2.$toastr.s("An error ocurred when trying to delete the link");
          });
        }
      });
    },
    submitForm: function submitForm() {
      var _this3 = this;

      this.form.id = this.$store.state.user.id;
      axios.post('/api/user', this.form).then(function (_) {
        _this3.$store.commit('updateUserBackgroundColor', _this3.form.background_color);

        _this3.$store.commit('updateUserTextColor', _this3.form.text_color);

        _this3.$toastr.s("The user was succesfull updated!");
      })["catch"](function (error) {
        console.error(error);

        _this3.$toastr.s("An error ocurred when trying to update the user");
      }); // If the user choosed a file to upload

      if (this.form.file !== '') {
        this.imageUpload();
      }
    },
    onChange: function onChange(e) {
      this.form.file = e.target.files[0];
    },
    imageUpload: function imageUpload() {
      var _this4 = this;

      var config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      };
      var data = new FormData();
      data.append('file', this.form.file);
      data.append('user_id', this.$store.state.user.id);
      axios.post('/api/user/image', data, config).then(function (response) {
        _this4.$store.commit('updateUserImagePath', response.data); // Clear the prop to not upload without need


        _this4.form.file = '';
      })["catch"](function (error) {
        console.log(error);
      });
    },
    showAlert: function showAlert() {
      // Use sweetalert2
      this.$swal('Hello Vue world!!!');
    }
  },
  computed: {
    links: function links() {
      return this.$store.state.user.links;
    },
    image_path: function image_path() {
      if (this.$store.state.user.image_path == null || this.$store.state.user.image_path === '') {
        return null;
      }

      return '../storage/' + this.$store.state.user.image_path;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/routes/User/Index.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/routes/User/Index.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "div#main {\n  margin-top: 1em;\n  display: grid;\n}\nbutton#addLink {\n  margin-bottom: 1em;\n}\n#user-conf input {\n  margin-bottom: 1em;\n}\n.avatar {\n  width: inherit;\n  aspect-ratio: 1;\n  border-radius: 50%;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/routes/User/Index.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/routes/User/Index.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/routes/User/Index.vue?vue&type=style&index=0&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/routes/User/Index.vue":
/*!********************************************!*\
  !*** ./resources/js/routes/User/Index.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_3cf16565___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=3cf16565& */ "./resources/js/routes/User/Index.vue?vue&type=template&id=3cf16565&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/routes/User/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _Index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/routes/User/Index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_3cf16565___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_3cf16565___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/routes/User/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/routes/User/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/routes/User/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/routes/User/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/routes/User/Index.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************!*\
  !*** ./resources/js/routes/User/Index.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/routes/User/Index.vue?vue&type=style&index=0&lang=scss&");


/***/ }),

/***/ "./resources/js/routes/User/Index.vue?vue&type=template&id=3cf16565&":
/*!***************************************************************************!*\
  !*** ./resources/js/routes/User/Index.vue?vue&type=template&id=3cf16565& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_3cf16565___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_3cf16565___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_3cf16565___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=3cf16565& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/routes/User/Index.vue?vue&type=template&id=3cf16565&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/routes/User/Index.vue?vue&type=template&id=3cf16565&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/routes/User/Index.vue?vue&type=template&id=3cf16565& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "d-flex", attrs: { id: "main" } }, [
    _c("div", { staticClass: "col-md-9" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-primary",
          attrs: { id: "addLink", type: "button" },
          on: {
            click: function ($event) {
              return _vm.linkForm()
            },
          },
        },
        [_vm._v("Add new link")]
      ),
      _vm._v(" "),
      _c("table", { staticClass: "table table-striped table-hover" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "tbody",
          _vm._l(_vm.links, function (link) {
            return _c("tr", { key: link.id }, [
              _c("th", { staticClass: "col-md-1", attrs: { scope: "row" } }, [
                _c(
                  "div",
                  {
                    staticClass: "btn-group",
                    attrs: {
                      role: "group",
                      "aria-label": "Basic mixed styles example",
                    },
                  },
                  [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-success",
                        attrs: { type: "button" },
                        on: {
                          click: function ($event) {
                            return _vm.linkForm(link.id)
                          },
                        },
                      },
                      [_vm._v("Edit")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-danger",
                        attrs: { type: "button" },
                        on: {
                          click: function ($event) {
                            return _vm.deleteLink(link.id)
                          },
                        },
                      },
                      [_vm._v("Delete")]
                    ),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("td", {
                staticClass: "col-md-5",
                domProps: { textContent: _vm._s(link.name) },
              }),
              _vm._v(" "),
              _c("td", {
                staticClass: "col-md-5",
                domProps: { textContent: _vm._s(link.link) },
              }),
            ])
          }),
          0
        ),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-3", attrs: { id: "user-conf" } }, [
      _c("legend", [_vm._v("User configurations")]),
      _vm._v(" "),
      _c(
        "form",
        {
          staticClass: "row g-3",
          on: {
            submit: function ($event) {
              $event.preventDefault()
              return _vm.submitForm.apply(null, arguments)
            },
          },
        },
        [
          _c("div", { staticClass: "col-md-12" }, [
            _c(
              "label",
              { staticClass: "form-label", attrs: { for: "inputImage" } },
              [_vm._v("Profile image")]
            ),
            _vm._v(" "),
            _vm.image_path !== null
              ? _c("img", {
                  staticClass: "avatar",
                  attrs: { src: _vm.image_path },
                })
              : _vm._e(),
            _vm._v("\n                ??\n                "),
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "file" },
              on: { change: _vm.onChange },
            }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-12" }, [
            _c(
              "label",
              { staticClass: "form-label", attrs: { for: "inputBackground" } },
              [_vm._v("Background color")]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "d-flex flex-row justify-content-between align-items-center",
              },
              [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.background_color,
                      expression: "form.background_color",
                    },
                  ],
                  staticClass: "form-control col-md-10",
                  attrs: {
                    type: "text",
                    id: "inputBackground",
                    placeholder: "#FFFFFF",
                    disabled: "",
                  },
                  domProps: { value: _vm.form.background_color },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.form,
                        "background_color",
                        $event.target.value
                      )
                    },
                  },
                }),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.background_color,
                      expression: "form.background_color",
                    },
                  ],
                  attrs: {
                    type: "color",
                    id: "background-color",
                    name: "background-color",
                  },
                  domProps: { value: _vm.form.background_color },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.form,
                        "background_color",
                        $event.target.value
                      )
                    },
                  },
                }),
              ]
            ),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-12" }, [
            _c(
              "label",
              { staticClass: "form-label", attrs: { for: "inputText" } },
              [_vm._v("Text color")]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "d-flex flex-row justify-content-between align-items-center",
              },
              [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.text_color,
                      expression: "form.text_color",
                    },
                  ],
                  staticClass: "form-control col-md-10",
                  attrs: {
                    type: "text",
                    id: "inputText",
                    placeholder: "#FFFFFF",
                    disabled: "",
                  },
                  domProps: { value: _vm.form.text_color },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "text_color", $event.target.value)
                    },
                  },
                }),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.text_color,
                      expression: "form.text_color",
                    },
                  ],
                  attrs: {
                    type: "color",
                    id: "text-color",
                    name: "text-color",
                  },
                  domProps: { value: _vm.form.text_color },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "text_color", $event.target.value)
                    },
                  },
                }),
              ]
            ),
          ]),
          _vm._v(" "),
          _vm._m(1),
        ]
      ),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticClass: "col-md-1", attrs: { scope: "col" } }),
        _vm._v(" "),
        _c("th", { staticClass: "col-md-5", attrs: { scope: "col" } }, [
          _vm._v("Name"),
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "col-md-5", attrs: { scope: "col" } }, [
          _vm._v("Link"),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 d-flex justify-content-end" }, [
      _c("button", { staticClass: "btn btn-success" }, [_vm._v("Update")]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

}]);