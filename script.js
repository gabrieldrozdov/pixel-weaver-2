// Settings object for tracking all parameters and values
let settings = {

	// GRID
	"gridrows-slider": {
		"input": "slider",
		"value": 5,
		"default": 5,
		"min": 1,
		"max": 10,
		"format": "int",
		"unit": "",
	},
	"gridcolumns-slider": {
		"input": "slider",
		"value": 5,
		"default": 5,
		"min": 1,
		"max": 10,
		"format": "int",
		"unit": "",
	},

	// MOTION
	"gridxshift-slider": {
		"input": "slider",
		"value": 50,
		"default": 50,
		"min": 0,
		"max": 100,
		"format": "int",
		"unit": "x",
	},
	"gridyshift-slider": {
		"input": "slider",
		"value": 50,
		"default": 50,
		"min": 0,
		"max": 100,
		"format": "int",
		"unit": "x",
	},
	"movementxposition-slider": {
		"input": "slider",
		"value": 100,
		"default": 100,
		"min": 0,
		"max": 500,
		"format": "int",
		"unit": "%",
		"direction": true,
	},
	"movementxposition-toggle": {
		"input": "toggle",
		"value": true,
		"default": true,
		"offtext": "static",
		"ontext": "dynamic",
	},
	"movementyposition-slider": {
		"input": "slider",
		"value": 100,
		"default": 100,
		"min": 0,
		"max": 500,
		"format": "int",
		"unit": "%",
		"direction": true,
	},
	"movementyposition-toggle": {
		"input": "toggle",
		"value": true,
		"default": true,
		"offtext": "static",
		"ontext": "dynamic",
	},
	"movementscale-slider": {
		"input": "slider",
		"value": 300,
		"default": 300,
		"min": 5,
		"max": 1000,
		"format": "int",
		"unit": "%",
	},
	"movementscale-toggle": {
		"input": "toggle",
		"value": true,
		"default": true,
		"offtext": "static",
		"ontext": "dynamic",
	},
	"interval-slider": {
		"input": "slider",
		"value": 1000,
		"default": 1000,
		"min": 100,
		"max": 10000,
		"format": "int",
		"unit": "ms",
	},
	"interval-toggle": {
		"input": "toggle",
		"value": false,
		"default": false,
		"offtext": "static",
		"ontext": "dynamic",
	},
	"timingfunction-dropdown": {
		"input": "dropdown",
		"value": 'ease',
		"default": 'ease',
		"options": [
			'linear',
			'ease',
			'ease-in',
			'ease-out',
			'ease-in-out',
			'ease-in-quart',
			'ease-out-quart',
			'ease-in-out-quart',
			'ease-in-back',
			'ease-out-back',
			'ease-in-out-back',
		],
	},

	// FILL
	"blendmode-dropdown": {
		"input": "dropdown",
		"value": 'normal',
		"default": 'normal',
		"options": [
			'normal',
			'multiply',
			'screen',
			'overlay',
			'darken',
			'lighten',
			'color-dodge',
			'color-burn',
			'hard-light',
			'soft-light',
			'difference',
			'exclusion',
			'hue',
			'saturation',
			'luminosity',
		],
	},
	"filltype-dropdown": {
		"input": "dropdown",
		"value": 'none',
		"default": 'none',
		"options": [
			'none',
			'color',
			'linear gradient',
			'radial gradient',
		],
	},
	"fillhue-slider": {
		"input": "slider",
		"value": 0,
		"default": 0,
		"min": 0,
		"max": 360,
		"format": "int",
		"unit": "deg",
	},
	"fillhue-toggle": {
		"input": "toggle",
		"value": false,
		"default": false,
		"offtext": "static",
		"ontext": "dynamic",
	},
	"fillsaturation-slider": {
		"input": "slider",
		"value": 100,
		"default": 100,
		"min": 0,
		"max": 100,
		"format": "int",
		"unit": "%",
	},
	"fillsaturation-toggle": {
		"input": "toggle",
		"value": false,
		"default": false,
		"offtext": "static",
		"ontext": "dynamic",
	},
	"filllightness-slider": {
		"input": "slider",
		"value": 50,
		"default": 50,
		"min": 0,
		"max": 100,
		"format": "int",
		"unit": "%",
	},
	"filllightness-toggle": {
		"input": "toggle",
		"value": false,
		"default": false,
		"offtext": "static",
		"ontext": "dynamic",
	},
	"fillalpha-slider": {
		"input": "slider",
		"value": 1,
		"default": 1,
		"min": 0,
		"max": 1,
		"format": "float2",
		"unit": "",
	},
	"fillalpha-toggle": {
		"input": "toggle",
		"value": false,
		"default": false,
		"offtext": "static",
		"ontext": "dynamic",
	},
	"fillangle-slider": {
		"input": "slider",
		"value": 0,
		"default": 0,
		"min": 0,
		"max": 360,
		"format": "int",
		"unit": "deg",
	},
	"fillangle-toggle": {
		"input": "toggle",
		"value": false,
		"default": false,
		"offtext": "equal",
		"ontext": "varied",
	},
	"fillstarthue-slider": {
		"input": "slider",
		"value": 0,
		"default": 0,
		"min": 0,
		"max": 360,
		"format": "int",
		"unit": "deg",
	},
	"fillstarthue-toggle": {
		"input": "toggle",
		"value": false,
		"default": false,
		"offtext": "equal",
		"ontext": "varied",
	},
	"fillstartsaturation-slider": {
		"input": "slider",
		"value": 100,
		"default": 100,
		"min": 0,
		"max": 100,
		"format": "int",
		"unit": "%",
	},
	"fillstartsaturation-toggle": {
		"input": "toggle",
		"value": false,
		"default": false,
		"offtext": "equal",
		"ontext": "varied",
	},
	"fillstartlightness-slider": {
		"input": "slider",
		"value": 50,
		"default": 50,
		"min": 0,
		"max": 100,
		"format": "int",
		"unit": "%",
	},
	"fillstartlightness-toggle": {
		"input": "toggle",
		"value": false,
		"default": false,
		"offtext": "equal",
		"ontext": "varied",
	},
	"fillstartalpha-slider": {
		"input": "slider",
		"value": 1,
		"default": 1,
		"min": 0,
		"max": 1,
		"format": "float2",
		"unit": "",
	},
	"fillstartalpha-toggle": {
		"input": "toggle",
		"value": false,
		"default": false,
		"offtext": "equal",
		"ontext": "varied",
	},
	"fillstartposition-slider": {
		"input": "slider",
		"value": 0,
		"default": 0,
		"min": 0,
		"max": 100,
		"format": "int",
		"unit": "%",
	},
	"fillstartposition-toggle": {
		"input": "toggle",
		"value": false,
		"default": false,
		"offtext": "equal",
		"ontext": "varied",
	},
	"fillendhue-slider": {
		"input": "slider",
		"value": 180,
		"default": 180,
		"min": 0,
		"max": 360,
		"format": "int",
		"unit": "deg",
	},
	"fillendhue-toggle": {
		"input": "toggle",
		"value": false,
		"default": false,
		"offtext": "equal",
		"ontext": "varied",
	},
	"fillendsaturation-slider": {
		"input": "slider",
		"value": 100,
		"default": 100,
		"min": 0,
		"max": 100,
		"format": "int",
		"unit": "%",
	},
	"fillendsaturation-toggle": {
		"input": "toggle",
		"value": false,
		"default": false,
		"offtext": "equal",
		"ontext": "varied",
	},
	"fillendlightness-slider": {
		"input": "slider",
		"value": 50,
		"default": 50,
		"min": 0,
		"max": 100,
		"format": "int",
		"unit": "%",
	},
	"fillendlightness-toggle": {
		"input": "toggle",
		"value": false,
		"default": false,
		"offtext": "equal",
		"ontext": "varied",
	},
	"fillendalpha-slider": {
		"input": "slider",
		"value": 1,
		"default": 1,
		"min": 0,
		"max": 1,
		"format": "float2",
		"unit": "",
	},
	"fillendalpha-toggle": {
		"input": "toggle",
		"value": false,
		"default": false,
		"offtext": "equal",
		"ontext": "varied",
	},
	"fillendposition-slider": {
		"input": "slider",
		"value": 100,
		"default": 100,
		"min": 0,
		"max": 100,
		"format": "int",
		"unit": "%",
	},
	"fillendposition-toggle": {
		"input": "toggle",
		"value": false,
		"default": false,
		"offtext": "equal",
		"ontext": "varied",
	},

	// BORDER
	"borderwidth-slider": {
		"input": "slider",
		"value": 1,
		"default": 1,
		"min": 1,
		"max": 20,
		"format": "int",
		"unit": "px",
	},
	"borderwidth-toggle": {
		"input": "toggle",
		"value": false,
		"default": false,
		"offtext": "static",
		"ontext": "dynamic",
	},
	"borderstyle-dropdown": {
		"input": "dropdown",
		"value": 'none',
		"default": 'none',
		"options": [
			'none',
			'solid',
			'double',
			'dotted',
			'dashed',
			'groove',
			'ridge',
			'inset',
			'outset'
		],
	},
	"borderhue-slider": {
		"input": "slider",
		"value": 0,
		"default": 0,
		"min": 0,
		"max": 360,
		"format": "int",
		"unit": "deg",
	},
	"borderhue-toggle": {
		"input": "toggle",
		"value": false,
		"default": false,
		"offtext": "static",
		"ontext": "dynamic",
	},
	"bordersaturation-slider": {
		"input": "slider",
		"value": 0,
		"default": 0,
		"min": 0,
		"max": 100,
		"format": "int",
		"unit": "%",
	},
	"bordersaturation-toggle": {
		"input": "toggle",
		"value": false,
		"default": false,
		"offtext": "static",
		"ontext": "dynamic",
	},
	"borderlightness-slider": {
		"input": "slider",
		"value": 0,
		"default": 0,
		"min": 0,
		"max": 100,
		"format": "int",
		"unit": "%",
	},
	"borderlightness-toggle": {
		"input": "toggle",
		"value": false,
		"default": false,
		"offtext": "static",
		"ontext": "dynamic",
	},
	"borderalpha-slider": {
		"input": "slider",
		"value": 1,
		"default": 1,
		"min": 0,
		"max": 1,
		"format": "float2",
		"unit": "",
	},
	"borderalpha-toggle": {
		"input": "toggle",
		"value": false,
		"default": false,
		"offtext": "static",
		"ontext": "dynamic",
	},
	"borderradius-slider": {
		"input": "slider",
		"value": 0,
		"default": 0,
		"min": 0,
		"max": 50,
		"format": "int",
		"unit": "%",
	},
	"borderradius-toggle": {
		"input": "toggle",
		"value": false,
		"default": false,
		"offtext": "static",
		"ontext": "dynamic",
	},

	// TRANSFORMATIONS
	"rotatex-slider": {
		"input": "slider",
		"value": 0,
		"default": 0,
		"min": -180,
		"max": 180,
		"format": "int",
		"unit": "deg",
		"direction": true,
	},
	"rotatex-toggle": {
		"input": "toggle",
		"value": false,
		"default": false,
		"offtext": "static",
		"ontext": "dynamic",
	},
	"rotatey-slider": {
		"input": "slider",
		"value": 0,
		"default": 0,
		"min": -180,
		"max": 180,
		"format": "int",
		"unit": "deg",
		"direction": true,
	},
	"rotatey-toggle": {
		"input": "toggle",
		"value": false,
		"default": false,
		"offtext": "static",
		"ontext": "dynamic",
	},
	"rotatez-slider": {
		"input": "slider",
		"value": 0,
		"default": 0,
		"min": -180,
		"max": 180,
		"format": "int",
		"unit": "deg",
		"direction": true,
	},
	"rotatez-toggle": {
		"input": "toggle",
		"value": false,
		"default": false,
		"offtext": "static",
		"ontext": "dynamic",
	},
	"translatex-slider": {
		"input": "slider",
		"value": 0,
		"default": 0,
		"min": -100,
		"max": 100,
		"format": "int",
		"unit": "%",
		"direction": true,
	},
	"translatex-toggle": {
		"input": "toggle",
		"value": false,
		"default": false,
		"offtext": "static",
		"ontext": "dynamic",
	},
	"translatey-slider": {
		"input": "slider",
		"value": 0,
		"default": 0,
		"min": -100,
		"max": 100,
		"format": "int",
		"unit": "%",
		"direction": true,
	},
	"translatey-toggle": {
		"input": "toggle",
		"value": false,
		"default": false,
		"offtext": "static",
		"ontext": "dynamic",
	},
	"scalex-slider": {
		"input": "slider",
		"value": 100,
		"default": 100,
		"min": 25,
		"max": 200,
		"format": "int",
		"unit": "%",
	},
	"scalex-toggle": {
		"input": "toggle",
		"value": false,
		"default": false,
		"offtext": "static",
		"ontext": "dynamic",
	},
	"scaley-slider": {
		"input": "slider",
		"value": 100,
		"default": 100,
		"min": 25,
		"max": 200,
		"format": "int",
		"unit": "%",
	},
	"scaley-toggle": {
		"input": "toggle",
		"value": false,
		"default": false,
		"offtext": "static",
		"ontext": "dynamic",
	},

	// BACKGROUND
	"backgroundtype-dropdown": {
		"input": "dropdown",
		"value": 'color',
		"default": 'color',
		"options": [
			'color',
			'linear gradient',
			'radial gradient',
		],
	},
	"backgroundhue-slider": {
		"input": "slider",
		"value": 0,
		"default": 0,
		"min": 0,
		"max": 360,
		"format": "int",
		"unit": "deg",
	},
	"backgroundhue-toggle": {
		"input": "toggle",
		"value": false,
		"default": false,
		"offtext": "static",
		"ontext": "dynamic",
	},
	"backgroundsaturation-slider": {
		"input": "slider",
		"value": 100,
		"default": 100,
		"min": 0,
		"max": 100,
		"format": "int",
		"unit": "%",
	},
	"backgroundsaturation-toggle": {
		"input": "toggle",
		"value": false,
		"default": false,
		"offtext": "static",
		"ontext": "dynamic",
	},
	"backgroundlightness-slider": {
		"input": "slider",
		"value": 100,
		"default": 100,
		"min": 0,
		"max": 100,
		"format": "int",
		"unit": "%",
	},
	"backgroundlightness-toggle": {
		"input": "toggle",
		"value": false,
		"default": false,
		"offtext": "static",
		"ontext": "dynamic",
	},
	"backgroundangle-slider": {
		"input": "slider",
		"value": 0,
		"default": 0,
		"min": 0,
		"max": 360,
		"format": "int",
		"unit": "deg",
	},
	"backgroundstarthue-slider": {
		"input": "slider",
		"value": 0,
		"default": 0,
		"min": 0,
		"max": 360,
		"format": "int",
		"unit": "deg",
	},
	"backgroundstartsaturation-slider": {
		"input": "slider",
		"value": 100,
		"default": 100,
		"min": 0,
		"max": 100,
		"format": "int",
		"unit": "%",
	},
	"backgroundstartlightness-slider": {
		"input": "slider",
		"value": 50,
		"default": 50,
		"min": 0,
		"max": 100,
		"format": "int",
		"unit": "%",
	},
	"backgroundstartposition-slider": {
		"input": "slider",
		"value": 0,
		"default": 0,
		"min": 0,
		"max": 100,
		"format": "int",
		"unit": "%",
	},
	"backgroundendhue-slider": {
		"input": "slider",
		"value": 180,
		"default": 180,
		"min": 0,
		"max": 360,
		"format": "int",
		"unit": "deg",
	},
	"backgroundendsaturation-slider": {
		"input": "slider",
		"value": 100,
		"default": 100,
		"min": 0,
		"max": 100,
		"format": "int",
		"unit": "%",
	},
	"backgroundendlightness-slider": {
		"input": "slider",
		"value": 50,
		"default": 50,
		"min": 0,
		"max": 100,
		"format": "int",
		"unit": "%",
	},
	"backgroundendposition-slider": {
		"input": "slider",
		"value": 100,
		"default": 100,
		"min": 0,
		"max": 100,
		"format": "int",
		"unit": "%",
	},

	// FILTERS
	"filterblur-slider": {
		"input": "slider",
		"value": 0,
		"default": 0,
		"min": 0,
		"max": 20,
		"format": "int",
		"unit": "px",
	},
	"filterblur-toggle": {
		"input": "toggle",
		"value": false,
		"default": false,
		"offtext": "static",
		"ontext": "dynamic",
	},
	"filterblur-toggle2": {
		"input": "toggle",
		"value": false,
		"default": false,
		"offtext": "off",
		"ontext": "on",
	},
	"filterbrightness-slider": {
		"input": "slider",
		"value": 100,
		"default": 100,
		"min": 0,
		"max": 200,
		"format": "int",
		"unit": "%",
	},
	"filterbrightness-toggle": {
		"input": "toggle",
		"value": false,
		"default": false,
		"offtext": "static",
		"ontext": "dynamic",
	},
	"filterbrightness-toggle2": {
		"input": "toggle",
		"value": false,
		"default": false,
		"offtext": "off",
		"ontext": "on",
	},
	"filtercontrast-slider": {
		"input": "slider",
		"value": 100,
		"default": 100,
		"min": 0,
		"max": 200,
		"format": "int",
		"unit": "%",
	},
	"filtercontrast-toggle": {
		"input": "toggle",
		"value": false,
		"default": false,
		"offtext": "static",
		"ontext": "dynamic",
	},
	"filtercontrast-toggle2": {
		"input": "toggle",
		"value": false,
		"default": false,
		"offtext": "off",
		"ontext": "on",
	},
	"filtersaturate-slider": {
		"input": "slider",
		"value": 100,
		"default": 100,
		"min": 0,
		"max": 200,
		"format": "int",
		"unit": "%",
	},
	"filtersaturate-toggle": {
		"input": "toggle",
		"value": false,
		"default": false,
		"offtext": "static",
		"ontext": "dynamic",
	},
	"filtersaturate-toggle2": {
		"input": "toggle",
		"value": false,
		"default": false,
		"offtext": "off",
		"ontext": "on",
	},
	"filterhuerotate-slider": {
		"input": "slider",
		"value": 0,
		"default": 0,
		"min": 0,
		"max": 360,
		"format": "int",
		"unit": "deg",
	},
	"filterhuerotate-toggle": {
		"input": "toggle",
		"value": false,
		"default": false,
		"offtext": "static",
		"ontext": "dynamic",
	},
	"filterhuerotate-toggle2": {
		"input": "toggle",
		"value": false,
		"default": false,
		"offtext": "off",
		"ontext": "on",
	},
	"filterinvert-slider": {
		"input": "slider",
		"value": 0,
		"default": 0,
		"min": 0,
		"max": 100,
		"format": "int",
		"unit": "%",
	},
	"filterinvert-toggle": {
		"input": "toggle",
		"value": false,
		"default": false,
		"offtext": "static",
		"ontext": "dynamic",
	},
	"filterinvert-toggle2": {
		"input": "toggle",
		"value": false,
		"default": false,
		"offtext": "off",
		"ontext": "on",
	},
	"filtersepia-slider": {
		"input": "slider",
		"value": 0,
		"default": 0,
		"min": 0,
		"max": 100,
		"format": "int",
		"unit": "%",
	},
	"filtersepia-toggle": {
		"input": "toggle",
		"value": false,
		"default": false,
		"offtext": "static",
		"ontext": "dynamic",
	},
	"filtersepia-toggle2": {
		"input": "toggle",
		"value": false,
		"default": false,
		"offtext": "off",
		"ontext": "on",
	},
	"dropshadow-toggle": {
		"input": "toggle",
		"value": false,
		"default": false,
		"offtext": "off",
		"ontext": "on",
	},
	"shadowxoffset-slider": {
		"input": "slider",
		"value": 5,
		"default": 5,
		"min": 0,
		"max": 100,
		"format": "int",
		"unit": "px",
	},
	"shadowxoffset-toggle": {
		"input": "toggle",
		"value": false,
		"default": false,
		"offtext": "static",
		"ontext": "dynamic",
	},
	"shadowyoffset-slider": {
		"input": "slider",
		"value": 5,
		"default": 5,
		"min": 0,
		"max": 100,
		"format": "int",
		"unit": "px",
	},
	"shadowyoffset-toggle": {
		"input": "toggle",
		"value": false,
		"default": false,
		"offtext": "static",
		"ontext": "dynamic",
	},
	"shadowblur-slider": {
		"input": "slider",
		"value": 2,
		"default": 2,
		"min": 0,
		"max": 10,
		"format": "int",
		"unit": "px",
	},
	"shadowblur-toggle": {
		"input": "toggle",
		"value": false,
		"default": false,
		"offtext": "static",
		"ontext": "dynamic",
	},
	"shadowhue-slider": {
		"input": "slider",
		"value": 0,
		"default": 0,
		"min": 0,
		"max": 360,
		"format": "int",
		"unit": "deg",
	},
	"shadowhue-toggle": {
		"input": "toggle",
		"value": false,
		"default": false,
		"offtext": "static",
		"ontext": "dynamic",
	},
	"shadowsaturation-slider": {
		"input": "slider",
		"value": 0,
		"default": 0,
		"min": 0,
		"max": 100,
		"format": "int",
		"unit": "%",
	},
	"shadowsaturation-toggle": {
		"input": "toggle",
		"value": false,
		"default": false,
		"offtext": "static",
		"ontext": "dynamic",
	},
	"shadowlightness-slider": {
		"input": "slider",
		"value": 0,
		"default": 0,
		"min": 0,
		"max": 100,
		"format": "int",
		"unit": "%",
	},
	"shadowlightness-toggle": {
		"input": "toggle",
		"value": false,
		"default": false,
		"offtext": "static",
		"ontext": "dynamic",
	},
	"shadowalpha-slider": {
		"input": "slider",
		"value": .5,
		"default": .5,
		"min": 0,
		"max": 1,
		"format": "float2",
		"unit": "",
	},
	"shadowalpha-toggle": {
		"input": "toggle",
		"value": false,
		"default": false,
		"offtext": "static",
		"ontext": "dynamic",
	},

	// RANDOMIZATION
	"randomsources-dropdown": {
		"input": "dropdown",
		"value": 'randomize',
		"default": 'randomize',
		"options": [
			'randomize',
			'don’t randomize',
		],
	},
	"randomgrid-dropdown": {
		"input": "dropdown",
		"value": 'randomize',
		"default": 'randomize',
		"options": [
			'randomize',
			'don’t randomize',
		],
	},
	"randommotion-dropdown": {
		"input": "dropdown",
		"value": 'randomize',
		"default": 'randomize',
		"options": [
			'randomize',
			'don’t randomize',
		],
	},
	"randomtransformations-dropdown": {
		"input": "dropdown",
		"value": 'randomize',
		"default": 'don’t randomize',
		"options": [
			'randomize',
			'don’t randomize',
		],
	},
	"randomfill-dropdown": {
		"input": "dropdown",
		"value": 'randomize',
		"default": 'don’t randomize',
		"options": [
			'randomize',
			'don’t randomize',
		],
	},
	"randomborder-dropdown": {
		"input": "dropdown",
		"value": 'randomize',
		"default": 'don’t randomize',
		"options": [
			'randomize',
			'don’t randomize',
		],
	},
	"randombackground-dropdown": {
		"input": "dropdown",
		"value": 'randomize',
		"default": 'don’t randomize',
		"options": [
			'randomize',
			'don’t randomize',
		],
	},
	"randomfilters-dropdown": {
		"input": "dropdown",
		"value": 'randomize',
		"default": 'don’t randomize',
		"options": [
			'randomize',
			'don’t randomize',
		],
	},

	// UI
	"uicolorpalette-dropdown": {
		"input": "dropdown",
		"value": 'normie',
		"default": 'normie',
		"options": [
			'normie',
			'terminal',
			'toy factory',
			'minty fresh',
			'forest',
			'rusty bucket',
			'granola bar',
			'tomato',
			'cherry',
			'lime spritz',
			'livestream',
			'yearbook',
			'allergy season',
			'fintech ponzi scheme',
			'caffeinated bulldog',
		],
	},
	"uiforegroundhue-slider": {
		"input": "slider",
		"value": 0,
		"default": 0,
		"min": 0,
		"max": 360,
		"format": "int",
		"unit": "deg",
	},
	"uiforegroundsaturation-slider": {
		"input": "slider",
		"value": 0,
		"default": 0,
		"min": 0,
		"max": 100,
		"format": "int",
		"unit": "%",
	},
	"uiforegroundlightness-slider": {
		"input": "slider",
		"value": 0,
		"default": 0,
		"min": 0,
		"max": 100,
		"format": "int",
		"unit": "%",
	},
	"uibackgroundhue-slider": {
		"input": "slider",
		"value": 0,
		"default": 0,
		"min": 0,
		"max": 360,
		"format": "int",
		"unit": "deg",
	},
	"uibackgroundsaturation-slider": {
		"input": "slider",
		"value": 0,
		"default": 0,
		"min": 0,
		"max": 100,
		"format": "int",
		"unit": "%",
	},
	"uibackgroundlightness-slider": {
		"input": "slider",
		"value": 100,
		"default": 100,
		"min": 0,
		"max": 100,
		"format": "int",
		"unit": "%",
	},
	"uiscale-slider": {
		"input": "slider",
		"value": 2,
		"default": 2,
		"min": 1,
		"max": 4,
		"format": "float1",
		"unit": "x",
	},

	// MISC
	"advanced-toggle": {
		"input": "toggle",
		"value": false,
		"default": false,
		"offtext": "Show Advanced Settings",
		"ontext": "Hide Advanced Settings",
	},
}

// Settings sorted into groups
let settingsGrid = [
	'gridrows-slider',
	'gridcolumns-slider',
]
let settingsMotion = [
	'gridxshift-slider',
	'gridyshift-slider',
	'movementxposition-slider',
	'movementxposition-toggle',
	'movementyposition-slider',
	'movementyposition-toggle',
	'movementscale-slider',
	'movementscale-toggle',
	"interval-slider",
	"interval-toggle",
	"timingfunction-dropdown",
]
let settingsFill = [
	'blendmode-dropdown',
	'filltype-dropdown',
	'fillhue-slider',
	'fillhue-toggle',
	'fillsaturation-slider',
	'fillsaturation-toggle',
	'filllightness-slider',
	'filllightness-toggle',
	'fillalpha-slider',
	'fillalpha-toggle',
	'fillangle-slider',
	'fillangle-toggle',
	'fillstarthue-slider',
	'fillstarthue-toggle',
	'fillstartsaturation-slider',
	'fillstartsaturation-toggle',
	'fillstartlightness-slider',
	'fillstartlightness-toggle',
	'fillstartalpha-slider',
	'fillstartalpha-toggle',
	'fillstartposition-slider',
	'fillstartposition-toggle',
	'fillendhue-slider',
	'fillendhue-toggle',
	'fillendsaturation-slider',
	'fillendsaturation-toggle',
	'fillendlightness-slider',
	'fillendlightness-toggle',
	'fillendalpha-slider',
	'fillendalpha-toggle',
	'fillendposition-slider',
	'fillendposition-toggle',
]
let settingsBorder = [
	'borderwidth-slider',
	'borderwidth-toggle',
	'borderstyle-dropdown',
	'borderhue-slider',
	'borderhue-toggle',
	'bordersaturation-slider',
	'bordersaturation-toggle',
	'borderlightness-slider',
	'borderlightness-toggle',
	'borderalpha-slider',
	'borderalpha-toggle',
	'borderradius-slider',
	'borderradius-toggle',
]
let settingsTransformations = [
	"rotatex-slider",
	"rotatex-toggle",
	"rotatey-slider",
	"rotatey-toggle",
	"rotatez-slider",
	"rotatez-toggle",
	"translatex-slider",
	"translatex-toggle",
	"translatey-slider",
	"translatey-toggle",
	"scalex-slider",
	"scalex-toggle",
	"scaley-slider",
	"scaley-toggle",
]
let settingsBackground = [
	'backgroundtype-dropdown',
	'backgroundhue-slider',
	'backgroundhue-toggle',
	'backgroundsaturation-slider',
	'backgroundsaturation-toggle',
	'backgroundlightness-slider',
	'backgroundlightness-toggle',
	'backgroundangle-slider',
	'backgroundstarthue-slider',
	'backgroundstartsaturation-slider',
	'backgroundstartlightness-slider',
	'backgroundstartposition-slider',
	'backgroundendhue-slider',
	'backgroundendsaturation-slider',
	'backgroundendlightness-slider',
	'backgroundendposition-slider',
]
let settingsFilters = [
	'filterblur-slider',
	'filterblur-toggle',
	'filterbrightness-slider',
	'filterbrightness-toggle',
	'filtercontrast-slider',
	'filtercontrast-toggle',
	'filtersaturate-slider',
	'filtersaturate-toggle',
	'filterhuerotate-slider',
	'filterhuerotate-toggle',
	'filterinvert-slider',
	'filterinvert-toggle',
	'filtersepia-slider',
	'filtersepia-toggle',
	'shadowxoffset-slider',
	'shadowxoffset-toggle',
	'shadowyoffset-slider',
	'shadowyoffset-toggle',
	'shadowblur-slider',
	'shadowblur-toggle',
	'shadowhue-slider',
	'shadowhue-toggle',
	'shadowsaturation-slider',
	'shadowsaturation-toggle',
	'shadowlightness-slider',
	'shadowlightness-toggle',
	'shadowalpha-slider',
	'shadowalpha-toggle',
]
let settingsFiltersToggles = [
	'filterblur-toggle2',
	'filterbrightness-toggle2',
	'filtercontrast-toggle2',
	'filtersaturate-toggle2',
	'filterhuerotate-toggle2',
	'filterinvert-toggle2',
	'filtersepia-toggle2',
	'dropshadow-toggle',
]
let settingsUI = [
	'uicolorpalette-dropdown',
	'uiforegroundhue-slider',
	'uiforegroundsaturation-slider',
	'uiforegroundlightness-slider',
	'uibackgroundhue-slider',
	'uibackgroundsaturation-slider',
	'uibackgroundlightness-slider',
	'uiscale-slider',
]

let groupSettingChange = false;

// Reset functions
function resetSetting(setting) {
	if (settings[setting]["input"] == 'slider') {
		sliderUpdate(setting, settings[setting]['default']);
	} else if (settings[setting]["input"] == 'toggle') {
		toggleUpdate(setting, settings[setting]['default']);
	} else if (settings[setting]["input"] == 'dropdown') {
		dropdownUpdate(setting, settings[setting]['default']);
	}
}
function resetGrid() {
	groupSettingChange = true;
	for (let setting of settingsGrid) {
		resetSetting(setting);
	}
	generateGrid();
	generateGridSources();
	groupSettingChange = false;
	applySettings();
}
function resetFill() {
	groupSettingChange = true;
	for (let setting of settingsFill) {
		resetSetting(setting);
	}
	groupSettingChange = false;
	applySettings();
}
function resetBorder() {
	groupSettingChange = true;
	for (let setting of settingsBorder) {
		resetSetting(setting);
	}
	groupSettingChange = false;
	applySettings();
}
function resetFilters() {
	groupSettingChange = true;
	for (let setting of settingsFilters) {
		resetSetting(setting);
	}
	groupSettingChange = false;
	applySettings();
}
function resetFiltersToggles() {
	groupSettingChange = true;
	for (let setting of settingsFiltersToggles) {
		resetSetting(setting);
	}
	groupSettingChange = false;
	applySettings();
}
function resetTransformations() {
	groupSettingChange = true;
	for (let setting of settingsTransformations) {
		resetSetting(setting);
	}
	groupSettingChange = false;
	applySettings();
}
function resetMotion() {
	groupSettingChange = true;
	for (let setting of settingsMotion) {
		resetSetting(setting);
	}
	groupSettingChange = false;
	applySettings();
}
function resetBackground() {
	groupSettingChange = true;
	for (let setting of settingsBackground) {
		resetSetting(setting);
	}
	groupSettingChange = false;
	applySettings();
}
function resetUI() {
	groupSettingChange = true;
	for (let setting of settingsUI) {
		resetSetting(setting);
	}
	groupSettingChange = false;
	applySettings();
}
function resetAll() {
	// clearSources();
	resetGrid();
	resetFill();
	resetBorder();
	resetFilters();
	resetFiltersToggles();
	resetTransformations();
	resetMotion();
	resetBackground();
}

// Reset setting if label clicked
let controlSettings = document.querySelectorAll(".controls-setting");
for (let controlSetting of controlSettings) {
	let settingLabel = controlSetting.querySelector(".setting-label");
	settingLabel.addEventListener("click", () => {
		for (let setting of controlSetting.querySelectorAll('[data-setting]')) {
			resetSetting(setting.dataset.setting);
		}
	})
}

// Randomization functions
function randomizeSetting(setting) {
	if (settings[setting]["input"] == 'slider') {
		let range = settings[setting]['max'] - settings[setting]['min'];
		let value = Math.random()*range + settings[setting]['min'];
		sliderUpdate(setting, value);
	} else if (settings[setting]["input"] == 'toggle') {
		let value = false;
		if (Math.random() < .5) {
			value = true;
		}
		toggleUpdate(setting, value);
	} else if (settings[setting]["input"] == 'dropdown') {
		let value = settings[setting]['options'][Math.floor(Math.random()*settings[setting]['options'].length)];
		dropdownUpdate(setting, value);
	}
}
function randomizeGrid() {
	groupSettingChange = true;
	for (let setting of settingsGrid) {
		randomizeSetting(setting);
	}
	generateGrid();
	generateGridSources();
	groupSettingChange = false;
	applySettings();
}
function randomizeFill() {
	groupSettingChange = true;
	for (let setting of settingsFill) {
		randomizeSetting(setting);
	}
	groupSettingChange = false;
	applySettings();
}
function randomizeBorder() {
	groupSettingChange = true;
	for (let setting of settingsBorder) {
		randomizeSetting(setting);
	}
	groupSettingChange = false;
	applySettings();
}
function randomizeFilters() {
	groupSettingChange = true;
	for (let setting of settingsFilters) {
		randomizeSetting(setting);
	}
	groupSettingChange = false;
	applySettings();
}
function randomizeTransformations() {
	groupSettingChange = true;
	for (let setting of settingsTransformations) {
		randomizeSetting(setting);
	}
	groupSettingChange = false;
	applySettings();
}
function randomizeMotion() {
	groupSettingChange = true;
	for (let setting of settingsMotion) {
		randomizeSetting(setting);
	}
	groupSettingChange = false;
	applySettings();
}
function randomizeBackground() {
	groupSettingChange = true;
	for (let setting of settingsBackground) {
		randomizeSetting(setting);
	}
	groupSettingChange = false;
	applySettings();
}
function randomizeUI() {
	groupSettingChange = true;
	for (let setting of settingsUI) {
		randomizeSetting(setting);
	}
	groupSettingChange = false;
	applySettings();
}
let randomGroups = {
	'sources': true,
	'grid': true,
	'motion': true,
	"transformations": false,
	"fill": false,
	"border": false,
	"background": false,
	"filters": false
};
function randomizeAll() {
	if (randomGroups['sources'] == true) {
		randomizeSources();
	}
	if (randomGroups['grid'] == true) {
		randomizeGrid();
	}
	if (randomGroups['fill'] == true) {
		randomizeFill();
	}
	if (randomGroups['border'] == true) {
		randomizeBorder();
	}
	if (randomGroups['filters'] == true) {
		randomizeFilters();
	}
	if (randomGroups['transformations'] == true) {
		randomizeTransformations();
	}
	if (randomGroups['motion'] == true) {
		randomizeMotion();
	}
	if (randomGroups['background'] == true) {
		randomizeBackground();
	}
}

// —————————————————————————————————————————————————————————————————————————————
// SLIDERS
// —————————————————————————————————————————————————————————————————————————————

// Returns calculated percent for requested setting
function calculatePercent(target) {
	let range = settings[target]["max"]-settings[target]["min"];
	return (settings[target]["value"]-settings[target]["min"])/range;
}

// Returns calculated value for requested setting based on inputted percent
function calculateValue(percent, target) {
	let range = settings[target]["max"]-settings[target]["min"];
	return (percent*range)+settings[target]["min"];
}

// Rounds value according to settings
function roundCheck(target, value) {
	if (settings[target]["format"] == "int") {
		return Math.round(value);
	} else if (settings[target]["format"] == "float1") {
		return value.toFixed(1);
	} else if (settings[target]["format"] == "float2") {
		return value.toFixed(2);
	}
}
function roundValue(target) {
	if (settings[target]["format"] == "int") {
		settings[target]["value"] = Math.round(settings[target]["value"]);
	} else if (settings[target]["format"] == "float1") {
		settings[target]["value"] = settings[target]["value"].toFixed(1);
	} else if (settings[target]["format"] == "float2") {
		settings[target]["value"] = settings[target]["value"].toFixed(2);
	}
}

// User input for clicking and dragging slider
function sliderActivate(e, target) {
	let slider = document.querySelector(`.slider[data-setting='${target}'`);
	window.addEventListener("mousemove", sliderDrag);
	window.addEventListener("mouseup", sliderDeactivate);
	window.addEventListener("touchmove", sliderDrag);
	window.addEventListener("touchend", sliderDeactivate);
	sliderDrag(e);

	function sliderDrag(e2) {
		const rect = slider.getBoundingClientRect();

		// Handle mobile and desktop movement
		if (e2.touches != null) {
			percent = (e2.touches[0].clientX - rect.left)/(rect.right - rect.left);
		} else {
			percent = (e2.clientX - rect.left)/(rect.right - rect.left);
		}

		if (percent > 1) {
			percent = 1;
		} else if (percent < 0) {
			percent = 0;
		}

		sliderUpdate(target, calculateValue(percent, target));
	}

	function sliderDeactivate() {
		window.removeEventListener("mousemove", sliderDrag);
		window.removeEventListener("mouseup", sliderDeactivate);
		window.removeEventListener("touchmove", sliderDrag);
		window.removeEventListener("touchend", sliderDeactivate);
	}
}

// Refresh slider display and fill with actual value
function sliderRefresh(target) {
	let slider = document.querySelector(`.slider[data-setting='${target}'`);
	let sliderDisplay = slider.querySelector(".slider-display");
	let sliderFill = slider.querySelector(".slider-fill");

	// Make sure value is rounded correctly
	roundValue(target);
	
	sliderDisplay.innerText = settings[target]["value"] + settings[target]["unit"];
	sliderFill.style.width = calculatePercent(target)*100 + "%";
}

// Update slider with exact value
function sliderUpdate(target, value) {
	if (roundCheck(target, value) == settings[target]["value"]) {
		return
	}
	settings[target]["value"] = value;
	sliderRefresh(target);

	// UI special cases
	if (target == "uiscale-slider") {
		uiScale();
	}
	if (target == 'uiforegroundhue-slider' || target == 'uiforegroundsaturation-slider' || target == 'uiforegroundlightness-slider' || target == 'uibackgroundhue-slider' || target == 'uibackgroundsaturation-slider' || target == 'uibackgroundlightness-slider'){
		dropdownUpdate('uicolorpalette-dropdown', 'custom');
	}

	// Regenerate grid when structure changes
	if (target == "gridrows-slider" || target == "gridcolumns-slider") {
		generateGrid();
		generateGridSources();
	} else {
		restartLoop();
	}

	if (groupSettingChange == false) {
		applySettings();
	}
}

// User input for manually entering in slider info
function sliderEdit(target) {
	let slider = document.querySelector(`.slider[data-setting='${target}'`);
	let sliderDisplay = slider.querySelector(".slider-display");
	sliderDisplay.dataset.edit = 1;

	setTimeout(() => {
		window.addEventListener("mousedown", sliderEditClick);
		window.addEventListener("keydown", sliderEditKeypress);
	}, 50);

	let input = "";
	function sliderEditClick() {
		sliderEditFinish();
	}
	function sliderEditKeypress(key) {
		if (key.key == "Escape" || key.key == "Enter") {
			sliderEditFinish();
		} else if (key.key == "Backspace") {
			input = input.substring(0,input.length-1);
			sliderDisplay.innerText = input + settings[target]["unit"];
		} else if (!isNaN(parseInt(key.key)) || key.key == "." || key.key == "-") {
			input = input + key.key;
			sliderDisplay.innerText = input + settings[target]["unit"];
		}
	}
	function sliderEditFinish() {
		let parsedInput = parseFloat(input);

		if (isNaN(parsedInput)) {
			sliderUpdate(target, settings[target]["default"]);
		} else if (parsedInput <= settings[target]["min"]) {
			sliderUpdate(target, settings[target]["min"]);
		} else if (parsedInput >= settings[target]["max"]) {
			sliderUpdate(target, settings[target]["max"]);
		} else {
			sliderUpdate(target, parsedInput);
		}

		sliderDisplay.dataset.edit = 0;
		window.removeEventListener("mousedown", sliderEditClick);
		window.removeEventListener("keydown", sliderEditKeypress);

		if (groupSettingChange == false) {
			applySettings();
		}
	}
}

// Add event listeners to all sliders
let sliders = document.querySelectorAll(".slider");
for (let slider of sliders) {
	sliderRefresh(slider.dataset.setting);
	let sliderDisplay = slider.querySelector(".slider-display");
	let sliderArea = slider.querySelector(".slider-area");
	sliderArea.addEventListener("mousedown", (e) => {sliderActivate(e, slider.dataset.setting)});
	sliderArea.addEventListener("touchstart", (e) => {sliderActivate(e, slider.dataset.setting)});
	sliderDisplay.addEventListener("click", () => {sliderEdit(slider.dataset.setting)});
}

// —————————————————————————————————————————————————————————————————————————————
// TOGGLES
// —————————————————————————————————————————————————————————————————————————————

// Toggles paired with sliders
let activeFilters = { // toggle filters on and off
	'blur': false,
	'brightness': false,
	'contrast': false,
	'saturation': false,
	'hue': false,
	'invert': false,
	'sepia': false,
	'shadow': false,
}
let advancedState = false // advanced settings visibility
function toggleToggle(target) {
	let toggle = document.querySelector(`.toggle[data-setting='${target}'`);
	let toggleDisplay = toggle.querySelector(`.toggle-display`);
	if (settings[target]["value"] == false) {
		settings[target]["value"] = true;
		toggle.dataset.value = true;
		toggleDisplay.innerText = settings[target]["ontext"];
	} else {
		settings[target]["value"] = false;
		toggle.dataset.value = false;
		toggleDisplay.innerText = settings[target]["offtext"];
	}

	if (groupSettingChange == false && target != 'advanced-toggle') {
		initialize = true;
		applySettings();
	}

	// Advanced settings case
	if (target == "advanced-toggle") {
		advancedState = !advancedState;
		let advancedGroups = document.querySelectorAll('.controls-section-advanced');
		if (advancedState == true) {
			for (let group of advancedGroups) {
				group.dataset.hide = 0;
			}
		} else {
			for (let group of advancedGroups) {
				group.dataset.hide = 1;
			}
		}
	}

	// Filter cases
	if (target == 'filterblur-toggle2') {
		activeFilters['blur'] = settings[target]["value"];
	} else if (target == 'filterbrightness-toggle2') {
		activeFilters['brightness'] = settings[target]["value"];
	} else if (target == 'filtercontrast-toggle2') {
		activeFilters['contrast'] = settings[target]["value"];
	} else if (target == 'filtersaturate-toggle2') {
		activeFilters['saturation'] = settings[target]["value"];
	} else if (target == 'filterhuerotate-toggle2') {
		activeFilters['hue'] = settings[target]["value"];
	} else if (target == 'filterinvert-toggle2') {
		activeFilters['invert'] = settings[target]["value"];
	} else if (target == 'filtersepia-toggle2') {
		activeFilters['sepia'] = settings[target]["value"];
	} else if (target == 'dropshadow-toggle') {
		activeFilters['shadow'] = settings[target]["value"];
		activateShadow();
	}
}

// Set toggle value manually
function toggleUpdate(target, value) {
	settings[target]["value"] = value;
	toggleRefresh(target);

	if (groupSettingChange == false && target != 'advanced-toggle') {
		restartLoop();
	}
}

// Refresh toggle display and set with actual value
function toggleRefresh(target) {
	let toggle = document.querySelector(`.toggle[data-setting='${target}'`);
	let toggleDisplay = toggle.querySelector(`.toggle-display`);
	if (settings[target]["value"] == false) {
		toggle.dataset.value = false;
		toggleDisplay.innerText = settings[target]["offtext"];
	} else {
		toggle.dataset.value = true;
		toggleDisplay.innerText = settings[target]["ontext"];
	}

	// Filter cases
	if (target == 'filterblur-toggle2') {
		activeFilters['blur'] = settings[target]["value"];
	} else if (target == 'filterbrightness-toggle2') {
		activeFilters['brightness'] = settings[target]["value"];
	} else if (target == 'filtercontrast-toggle2') {
		activeFilters['contrast'] = settings[target]["value"];
	} else if (target == 'filtersaturate-toggle2') {
		activeFilters['saturation'] = settings[target]["value"];
	} else if (target == 'filterhuerotate-toggle2') {
		activeFilters['hue'] = settings[target]["value"];
	} else if (target == 'filterinvert-toggle2') {
		activeFilters['invert'] = settings[target]["value"];
	} else if (target == 'filtersepia-toggle2') {
		activeFilters['sepia'] = settings[target]["value"];
	} else if (target == 'dropshadow-toggle') {
		activeFilters['shadow'] = settings[target]["value"];
		activateShadow();
	}
}

// Add event listeners to all toggles
let toggles = document.querySelectorAll(".toggle");
for (let toggle of toggles) {
	toggleRefresh(toggle.dataset.setting);
	toggle.addEventListener("click", () => {toggleToggle(toggle.dataset.setting)});
}

// —————————————————————————————————————————————————————————————————————————————
// DROPDOWN
// —————————————————————————————————————————————————————————————————————————————

// Open, close, and toggle dropdown viewstate
function dropdownToggle(target) {
	window.removeEventListener('click', dropdownCloseActive);

	// Close all other open dropdowns
	let activeDropdown = document.querySelector('[data-state="open"]');
	if (activeDropdown != null && activeDropdown.dataset.setting != target) {
		activeDropdown.dataset.state = "closed";
	}

	let dropdown = document.querySelector(`.dropdown[data-setting='${target}']`);
	let dropdownMenu = dropdown.querySelector(`.dropdown-menu`);
	dropdownMenu.scrollTop = 0;
	if (dropdown.dataset.state == "open") {
		dropdownClose(target);
	} else {
		dropdownOpen(target);
	}
}
function dropdownOpen(target) {
	setTimeout(() => {
		window.addEventListener('click', dropdownCloseActive);
	}, 500)

	let dropdown = document.querySelector(`.dropdown[data-setting='${target}']`);
	dropdown.dataset.state = "open";
}
function dropdownClose(target) {
	window.removeEventListener('click', dropdownCloseActive);

	let dropdown = document.querySelector(`.dropdown[data-setting='${target}']`);
	if (dropdown != null) {
		dropdown.dataset.state = "closed";
	}
}

// Close open target
function dropdownCloseActive() {
	let activeDropdown = document.querySelector('[data-state="open"]');
	if (activeDropdown != null) {
		activeDropdown.dataset.state = "closed";
	}
}

// Update dropdown with exact value
function dropdownUpdate(target, value) {
	let dropdown = document.querySelector(`.dropdown[data-setting='${target}'`);
	let dropdownDisplayText = dropdown.querySelector(`.dropdown-display h5`);
	settings[target]['value'] = value;
	dropdownDisplayText.innerText = value;
	dropdownClose(target);

	// Special cases
	if (target == 'uicolorpalette-dropdown') {
		setColorPalette();
	} else if (Object.keys(settings).includes(target)) {
		refreshAllGridSources();
	}
	if (target == 'filltype-dropdown') {
		activateFill();
	}
	if (target == 'backgroundtype-dropdown') {
		activateBackground();
	}
	if (target == 'borderstyle-dropdown') {
		activateBorder();
	}

	// Randomization cases
	let randomization = false;
	if (value == "randomize") {
		randomization = true;
	}
	if (target == 'randomsources-dropdown') {
		randomGroups['sources'] = randomization;
	} else if (target == 'randomgrid-dropdown') {
		randomGroups['grid'] = randomization;
	} else if (target == 'randommotion-dropdown') {
		randomGroups['motion'] = randomization;
	} else if (target == 'randomtransformations-dropdown') {
		randomGroups['transformations'] = randomization;
	} else if (target == 'randomfill-dropdown') {
		randomGroups['fill'] = randomization;
	} else if (target == 'randomborder-dropdown') {
		randomGroups['border'] = randomization;
	} else if (target == 'randombackground-dropdown') {
		randomGroups['background'] = randomization;
	} else if (target == 'randomfilters-dropdown') {
		randomGroups['filters'] = randomization;
	}

	if (groupSettingChange == false) {
		applySettings();
	}
}

// Populate dropdown with options
function dropdownPopulate(target) {
	let dropdown = document.querySelector(`.dropdown[data-setting='${target}'`);
	let dropdownDisplayText = dropdown.querySelector(`.dropdown-display h5`);
	settings[target]['value'] = settings[target]['default'];
	dropdownDisplayText.innerText = settings[target]['default'];

	let dropdownMenu = dropdown.querySelector(`.dropdown-menu`);
	let temp = "";
	for (let option of settings[target]['options']) {
		temp += `<li onclick="dropdownUpdate('${target}', '${option}')">${option}</li>`
	}
	dropdownMenu.innerHTML = temp;
}

// Populate and add event listeners to all dropdowns
let dropdowns = document.querySelectorAll(".dropdown");
for (let dropdown of dropdowns) {
	let dropdownDisplay = dropdown.querySelector(".dropdown-display");
	dropdownPopulate(dropdown.dataset.setting);
	dropdownDisplay.addEventListener("click", () => {dropdownToggle(dropdown.dataset.setting)});
}

// —————————————————————————————————————————————————————————————————————————————
// SOURCE
// —————————————————————————————————————————————————————————————————————————————

// List of all possible source files
let sources = [
	'grid.png',
	'checkerboard.png',
	'diagonal-stripes.png',
	'alternating-dots.png',
	'alternating-bars.png',
	'square-in-square.png',
];
// Currently active sources
let sourceOrder = {};

// Add source
let sourceIndex = 0;
let totalSources = 0;
function addSource() {
	let controlsSourcesContainer = document.querySelector(".controls-sources-container");
	let controlsSources = document.querySelector(".controls-sources");
	controlsSourcesContainer.dataset.empty = 0;

	let sourceKey = 'source' + sourceIndex;
	let settingsKey = sourceKey+"-dropdown";
	let randomDefault = sources[Math.floor(Math.random()*sources.length)];
	settings[settingsKey] = {
		"input": "dropdown",
		"value": randomDefault,
		"default": randomDefault,
		"options": sources,
	}
	sourceOrder[totalSources] = sourceKey;
	totalSources++;

	let temp = `
		<div class="controls-setting" data-setting="${sourceKey}">
			<h4 class="source-label">${totalSources}</h4>
			<div class="dropdown" data-setting="${settingsKey}" data-state="closed">
				<div class="dropdown-display" onclick="dropdownToggle('${settingsKey}')">
					<h5></h5>
					<svg viewBox="0 0 24 24"><path d="M12 21l-12-18h24z"/></svg>
				</div>
				<ul class="dropdown-menu">
				</ul>
			</div>
			<div class="source-buttons">
				<div class="button" onclick="moveSourceUp('${sourceKey}');">
					<div class="button-display button-display-flipped">
						<svg viewBox="0 0 400 400"><polygon points="0 40.77 400 40.769 200 379.231 0 40.77"/></svg>
					</div>
					<div class="button-fill"></div>
				</div>
				<div class="button" onclick="moveSourceDown('${sourceKey}');">
					<div class="button-display">
						<svg viewBox="0 0 400 400"><polygon points="0 40.77 400 40.769 200 379.231 0 40.77"/></svg>
					</div>
					<div class="button-fill"></div>
				</div>
				<div class="button" onclick="removeSource('${sourceKey}');">
					<div class="button-display">
					<svg viewBox="0 0 400 400"><polygon points="376.777 93.934 306.066 23.223 200 129.289 93.934 23.223 23.224 93.934 129.29 200 23.223 306.066 93.934 376.777 200 270.711 306.066 376.777 376.776 306.066 270.71 200 376.777 93.934"/></svg>
					</div>
					<div class="button-fill"></div>
				</div>
			</div>
		</div>
	`
	controlsSources.innerHTML += temp;
	dropdownPopulate(settingsKey);
	sourceIndex++;

	controlsSources.scrollTo(0, controlsSources.scrollHeight);

	randomizeGridSources();
}

// Add new dropdown with specific file selected
function addSourceSpecific(source) {
	let controlsSourcesContainer = document.querySelector(".controls-sources-container");
	let controlsSources = document.querySelector(".controls-sources");
	controlsSourcesContainer.dataset.empty = 0;

	let sourceKey = 'source' + sourceIndex;
	let settingsKey = sourceKey+"-dropdown";
	let randomDefault = sources[sources.indexOf(source)];
	settings[settingsKey] = {
		"input": "dropdown",
		"value": randomDefault,
		"default": randomDefault,
		"options": sources,
	}
	sourceOrder[totalSources] = sourceKey;
	totalSources++;

	let temp = `
		<div class="controls-setting" data-setting="${sourceKey}">
			<h4 class="source-label">${totalSources}</h4>
			<div class="dropdown" data-setting="${settingsKey}" data-state="closed">
				<div class="dropdown-display" onclick="dropdownToggle('${settingsKey}')">
					<h5></h5>
					<svg viewBox="0 0 24 24"><path d="M12 21l-12-18h24z"/></svg>
				</div>
				<ul class="dropdown-menu">
				</ul>
			</div>
			<div class="source-buttons">
				<div class="button" onclick="moveSourceUp('${sourceKey}');">
					<div class="button-display button-display-flipped">
						<svg viewBox="0 0 400 400"><polygon points="0 40.77 400 40.769 200 379.231 0 40.77"/></svg>
					</div>
					<div class="button-fill"></div>
				</div>
				<div class="button" onclick="moveSourceDown('${sourceKey}');">
					<div class="button-display">
						<svg viewBox="0 0 400 400"><polygon points="0 40.77 400 40.769 200 379.231 0 40.77"/></svg>
					</div>
					<div class="button-fill"></div>
				</div>
				<div class="button" onclick="removeSource('${sourceKey}');">
					<div class="button-display">
					<svg viewBox="0 0 400 400"><polygon points="376.777 93.934 306.066 23.223 200 129.289 93.934 23.223 23.224 93.934 129.29 200 23.223 306.066 93.934 376.777 200 270.711 306.066 376.777 376.776 306.066 270.71 200 376.777 93.934"/></svg>
					</div>
					<div class="button-fill"></div>
				</div>
			</div>
		</div>
	`
	controlsSources.innerHTML += temp;
	dropdownPopulate(settingsKey);
	sourceIndex++;

	controlsSources.scrollTo(0, controlsSources.scrollHeight);

	randomizeGridSources();
}

// Change source positions
function moveSourceUp(source) {
	if (totalSources <= 1) {
		return
	}

	let sourcePos = 0;
	for (let key of Object.keys(sourceOrder)) {
		if (sourceOrder[key] == source) {
			sourcePos = parseInt(key);
		}
	}

	// Swap elements
	let swapPos = sourcePos-1;
	if (swapPos < 0) {
		swapPos = totalSources-1;
	}
	let swapSource = sourceOrder[swapPos];
	sourceOrder[sourcePos] = swapSource;
	sourceOrder[swapPos] = source;

	// Reposition DOM
	let controlsSources = document.querySelector(".controls-sources");
	let sourceDOM = controlsSources.querySelector(`[data-setting="${source}"]`);
	let swapDOM = controlsSources.querySelector(`[data-setting="${swapSource}"]`);
	if (swapPos == totalSources-1) {
		controlsSources.appendChild(sourceDOM);
		controlsSources.insertBefore(swapDOM, controlsSources.firstChild);
	} else {
		controlsSources.insertBefore(sourceDOM, swapDOM);
	}

	renumberSources();
	refreshAllGridSources();
}
function moveSourceDown(source) {
	if (totalSources <= 1) {
		return
	}

	let sourcePos = 0;
	for (let key of Object.keys(sourceOrder)) {
		if (sourceOrder[key] == source) {
			sourcePos = parseInt(key);
		}
	}

	// Swap elements
	let swapPos = sourcePos+1;
	if (swapPos > totalSources-1) {
		swapPos = 0;
	}
	let swapSource = sourceOrder[swapPos];
	sourceOrder[sourcePos] = swapSource;
	sourceOrder[swapPos] = source;

	// Reposition DOM
	let controlsSources = document.querySelector(".controls-sources");
	let sourceDOM = controlsSources.querySelector(`[data-setting="${source}"]`);
	let swapDOM = controlsSources.querySelector(`[data-setting="${swapSource}"]`);
	if (swapPos == 0) {
		controlsSources.appendChild(swapDOM);
		controlsSources.insertBefore(sourceDOM, controlsSources.firstChild);
	} else {
		controlsSources.insertBefore(swapDOM, sourceDOM);
	}

	renumberSources();
	refreshAllGridSources();
}

// Remove source
function removeSource(source) {
	totalSources--;
	let sourcePos = 0;
	let prevPositions = {}
	for (let key of Object.keys(sourceOrder)) {
		prevPositions[key] == parseInt(sourceOrder[key]);
		if (sourceOrder[key] == source) {
			sourcePos = parseInt(key);
		}
	}
	for (let key of Object.keys(sourceOrder)) {
		if (parseInt(key) >= sourcePos) {
			if (parseInt(key)+1 <= totalSources) {
				sourceOrder[key] = sourceOrder[parseInt(key)+1];
			} else {
				sourceOrder[key] = "";
			}
		}
	}

	let sourceDOM = document.querySelector(`[data-setting="${source}"]`);
	sourceDOM.remove();

	let controlsSourcesContainer = document.querySelector(".controls-sources-container");
	if (totalSources == 0) {
		controlsSourcesContainer.dataset.empty = 1;
	}

	renumberSources();

	// Renumber grid in control panel
	let controlsGrid = document.querySelector(".controls-grid");
	for (let row=0; row<gridSources.length; row++) {
		for (let col=0; col<gridSources[row].length; col++) {	
			let cell = controlsGrid.querySelector(`[data-cell="[${col},${row}]"]`);
			let display = cell.querySelector('.controls-grid-cell-display');
			if (gridSources[row][col] > sourcePos+1) {
				gridSources[row][col] = gridSources[row][col]-1;
			} else if (gridSources[row][col] == sourcePos+1) {
				gridSources[row][col] = "_";
			}
			display.innerText = gridSources[row][col];
		}
	}
	refreshAllGridSources();
}

// Renumber sources
function renumberSources() {
	let index = 1;
	let controlsSources = document.querySelector(".controls-sources");
	for (let controlsSetting of controlsSources.querySelectorAll('.controls-setting')) {
		let sourceLabel = controlsSetting.querySelector('.source-label');
		sourceLabel.innerText = index;
		index++;
	}
}

// Remove all sources
function clearSources() {
	let controlsSourcesContainer = document.querySelector(".controls-sources-container");
	controlsSourcesContainer.dataset.empty = 1;
	let controlsSources = document.querySelector(".controls-sources");
	controlsSources.innerHTML = "";
	sourceOrder = {};
	totalSources = 0;
	randomizeGridSources();
}

// Generate random sources
function randomizeSources() {
	clearSources();
	for (let i=0; i<Math.floor(Math.random()*5+1); i++) {
		addSource();
	}
}

// —————————————————————————————————————————————————————————————————————————————
// USER-UPLOADED SOURCES
// —————————————————————————————————————————————————————————————————————————————

// Make styled button open correct dialogue
function openDialog() {
	document.querySelector('#source-input').click();
}

// Upload file
let uploadedImages = {};
function handleFileSelect(event) {
	if (window.FileList && window.File && window.FileReader) {

		// Validate file type
		let file = event.target.files[0];
		let fileType = file.name.split('.').pop().toLowerCase();
		if (fileType != 'jpg' && fileType != 'png' && fileType != 'gif' && fileType != 'svg') {
			window.alert('That’s not a valid image file! Try a .jpg, .png, .gif, or .svg file.');
			return;
		}
		let userImage = URL.createObjectURL(file);
		uploadedImages[file.name] = userImage;
		sources.push(file.name);

		// Add new option to all pre-existing dropdowns
		for (let key of Object.keys(sourceOrder)) {
			let dropdown = document.querySelector(`[data-setting="${sourceOrder[key]}-dropdown"]`);
			if (dropdown != null) {
				let dropdownMenu = dropdown.querySelector('.dropdown-menu');
				dropdownMenu.innerHTML += `<li onclick="dropdownUpdate('${sourceOrder[key]}-dropdown', '${file.name}')">${file.name}</li>`;
			}
		}

		addSourceSpecific(file.name);
	}
}

// —————————————————————————————————————————————————————————————————————————————
// GRID
// —————————————————————————————————————————————————————————————————————————————

// Create source grid
let gridSources = [];
function generateGridSources() {
	gridSources = [];
	let temp = "";
	for (let row=0; row<settings['gridrows-slider']['value']; row++) {
		let lineSources = [];
		for (let col=0; col<settings['gridcolumns-slider']['value']; col++) {
			lineSources.push("_");
			temp += `
				<div class="controls-grid-cell" data-cell="[${col},${row}]" onclick="iterateCellSource([${col},${row}])">
					<p class="controls-grid-cell-display">_</p>
					<div class="controls-grid-cell-fill"></div>
				</div>
			`
		}
		gridSources.push(lineSources);
	}

	let controlsGrid = document.querySelector(".controls-grid");
	controlsGrid.style.gridTemplateRows = `repeat(${settings['gridrows-slider']['value']}, minmax(0, 1fr))`;
	controlsGrid.style.gridTemplateColumns = `repeat(${settings['gridcolumns-slider']['value']}, minmax(0, 1fr))`;
	controlsGrid.innerHTML = temp;
	randomizeGridSources();
}

// Change grid cell source by 1
function iterateCellSource(cell) {
	let controlsGrid = document.querySelector(".controls-grid");
	let controlsGridCell = controlsGrid.querySelector(`[data-cell="[${cell}]"]`);
	let controlsGridCellDisplay = controlsGridCell.querySelector(".controls-grid-cell-display");
	let cellValue = gridSources[cell[1]][cell[0]];
	if (cellValue == "_") {
		if (totalSources > 0) {
			cellValue = 1;
		}
	} else {
		cellValue = parseInt(cellValue);
		if (cellValue < totalSources) {
			cellValue++;
		} else {
			cellValue = "_";
		}
	}
	controlsGridCellDisplay.innerText = cellValue;
	gridSources[cell[1]][cell[0]] = cellValue;
	setGridSource(cell, cellValue);
}

// Randomize sources for all grid cells
function randomizeGridSources() {
	let row = 0;
	let col = 0;
	for (let i of gridSources) {
		col = 0;
		for (let j of i) {
			let cellContent = "_";
			if (totalSources > 0) {
				cellContent = Math.floor(Math.random()*totalSources+1);
			}
			i[col] = cellContent;
			let cell = [col,row];
			setGridSource(cell, cellContent);
			col++;
		}
		row++;
	}
}

// Clear all source assignments
function clearGridSources() {
	let row = 0;
	let col = 0;
	for (let i of gridSources) {
		col = 0;
		for (let j of i) {
			let cellContent = "_";
			i[col] = cellContent;
			let cell = [col,row];
			setGridSource(cell, cellContent);
			col++;
		}
		row++;
	}
}

// Set all grid sources to same source
let sourceCounter = 1;
function sameGridSources() {
	if (sourceCounter > totalSources) {
		sourceCounter = 1;
	}
	let row = 0;
	let col = 0;
	for (let i of gridSources) {
		col = 0;
		for (let j of i) {
			let cellContent = "_";
			if (totalSources > 0) {
				cellContent = sourceCounter;
			}
			i[col] = cellContent;
			let cell = [col,row];
			setGridSource(cell, cellContent);
			col++;
		}
		row++;
	}
	sourceCounter++;
}

// Set background image for single cell
function setGridSource(cell, value) {
	let controlsGrid = document.querySelector(".controls-grid");
	let controlsGridCell = controlsGrid.querySelector(`[data-cell="[${cell}]"]`);
	let controlsGridCellDisplay = controlsGridCell.querySelector(".controls-grid-cell-display");
	controlsGridCellDisplay.innerText = value;
	let grid = document.querySelector(".grid");
	let gridCell = grid.querySelector(`[data-cell="[${cell}]"]`);
	let gridCellSrc = gridCell.querySelector(".grid-cell-source");
	if (value != "_") {
		let sourceID = sourceOrder[value-1];
		let img = settings[sourceID+'-dropdown']['value'];
		gridCellSrc.style.backgroundImage = `url("assets/images/${img}")`;
		if (Object.keys(uploadedImages).includes(img)) {
			gridCellSrc.style.backgroundImage = `url("${uploadedImages[img]}")`;
		} else {
			gridCellSrc.style.backgroundImage = `url("assets/images/${img}")`;
		}
	} else {
		gridCellSrc.style.backgroundImage = `unset`;
	}
	applySettings();
}

// Refresh grid cell to match correct source
function refreshGridSource(cell) {
	let grid = document.querySelector(".grid");
	let gridCell = grid.querySelector(`[data-cell="[${cell}]"]`);
	let gridCellSrc = gridCell.querySelector(".grid-cell-source");
	let value = gridSources[cell[1]][cell[0]];
	if (value != "_") {
		let sourceID = sourceOrder[value-1];
		let img = settings[sourceID+'-dropdown']['value'];
		if (Object.keys(uploadedImages).includes(img)) {
			gridCellSrc.style.backgroundImage = `url("${uploadedImages[img]}")`;
		} else {
			gridCellSrc.style.backgroundImage = `url("assets/images/${img}")`;
		}
	} else {
		gridCellSrc.style.backgroundImage = `unset`;
	}
}

// Make sure all grid cells match the correct source
function refreshAllGridSources() {
	let row = 0;
	let col = 0;
	for (let i of gridSources) {
		col = 0;
		for (let j of i) {
			let cell = [col,row];
			refreshGridSource(cell);
			col++;
		}
		row++;
	}
}

// Generate grid and start loop
function generateGrid() {
	let grid = document.querySelector(".grid");
	grid.style.gridTemplateRows = `repeat(${settings['gridrows-slider']['value']}, minmax(0, 1fr))`;
	grid.style.gridTemplateColumns = `repeat(${settings['gridcolumns-slider']['value']}, minmax(0, 1fr))`;
	let temp = "";
	for (let row=0; row<settings['gridrows-slider']['value']; row++) {
		for (let col=0; col<settings['gridcolumns-slider']['value']; col++) {
			temp += `<div class="grid-cell" data-cell="[${col},${row}]"><div class="grid-cell-source"></div></div>`;
		}
	}
	grid.innerHTML = temp;
	applySettings();
	setTimeout(() => {
		restartLoop();
	}, 50)
}
generateGrid();
generateGridSources();

// —————————————————————————————————————————————————————————————————————————————
// LOOP
// —————————————————————————————————————————————————————————————————————————————

// Apply all properties to grid and cells
var loopState = true;
var initialize = true;
function applySettings() {
	if (loopState == false) {
		initialize = true;
	}
	let root = document.documentElement;
	let easing = settings['timingfunction-dropdown']['value'];
	if (loopState != false) {
		if (easing == 'ease-in-quart') {
			easing = 'cubic-bezier(0.5, 0, 0.75, 0)'
		} else if (easing == 'ease-out-quart') {
			easing = 'cubic-bezier(0.25, 1, 0.5, 1)';
		} else if (easing == 'ease-in-out-quart') {
			easing = 'cubic-bezier(0.76, 0, 0.24, 1)';
		} else if (easing == 'ease-in-back') {
			easing = 'cubic-bezier(0.36, 0, 0.66, -0.56)'
		} else if (easing == 'ease-out-back') {
			easing = 'cubic-bezier(0.34, 1.56, 0.64, 1)';
		} else if (easing == 'ease-in-out-back') {
			easing = 'cubic-bezier(0.68, -0.6, 0.32, 1.6)';
		}
		root.style.setProperty('--transition', settings['interval-slider']['value'] + "ms " + easing);
	}

	// Row arrangement
	let grid = document.querySelector(".grid");
	let gridRows = "";
	for (let i=0; i<settings['gridrows-slider']['value']; i++) {
		gridRows += Math.random()*settings["gridyshift-slider"]["value"]+1 + "fr ";
	}
	let gridCols = "";
	for (let i=0; i<settings['gridcolumns-slider']['value']; i++) {
		gridCols += Math.random()*settings["gridxshift-slider"]["value"]+1 + "fr ";
	}
	grid.style.gridTemplateRows = gridRows;
	grid.style.gridTemplateColumns = gridCols;

	let cells = grid.querySelectorAll(".grid-cell");
	for (let cell of cells) {
		let cellSrc = cell.querySelector(".grid-cell-source");

		// Inner portion
		if (loopState != false) {
			if (settings['interval-toggle']['value'] == true) {
				cell.style.transition = Math.random()*(settings['interval-slider']['value']) + "ms " + easing;
				cellSrc.style.transition = Math.random()*(settings['interval-slider']['value']) + "ms " + easing + ", background-image 0s";
			} else {
				cell.style.transition = settings['interval-slider']['value'] + "ms " + easing;
				cellSrc.style.transition = settings['interval-slider']['value'] + "ms " + easing + ", background-image 0s";
			}
		}

		// Source movement
		cellSrc.style.backgroundPosition = `
			${returnSetting('movementxposition')}
			${returnSetting('movementyposition')}
		`
		cellSrc.style.backgroundSize = `
			${returnSetting('movementscale')}
		`

		// Border
		cell.style.border = `
			${returnSetting('borderwidth')}
			${settings["borderstyle-dropdown"]["value"]}
			hsla(
				${returnSetting('borderhue')},
				${returnSetting('bordersaturation')},
				${returnSetting('borderlightness')},
				${returnSetting('borderalpha')}
			)
		`
		cell.style.borderRadius = `
			${returnSetting('borderradius')}
		`
		
		// Transformations
		cell.style.transform = `
			rotateX(${returnSetting('rotatex')})
			rotateY(${returnSetting('rotatey')})
			rotateZ(${returnSetting('rotatez')})
			translateX(${returnSetting('translatex')})
			translateY(${returnSetting('translatey')})
		`
		cell.style.width = `${returnSetting('scalex')}`;
		cell.style.height = `${returnSetting('scaley')}`;
		
		// Fill type
		cellSrc.style.mixBlendMode = settings['blendmode-dropdown']['value'];
		if (settings["filltype-dropdown"]["value"] == 'none') {
			cell.style.backgroundColor = `unset`;
			cell.style.background = `unset`;
		} else if (settings["filltype-dropdown"]["value"] == 'color') {
			cell.style.background = `unset`;
			cell.style.backgroundColor = `
				hsla(
					${returnSetting('fillhue')},
					${returnSetting('fillsaturation')},
					${returnSetting('filllightness')},
					${returnSetting('fillalpha')}
				)
			`
		} else if (settings["filltype-dropdown"]["value"] == 'linear gradient' && initialize == true) {
			cell.style.backgroundColor = `unset`;
			cell.style.background = `
				linear-gradient(
					${returnSetting('fillangle')},
					hsla(
						${returnSetting('fillstarthue')},
						${returnSetting('fillstartsaturation')},
						${returnSetting('fillstartlightness')},
						${returnSetting('fillstartalpha')}
					)
					${returnSetting('fillstartposition')},
					hsla(
						${returnSetting('fillendhue')},
						${returnSetting('fillendsaturation')},
						${returnSetting('fillendlightness')},
						${returnSetting('fillendalpha')}
					)
					${returnSetting('fillendposition')}
				)
			`
		} else if (settings["filltype-dropdown"]["value"] == 'radial gradient' && initialize == true) {
			cell.style.backgroundColor = `unset`;
			cell.style.background = `
				radial-gradient(
					hsla(
						${returnSetting('fillstarthue')},
						${returnSetting('fillstartsaturation')},
						${returnSetting('fillstartlightness')},
						${returnSetting('fillstartalpha')}
					)
					${returnSetting('fillstartposition')},
					hsla(
						${returnSetting('fillendhue')},
						${returnSetting('fillendsaturation')},
						${returnSetting('fillendlightness')},
						${returnSetting('fillendalpha')}
					)
					${returnSetting('fillendposition')}
				)
			`
		} else if (settings["filltype-dropdown"]["value"] == 'conic gradient' && initialize == true) {
			cell.style.backgroundColor = `unset`;
			cell.style.background = `
				conic-gradient(
					from ${returnSetting('fillangle')},
					hsla(
						${returnSetting('fillstarthue')},
						${returnSetting('fillstartsaturation')},
						${returnSetting('fillstartlightness')},
						${returnSetting('fillstartalpha')}
					)
					${returnSetting('fillstartposition')},
					hsla(
						${returnSetting('fillendhue')},
						${returnSetting('fillendsaturation')},
						${returnSetting('fillendlightness')},
						${returnSetting('fillendalpha')}
					)
					${returnSetting('fillendposition')}
				)
			`
		}

		// Background type
		if (settings["backgroundtype-dropdown"]["value"] == 'color') {
			grid.style.background = `unset`;
			grid.style.backgroundColor = `
				hsl(
					${returnSetting('backgroundhue')},
					${returnSetting('backgroundsaturation')},
					${returnSetting('backgroundlightness')}
				)
			`
		} else if (settings["backgroundtype-dropdown"]["value"] == 'linear gradient' && initialize == true) {
			grid.style.backgroundColor = `unset`;
			grid.style.background = `
				linear-gradient(
					${returnSetting('backgroundangle')},
					hsl(
						${returnSetting('backgroundstarthue')},
						${returnSetting('backgroundstartsaturation')},
						${returnSetting('backgroundstartlightness')}
					)
					${returnSetting('backgroundstartposition')},
					hsl(
						${returnSetting('backgroundendhue')},
						${returnSetting('backgroundendsaturation')},
						${returnSetting('backgroundendlightness')}
					)
					${returnSetting('backgroundendposition')}
				)
			`
		} else if (settings["backgroundtype-dropdown"]["value"] == 'radial gradient' && initialize == true) {
			grid.style.backgroundColor = `unset`;
			grid.style.background = `
				radial-gradient(
					hsl(
						${returnSetting('backgroundstarthue')},
						${returnSetting('backgroundstartsaturation')},
						${returnSetting('backgroundstartlightness')}
					)
					${returnSetting('backgroundstartposition')},
					hsl(
						${returnSetting('backgroundendhue')},
						${returnSetting('backgroundendsaturation')},
						${returnSetting('backgroundendlightness')}
					)
					${returnSetting('backgroundendposition')}
				)
			`
		} else if (settings["backgroundtype-dropdown"]["value"] == 'conic gradient' && initialize == true) {
			grid.style.backgroundColor = `unset`;
			grid.style.background = `
				conic-gradient(
					from ${returnSetting('backgroundangle')},
					hsl(
						${returnSetting('backgroundstarthue')},
						${returnSetting('backgroundstartsaturation')},
						${returnSetting('backgroundstartlightness')}
					)
					${returnSetting('backgroundstartposition')},
					hsl(
						${returnSetting('backgroundendhue')},
						${returnSetting('backgroundendsaturation')},
						${returnSetting('backgroundendlightness')}
					)
					${returnSetting('backgroundendposition')}
				)
			`
		}

		// Filters
		let filtersTemp = "";
		if (activeFilters['blur'] == true) {
			filtersTemp += `blur(${returnSetting('filterblur')}) `;
		}
		if (activeFilters['brightness'] == true) {
			filtersTemp += `brightness(${returnSetting('filterbrightness')}) `;
		}
		if (activeFilters['contrast'] == true) {
			filtersTemp += `contrast(${returnSetting('filtercontrast')}) `;
		}
		if (activeFilters['saturation'] == true) {
			filtersTemp += `saturate(${returnSetting('filtersaturate')}) `;
		}
		if (activeFilters['hue'] == true) {
			filtersTemp += `hue-rotate(${returnSetting('filterhuerotate')}) `;
		}
		if (activeFilters['invert'] == true) {
			filtersTemp += `invert(${returnSetting('filterinvert')}) `;
		}
		if (activeFilters['sepia'] == true) {
			filtersTemp += `sepia(${returnSetting('filtersepia')}) `;
		}
		if (activeFilters['shadow'] == true) {
			filtersTemp += `drop-shadow(
				${returnSetting('shadowxoffset')}
				${returnSetting('shadowyoffset')}
				${returnSetting('shadowblur')}
				hsla(
					${returnSetting('shadowhue')},
					${returnSetting('shadowsaturation')},
					${returnSetting('shadowlightness')},
					${returnSetting('shadowalpha')}
				)
			)`;
		}
		cell.style.filter = filtersTemp;
	}

	// UI styling
	root.style.setProperty('--foreground-hsl', `${settings['uiforegroundhue-slider']['value']}deg,${settings['uiforegroundsaturation-slider']['value']}%,${settings['uiforegroundlightness-slider']['value']}%`);
	root.style.setProperty('--background-hsl', `${settings['uibackgroundhue-slider']['value']}deg,${settings['uibackgroundsaturation-slider']['value']}%,${settings['uibackgroundlightness-slider']['value']}%`);

	initialize = false;
}

// Return setting value based on toggle state
function returnSetting(setting) {
	if (`${setting}-toggle` in settings) {
		if (settings[`${setting}-toggle`]["value"] == true) {

			// Random value in both directions for certain properties
			let range, randomValue;
			if (settings[`${setting}-slider`].hasOwnProperty('direction')) {
				range = settings[`${setting}-slider`]["value"];
				randomValue = Math.random()*range;
			} else {
				range = settings[`${setting}-slider`]["value"] - settings[`${setting}-slider`]["min"];
				randomValue = Math.random()*range + settings[`${setting}-slider`]["min"];
			}

			return randomValue + settings[`${setting}-slider`]["unit"]
		} else {
			return settings[`${setting}-slider`]["value"] + settings[`${setting}-slider`]["unit"]
		}
	} else {
		return settings[`${setting}-slider`]["value"] + settings[`${setting}-slider`]["unit"]
	}
}

// Play and pause motion
function playLoop() {
	loopState = true;
	let buttonLoop = document.querySelector('#nav-button-loop');
	buttonLoop.dataset.active = 0;
	restartLoop();
}
function pauseLoop() {
	loopState = false;
	let buttonLoop = document.querySelector('#nav-button-loop');
	buttonLoop.dataset.active = 1;
	endLoop();
}
function toggleLoop() {
	if (loopState == false) {
		playLoop();
	} else {
		pauseLoop();
	}
}

// Loop and restart
var loopDelay;
function restartLoop() {
	clearTimeout(loopDelay);
	initialize = true;
	loop();
}
function endLoop() {
	clearTimeout(loopDelay);
	let root = document.documentElement;
	root.style.setProperty('--transition', 'unset');

	let grid = document.querySelector(".grid");
	let cells = grid.querySelectorAll(".grid-cell");
	for (let cell of cells) {
		let cellSrc = cell.querySelector(".grid-cell-source");
		cell.style.transition = 'unset';
		cellSrc.style.transition = 'unset';
	}
}
function loop() {
	applySettings();
	if (loopState == true) {
		loopDelay = setTimeout(() => {
			loop();
		}, settings["interval-slider"]["value"]);
	}
}

// —————————————————————————————————————————————————————————————————————————————
// UI
// —————————————————————————————————————————————————————————————————————————————


// Activate settings groups
function activateFill() {
	let fillGroupSolid = document.querySelectorAll('[data-fillgroup="solid"]');
	let fillGroupGradient = document.querySelectorAll('[data-fillgroup="gradient"]');
	let fillGroupAngle = document.querySelector('[data-fillgroup="angle"]');
	if (settings['filltype-dropdown']['value'] == 'none') {
		for (let i of fillGroupSolid) {
			i.dataset.hide = 1;
		}
		for (let i of fillGroupGradient) {
			i.dataset.hide = 1;
		}
		fillGroupAngle.dataset.hide = 1;
	} else if (settings['filltype-dropdown']['value'] == 'color') {
		for (let i of fillGroupSolid) {
			i.dataset.hide = 0;
		}
		for (let i of fillGroupGradient) {
			i.dataset.hide = 1;
		}
		fillGroupAngle.dataset.hide = 1;
	} else if (settings['filltype-dropdown']['value'] == 'radial gradient') {
		for (let i of fillGroupSolid) {
			i.dataset.hide = 1;
		}
		for (let i of fillGroupGradient) {
			i.dataset.hide = 0;
		}
		fillGroupAngle.dataset.hide = 1;
	} else {
		for (let i of fillGroupSolid) {
			i.dataset.hide = 1;
		}
		for (let i of fillGroupGradient) {
			i.dataset.hide = 0;
		}
		fillGroupAngle.dataset.hide = 0;
	}
	restartLoop();
}
function activateBorder() {
	let borderSettings = document.querySelectorAll('.setting-border');
	if (settings['borderstyle-dropdown']['value'] == 'none') {
		for (let i of borderSettings) {
			i.dataset.hide = 1;
		}
	} else {
		for (let i of borderSettings) {
			i.dataset.hide = 0;
		}
	}
}
function activateBackground() {
	let backgroundGroupSolid = document.querySelectorAll('[data-backgroundgroup="solid"]');
	let backgroundGroupGradient = document.querySelectorAll('[data-backgroundgroup="gradient"]');
	let backgroundGroupAngle = document.querySelector('[data-backgroundgroup="angle"]');
	if (settings['backgroundtype-dropdown']['value'] == 'color') {
		for (let i of backgroundGroupSolid) {
			i.dataset.hide = 0;
		}
		for (let i of backgroundGroupGradient) {
			i.dataset.hide = 1;
		}
		backgroundGroupAngle.dataset.hide = 1;
	} else if (settings['backgroundtype-dropdown']['value'] == 'radial gradient') {
		for (let i of backgroundGroupSolid) {
			i.dataset.hide = 1;
		}
		for (let i of backgroundGroupGradient) {
			i.dataset.hide = 0;
		}
		backgroundGroupAngle.dataset.hide = 1;
	} else {
		for (let i of backgroundGroupSolid) {
			i.dataset.hide = 1;
		}
		for (let i of backgroundGroupGradient) {
			i.dataset.hide = 0;
		}
		backgroundGroupAngle.dataset.hide = 0;
	}
	restartLoop();
}
function activateShadow() {
	let shadowSettings = document.querySelectorAll('.setting-shadow');
	if (settings['dropshadow-toggle']['value'] == false) {
		for (let i of shadowSettings) {
			i.dataset.hide = 1;
		}
	} else {
		for (let i of shadowSettings) {
			i.dataset.hide = 0;
		}
	}
}

// Open or close settings group
let groups = ['manual','sources','grid','motion','fill','border','filters','transformations','background','random','ui'];
function toggleSettings(group) {
	let controlsSection = document.querySelector(`[data-group="${group}"]`);
	if (parseInt(controlsSection.dataset.active) == 1) {
		controlsSection.dataset.active = 0;
	} else {
		controlsSection.dataset.active = 1;
	}
}
function collapseAllSettings() {
	for (let group of groups) {
		let controlsSection = document.querySelector(`[data-group="${group}"]`);
		controlsSection.dataset.active = 0;
	}
}
function showAllSettings() {
	for (let group of groups) {
		let controlsSection = document.querySelector(`[data-group="${group}"]`);
		controlsSection.dataset.active = 1;
	}
}

// Set UI scale
function uiScale() {
	let root = document.documentElement;
	root.style.setProperty('--unit', settings["uiscale-slider"]["value"] + "px");
	if (settings["uiscale-slider"]["value"] == 1) {
		root.style.setProperty('--fontsize', "12px");
	} else if (settings["uiscale-slider"]["value"] == 2) {
		root.style.setProperty('--fontsize', "14px");
	} else if (settings["uiscale-slider"]["value"] == 3) {
		root.style.setProperty('--fontsize', "18px");
	} else if (settings["uiscale-slider"]["value"] == 4) {
		root.style.setProperty('--fontsize', "24px");
	}
}

// Set UI color palette
function setColorPalette() {
	if (settings['uicolorpalette-dropdown']['value'] == "normie") {
		setUIColors(0,0,0,0,0,100);
	} else if (settings['uicolorpalette-dropdown']['value'] == "terminal") {
		setUIColors(0,0,100,240,100,50);
	} else if (settings['uicolorpalette-dropdown']['value'] == "toy factory") {
		setUIColors(52,88,65,252,2,59);
	} else if (settings['uicolorpalette-dropdown']['value'] == "minty fresh") {
		setUIColors(153,100,81,210,100,12);
	} else if (settings['uicolorpalette-dropdown']['value'] == "forest") {
		setUIColors(121,37,27,85,40,56);
	} else if (settings['uicolorpalette-dropdown']['value'] == "rusty bucket") {
		setUIColors(187,61,60,12,39,50);
	} else if (settings['uicolorpalette-dropdown']['value'] == "granola bar") {
		setUIColors(34,42,71,28,31,48);
	} else if (settings['uicolorpalette-dropdown']['value'] == "tomato") {
		setUIColors(26,8,16,5,80,57);
	} else if (settings['uicolorpalette-dropdown']['value'] == "cherry") {
		setUIColors(353,100,30,9,54,97);
	} else if (settings['uicolorpalette-dropdown']['value'] == "lime spritz") {
		setUIColors(348,100,84,74,95,72);
	} else if (settings['uicolorpalette-dropdown']['value'] == "livestream") {
		setUIColors(63,100,69,278,85,43);
	} else if (settings['uicolorpalette-dropdown']['value'] == "yearbook") {
		setUIColors(62,16,33,38,68,55);
	} else if (settings['uicolorpalette-dropdown']['value'] == "allergy season") {
		setUIColors(60,16,43,9,83,88);
	} else if (settings['uicolorpalette-dropdown']['value'] == "fintech ponzi scheme") {
		setUIColors(9,54,97,147,60,43);
	} else if (settings['uicolorpalette-dropdown']['value'] == "caffeinated bulldog") {
		setUIColors(34,86,62,210,33,9);
	}
}
function setUIColors(h1,s1,l1,h2,s2,l2) {
	let uiDisplay = document.querySelector('[data-setting="uicolorpalette-dropdown"] .dropdown-display h5');
	let temp = settings['uicolorpalette-dropdown']['value'];
	sliderUpdate('uiforegroundhue-slider', h1);
	sliderUpdate('uiforegroundsaturation-slider', s1);
	sliderUpdate('uiforegroundlightness-slider', l1);
	sliderUpdate('uibackgroundhue-slider', h2);
	sliderUpdate('uibackgroundsaturation-slider', s2);
	sliderUpdate('uibackgroundlightness-slider', l2);
	uiDisplay.innerText = temp; // need to reset name otherwise it becomes 'custom'
}

// —————————————————————————————————————————————————————————————————————————————
// MAIN SCREEN UI
// —————————————————————————————————————————————————————————————————————————————

// Open and close menus
let activeMenu = '';
function openMenu(target) {
	if (activeMenu != '') {
		closeMenu(activeMenu);
	}
	activeMenu = target;

	let menu = document.querySelector('#'+target);
	menu.scrollTop = 0;
	menu.dataset.active = 1;
	let content = document.querySelector('.content');
	content.dataset.menu = 1;
	let navButton = document.querySelector('#nav-button-'+target);
	navButton.dataset.active = 1;
}
function closeMenu(target) {
	activeMenu = '';
	let menu = document.querySelector('#'+target);
	menu.dataset.active = 0;
	let content = document.querySelector('.content');
	content.dataset.menu = 0;
	let navButton = document.querySelector('#nav-button-'+target);
	navButton.dataset.active = 0;
}
function toggleMenu(target) {
	if (activeMenu == target) {
		closeMenu(target);
	} else {
		openMenu(target);
	}
}

// —————————————————————————————————————————————————————————————————————————————
// FULLSCREEN
// —————————————————————————————————————————————————————————————————————————————

let fullscreenTimeout;
function fullscreenIn() {
	let content = document.querySelector('.content');
	content.dataset.fullscreen = 1;
	content.dataset.menu = 0;
	let nav = document.querySelector('.nav-container');
	nav.dataset.hide = 1;

	// Show message
	clearInterval(fullscreenTimeout);
	let fullscreen = document.querySelector('.fullscreen');
	let fullscreenMessage = document.querySelector('.fullscreen-message');
	fullscreen.dataset.active = 1;
	fullscreenMessage.dataset.active = 1;
	fullscreenTimeout = setTimeout(() => {
		fullscreenMessage.dataset.active = 0;
		fullscreen.addEventListener('click', fullscreenOut);
	}, 3000)

	// Close all menus
	let menus = document.querySelectorAll('.menu');
	for (let menu of menus) {
		menu.dataset.active = 0;
	}
}

function fullscreenOut() {
	let content = document.querySelector('.content');
	content.dataset.fullscreen = 0;
	let nav = document.querySelector('.nav-container');
	nav.dataset.hide = 0;
	let fullscreen = document.querySelector('.fullscreen');
	fullscreen.dataset.active = 0;
}

// —————————————————————————————————————————————————————————————————————————————
// INITIALIZE
// —————————————————————————————————————————————————————————————————————————————

randomizeSources();
applySettings();