(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./build.definitions/MDKDemoApp/i18n/i18n.properties":
/*!***********************************************************!*\
  !*** ./build.definitions/MDKDemoApp/i18n/i18n.properties ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "logout=Logout\nsync=Sync\nupdateCheck=Update Check\n\nmdk=Mobile Development Kit\napp_name=Customer Sales Demo Application\n\nsee_all=See All\n\n# Dashboard\ndashboard_title=Dashboard\ndashboard_header_body=Demo Application utilizing the Sample Service to illustrate various MDK features and capabilities.\ndays_left_tag={0} Days Left\ntop_customers=Top Customers\nall_customers=All Customers\n\n# MDK Mobile Services Client Bundled Changes\n# Welcome Page\napp_display_name=SAP Mobile Services Client\ndetail_label_view_text=Mobile Development Kit Client\\n\\nBuild your custom native app in SAP Business Application Studio or SAP Web IDE.  Deploy to SAP Mobile Services and view you app here.\\n\\nConnect to your SAP Mobile Services app via QR Code or email on-boarding link.\nsignin_button_text=Start\n# Application Metadata\nsplash_title=Mobile Development Kit Client\nlogoff=Log out\nrecheck=Check for Application Metadata\nno_metadata_caption=Next Steps\nno_app_update=Mobile App Update feature is not assigned to your application.  Please add the Mobile App Update feature, deploy your application, and try again.\nno_app_update_or_version=The Mobile App Update feature is not assigned to your application or there is no Application metadata deployed.  Please check your application in Mobile Services and try again.\nextract_error=Error extracting metadata.  Please redeploy and try again.\nlatest_version=You are already using the latest version: {0}\nno_revision=No Application metadata found.  Please deploy your application and try again.\non_will_update=A new version of the application is now ready to apply.  Do you want to update to this version now?\nnew_version_available=New Version Available!\ndeferred_update=Metadata update has been deferred.  Click button to retry update.\nchecking=Checking for Updates...\ncomm_failure=Communication failure. Verify that the BindMobileApplicationRoutesToME Application route is running in your BTP space cockpit.\nupdate_now=Now\nupdate_later=Later"

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Rules/Application/AppUpdateResult.js":
/*!***************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Rules/Application/AppUpdateResult.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateResult)
/* harmony export */ });
function sleep(ms)
{
    return(new Promise(function(resolve, reject) {        
        setTimeout(function() { resolve(); }, ms);        
    }));    
}

function AppUpdateResult(context) {
    // Force a small pause to let the progress banner show in case there is no new version available
    return sleep(500).then(function () {
        let result = context.actionResults.AppUpdate.data;
        let versionNum = result.split(': ')[1];
        if (result.startsWith('Current version is already up to date')) {
            return context.getPageProxy().executeAction({
                "Name": "/MDKDemoApp/Actions/GenericToastMessage.action",
                "Properties": {
                    "Message": `You are already using the latest version: ${versionNum}`
                }
            });
        }
    });
}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Rules/Application/GetClientSupportVersions.js":
/*!************************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Rules/Application/GetClientSupportVersions.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetClientSupportVersions)
/* harmony export */ });
function GetClientSupportVersions(context) {
	let versionInfo = context.getVersionInfo();
	let versionStr = '';
	Object.keys(versionInfo).forEach(function(key,index) {
	    // key: the name of the object key
	    // index: the ordinal position of the key within the object
	    console.log(`Key: ${key}   Index: ${index}`);
	    if (key != 'Application Version') {
	    	versionStr += `${key}: ${versionInfo[key]}\n`;
	    }
	});
	return versionStr;
}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Rules/Application/GetClientVersion.js":
/*!****************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Rules/Application/GetClientVersion.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetClientVersion)
/* harmony export */ });
function GetClientVersion(context) {
	let versionInfo = context.getVersionInfo();
	if (versionInfo.hasOwnProperty('Application Version')) {
		return versionInfo['Application Version'];
	}
}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Rules/Application/OnWillUpdate.js":
/*!************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Rules/Application/OnWillUpdate.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OnWillUpdate)
/* harmony export */ });
function OnWillUpdate(context) {   
    // return context.executeAction("/MDKDemoApp/Actions/Application/OnWillUpdate.action").then(
	// 	(success) => Promise.resolve(success),
	// 	(failure) => Promise.reject('User Deferred')
    // );

    return context.executeAction("/MDKDemoApp/Actions/Application/OnWillUpdate.action").then((result) => {
        if (result.data) {
            return Promise.resolve(result);
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Rules/Application/ResetAppSettingsAndLogout.js":
/*!*************************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Rules/Application/ResetAppSettingsAndLogout.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResetAppSettingsAndLogout)
/* harmony export */ });
function ResetAppSettingsAndLogout(context) {
    let platform = context.nativescript.platformModule;
    let appSettings = context.nativescript.appSettingsModule;
    var appId;
    
    if (platform && (platform.isIOS || platform.isAndroid)) {
        appId = context.evaluateTargetPath('#Application/#ClientData/#Property:MobileServiceAppId');
    } else {
        appId = 'WebClient';
    }
    try {
        // Remove any other app specific settings
        appSettings.getAllKeys().forEach(key => {
            if (key.substring(0,appId.length) === appId) {
                appSettings.remove(key);
            }
        });
    } catch(err) {
        console.log(`ERROR: AppSettings cleanup failure - ${err}`);
    } finally {
        // Logout
        return context.getPageProxy().executeAction('/MDKDemoApp/Actions/Logout.action');
    }
}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Rules/Customer/CustomerCount.js":
/*!**********************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Rules/Customer/CustomerCount.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomerCount)
/* harmony export */ });
function CustomerCount(context) {
	return context.count('/MDKDemoApp/Services/Sample.service', 'Customers', ``).then((count) => {
        return count;
    });
}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Rules/Customer/CustomerCountLabel.js":
/*!***************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Rules/Customer/CustomerCountLabel.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomerCount)
/* harmony export */ });
function CustomerCount(context) {
	return context.count('/MDKDemoApp/Services/Sample.service', 'Customers', ``).then((count) => {
        return `See All (${count})`;
    });
}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Rules/Customer/FormatAddress.js":
/*!**********************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Rules/Customer/FormatAddress.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormatAddress)
/* harmony export */ });
// Helper function to return if the value passed into the function is empty
function isValEmpty(val) {
    return (val === undefined || val == null || val.length <= 0 || val === 'undefined');
}

function FormatAddress(context) {
	var addrBlock = '';

	// If the house number has a value include it in the address block
	if (!isValEmpty(context.binding.HouseNumber)) {
		addrBlock = addrBlock + context.binding.HouseNumber + ' ' + context.binding.Street;
	}

	// If at least one of (city, state or postal code) is populated add that to the address block
	if (!isValEmpty(context.binding.City) || !isValEmpty(context.binding.PostalCode)) {
		// Add a new line if there is something already in the address block	
		if (addrBlock.length > 0) {
			addrBlock = addrBlock + '\n'
		}
		// If the city has a value include it in the address block
		if (!isValEmpty(context.binding.City)) {
			addrBlock = addrBlock + context.binding.City;
		}
		// If the post caode has a value include it in the address block		
		if (!isValEmpty(context.binding.PostalCode)) {
			addrBlock = addrBlock + ", " + context.binding.PostalCode;
		}
	}
	
	// If the country has a value include it in the address block	
	if (!isValEmpty(context.binding.Country)) {
		// Add a new line if there is something already in the address block
		if (addrBlock.length > 0) {
			addrBlock = addrBlock + '\n'
		}
		addrBlock = addrBlock + context.binding.Country;
	}

	return addrBlock;
}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Rules/Customer/GetLargeCustomerAvatarURL.js":
/*!**********************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Rules/Customer/GetLargeCustomerAvatarURL.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetLargeCustomerAvatarURL)
/* harmony export */ });
/* harmony import */ var _GetAvatarURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GetAvatarURL */ "./build.definitions/MDKDemoApp/Rules/GetAvatarURL.js");


function GetLargeCustomerAvatarURL(context) {
	let name = `${context.binding.FirstName} ${context.binding.LastName}`;	
	return (0,_GetAvatarURL__WEBPACK_IMPORTED_MODULE_0__.GetAvatarURL)(context, name, 'hash', 'large');
}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Rules/Customer/GetSmallCustomerAvatarURL.js":
/*!**********************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Rules/Customer/GetSmallCustomerAvatarURL.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetSmallCustomerAvatarURL)
/* harmony export */ });
/* harmony import */ var _GetAvatarURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GetAvatarURL */ "./build.definitions/MDKDemoApp/Rules/GetAvatarURL.js");


function GetSmallCustomerAvatarURL(context) {
    let name = `${context.binding.FirstName} ${context.binding.LastName}`;
    return (0,_GetAvatarURL__WEBPACK_IMPORTED_MODULE_0__.GetAvatarURL)(context, name, 'hash', 'small');
}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Rules/Customer/OpenMap.js":
/*!****************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Rules/Customer/OpenMap.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OpenMaps)
/* harmony export */ });
/**
 * Describe this function...
 * @param {Icontext} context
 */
function OpenMaps(context) {
    let custBinding = context.binding;
    let custAddresss = `${custBinding.HouseNumber},${custBinding.Street},${custBinding.City},${custBinding.PostalCode},${custBinding.Country}`;
    let encaddr = encodeURIComponent(custAddresss);
    console.log("encoded address " + encaddr);
    // Get the Nativescript Utils Module
    const utilsModule = context.nativescript.utilsModule;
    // Get the Nativescript Platform Module
    const platformModule = context.nativescript.platformModule;
    if (platformModule.isIOS) {
      return utilsModule.openUrl(`maps://?address=${encaddr}`);
    } else if (platformModule.isAndroid) {
      return utilsModule.openUrl(`https://maps.google.com/?q=${encaddr}`);
    }
  }

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Rules/Customer/TopCustomersQO.js":
/*!***********************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Rules/Customer/TopCustomersQO.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TopCustomersQO)
/* harmony export */ });
function TopCustomersQO(context) {
	return context.count('/MDKDemoApp/Services/Sample.service', 'Customers', '').then((count) => {
		let cd = context.getAppClientData();
		var skip = 0;
		if (count && count > 4) {
			if (!cd.CustSkip) {
				cd.CustSkip = Math.round(Math.random() * (count-9));
			}
			skip = cd.CustSkip;
		}
		let qo = `$skip=${cd.CustSkip}&$top=4`;
		return qo;
	});
}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Rules/Dashboard/GetDashboardTags.js":
/*!**************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Rules/Dashboard/GetDashboardTags.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetDashboardTags)
/* harmony export */ });
/* harmony import */ var _daysLeftInQuarter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./daysLeftInQuarter */ "./build.definitions/MDKDemoApp/Rules/Dashboard/daysLeftInQuarter.js");
/* harmony import */ var _getCurrentQuarter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getCurrentQuarter */ "./build.definitions/MDKDemoApp/Rules/Dashboard/getCurrentQuarter.js");



/**
 * Describe this function...
 * @param {IClientAPI} context
 */
function GetDashboardTags(context) {
    let tags = [];
    tags.push((0,_daysLeftInQuarter__WEBPACK_IMPORTED_MODULE_0__.daysLeftInQuarter)(context));
    tags.push((0,_getCurrentQuarter__WEBPACK_IMPORTED_MODULE_1__.getCurrentQuarter)(context));
    return tags;
}


/***/ }),

/***/ "./build.definitions/MDKDemoApp/Rules/Dashboard/daysLeftInQuarter.js":
/*!***************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Rules/Dashboard/daysLeftInQuarter.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   daysLeftInQuarter: () => (/* binding */ daysLeftInQuarter)
/* harmony export */ });
function daysLeftInQuarter(context) {
  var d = new Date();
  var qEnd = new Date(d);
  qEnd.setMonth(qEnd.getMonth() + 3 - qEnd.getMonth() % 3, 0);
  var qNum = Math.floor((qEnd - d) / 8.64e7);
  let tagColor = qNum <= 30 ? "tagStyleRed": "tagStyleGreen";
  let label = context.localizeText('days_left_tag',[qNum]);
  let tagObj = {
    "Text": label,
    "Style": tagColor
  };
  return tagObj;
}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Rules/Dashboard/getCurrentQuarter.js":
/*!***************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Rules/Dashboard/getCurrentQuarter.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCurrentQuarter: () => (/* binding */ getCurrentQuarter)
/* harmony export */ });
function getCurrentQuarter(context) {
  var d = new Date();
  var q = [1,2,3,4];
  var qNum = q[Math.floor(d.getMonth() / 3)];
  let tagObj = {
    "Text": `Q${qNum}`,
    "Style": "tagStyleTeal"
  }
  return tagObj;
}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Rules/Dashboard/versionString.js":
/*!***********************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Rules/Dashboard/versionString.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ versionString)
/* harmony export */ });
function versionString(context) {
	var versionInfo = context.getVersionInfo();
	let ver = null;
	  if (versionInfo.hasOwnProperty('Application Version')) {
		  ver = 'v' + versionInfo['Application Version'];
	}
	return ver;
  }

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Rules/GetAvatarURL.js":
/*!************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Rules/GetAvatarURL.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetAvatarURL: () => (/* binding */ GetAvatarURL)
/* harmony export */ });
function hashCode(str) {
	return Array.from(str)
	  .reduce((s, c) => Math.imul(31, s) + c.charCodeAt(0) | 0, 0)
}

function GetAvatarURL(context, name, colorInput = 'hash', imgSize = 'large') {
	let platform = context.nativescript.platformModule;

	// Hash / Random color options
	const bgcolors = [
		"2ecc71", "2980b9", "8e44ad", "f1c40f", "e67e22", 
		"e74c3c", "04633F", "FF38D3", "3A3DFF"
	];
	var initials;
	var backgroundColor;
	var size;
	
	// Using ui-avatars.com http api
	let baseUrl = 'https://ui-avatars.com/api';
	if (name === undefined || name == null || name.length <= 0 || name === 'undefined') {
		// If no name is specified use dash
		initials = '-';
		// If no name always choose a random color
		colorInput = 'random';
	} else {
		// If a name is provided calculate the initials based on the first letter of the first and last words
		let words = name.split(' ');
		let first = words[0].substring(0,1);
		var last = '';
		if (words.length > 1) {
			last = words[words.length-1].substring(0,1);
		}
		initials = first.toUpperCase() + last.toUpperCase();
		//console.log(`Inits: ${initials}`);
	}
	if (context.isDemoMode()) {
		let init = initials.substring(0,1).toLowerCase();
		var demoAvatar;
		if (init === '-') {
			demoAvatar = 'res://none.png'; 
		} else {
			demoAvatar = `res://${init}.png`;
		}
		return demoAvatar;	
	}
	switch (colorInput) {
		case 'hash':
			let strHash = hashCode(name);
			let hashColor = Math.abs(strHash % 9);
			//console.log(`Hash: ${strHash}  Color Index: ${hashColor}`);
			backgroundColor = bgcolors[hashColor];
			break; 
		case 'random':
			let randomColor = Math.floor((Math.random() * 9));
			//console.log(`Random Index: ${randomColor}`);
			backgroundColor = bgcolors[randomColor];
			break;
		default:
			backgroundColor = colorInput;
    }
    switch (imgSize) {
        case 'large':
            size = 100;
            break;
        case 'small':
            if (platform.isIOS) {
                size = 40
            } else if (platform.isAndroid) {
                size = 60;
            } else { // Otherwise Web
                size = 60;
            }           
            break;
    }
	if (platform.isIOS) {
		size = 100
	} else if (platform.isAndroid) {
		size = 100;
	}
	let avatarUrl = `${baseUrl}/?size=${size}&rounded=true&background=${backgroundColor}&color=ffffff&name=${initials}`;
	//console.log(`Avatar: ${avatarUrl}`);
	return avatarUrl;
}


/***/ }),

/***/ "./build.definitions/MDKDemoApp/Rules/Logging/LogLevels.js":
/*!*****************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Rules/Logging/LogLevels.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LogLevels)
/* harmony export */ });
function LogLevels(context) { 
    var levels = [];
    levels.push({
        'DisplayValue': 'Error',
        'ReturnValue': 'Error'
    });
    levels.push({
        'DisplayValue': 'Debug',
        'ReturnValue': 'Debug'
    });
    levels.push({
        'DisplayValue': 'Warning',
        'ReturnValue': 'Warn'
    });
    levels.push({
        'DisplayValue': 'Info',
        'ReturnValue': 'Info'
    });
    levels.push({
        'DisplayValue': 'Trace',
        'ReturnValue': 'Trace'      
    })
    return levels;
}


/***/ }),

/***/ "./build.definitions/MDKDemoApp/Rules/Logging/SetUserLogLevel.js":
/*!***********************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Rules/Logging/SetUserLogLevel.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetUserLogLevel)
/* harmony export */ });
function SetUserLogLevel(context) {
    try {
        if (context.getValue() && context.getValue()[0]) {
            var logger = context.getLogger();
            var listPickerValue = context.getValue()[0].ReturnValue;
            if (listPickerValue) {
                switch (listPickerValue) {
                    case 'Debug':
                        logger.setLevel('Debug');
                        break;
                    case 'Error':
                        logger.setLevel('Error');
                        break;
                    case 'Warn':
                        logger.setLevel('Warn');
                        break;
                    case 'Trace':
                        logger.setLevel('Trace');
                        break;                        
                    case 'Info':
                        logger.setLevel('Info');
                        break;
                    default:
                        // eslint-disable-next-line no-console
                        console.log(`unrecognized key ${listPickerValue}`);
                }
                return listPickerValue;
            }
        }
    } catch (exception) {
        logger.log(String(exception), 'Error');
        return undefined;
    }
}


/***/ }),

/***/ "./build.definitions/MDKDemoApp/Rules/Logging/ToggleLogging.js":
/*!*********************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Rules/Logging/ToggleLogging.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToggleLogging)
/* harmony export */ });
function ToggleLogging(context) {
    try {
        var logger = context.getLogger();
        const container = context.getPageProxy().getControl('FormCellContainer');
        const enableLogSwitch = container.getControl('EnableLogSwitch');
        const logLevelListPicker = container.getControl('LogLevelListPicker');

        let switchValue = enableLogSwitch.getValue();
        if (switchValue) {
            logger.on();
            logLevelListPicker.setVisible(true);
            logLevelListPicker.setEditable(true);
            logLevelListPicker.redraw();
        } else {
            logger.off();
            logLevelListPicker.setEditable(false);
            logLevelListPicker.setVisible(false);
            logLevelListPicker.redraw();
        }
        return switchValue;
    } catch (exception) {
        logger.log(String(exception), 'Error');
        return undefined;
    }
}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Rules/Logging/UserLogSetting.js":
/*!**********************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Rules/Logging/UserLogSetting.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserLogSetting)
/* harmony export */ });
function UserLogSetting(context) {

    try {
        var logger = context.getLogger();

        const container = context.getControl('FormCellContainer');
        const enableLogSwitch = container.getControl('EnableLogSwitch');
        const logLevelListPicker = container.getControl('LogLevelListPicker');
        
        //Persist the user logging preferences
        if (logger) {
            if (logger.isTurnedOn()) {
                if (enableLogSwitch) {
                    enableLogSwitch.setValue(true);
                }
                if (logLevelListPicker) {
                    logLevelListPicker.setEditable(true);
                }
            } else {
                if (enableLogSwitch) {
                    enableLogSwitch.setValue(false);
                }
                if (logLevelListPicker) {
                    logLevelListPicker.setEditable(false);
                }
            }
            var logLevel = logger.getLevel();
            if (logLevel) {
                if (logLevelListPicker) {
                    logLevelListPicker.setValue([logLevel]);
                }
            }
            //Upon selecting a value in the List picker and clicking the back button 
            //will enable the onload page rule. This will set the selected value
            //in the control
            if (logLevelListPicker.getValue()[0]) {
                var returnValue = logLevelListPicker.getValue()[0].ReturnValue;
                if (returnValue) {
                    logLevelListPicker.setValue([returnValue]);
                    logger.setLevel(returnValue);
                }
            }
        }
    } catch (exception) {
        // eslint-disable-next-line no-console
        console.log(String(exception), 'Error User Logger could not be set');
    }
}


/***/ }),

/***/ "./build.definitions/MDKDemoApp/Rules/Product/GetProductImage.js":
/*!***********************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Rules/Product/GetProductImage.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetProductImage)
/* harmony export */ });
function GetProductImage(context) {
    const platform = context.nativescript.platformModule;    
	let imageData = null;
	let imageObject = context.binding;
	let pageProxy = context.getPageProxy()

    return pageProxy.executeAction({
        "Name": "/MDKDemoApp/Actions/Product/DownloadProductStream.action",
        "Properties": {
            "Target": {
                "ReadLink": imageObject['@odata.readLink']
            }
        }
    }).then((result) => {
        // success case
        //console.log('Retrieved Image');
        if (platform.isAndroid) {
            imageData = `data:image/example;base64,${android.util.Base64.encodeToString(result.data,android.util.Base64.DEFAULT)}`;	
        } else if (platform.isIOS) {
            imageData = `data:image/example;base64,${result.data.base64Encoding()}`;	
        } else {  // Assume MDK Web
            let buffer = btoa([].reduce.call(new Uint8Array(result.data),function(p,c){return p+String.fromCharCode(c)},''));
            imageData = `data:image/example;base64,${buffer.toString('base64')}`;
        }
        return imageData;
    }, (error) => {
        // error case
        console.log('Error downloading image');
    });
}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Rules/Product/GetPromoDiscount.js":
/*!************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Rules/Product/GetPromoDiscount.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetPromoDiscount)
/* harmony export */ });
function GetPromoDiscount(context) {
    let platform = context.nativescript.platformModule;
    let appSettings = context.nativescript.appSettingsModule;
    var appId, mainPage, mainPageName;
    try {
        if (platform && (platform.isIOS || platform.isAndroid)) {
            appId = context.evaluateTargetPath('#Application/#ClientData/#Property:MobileServiceAppId');
        } else {
            appId = 'WebClient';
        }
    } catch (err) {
        console.log('ERROR: Failure getting AppId');
    }    
    let cd = context.getAppClientData();
    if (cd.promoItems && cd.promoItems.hasOwnProperty(`${context.binding.ProductID}`)) {
        let discountStr = `+${context.formatPercentage(cd.promoItems[`${context.binding.ProductID}`],null,{minimumIntegerDigits:1,minimumFractionDigits:0,maximumFractionDigits:0,useGrouping:true})} Off`;
        return discountStr;
    }
    return null;
}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Rules/Product/PercentOff.js":
/*!******************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Rules/Product/PercentOff.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PercentOff)
/* harmony export */ });
function PercentOff(context) {
    let discounts = [0.05,0.10,0.15,0.25];
    let randomDiscount = Math.round(Math.random() * (3));
    let itemDiscount = discounts[randomDiscount];
    // Only give discounts if price is > 0
    if (context.binding.Price && context.binding.Price > 0) {
        // Store promotion item discount
        let cd = context.getAppClientData();
        if (!cd.promoItems) {
            cd.promoItems = {};
        }
        if (cd.promoItems && !cd.promoItems.hasOwnProperty(`${context.binding.ProductID}`)) {
            cd.promoItems[`${context.binding.ProductID}`] = itemDiscount;
        } else {
            itemDiscount = cd.promoItems[`${context.binding.ProductID}`];
        }
        // Defined the Percent Off String
        let discountStr = `+${context.formatPercentage(itemDiscount,null,{minimumIntegerDigits:1,minimumFractionDigits:0,maximumFractionDigits:0,useGrouping:true})} Off`;
        return discountStr;
    } else {
        return null;
    }
}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Rules/Product/ProductCount.js":
/*!********************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Rules/Product/ProductCount.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductCount)
/* harmony export */ });
function ProductCount(context) {
	return context.count('/MDKDemoApp/Services/Sample.service', 'Products', ``).then((count) => {
        return count;
    });
}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Rules/Product/ProductCountLabel.js":
/*!*************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Rules/Product/ProductCountLabel.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductCount)
/* harmony export */ });
function ProductCount(context) {
	return context.count('/MDKDemoApp/Services/Sample.service', 'Products', ``).then((count) => {
        return `See All (${count})`;
    });
}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Rules/Product/ProductListCaption.js":
/*!**************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Rules/Product/ProductListCaption.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductCatalogCaption)
/* harmony export */ });
function ProductCatalogCaption(context) {
	let pageProxy = context.getPageProxy();
	var currentFilter = null;

	if (pageProxy.getControls().length > 0) {
		let filter = null;
		if (pageProxy.getControls()[0].getSections()[0]._context.element.observable()._currentFilter) {
			currentFilter = pageProxy.getControls()[0].getSections()[0]._context.element.observable()._currentFilter;
			console.log(currentFilter);
			filter = `$filter=${encodeURIComponent(currentFilter)}`;
			console.log(filter);
		}
		
		return context.count('/MDKDemoApp/Services/Sample.service', 'Products', ``).then((totalCount) => {
			return context.count('/MDKDemoApp/Services/Sample.service', 'Products', filter).then((count) => {
				let caption = null;
				if (count != totalCount) {
					caption = `Products (${count}/${totalCount})`;
				} else {
					caption = `Products (${count})`;
				}
				pageProxy.setCaption(caption);
				return caption;
			});
		});
	} else {
		return context.count('/MDKDemoApp/Services/Sample.service', 'Products', ``).then((count) => {
			let caption = `Products (${count})`;
			pageProxy.setCaption(caption);			
			return caption;
		});
	}
}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Rules/Product/ProductOnPromoFilter.js":
/*!****************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Rules/Product/ProductOnPromoFilter.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductOnPromoFilter)
/* harmony export */ });
function ProductOnPromoFilter(context) {
    let platform = context.nativescript.platformModule;
    let appSettings = context.nativescript.appSettingsModule;
    var appId;

    if (platform && (platform.isIOS || platform.isAndroid)) {
        appId = context.evaluateTargetPath('#Application/#ClientData/#Property:MobileServiceAppId');
    } else {
        appId = 'WebClient';
    }
    let cd = context.getAppClientData();
    let promoItems = [];
    var filter = '';

    if (cd.promoItems) {
        for (var item of Object.keys(cd.promoItems)) {
            promoItems.push(`ProductID eq ${item}`)
        }
        if (promoItems.length > 0) {
            filter = `(${promoItems.join(' or ')})`;
        }
    }
    console.log(filter);
    return filter;
}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Rules/Product/PromotionalItemsQO.js":
/*!**************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Rules/Product/PromotionalItemsQO.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PromotionalItemsQO)
/* harmony export */ });
function PromotionalItemsQO(context) {
	return context.count('/MDKDemoApp/Services/Sample.service', 'Products', '').then((count) => {
		let cd = context.getAppClientData();
		var skip = 0;
		if (count && count > 11) {
			if (!cd.PromoSkip) {
				cd.PromoSkip = Math.round(Math.random() * (count-9));
			}
			skip = cd.PromoSkip;
		}
		let qo = `$skip=${cd.PromoSkip}&$top=10`;
		return qo;
	});
}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Rules/Product/ResetFilter.js":
/*!*******************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Rules/Product/ResetFilter.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResetFilter)
/* harmony export */ });
function ResetFilter(context) {
	let formCellContainer = context.getPageProxy().getControl('FormCellContainer0');
    let controls = formCellContainer.getControls();
	    
    if (controls && controls.length > 0) {
        for (let i = 0; i < controls.length; i++) {
            if (controls[i].getName() === 'SortBy') {
            	// Reset the sort control to the first sort option in the group
            	// Assumes the first sort option is the default sort order for the list
            	controls[i].setValue(controls[i].getCollection()[0].ReturnValue);
            } else {
            	// Clear any filter selections
            	controls[i].setValue('');
            }
        }
    }
}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Rules/SalesOrder/ShowSalesOrder_Item_Product.js":
/*!**************************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Rules/SalesOrder/ShowSalesOrder_Item_Product.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShowSalesOrder_Item_Product)
/* harmony export */ });
function ShowSalesOrder_Item_Product(context) {
    let binding = context.getPageProxy().getActionBinding();
    let pageProxy = context.getPageProxy();
    pageProxy.setActionBinding(binding.Product);
    return pageProxy.executeAction('/MDKDemoApp/Actions/Product/NavToProduct_Detail.action');
}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Rules/Service/InitializeApplication.js":
/*!*****************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Rules/Service/InitializeApplication.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InitializeApplication)
/* harmony export */ });
/* harmony import */ var _User_StoreUserInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../User/StoreUserInfo */ "./build.definitions/MDKDemoApp/Rules/User/StoreUserInfo.js");


function InitializeApplication(context) {
    let platform = context.nativescript.platformModule;
    let appSettings = context.nativescript.appSettingsModule;
    var appId, mainPage, mainPageName;
    // Store the main page of the application into app settings to be able to retrieve client data from the main page later
    try {
        if (platform && (platform.isIOS || platform.isAndroid)) {
            appId = context.evaluateTargetPath('#Application/#ClientData/#Property:MobileServiceAppId');
        } else {
            appId = 'WebClient';
        } 
    } catch (err) {
        console.log('ERROR: Failure getting AppId');
    }    
    // Grab the user information and store it in app settings
	return (0,_User_StoreUserInfo__WEBPACK_IMPORTED_MODULE_0__["default"])(context).then(result => {
        // Initialize the data store
		return context.executeAction('/MDKDemoApp/Actions/Service/Initialize.action');
	});
}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Rules/User/GetLargeUserAvatarURL.js":
/*!**************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Rules/User/GetLargeUserAvatarURL.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetLargeUserAvatarURL)
/* harmony export */ });
/* harmony import */ var _GetAvatarURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GetAvatarURL */ "./build.definitions/MDKDemoApp/Rules/GetAvatarURL.js");


function GetLargeUserAvatarURL(context) {
	let appSettings = context.nativescript.appSettingsModule;
	let platform = context.nativescript.platformModule;
	let appId = context.evaluateTargetPath('#Application/#ClientData/#Property:MobileServiceAppId');
	let name = appSettings.getString(`${appId}-UserFullName`);
	
	return (0,_GetAvatarURL__WEBPACK_IMPORTED_MODULE_0__.GetAvatarURL)(context, name, 'hash', 'large');
}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Rules/User/GetSmallUserAvatarURL.js":
/*!**************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Rules/User/GetSmallUserAvatarURL.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetSmallUserAvatarURL)
/* harmony export */ });
/* harmony import */ var _GetAvatarURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GetAvatarURL */ "./build.definitions/MDKDemoApp/Rules/GetAvatarURL.js");


function GetSmallUserAvatarURL(context) {
	let appSettings = context.nativescript.appSettingsModule;
	let platform = context.nativescript.platformModule;
	let appId = context.evaluateTargetPath('#Application/#ClientData/#Property:MobileServiceAppId');
	let name = appSettings.getString(`${appId}-UserFullName`);
	
	return (0,_GetAvatarURL__WEBPACK_IMPORTED_MODULE_0__.GetAvatarURL)(context, name, 'hash', 'small');
}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Rules/User/GetUserEmail.js":
/*!*****************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Rules/User/GetUserEmail.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetUserEmail)
/* harmony export */ });
function GetUserEmail(context) {
	let appSettings = context.nativescript.appSettingsModule;
	let appId = context.evaluateTargetPath('#Application/#ClientData/#Property:MobileServiceAppId');
	if (appSettings.hasKey(`${appId}-UserEmail`)) {
		// If we have already stored the current user info don't fetch it again
		return appSettings.getString(`${appId}-UserEmail`);
	} else {
		return '';
	}
}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Rules/User/GetUserFullName.js":
/*!********************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Rules/User/GetUserFullName.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetUserFullName)
/* harmony export */ });
function GetUserFullName(context) {
	let appSettings = context.nativescript.appSettingsModule;
	let appId = context.evaluateTargetPath('#Application/#ClientData/#Property:MobileServiceAppId');
	if (appSettings.hasKey(`${appId}-UserFullName`)) {
		// If we have already stored the current user info don't fetch it again
		return appSettings.getString(`${appId}-UserFullName`);
	} else {
		return '';
	}
}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Rules/User/StoreUserInfo.js":
/*!******************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Rules/User/StoreUserInfo.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StoreUserInfo)
/* harmony export */ });
function StoreUserInfo(context) {
    let platform = context.nativescript.platformModule;
    
    if (platform.isIOS || platform.isAndroid) {
        let appSettings = context.nativescript.appSettingsModule;
        let appId = context.evaluateTargetPath('#Application/#ClientData/#Property:MobileServiceAppId');
        if (appSettings.hasKey(`${appId}-UserName`)) {
            // If we have already stored the current user info don't fetch it again
            return Promise.resolve();
        } else if (context.isDemoMode()) {
            appSettings.setString(`${appId}-UserId`,'DemoUser');
            appSettings.setString(`${appId}-UserName`,'DemoUser');
            appSettings.setString(`${appId}-UserGivenName`,'Demo');
            appSettings.setString(`${appId}-UserFamilyName`,'User');
            appSettings.setString(`${appId}-UserEmail`,'mobileservicesclient@sap.com');
            appSettings.setString(`${appId}-UserFullName`,`Demo User`);
            return Promise.resolve();            
        } else {
            let userInfoUrl = `/mobileservices/application/${appId}/roleservice/application/${appId}/v2/Me`;
            let params = { 'method': 'GET' };
            //console.log(userInfoUrl);
            return context.sendRequest(userInfoUrl, params).then(r => {
                if (r && r.statusCode === 200 && r.content) {
                    const userInfo = JSON.parse(r.content.toString());
                    appSettings.setString(`${appId}-UserId`,userInfo.id);
                    appSettings.setString(`${appId}-UserName`,userInfo.userName);
                    appSettings.setString(`${appId}-UserGivenName`,userInfo.name.givenName);
                    appSettings.setString(`${appId}-UserFamilyName`,userInfo.name.familyName);
                    appSettings.setString(`${appId}-UserEmail`,userInfo.emails[0].value);
                    appSettings.setString(`${appId}-UserFullName`,`${userInfo.name.givenName} ${userInfo.name.familyName}`);
                    return Promise.resolve();
                }
            },
            (error) => {
                console.log(error.toString());
            });                
        }
    } else { // Assume Web Client
        return Promise.resolve();
    }
}

/***/ }),

/***/ "./build.definitions/application-index.js":
/*!************************************************!*\
  !*** ./build.definitions/application-index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let application_app = __webpack_require__(/*! ./Application.app */ "./build.definitions/Application.app")
let mdkdemoapp_actions_application_appupdatecheck_action = __webpack_require__(/*! ./MDKDemoApp/Actions/Application/AppUpdateCheck.action */ "./build.definitions/MDKDemoApp/Actions/Application/AppUpdateCheck.action")
let mdkdemoapp_actions_application_appupdateprogressbanner_action = __webpack_require__(/*! ./MDKDemoApp/Actions/Application/AppUpdateProgressBanner.action */ "./build.definitions/MDKDemoApp/Actions/Application/AppUpdateProgressBanner.action")
let mdkdemoapp_actions_application_checkforupdatesprogress_action = __webpack_require__(/*! ./MDKDemoApp/Actions/Application/CheckForUpdatesProgress.action */ "./build.definitions/MDKDemoApp/Actions/Application/CheckForUpdatesProgress.action")
let mdkdemoapp_actions_application_navtoabout_action = __webpack_require__(/*! ./MDKDemoApp/Actions/Application/NavToAbout.action */ "./build.definitions/MDKDemoApp/Actions/Application/NavToAbout.action")
let mdkdemoapp_actions_application_navtoactivitylog_action = __webpack_require__(/*! ./MDKDemoApp/Actions/Application/NavToActivityLog.action */ "./build.definitions/MDKDemoApp/Actions/Application/NavToActivityLog.action")
let mdkdemoapp_actions_application_navtosupport_action = __webpack_require__(/*! ./MDKDemoApp/Actions/Application/NavToSupport.action */ "./build.definitions/MDKDemoApp/Actions/Application/NavToSupport.action")
let mdkdemoapp_actions_application_onwillupdate_action = __webpack_require__(/*! ./MDKDemoApp/Actions/Application/OnWillUpdate.action */ "./build.definitions/MDKDemoApp/Actions/Application/OnWillUpdate.action")
let mdkdemoapp_actions_application_usermenupopover_action = __webpack_require__(/*! ./MDKDemoApp/Actions/Application/UserMenuPopover.action */ "./build.definitions/MDKDemoApp/Actions/Application/UserMenuPopover.action")
let mdkdemoapp_actions_closemodalcanceled_action = __webpack_require__(/*! ./MDKDemoApp/Actions/CloseModalCanceled.action */ "./build.definitions/MDKDemoApp/Actions/CloseModalCanceled.action")
let mdkdemoapp_actions_closemodalcomplete_action = __webpack_require__(/*! ./MDKDemoApp/Actions/CloseModalComplete.action */ "./build.definitions/MDKDemoApp/Actions/CloseModalComplete.action")
let mdkdemoapp_actions_closepage_action = __webpack_require__(/*! ./MDKDemoApp/Actions/ClosePage.action */ "./build.definitions/MDKDemoApp/Actions/ClosePage.action")
let mdkdemoapp_actions_customer_navtocustomer_detail_action = __webpack_require__(/*! ./MDKDemoApp/Actions/Customer/NavToCustomer_Detail.action */ "./build.definitions/MDKDemoApp/Actions/Customer/NavToCustomer_Detail.action")
let mdkdemoapp_actions_customer_navtocustomer_list_action = __webpack_require__(/*! ./MDKDemoApp/Actions/Customer/NavToCustomer_List.action */ "./build.definitions/MDKDemoApp/Actions/Customer/NavToCustomer_List.action")
let mdkdemoapp_actions_customer_navtocustomer_salesorders_action = __webpack_require__(/*! ./MDKDemoApp/Actions/Customer/NavToCustomer_SalesOrders.action */ "./build.definitions/MDKDemoApp/Actions/Customer/NavToCustomer_SalesOrders.action")
let mdkdemoapp_actions_genericbannermessage_action = __webpack_require__(/*! ./MDKDemoApp/Actions/GenericBannerMessage.action */ "./build.definitions/MDKDemoApp/Actions/GenericBannerMessage.action")
let mdkdemoapp_actions_genericmessagebox_action = __webpack_require__(/*! ./MDKDemoApp/Actions/GenericMessageBox.action */ "./build.definitions/MDKDemoApp/Actions/GenericMessageBox.action")
let mdkdemoapp_actions_genericnavigation_action = __webpack_require__(/*! ./MDKDemoApp/Actions/GenericNavigation.action */ "./build.definitions/MDKDemoApp/Actions/GenericNavigation.action")
let mdkdemoapp_actions_genericprogressbanner_action = __webpack_require__(/*! ./MDKDemoApp/Actions/GenericProgressBanner.action */ "./build.definitions/MDKDemoApp/Actions/GenericProgressBanner.action")
let mdkdemoapp_actions_generictoastmessage_action = __webpack_require__(/*! ./MDKDemoApp/Actions/GenericToastMessage.action */ "./build.definitions/MDKDemoApp/Actions/GenericToastMessage.action")
let mdkdemoapp_actions_logging_loguploadfailure_action = __webpack_require__(/*! ./MDKDemoApp/Actions/Logging/LogUploadFailure.action */ "./build.definitions/MDKDemoApp/Actions/Logging/LogUploadFailure.action")
let mdkdemoapp_actions_logging_loguploadsuccessful_action = __webpack_require__(/*! ./MDKDemoApp/Actions/Logging/LogUploadSuccessful.action */ "./build.definitions/MDKDemoApp/Actions/Logging/LogUploadSuccessful.action")
let mdkdemoapp_actions_logging_uploadlog_action = __webpack_require__(/*! ./MDKDemoApp/Actions/Logging/UploadLog.action */ "./build.definitions/MDKDemoApp/Actions/Logging/UploadLog.action")
let mdkdemoapp_actions_logging_uploadlogprogress_action = __webpack_require__(/*! ./MDKDemoApp/Actions/Logging/UploadLogProgress.action */ "./build.definitions/MDKDemoApp/Actions/Logging/UploadLogProgress.action")
let mdkdemoapp_actions_logout_action = __webpack_require__(/*! ./MDKDemoApp/Actions/Logout.action */ "./build.definitions/MDKDemoApp/Actions/Logout.action")
let mdkdemoapp_actions_logoutconfirmation_action = __webpack_require__(/*! ./MDKDemoApp/Actions/LogoutConfirmation.action */ "./build.definitions/MDKDemoApp/Actions/LogoutConfirmation.action")
let mdkdemoapp_actions_product_downloadproductimage_action = __webpack_require__(/*! ./MDKDemoApp/Actions/Product/DownloadProductImage.action */ "./build.definitions/MDKDemoApp/Actions/Product/DownloadProductImage.action")
let mdkdemoapp_actions_product_downloadproductstream_action = __webpack_require__(/*! ./MDKDemoApp/Actions/Product/DownloadProductStream.action */ "./build.definitions/MDKDemoApp/Actions/Product/DownloadProductStream.action")
let mdkdemoapp_actions_product_navtoproduct_detail_action = __webpack_require__(/*! ./MDKDemoApp/Actions/Product/NavToProduct_Detail.action */ "./build.definitions/MDKDemoApp/Actions/Product/NavToProduct_Detail.action")
let mdkdemoapp_actions_product_navtoproduct_detail_edit_action = __webpack_require__(/*! ./MDKDemoApp/Actions/Product/NavToProduct_Detail_Edit.action */ "./build.definitions/MDKDemoApp/Actions/Product/NavToProduct_Detail_Edit.action")
let mdkdemoapp_actions_product_navtoproduct_list_action = __webpack_require__(/*! ./MDKDemoApp/Actions/Product/NavToProduct_List.action */ "./build.definitions/MDKDemoApp/Actions/Product/NavToProduct_List.action")
let mdkdemoapp_actions_product_productfilter_action = __webpack_require__(/*! ./MDKDemoApp/Actions/Product/ProductFilter.action */ "./build.definitions/MDKDemoApp/Actions/Product/ProductFilter.action")
let mdkdemoapp_actions_product_updateproductdetails_action = __webpack_require__(/*! ./MDKDemoApp/Actions/Product/UpdateProductDetails.action */ "./build.definitions/MDKDemoApp/Actions/Product/UpdateProductDetails.action")
let mdkdemoapp_actions_salesorder_navtosalesorder_detail_action = __webpack_require__(/*! ./MDKDemoApp/Actions/SalesOrder/NavtoSalesOrder_Detail.action */ "./build.definitions/MDKDemoApp/Actions/SalesOrder/NavtoSalesOrder_Detail.action")
let mdkdemoapp_actions_service_closeoffline_action = __webpack_require__(/*! ./MDKDemoApp/Actions/Service/CloseOffline.action */ "./build.definitions/MDKDemoApp/Actions/Service/CloseOffline.action")
let mdkdemoapp_actions_service_downloadprogress_action = __webpack_require__(/*! ./MDKDemoApp/Actions/Service/DownloadProgress.action */ "./build.definitions/MDKDemoApp/Actions/Service/DownloadProgress.action")
let mdkdemoapp_actions_service_initialize_action = __webpack_require__(/*! ./MDKDemoApp/Actions/Service/Initialize.action */ "./build.definitions/MDKDemoApp/Actions/Service/Initialize.action")
let mdkdemoapp_actions_service_initializesuccessmessage_action = __webpack_require__(/*! ./MDKDemoApp/Actions/Service/InitializeSuccessMessage.action */ "./build.definitions/MDKDemoApp/Actions/Service/InitializeSuccessMessage.action")
let mdkdemoapp_actions_service_offlinedownload_action = __webpack_require__(/*! ./MDKDemoApp/Actions/Service/OfflineDownload.action */ "./build.definitions/MDKDemoApp/Actions/Service/OfflineDownload.action")
let mdkdemoapp_actions_service_offlineupload_action = __webpack_require__(/*! ./MDKDemoApp/Actions/Service/OfflineUpload.action */ "./build.definitions/MDKDemoApp/Actions/Service/OfflineUpload.action")
let mdkdemoapp_actions_service_startsync_action = __webpack_require__(/*! ./MDKDemoApp/Actions/Service/StartSync.action */ "./build.definitions/MDKDemoApp/Actions/Service/StartSync.action")
let mdkdemoapp_globals_application_appdefinition_version_global = __webpack_require__(/*! ./MDKDemoApp/Globals/Application/AppDefinition_Version.global */ "./build.definitions/MDKDemoApp/Globals/Application/AppDefinition_Version.global")
let mdkdemoapp_globals_application_applicationname_global = __webpack_require__(/*! ./MDKDemoApp/Globals/Application/ApplicationName.global */ "./build.definitions/MDKDemoApp/Globals/Application/ApplicationName.global")
let mdkdemoapp_globals_usermenu_usersupportemail_global = __webpack_require__(/*! ./MDKDemoApp/Globals/UserMenu/UserSupportEmail.global */ "./build.definitions/MDKDemoApp/Globals/UserMenu/UserSupportEmail.global")
let mdkdemoapp_globals_usermenu_usersupportfacetime_global = __webpack_require__(/*! ./MDKDemoApp/Globals/UserMenu/UserSupportFaceTime.global */ "./build.definitions/MDKDemoApp/Globals/UserMenu/UserSupportFaceTime.global")
let mdkdemoapp_globals_usermenu_usersupportphone_global = __webpack_require__(/*! ./MDKDemoApp/Globals/UserMenu/UserSupportPhone.global */ "./build.definitions/MDKDemoApp/Globals/UserMenu/UserSupportPhone.global")
let mdkdemoapp_i18n_i18n_properties = __webpack_require__(/*! ./MDKDemoApp/i18n/i18n.properties */ "./build.definitions/MDKDemoApp/i18n/i18n.properties")
let mdkdemoapp_images_android_user__60_png = __webpack_require__(/*! ./MDKDemoApp/Images/Android/user-60.png */ "./build.definitions/MDKDemoApp/Images/Android/user-60.png")
let mdkdemoapp_images_application_about_png = __webpack_require__(/*! ./MDKDemoApp/Images/Application/about.png */ "./build.definitions/MDKDemoApp/Images/Application/about.png")
let mdkdemoapp_images_application_app__settings_png = __webpack_require__(/*! ./MDKDemoApp/Images/Application/app-settings.png */ "./build.definitions/MDKDemoApp/Images/Application/app-settings.png")
let mdkdemoapp_images_application_headset_png = __webpack_require__(/*! ./MDKDemoApp/Images/Application/headset.png */ "./build.definitions/MDKDemoApp/Images/Application/headset.png")
let mdkdemoapp_images_application_logout_png = __webpack_require__(/*! ./MDKDemoApp/Images/Application/logout.png */ "./build.definitions/MDKDemoApp/Images/Application/logout.png")
let mdkdemoapp_images_application_person_png = __webpack_require__(/*! ./MDKDemoApp/Images/Application/person.png */ "./build.definitions/MDKDemoApp/Images/Application/person.png")
let mdkdemoapp_images_application_settings_png = __webpack_require__(/*! ./MDKDemoApp/Images/Application/settings.png */ "./build.definitions/MDKDemoApp/Images/Application/settings.png")
let mdkdemoapp_images_application_sync_png = __webpack_require__(/*! ./MDKDemoApp/Images/Application/sync.png */ "./build.definitions/MDKDemoApp/Images/Application/sync.png")
let mdkdemoapp_images_application_update__check_png = __webpack_require__(/*! ./MDKDemoApp/Images/Application/update-check.png */ "./build.definitions/MDKDemoApp/Images/Application/update-check.png")
let mdkdemoapp_images_ios_user__26_png = __webpack_require__(/*! ./MDKDemoApp/Images/iOS/user-26.png */ "./build.definitions/MDKDemoApp/Images/iOS/user-26.png")
let mdkdemoapp_images_ios_user_png = __webpack_require__(/*! ./MDKDemoApp/Images/iOS/user.png */ "./build.definitions/MDKDemoApp/Images/iOS/user.png")
let mdkdemoapp_images_mdk_logo_png = __webpack_require__(/*! ./MDKDemoApp/Images/mdk_logo.png */ "./build.definitions/MDKDemoApp/Images/mdk_logo.png")
let mdkdemoapp_images_web_user__blue__40_png = __webpack_require__(/*! ./MDKDemoApp/Images/Web/user-blue-40.png */ "./build.definitions/MDKDemoApp/Images/Web/user-blue-40.png")
let mdkdemoapp_jsconfig_json = __webpack_require__(/*! ./MDKDemoApp/jsconfig.json */ "./build.definitions/MDKDemoApp/jsconfig.json")
let mdkdemoapp_pages_application_about_page = __webpack_require__(/*! ./MDKDemoApp/Pages/Application/About.page */ "./build.definitions/MDKDemoApp/Pages/Application/About.page")
let mdkdemoapp_pages_application_support_page = __webpack_require__(/*! ./MDKDemoApp/Pages/Application/Support.page */ "./build.definitions/MDKDemoApp/Pages/Application/Support.page")
let mdkdemoapp_pages_application_useractivitylog_page = __webpack_require__(/*! ./MDKDemoApp/Pages/Application/UserActivityLog.page */ "./build.definitions/MDKDemoApp/Pages/Application/UserActivityLog.page")
let mdkdemoapp_pages_customer_customer_detail_page = __webpack_require__(/*! ./MDKDemoApp/Pages/Customer/Customer_Detail.page */ "./build.definitions/MDKDemoApp/Pages/Customer/Customer_Detail.page")
let mdkdemoapp_pages_customer_customer_list_page = __webpack_require__(/*! ./MDKDemoApp/Pages/Customer/Customer_List.page */ "./build.definitions/MDKDemoApp/Pages/Customer/Customer_List.page")
let mdkdemoapp_pages_customer_customer_salesorders_page = __webpack_require__(/*! ./MDKDemoApp/Pages/Customer/Customer_SalesOrders.page */ "./build.definitions/MDKDemoApp/Pages/Customer/Customer_SalesOrders.page")
let mdkdemoapp_pages_dashboard_dashboard_imgpromos_page = __webpack_require__(/*! ./MDKDemoApp/Pages/Dashboard/Dashboard_ImgPromos.page */ "./build.definitions/MDKDemoApp/Pages/Dashboard/Dashboard_ImgPromos.page")
let mdkdemoapp_pages_dashboard_dashboard_objpromos_page = __webpack_require__(/*! ./MDKDemoApp/Pages/Dashboard/Dashboard_ObjPromos.page */ "./build.definitions/MDKDemoApp/Pages/Dashboard/Dashboard_ObjPromos.page")
let mdkdemoapp_pages_product_product_detail_edit_page = __webpack_require__(/*! ./MDKDemoApp/Pages/Product/Product_Detail_Edit.page */ "./build.definitions/MDKDemoApp/Pages/Product/Product_Detail_Edit.page")
let mdkdemoapp_pages_product_product_detail_page = __webpack_require__(/*! ./MDKDemoApp/Pages/Product/Product_Detail.page */ "./build.definitions/MDKDemoApp/Pages/Product/Product_Detail.page")
let mdkdemoapp_pages_product_product_filter_page = __webpack_require__(/*! ./MDKDemoApp/Pages/Product/Product_Filter.page */ "./build.definitions/MDKDemoApp/Pages/Product/Product_Filter.page")
let mdkdemoapp_pages_product_product_list_page = __webpack_require__(/*! ./MDKDemoApp/Pages/Product/Product_List.page */ "./build.definitions/MDKDemoApp/Pages/Product/Product_List.page")
let mdkdemoapp_pages_salesorder_salesorder_detail_page = __webpack_require__(/*! ./MDKDemoApp/Pages/SalesOrder/SalesOrder_Detail.page */ "./build.definitions/MDKDemoApp/Pages/SalesOrder/SalesOrder_Detail.page")
let mdkdemoapp_rules_application_appupdateresult_js = __webpack_require__(/*! ./MDKDemoApp/Rules/Application/AppUpdateResult.js */ "./build.definitions/MDKDemoApp/Rules/Application/AppUpdateResult.js")
let mdkdemoapp_rules_application_getclientsupportversions_js = __webpack_require__(/*! ./MDKDemoApp/Rules/Application/GetClientSupportVersions.js */ "./build.definitions/MDKDemoApp/Rules/Application/GetClientSupportVersions.js")
let mdkdemoapp_rules_application_getclientversion_js = __webpack_require__(/*! ./MDKDemoApp/Rules/Application/GetClientVersion.js */ "./build.definitions/MDKDemoApp/Rules/Application/GetClientVersion.js")
let mdkdemoapp_rules_application_onwillupdate_js = __webpack_require__(/*! ./MDKDemoApp/Rules/Application/OnWillUpdate.js */ "./build.definitions/MDKDemoApp/Rules/Application/OnWillUpdate.js")
let mdkdemoapp_rules_application_resetappsettingsandlogout_js = __webpack_require__(/*! ./MDKDemoApp/Rules/Application/ResetAppSettingsAndLogout.js */ "./build.definitions/MDKDemoApp/Rules/Application/ResetAppSettingsAndLogout.js")
let mdkdemoapp_rules_customer_customercount_js = __webpack_require__(/*! ./MDKDemoApp/Rules/Customer/CustomerCount.js */ "./build.definitions/MDKDemoApp/Rules/Customer/CustomerCount.js")
let mdkdemoapp_rules_customer_customercountlabel_js = __webpack_require__(/*! ./MDKDemoApp/Rules/Customer/CustomerCountLabel.js */ "./build.definitions/MDKDemoApp/Rules/Customer/CustomerCountLabel.js")
let mdkdemoapp_rules_customer_formataddress_js = __webpack_require__(/*! ./MDKDemoApp/Rules/Customer/FormatAddress.js */ "./build.definitions/MDKDemoApp/Rules/Customer/FormatAddress.js")
let mdkdemoapp_rules_customer_getlargecustomeravatarurl_js = __webpack_require__(/*! ./MDKDemoApp/Rules/Customer/GetLargeCustomerAvatarURL.js */ "./build.definitions/MDKDemoApp/Rules/Customer/GetLargeCustomerAvatarURL.js")
let mdkdemoapp_rules_customer_getsmallcustomeravatarurl_js = __webpack_require__(/*! ./MDKDemoApp/Rules/Customer/GetSmallCustomerAvatarURL.js */ "./build.definitions/MDKDemoApp/Rules/Customer/GetSmallCustomerAvatarURL.js")
let mdkdemoapp_rules_customer_openmap_js = __webpack_require__(/*! ./MDKDemoApp/Rules/Customer/OpenMap.js */ "./build.definitions/MDKDemoApp/Rules/Customer/OpenMap.js")
let mdkdemoapp_rules_customer_topcustomersqo_js = __webpack_require__(/*! ./MDKDemoApp/Rules/Customer/TopCustomersQO.js */ "./build.definitions/MDKDemoApp/Rules/Customer/TopCustomersQO.js")
let mdkdemoapp_rules_dashboard_daysleftinquarter_js = __webpack_require__(/*! ./MDKDemoApp/Rules/Dashboard/daysLeftInQuarter.js */ "./build.definitions/MDKDemoApp/Rules/Dashboard/daysLeftInQuarter.js")
let mdkdemoapp_rules_dashboard_getcurrentquarter_js = __webpack_require__(/*! ./MDKDemoApp/Rules/Dashboard/getCurrentQuarter.js */ "./build.definitions/MDKDemoApp/Rules/Dashboard/getCurrentQuarter.js")
let mdkdemoapp_rules_dashboard_getdashboardtags_js = __webpack_require__(/*! ./MDKDemoApp/Rules/Dashboard/GetDashboardTags.js */ "./build.definitions/MDKDemoApp/Rules/Dashboard/GetDashboardTags.js")
let mdkdemoapp_rules_dashboard_versionstring_js = __webpack_require__(/*! ./MDKDemoApp/Rules/Dashboard/versionString.js */ "./build.definitions/MDKDemoApp/Rules/Dashboard/versionString.js")
let mdkdemoapp_rules_getavatarurl_js = __webpack_require__(/*! ./MDKDemoApp/Rules/GetAvatarURL.js */ "./build.definitions/MDKDemoApp/Rules/GetAvatarURL.js")
let mdkdemoapp_rules_logging_loglevels_js = __webpack_require__(/*! ./MDKDemoApp/Rules/Logging/LogLevels.js */ "./build.definitions/MDKDemoApp/Rules/Logging/LogLevels.js")
let mdkdemoapp_rules_logging_setuserloglevel_js = __webpack_require__(/*! ./MDKDemoApp/Rules/Logging/SetUserLogLevel.js */ "./build.definitions/MDKDemoApp/Rules/Logging/SetUserLogLevel.js")
let mdkdemoapp_rules_logging_togglelogging_js = __webpack_require__(/*! ./MDKDemoApp/Rules/Logging/ToggleLogging.js */ "./build.definitions/MDKDemoApp/Rules/Logging/ToggleLogging.js")
let mdkdemoapp_rules_logging_userlogsetting_js = __webpack_require__(/*! ./MDKDemoApp/Rules/Logging/UserLogSetting.js */ "./build.definitions/MDKDemoApp/Rules/Logging/UserLogSetting.js")
let mdkdemoapp_rules_product_getproductimage_js = __webpack_require__(/*! ./MDKDemoApp/Rules/Product/GetProductImage.js */ "./build.definitions/MDKDemoApp/Rules/Product/GetProductImage.js")
let mdkdemoapp_rules_product_getpromodiscount_js = __webpack_require__(/*! ./MDKDemoApp/Rules/Product/GetPromoDiscount.js */ "./build.definitions/MDKDemoApp/Rules/Product/GetPromoDiscount.js")
let mdkdemoapp_rules_product_percentoff_js = __webpack_require__(/*! ./MDKDemoApp/Rules/Product/PercentOff.js */ "./build.definitions/MDKDemoApp/Rules/Product/PercentOff.js")
let mdkdemoapp_rules_product_productcount_js = __webpack_require__(/*! ./MDKDemoApp/Rules/Product/ProductCount.js */ "./build.definitions/MDKDemoApp/Rules/Product/ProductCount.js")
let mdkdemoapp_rules_product_productcountlabel_js = __webpack_require__(/*! ./MDKDemoApp/Rules/Product/ProductCountLabel.js */ "./build.definitions/MDKDemoApp/Rules/Product/ProductCountLabel.js")
let mdkdemoapp_rules_product_productlistcaption_js = __webpack_require__(/*! ./MDKDemoApp/Rules/Product/ProductListCaption.js */ "./build.definitions/MDKDemoApp/Rules/Product/ProductListCaption.js")
let mdkdemoapp_rules_product_productonpromofilter_js = __webpack_require__(/*! ./MDKDemoApp/Rules/Product/ProductOnPromoFilter.js */ "./build.definitions/MDKDemoApp/Rules/Product/ProductOnPromoFilter.js")
let mdkdemoapp_rules_product_promotionalitemsqo_js = __webpack_require__(/*! ./MDKDemoApp/Rules/Product/PromotionalItemsQO.js */ "./build.definitions/MDKDemoApp/Rules/Product/PromotionalItemsQO.js")
let mdkdemoapp_rules_product_resetfilter_js = __webpack_require__(/*! ./MDKDemoApp/Rules/Product/ResetFilter.js */ "./build.definitions/MDKDemoApp/Rules/Product/ResetFilter.js")
let mdkdemoapp_rules_salesorder_showsalesorder_item_product_js = __webpack_require__(/*! ./MDKDemoApp/Rules/SalesOrder/ShowSalesOrder_Item_Product.js */ "./build.definitions/MDKDemoApp/Rules/SalesOrder/ShowSalesOrder_Item_Product.js")
let mdkdemoapp_rules_service_initializeapplication_js = __webpack_require__(/*! ./MDKDemoApp/Rules/Service/InitializeApplication.js */ "./build.definitions/MDKDemoApp/Rules/Service/InitializeApplication.js")
let mdkdemoapp_rules_user_getlargeuseravatarurl_js = __webpack_require__(/*! ./MDKDemoApp/Rules/User/GetLargeUserAvatarURL.js */ "./build.definitions/MDKDemoApp/Rules/User/GetLargeUserAvatarURL.js")
let mdkdemoapp_rules_user_getsmalluseravatarurl_js = __webpack_require__(/*! ./MDKDemoApp/Rules/User/GetSmallUserAvatarURL.js */ "./build.definitions/MDKDemoApp/Rules/User/GetSmallUserAvatarURL.js")
let mdkdemoapp_rules_user_getuseremail_js = __webpack_require__(/*! ./MDKDemoApp/Rules/User/GetUserEmail.js */ "./build.definitions/MDKDemoApp/Rules/User/GetUserEmail.js")
let mdkdemoapp_rules_user_getuserfullname_js = __webpack_require__(/*! ./MDKDemoApp/Rules/User/GetUserFullName.js */ "./build.definitions/MDKDemoApp/Rules/User/GetUserFullName.js")
let mdkdemoapp_rules_user_storeuserinfo_js = __webpack_require__(/*! ./MDKDemoApp/Rules/User/StoreUserInfo.js */ "./build.definitions/MDKDemoApp/Rules/User/StoreUserInfo.js")
let mdkdemoapp_services_sample_service = __webpack_require__(/*! ./MDKDemoApp/Services/Sample.service */ "./build.definitions/MDKDemoApp/Services/Sample.service")
let mdkdemoapp_styles_styles_css = __webpack_require__(/*! ./MDKDemoApp/Styles/Styles.css */ "./build.definitions/MDKDemoApp/Styles/Styles.css")
let mdkdemoapp_styles_styles_dark_css = __webpack_require__(/*! ./MDKDemoApp/Styles/Styles.dark.css */ "./build.definitions/MDKDemoApp/Styles/Styles.dark.css")
let mdkdemoapp_styles_styles_dark_json = __webpack_require__(/*! ./MDKDemoApp/Styles/Styles.dark.json */ "./build.definitions/MDKDemoApp/Styles/Styles.dark.json")
let mdkdemoapp_styles_styles_dark_less = __webpack_require__(/*! ./MDKDemoApp/Styles/Styles.dark.less */ "./build.definitions/MDKDemoApp/Styles/Styles.dark.less")
let mdkdemoapp_styles_styles_dark_nss = __webpack_require__(/*! ./MDKDemoApp/Styles/Styles.dark.nss */ "./build.definitions/MDKDemoApp/Styles/Styles.dark.nss")
let mdkdemoapp_styles_styles_json = __webpack_require__(/*! ./MDKDemoApp/Styles/Styles.json */ "./build.definitions/MDKDemoApp/Styles/Styles.json")
let mdkdemoapp_styles_styles_less = __webpack_require__(/*! ./MDKDemoApp/Styles/Styles.less */ "./build.definitions/MDKDemoApp/Styles/Styles.less")
let mdkdemoapp_styles_styles_light_css = __webpack_require__(/*! ./MDKDemoApp/Styles/Styles.light.css */ "./build.definitions/MDKDemoApp/Styles/Styles.light.css")
let mdkdemoapp_styles_styles_light_json = __webpack_require__(/*! ./MDKDemoApp/Styles/Styles.light.json */ "./build.definitions/MDKDemoApp/Styles/Styles.light.json")
let mdkdemoapp_styles_styles_light_less = __webpack_require__(/*! ./MDKDemoApp/Styles/Styles.light.less */ "./build.definitions/MDKDemoApp/Styles/Styles.light.less")
let mdkdemoapp_styles_styles_light_nss = __webpack_require__(/*! ./MDKDemoApp/Styles/Styles.light.nss */ "./build.definitions/MDKDemoApp/Styles/Styles.light.nss")
let mdkdemoapp_styles_styles_nss = __webpack_require__(/*! ./MDKDemoApp/Styles/Styles.nss */ "./build.definitions/MDKDemoApp/Styles/Styles.nss")
let tsconfig_json = __webpack_require__(/*! ./tsconfig.json */ "./build.definitions/tsconfig.json")
let version_mdkbundlerversion = __webpack_require__(/*! ./version.mdkbundlerversion */ "./build.definitions/version.mdkbundlerversion")

module.exports = {
	application_app : application_app,
	mdkdemoapp_actions_application_appupdatecheck_action : mdkdemoapp_actions_application_appupdatecheck_action,
	mdkdemoapp_actions_application_appupdateprogressbanner_action : mdkdemoapp_actions_application_appupdateprogressbanner_action,
	mdkdemoapp_actions_application_checkforupdatesprogress_action : mdkdemoapp_actions_application_checkforupdatesprogress_action,
	mdkdemoapp_actions_application_navtoabout_action : mdkdemoapp_actions_application_navtoabout_action,
	mdkdemoapp_actions_application_navtoactivitylog_action : mdkdemoapp_actions_application_navtoactivitylog_action,
	mdkdemoapp_actions_application_navtosupport_action : mdkdemoapp_actions_application_navtosupport_action,
	mdkdemoapp_actions_application_onwillupdate_action : mdkdemoapp_actions_application_onwillupdate_action,
	mdkdemoapp_actions_application_usermenupopover_action : mdkdemoapp_actions_application_usermenupopover_action,
	mdkdemoapp_actions_closemodalcanceled_action : mdkdemoapp_actions_closemodalcanceled_action,
	mdkdemoapp_actions_closemodalcomplete_action : mdkdemoapp_actions_closemodalcomplete_action,
	mdkdemoapp_actions_closepage_action : mdkdemoapp_actions_closepage_action,
	mdkdemoapp_actions_customer_navtocustomer_detail_action : mdkdemoapp_actions_customer_navtocustomer_detail_action,
	mdkdemoapp_actions_customer_navtocustomer_list_action : mdkdemoapp_actions_customer_navtocustomer_list_action,
	mdkdemoapp_actions_customer_navtocustomer_salesorders_action : mdkdemoapp_actions_customer_navtocustomer_salesorders_action,
	mdkdemoapp_actions_genericbannermessage_action : mdkdemoapp_actions_genericbannermessage_action,
	mdkdemoapp_actions_genericmessagebox_action : mdkdemoapp_actions_genericmessagebox_action,
	mdkdemoapp_actions_genericnavigation_action : mdkdemoapp_actions_genericnavigation_action,
	mdkdemoapp_actions_genericprogressbanner_action : mdkdemoapp_actions_genericprogressbanner_action,
	mdkdemoapp_actions_generictoastmessage_action : mdkdemoapp_actions_generictoastmessage_action,
	mdkdemoapp_actions_logging_loguploadfailure_action : mdkdemoapp_actions_logging_loguploadfailure_action,
	mdkdemoapp_actions_logging_loguploadsuccessful_action : mdkdemoapp_actions_logging_loguploadsuccessful_action,
	mdkdemoapp_actions_logging_uploadlog_action : mdkdemoapp_actions_logging_uploadlog_action,
	mdkdemoapp_actions_logging_uploadlogprogress_action : mdkdemoapp_actions_logging_uploadlogprogress_action,
	mdkdemoapp_actions_logout_action : mdkdemoapp_actions_logout_action,
	mdkdemoapp_actions_logoutconfirmation_action : mdkdemoapp_actions_logoutconfirmation_action,
	mdkdemoapp_actions_product_downloadproductimage_action : mdkdemoapp_actions_product_downloadproductimage_action,
	mdkdemoapp_actions_product_downloadproductstream_action : mdkdemoapp_actions_product_downloadproductstream_action,
	mdkdemoapp_actions_product_navtoproduct_detail_action : mdkdemoapp_actions_product_navtoproduct_detail_action,
	mdkdemoapp_actions_product_navtoproduct_detail_edit_action : mdkdemoapp_actions_product_navtoproduct_detail_edit_action,
	mdkdemoapp_actions_product_navtoproduct_list_action : mdkdemoapp_actions_product_navtoproduct_list_action,
	mdkdemoapp_actions_product_productfilter_action : mdkdemoapp_actions_product_productfilter_action,
	mdkdemoapp_actions_product_updateproductdetails_action : mdkdemoapp_actions_product_updateproductdetails_action,
	mdkdemoapp_actions_salesorder_navtosalesorder_detail_action : mdkdemoapp_actions_salesorder_navtosalesorder_detail_action,
	mdkdemoapp_actions_service_closeoffline_action : mdkdemoapp_actions_service_closeoffline_action,
	mdkdemoapp_actions_service_downloadprogress_action : mdkdemoapp_actions_service_downloadprogress_action,
	mdkdemoapp_actions_service_initialize_action : mdkdemoapp_actions_service_initialize_action,
	mdkdemoapp_actions_service_initializesuccessmessage_action : mdkdemoapp_actions_service_initializesuccessmessage_action,
	mdkdemoapp_actions_service_offlinedownload_action : mdkdemoapp_actions_service_offlinedownload_action,
	mdkdemoapp_actions_service_offlineupload_action : mdkdemoapp_actions_service_offlineupload_action,
	mdkdemoapp_actions_service_startsync_action : mdkdemoapp_actions_service_startsync_action,
	mdkdemoapp_globals_application_appdefinition_version_global : mdkdemoapp_globals_application_appdefinition_version_global,
	mdkdemoapp_globals_application_applicationname_global : mdkdemoapp_globals_application_applicationname_global,
	mdkdemoapp_globals_usermenu_usersupportemail_global : mdkdemoapp_globals_usermenu_usersupportemail_global,
	mdkdemoapp_globals_usermenu_usersupportfacetime_global : mdkdemoapp_globals_usermenu_usersupportfacetime_global,
	mdkdemoapp_globals_usermenu_usersupportphone_global : mdkdemoapp_globals_usermenu_usersupportphone_global,
	mdkdemoapp_i18n_i18n_properties : mdkdemoapp_i18n_i18n_properties,
	mdkdemoapp_images_android_user__60_png : mdkdemoapp_images_android_user__60_png,
	mdkdemoapp_images_application_about_png : mdkdemoapp_images_application_about_png,
	mdkdemoapp_images_application_app__settings_png : mdkdemoapp_images_application_app__settings_png,
	mdkdemoapp_images_application_headset_png : mdkdemoapp_images_application_headset_png,
	mdkdemoapp_images_application_logout_png : mdkdemoapp_images_application_logout_png,
	mdkdemoapp_images_application_person_png : mdkdemoapp_images_application_person_png,
	mdkdemoapp_images_application_settings_png : mdkdemoapp_images_application_settings_png,
	mdkdemoapp_images_application_sync_png : mdkdemoapp_images_application_sync_png,
	mdkdemoapp_images_application_update__check_png : mdkdemoapp_images_application_update__check_png,
	mdkdemoapp_images_ios_user__26_png : mdkdemoapp_images_ios_user__26_png,
	mdkdemoapp_images_ios_user_png : mdkdemoapp_images_ios_user_png,
	mdkdemoapp_images_mdk_logo_png : mdkdemoapp_images_mdk_logo_png,
	mdkdemoapp_images_web_user__blue__40_png : mdkdemoapp_images_web_user__blue__40_png,
	mdkdemoapp_jsconfig_json : mdkdemoapp_jsconfig_json,
	mdkdemoapp_pages_application_about_page : mdkdemoapp_pages_application_about_page,
	mdkdemoapp_pages_application_support_page : mdkdemoapp_pages_application_support_page,
	mdkdemoapp_pages_application_useractivitylog_page : mdkdemoapp_pages_application_useractivitylog_page,
	mdkdemoapp_pages_customer_customer_detail_page : mdkdemoapp_pages_customer_customer_detail_page,
	mdkdemoapp_pages_customer_customer_list_page : mdkdemoapp_pages_customer_customer_list_page,
	mdkdemoapp_pages_customer_customer_salesorders_page : mdkdemoapp_pages_customer_customer_salesorders_page,
	mdkdemoapp_pages_dashboard_dashboard_imgpromos_page : mdkdemoapp_pages_dashboard_dashboard_imgpromos_page,
	mdkdemoapp_pages_dashboard_dashboard_objpromos_page : mdkdemoapp_pages_dashboard_dashboard_objpromos_page,
	mdkdemoapp_pages_product_product_detail_edit_page : mdkdemoapp_pages_product_product_detail_edit_page,
	mdkdemoapp_pages_product_product_detail_page : mdkdemoapp_pages_product_product_detail_page,
	mdkdemoapp_pages_product_product_filter_page : mdkdemoapp_pages_product_product_filter_page,
	mdkdemoapp_pages_product_product_list_page : mdkdemoapp_pages_product_product_list_page,
	mdkdemoapp_pages_salesorder_salesorder_detail_page : mdkdemoapp_pages_salesorder_salesorder_detail_page,
	mdkdemoapp_rules_application_appupdateresult_js : mdkdemoapp_rules_application_appupdateresult_js,
	mdkdemoapp_rules_application_getclientsupportversions_js : mdkdemoapp_rules_application_getclientsupportversions_js,
	mdkdemoapp_rules_application_getclientversion_js : mdkdemoapp_rules_application_getclientversion_js,
	mdkdemoapp_rules_application_onwillupdate_js : mdkdemoapp_rules_application_onwillupdate_js,
	mdkdemoapp_rules_application_resetappsettingsandlogout_js : mdkdemoapp_rules_application_resetappsettingsandlogout_js,
	mdkdemoapp_rules_customer_customercount_js : mdkdemoapp_rules_customer_customercount_js,
	mdkdemoapp_rules_customer_customercountlabel_js : mdkdemoapp_rules_customer_customercountlabel_js,
	mdkdemoapp_rules_customer_formataddress_js : mdkdemoapp_rules_customer_formataddress_js,
	mdkdemoapp_rules_customer_getlargecustomeravatarurl_js : mdkdemoapp_rules_customer_getlargecustomeravatarurl_js,
	mdkdemoapp_rules_customer_getsmallcustomeravatarurl_js : mdkdemoapp_rules_customer_getsmallcustomeravatarurl_js,
	mdkdemoapp_rules_customer_openmap_js : mdkdemoapp_rules_customer_openmap_js,
	mdkdemoapp_rules_customer_topcustomersqo_js : mdkdemoapp_rules_customer_topcustomersqo_js,
	mdkdemoapp_rules_dashboard_daysleftinquarter_js : mdkdemoapp_rules_dashboard_daysleftinquarter_js,
	mdkdemoapp_rules_dashboard_getcurrentquarter_js : mdkdemoapp_rules_dashboard_getcurrentquarter_js,
	mdkdemoapp_rules_dashboard_getdashboardtags_js : mdkdemoapp_rules_dashboard_getdashboardtags_js,
	mdkdemoapp_rules_dashboard_versionstring_js : mdkdemoapp_rules_dashboard_versionstring_js,
	mdkdemoapp_rules_getavatarurl_js : mdkdemoapp_rules_getavatarurl_js,
	mdkdemoapp_rules_logging_loglevels_js : mdkdemoapp_rules_logging_loglevels_js,
	mdkdemoapp_rules_logging_setuserloglevel_js : mdkdemoapp_rules_logging_setuserloglevel_js,
	mdkdemoapp_rules_logging_togglelogging_js : mdkdemoapp_rules_logging_togglelogging_js,
	mdkdemoapp_rules_logging_userlogsetting_js : mdkdemoapp_rules_logging_userlogsetting_js,
	mdkdemoapp_rules_product_getproductimage_js : mdkdemoapp_rules_product_getproductimage_js,
	mdkdemoapp_rules_product_getpromodiscount_js : mdkdemoapp_rules_product_getpromodiscount_js,
	mdkdemoapp_rules_product_percentoff_js : mdkdemoapp_rules_product_percentoff_js,
	mdkdemoapp_rules_product_productcount_js : mdkdemoapp_rules_product_productcount_js,
	mdkdemoapp_rules_product_productcountlabel_js : mdkdemoapp_rules_product_productcountlabel_js,
	mdkdemoapp_rules_product_productlistcaption_js : mdkdemoapp_rules_product_productlistcaption_js,
	mdkdemoapp_rules_product_productonpromofilter_js : mdkdemoapp_rules_product_productonpromofilter_js,
	mdkdemoapp_rules_product_promotionalitemsqo_js : mdkdemoapp_rules_product_promotionalitemsqo_js,
	mdkdemoapp_rules_product_resetfilter_js : mdkdemoapp_rules_product_resetfilter_js,
	mdkdemoapp_rules_salesorder_showsalesorder_item_product_js : mdkdemoapp_rules_salesorder_showsalesorder_item_product_js,
	mdkdemoapp_rules_service_initializeapplication_js : mdkdemoapp_rules_service_initializeapplication_js,
	mdkdemoapp_rules_user_getlargeuseravatarurl_js : mdkdemoapp_rules_user_getlargeuseravatarurl_js,
	mdkdemoapp_rules_user_getsmalluseravatarurl_js : mdkdemoapp_rules_user_getsmalluseravatarurl_js,
	mdkdemoapp_rules_user_getuseremail_js : mdkdemoapp_rules_user_getuseremail_js,
	mdkdemoapp_rules_user_getuserfullname_js : mdkdemoapp_rules_user_getuserfullname_js,
	mdkdemoapp_rules_user_storeuserinfo_js : mdkdemoapp_rules_user_storeuserinfo_js,
	mdkdemoapp_services_sample_service : mdkdemoapp_services_sample_service,
	mdkdemoapp_styles_styles_css : mdkdemoapp_styles_styles_css,
	mdkdemoapp_styles_styles_dark_css : mdkdemoapp_styles_styles_dark_css,
	mdkdemoapp_styles_styles_dark_json : mdkdemoapp_styles_styles_dark_json,
	mdkdemoapp_styles_styles_dark_less : mdkdemoapp_styles_styles_dark_less,
	mdkdemoapp_styles_styles_dark_nss : mdkdemoapp_styles_styles_dark_nss,
	mdkdemoapp_styles_styles_json : mdkdemoapp_styles_styles_json,
	mdkdemoapp_styles_styles_less : mdkdemoapp_styles_styles_less,
	mdkdemoapp_styles_styles_light_css : mdkdemoapp_styles_styles_light_css,
	mdkdemoapp_styles_styles_light_json : mdkdemoapp_styles_styles_light_json,
	mdkdemoapp_styles_styles_light_less : mdkdemoapp_styles_styles_light_less,
	mdkdemoapp_styles_styles_light_nss : mdkdemoapp_styles_styles_light_nss,
	mdkdemoapp_styles_styles_nss : mdkdemoapp_styles_styles_nss,
	tsconfig_json : tsconfig_json,
	version_mdkbundlerversion : version_mdkbundlerversion
}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Styles/Styles.css":
/*!********************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Styles/Styles.css ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.

Examples:

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;

//// By-Type style: All Pages in the application will now have a yellow background
div.MDKPage

{ background-color: @mdkYellow1; }
//// By-Name style: All Buttons with _Name == "BlueButton" will now have this style
#BlueButton

{ color: @mdkYellow1; background-color: #0000FF; }
//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function

.MyButton

{ color: @mdkYellow1; background-color: @mdkRed1; }
*/
.Discount {
  font-color: #ff0000;
}
.Price {
  font-color: #000000;
}
`, "",{"version":3,"sources":["webpack://./build.definitions/MDKDemoApp/Styles/Styles.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC;AACD;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\ndiv.MDKPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/\n.Discount {\n  font-color: #ff0000;\n}\n.Price {\n  font-color: #000000;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/MDKDemoApp/Styles/Styles.dark.css":
/*!*************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Styles/Styles.dark.css ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.

Examples:

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;

//// By-Type style: All Pages in the application will now have a yellow background
div.MDKPage

{ background-color: @mdkYellow1; }
//// By-Name style: All Buttons with _Name == "BlueButton" will now have this style
#BlueButton

{ color: @mdkYellow1; background-color: #0000FF; }
//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function

.MyButton

{ color: @mdkYellow1; background-color: @mdkRed1; }
*/
.Discount {
  font-color: #ff0000;
}
.Price {
  font-color: #000000;
}
.tagStyleRed {
  font-color: #FFB2D2;
  background-color: #840606;
}
.tagStyleBlue {
  font-color: #A6E0FF;
  background-color: #0040B0;
}
.tagStyleGreen {
  font-color: #BDE986;
  background-color: #1E592F;
}
.tagStylePink {
  font-color: #FFAFED;
  background-color: #7800A4;
}
.tagStyleIndigo {
  font-color: #D3B6FF;
  background-color: #2C13AD;
}
.tagStyleMango {
  font-color: #FFDF72;
  background-color: #8D2A00;
}
.tagStyleTeal {
  font-color: #64EDD2;
  background-color: #035663;
}
.tagStyleGrey {
  font-color: #D5DADD;
  background-color: #223548;
}
`, "",{"version":3,"sources":["webpack://./build.definitions/MDKDemoApp/Styles/Styles.dark.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC;AACD;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;EACnB,yBAAyB;AAC3B;AACA;EACE,mBAAmB;EACnB,yBAAyB;AAC3B;AACA;EACE,mBAAmB;EACnB,yBAAyB;AAC3B;AACA;EACE,mBAAmB;EACnB,yBAAyB;AAC3B;AACA;EACE,mBAAmB;EACnB,yBAAyB;AAC3B;AACA;EACE,mBAAmB;EACnB,yBAAyB;AAC3B;AACA;EACE,mBAAmB;EACnB,yBAAyB;AAC3B;AACA;EACE,mBAAmB;EACnB,yBAAyB;AAC3B","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\ndiv.MDKPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/\n.Discount {\n  font-color: #ff0000;\n}\n.Price {\n  font-color: #000000;\n}\n.tagStyleRed {\n  font-color: #FFB2D2;\n  background-color: #840606;\n}\n.tagStyleBlue {\n  font-color: #A6E0FF;\n  background-color: #0040B0;\n}\n.tagStyleGreen {\n  font-color: #BDE986;\n  background-color: #1E592F;\n}\n.tagStylePink {\n  font-color: #FFAFED;\n  background-color: #7800A4;\n}\n.tagStyleIndigo {\n  font-color: #D3B6FF;\n  background-color: #2C13AD;\n}\n.tagStyleMango {\n  font-color: #FFDF72;\n  background-color: #8D2A00;\n}\n.tagStyleTeal {\n  font-color: #64EDD2;\n  background-color: #035663;\n}\n.tagStyleGrey {\n  font-color: #D5DADD;\n  background-color: #223548;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/MDKDemoApp/Styles/Styles.dark.less":
/*!**************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Styles/Styles.dark.less ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.

Examples:

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;

//// By-Type style: All Pages in the application will now have a yellow background
Page

{ background-color: @mdkYellow1; }
//// By-Name style: All Buttons with _Name == "BlueButton" will now have this style
#BlueButton

{ color: @mdkYellow1; background-color: #0000FF; }
//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function

.MyButton

{ color: @mdkYellow1; background-color: @mdkRed1; }
*/

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;
@mdkBlack: #000000;

.Discount {
    font-color: @mdkRed1;
}

.Price {
    font-color: @mdkBlack;
}


.tagStyleRed {
    font-color: #FFB2D2;
    background-color: #840606;   
}

.tagStyleBlue {
    font-color: #A6E0FF;
    background-color: #0040B0; 
}

.tagStyleGreen {
    font-color: #BDE986;
    background-color: #1E592F; 
}

.tagStylePink {
    font-color: #FFAFED;
    background-color: #7800A4; 
}

.tagStyleIndigo {
    font-color: #D3B6FF;
    background-color: #2C13AD; 
}

.tagStyleMango {
    font-color: #FFDF72;
    background-color: #8D2A00; 
}

.tagStyleTeal {
    font-color: #64EDD2;
    background-color: #035663; 
}

.tagStyleGrey {
    font-color: #D5DADD;
    background-color: #223548; 
}


`, "",{"version":3,"sources":["webpack://./build.definitions/MDKDemoApp/Styles/Styles.dark.less"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC;;AAED,oBAAoB;AACpB,iBAAiB;AACjB,kBAAkB;;AAElB;IACI,oBAAoB;AACxB;;AAEA;IACI,qBAAqB;AACzB;;;AAGA;IACI,mBAAmB;IACnB,yBAAyB;AAC7B;;AAEA;IACI,mBAAmB;IACnB,yBAAyB;AAC7B;;AAEA;IACI,mBAAmB;IACnB,yBAAyB;AAC7B;;AAEA;IACI,mBAAmB;IACnB,yBAAyB;AAC7B;;AAEA;IACI,mBAAmB;IACnB,yBAAyB;AAC7B;;AAEA;IACI,mBAAmB;IACnB,yBAAyB;AAC7B;;AAEA;IACI,mBAAmB;IACnB,yBAAyB;AAC7B;;AAEA;IACI,mBAAmB;IACnB,yBAAyB;AAC7B","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\nPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n@mdkBlack: #000000;\n\n.Discount {\n    font-color: @mdkRed1;\n}\n\n.Price {\n    font-color: @mdkBlack;\n}\n\n\n.tagStyleRed {\n    font-color: #FFB2D2;\n    background-color: #840606;   \n}\n\n.tagStyleBlue {\n    font-color: #A6E0FF;\n    background-color: #0040B0; \n}\n\n.tagStyleGreen {\n    font-color: #BDE986;\n    background-color: #1E592F; \n}\n\n.tagStylePink {\n    font-color: #FFAFED;\n    background-color: #7800A4; \n}\n\n.tagStyleIndigo {\n    font-color: #D3B6FF;\n    background-color: #2C13AD; \n}\n\n.tagStyleMango {\n    font-color: #FFDF72;\n    background-color: #8D2A00; \n}\n\n.tagStyleTeal {\n    font-color: #64EDD2;\n    background-color: #035663; \n}\n\n.tagStyleGrey {\n    font-color: #D5DADD;\n    background-color: #223548; \n}\n\n\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/MDKDemoApp/Styles/Styles.dark.nss":
/*!*************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Styles/Styles.dark.nss ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;
@mdkBlack: #000000;
Discount {
	font-color: #ff0000;
}
Price {
	font-color: #000000;
}
tagStyleRed {
	font-color: #FFB2D2;
	background-color: #840606;
}
tagStyleBlue {
	font-color: #A6E0FF;
	background-color: #0040B0;
}
tagStyleGreen {
	font-color: #BDE986;
	background-color: #1E592F;
}
tagStylePink {
	font-color: #FFAFED;
	background-color: #7800A4;
}
tagStyleIndigo {
	font-color: #D3B6FF;
	background-color: #2C13AD;
}
tagStyleMango {
	font-color: #FFDF72;
	background-color: #8D2A00;
}
tagStyleTeal {
	font-color: #64EDD2;
	background-color: #035663;
}
tagStyleGrey {
	font-color: #D5DADD;
	background-color: #223548;
}
`, "",{"version":3,"sources":["webpack://./build.definitions/MDKDemoApp/Styles/Styles.dark.nss"],"names":[],"mappings":"AAAA,oBAAoB;AACpB,iBAAiB;AACjB,kBAAkB;AAClB;CACC,mBAAmB;AACpB;AACA;CACC,mBAAmB;AACpB;AACA;CACC,mBAAmB;CACnB,yBAAyB;AAC1B;AACA;CACC,mBAAmB;CACnB,yBAAyB;AAC1B;AACA;CACC,mBAAmB;CACnB,yBAAyB;AAC1B;AACA;CACC,mBAAmB;CACnB,yBAAyB;AAC1B;AACA;CACC,mBAAmB;CACnB,yBAAyB;AAC1B;AACA;CACC,mBAAmB;CACnB,yBAAyB;AAC1B;AACA;CACC,mBAAmB;CACnB,yBAAyB;AAC1B;AACA;CACC,mBAAmB;CACnB,yBAAyB;AAC1B","sourcesContent":["@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n@mdkBlack: #000000;\nDiscount {\n\tfont-color: #ff0000;\n}\nPrice {\n\tfont-color: #000000;\n}\ntagStyleRed {\n\tfont-color: #FFB2D2;\n\tbackground-color: #840606;\n}\ntagStyleBlue {\n\tfont-color: #A6E0FF;\n\tbackground-color: #0040B0;\n}\ntagStyleGreen {\n\tfont-color: #BDE986;\n\tbackground-color: #1E592F;\n}\ntagStylePink {\n\tfont-color: #FFAFED;\n\tbackground-color: #7800A4;\n}\ntagStyleIndigo {\n\tfont-color: #D3B6FF;\n\tbackground-color: #2C13AD;\n}\ntagStyleMango {\n\tfont-color: #FFDF72;\n\tbackground-color: #8D2A00;\n}\ntagStyleTeal {\n\tfont-color: #64EDD2;\n\tbackground-color: #035663;\n}\ntagStyleGrey {\n\tfont-color: #D5DADD;\n\tbackground-color: #223548;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/MDKDemoApp/Styles/Styles.less":
/*!*********************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Styles/Styles.less ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.

Examples:

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;

//// By-Type style: All Pages in the application will now have a yellow background
Page

{ background-color: @mdkYellow1; }
//// By-Name style: All Buttons with _Name == "BlueButton" will now have this style
#BlueButton

{ color: @mdkYellow1; background-color: #0000FF; }
//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function

.MyButton

{ color: @mdkYellow1; background-color: @mdkRed1; }
*/

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;
@mdkBlack: #000000;

.Discount {
    font-color: @mdkRed1;
}

.Price {
    font-color: @mdkBlack;
}`, "",{"version":3,"sources":["webpack://./build.definitions/MDKDemoApp/Styles/Styles.less"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC;;AAED,oBAAoB;AACpB,iBAAiB;AACjB,kBAAkB;;AAElB;IACI,oBAAoB;AACxB;;AAEA;IACI,qBAAqB;AACzB","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\nPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n@mdkBlack: #000000;\n\n.Discount {\n    font-color: @mdkRed1;\n}\n\n.Price {\n    font-color: @mdkBlack;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/MDKDemoApp/Styles/Styles.light.css":
/*!**************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Styles/Styles.light.css ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.

Examples:

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;

//// By-Type style: All Pages in the application will now have a yellow background
div.MDKPage

{ background-color: @mdkYellow1; }
//// By-Name style: All Buttons with _Name == "BlueButton" will now have this style
#BlueButton

{ color: @mdkYellow1; background-color: #0000FF; }
//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function

.MyButton

{ color: @mdkYellow1; background-color: @mdkRed1; }
*/
.Discount {
  font-color: #ff0000;
}
.Price {
  font-color: #000000;
}
.tagStyleRed {
  font-color: #AB0708;
  background-color: #FFDCE8;
}
.tagStyleBlue {
  font-color: #0057D3;
  background-color: #D1EFFF;
}
.tagStyleGreen {
  font-color: #256F3A;
  background-color: #EBF5CC;
}
.tagStylePink {
  font-color: #A111C2;
  background-color: #FFDCF4;
}
.tagStyleIndigo {
  font-color: #470CEE;
  background-color: #E2D8FF;
}
.tagStyleMango {
  font-color: #A93E00;
  background-color: #FFF4B8;
}
.tagStyleTeal {
  font-color: #046C7A;
  background-color: #C2FCEE;
}
.tagStyleGrey {
  font-color: #354B5F;
  background-color: #EAECEE;
}
`, "",{"version":3,"sources":["webpack://./build.definitions/MDKDemoApp/Styles/Styles.light.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC;AACD;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;EACnB,yBAAyB;AAC3B;AACA;EACE,mBAAmB;EACnB,yBAAyB;AAC3B;AACA;EACE,mBAAmB;EACnB,yBAAyB;AAC3B;AACA;EACE,mBAAmB;EACnB,yBAAyB;AAC3B;AACA;EACE,mBAAmB;EACnB,yBAAyB;AAC3B;AACA;EACE,mBAAmB;EACnB,yBAAyB;AAC3B;AACA;EACE,mBAAmB;EACnB,yBAAyB;AAC3B;AACA;EACE,mBAAmB;EACnB,yBAAyB;AAC3B","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\ndiv.MDKPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/\n.Discount {\n  font-color: #ff0000;\n}\n.Price {\n  font-color: #000000;\n}\n.tagStyleRed {\n  font-color: #AB0708;\n  background-color: #FFDCE8;\n}\n.tagStyleBlue {\n  font-color: #0057D3;\n  background-color: #D1EFFF;\n}\n.tagStyleGreen {\n  font-color: #256F3A;\n  background-color: #EBF5CC;\n}\n.tagStylePink {\n  font-color: #A111C2;\n  background-color: #FFDCF4;\n}\n.tagStyleIndigo {\n  font-color: #470CEE;\n  background-color: #E2D8FF;\n}\n.tagStyleMango {\n  font-color: #A93E00;\n  background-color: #FFF4B8;\n}\n.tagStyleTeal {\n  font-color: #046C7A;\n  background-color: #C2FCEE;\n}\n.tagStyleGrey {\n  font-color: #354B5F;\n  background-color: #EAECEE;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/MDKDemoApp/Styles/Styles.light.less":
/*!***************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Styles/Styles.light.less ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.

Examples:

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;

//// By-Type style: All Pages in the application will now have a yellow background
Page

{ background-color: @mdkYellow1; }
//// By-Name style: All Buttons with _Name == "BlueButton" will now have this style
#BlueButton

{ color: @mdkYellow1; background-color: #0000FF; }
//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function

.MyButton

{ color: @mdkYellow1; background-color: @mdkRed1; }
*/

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;
@mdkBlack: #000000;

.Discount {
    font-color: @mdkRed1;
}

.Price {
    font-color: @mdkBlack;
}

.tagStyleRed {
    font-color: #AB0708;
    background-color: #FFDCE8;   
}

.tagStyleBlue {
    font-color: #0057D3;
    background-color: #D1EFFF; 
}

.tagStyleGreen {
    font-color: #256F3A;
    background-color: #EBF5CC; 
}

.tagStylePink {
    font-color: #A111C2;
    background-color: #FFDCF4; 
}

.tagStyleIndigo {
    font-color: #470CEE;
    background-color: #E2D8FF; 
}

.tagStyleMango {
    font-color: #A93E00;
    background-color: #FFF4B8; 
}

.tagStyleTeal {
    font-color: #046C7A;
    background-color: #C2FCEE; 
}

.tagStyleGrey {
    font-color: #354B5F;
    background-color: #EAECEE; 
}`, "",{"version":3,"sources":["webpack://./build.definitions/MDKDemoApp/Styles/Styles.light.less"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC;;AAED,oBAAoB;AACpB,iBAAiB;AACjB,kBAAkB;;AAElB;IACI,oBAAoB;AACxB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,mBAAmB;IACnB,yBAAyB;AAC7B;;AAEA;IACI,mBAAmB;IACnB,yBAAyB;AAC7B;;AAEA;IACI,mBAAmB;IACnB,yBAAyB;AAC7B;;AAEA;IACI,mBAAmB;IACnB,yBAAyB;AAC7B;;AAEA;IACI,mBAAmB;IACnB,yBAAyB;AAC7B;;AAEA;IACI,mBAAmB;IACnB,yBAAyB;AAC7B;;AAEA;IACI,mBAAmB;IACnB,yBAAyB;AAC7B;;AAEA;IACI,mBAAmB;IACnB,yBAAyB;AAC7B","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\nPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n@mdkBlack: #000000;\n\n.Discount {\n    font-color: @mdkRed1;\n}\n\n.Price {\n    font-color: @mdkBlack;\n}\n\n.tagStyleRed {\n    font-color: #AB0708;\n    background-color: #FFDCE8;   \n}\n\n.tagStyleBlue {\n    font-color: #0057D3;\n    background-color: #D1EFFF; \n}\n\n.tagStyleGreen {\n    font-color: #256F3A;\n    background-color: #EBF5CC; \n}\n\n.tagStylePink {\n    font-color: #A111C2;\n    background-color: #FFDCF4; \n}\n\n.tagStyleIndigo {\n    font-color: #470CEE;\n    background-color: #E2D8FF; \n}\n\n.tagStyleMango {\n    font-color: #A93E00;\n    background-color: #FFF4B8; \n}\n\n.tagStyleTeal {\n    font-color: #046C7A;\n    background-color: #C2FCEE; \n}\n\n.tagStyleGrey {\n    font-color: #354B5F;\n    background-color: #EAECEE; \n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/MDKDemoApp/Styles/Styles.light.nss":
/*!**************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Styles/Styles.light.nss ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;
@mdkBlack: #000000;
Discount {
	font-color: #ff0000;
}
Price {
	font-color: #000000;
}
tagStyleRed {
	font-color: #AB0708;
	background-color: #FFDCE8;
}
tagStyleBlue {
	font-color: #0057D3;
	background-color: #D1EFFF;
}
tagStyleGreen {
	font-color: #256F3A;
	background-color: #EBF5CC;
}
tagStylePink {
	font-color: #A111C2;
	background-color: #FFDCF4;
}
tagStyleIndigo {
	font-color: #470CEE;
	background-color: #E2D8FF;
}
tagStyleMango {
	font-color: #A93E00;
	background-color: #FFF4B8;
}
tagStyleTeal {
	font-color: #046C7A;
	background-color: #C2FCEE;
}
tagStyleGrey {
	font-color: #354B5F;
	background-color: #EAECEE;
}
`, "",{"version":3,"sources":["webpack://./build.definitions/MDKDemoApp/Styles/Styles.light.nss"],"names":[],"mappings":"AAAA,oBAAoB;AACpB,iBAAiB;AACjB,kBAAkB;AAClB;CACC,mBAAmB;AACpB;AACA;CACC,mBAAmB;AACpB;AACA;CACC,mBAAmB;CACnB,yBAAyB;AAC1B;AACA;CACC,mBAAmB;CACnB,yBAAyB;AAC1B;AACA;CACC,mBAAmB;CACnB,yBAAyB;AAC1B;AACA;CACC,mBAAmB;CACnB,yBAAyB;AAC1B;AACA;CACC,mBAAmB;CACnB,yBAAyB;AAC1B;AACA;CACC,mBAAmB;CACnB,yBAAyB;AAC1B;AACA;CACC,mBAAmB;CACnB,yBAAyB;AAC1B;AACA;CACC,mBAAmB;CACnB,yBAAyB;AAC1B","sourcesContent":["@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n@mdkBlack: #000000;\nDiscount {\n\tfont-color: #ff0000;\n}\nPrice {\n\tfont-color: #000000;\n}\ntagStyleRed {\n\tfont-color: #AB0708;\n\tbackground-color: #FFDCE8;\n}\ntagStyleBlue {\n\tfont-color: #0057D3;\n\tbackground-color: #D1EFFF;\n}\ntagStyleGreen {\n\tfont-color: #256F3A;\n\tbackground-color: #EBF5CC;\n}\ntagStylePink {\n\tfont-color: #A111C2;\n\tbackground-color: #FFDCF4;\n}\ntagStyleIndigo {\n\tfont-color: #470CEE;\n\tbackground-color: #E2D8FF;\n}\ntagStyleMango {\n\tfont-color: #A93E00;\n\tbackground-color: #FFF4B8;\n}\ntagStyleTeal {\n\tfont-color: #046C7A;\n\tbackground-color: #C2FCEE;\n}\ntagStyleGrey {\n\tfont-color: #354B5F;\n\tbackground-color: #EAECEE;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/MDKDemoApp/Styles/Styles.nss":
/*!********************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Styles/Styles.nss ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;
@mdkBlack: #000000;
Discount {
	font-color: #ff0000;
}
Price {
	font-color: #000000;
}
`, "",{"version":3,"sources":["webpack://./build.definitions/MDKDemoApp/Styles/Styles.nss"],"names":[],"mappings":"AAAA,oBAAoB;AACpB,iBAAiB;AACjB,kBAAkB;AAClB;CACC,mBAAmB;AACpB;AACA;CACC,mBAAmB;AACpB","sourcesContent":["@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n@mdkBlack: #000000;\nDiscount {\n\tfont-color: #ff0000;\n}\nPrice {\n\tfont-color: #000000;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "../../../../css-loader/dist/runtime/api.js":
/*!**************************************************!*\
  !*** ../../../../css-loader/dist/runtime/api.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "../../../../css-loader/dist/runtime/sourceMaps.js":
/*!*********************************************************!*\
  !*** ../../../../css-loader/dist/runtime/sourceMaps.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Pages/Application/About.page":
/*!*******************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Pages/Application/About.page ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"IsIconCircular":false,"OnPress":"/MDKDemoApp/Actions/CloseModalComplete.action","Position":"Right","SystemItem":"Done","Caption":"Done","Visible":true}]},"Caption":"About","Controls":[{"Sections":[{"EmptySection":{"FooterVisible":false},"KeyAndValues":[{"KeyName":"Application","Value":"/MDKDemoApp/Globals/Application/ApplicationName.global","Visible":true},{"KeyName":"Application Metadata Version","Value":"/MDKDemoApp/Globals/Application/AppDefinition_Version.global","Visible":true}],"Layout":{"NumberOfColumns":1},"MaxItemCount":1,"Visible":true,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"},{"EmptySection":{"FooterVisible":false},"KeyAndValues":[{"KeyName":"Client Version","Value":"/MDKDemoApp/Rules/Application/GetClientVersion.js","Visible":true},{"KeyName":"Client Support Versions","Value":"/MDKDemoApp/Rules/Application/GetClientSupportVersions.js","Visible":true}],"Layout":{"NumberOfColumns":1},"MaxItemCount":1,"Visible":true,"_Name":"SectionKeyValue1","_Type":"Section.Type.KeyValue"}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Name":"About","_Type":"Page","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Pages/Application/Support.page":
/*!*********************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Pages/Application/Support.page ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"IsIconCircular":false,"OnPress":"/MDKDemoApp/Actions/CloseModalComplete.action","Position":"Right","SystemItem":"Done","Caption":"Done","Visible":true}]},"Caption":"Settings","Controls":[{"Sections":[{"ContactCells":[{"ContactCell":{"ActivityItems":[{"ActivityType":"Phone","ActivityValue":"/MDKDemoApp/Globals/UserMenu/UserSupportPhone.global"},{"ActivityType":"Email","ActivityValue":"/MDKDemoApp/Globals/UserMenu/UserSupportEmail.global"}],"Headline":"Contact Support"}}],"EmptySection":{"FooterVisible":false},"_Name":"SectionContactCellTable1","_Type":"Section.Type.ContactCell"},{"EmptySection":{"FooterVisible":false},"Layout":{"MinimumInteritemSpacing":66,"NumberOfColumns":1},"SimplePropertyCells":[{"SimplePropertyCell":{"AccessoryType":"DisclosureIndicator","KeyName":"Activity Log","OnPress":"/MDKDemoApp/Actions/Application/NavToActivityLog.action","Visible":"$(PLT,true,true,false)"}}],"_Name":"SectionSimplePropertyCollection0","_Type":"Section.Type.SimplePropertyCollection"}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Name":"Settings","_Type":"Page","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Pages/Application/UserActivityLog.page":
/*!*****************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Pages/Application/UserActivityLog.page ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"FormCellContainer","Sections":[{"Controls":[{"Value":false,"_Type":"Control.Type.FormCell.Switch","_Name":"EnableLogSwitch","IsVisible":true,"Caption":"Enable Logging","OnValueChange":"/MDKDemoApp/Rules/Logging/ToggleLogging.js","IsEditable":true},{"IsSearchEnabled":false,"_Type":"Control.Type.FormCell.ListPicker","_Name":"LogLevelListPicker","IsVisible":true,"AllowMultipleSelection":false,"AllowEmptySelection":true,"Caption":"Log Level","OnValueChange":"/MDKDemoApp/Rules/Logging/SetUserLogLevel.js","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":true,"AllowDefaultValueIfOneItem":false,"IsEditable":false,"PickerItems":"/MDKDemoApp/Rules/Logging/LogLevels.js"}],"_Name":"FormCellContainerSectionFormCell0","Visible":true,"_Type":"Section.Type.FormCell"},{"Controls":[{"_Type":"Control.Type.FormCell.Button","_Name":"Send","IsVisible":true,"Title":"Send Activity Log","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","Enabled":true}],"_Name":"FormCellContainerSectionFormCell1","Visible":true,"_Type":"Section.Type.FormCell"}]}],"_Type":"Page","_Name":"UserActivityLog","Caption":"Activity Log","OnLoaded":"/MDKDemoApp/Rules/Logging/UserLogSetting.js","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Pages/Customer/Customer_Detail.page":
/*!**************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Pages/Customer/Customer_Detail.page ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Customer Detail","Controls":[{"LoadingIndicator":{"Enabled":false,"Text":""},"Sections":[{"ProfileHeader":{"ActivityItems":[{"ActivityType":"Phone","ActivityValue":"{PhoneNumber}"},{"ActivityType":"Email","ActivityValue":"{EmailAddress}"}],"DetailImage":"/MDKDemoApp/Rules/Customer/GetLargeCustomerAvatarURL.js","DetailImageIsCircular":true,"Headline":"{FirstName}","Subheadline":"{LastName}"},"Visible":true,"_Name":"SectionProfileHeader0","_Type":"Section.Type.ProfileHeader"},{"EmptySection":{"FooterVisible":false},"KeyAndValues":[{"KeyName":"Address","Value":"/MDKDemoApp/Rules/Customer/FormatAddress.js","Visible":true,"OnPress":"/MDKDemoApp/Rules/Customer/OpenMap.js","LinkColor":"#6189C7"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"Visible":true,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"},{"EmptySection":{"FooterVisible":false},"KeyAndValues":[{"KeyName":"Phone","Value":"{PhoneNumber}","Visible":true},{"KeyName":"Email","Value":"{EmailAddress}","Visible":true}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"Visible":true,"_Name":"SectionKeyValue1","_Type":"Section.Type.KeyValue"},{"EmptySection":{"Caption":"No Orders","FooterVisible":false},"Footer":{"AttributeLabel":"#Count","Caption":"See All","FooterStyle":"Attribute","OnPress":"/MDKDemoApp/Actions/Customer/NavToCustomer_SalesOrders.action","UseBottomPadding":false,"Visible":true,"_Type":"SectionCommon.Type.Footer"},"Header":{"Caption":"Sales Orders","UseTopPadding":true,"_Type":"SectionCommon.Type.Header"},"HighlightSelectedItem":false,"MaxItemCount":4,"ObjectCell":{"AccessoryType":"DisclosureIndicator","AvatarStack":{"ImageIsCircular":false},"Footnote":"{SalesOrderID}","OnPress":"/MDKDemoApp/Actions/SalesOrder/NavtoSalesOrder_Detail.action","PreserveIconStackSpacing":false,"StatusText":"{LifeCycleStatusName}","SubstatusText":"$(C,{GrossAmount},{CurrencyCode},'',{minimumIntegerDigits:1,minimumFractionDigits:2,maximumFractionDigits:2,useGrouping:true})","Title":"Order Date: $(DT,{CreatedAt},'','')"},"Target":{"EntitySet":"{#Property:@odata.readLink}/SalesOrders","Service":"/MDKDemoApp/Services/Sample.service"},"Visible":true,"_Name":"SectionObjectTable0","_Type":"Section.Type.ObjectTable"}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Name":"Customer_Detail","_Type":"Page","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Pages/Customer/Customer_List.page":
/*!************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Pages/Customer/Customer_List.page ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Customers","Controls":[{"LoadingIndicator":{"Enabled":true,"Text":""},"Sections":[{"ContactCell":{"ActivityItems":[{"ActivityType":"Phone","ActivityValue":"{PhoneNumber}"},{"ActivityType":"Email","ActivityValue":"{EmailAddress}"}],"DetailImage":"/MDKDemoApp/Rules/Customer/GetSmallCustomerAvatarURL.js","Headline":"{FirstName} {LastName}","OnPress":"/MDKDemoApp/Actions/Customer/NavToCustomer_Detail.action","Subheadline":"{City}, {Country}"},"DataPaging":{"LoadingIndicatorText":"","ShowLoadingIndicator":true},"EmptySection":{"Caption":"No Customers Found","FooterVisible":false},"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"Search":{"Enabled":true,"Placeholder":"Customer Search"},"Target":{"EntitySet":"Customers","Service":"/MDKDemoApp/Services/Sample.service"},"Visible":true,"_Name":"SectionContactCellTable0","_Type":"Section.Type.ContactCell"}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Name":"Customer_List","_Type":"Page","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Pages/Customer/Customer_SalesOrders.page":
/*!*******************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Pages/Customer/Customer_SalesOrders.page ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Customer Orders","Controls":[{"Sections":[{"DataSubscriptions":["SalesOrderHeaders"],"EmptySection":{"Caption":"No Customer Orders","FooterVisible":false},"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","AvatarStack":{"ImageIsCircular":false},"Footnote":"{SalesOrderID}","OnPress":"/MDKDemoApp/Actions/SalesOrder/NavtoSalesOrder_Detail.action","PreserveIconStackSpacing":false,"StatusText":"{LifeCycleStatusName}","SubstatusText":"$(C,{GrossAmount},{CurrencyCode},'',{minimumIntegerDigits:1,minimumFractionDigits:2,maximumFractionDigits:2,useGrouping:true})","Title":"Order Date: $(DT,{CreatedAt},'','')"},"Search":{"BarcodeScanner":true,"Enabled":true,"Placeholder":"Order Search"},"Target":{"EntitySet":"SalesOrderHeaders","QueryOptions":"$filter=CustomerID eq {CustomerID}&$orderby=CreatedAt desc","Service":"/MDKDemoApp/Services/Sample.service"},"_Name":"SectionObjectTable0","_Type":"Section.Type.ObjectTable"}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Name":"Customer_SalesOrders","_Type":"Page","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Pages/Dashboard/Dashboard_ImgPromos.page":
/*!*******************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Pages/Dashboard/Dashboard_ImgPromos.page ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"ObjectHeader":{"Tags":"/MDKDemoApp/Rules/Dashboard/GetDashboardTags.js","Subhead":"$(L,'app_name')","Description":"$(L,'dashboard_header_body')","StatusText":"/MDKDemoApp/Rules/Dashboard/versionString.js","DetailImage":"/MDKDemoApp/Images/mdk_logo.png","DetailImageIsCircular":false,"HeadlineText":"$(L,'mdk')","StatusPosition":"Stacked","StatusImagePosition":"Leading","SubstatusImagePosition":"Leading"},"_Type":"Section.Type.ObjectHeader","_Name":"SectionObjectHeader0","Visible":true},{"_Type":"Section.Type.ObjectCollection","Target":{"EntitySet":"Customers","QueryOptions":"/MDKDemoApp/Rules/Customer/TopCustomersQO.js","Service":"/MDKDemoApp/Services/Sample.service"},"_Name":"SectionObjectCollection0","Header":{"_Name":"SectionHeader0","AccessoryType":"None","UseTopPadding":true,"Caption":"Top Customers","Items":[{"_Type":"SectionHeaderItem.Type.Label","_Name":"SectionHeaderItemTypeLabel1","Visible":true,"Position":"Left","Title":"Top Customers"},{"_Name":"SectionHeaderItemTypeButton1","Title":"/MDKDemoApp/Rules/Customer/CustomerCountLabel.js","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","Visible":true,"Enabled":true,"Position":"Right","_Type":"SectionHeaderItem.Type.Button","OnPress":"/MDKDemoApp/Actions/Customer/NavToCustomer_List.action"}],"_Type":"SectionCommon.Type.Header"},"Footer":{"_Name":"SectionFooter0","Caption":"All Customers","AttributeLabel":"/MDKDemoApp/Rules/Customer/CustomerCount.js","AccessoryType":"DisclosureIndicator","FooterStyle":"Attribute","Visible":false,"OnPress":"/MDKDemoApp/Actions/Customer/NavToCustomer_List.action","UseBottomPadding":true,"_Type":"SectionCommon.Type.Footer"},"Visible":true,"EmptySection":{"Caption":"No Customers","FooterVisible":false},"DataPaging":{"LoadingIndicatorText":"","ShowLoadingIndicator":true},"ObjectCell":{"Title":"{FirstName} {LastName}","AccessoryType":"DisclosureIndicator","PreserveIconStackSpacing":false,"OnPress":"/MDKDemoApp/Actions/Customer/NavToCustomer_Detail.action","AvatarStack":{"Avatars":[{"Image":"/MDKDemoApp/Rules/Customer/GetSmallCustomerAvatarURL.js"}],"ImageIsCircular":true}},"Layout":{"NumberOfColumns":2}},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.ImageCollection","Target":{"EntitySet":"Products","QueryOptions":"/MDKDemoApp/Rules/Product/PromotionalItemsQO.js","Service":"/MDKDemoApp/Services/Sample.service"},"_Name":"SectionImageCollection0","Header":{"_Name":"SectionHeader1","AccessoryType":"None","UseTopPadding":true,"Items":[{"_Type":"SectionHeaderItem.Type.Label","_Name":"SectionHeaderItemTypeLabel0","Visible":true,"Position":"Left","Title":"Promotion Items"},{"_Name":"SectionHeaderItemTypeButton0","Title":"/MDKDemoApp/Rules/Product/ProductCountLabel.js","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","Visible":true,"Enabled":true,"Position":"Right","_Type":"SectionHeaderItem.Type.Button","OnPress":"/MDKDemoApp/Actions/Product/NavToProduct_List.action"}],"_Type":"SectionCommon.Type.Header"},"Footer":{"_Name":"SectionFooter1","Caption":"All Products","AttributeLabel":"/MDKDemoApp/Rules/Product/ProductCount.js","AccessoryType":"DisclosureIndicator","FooterStyle":"Attribute","Visible":false,"OnPress":"/MDKDemoApp/Actions/Product/NavToProduct_List.action","UseBottomPadding":false,"_Type":"SectionCommon.Type.Footer"},"Visible":true,"EmptySection":{"FooterVisible":false},"ImageCell":{"Title":"{Name}","Subtitle":"{CategoryName}","Attribute":"/MDKDemoApp/Rules/Product/PercentOff.js","Image":"/MDKDemoApp/Services/Sample.service/{@odata.readLink}/Picture","ImageIsCircular":false,"OnPress":"/MDKDemoApp/Actions/Product/NavToProduct_Detail.action"},"Layout":{"LayoutType":"HorizontalScroll"}}]}],"_Type":"Page","_Name":"Dashboard_ImgPromos","Caption":"$(L,'dashboard_title')","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"User","Icon":"$(PLT,sap-icon://customer, sap-icon://customer, /MDKDemoApp/Images/Web/user-blue-40.png)","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/MDKDemoApp/Actions/Application/UserMenuPopover.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Pages/Dashboard/Dashboard_ObjPromos.page":
/*!*******************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Pages/Dashboard/Dashboard_ObjPromos.page ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"Icon":"sap-icon://customer","IsIconCircular":false,"OnPress":"/MDKDemoApp/Actions/Application/UserMenuPopover.action","Position":"Left","Caption":"User","Visible":true}]},"Caption":"$(L,'dashboard_title')","Controls":[{"Sections":[{"ObjectHeader":{"Tags":[{"Text":"/MDKDemoApp/Rules/Dashboard/daysLeftInQuarter.js"},{"Text":"/MDKDemoApp/Rules/Dashboard/getCurrentQuarter.js"}],"Description":"$(L,'dashboard_header_body')","DetailImage":"/MDKDemoApp/Images/mdk_logo.png","DetailImageIsCircular":false,"HeadlineText":"$(L,'mdk')","StatusText":"/MDKDemoApp/Rules/Dashboard/versionString.js","Subhead":"$(L,'app_name')"},"Visible":true,"_Name":"SectionObjectHeader0","_Type":"Section.Type.ObjectHeader"},{"DataPaging":{"LoadingIndicatorText":"","ShowLoadingIndicator":true},"EmptySection":{"Caption":"No Customers","FooterVisible":false},"Footer":{"AccessoryType":"DisclosureIndicator","AttributeLabel":"/MDKDemoApp/Rules/Customer/CustomerCount.js","Caption":"All Customers","FooterStyle":"Attribute","OnPress":"/MDKDemoApp/Actions/Customer/NavToCustomer_List.action","UseBottomPadding":true,"Visible":true,"_Type":"SectionCommon.Type.Footer"},"Header":{"Caption":"Top Customers","UseTopPadding":true,"_Type":"SectionCommon.Type.Header"},"Layout":{"NumberOfColumns":2},"ObjectCell":{"AccessoryType":"DisclosureIndicator","AvatarStack":{"Avatars":[{"Image":"/MDKDemoApp/Rules/Customer/GetSmallCustomerAvatarURL.js"}],"ImageIsCircular":false},"OnPress":"/MDKDemoApp/Actions/Customer/NavToCustomer_Detail.action","PreserveIconStackSpacing":false,"Title":"{FirstName} {LastName}"},"Target":{"EntitySet":"Customers","QueryOptions":"/MDKDemoApp/Rules/Customer/TopCustomersQO.js","Service":"/MDKDemoApp/Services/Sample.service"},"Visible":true,"_Name":"SectionObjectCollection0","_Type":"Section.Type.ObjectCollection"},{"DataPaging":{"LoadingIndicatorText":"","ShowLoadingIndicator":true},"EmptySection":{"Caption":"No Promotion Items","FooterVisible":false},"Footer":{"AccessoryType":"DisclosureIndicator","AttributeLabel":"/MDKDemoApp/Rules/Product/ProductCount.js","Caption":"All Products","FooterStyle":"Attribute","OnPress":"/MDKDemoApp/Actions/Product/NavToProduct_List.action","UseBottomPadding":false,"Visible":true,"_Type":"SectionCommon.Type.Footer"},"Header":{"Caption":"Promotion Items","UseTopPadding":true,"_Type":"SectionCommon.Type.Header"},"Layout":{"NumberOfColumns":2},"MaxItemCount":6,"ObjectCell":{"AccessoryType":"DisclosureIndicator","AvatarStack":{"Avatars":[{"Image":"/MDKDemoApp/Rules/Product/GetProductImage.js"}],"ImageIsCircular":false},"OnPress":"/MDKDemoApp/Actions/Product/NavToProduct_Detail.action","PreserveIconStackSpacing":false,"StatusText":"$(C,{Price},{CurrencyCode},'',{minimumIntegerDigits:1,minimumFractionDigits:0,maximumFractionDigits:2,useGrouping:true})","Styles":{"StatusText":"Price","SubstatusText":"Discount"},"Subhead":"{CategoryName}","SubstatusText":"/MDKDemoApp/Rules/Product/PercentOff.js","Title":"{Name}"},"Target":{"EntitySet":"Products","QueryOptions":"/MDKDemoApp/Rules/Product/PromotionalItemsQO.js","Service":"/MDKDemoApp/Services/Sample.service"},"Visible":true,"_Name":"SectionObjectCollection1","_Type":"Section.Type.ObjectCollection"}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Name":"Dashboard_ObjPromos","_Type":"Page","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Pages/Product/Product_Detail.page":
/*!************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Pages/Product/Product_Detail.page ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Header":{"_Name":"SectionHeader0","AccessoryType":"None","UseTopPadding":true,"_Type":"SectionCommon.Type.Header"},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Footer":{"_Name":"SectionFooter0","Visible":true,"UseBottomPadding":false,"_Type":"SectionCommon.Type.Footer"},"_Type":"Section.Type.ObjectTable","_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"FooterVisible":false},"ObjectCells":[{"ObjectCell":{"_Name":"SectionObjectCell0","Title":"{Name}","Subhead":" ","StatusText":"$(C,{Price},{CurrencyCode},'',{maximumFractionDigits:2,useGrouping:true})","SubstatusText":"/MDKDemoApp/Rules/Product/GetPromoDiscount.js","AccessoryType":"None","PreserveIconStackSpacing":false,"Styles":{"SubstatusText":"Discount"}}}],"HighlightSelectedItem":false},{"KeyAndValues":[{"Value":"{ShortDescription}","_Name":"KeyValue0","KeyName":"Description","Visible":true}],"MaxItemCount":1,"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue4","Header":{"_Name":"SectionHeader1","AccessoryType":"None","UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}},{"EmptySection":{"FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":false,"HeaderSeparator":true,"FooterSeparator":false,"ControlSeparator":false},"_Type":"Section.Type.Image","_Name":"SectionImage0","Visible":true,"Image":"/MDKDemoApp/Services/Sample.service/{@odata.readLink}/Picture","Height":250,"Alignment":"Center","ContentMode":"ScaleAspectFit"},{"KeyAndValues":[{"Value":"{CategoryName}","_Name":"KeyValue1","KeyName":"Category","Visible":true},{"Value":"{QuantityUnit}","_Name":"KeyValue2","KeyName":"Quantity Unit","Visible":true}],"MaxItemCount":1,"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue2","Header":{"_Name":"SectionHeader2","AccessoryType":"None","UseTopPadding":true,"_Type":"SectionCommon.Type.Header"},"Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":2}},{"KeyAndValues":[{"Value":"{Quantity}","_Name":"KeyValue3","KeyName":"Quantity","Visible":true},{"Value":"{LotSize}","_Name":"KeyValue4","KeyName":"Lot Size","Visible":true},{"Value":"{MinStock}","_Name":"KeyValue5","KeyName":"Min Stock Level","Visible":true}],"MaxItemCount":1,"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.KeyValue","Target":{"EntitySet":"Stock","QueryOptions":"$filter=ProductID eq {ProductID}","Service":"/MDKDemoApp/Services/Sample.service"},"_Name":"SectionKeyValue3","Header":{"_Name":"SectionHeader3","AccessoryType":"None","UseTopPadding":true,"Caption":"Stock Details","_Type":"SectionCommon.Type.Header"},"Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":2}},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.SimplePropertyCollection","_Name":"SectionSimplePropertyCollection1","Header":{"_Name":"SectionHeader4","AccessoryType":"None","UseTopPadding":true,"Caption":"Dimensions","_Type":"SectionCommon.Type.Header"},"Visible":true,"EmptySection":{"FooterVisible":false},"SimplePropertyCells":[{"SimplePropertyCell":{"Value":"{DimensionHeight} {DimensionUnit}","_Name":"SectionSimplePropertyCell0","KeyName":"Height","AccessoryType":"None","Visible":true}},{"SimplePropertyCell":{"Value":"{DimensionWidth} {DimensionUnit}","_Name":"SectionSimplePropertyCell1","KeyName":"Width","AccessoryType":"None","Visible":true}},{"SimplePropertyCell":{"Value":"{DimensionDepth} {DimensionUnit}","_Name":"SectionSimplePropertyCell2","KeyName":"Depth","AccessoryType":"None","Visible":true}},{"SimplePropertyCell":{"Value":"{Weight} {WeightUnit}","_Name":"SectionSimplePropertyCell3","KeyName":"Weight","AccessoryType":"None","Visible":true}}],"Layout":{"NumberOfColumns":2}}]}],"_Type":"Page","_Name":"Product_Detail","Caption":"Product Detail","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Edit","SystemItem":"Edit","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/MDKDemoApp/Actions/Product/NavToProduct_Detail_Edit.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Pages/Product/Product_Detail_Edit.page":
/*!*****************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Pages/Product/Product_Detail_Edit.page ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"IsIconCircular":false,"OnPress":"/MDKDemoApp/Actions/CloseModalCanceled.action","Position":"Left","SystemItem":"Cancel","Caption":"Cancel"},{"IsIconCircular":false,"OnPress":"/MDKDemoApp/Actions/Product/UpdateProductDetails.action","Position":"Right","SystemItem":"Done","Caption":"Done"}]},"Caption":"Edit Product","Controls":[{"_Type":"Control.Type.SectionedTable","Sections":[{"Controls":[{"Caption":"ID","IsEditable":false,"IsVisible":false,"KeyboardType":"DateTime","PlaceHolder":"value","Value":"{ProductID}","_Name":"ProductID","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Name","IsEditable":true,"IsVisible":true,"KeyboardType":"DateTime","PlaceHolder":"value","Value":"{Name}","_Name":"ProductName","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Description","IsEditable":true,"IsVisible":true,"PlaceHolder":"Description","Value":"{ShortDescription}","_Name":"ProductDescription","_Type":"Control.Type.FormCell.Note"},{"AllowEmptySelection":true,"AllowMultipleSelection":false,"Caption":"Category","IsBarcodeScanEnabled":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSearchCancelledAfterSelection":true,"IsSearchEnabled":false,"IsSelectedSectionEnabled":true,"IsVisible":true,"PickerItems":{"DisplayValue":"{CategoryName}","ReturnValue":"{CategoryName}","Target":{"EntitySet":"ProductCategories","QueryOptions":"$orderby=CategoryName","Service":"/MDKDemoApp/Services/Sample.service"}},"PickerPrompt":"Please select one single item","Search":{"Enabled":true,"Placeholder":"Category Search"},"Value":["{CategoryName}"],"_Name":"ProductCategory","_Type":"Control.Type.FormCell.ListPicker"},{"Caption":"Price","IsEditable":true,"IsVisible":true,"Value":"{Price}","_Name":"ProductPrice","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Currency","IsEditable":true,"IsVisible":true,"Value":"{CurrencyCode}","_Name":"ProductCurrencyCode","_Type":"Control.Type.FormCell.SimpleProperty"}],"Visible":true,"_Type":"Section.Type.FormCell","_Name":"FormCellContainer0SectionFormCell0"},{"Controls":[{"Caption":"Height","IsEditable":true,"IsVisible":true,"KeyboardType":"DateTime","Value":"{DimensionHeight}","_Name":"ProductHeight","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Width","IsEditable":true,"IsVisible":true,"KeyboardType":"DateTime","Value":"{DimensionWidth}","_Name":"ProductWidth","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Depth","IsEditable":true,"IsVisible":true,"KeyboardType":"DateTime","Value":"{DimensionDepth}","_Name":"ProductDepth","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Unit","IsEditable":true,"IsVisible":true,"KeyboardType":"DateTime","Value":"{DimensionUnit}","_Name":"ProductDimensionUnit","_Type":"Control.Type.FormCell.SimpleProperty"}],"Visible":true,"_Type":"Section.Type.FormCell","_Name":"FormCellContainer0SectionFormCell1"},{"Controls":[{"Caption":"Weight","IsEditable":true,"IsVisible":true,"KeyboardType":"DateTime","Value":"{Weight}","_Name":"ProductWeight","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Unit","IsEditable":true,"IsVisible":true,"KeyboardType":"DateTime","Value":"{WeightUnit}","_Name":"ProductWeightUnit","_Type":"Control.Type.FormCell.SimpleProperty"}],"Visible":true,"_Type":"Section.Type.FormCell","_Name":"FormCellContainer0SectionFormCell2"}],"_Name":"FormCellContainer0"}],"_Name":"Product_Detail_Edit","_Type":"Page","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Pages/Product/Product_Filter.page":
/*!************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Pages/Product/Product_Filter.page ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"FormCellContainer0","Sections":[{"Controls":[{"AllowMultipleSelection":true,"_Type":"Control.Type.FormCell.Sorter","_Name":"SortBy","IsVisible":true,"AllowEmptySelection":false,"IsEditable":true,"SortByItems":[{"DisplayValue":"Name","ReturnValue":"Name"},{"DisplayValue":"Category","ReturnValue":"CategoryName"},{"DisplayValue":"Price (Low to High)","ReturnValue":"Price asc"},{"DisplayValue":"Price (High to Low)","ReturnValue":"Price desc"}]}],"_Name":"FormCellContainer0SectionFormCell0","Visible":true,"_Type":"Section.Type.FormCell"},{"Controls":[{"_Type":"Control.Type.FormCell.Filter","_Name":"PromoFilter","IsVisible":true,"AllowMultipleSelection":true,"AllowEmptySelection":true,"Caption":"Products","IsEditable":true,"FilterProperty":[{"DisplayValue":"On Promotion","ReturnValue":"/MDKDemoApp/Rules/Product/ProductOnPromoFilter.js"}]},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"CategoryFilter","IsVisible":true,"AllowMultipleSelection":true,"AllowEmptySelection":true,"Caption":"Category","DataPaging":{"LoadingIndicatorText":"","ShowLoadingIndicator":true},"PickerPrompt":"Please select multiple items","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":false,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":true,"IsEditable":true,"FilterProperty":"CategoryName","Search":{"Enabled":true},"PickerItems":{"DisplayValue":"{CategoryName}","ReturnValue":"{CategoryName}","Target":{"EntitySet":"ProductCategories","Service":"/MDKDemoApp/Services/Sample.service"}}}],"_Name":"FormCellContainer0SectionFormCell1","Visible":true,"_Type":"Section.Type.FormCell"}]}],"_Type":"Page","_Name":"Product_Filter","Caption":"Filter","ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Cancel","SystemItem":"Cancel","Position":"Left","IsIconCircular":false,"Visible":true,"OnPress":"/MDKDemoApp/Actions/CloseModalCanceled.action"},{"_Name":"ActionBarItem1","Caption":"Done","SystemItem":"Done","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/MDKDemoApp/Actions/CloseModalComplete.action"}],"_Name":"ActionBar1"},"FioriToolbar":{"_Name":"FioriToolbar","_Type":"Control.Type.FioriToolbar","Visible":true,"Items":[{"_Type":"FioriToolbarItem.Type.Button","_Name":"ResetAllBtn","Visible":true,"Title":"Reset All","OnPress":"/MDKDemoApp/Rules/Product/ResetFilter.js","Enabled":true,"ButtonType":"Primary","Semantic":"Tint","ImagePosition":"Leading"}]},"Result":["#Page:Product_Filter/#Control:SortBy/#Value","#Page:Product_Filter/#Control:CategoryFilter/#FilterValue","#Page:Product_Filter/#Control:PromoFilter/#Value"],"PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Pages/Product/Product_List.page":
/*!**********************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Pages/Product/Product_List.page ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Header":{"_Type":"SectionCommon.Type.Header","_Name":"SectionHeader0","AccessoryType":"None","UseTopPadding":false},"Separators":{"TopSectionSeparator":true,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.ObjectTable","Target":{"EntitySet":"Products","QueryOptions":"$orderby=Name","Service":"/MDKDemoApp/Services/Sample.service"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true,"LeadingItems":["{SupplierID}"],"TrailingItems":[]},"Title":"{Name}","Subhead":"{CategoryName}","Description":"dsf","DisplayDescriptionInMobile":true,"StatusText":"$(C,{Price},{CurrencyCode},'',{minimumIntegerDigits:1,minimumFractionDigits:0,maximumFractionDigits:2,useGrouping:true})","SubstatusText":"/MDKDemoApp/Rules/Product/GetPromoDiscount.js","PreserveIconStackSpacing":false,"AccessoryType":"None","ProgressIndicator":"Open","Tags":[{"Color":"Red","Text":"{DimensionUnit}"}],"AvatarStack":{"Avatars":[{"Image":"/MDKDemoApp/Services/Sample.service/{@odata.readLink}/Picture"}],"ImageIsCircular":false,"ImageHasBorder":false},"AvatarGrid":{"ImageIsCircular":true},"OnPress":"/MDKDemoApp/Actions/Product/NavToProduct_Detail.action","Styles":{"SubstatusText":"Discount"},"Selected":false},"Search":{"Enabled":true},"HighlightSelectedItem":false}],"LoadingIndicator":{"Enabled":true,"Text":""}}],"_Type":"Page","_Name":"Product_List","Caption":"/MDKDemoApp/Rules/Product/ProductListCaption.js","PrefersLargeCaption":true,"OnReturning":"/MDKDemoApp/Rules/Product/ProductListCaption.js","ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Filter","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/MDKDemoApp/Actions/Product/ProductFilter.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Pages/SalesOrder/SalesOrder_Detail.page":
/*!******************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Pages/SalesOrder/SalesOrder_Detail.page ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"KeyAndValues":[{"Value":"{SalesOrderID}","_Name":"KeyValue0","KeyName":"Order Number","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Header":{"_Name":"SectionHeader0","AccessoryType":"None","UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"Visible":true,"EmptySection":{"FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Layout":{"NumberOfColumns":1}},{"KeyAndValues":[{"Value":"$(DT,{CreatedAt})","_Name":"KeyValue1","KeyName":"Created At","Visible":true},{"Value":"{LifeCycleStatusName}","_Name":"KeyValue2","KeyName":"Status","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue2","Visible":true,"EmptySection":{"FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Layout":{"NumberOfColumns":2}},{"KeyAndValues":[{"Value":"$(C,{NetAmount},{CurrencyCode},'',{maximumFractionDigits:2,useGrouping:true})","_Name":"KeyValue3","KeyName":"Price","Visible":true},{"Value":"$(C,{TaxAmount},{CurrencyCode},'',{maximumFractionDigits:2,useGrouping:true})","_Name":"KeyValue4","KeyName":"Tax","Visible":true},{"Value":"$(C,{GrossAmount},{CurrencyCode},'',{maximumFractionDigits:2,useGrouping:true})","_Name":"KeyValue5","KeyName":"Total","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue1","Visible":true,"EmptySection":{"FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Layout":{"NumberOfColumns":3}},{"Header":{"Grid":{"Items":[{"NumberOfLines":1,"Text":"Product","TextAlignment":"Left"},{"NumberOfLines":1,"Text":"Qty","TextAlignment":"Right"},{"NumberOfLines":1,"Text":"Price","TextAlignment":"Right"},{"NumberOfLines":1,"Text":"Tax","TextAlignment":"Right"},{"NumberOfLines":1,"Text":"Total","TextAlignment":"Right"}]},"_Name":"SectionGridHeader0","AccessoryType":"None","UseTopPadding":true,"_Type":"SectionCommon.Type.Header"},"Row":{"Items":[{"BindTo":"Headline","LineBreakMode":"WordWrapping","NumberOfLines":1,"Text":"{Product/Name}","TextAlignment":"Left"},{"BindTo":"Status","LineBreakMode":"WordWrapping","NumberOfLines":1,"Text":"{Quantity} {QuantityUnit}","TextAlignment":"Right"},{"LineBreakMode":"WordWrapping","NumberOfLines":1,"Text":"$(C,{NetAmount},{CurrencyCode},'',{maximumFractionDigits:2,useGrouping:true})","TextAlignment":"Right"},{"LineBreakMode":"WordWrapping","NumberOfLines":1,"Text":"$(C,{TaxAmount},{CurrencyCode},'',{maximumFractionDigits:2,useGrouping:true})","TextAlignment":"Right"},{"BindTo":"SubStatus","LineBreakMode":"WordWrapping","NumberOfLines":1,"Text":"$(C,{GrossAmount},{CurrencyCode},'',{maximumFractionDigits:2,useGrouping:true})","TextAlignment":"Right"}],"Layout":{"ColumnWidthPercentage":[-1,0.15,0.18,0.15,0.18]},"AccessoryType":"DisclosureIndicator","OnPress":"/MDKDemoApp/Rules/SalesOrder/ShowSalesOrder_Item_Product.js"},"_Type":"Section.Type.GridTable","Target":{"EntitySet":"SalesOrderItems","QueryOptions":"$expand=Product&$filter=SalesOrderID eq {SalesOrderID}&$orderby=ItemNumber,ProductID","Service":"/MDKDemoApp/Services/Sample.service"},"_Name":"SectionGridTable0","Visible":true,"EmptySection":{"FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true}}],"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"}}],"_Type":"Page","_Name":"SalesOrder_Detail","Caption":"Order Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/Application.app":
/*!*******************************************!*\
  !*** ./build.definitions/Application.app ***!
  \*******************************************/
/***/ ((module) => {

module.exports = {"Localization":"/MDKDemoApp/i18n/i18n.properties","MainPage":"/MDKDemoApp/Pages/Dashboard/Dashboard_ImgPromos.page","OnDidUpdate":"/MDKDemoApp/Rules/Service/InitializeApplication.js","OnLaunch":["/MDKDemoApp/Rules/Service/InitializeApplication.js"],"OnWillUpdate":"/MDKDemoApp/Rules/Application/OnWillUpdate.js","Styles":"/MDKDemoApp/Styles/Styles.less","_Name":"MDKDemoApp","_SchemaVersion":"24.7","StyleSheets":{"Styles.dark":{"css":"/MDKDemoApp/Styles/Styles.dark.css","ios":"/MDKDemoApp/Styles/Styles.dark.nss","android":"/MDKDemoApp/Styles/Styles.dark.json"},"Styles":{"css":"/MDKDemoApp/Styles/Styles.css","ios":"/MDKDemoApp/Styles/Styles.nss","android":"/MDKDemoApp/Styles/Styles.json"},"Styles.light":{"css":"/MDKDemoApp/Styles/Styles.light.css","ios":"/MDKDemoApp/Styles/Styles.light.nss","android":"/MDKDemoApp/Styles/Styles.light.json"}}}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Actions/Application/AppUpdateCheck.action":
/*!********************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Actions/Application/AppUpdateCheck.action ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"ActionResult":{"_Name":"AppUpdate"},"OnFailure":{"Name":"/MDKDemoApp/Actions/GenericBannerMessage.action","Properties":{"Animated":true,"Duration":0,"Message":"App Update Failure {#ActionResults:AppUpdate/error}"}},"OnSuccess":"/MDKDemoApp/Rules/Application/AppUpdateResult.js","_Type":"Action.Type.ApplicationUpdate"}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Actions/Application/AppUpdateProgressBanner.action":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Actions/Application/AppUpdateProgressBanner.action ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionTimeout":3,"Message":"Checking for Updates...","OnSuccess":"/MDKDemoApp/Actions/Application/AppUpdateCheck.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Actions/Application/CheckForUpdatesProgress.action":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Actions/Application/CheckForUpdatesProgress.action ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionTimeout":3,"Message":"Checking for Updates...","OnSuccess":"/MDKDemoApp/Actions/Application/AppUpdateCheck.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Actions/Application/NavToAbout.action":
/*!****************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Actions/Application/NavToAbout.action ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"PageToOpen":"/MDKDemoApp/Pages/Application/About.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Actions/Application/NavToActivityLog.action":
/*!**********************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Actions/Application/NavToActivityLog.action ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"PageToOpen":"/MDKDemoApp/Pages/Application/UserActivityLog.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Actions/Application/NavToSupport.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Actions/Application/NavToSupport.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"NavigationType":"Cross","PageToOpen":"/MDKDemoApp/Pages/Application/Support.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Actions/Application/OnWillUpdate.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Actions/Application/OnWillUpdate.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"CancelCaption":"Later","Message":"A new version of the application is now ready to apply.  Do you want to update to this version now?","OKCaption":"Now","Title":"New Version Available!","_Type":"Action.Type.Message"}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Actions/Application/UserMenuPopover.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Actions/Application/UserMenuPopover.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"PopoverItems":[{"Enabled":true,"Icon":"sap-icon://synchronize","OnPress":"/MDKDemoApp/Actions/Service/StartSync.action","Title":"Sync Changes","Visible":"$(PLT,true,true,false)"},{"Enabled":true,"Icon":"sap-icon://headset","OnPress":"/MDKDemoApp/Actions/Application/NavToSupport.action","Title":"Support","Visible":true},{"Enabled":true,"Icon":"sap-icon://refresh","OnPress":"/MDKDemoApp/Actions/Application/AppUpdateProgressBanner.action","Title":"Check for Updates","Visible":"$(PLT,true,true,false)"},{"Enabled":true,"Icon":"sap-icon://hint","OnPress":"/MDKDemoApp/Actions/Application/NavToAbout.action","Title":"About","Visible":true},{"Enabled":true,"Icon":"sap-icon://log","OnPress":"/MDKDemoApp/Actions/LogoutConfirmation.action","Title":"Logout","Visible":true}],"_Type":"Action.Type.PopoverMenu"}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Actions/CloseModalCanceled.action":
/*!************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Actions/CloseModalCanceled.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"CancelPendingActions":true,"DismissModal":"Action.Type.ClosePage.Canceled","_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Actions/CloseModalComplete.action":
/*!************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Actions/CloseModalComplete.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"CancelPendingActions":false,"DismissModal":"Action.Type.ClosePage.Completed","_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Actions/ClosePage.action":
/*!***************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Actions/ClosePage.action ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Actions/Customer/NavToCustomer_Detail.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Actions/Customer/NavToCustomer_Detail.action ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"NavigationType":"Cross","PageToOpen":"/MDKDemoApp/Pages/Customer/Customer_Detail.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Actions/Customer/NavToCustomer_List.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Actions/Customer/NavToCustomer_List.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"NavigationType":"Cross","PageToOpen":"/MDKDemoApp/Pages/Customer/Customer_List.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Actions/Customer/NavToCustomer_SalesOrders.action":
/*!****************************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Actions/Customer/NavToCustomer_SalesOrders.action ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = {"NavigationType":"Cross","PageToOpen":"/MDKDemoApp/Pages/Customer/Customer_SalesOrders.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Actions/GenericBannerMessage.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Actions/GenericBannerMessage.action ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":5,"Message":"Message Text","_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Actions/GenericMessageBox.action":
/*!***********************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Actions/GenericMessageBox.action ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = {"Message":"{Message}","OKCaption":"{OKCaption}","Title":"{Title}","_Type":"Action.Type.Message"}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Actions/GenericNavigation.action":
/*!***********************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Actions/GenericNavigation.action ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"GenericNavigation"},"PageToOpen":"/MDKDemoApp/Pages/Dashboard/Dashboard_ImgPromos.page"}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Actions/GenericProgressBanner.action":
/*!***************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Actions/GenericProgressBanner.action ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionMessage":"Complete","CompletionTimeout":2,"Message":"Message Text","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Actions/GenericToastMessage.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Actions/GenericToastMessage.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"IsIconHidden":true,"Message":"Message Text","NumberOfLines":3,"_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Actions/Logging/LogUploadFailure.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Actions/Logging/LogUploadFailure.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Uploading log file failed with error: {#ActionResults:UploadLog/error}","OKCaption":"OK","Title":"Log Upload Failed","_Type":"Action.Type.Message"}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Actions/Logging/LogUploadSuccessful.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Actions/Logging/LogUploadSuccessful.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":3,"IsIconHidden":false,"MaxNumberOfLines":1,"Message":"Log File Uploaded","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Actions/Logging/UploadLog.action":
/*!***********************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Actions/Logging/UploadLog.action ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = {"ActionResult":{"_Name":"UploadLog"},"ActivityIndicatorText":"Uploading...","OnFailure":"/MDKDemoApp/Actions/Logging/LogUploadFailure.action","OnSuccess":"/MDKDemoApp/Actions/Logging/LogUploadSuccessful.action","ShowActivityIndicator":false,"_Type":"Action.Type.Logger.Upload"}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Actions/Logging/UploadLogProgress.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Actions/Logging/UploadLogProgress.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionMessage":"Logs Uploaded","CompletionTimeout":2,"Message":"Uploading Log Files...","OnSuccess":"/MDKDemoApp/Actions/Logging/UploadLog.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Actions/Logout.action":
/*!************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Actions/Logout.action ***!
  \************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logout"}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Actions/LogoutConfirmation.action":
/*!************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Actions/LogoutConfirmation.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"CancelCaption":"No","Message":"This action will remove all data and return to the Welcome screen.  Any local data will be lost.  Are you sure you want to continue?","OKCaption":"Yes","OnOK":"/MDKDemoApp/Rules/Application/ResetAppSettingsAndLogout.js","Title":"Logout","_Type":"Action.Type.Message"}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Actions/Product/DownloadProductImage.action":
/*!**********************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Actions/Product/DownloadProductImage.action ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = {"OnFailure":{"Name":"/MDKDemoApp/Actions/GenericBannerMessage.action","Properties":{"Animated":true,"Duration":0,"Message":"Failed to download product image - {#ActionResults:download/error}"}},"Target":{"EntitySet":"Products","ReadLink":"{@odata.readLink}","Service":"/MDKDemoApp/Services/Sample.service"},"_Type":"Action.Type.ODataService.DownloadMedia"}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Actions/Product/DownloadProductStream.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Actions/Product/DownloadProductStream.action ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.DownloadStream","ActionResult":{"_Name":"DownloadProductStream"},"Target":{"Service":"/MDKDemoApp/Services/Sample.service","EntitySet":"Products","ReadLink":"{@odata.readLink}"},"Properties":["Picture"],"OnFailure":{"Name":"/MDKDemoApp/Actions/GenericBannerMessage.action","Properties":{"Animated":true,"Duration":0,"Message":"Failed to download product image - {#ActionResults:download/error}"}}}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Actions/Product/NavToProduct_Detail.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Actions/Product/NavToProduct_Detail.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"NavigationType":"Cross","PageToOpen":"/MDKDemoApp/Pages/Product/Product_Detail.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Actions/Product/NavToProduct_Detail_Edit.action":
/*!**************************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Actions/Product/NavToProduct_Detail_Edit.action ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"ModalPageFullscreen":false,"NavigationType":"Cross","PageToOpen":"/MDKDemoApp/Pages/Product/Product_Detail_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Actions/Product/NavToProduct_List.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Actions/Product/NavToProduct_List.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"NavigationType":"Cross","PageToOpen":"/MDKDemoApp/Pages/Product/Product_List.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Actions/Product/ProductFilter.action":
/*!***************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Actions/Product/ProductFilter.action ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"Filterable":"#Page:Product_List/#Control:SectionedTable0","PageToOpen":"/MDKDemoApp/Pages/Product/Product_Filter.page","_Type":"Action.Type.Filter"}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Actions/Product/UpdateProductDetails.action":
/*!**********************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Actions/Product/UpdateProductDetails.action ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = {"ActionResult":{"_Name":"UpdateProduct"},"OnFailure":{"Name":"/MDKDemoApp/Actions/GenericBannerMessage.action","Properties":{"Animated":true,"Duration":0,"Message":"Updating Product Failed: {#ActionResults:UpdateProduct/error}"}},"OnSuccess":{"Name":"/MDKDemoApp/Actions/GenericToastMessage.action","Properties":{"Animated":true,"Duration":2,"Message":"Product Updated","OnSuccess":"/MDKDemoApp/Actions/CloseModalComplete.action"}},"Properties":{"Category":"#Control:ProductCategory/#SelectedValue","CategoryName":"#Control:ProductCategory/#SelectedValue","CurrencyCode":"#Control:ProductCurrencyCode/#Value","DimensionDepth":"#Control:ProductDepth/#Value","DimensionHeight":"#Control:ProductHeight/#Value","DimensionUnit":"#Control:ProductDimensionUnit/#Value","DimensionWidth":"#Control:ProductWidth/#Value","Name":"#Control:ProductName/#Value","Price":"#Control:ProductPrice/#Value","ShortDescription":"#Control:ProductDescription/#Value","Weight":"#Control:ProductWeight/#Value","WeightUnit":"#Control:ProductWeightUnit/#Value"},"ShowActivityIndicator":true,"Target":{"EntitySet":"Products","ReadLink":"{@odata.readLink}","Service":"/MDKDemoApp/Services/Sample.service"},"_Type":"Action.Type.ODataService.UpdateEntity"}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Actions/SalesOrder/NavtoSalesOrder_Detail.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Actions/SalesOrder/NavtoSalesOrder_Detail.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"NavigationType":"Cross","PageToOpen":"/MDKDemoApp/Pages/SalesOrder/SalesOrder_Detail.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Actions/Service/CloseOffline.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Actions/Service/CloseOffline.action ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.OfflineOData.Close","ActionResult":{"_Name":"CloseOfflineDB"},"Service":"/MDKDemoApp/Services/Sample.service","Force":true}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Actions/Service/DownloadProgress.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Actions/Service/DownloadProgress.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionMessage":"Sync Complete","CompletionTimeout":3,"Message":"Download in Process...","OnSuccess":"/MDKDemoApp/Actions/Service/OfflineDownload.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Actions/Service/Initialize.action":
/*!************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Actions/Service/Initialize.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.Initialize","ActionResult":{"_Name":"initialize"},"OnFailure":{"Name":"/MDKDemoApp/Actions/GenericBannerMessage.action","Properties":{"Duration":0,"Message":"Failed to Initialize Service - {#ActionResults:initialize/#Property:error}"}},"OnSuccess":"/MDKDemoApp/Actions/Service/InitializeSuccessMessage.action","ShowActivityIndicator":true,"ActivityIndicatorText":"Initializing Application...","Service":"/MDKDemoApp/Services/Sample.service","DefiningRequests":[{"AutomaticallyRetrievesStreams":false,"Name":"Customers","Query":"Customers"},{"AutomaticallyRetrievesStreams":false,"Name":"ProductCategories","Query":"ProductCategories"},{"AutomaticallyRetrievesStreams":true,"Name":"Products","Query":"Products"},{"AutomaticallyRetrievesStreams":false,"Name":"ProductTexts","Query":"ProductTexts"},{"AutomaticallyRetrievesStreams":false,"Name":"SalesOrderHeaders","Query":"SalesOrderHeaders"},{"AutomaticallyRetrievesStreams":false,"Name":"SalesOrderItems","Query":"SalesOrderItems"},{"AutomaticallyRetrievesStreams":false,"Name":"Stock","Query":"Stock"},{"AutomaticallyRetrievesStreams":false,"Name":"Suppliers","Query":"Suppliers"}]}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Actions/Service/InitializeSuccessMessage.action":
/*!**************************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Actions/Service/InitializeSuccessMessage.action ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ToastMessage","ActionResult":{"_Name":"InitializeSuccessMessage"},"Message":"Service Initialized","NumberOfLines":1,"Duration":1}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Actions/Service/OfflineDownload.action":
/*!*****************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Actions/Service/OfflineDownload.action ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"ActionResult":{"_Name":"download"},"OnFailure":{"Name":"/MDKDemoApp/Actions/GenericBannerMessage.action","Properties":{"Duration":0,"Message":"Download Failure - {#ActionResults:download/#Property:error}"}},"Service":"/MDKDemoApp/Services/Sample.service","_Type":"Action.Type.OfflineOData.Download"}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Actions/Service/OfflineUpload.action":
/*!***************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Actions/Service/OfflineUpload.action ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"ActionResult":{"_Name":"upload"},"OnFailure":{"Name":"/MDKDemoApp/Actions/GenericBannerMessage.action","Properties":{"Message":"Upload Failure - {#ActionResults:upload/#Property:error}"}},"OnSuccess":"/MDKDemoApp/Actions/Service/DownloadProgress.action","Service":"/MDKDemoApp/Services/Sample.service","_Type":"Action.Type.OfflineOData.Upload"}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Actions/Service/StartSync.action":
/*!***********************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Actions/Service/StartSync.action ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionMessage":"Sync Complete","CompletionTimeout":3,"Message":"Upload in Process...","OnSuccess":"/MDKDemoApp/Actions/Service/OfflineUpload.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Globals/Application/AppDefinition_Version.global":
/*!***************************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Globals/Application/AppDefinition_Version.global ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"String","Value":"24.4.0"}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Globals/Application/ApplicationName.global":
/*!*********************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Globals/Application/ApplicationName.global ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"Mobile Development Kit Demo Application","_Type":"String"}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Globals/UserMenu/UserSupportEmail.global":
/*!*******************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Globals/UserMenu/UserSupportEmail.global ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"support@sap.com","_Type":"String"}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Globals/UserMenu/UserSupportFaceTime.global":
/*!**********************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Globals/UserMenu/UserSupportFaceTime.global ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1-800-677-7271","_Type":"String"}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Globals/UserMenu/UserSupportPhone.global":
/*!*******************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Globals/UserMenu/UserSupportPhone.global ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1-800-677-7271","_Type":"String"}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Services/Sample.service":
/*!**************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Services/Sample.service ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = {"DestinationName":"SampleServiceV4","OfflineEnabled":true,"SourceType":"Mobile"}

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Images/Android/user-60.png":
/*!*****************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Images/Android/user-60.png ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Images/Application/about.png":
/*!*******************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Images/Application/about.png ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADaSURBVEhLY/z//z8DPsDIyAhloQKC+ogxWMXC1xjIjAbiU3dObF4BEqfYYFVLPyEg9QCIecECDAy+QMO3ENLHBKXxAWkghhkKAppQGi8gxuArQLwOwmS4B8RLIEz8gOjIA4azOJB6AwyGvyA+xWFMs1QBjDxrICUI4TH8Arp4F4hBSB8xYdwLxJuheBlIgBhAjMF2QNwDYRIPCBoM9PovIAWOMFIAMS4mC4waDAfD0GBgGaEHpKQgPAYWIN8CysYLiHExKLfFQpgM/EB8HMLED2hWCA21yGNgAADDqkzGI2nfVAAAAABJRU5ErkJggg==";

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Images/Application/app-settings.png":
/*!**************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Images/Application/app-settings.png ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAWCAMAAAAYXScKAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABJlBMVEUAAAAkOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0AAAD56nixAAAAYHRSTlMAFVRIIVkRU+sCyoXsK93DGtCxGR+/vBgzDg8yRvsHrNpbYeOTDJ746YEDcd/+rxbEfHnuZ9PGBXL5szTkZCamkKpJUhMv/dKd0Sqn4QY9SvPnOBT3WLlf73Al9Ig+zjqszT3cAAAAAWJLR0QAiAUdSAAAAAd0SU1FB+QCFxE1LQwFmPYAAADkSURBVBjTY2DAARiZwBQzC5hiZYOIsnOASE4ubjCPgx0iysQDJHj5EhL4BYAMHiYkUUEhYRFRMTRR8QQRBgaJBElUUakEaQYGGVk5NBPkFRSVlFXQzVVVU9fQ1EKIauvo6ukDaQNDMBciamRswmRqBhM1t7C0sgbSNrYMDHYJdlBRew4HR0snBgZjZwYGlwRXiCiLGy8DA7c7A4OHp5e+t48vRNTPGKjeP4CBQVJPNyEwCGpucEgog7leGMi+8AhfBphtkbrugTpRcPfCXCYdHaPKgCEK91ssF5hyDAdTcfEM1AAA/a0c+9yeniUAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDItMjNUMTc6NTM6NDUrMDA6MDApspUEAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTAyLTIzVDE3OjUzOjQ1KzAwOjAwWO8tuAAAAAl0RVh0bGFiZWwA7omCFGk+qwAAAABJRU5ErkJggg==";

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Images/Application/headset.png":
/*!*********************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Images/Application/headset.png ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAWCAMAAAAYXScKAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABBVBMVEUAAAAkOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0AAADahd0kAAAAVXRSTlMAL4/G3Nq3bg4KoMyGZmje8oIDFsrXPgJc6r8UBcUc1slz7iDwd+J6eewBU2xUSP1HzcD5+JCjCHyzcOEQkZwHBjbrCX76ax3++0JO23gj3c6dkyglMjrRYAAAAAFiS0dEAIgFHUgAAAAHdElNRQfkAwgTFBGZa0uFAAAAxElEQVQY033QZQ/CQAwG4AKDYcNtw4a7Dxvu7vT//xXGIHAwwvuh13uSXpMDkKNSayitjtYDEYMRTWbGorba7I4XOl1uj9x4fSznf2LAFXxNhsJ84NFFos73Y7F44tEkU+SOdCZ7P3JIk5rHglSLJeRI5bBUBqggVkmtIpoAakoVAFilxgHqSm0ANFttkVSR6nRBmV7/BwLv+7gOhvc6Gk9InM6EufR/7hyJiyXiar3Z7j7m9yjlcGS+tpwQzz+WX67wPzfbdBr7rzSIVQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wMy0wOFQxOToyMDoxNyswMDowMJciE1sAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDMtMDhUMTk6MjA6MTcrMDA6MDDmf6vnAAAACXRFWHRsYWJlbADuiKGvFX6YAAAAAElFTkSuQmCC";

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Images/Application/logout.png":
/*!********************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Images/Application/logout.png ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAWCAMAAAAVQ1dNAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABDlBMVEUAAAAkOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0AAADnpiNHAAAAWHRSTlMAKMiCfPyAOC4LBJL9fuA2AartSw6r9Dl49aTlEhpgCtmO1VzxCcf6Qu9RaNZrRFIlyXbmWd5hvBc3beEFb+frcQ/odfg7tNQIWhgicsQgBx0hmurDWwItmlbIgAAAAAFiS0dEAIgFHUgAAAAHdElNRQfkAwgGDB6RIq/WAAAA00lEQVQY02NggABGJmYGdMASwYohxhYRgSrADhXj4ISJcHHzQMV4+fghQgKCQsJQMRFRMXGwmIQkB8I8KWkZICkrKYdkh7yCIpDkVRJAtldZRZWBQY0NxS3y6hoMDJpaYLZ2hDTESh1dBgZ1PYiD9A0gYoZGDAzGJqjuNzVjYDBXRBGy4LFkYLCytkEWs7UDOkPE3gFJyNHJGUTJubjChbjc3D3ADEVJT6iQl7mdN5Tp4+Ir5+cv46ooxhQA1xIYFBwREcETEiqAbF1YIHu4IwMeAAAXVhnf1xeMfAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wMy0wOFQwNjoxMjozMCswMDowMDfIqNcAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDMtMDhUMDY6MTI6MzArMDA6MDBGlRBrAAAACXRFWHRsYWJlbADugKL+xaUqAAAAAElFTkSuQmCC";

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Images/Application/person.png":
/*!********************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Images/Application/person.png ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAMAAAD+dOxOAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAA1VBMVEUAAAAkOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0AAADFobQbAAAARXRSTlMABWm81btnE8vpiWqKtcoSzLQw/iQmL2zUcc5B+RQV+gLQqgMErSjnxlk5yCcZmezrmDuv5vP0rvuiWkxwP/xSPp/vUUAo0jMAAAAAAWJLR0QAiAUdSAAAAAd0SU1FB+QCFxE1LQwFmPYAAACsSURBVBjTY2AAAkYmZhZWNkYGGGDn4OTi5uHkYIcJ8PLxg4QFBKF8IWERMC0qLAYREJeAyrCIQ2hJKaiAlCSElpaRBdNy8tIQAQVFJWUgpaKqqABVqqauoamlqa2uA3eIrp6+q4GhLoxrZGxiaiZjZmpibgSxxMLSyhoENC0tbIB8Wzt7uFZ7OwcGBkFHBgRwBLreyRlJwN6JgcHVBUnAxZU8AVQAFEQFDBgAAFpxGsJudrwzAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTAyLTIzVDE3OjUzOjQ1KzAwOjAwKbKVBAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wMi0yM1QxNzo1Mzo0NSswMDowMFjvLbgAAAAJdEVYdGxhYmVsAO6DiuBdXhMAAAAASUVORK5CYII=";

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Images/Application/settings.png":
/*!**********************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Images/Application/settings.png ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAWCAMAAAAYXScKAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABmFBMVEUAAAAkOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0AAACVHGfdAAAAhnRSTlMAN+X01hgyDYHHTPFRFS2P2kLAsOyiR+t6iPZSzM1UeeK1XPs7/kgQRgUGVzUj+IoCnx5nKkOCLEk+p8mYztlsAZwP2GlW+m38MH3XQK2EvYOslKCAKdUZZDT5vuiaFulb0Qer5GpiEyKy8OoSJgjGJ+e808py7mMaCuaNlf3FDj97DC4xJYE/7F4AAAABYktHRACIBR1IAAAAB3RJTUUH5AIXETUtDAWY9gAAAT5JREFUGNN9kek3QlEUxTdFiUiIRKVUKiQKIRkTngxFFJllJmWKzM7f7d1XaPlgf9hnr9+6w7nnAjkVFYtE4hIUqlQCaZlMVl4BeeUPrCJFtbIGqK1T1VNDHqobNU3UrAV0emoxGHUCbDWZYWkTolVjg53aWezodBRc0eUUdQuhh1y8u3t1fXzpJztjFs/AIF+GyDts9AEjilHPGDBONAFM+lXAVGAamCGaBYhjO+aczL1B5hx90/kF5otL39QfCi8DjhUrEBGvAmvhUBTwxdY3gPim0ryl2N4Bdvdi+2zHgSgBHB4dnzhPgbOARmj3/EIR/33FZfLKyqrZxHdvzTEbPwBysyRJpS1S/XUEcKlvbu/E6XthgTyViT5k2CTFj9nk03P+rET4BUFGtdC8vhV+h4GIsu/4qw+O+8T/+gJ2NDpgx9jykQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wMi0yM1QxNzo1Mzo0NSswMDowMCmylQQAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDItMjNUMTc6NTM6NDUrMDA6MDBY7y24AAAACXRFWHRsYWJlbADugqbLngOxAAAAAElFTkSuQmCC";

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Images/Application/sync.png":
/*!******************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Images/Application/sync.png ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAWCAMAAAAYXScKAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABHVBMVEUAAAAkOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0kOE0AAABcXsNqAAAAXXRSTlMANIK60dKHNTDC/seJborBaPqqJyu3+WQLU21eAYVmR/Y7+1h1ePgC0Ji+9EwTHszAxu1rfQdjgZmsDDgkos4dCex+Q+4K6xwg8kG5FRratrsh4egEkVwiZ8WgHxs/u3nkAAAAAWJLR0QAiAUdSAAAAAd0SU1FB+QDCAYMHpEir9YAAADdSURBVBjTY2AAA0YmZhZWZjZ2BiTAwcnFzcPLy8cdy88BFxQQFBKGsERExcQZJCRBTClBabgCGdlYOXkFIENRSRnZNBVBVTUGBnUNTWRBBhktbaCojoIukpievoFhrBEDg7EJskpTM3MLS0kGmgBFKQYGK2sbK1RRWyEGBrvY2FgjeyRBB0czBobYWCd2ZxkkUSkXV6CoqJs7sn4PT2MgGevlzeqDEPT18wdpDAjU5Q/yggnqBGu5QpkhoVzeYeGmEsIRkYKyIUiREeUCdEpsUGg0qiNlwq0ZYwh4DwBdEBwcwY2cwAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wMy0wOFQwNjoxMjozMCswMDowMDfIqNcAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDMtMDhUMDY6MTI6MzArMDA6MDBGlRBrAAAACXRFWHRsYWJlbADugIrLcA3QAAAAAElFTkSuQmCC";

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Images/Application/update-check.png":
/*!**************************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Images/Application/update-check.png ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAaCAYAAABCfffNAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAMnSURBVEhLvZY9TFNRFMf73VfalFaktbRAi2EQUEkc8CMabZFEYkxEJwyJGBOjbg46ODq4uLgYBnTSOBkdjAm4sQDCYGJEE1FqB6kKRYWA6ae/+94FLDSlJeI/Obn3/u+555x7z7n3Pd3/gF62BeF0OncsLS11ZbPZQ7lcLmgwGGy0s3q9/q3RaBzw+Xwvo9FoWqqXB4fD4TWZTP0YTWDsodlsvqAoyhG73d5mtVo7mbvJ3Cjy2WKx9La0tBQNdh0wEmHxNIbubAOSLgibzXYQ3TECee5yuZySLg6iPcGir7THJLUh/H6/mYD6WDdCTA5JF0ZFRcVOFL+J6CRVMhobG/Xs5gHyWFK6pqYmk+yuQiSSs78mh2XD6/XaCPI9OepsaGgwYS/q8Xi2y2n1bA+gMBkMBtd7LwPk8zTGR2m7aIckrQGij11cl8OyQCW2sv4166+yGxfBxhhPsKNzUkWD2AXl2SSHZaG5uVkUTBjDT7CTQL4i32tqaqxSRU2QArkYDocNkto0uLwBKu0Wu7oiKQ3iVnODv8jhlsDgdrtTOFHkeEtg4ElI0BpJmluj/j3UN4ekDSL3ksnkM5UtEdXV1crCwsL+TCZjkdQKyM0igQ9PTU1lVCck6hIv7XGUz6oaJYCLZp2ZmRmhm2TtT41dBcUkch3r7u4+qRKVlZV2yDiXcq9KlAACO4wR4aQg6uvrjcxP81z5JaXTcXku4mhcHIGkigIDEZoBbZQPbF0m4F10PyChlbvR3t5+HyeTiUTiES/rujMuFTjoSqfTN7D1Q1L5qKurUyiAp8gQL0BQ0gWxvJNAIMDJmfvRD3Hz92F8ml3s1rTW7EQgFov9rq2tPYPiCz674zi7y5m2RiKRvC8fZW+WXR0vbhqHE+iPiOrEYS/9N3K6OCgGP2V4G4cfkVkcjtEOIe+QwbU5EZ9njuq8HC5D3YnW3QAUg098zIjyKMeyJxQKKaK6cDba0dEhtfLBT4aorriorvJ+AP5CVVWVZW5ubphujnvyS2NXgQMPQXzq6ek5tWknAnzTLfPz822pVGolR8vg6BaZfxWPx7OS2krodH8AwYW9MEVYp8AAAAAASUVORK5CYII=";

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Images/Web/user-blue-40.png":
/*!******************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Images/Web/user-blue-40.png ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Images/iOS/user-26.png":
/*!*************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Images/iOS/user-26.png ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKjSURBVEhL3ZY7aJRBFEZ3jYlGUQiCmEgsJD46GwUtBAVjr43RRvEZsDWIhZamECwUVOwUhAg+GqOJINoICiYEBAWbCMH1AUZEiPhcz3fnzuzO7hK1MIUfHOa+5s6/szP/brFcLhdmQrN8/OeasYWyrSsWi27lomYNwzZYB+2gwhI8gZvMG2NsqNh/2oV8gVPQDSNwH7SAJnXAJlgLivcxf5QxU+ovI1It/L3wBa7DKg/XidwKuAZf4aCHk4iF3tEwx4XdC5p4wEO/lWp9zmEPmfBD72iYExLrQRP2WOAvpDk+d4OHKr2jYU5IPILL5lSJ2ELoh1HnJCzwdBKxS/DY3UrvaDjdoO+l0+tM+PNhDF7BCTgOEzAC87zMhN8J6qEDlHonw7kAgzajSsSOwVtY4iHFFnvsqIeSiN2G824btRd2IwwHM5OO8QDH901w7Sq8YxiAzRbINQTqlVS7kO7GRDAzfYc5wczUAsrVSj3UK6l2obkwFcxMesKdbEFXcG1LljPsgjsWyPUZWoPpinvovITdnkoi1gL34CPoexQf4C40e1kSMR3zcbeNZDiDcMaqa0S8A67AJ0f2Uk9nIn4W7FAxGslwDoGObZPNQNjtcAN+QiPdgmVervomUA97HTEayXDaYBJ6vWgRPIensBXSBZUNW0D3axz0Vld8P6hHm/tGMswJiSPwHrrgIryAujdAFDld5mdwFXRZdbf6PF3pHQ1zQkIffQi0wBT0WGIaUbMdvoEWHIbqrTfqfmG5iD8YdsBr0BFNk6aR5syGSejxHrniiqJa+M1wGvSkD2Ef6Len1dHW6hg/ANXopOkCZyIWekfDnAYivhLOgV6otSqB7tRqL68TOeOP/jNI1Cmp14qdLqStLTGn8RO6Yv//7X9dofALWMo6cCYY4xYAAAAASUVORK5CYII=";

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Images/iOS/user.png":
/*!**********************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Images/iOS/user.png ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAWCAQAAACFih+zAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAHdElNRQfkAwgGDB6RIq/WAAABu0lEQVQoz52SP2iTYRCHnzex0SgViiAmEgdJ1c1FQYdCBeuui9XForYWXC3ioKMOgoMFDW4KhQr+Way2gtRFULChIFToUiE0NYIRKVSaNj4OSb9+tXXxN909d/dy790FYvIgJzlMhkCZjzwPk/FoiKXdposJxikjWTo5xDgDochaed5Fn7p/DWv3iTX71ib2W7OXDWSvNS+vukes2cM/ZI81j644730UBbZ7y6JFb9oasYd+aBhdLpprwm1OOusNr1tywq1NmnPRLsCCI1H9NSvuAnCnFa9G/KX3IUEHY1FjnQyHrwDhG8Mci/goHZAgSylCy2yO7BTLkV0iCwm2sBCrPmMewL2c5VXEf5EG/OK5qKeUb/xpwYI/fG1LbGAzgCPejU0x65Dzzjvk7hgddATwkiWTAGZ85m9X9cI9ACYt2QfYZtV+cIef/eSJxuht9biTzpgBL1q1rfH8Fb+b94HTqxtqLmTKx+asOLCCko467YLd6/Z/yiWnHGs0mIBQ5zRzpEmuu5U6m6jSHerx+hbvuOQ7L9hu2rR5e3zrkoOmNjq3fd5zNvp/2YIH4vHwV3ogSwaYoxzkf/UHLbcUW3X6d/8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDMtMDhUMDY6MTI6MzArMDA6MDA3yKjXAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTAzLTA4VDA2OjEyOjMwKzAwOjAwRpUQawAAAAl0RVh0bGFiZWwA7oKC953nYAAAAABJRU5ErkJggg==";

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Images/mdk_logo.png":
/*!**********************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Images/mdk_logo.png ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./build.definitions/version.mdkbundlerversion":
/*!*****************************************************!*\
  !*** ./build.definitions/version.mdkbundlerversion ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "1.1\n";

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Styles/Styles.dark.json":
/*!**************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Styles/Styles.dark.json ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Discount":{"font-color":"#ff0000"},"Price":{"font-color":"#000000"},"tagStyleRed":{"font-color":"#FFB2D2","background-color":"#840606"},"tagStyleBlue":{"font-color":"#A6E0FF","background-color":"#0040B0"},"tagStyleGreen":{"font-color":"#BDE986","background-color":"#1E592F"},"tagStylePink":{"font-color":"#FFAFED","background-color":"#7800A4"},"tagStyleIndigo":{"font-color":"#D3B6FF","background-color":"#2C13AD"},"tagStyleMango":{"font-color":"#FFDF72","background-color":"#8D2A00"},"tagStyleTeal":{"font-color":"#64EDD2","background-color":"#035663"},"tagStyleGrey":{"font-color":"#D5DADD","background-color":"#223548"}}');

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Styles/Styles.json":
/*!*********************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Styles/Styles.json ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Discount":{"font-color":"#ff0000"},"Price":{"font-color":"#000000"}}');

/***/ }),

/***/ "./build.definitions/MDKDemoApp/Styles/Styles.light.json":
/*!***************************************************************!*\
  !*** ./build.definitions/MDKDemoApp/Styles/Styles.light.json ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Discount":{"font-color":"#ff0000"},"Price":{"font-color":"#000000"},"tagStyleRed":{"font-color":"#AB0708","background-color":"#FFDCE8"},"tagStyleBlue":{"font-color":"#0057D3","background-color":"#D1EFFF"},"tagStyleGreen":{"font-color":"#256F3A","background-color":"#EBF5CC"},"tagStylePink":{"font-color":"#A111C2","background-color":"#FFDCF4"},"tagStyleIndigo":{"font-color":"#470CEE","background-color":"#E2D8FF"},"tagStyleMango":{"font-color":"#A93E00","background-color":"#FFF4B8"},"tagStyleTeal":{"font-color":"#046C7A","background-color":"#C2FCEE"},"tagStyleGrey":{"font-color":"#354B5F","background-color":"#EAECEE"}}');

/***/ }),

/***/ "./build.definitions/MDKDemoApp/jsconfig.json":
/*!****************************************************!*\
  !*** ./build.definitions/MDKDemoApp/jsconfig.json ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"include":["Rules/**/*",".typings/**/*"]}');

/***/ }),

/***/ "./build.definitions/tsconfig.json":
/*!*****************************************!*\
  !*** ./build.definitions/tsconfig.json ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"compilerOptions":{"module":"esnext","target":"es2019","moduleResolution":"node","lib":["esnext","dom"],"experimentalDecorators":true,"emitDecoratorMetadata":true,"removeComments":true,"inlineSourceMap":true,"noEmitOnError":false,"noEmitHelpers":true,"baseUrl":".","plugins":[{"transform":"@nativescript/webpack/dist/transformers/NativeClass","type":"raw"}]},"exclude":["node_modules"]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./build.definitions/application-index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=bundle.js.map