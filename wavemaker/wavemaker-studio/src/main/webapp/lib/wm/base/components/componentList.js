/*
 *  Copyright (C) 2012-2013 CloudJee, Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

dojo.provide('wm.base.components.componentList');


/************************************************************************************
 * MICHAEL'S ATTEMPT TO DESCRIBE THIS:
 *
 * Component.js only tries to access this list if the class isn't already loaded.
 * Any class we try to load and is NOT in this list is assumed to be in common/packages.
 * Therefore: any class you load must either already be loaded or listed here.
 * If that class is NOT a part of any existing layer, then enter in its standard package name
 * so dojo.require can run normally.  Still working out details of how to create new build layers.
 ************************************************************************************/
wm.componentFixList = {_phonegap:[]};
wm.componentList = {
    'wm.Content': ['wm.base.widget.Content'],
    'wm.DataGrid': ['build.Gzipped.wm_data_grid'],
    'wm.DojoGrid': ['build.Gzipped.wm_dojo_grid'],
    'wm.DojoMenu': ['build.Gzipped.wm_menus'],
    'wm.PopupMenu': ['build.Gzipped.wm_menus'],
    'wm.DojoChart': ['build.Gzipped.wm_charts'],
    'wm.DojoGauge': ['build.Gzipped.wm_charts'],
    'wm.Dashboard': ['build.Gzipped.wm_editors', 'build.Gzipped.wm_dashboard'],
    'wm.AccordionLayers': ['build.Gzipped.wm_accordion'],
    'wm.WizardLayers': ['build.Gzipped.wm_wizardlayer'],
    'wm.BreadcrumbLayers': ['build.Gzipped.wm_breadcrumblayer'],
    'wm.ColorPicker': ['build.Gzipped.wm_colorpicker'],
    'wm.RichTextDialog': ['wm.base.widget.Dialogs.RichTextDialog'],
    'wm.DojoFisheye': ['wm.base.widget.DojoFisheye'],
    'wm.DojoLightbox': ['wm.base.widget.DojoLightbox'],
    'wm.TwitterFeed': ['wm.base.widget.TwitterFeed'],
    'wm.JsonStatus': ['build.Gzipped.wm_editors'],
    'wm.Tree': ['build.Gzipped.wm_trees'],
    'wm.PropertyTree': ['build.Gzipped.wm_trees'],
    'wm.ObjectTree': ['build.Gzipped.wm_trees'],
    "wm.DraggableTree": ['build.Gzipped.wm_trees'],
    'wm.Gadget': ["wm.base.widget.gadget.Gadget"],
    'wm.gadget.YouTube': ["wm.base.widget.gadget.YouTube"],
    'wm.gadget.FacebookLikeButton': ["wm.base.widget.gadget.Facebook"],
    'wm.gadget.FacebookActivityFeed': ["wm.base.widget.gadget.Facebook"],
    'wm.gadget.GoogleMap': ["wm.base.widget.gadget.GoogleMap"],
    'wm.gadget.Stocks': ["wm.base.widget.gadget.Stocks"],
    'wm.gadget.Weather': ["wm.base.widget.gadget.Weather"],
    'wm.gadget.TwitterFollowButton': ["wm.base.widget.gadget.TwitterGadgets"],
    'wm.gadget.TwitterTweetButton': ["wm.base.widget.gadget.TwitterGadgets"],
    'wm.gadget.TwitterList': ["wm.base.widget.gadget.TwitterGadgets"],
    'wm.TwitterFeed': ["wm.base.widget.TwitterFeed"],

    'wm.RichText': ['build.Gzipped.wm_editors', 'build.Gzipped.wm_richTextEditor'],

    'wm.CheckBoxEditor': ['build.Gzipped.wm_editors_old'],
    'wm.RadioButtonEditor': ['build.Gzipped.wm_editors_old'],
    'wm.SelectEditor': ['build.Gzipped.wm_editors_old'],
    'wm.TextEditor': ['build.Gzipped.wm_editors_old'],
    'wm.SliderEditor': ['build.Gzipped.wm_editors_old'],
    'wm._SliderEditor': ['build.Gzipped.wm_editors_old'],
    'wm.TextAreaEditor': ['build.Gzipped.wm_editors_old'],
    'wm._TextEditor': ['build.Gzipped.wm_editors_old'],
    'wm.CurrencyEditor': ['build.Gzipped.wm_editors_old'],
    'wm.NumberEditor': ['build.Gzipped.wm_editors_old'],
    'wm.Editor': ['build.Gzipped.wm_editors_old'],
    'wm.DateEditor': ['build.Gzipped.wm_editors_old'],
    'wm.TimeEditor': ['build.Gzipped.wm_editors_old'],
    'wm.Select': ['build.Gzipped.wm_editors_old'],

    'wm.Date': ['build.Gzipped.wm_editors'],
    'wm.DateTime': ['build.Gzipped.wm_editors', "build.Gzipped.wm_list"],
    'wm.SelectMenu': ['build.Gzipped.wm_editors'],
    'wm.Lookup': ['build.Gzipped.wm_editors'],
    'wm.FilteringLookup': ['build.Gzipped.wm_editors'],
    'wm.CheckboxSet': ['build.Gzipped.wm_editors'],
    'wm.RadioSet': ['build.Gzipped.wm_editors_misc'],
    'wm.ListSet': ['build.Gzipped.wm_editors', "build.Gzipped.wm_list"],
    'wm.Number': ['build.Gzipped.wm_editors'],
    'wm.Checkbox': ['build.Gzipped.wm_editors'],
    'wm.RadioButton': ['build.Gzipped.wm_editors_misc'],
    //'wm.RadioSet':['build.Gzipped.wm_editors_misc'],
    'wm.Currency': ['build.Gzipped.wm_editors'],

    'wm.Slider': ['build.Gzipped.wm_editors_misc'],
    'wm.Text': ['build.Gzipped.wm_editors'],
    'wm.TextArea': ['build.Gzipped.wm_editors'],
    'wm.Time': ['build.Gzipped.wm_editors'],
    'wm.LargeTextArea': ['build.Gzipped.wm_editors'],

    'wm.dijit.Dijit': ['wm.base.widget.dijit.Dijit'],
    'wm.dijit.ProgressBar': ['build.Gzipped.wm_progressbar'],
    'wm.RoundedButton': ['wm.base.widget.Buttons.RoundedButton'],
    'wm.BusyButton': ['wm.base.widget.Buttons.BusyButton'],
    'wm.PopupMenuButton': ['build.Gzipped.wm_menus'],
    'wm.ToggleButton': ['build.Gzipped.wm_editors'],
    // currently in main build
    'wm.ToggleButtonPanel': ['build.Gzipped.wm_editors'],
    // currently in main build
    'wm.Timer': ['wm.base.components.Timer'],

    /* Old forms and related widgets */
    'wm.SimpleForm': ['build.Gzipped.wm_livepanel'],
    'wm.LiveForm': ['build.Gzipped.wm_livepanel'],
    'wm.RelatedEditor': ['build.Gzipped.wm_livepanel'],
    'wm.LivePanel': ['build.Gzipped.wm_livepanel'],
    'wm.EditPanel': ['build.Gzipped.wm_livepanel'],
    'wm.DataNavigator': ['build.Gzipped.wm_livepanel'],
    'wm.RegularExpressionFormatter': ["wm.base.widget.FormattersMisc"],
    'wm.EvaluationFormatter': ["wm.base.widget.FormattersMisc"],
    'wm.LinkFormatter': ["wm.base.widget.FormattersMisc"],
    'wm.ImageFormatter': ["wm.base.widget.FormattersMisc"],
    /* New Forms */
    'wm.DataForm': ['build.Gzipped.wm_dataform'],
    'wm.FormPanel': ['build.Gzipped.wm_dataform'],
    'wm.SubForm': ['build.Gzipped.wm_dataform'],
    'wm.DBForm': ['build.Gzipped.wm_dataform'],
    'wm.OneToMany': ['wm.compressed.wm_dataform'],
    'wm.ServiceInputForm': ['build.Gzipped.wm_dataform'],
    'wm.ServiceQueue': ['wm.base.components.ServiceQueue'],
    //'wm.Picture': ["wm.base.widget.Picture"],
    'wm.dijit.Calendar': ["build.Gzipped.wm_editors"],
    'wm.Template': ['wm.base.widget.Template'],

    'wm.ComponentPublisher': ["wm.base.components.Publisher"],
    'wm.CompositePublisher': ["wm.base.components.Publisher"],
    'wm.TemplatePublisher': ["wm.base.components.Publisher"],
    'wm.Composite': ['wm.base.widget.Composite'],
    'wm.CompositeMixin': ['wm.base.widget.Composite'],
    'wm.Ticker': ['wm.base.widget.Ticker'],
    'wm.FileUpload': ['wm.base.widget.FileUpload'],
    'wm.DojoFileUpload': ['build.Gzipped.wm_fileupload'],
    'wm.DojoFlashFileUpload': ['build.Gzipped.wm_fileupload'],
    'wm.DijitDesigner': ["wm.base.widget.dijit.Dijit"],

    //'wm.Popup':['wm.base.widget.Popup'],
    'wm.FunctionService': ['wm.base.components.FunctionService'],
    'wm.List': ["build.Gzipped.wm_list"],
    'wm.IFrame': ['wm.base.widget.IFrame'],
    'wm.FeedList': ['wm.base.widget.FeedList'],
    'wm.ListViewer': ['wm.base.widget.ListViewer'],
    'wm.PhoneGapService': ['wm.base.components.PhoneGapService'],
    'wm.XhrService': ['wm.base.components.XhrService'],
    'wm.LogoutVariable': ['wm.base.components.LogoutVariable']
}

/* wm.require is the public version of wm.getComponentStructure; inCommon is optional parameter
 * to use when loading a class from the common folder
 */
wm.require = function(inType, inCommon) {
    if (dojo.getObject(inType)) return;
    var requireList = wm.componentList[inType];
    if (requireList || inCommon) return wm.getComponentStructure(inType);
    else dojo["require"](inType);
}

wm.getComponentStructure = function(inType) {
    //console.info('Loading ' + inType + ' dynamically.');
    if (inType == "wm.DojoGrid" && wm.isMobile) {
        inType = "wm.List";
    }
    var requireList = wm.componentList[inType];

    // if we dont get the require list, then we assume that it is a composite widget
    // so we will try to load it.
    if (!requireList) {
        // this is done for custom widgets.
        if (inType.indexOf('wm.') == 0) {
            inType = inType.substring(3);
        }

        /* This code is obsolete as of WM 6.6; see WM-4750: https://github.com/SpringSource/wavemaker/commit/aa3d2c28721740c0182b0a98e3674ee3c1114c60 */
        requireList = ['wm.base.widget.Composite', 'wm.packages.' + inType];
        //console.info('Trying to load composite: ' + requireList);
    }

    if (!requireList) {
        console.error('Add ' + inType + ' in component list.');
    } else {
        for (var i = 0; i < requireList.length; i++) {
            var relpath = dojo._getModuleSymbols(requireList[i]).join("/") + ".js";
            var uri;
            // If its a phonegap request to common/packages, then don't prefix dojo.baseUrl; common folder
            // has been copied into the project's webapp folder.
            if (wm.isPhonegap && requireList[i].match(/^(wm|common)\.packages\./)) {
                uri = relpath;
            } else {
                uri  = ((relpath.charAt(0) == "/" || relpath.match(/^\w+:/)) ? "" : dojo.baseUrl) + relpath;
            }
            while (uri.match(/[^\/]\/\.\.\//)) {
                uri = uri.replace(/[^\/]*\/\.\.\/+/, "");
            }
            wm.dojoScriptLoader(uri);
            if (wm.componentFixList[requireList[i]]) {
                var fixes = wm.componentFixList[requireList[i]];
                for (var j = 0; j < fixes.length; j++) {
                    fixes[j]();
                }
            }
        }
    }
    if (wm.isMobile && inType == "wm.List") {
        wm.DojoGrid = wm.List;
    }
}

/*
   // Usage:
   // inClass: wm.Button
   // packageList: null, the default build layer is loaded before the patches file, and wm.Button is loaded
    wm.addFrameworkFix("wm.Button", null, function() {
        wm.Button.extend({
            click: function() {
                alert("Dont click on buttons");
            }
        });
    });

    // N
    wm.addFrameworkFix("wm.List", ["build.Gzipped.wm_list"], function() {
        wm.List.extend({
            setScrollTop: function() {
                alert("HEY");
            }
        });
    });
*/

/**************
// So why do we need to pass in wm_dojo_grid when thats indexed by the wm.componentList hash?
// Because there might be more than one thing that causes a given widget class to load;
// sometimes interdependencies can cause less obvious packages to cause wm.DojoGrid to be loaded
wm.addFrameworkFix("wm.DojoGrid", ['build.Gzipped.wm_dojo_grid'], function() {
   wm.DojoGrid.extend({
      ...
   })
});

// So why not just do wm.PageContainer.extend without wm.addFrameworkFix?  Because for a phonegap
// build, wm.PageContainer isn't defined until after the patches have loaded.  Use null or [] for
// the second parameter so that it gets added to the phonegap's fix list
wm.addFrameworkFix("wm.PageContainer", null, function() {
   wm.PageContainer.extend({
      ...
   })
});

**************/
wm.addFrameworkFix = function(className, packageList, inFunc) {
    /* All classes are preloaded in debug mode; just fire inFunc */
    if (djConfig.isDebug && !wm.studioConfig) {
        inFunc();
    } else {
        var ctor = dojo.getObject(className);
        /* If the class has already been loaded, call inFunc() */
        if (ctor) {
            inFunc();
        } else if (packageList && packageList.length) {
            dojo.forEach(packageList, function(packageName) {
                if (!wm.componentFixList[packageName]) {
                    wm.componentFixList[packageName] = [inFunc];
                } else {
                    wm.componentFixList[packageName].push(inFunc);
                }
            });
        } else {
            wm.componentFixList._phonegap.push(inFunc); // phonegap build loads patches file before loading its standard package library
        }
    }
}

wm.applyFrameworkFixes = function() {
    for (var packageName in wm.componentFixList) {
        var ctor = dojo.getObject(packageName);
        if (ctor) {
            var classFixes = wm.componentFixList[packageName];
            for (var i = 0; i < packageName.length; i++) {
                classFixes[i]();
            }
            delete wm.componentFixList[packageName];
        }
    }
}

//wm.loadLib("common." + wm.version.replace(/[^a-zA-Z0-9]/g,"") + "_patches"); moved to Application.js
