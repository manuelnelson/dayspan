'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var iteratez = require('iteratez');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

/**
 * A class that stores commonly used values.
 */
var Constants = /** @class */ (function () {
    function Constants() {
    }
    /**
     * The number of milliseconds in a second.
     */
    Constants.MILLIS_IN_SECOND = 1000;
    /**
     * The number of seconds in a minute.
     */
    Constants.SECONDS_IN_MINUTE = 60;
    /**
     * The number of minutes in an hour.
     */
    Constants.MINUTES_IN_HOUR = 60;
    /**
     * The number of hours in a day (not including DST days).
     */
    Constants.HOURS_IN_DAY = 24;
    /**
     * The number of days in a week.
     */
    Constants.DAYS_IN_WEEK = 7;
    /**
     * The maximum possible number of days in a year.
     */
    Constants.DAYS_IN_YEAR = 366;
    /**
     * The number of milliseconds in a minute.
     */
    Constants.MILLIS_IN_MINUTE = Constants.MILLIS_IN_SECOND * Constants.SECONDS_IN_MINUTE;
    /**
     * The number of milliseconds in an hour.
     */
    Constants.MILLIS_IN_HOUR = Constants.MILLIS_IN_MINUTE * Constants.SECONDS_IN_MINUTE;
    /**
     * The number of milliseconds in a day (not including DST days).
     */
    Constants.MILLIS_IN_DAY = Constants.MILLIS_IN_HOUR * Constants.HOURS_IN_DAY;
    /**
     * The number of milliseconds in a week (not including ones that include DST).
     */
    Constants.MILLIS_IN_WEEK = Constants.MILLIS_IN_DAY * Constants.DAYS_IN_WEEK;
    /**
     * The number of minutes in a day (not including DST days).
     */
    Constants.MINUTES_IN_DAY = Constants.MINUTES_IN_HOUR * Constants.HOURS_IN_DAY;
    /**
     * The number of months in a quarter.
     */
    Constants.MONTHS_IN_QUARTER = 3;
    /**
     * The number of months in a year.
     */
    Constants.MONTHS_IN_YEAR = 12;
    /**
     * The first month of the year.
     */
    Constants.MONTH_MIN = 0;
    /**
     * The last month of the year.
     */
    Constants.MONTH_MAX = 11;
    /**
     * The first day of a month.
     */
    Constants.DAY_MIN = 1;
    /**
     * The last day of the longest month.
     */
    Constants.DAY_MAX = 31;
    /**
     * The first hour of the day.
     */
    Constants.HOUR_MIN = 0;
    /**
     * The last hour of the day.
     */
    Constants.HOUR_MAX = 23;
    /**
     * The first minute of the hour.
     */
    Constants.MINUTE_MIN = 0;
    /**
     * The last minute of the hour.
     */
    Constants.MINUTE_MAX = 59;
    /**
     * The first second of the minute.
     */
    Constants.SECOND_MIN = 0;
    /**
     * The last second of the minute.
     */
    Constants.SECOND_MAX = 59;
    /**
     * The first millisecond of the second.
     */
    Constants.MILLIS_MIN = 0;
    /**
     * The last millisecond of the second.
     */
    Constants.MILLIS_MAX = 999;
    /**
     * The first day of the week.
     */
    Constants.WEEKDAY_MIN = 0;
    /**
     * The last day of the week.
     */
    Constants.WEEKDAY_MAX = 6;
    /**
     * The default duration for an event.
     */
    Constants.DURATION_DEFAULT = 1;
    /**
     * The default duration unit for an all day event.
     */
    Constants.DURATION_DEFAULT_UNIT_ALL = 'day';
    /**
     * The default duration unit for an event at a given time.
     */
    Constants.DURATION_DEFAULT_UNIT_TIMES = 'hour';
    /**
     * Computes the duration unit given its for an all day event.
     *
     * @param all If the event is all day.
     * @return The default unit for the event.
     */
    Constants.DURATION_DEFAULT_UNIT = function (all) { return all ? Constants.DURATION_DEFAULT_UNIT_ALL :
        Constants.DURATION_DEFAULT_UNIT_TIMES; };
    /**
     * The maximum estimated number of events per day. This is used to calculate
     * [[CalendarEvent.id]] to give each event a unique ID. If you think you will
     * have more events than this per day, you can enlarge the value.
     */
    Constants.MAX_EVENTS_PER_DAY = 24;
    return Constants;
}());

/**
 * The class which contains commonly used functions by the library. These
 * functions and variables exist in a class so they may be overridden if
 * desired.
 */
var Functions = /** @class */ (function () {
    function Functions() {
    }
    /**
     * Determines whether the given input is an array.
     *
     * @param input The variable to test.
     * @returns `true` if the variable is an array, otherwise `false`.
     */
    Functions.isArray = function (input) {
        return input instanceof Array;
    };
    /**
     * Determines whether the two arrays given are stricly equivalent. If the
     * arrays are not the same length or contain the same values in the same order
     * then `false` is returned.
     *
     * @param x The first array to test.
     * @param y The second array to test.
     * @returns `true` if they have the same exact values, otherwise `false`.
     */
    Functions.isArrayEquals = function (x, y) {
        if (x === y)
            return true;
        if (x.length !== y.length)
            return false;
        for (var i = 0; i < x.length; i++) {
            if (x[i] !== y[i]) {
                return false;
            }
        }
        return true;
    };
    /**
     * Determines whether the given input is a string.
     *
     * @param input The variable to test.
     * @returns `true` if the variable is a string, otherwise `false`.
     */
    Functions.isString = function (input) {
        return typeof (input) === 'string';
    };
    /**
     * Determines whether the given input is a finite number (a number which is
     * not infinite or not the result of a divide-by-zero operation).
     *
     * @param input The variable to test.
     * @returns `true` if the variable is a finite number, otherwise `false`.
     */
    Functions.isNumber = function (input) {
        return isFinite(input) && typeof input === 'number';
    };
    /**
     * Determines whether the given input is an object and NOT an array.
     *
     * @param input The variable to test.
     * @returns `true` if the variable is a plain object, otherwise `false`.
     */
    Functions.isObject = function (input) {
        return input !== null && !this.isArray(input) && typeof (input) === 'object';
    };
    /**
     * Determines whether the given input is defined.
     *
     * @param input The variable to test.
     * @return `true` if the variable is defined, otherwise `false`.
     */
    Functions.isDefined = function (input) {
        return typeof (input) !== 'undefined';
    };
    /**
     * Determines whether the given input is defined and not null.
     *
     * @param input The variable to test.
     * @return `true` if the variable is defined and not null, otherwise `false`.
     */
    Functions.isValue = function (input) {
        return input !== null && typeof (input) !== 'undefined';
    };
    /**
     * Determines whether the given input appears to be a valid
     * [[FrequencyValueEvery]].
     *
     * ```typescript
     * Functions.isFrequencyValueEvery({});                   // false
     * Functions.isFrequencyValueEvery([]);                   // false
     * Functions.isFrequencyValueEvery([1]);                  // false
     * Functions.isFrequencyValueEvery(null);                 // false
     * Functions.isFrequencyValueEvery({every:2});            // true
     * Functions.isFrequencyValueEvery({offset:1});           // false
     * Functions.isFrequencyValueEvery({every:2, offset:1});  // true
     * ```
     *
     * @param input The variable to test.
     * @returns `true` if the variable appears to be a [[FrequencyValueEvery]],
     *    otherwise false.
     */
    Functions.isFrequencyValueEvery = function (input) {
        return this.isObject(input) && this.isNumber(input.every);
    };
    /**
     * Determines whether the given input appears to be a valid
     * [[FrequencyValueOneOf]].
     *
     * ```typescript
     * Functions.isFrequencyValueOneOf({});    // false
     * Functions.isFrequencyValueOneOf([]);    // false
     * Functions.isFrequencyValueOneOf([1]);   // true
     * Functions.isFrequencyValueOneOf(null);  // false
     * ```
     *
     * @param input The variable to test.
     * @returns `true` if the variable appears to be a [[FrequencyValueOneOf]],
     *    otherwise false.
     */
    Functions.isFrequencyValueOneOf = function (input) {
        return this.isArray(input) && input.length > 0;
    };
    /**
     * Determines whether the given input appears to be a valid
     * [[FrequencyValueEquals]].
     *
     * ```typescript
     * Functions.isFrequencyValueEquals({});    // false
     * Functions.isFrequencyValueEquals([]);    // false
     * Functions.isFrequencyValueEquals([1]);   // false
     * Functions.isFrequencyValueEquals(null);  // false
     * Functions.isFrequencyValueEquals(0);     // false
     * ```
     *
     * @param input The variable to test.
     * @returns `true` if the variable appears to be a [[FrequencyValueOneOf]],
     *    otherwise false.
     */
    Functions.isFrequencyValueEquals = function (input) {
        return typeof input === 'number' && isFinite(input);
    };
    /**
     * Returns the first argument which is defined.
     *
     * ```typescript
     * Functions.coalesce(3, 4);                // 3
     * Functions.coalesce(undefined, 4);        // 4
     * Functions.coalesce(null, 4);             // null
     * Functions.coalesce(void 0, void 0, 5);   // 5
     * ```
     *
     * @param a The first argument to look at.
     * @param b The second argument to look at.
     * @returns The first defined argument.
     * @see [[Functions.isDefined]]
     */
    Functions.coalesce = function (a, b, c) {
        return this.isDefined(a) ? a : (this.isDefined(b) ? b : c);
    };
    /**
     * Copies values from `from` object and sets them to the `target` object.
     *
     * @param target The object to set values to.
     * @param from The object to copy value references from.
     * @returns The reference to `target`.
     */
    Functions.extend = function (target, from) {
        for (var prop in from) {
            target[prop] = from[prop];
        }
        return target;
    };
    /**
     * Pads the string `x` up to `length` characters with the given `padding`
     * optionally placing the `padding` `before` `x`.
     *
     * ```typescript
     * Functions.pad('hey', 5, '_', false);   // 'hey__'
     * Functions.pad('hey', 5, '_', true);    // '__hey'
     * Functions.pad('heyman', 5, '_', true); // 'heyman'
     * ```
     *
     * @param x The string to pad.
     * @param length The length to pad to.
     * @param padding The string to pad with.
     * @param before If the padding should go before the string to pad.
     * @returns The padded string if any padding needed be added.
     */
    Functions.pad = function (x, length, padding, before) {
        while (x.length < length) {
            before ? x = padding + x : x = x + padding;
        }
        return x;
    };
    /**
     * Pads the number `x` up to `length` digits where the padding is `0` and it
     * goes before `x`. This function will only return the first `length`
     * characters of the padding string representation of the number but can return
     * an alternative number of `first` characters.
     *
     * ```typescript
     * Functions.padNumber(29, 3);      // '029'
     * Functions.padNumber(29, 3, 2);   // '02'
     * Functions.padNumber(9573, 3);    // '957'
     * ```
     *
     * @param x The number to pad with zeros in the beginning.
     * @param length The number of digits the number should be padded to.
     * @param first The number of digits to return from the start of the string.
     * @returns A padded number.
     */
    Functions.padNumber = function (x, length, first) {
        if (first === void 0) { first = length; }
        return this.pad(x + '', length, '0', true).substring(0, first);
    };
    return Functions;
}());

var Format = /** @class */ (function () {
    function Format(formats, escapes) {
        if (escapes === void 0) { escapes = {}; }
        this.cached = {};
        this.sections = [];
        this.add(formats);
        this.escapes = escapes;
    }
    Format.prototype.add = function (keyOrMap, formatter) {
        if (Functions.isString(keyOrMap)) {
            this.getSection(keyOrMap.length).formats[keyOrMap] = formatter;
        }
        else {
            for (var key in keyOrMap) {
                this.getSection(key.length).formats[key] = keyOrMap[key];
            }
        }
        return this;
    };
    Format.prototype.getSection = function (size) {
        var guess = this.sections.length - size;
        var guessSection = this.sections[guess];
        if (guessSection && guessSection.size === size) {
            return guessSection;
        }
        for (var _i = 0, _a = this.sections; _i < _a.length; _i++) {
            var section = _a[_i];
            if (section.size === size) {
                return section;
            }
        }
        var newSection = { size: size, formats: {} };
        this.sections.push(newSection);
        this.sortBySize();
        return newSection;
    };
    Format.prototype.sortBySize = function () {
        this.sections.sort(function (a, b) { return b.size - a.size; });
    };
    Format.prototype.getEscaped = function (x, i) {
        var c = x.charAt(i);
        var escaped = this.escapes[c];
        if (!escaped) {
            return false;
        }
        var start = escaped.start, end = escaped.end, startEscape = escaped.startEscape, endEscape = escaped.endEscape;
        var possibleStart = x.substring(i, i + start.length);
        if (possibleStart !== start) {
            return false;
        }
        var possibleEscapeIndex = i - startEscape.indexOf(start);
        var possibleEscape = x.substring(possibleEscapeIndex, possibleEscapeIndex + startEscape.length);
        if (possibleEscape === startEscape) {
            return false;
        }
        i += start.length;
        var endOffset = endEscape.indexOf(end);
        var last = x.indexOf(end, i);
        var content = x.substring(i, last);
        i = last - endOffset;
        while (last !== -1 && x.substring(i, i + endEscape.length) === endEscape) {
            content = content.substring(0, content.length - endOffset);
            content += end;
            i += endEscape.length;
            last = x.indexOf(end, i);
            content += x.substring(i, last);
            i = last - endOffset;
        }
        if (last === -1) {
            return false;
        }
        return [content, last + end.length];
    };
    Format.prototype.getFormatter = function (format, cache) {
        if (cache === void 0) { cache = false; }
        if (format in this.cached) {
            return this.cached[format];
        }
        var sections = this.sections;
        var formats = [];
        var constant = '';
        var _loop_1 = function (i) {
            var escaped = this_1.getEscaped(format, i);
            if (escaped !== false) {
                var content = escaped[0], end = escaped[1];
                constant += content;
                i = end - 1;
                return out_i_1 = i, "continue";
            }
            var handled = false;
            for (var k = 0; k < sections.length && !handled; k++) {
                var section = sections[k];
                var part = format.substring(i, i + section.size);
                if (part.length === section.size) {
                    var formatter = section.formats[part];
                    if (formatter) {
                        formats.push(formatter);
                        i += section.size - 1;
                        handled = true;
                    }
                }
            }
            if (handled) {
                if (constant) {
                    var copy_1 = constant;
                    formats.splice(formats.length - 1, 0, function () { return copy_1; });
                    constant = '';
                }
            }
            else {
                constant += format.charAt(i);
            }
            out_i_1 = i;
        };
        var this_1 = this, out_i_1;
        for (var i = 0; i < format.length; i++) {
            _loop_1(i);
            i = out_i_1;
        }
        if (constant) {
            formats.push(function () { return constant; });
        }
        var finalFormatter = function (item) {
            var formatted = '';
            for (var _i = 0, formats_1 = formats; _i < formats_1.length; _i++) {
                var formatter = formats_1[_i];
                formatted += formatter(item);
            }
            return formatted;
        };
        if (cache) {
            this.cached[format] = finalFormatter;
        }
        return finalFormatter;
    };
    Format.prototype.format = function (format, item, cache) {
        if (cache === void 0) { cache = false; }
        return this.getFormatter(format, cache)(item);
    };
    return Format;
}());

// tslint:disable: no-magic-numbers
var DayFormat = new Format({
    M: function (_a) {
        var day = _a[0];
        return (day.month + 1) + '';
    },
    Mo: function (_a) {
        var day = _a[0], locale = _a[1];
        return locale.suffix(day.month + 1);
    },
    MM: function (_a) {
        var day = _a[0];
        return Functions.padNumber(day.month + 1, 2);
    },
    MMm: function (_a) {
        var day = _a[0], locale = _a[1];
        return locale.months[3][day.month];
    },
    MMM: function (_a) {
        var day = _a[0], locale = _a[1];
        return locale.months[2][day.month];
    },
    MMMm: function (_a) {
        var day = _a[0], locale = _a[1];
        return locale.months[1][day.month];
    },
    MMMM: function (_a) {
        var day = _a[0], locale = _a[1];
        return locale.months[0][day.month];
    },
    Q: function (_a) {
        var day = _a[0];
        return (day.quarter + 1) + '';
    },
    Qo: function (_a) {
        var day = _a[0], locale = _a[1];
        return locale.suffix(day.quarter + 1);
    },
    D: function (_a) {
        var day = _a[0];
        return day.dayOfMonth + '';
    },
    Do: function (_a) {
        var day = _a[0], locale = _a[1];
        return locale.suffix(day.dayOfMonth);
    },
    DD: function (_a) {
        var day = _a[0];
        return Functions.padNumber(day.dayOfMonth, 2);
    },
    DDD: function (_a) {
        var day = _a[0];
        return day.dayOfYear + '';
    },
    DDDo: function (_a) {
        var day = _a[0], locale = _a[1];
        return locale.suffix(day.dayOfYear);
    },
    DDDD: function (_a) {
        var day = _a[0];
        return Functions.padNumber(day.dayOfYear, 3);
    },
    d: function (_a) {
        var day = _a[0];
        return day.day + '';
    },
    do: function (_a) {
        var day = _a[0], locale = _a[1];
        return locale.suffix(day.day);
    },
    dd: function (_a) {
        var day = _a[0], locale = _a[1];
        return locale.weekdays[3][day.day];
    },
    ddd: function (_a) {
        var day = _a[0], locale = _a[1];
        return locale.weekdays[2][day.day];
    },
    dddd: function (_a) {
        var day = _a[0], locale = _a[1];
        return locale.weekdays[0][day.day];
    },
    e: function (_a) {
        var day = _a[0];
        return day.dayOfWeek + '';
    },
    E: function (_a) {
        var day = _a[0];
        return (day.dayOfWeek + 1) + '';
    },
    eo: function (_a) {
        var day = _a[0], locale = _a[1];
        return locale.suffix(day.dayOfWeek);
    },
    Eo: function (_a) {
        var day = _a[0], locale = _a[1];
        return locale.suffix(day.dayOfWeek + 1);
    },
    w: function (_a) {
        var day = _a[0];
        return day.week + '';
    },
    wo: function (_a) {
        var day = _a[0], locale = _a[1];
        return locale.suffix(day.week);
    },
    ww: function (_a) {
        var day = _a[0];
        return Functions.padNumber(day.week, 2);
    },
    W: function (_a) {
        var day = _a[0];
        return day.weekOfYear + '';
    },
    Wo: function (_a) {
        var day = _a[0], locale = _a[1];
        return locale.suffix(day.weekOfYear);
    },
    WW: function (_a) {
        var day = _a[0];
        return Functions.padNumber(day.weekOfYear, 2);
    },
    Y: function (_a) {
        var day = _a[0];
        return day.year + '';
    },
    YY: function (_a) {
        var day = _a[0];
        return Functions.padNumber(day.year % 100, 2);
    },
    YYYY: function (_a) {
        var day = _a[0];
        return Functions.padNumber(day.year, 4, 10);
    },
    gg: function (_a) {
        var day = _a[0];
        return Functions.padNumber(day.year % 100, 2);
    },
    gggg: function (_a) {
        var day = _a[0];
        return Functions.padNumber(day.year, 4, 10);
    },
    GG: function (_a) {
        var day = _a[0];
        return Functions.padNumber(day.year % 100, 2);
    },
    GGGG: function (_a) {
        var day = _a[0];
        return Functions.padNumber(day.year, 4, 10);
    },
    a: function (_a) {
        var day = _a[0], locale = _a[1];
        return day.hour < 12 ? locale.am : locale.pm;
    },
    A: function (_a) {
        var day = _a[0], locale = _a[1];
        return day.hour < 12 ? locale.am.toUpperCase() : locale.pm.toUpperCase();
    },
    H: function (_a) {
        var day = _a[0];
        return day.hour + '';
    },
    HH: function (_a) {
        var day = _a[0];
        return Functions.padNumber(day.hour, 2);
    },
    h: function (_a) {
        var day = _a[0];
        return ((day.hour % 12) || 12) + '';
    },
    hh: function (_a) {
        var day = _a[0];
        return Functions.padNumber((day.hour % 12) || 12, 2);
    },
    k: function (_a) {
        var day = _a[0];
        return (day.hour + 1) + '';
    },
    kk: function (_a) {
        var day = _a[0];
        return Functions.padNumber(day.hour + 1, 2);
    },
    m: function (_a) {
        var day = _a[0];
        return day.minute + '';
    },
    mm: function (_a) {
        var day = _a[0];
        return Functions.padNumber(day.minute, 2);
    },
    s: function (_a) {
        var day = _a[0];
        return day.seconds + '';
    },
    ss: function (_a) {
        var day = _a[0];
        return Functions.padNumber(day.seconds, 2);
    },
    S: function (_a) {
        var day = _a[0];
        return Functions.padNumber(day.millis, 3, 1);
    },
    SS: function (_a) {
        var day = _a[0];
        return Functions.padNumber(day.millis, 3, 2);
    },
    SSS: function (_a) {
        var day = _a[0];
        return Functions.padNumber(day.millis, 3);
    },
    SSSS: function (_a) {
        var day = _a[0];
        return Functions.padNumber(day.millis, 3) + '0';
    },
    SSSSS: function (_a) {
        var day = _a[0];
        return Functions.padNumber(day.millis, 3) + '00';
    },
    SSSSSS: function (_a) {
        var day = _a[0];
        return Functions.padNumber(day.millis, 3) + '000';
    },
    SSSSSSS: function (_a) {
        var day = _a[0];
        return Functions.padNumber(day.millis, 3) + '0000';
    },
    SSSSSSSS: function (_a) {
        var day = _a[0];
        return Functions.padNumber(day.millis, 3) + '00000';
    },
    SSSSSSSSS: function (_a) {
        var day = _a[0];
        return Functions.padNumber(day.millis, 3) + '000000';
    },
    z: function (_a) {
        var day = _a[0];
        return day.date.toLocaleTimeString('en-us', { timeZoneName: 'short' }).split(' ')[2];
    },
    zz: function (_a) {
        var day = _a[0];
        return day.date.toLocaleTimeString('en-us', { timeZoneName: 'long' }).split(' ')[2];
    },
    Z: function (_a) {
        var day = _a[0];
        return formatOffset(day, ':');
    },
    ZZ: function (_a) {
        var day = _a[0];
        return formatOffset(day, '');
    },
    X: function (_a) {
        var day = _a[0];
        return Math.floor(day.time / 1000) + '';
    },
    x: function (_a) {
        var day = _a[0];
        return day.time + '';
    },
    LT: function (_a) {
        var day = _a[0], locale = _a[1];
        return day.format(locale.formatLT, true);
    },
    LTS: function (_a) {
        var day = _a[0], locale = _a[1];
        return day.format(locale.formatLTS, true);
    },
    L: function (_a) {
        var day = _a[0], locale = _a[1];
        return day.format(locale.formatL, true);
    },
    l: function (_a) {
        var day = _a[0], locale = _a[1];
        return day.format(locale.formatl, true);
    },
    LL: function (_a) {
        var day = _a[0], locale = _a[1];
        return day.format(locale.formatLL, true);
    },
    ll: function (_a) {
        var day = _a[0], locale = _a[1];
        return day.format(locale.formatll, true);
    },
    LLL: function (_a) {
        var day = _a[0], locale = _a[1];
        return day.format(locale.formatLLL, true);
    },
    lll: function (_a) {
        var day = _a[0], locale = _a[1];
        return day.format(locale.formatlll, true);
    },
    LLLL: function (_a) {
        var day = _a[0], locale = _a[1];
        return day.format(locale.formatLLLL, true);
    },
    llll: function (_a) {
        var day = _a[0], locale = _a[1];
        return day.format(locale.formatllll, true);
    },
}, {
    '[': {
        start: '[',
        startEscape: '\\[',
        end: ']',
        endEscape: '\\]'
    },
    "'": {
        start: "'",
        startEscape: "''",
        end: "'",
        endEscape: "''"
    }
});
function formatOffset(day, splitter) {
    var off = day.offset();
    var hr = Math.floor(Math.abs(off) / 100);
    var mn = Math.abs(off) % 100;
    return (off < 0 ? '-' : '+') + Functions.padNumber(hr, 2) + splitter + Functions.padNumber(mn, 2);
}

// tslint:disable: no-magic-numbers
var MAP = [
    'th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'
];
var lc = {
    weekStartsOn: 0,
    firstWeekContainsDate: 4,
    am: 'am',
    pm: 'pm',
    formatLT: 'h:mm A',
    formatLTS: 'h:mm:ss A',
    formatL: 'MM/DD/Y',
    formatl: 'M/D/Y',
    formatLL: 'MMMM D, Y',
    formatll: 'MMM D, Y',
    formatLLL: 'MMMM D, Y h:mm A',
    formatlll: 'MMM D, Y h:mm A',
    formatLLLL: 'dddd, MMMM D, Y h:mm A',
    formatllll: 'ddd, MMM D, Y h:mm A',
    suffix: function (value) {
        var TH_SPECIAL_MIN = 11;
        var TH_SPECIAL_MAX = 13;
        var suffix = value >= TH_SPECIAL_MIN && value <= TH_SPECIAL_MAX ? 'th' : MAP[value % MAP.length];
        return value + suffix;
    },
    identifierTime: function (short) { return short ? 'lll' : 'LLL'; },
    identifierDay: function (short) { return short ? 'll' : 'LL'; },
    identifierWeek: function (short) { return 'wo [week of] Y'; },
    identifierMonth: function (short) { return short ? 'MMM Y' : 'MMMM Y'; },
    identifierQuarter: function (short) { return 'Qo [quarter] Y'; },
    identifierYear: function (short) { return 'Y'; },
    patternNone: function (day) { return 'Does not repeat'; },
    patternDaily: function (day) { return 'Daily'; },
    patternWeekly: function (day) { return 'Weekly on ' + day.format('dddd'); },
    patternMonthlyWeek: function (day) { return 'Monthly on the ' + lc.suffix(day.weekspanOfMonth + 1) + ' ' + day.format('dddd'); },
    patternAnnually: function (day) { return 'Annually on ' + day.format('MMMM Do'); },
    patternAnnuallyMonthWeek: function (day) { return 'Annually on the ' + lc.suffix(day.weekspanOfMonth + 1) + ' ' + day.format('dddd') + ' of ' + day.format('MMMM'); },
    patternWeekday: function (day) { return 'Every weekday (Monday to Friday)'; },
    patternMonthly: function (day) { return 'Monthly on the ' + day.format('Do') + ' day'; },
    patternLastDay: function (day) { return 'Last day of the month'; },
    patternLastDayOfMonth: function (day) { return 'Last day of ' + day.format('MMMM'); },
    patternLastWeekday: function (day) { return 'Last ' + day.format('dddd') + ' in ' + day.format('MMMM'); },
    patternCustom: function (day) { return 'Custom...'; },
    scheduleStartingOn: function (start) { return 'Starting on ' + start.format('MMMM Do, YYYY'); },
    scheduleEndingOn: function (end) { return ' and ending on ' + end.format('MMMM Do, YYYY'); },
    scheduleEndsOn: function (end) { return 'Up until ' + end.format('MMMM Do, YYYY'); },
    scheduleThing: function (thing, start) { return start ? 'The ' + thing + ' will occur' : ' the ' + thing + ' will occur'; },
    scheduleAtTimes: ' at ',
    scheduleDuration: function (duration, unit) { return ' lasting ' + duration + ' ' + (unit ? unit + (duration !== 1 ? 's' : '') + ' ' : ''); },
    scheduleExcludes: ' excluding ',
    scheduleIncludes: ' including ',
    scheduleCancels: ' with cancellations on ',
    ruleDayOfWeek: {
        // every 2nd day of the week
        every: function (every) { return "every " + lc.suffix(every) + " day of the week"; },
        // starting on the 5th day of the week
        offset: function (offset) { return "starting on the " + lc.suffix(offset) + " day of the week"; },
        // on the 1st, 2nd, and 4th day of the week
        oneOf: function (values) { return "on the " + lc.list(values.map(lc.suffix)) + " day of the week"; }
    },
    ruleLastDayOfMonth: {
        // every 3rd last day of the month
        every: function (every) { return "every " + lc.suffix(every) + " last day of the month"; },
        // starting on the 2nd last day of the month
        offset: function (offset) { return "starting on the " + lc.suffix(offset) + " last day of the month"; },
        // on the 1st, 2nd, and 3rd last day of the month
        oneOf: function (values) { return "on the " + lc.list(values.map(lc.suffix)) + " last day of the month"; }
    },
    ruleDayOfMonth: {
        // every 3rd day of the month
        every: function (every) { return "every " + lc.suffix(every) + " day of the month"; },
        // starting on the 2nd day of the month
        offset: function (offset) { return "starting on the " + lc.suffix(offset) + " day of the month"; },
        // on the 1st, 2nd, and 3rd day of the month
        oneOf: function (values) { return "on the " + lc.list(values.map(lc.suffix)) + " day of the month"; }
    },
    ruleDayOfYear: {
        // every 3rd day of the year
        every: function (every) { return "every " + lc.suffix(every) + " day of the year"; },
        // starting on the 2nd day of the year
        offset: function (offset) { return "starting on the " + lc.suffix(offset + 1) + " day of the year"; },
        // on the 1st, 2nd, and 3rd day of the year
        oneOf: function (values) { return "on the " + lc.list(values.map(lc.suffix)) + " day of the year"; }
    },
    ruleYear: {
        // every 3rd year
        every: function (every) { return "every " + lc.suffix(every) + " year"; },
        // starting in 2018
        offset: function (offset) { return "starting in " + offset; },
        // in 2019, 2020, and 2021
        oneOf: function (values) { return "in " + lc.list(values.map(function (x) { return x.toString(); })); }
    },
    ruleMonth: {
        // every 3rd month
        every: function (every) { return "every " + lc.suffix(every) + " month"; },
        // starting in February
        offset: function (offset) { return "starting in " + lc.months[0][offset]; },
        // in February, May, and June
        oneOf: function (values) { return "in " + lc.list(values.map(function (x) { return lc.months[0][x]; })); }
    },
    ruleDay: {
        // every 2nd day of the week
        every: function (every) { return "every " + lc.suffix(every) + " day of the week"; },
        // starting on Tuesday
        offset: function (offset) { return "starting on " + lc.weekdays[0][offset]; },
        // on Monday, Wednesday, and Friday
        oneOf: function (values) { return "on " + lc.list(values.map(function (v) { return lc.weekdays[0][v]; })); }
    },
    ruleWeek: {
        // every 3rd week of the year
        every: function (every) { return "every " + lc.suffix(every) + " week of the year"; },
        // starting on the 2nd week of the year
        offset: function (offset) { return "starting on the " + lc.suffix(offset) + " week of the year"; },
        // on the 1st, 2nd, and 3rd week of the year
        oneOf: function (values) { return "on the " + lc.list(values.map(lc.suffix)) + " week of the year"; }
    },
    ruleWeekOfYear: {
        // every 3rd week of the year
        every: function (every) { return "every " + lc.suffix(every) + " week of the year"; },
        // starting on the 2nd week of the year
        offset: function (offset) { return "starting on the " + lc.suffix(offset) + " week of the year"; },
        // on the 1st, 2nd, and 3rd week of the year
        oneOf: function (values) { return "on the " + lc.list(values.map(lc.suffix)) + " week of the year"; }
    },
    ruleWeekspanOfYear: {
        // every 3rd weekspan of the year
        every: function (every) { return "every " + lc.suffix(every + 1) + " weekspan of the year"; },
        // starting on the 2nd weekspan of the year
        offset: function (offset) { return "starting on the " + lc.suffix(offset + 1) + " weekspan of the year"; },
        // on the 1st, 2nd, and 3rd weekspan of the year
        oneOf: function (values) { return "on the " + lc.list(values.map(function (x) { return lc.suffix(x + 1); })) + " weekspan of the year"; }
    },
    ruleFullWeekOfYear: {
        // every 3rd full week of the year
        every: function (every) { return "every " + lc.suffix(every) + " full week of the year"; },
        // starting on the 2nd full week of the year
        offset: function (offset) { return "starting on the " + lc.suffix(offset) + " full week of the year"; },
        // on the 1st, 2nd, and 3rd full week of the year
        oneOf: function (values) { return "on the " + lc.list(values.map(lc.suffix)) + " full week of the year"; }
    },
    ruleLastWeekspanOfYear: {
        // every 3rd last weekspan of the year
        every: function (every) { return "every " + lc.suffix(every + 1) + " last weekspan of the year"; },
        // starting on the 2nd last weekspan of the year
        offset: function (offset) { return "starting on the " + lc.suffix(offset + 1) + " last weekspan of the year"; },
        // on the 1st, 2nd, and 3rd last weekspan of the year
        oneOf: function (values) { return "on the " + lc.list(values.map(function (x) { return lc.suffix(x + 1); })) + " last weekspan of the year"; }
    },
    ruleLastFullWeekOfYear: {
        // every 3rd last full week of the year
        every: function (every) { return "every " + lc.suffix(every) + " last full week of the year"; },
        // starting on the 2nd last full week of the year
        offset: function (offset) { return "starting on the " + lc.suffix(offset) + " last full week of the year"; },
        // on the 1st, 2nd, and 3rd last full week of the year
        oneOf: function (values) { return "on the " + lc.list(values.map(lc.suffix)) + " last full week of the year"; }
    },
    ruleWeekOfMonth: {
        // every 3rd week of the month
        every: function (every) { return "every " + lc.suffix(every) + " week of the month"; },
        // starting on the 2nd week of the month
        offset: function (offset) { return "starting on the " + lc.suffix(offset) + " week of the month"; },
        // on the 1st, 2nd, and 3rd week of the month
        oneOf: function (values) { return "on the " + lc.list(values.map(lc.suffix)) + " week of the month"; }
    },
    ruleFullWeekOfMonth: {
        // every 3rd full week of the month
        every: function (every) { return "every " + lc.suffix(every) + " full week of the month"; },
        // starting on the 2nd full week of the month
        offset: function (offset) { return "starting on the " + lc.suffix(offset) + " full week of the month"; },
        // on the 1st, 2nd, and 3rd full week of the month
        oneOf: function (values) { return "on the " + lc.list(values.map(lc.suffix)) + " full week of the month"; }
    },
    ruleWeekspanOfMonth: {
        // every 3rd weekspan of the month
        every: function (every) { return "every " + lc.suffix(every + 1) + " weekspan of the month"; },
        // starting on the 2nd weekspan of the month
        offset: function (offset) { return "starting on the " + lc.suffix(offset + 1) + " weekspan of the month"; },
        // on the 1st, 2nd, and 3rd weekspan of the month
        oneOf: function (values) { return "on the " + lc.list(values.map(function (x) { return lc.suffix(x + 1); })) + " weekspan of the month"; }
    },
    ruleLastFullWeekOfMonth: {
        // every 3rd last full week of the month
        every: function (every) { return "every " + lc.suffix(every) + " last full week of the month"; },
        // starting on the 2nd last full week of the month
        offset: function (offset) { return "starting on the " + lc.suffix(offset) + " last full week of the month"; },
        // on the 1st, 2nd, and 3rd full week of the month
        oneOf: function (values) { return "on the " + lc.list(values.map(lc.suffix)) + " last full week of the month"; }
    },
    ruleLastWeekspanOfMonth: {
        // every 3rd last weekspan of the month
        every: function (every) { return "every " + lc.suffix(every + 1) + " last weekspan of the month"; },
        // starting on the 2nd last weekspan of the month
        offset: function (offset) { return "starting on the " + lc.suffix(offset + 1) + " last weekspan of the month"; },
        // on the 1st, 2nd, and 3rd last weekspan of the month
        oneOf: function (values) { return "on the " + lc.list(values.map(function (x) { return lc.suffix(x + 1); })) + " last weekspan of the month"; }
    },
    summaryDay: function (short, dayOfWeek, year) { return (dayOfWeek ? (short ? 'ddd, ' : 'dddd, ') : '') + (short ? 'MMM ' : 'MMMM ') + 'Do' + (year ? ' YYYY' : ''); },
    summaryWeek: function (short, dayOfWeek, year) { return (dayOfWeek ? (short ? 'ddd, ' : 'dddd, ') : '') + (short ? 'MMM ' : 'MMMM ') + 'Do' + (year ? ' YYYY' : ''); },
    summaryMonth: function (short, dayOfWeek, year) { return (short ? 'MMM' : 'MMMM') + (year ? ' YYYY' : ''); },
    summaryYear: function (short, dayOfWeek, year) { return (year ? 'YYYY' : ''); },
    list: function (items) {
        var last = items.length - 1;
        var out = items[0];
        for (var i = 1; i < last; i++) {
            out += ', ' + items[i];
        }
        if (last > 0) {
            out += ' and ' + items[last];
        }
        return out;
    },
    months: [
        ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
        ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        ['Ja', 'F', 'Mr', 'Ap', 'My', 'Je', 'Jl', 'Ag', 'S', 'O', 'N', 'D']
    ],
    weekdays: [
        ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
        ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa'],
    ],
};

/**
 * Holds a reference to a value. Multiple things can share the reference, or
 * have their own. The shared value can be changed to a new value making all
 * other references dirty so they know they need to be updated.
 */
var Ref = /** @class */ (function () {
    /**
     * Creates a new reference to the given value.
     *
     * @param value The value the reference points to.
     * @param shared If the value is shared by multiple things.
     */
    function Ref(value, shared) {
        this.value = value;
        this.shared = shared;
        this.dirty = false;
    }
    /**
     * Returns a reference to update to the new value.
     *
     * If this reference is shared, a new reference instance will be returned.
     * If this reference is not shared, the value on this instance will be
     * updated and the reference to this instance will be returned.
     *
     * @param newValue The new value for the reference returned.
     */
    Ref.prototype.getUpdate = function (newValue) {
        if (this.shared) {
            return new Ref(newValue, false);
        }
        else {
            this.value = newValue;
            return this;
        }
    };
    /**
     * Returns a reference to update to a new value making this shared
     * reference dirty.
     *
     * If this reference is shared, this reference is marked dirty and a new
     * reference is returned with the new value.
     * If this reference is not shared, the value on this instance will be
     * updated and the reference to this instance will be returned.
     *
     * @param newValue The new value for the reference returned.
     */
    Ref.prototype.getReplace = function (newValue) {
        if (this.shared) {
            this.dirty = true;
            return new Ref(newValue, true);
        }
        else {
            this.value = newValue;
            return this;
        }
    };
    return Ref;
}());

/**
 * A class for holding all supported locales. You can add your own,
 * add aliases, or set the current locale.
 */
var Locales = /** @class */ (function () {
    function Locales() {
    }
    /**
     * Adds a new locale under one or many keys.
     *
     * @param key The locale key or keys.
     * @param locale The locale definition.
     */
    Locales.add = function (key, locale) {
        var keys = Functions.isArray(key) ? key : [key];
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var k = keys_1[_i];
            this.map[this.normal(k)] = locale;
        }
    };
    /**
     * Aliases an existing locale with other keys.
     *
     * @param key The existing locale to alias.
     * @param aliases The other keys to use an aliases.
     */
    Locales.alias = function (key, aliases) {
        var aliased = this.map[this.normal(key)];
        for (var _i = 0, aliases_1 = aliases; _i < aliases_1.length; _i++) {
            var k = aliases_1[_i];
            this.map[this.normal(k)] = aliased;
        }
    };
    /**
     * Sets the current locale to the locale with the given key. If no locale
     * exists with the given key, false is returned.
     *
     * When the global locale changes all Day instances created with an
     * unspecified locale will lazily update their locale-based values when they
     * are accessed following a locale change.
     *
     * @param key The key of a locale.
     * @returns True if the locale was found, otherwise false.
     */
    Locales.set = function (key) {
        var n = this.normal(key);
        var has = n in this.map;
        if (has) {
            this.ref = this.ref.getReplace(this.map[n]);
        }
        return has;
    };
    /**
     * Normalizes a locale code to a map key.
     *
     * @param x The code to normalize to a key.
     */
    Locales.normal = function (x) {
        return x.toLowerCase();
    };
    /**
     * Returns the locale with the given code. If the code does not map to a
     * locale the current locale is returned.
     *
     * @param key The code to get the locale for.
     */
    Locales.get = function (key) {
        var n = this.normal(key);
        return n in this.map ? this.map[n] : this.current;
    };
    Object.defineProperty(Locales, "current", {
        /**
         * The current locale.
         */
        get: function () {
            return this.ref.value;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * The map of locales available.
     */
    Locales.map = { en: lc };
    /**
     * The reference to the current locale.
     */
    Locales.ref = new Ref(lc, true);
    return Locales;
}());

/**
 * The days in a week.
 */
var Weekday = /** @class */ (function () {
    function Weekday() {
    }
    Weekday.SUNDAY = 0;
    Weekday.MONDAY = 1;
    Weekday.TUESDAY = 2;
    Weekday.WEDNESDAY = 3;
    Weekday.THURSDAY = 4;
    Weekday.FRIDAY = 5;
    Weekday.SATURDAY = 6;
    /**
     * The full list of days in a week.
     */
    Weekday.LIST = [
        Weekday.SUNDAY,
        Weekday.MONDAY,
        Weekday.TUESDAY,
        Weekday.WEDNESDAY,
        Weekday.THURSDAY,
        Weekday.FRIDAY,
        Weekday.SATURDAY
    ];
    /**
     * The list of days starting with Monday and ending on Friday.
     */
    Weekday.WEEK = [
        Weekday.MONDAY,
        Weekday.TUESDAY,
        Weekday.WEDNESDAY,
        Weekday.THURSDAY,
        Weekday.FRIDAY
    ];
    /**
     * The days on the weekend, starting with Saturday and ending with Sunday.
     */
    Weekday.ENDS = [
        Weekday.SATURDAY,
        Weekday.SUNDAY
    ];
    return Weekday;
}());

var startOf = {
    millis: function (x) { return x; },
    second: startOfSecond,
    minute: startOfMinute,
    hour: startOfHour,
    day: startOfDay,
    week: startOfWeek,
    month: startOfMonth,
    quarter: startOfQuarter,
    year: startOfYear,
};
var endOf = {
    millis: function (x) { return x; },
    second: endOfSecond,
    minute: endOfMinute,
    hour: endOfHour,
    day: endOfDay,
    week: endOfWeek,
    month: endOfMonth,
    quarter: endOfQuarter,
    year: endOfYear,
};
var add = {
    millis: addMilliseconds,
    second: addSeconds,
    minute: addMinutes,
    hour: addHours,
    day: addDays,
    week: addWeeks,
    month: addMonths,
    quarter: addQuarters,
    year: addYears,
};
var diff = {
    millis: diffMilliseconds,
    second: diffSeconds,
    minute: diffMinutes,
    hour: diffHours,
    day: diffDays,
    week: diffWeeks,
    month: diffMonths,
    quarter: diffQuarters,
    year: diffYears,
};
/**
 * The number of milliseconds for various duration units. These are worse case
 * scenario and do not include DST changes.
 */
var durations = {
    millis: 1,
    second: Constants.MILLIS_IN_SECOND,
    minute: Constants.MILLIS_IN_MINUTE,
    hour: Constants.MILLIS_IN_HOUR,
    day: Constants.MILLIS_IN_DAY,
    week: Constants.MILLIS_IN_WEEK,
    month: Constants.MILLIS_IN_DAY * Constants.DAY_MAX,
    quarter: Constants.MILLIS_IN_DAY * Constants.DAY_MAX * Constants.MONTHS_IN_QUARTER,
    year: Constants.MILLIS_IN_DAY * Constants.DAYS_IN_YEAR
};
function mutate(a, mutator, options) {
    var b = new Date(a.getTime());
    mutator(b, options);
    return b;
}
function compare(a, b, precision, options) {
    if (precision === void 0) { precision = 'millis'; }
    if (options === void 0) { options = Locales.current; }
    var starter = startOf[precision];
    var x = mutate(a, starter, options);
    var y = mutate(b, starter, options);
    return x.getTime() - y.getTime();
}
function getLastDayOfMonth(x) {
    return getDaysInMonth(x) - x.getDate() + 1;
}
function getLastWeekspanOfYear(x) {
    var fromEnd = getDaysInYear(x) - getDayOfYear(x);
    return Math.floor(fromEnd / Constants.DAYS_IN_WEEK);
}
function getWeekOfYearISO(x, options) {
    if (options === void 0) { options = Locales.current; }
    return getWeekISO(mutate(x, startOfYear), getDayOfYear(x), options);
}
function getWeekOfYear(x, options) {
    if (options === void 0) { options = Locales.current; }
    return getWeek(mutate(x, startOfYear), getDayOfYear(x), options);
}
function getWeekspanOfYear(x) {
    return Math.floor((getDayOfYear(x) - 1) / Constants.DAYS_IN_WEEK);
}
function getFullWeekOfYear(x, options) {
    if (options === void 0) { options = Locales.current; }
    return getFullWeekOf(mutate(x, startOfYear), getDaysInYear(x), options);
}
function getWeeksInYear(x, options) {
    if (options === void 0) { options = Locales.current; }
    return getWeekOfYearISO(mutate(x, endOfYear), options) + 1;
}
function getLastFullWeekOfYear(x, options) {
    if (options === void 0) { options = Locales.current; }
    var lastOfYear = mutate(x, endOfYear);
    var week = getWeekOfYearISO(x, options);
    var weekMax = getWeekOfYearISO(lastOfYear, options);
    var lastWeek = weekMax - week;
    return getDayOfWeek(lastOfYear, options) === Constants.WEEKDAY_MAX
        ? lastWeek + 1
        : lastWeek;
}
function getWeekspanOfMonth(x) {
    return Math.floor((x.getDate() - 1) / Constants.DAYS_IN_WEEK);
}
function getLastWeekspanOfMonth(x) {
    var fromEnd = getDaysInMonth(x) - x.getDate();
    return Math.floor(fromEnd / Constants.DAYS_IN_WEEK);
}
function getFullWeekOfMonth(x, options) {
    if (options === void 0) { options = Locales.current; }
    return getFullWeekOf(mutate(x, startOfMonth), x.getDate(), options);
}
function getLastFullWeekOfMonth(x, options) {
    if (options === void 0) { options = Locales.current; }
    var fromEnd = getDaysInMonth(x) - x.getDate();
    var invertedDayOfWeek = Constants.WEEKDAY_MAX - getDayOfWeek(x, options);
    return Math.floor((fromEnd - invertedDayOfWeek + Constants.DAYS_IN_WEEK) / Constants.DAYS_IN_WEEK);
}
function getWeekOfMonthISO(x, options) {
    if (options === void 0) { options = Locales.current; }
    return getWeekISO(mutate(x, startOfMonth), x.getDate(), options);
}
function getWeekISO(start, dayOfStart, options) {
    if (options === void 0) { options = Locales.current; }
    var firstWeekContainsDate = options.firstWeekContainsDate;
    var dayOfWeekFirst = getDayOfWeek(start, options);
    var hasWeekZero = Constants.DAYS_IN_WEEK - dayOfWeekFirst < firstWeekContainsDate;
    var offset = hasWeekZero
        ? dayOfWeekFirst - 1
        : dayOfWeekFirst - 1 + Constants.DAYS_IN_WEEK;
    return Math.floor((dayOfStart + offset) / Constants.DAYS_IN_WEEK);
}
function getWeek(start, dayOfStart, options) {
    var dayOfWeekFirst = getDayOfWeek(start, options);
    var offset = dayOfWeekFirst - 1 + Constants.DAYS_IN_WEEK;
    return Math.floor((dayOfStart + offset) / Constants.DAYS_IN_WEEK);
}
function getFullWeekOf(start, dayOfStart, options) {
    if (options === void 0) { options = Locales.current; }
    var dayOfWeekFirst = getDayOfWeek(start, options);
    var hasWeekZero = dayOfWeekFirst !== Weekday.SUNDAY;
    var offset = hasWeekZero
        ? dayOfWeekFirst - 1
        : dayOfWeekFirst - 1 + Constants.DAYS_IN_WEEK;
    return Math.floor((dayOfStart + offset) / Constants.DAYS_IN_WEEK);
}
function getDayOfWeek(x, options) {
    if (options === void 0) { options = Locales.current; }
    var weekStartsOn = options.weekStartsOn;
    var day = x.getDay();
    return day < weekStartsOn
        ? day - weekStartsOn + Constants.DAYS_IN_WEEK
        : day - weekStartsOn;
}
function getDayOfYear(a) {
    return Math.round(diffDays(a, mutate(a, startOfYear))) + 1;
}
function getDateOffset(x) {
    // tslint:disable-next-line: no-magic-numbers
    return -Math.round(x.getTimezoneOffset() / 15) * 15;
}
function isDaylightSavingTime(x) {
    var offset = getDateOffset(x);
    return (offset > getDateOffset(mutate(x, function (d) { return d.setMonth(0); })) ||
        // tslint:disable-next-line: no-magic-numbers
        offset > getDateOffset(mutate(x, function (d) { return d.setMonth(5); })));
}
function isLeapYear(x) {
    var year = x.getFullYear();
    // tslint:disable-next-line: no-magic-numbers
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}
function getDaysInYear(x) {
    // tslint:disable-next-line: no-magic-numbers
    return isLeapYear(x) ? 366 : 365;
}
var daysInMonth = [
    // tslint:disable-next-line: no-magic-numbers
    [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    // tslint:disable-next-line: no-magic-numbers
    [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
];
function getDaysInMonth(x) {
    return daysInMonth[isLeapYear(x) ? 1 : 0][x.getMonth()];
}
function getAbsoluteTimestamp(a) {
    return a.getTime() - getTimezoneOffsetInMilliseconds(a);
}
function getTimezoneOffsetInMilliseconds(a) {
    var b = new Date(a.getTime());
    var offsetMinutes = b.getTimezoneOffset();
    b.setSeconds(0, 0);
    var offsetMilliseconds = b.getTime() % Constants.MILLIS_IN_MINUTE;
    return offsetMinutes * Constants.MILLIS_IN_MINUTE + offsetMilliseconds;
}
function getQuarter(x) {
    return Math.floor(x.getMonth() / Constants.MONTHS_IN_QUARTER);
}
function startOfSecond(x) {
    x.setMilliseconds(0);
}
function startOfMinute(x) {
    x.setSeconds(0, 0);
}
function startOfHour(x) {
    x.setMinutes(0, 0, 0);
}
function startOfDay(x) {
    x.setHours(0, 0, 0, 0);
}
function startOfWeek(x, options) {
    if (options === void 0) { options = Locales.current; }
    var dayOfWeek = getDayOfWeek(x, options);
    x.setDate(x.getDate() - dayOfWeek);
    x.setHours(0, 0, 0, 0);
}
function startOfMonth(x) {
    x.setDate(Constants.DAY_MIN);
    x.setHours(0, 0, 0, 0);
}
function startOfQuarter(x) {
    var month = x.getMonth();
    x.setMonth(month - (month % Constants.MONTHS_IN_QUARTER), Constants.DAY_MIN);
    x.setHours(0, 0, 0, 0);
}
function startOfYear(x) {
    var year = x.getFullYear();
    x.setTime(0);
    x.setFullYear(year, 0, 1);
    x.setHours(0, 0, 0, 0);
}
function endOfSecond(x) {
    x.setMilliseconds(Constants.MILLIS_MAX);
}
function endOfMinute(x) {
    x.setSeconds(Constants.SECOND_MAX, Constants.MILLIS_MAX);
}
function endOfHour(x) {
    x.setMinutes(Constants.MINUTE_MAX, Constants.SECOND_MAX, Constants.MILLIS_MAX);
}
function endOfDay(x) {
    x.setHours(Constants.HOUR_MAX, Constants.MINUTE_MAX, Constants.SECOND_MAX, Constants.MILLIS_MAX);
}
function endOfWeek(x, options) {
    if (options === void 0) { options = Locales.current; }
    var dayOfWeek = getDayOfWeek(x, options);
    x.setDate(x.getDate() + (Constants.WEEKDAY_MAX - dayOfWeek));
    endOfDay(x);
}
function endOfMonth(x) {
    x.setFullYear(x.getFullYear(), x.getMonth() + 1, 0);
    endOfDay(x);
}
function endOfQuarter(x) {
    var month = x.getMonth();
    x.setMonth(month - (month % Constants.MONTHS_IN_QUARTER) + Constants.MONTHS_IN_QUARTER, Constants.DAY_MIN);
    endOfDay(x);
}
function endOfYear(x) {
    x.setFullYear(x.getFullYear() + 1, 0, 0);
    endOfDay(x);
}
function addMilliseconds(x, amount) {
    x.setTime(x.getTime() + amount);
}
function addSeconds(x, amount) {
    addMilliseconds(x, amount * Constants.MILLIS_IN_SECOND);
}
function addMinutes(x, amount) {
    addMilliseconds(x, amount * Constants.MILLIS_IN_MINUTE);
}
function addHours(x, amount) {
    addMilliseconds(x, amount * Constants.MILLIS_IN_HOUR);
}
function addDays(x, amount) {
    x.setDate(x.getDate() + amount);
}
function addWeeks(x, amount) {
    addDays(x, amount * Constants.DAYS_IN_WEEK);
}
function addMonths(x, amount) {
    var month = x.getMonth() + amount;
    var y = new Date(0);
    y.setFullYear(y.getFullYear(), month, 1);
    y.setHours(0, 0, 0, 0);
    var dayMax = getDaysInMonth(y);
    x.setMonth(month, Math.min(dayMax, x.getDate()));
}
function addQuarters(x, amount) {
    addMonths(x, amount * Constants.MONTHS_IN_QUARTER);
}
function addYears(x, amount) {
    addMonths(x, amount * Constants.MONTHS_IN_YEAR);
}
function diffMilliseconds(a, b) {
    return a.getTime() - b.getTime();
}
function diffSeconds(a, b) {
    return diffMilliseconds(a, b) / Constants.MILLIS_IN_SECOND;
}
function diffMinutes(a, b) {
    return diffMilliseconds(a, b) / Constants.MILLIS_IN_MINUTE;
}
function diffHours(a, b) {
    return diffMilliseconds(a, b) / Constants.MILLIS_IN_HOUR;
}
function diffDays(a, b) {
    var leftTimestamp = getAbsoluteTimestamp(a);
    var rightTimestamp = getAbsoluteTimestamp(b);
    return (leftTimestamp - rightTimestamp) / Constants.MILLIS_IN_DAY;
}
function diffWeeks(a, b) {
    return diffDays(a, b) / Constants.DAYS_IN_WEEK;
}
function diffMonths(a, b) {
    var years = a.getFullYear() - b.getFullYear();
    var months = a.getMonth() - b.getMonth();
    var date = (a.getDate() - b.getDate()) / Constants.DAY_MAX;
    return years * Constants.MONTHS_IN_YEAR + months + date;
}
function diffQuarters(a, b) {
    return diffMonths(a, b) / Constants.MONTHS_IN_QUARTER;
}
function diffYears(a, b) {
    return diffMonths(a, b) / Constants.MONTHS_IN_YEAR;
}

/**
 * An operation that can be performed on a single number.
 */
(function (Op) {
    /**
     * The number is returned unmodified.
     */
    Op[Op["NONE"] = 0] = "NONE";
    /**
     * The number is rounded down to the nearest whole number.
     */
    Op[Op["FLOOR"] = 1] = "FLOOR";
    /**
     * The number is rounded up to the nearest whole number.
     */
    Op[Op["CEIL"] = 2] = "CEIL";
    /**
     * The number is rounded up or down depending on if the fractional value is
     * greater than or less than 0.5 respectively.
     */
    Op[Op["ROUND"] = 3] = "ROUND";
    /**
     * The fractional part of the number is dropped.
     */
    Op[Op["TRUNCATE"] = 4] = "TRUNCATE";
    /**
     * The number is rounded up when positive and down when negative. This is
     * effectively ceiling the absolute value where the result preserves the sign.
     */
    Op[Op["UP"] = 5] = "UP";
    /**
     * The number is rounded down when positive and up when negative. This is
     * effectively floor the absolute value where the result preserves the sign.
     */
    Op[Op["DOWN"] = 6] = "DOWN";
})(exports.Op || (exports.Op = {}));
/**
 * Performs the requested operation on the given number, optionally taking
 * the absolute value of the number before the operation.
 *
 * @param value The number to operate on.
 * @param op The operation to perform.
 * @param absolute If the number should be positive before the operation.
 * @return The operated result, or the original value if its not a valid number.
 */
function operate(value, op, absolute) {
    if (absolute === void 0) { absolute = false; }
    if (isFinite(value)) {
        if (absolute) {
            value = Math.abs(value);
        }
        switch (op) {
            case exports.Op.NONE:
                return value;
            case exports.Op.FLOOR:
                return Math.floor(value);
            case exports.Op.CEIL:
                return Math.ceil(value);
            case exports.Op.ROUND:
                return Math.round(value);
            case exports.Op.TRUNCATE:
            case exports.Op.DOWN:
                return value < 0 ? Math.ceil(value) : Math.floor(value);
            case exports.Op.UP:
                return value < 0 ? Math.floor(value) : Math.ceil(value);
        }
    }
    return value;
}

/**
 * A class for a range of time between two [[Day]] timestamps.
 */
var DaySpan = /** @class */ (function () {
    /**
     * Creates a new span of time.
     *
     * @param start The starting timestamp.
     * @param end The ending timestamp.
     */
    function DaySpan(start, end) {
        this.start = start;
        this.end = end;
    }
    Object.defineProperty(DaySpan.prototype, "isPoint", {
        /**
         * Whether this span starts and ends on the same timestamp.
         */
        get: function () {
            return this.start.time === this.end.time;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Determines whether the given timestamp lies between the start and end
     * timestamp.
     *
     * @param day The timestamp to test.
     * @returns True if the day is >= the start and <= the end of this span.
     */
    DaySpan.prototype.contains = function (day) {
        return day.time >= this.start.time && day.time <= this.end.time;
    };
    /**
     * Compares the given timestamp to this span. If the timestamp is before this
     * span then `-1` is returned, if the timestamp is after this span then `1`
     * us returned, otherwise `0` is returned when the timestamp is in this span.
     *
     * @param day The timestamp to compare to.
     * @returns `-1`, `0`, or `1` depending on the given timestamp relative to
     *    this span.
     */
    DaySpan.prototype.compareTo = function (day) {
        return day.time < this.start.time ? -1 : (day.time > this.end.time ? 1 : 0);
    };
    /**
     * Determines whether the given timestamp is between the start and end
     * timestamp or lies on the same day as the start or end timestamp.
     *
     * @param day The timestamp to test.
     * @see [[Day.sameDay]]
     */
    DaySpan.prototype.matchesDay = function (day) {
        return this.contains(day) || day.sameDay(this.start) || day.sameDay(this.end);
    };
    /**
     * Determines whether the given timestamp is between the start and end
     * timestamp or lies on the same week as the start or end timestamp.
     *
     * @param day The timestamp to test.
     * @see [[Day.sameWeek]]
     */
    DaySpan.prototype.matchesWeek = function (day) {
        return this.contains(day) || day.sameWeek(this.start) || day.sameWeek(this.end);
    };
    /**
     * Determines whether the given timestamp is between the start and end
     * timestamp or lies on the same month as the start or end timestamp.
     *
     * @param day The timestamp to test.
     * @see [[Day.sameMonth]]
     */
    DaySpan.prototype.matchesMonth = function (day) {
        return this.contains(day) || day.sameMonth(this.start) || day.sameMonth(this.end);
    };
    /**
     * Determines whether the given timestamp is between the start and end
     * timestamp or lies on the same year as the start or end timestamp.
     *
     * @param day The timestamp to test.
     * @see [[Day.sameYear]]
     */
    DaySpan.prototype.matchesYear = function (day) {
        return this.contains(day) || day.sameYear(this.start) || day.sameYear(this.end);
    };
    /**
     * Calculates the number of milliseconds between the start and end timestamp.
     *
     * @param op The operation to perform on the result.
     * @param absolute Whether the result should always be positive.
     * @returns The time between the start and end timestamp.
     * @see [[Day.millisBetween]]
     */
    DaySpan.prototype.millis = function (op, absolute) {
        if (op === void 0) { op = exports.Op.DOWN; }
        if (absolute === void 0) { absolute = true; }
        return this.start.millisBetween(this.end, op, absolute);
    };
    /**
     * Calculates the number of seconds between the start and end timestamp.
     *
     * @param op The operation to perform on the result.
     * @param absolute Whether the result should always be positive.
     * @returns The time between the start and end timestamp.
     * @see [[Day.secondsBetween]]
     */
    DaySpan.prototype.seconds = function (op, absolute) {
        if (op === void 0) { op = exports.Op.DOWN; }
        if (absolute === void 0) { absolute = true; }
        return this.start.secondsBetween(this.end, op, absolute);
    };
    /**
     * Calculates the number of minutes between the start and end timestamp.
     *
     * @param op The operation to perform on the result.
     * @param absolute Whether the result should always be positive.
     * @returns The time between the start and end timestamp.
     * @see [[Day.minutesBetween]]
     */
    DaySpan.prototype.minutes = function (op, absolute) {
        if (op === void 0) { op = exports.Op.DOWN; }
        if (absolute === void 0) { absolute = true; }
        return this.start.minutesBetween(this.end, op, absolute);
    };
    /**
     * Calculates the number of hours between the start and end timestamp.
     *
     * @param op The operation to perform on the result.
     * @param absolute Whether the result should always be positive.
     * @returns The time between the start and end timestamp.
     * @see [[Day.hoursBetween]]
     */
    DaySpan.prototype.hours = function (op, absolute) {
        if (op === void 0) { op = exports.Op.DOWN; }
        if (absolute === void 0) { absolute = true; }
        return this.start.hoursBetween(this.end, op, absolute);
    };
    /**
     * Calculates the number of days between the start and end timestamp.
     *
     * @param op The operation to perform on the result.
     * @param absolute Whether the result should always be positive.
     * @returns The time between the start and end timestamp.
     * @see [[Day.daysBetween]]
     */
    DaySpan.prototype.days = function (op, absolute) {
        if (op === void 0) { op = exports.Op.DOWN; }
        if (absolute === void 0) { absolute = true; }
        return this.start.daysBetween(this.end, op, absolute);
    };
    /**
     * Calculates the number of weeks between the start and end timestamp.
     *
     * @param op The operation to perform on the result.
     * @param absolute Whether the result should always be positive.
     * @returns The time between the start and end timestamp.
     * @see [[Day.weeksBetween]]
     */
    DaySpan.prototype.weeks = function (op, absolute) {
        if (op === void 0) { op = exports.Op.DOWN; }
        if (absolute === void 0) { absolute = true; }
        return this.start.weeksBetween(this.end, op, absolute);
    };
    /**
     * Calculates the number of months between the start and end timestamp.
     *
     * @param op The operation to perform on the result.
     * @param absolute Whether the result should always be positive.
     * @returns The time between the start and end timestamp.
     * @see [[Day.monthsBetween]]
     */
    DaySpan.prototype.months = function (op, absolute) {
        if (op === void 0) { op = exports.Op.DOWN; }
        if (absolute === void 0) { absolute = true; }
        return this.start.monthsBetween(this.end, op, absolute);
    };
    /**
     * Calculates the number of years between the start and end timestamp.
     *
     * @param op The operation to perform on the result.
     * @param absolute Whether the result should always be positive.
     * @returns The time between the start and end timestamp.
     * @see [[Day.yearsBetween]]
     */
    DaySpan.prototype.years = function (op, absolute) {
        if (op === void 0) { op = exports.Op.DOWN; }
        if (absolute === void 0) { absolute = true; }
        return this.start.yearsBetween(this.end, op, absolute);
    };
    /**
     * Returns a delta value between 0 and 1 which represents where the
     * [[DaySpan.start]] is relative to the given day. The delta value would
     * be less than 0 if the start of the event is before the given day.
     *
     * @param relativeTo The day to find the start delta relative to.
     * @return A number between 0 and 1 if the start of this span is in the
     *    24-hour period starting at the given timestamp, otherwise the value
     *    returned may be less than 0 or greater than 1.
     */
    DaySpan.prototype.startDelta = function (relativeTo) {
        return (this.start.time - relativeTo.time) / Constants.MILLIS_IN_DAY;
    };
    /**
     * Returns a delta value between 0 and 1 which represents where the
     * [[DaySpan.end]] is relative to the given day. The delta value would
     * be greater than 1 if the end of the event is after the given day.
     *
     * @param relativeTo The day to find the end delta relative to.
     * @return A number between 0 and 1 if the end of this span is in the
     *    24-hour period starting at the given timestamp, otherwise the value
     *    returned may be less than 0 or greater than 1.
     */
    DaySpan.prototype.endDelta = function (relativeTo) {
        return (this.end.time - relativeTo.time) / Constants.MILLIS_IN_DAY;
    };
    /**
     * Calculates the bounds for span event if it were placed in a rectangle which
     * represents a day (24 hour period). By default the returned values are
     * between 0 and 1 and can be scaled by the proper rectangle dimensions or the
     * rectangle dimensions can be passed to this function.
     *
     * @param relativeTo The day to find the bounds relative to. If this is not the
     *    start of the day the returned bounds is relative to the given time.
     * @param dayHeight The height of the rectangle of the day.
     * @param dayWidth The width of the rectangle of the day.
     * @param columnOffset The offset in the rectangle of the day to adjust this
     *    span by. This also reduces the width of the returned bounds to keep the
     *    bounds in the rectangle of the day.
     * @param clip `true` if the bounds should stay in the day rectangle, `false`
     *    and the bounds may go outside the rectangle of the day for multi-day
     *    spans.
     * @param offsetX How much to translate the left & right properties by.
     * @param offsetY How much to translate the top & bottom properties by.
     * @returns The calculated bounds for this span.
     */
    DaySpan.prototype.getBounds = function (relativeTo, dayHeight, dayWidth, columnOffset, clip, offsetX, offsetY) {
        if (dayHeight === void 0) { dayHeight = 1; }
        if (dayWidth === void 0) { dayWidth = 1; }
        if (columnOffset === void 0) { columnOffset = 0; }
        if (clip === void 0) { clip = true; }
        if (offsetX === void 0) { offsetX = 0; }
        if (offsetY === void 0) { offsetY = 0; }
        var startRaw = this.startDelta(relativeTo);
        var endRaw = this.endDelta(relativeTo);
        var start = clip ? Math.max(0, startRaw) : startRaw;
        var end = clip ? Math.min(1, endRaw) : endRaw;
        var left = columnOffset;
        var right = dayWidth - left;
        var top = start * dayHeight;
        var bottom = end * dayHeight;
        return {
            top: top + offsetY,
            bottom: bottom + offsetY,
            height: bottom - top,
            left: left + offsetX,
            right: right + offsetX,
            width: right
        };
    };
    /**
     * Summarizes this span given an approximate unit of time and a few other
     * options. If the start and end are on the same unit, a single value will
     * be returned. Otherwise a start and end will be returned with a `delimiter`.
     *
     * @param type The unit of time this span is for.
     * @param dayOfWeek When `true` the weekday of the start and end are included.
     * @param short When `true` the short form of weekdays and months will be used.
     * @param repeat When `true` the year will be repeated on the start and end
     *  timestamp even if they are the same year.
     * @param contextual When `true` the year will be hidden if it's the current
     *  year.
     * @param delimiter The string to separate the start and end timestamps with.
     * @returns The summary of this span.
     */
    DaySpan.prototype.summary = function (type, dayOfWeek, short, repeat, contextual, delimiter) {
        if (dayOfWeek === void 0) { dayOfWeek = true; }
        if (short === void 0) { short = false; }
        if (repeat === void 0) { repeat = false; }
        if (contextual === void 0) { contextual = true; }
        if (delimiter === void 0) { delimiter = ' - '; }
        var formats = [Locales.current.summaryDay, Locales.current.summaryWeek, Locales.current.summaryMonth, Locales.current.summaryYear];
        var formatter = formats[type];
        var today = Day.today();
        var showStartYear = !contextual || !this.start.sameYear(today);
        var showEndYear = !contextual || !this.end.sameYear(today);
        var start = this.start.format(formatter(short, dayOfWeek, showStartYear));
        var end = this.end.format(formatter(short, dayOfWeek, showEndYear));
        var summary = start;
        if (start !== end) {
            if (!repeat) {
                summary = this.start.format(formatter(short, dayOfWeek, !this.start.sameYear(this.end)));
            }
            summary += delimiter;
            summary += end;
        }
        else {
            summary = start;
        }
        return summary;
    };
    /**
     * Determines whether the gven span intersects with this span.
     *
     * @param span The span to test.
     * @returns `true` if the spans intersect, otherwise `false`.
     */
    DaySpan.prototype.intersects = function (span) {
        return !(this.end.time < span.start.time ||
            this.start.time > span.end.time);
    };
    /**
     * Calculates the intersection between this span and the given span. If there
     * is no intersection between the two spans then `null` is returned.
     *
     * @param span The span to calculate the intersection with.
     * @returns The intersection or `null` if none exists.
     */
    DaySpan.prototype.intersection = function (span) {
        var start = this.start.max(span.start);
        var end = this.end.min(span.end);
        return start.isAfter(end) ? null : new DaySpan(start, end);
    };
    /**
     * Calculates the union between this span and the given span.
     *
     * @param span The span to calculate the union with.
     * @returns The union of the two spans.
     */
    DaySpan.prototype.union = function (span) {
        var start = this.start.min(span.start);
        var end = this.end.max(span.end);
        return new DaySpan(start, end);
    };
    /**
     * Returns a point [[DaySpan]] with the same start and end timestamp.
     *
     * @param day The timestamp which will be the start and end.
     * @returns The new instance.
     * @see [[DaySpan.isPoint]]
     */
    DaySpan.point = function (day) {
        return new DaySpan(day, day);
    };
    return DaySpan;
}());

/**
 * A class for detecting, parsing, and building identifiers to and from days.
 *
 * An identifier is a simple value which represents a span of time. It may
 * represent an entire year, a quarter (3 months) of a year, a week of a year,
 * a month in a year, a specific day of a month of a year, or a specific hour,
 * minute, day, and month of a year.
 *
 * For example:
 * - `2018`: The year 2018
 * - `201801`: January 2018
 * - `2014023`: The 23rd week of 2014
 * - `20170311`: March 11th, 2017
 * - `201406151651`: June 15th 2016 at 4:51 pm
 * - `'0525'`: Year 525 of the first age, Elrond and Elros are born
 */
var Identifier = /** @class */ (function () {
    function Identifier() {
    }
    /**
     * Determines whether the given identifier is this type.
     *
     * @param id The identifier to test.
     * @returns `true` if the identifier is this type, otherwise `false`.
     */
    Identifier.prototype.is = function (id) {
        return (id + '').length === this.getLength();
    };
    /**
     * Computes the identifier given values taken from a [[Day]].
     *
     * @param values The values to compute.
     * @returns The computed identifier.
     */
    Identifier.prototype.compute = function () {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        var scales = this.getScales();
        var total = 0;
        for (var i = 0; i < values.length; i++) {
            total += values[i] * scales[i];
        }
        return this.is(total) ? total : Functions.padNumber(total, this.getLength());
    };
    /**
     * Decomputes the given identifier and returns values which describe a span
     * of time.
     *
     * @param id The identifier to decompute.
     * @returns The original values which computed the identifier.
     */
    Identifier.prototype.decompute = function (id) {
        var scales = this.getScales();
        var total = Functions.isNumber(id) ? id : parseInt(id);
        var values = [];
        for (var i = 0; i < scales.length - 1; i++) {
            var curr = scales[i + 0];
            var next = scales[i + 1];
            var mod = next / curr;
            var value = total % mod;
            values.push(value);
            total = Math.floor(total / mod);
        }
        values.push(total);
        return values;
    };
    /**
     * Finds which identifier type matches the given identifier, if any.
     *
     * @param id The identifier to find the type of.
     * @returns The found identifier type, otherwise `null` if none exists.
     */
    Identifier.find = function (id) {
        if (this.Time.is(id))
            return this.Time;
        if (this.Day.is(id))
            return this.Day;
        if (this.Week.is(id))
            return this.Week;
        if (this.Month.is(id))
            return this.Month;
        if (this.Year.is(id))
            return this.Year;
        return null;
    };
    /**
     * Determines whether the given time span `outer` contains the time span
     * `inner`.
     *
     * @param outer The potentially larger time span `inner` must be contained in.
     * @param inner The time span to test is contained inside `outer`.
     * @returns `true` if `inner` is equal to or contained in `outer`, otherwise
     *    `false`.
     */
    Identifier.contains = function (outer, inner) {
        var outerString = outer + '';
        return (inner + '').substring(0, outerString.length) === outerString;
    };
    /**
     * The identifier type for an hour of time on a specific day.
     */
    Identifier.Time = null;
    /**
     * The identifier type for a specific day.
     */
    Identifier.Day = null;
    /**
     * The identifier type for a specific week of a year.
     */
    Identifier.Week = null;
    /**
     * The identifier type for a specific month of a year.
     */
    Identifier.Month = null;
    /**
     * The identifier type for a specific quarter of a year.
     */
    Identifier.Quarter = null;
    /**
     * The identifier type for a specific year.
     */
    Identifier.Year = null;
    return Identifier;
}());
// YYYYMMddHHmm (12)
var IdentifierTime = /** @class */ (function (_super) {
    __extends(IdentifierTime, _super);
    function IdentifierTime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IdentifierTime.prototype.getScales = function () {
        return IdentifierTime.SCALES;
    };
    IdentifierTime.prototype.getLength = function () {
        return IdentifierTime.LENGTH;
    };
    IdentifierTime.prototype.get = function (day) {
        return this.compute(day.minute, day.hour, day.dayOfMonth, day.month + 1, day.year);
    };
    IdentifierTime.prototype.object = function (id) {
        var values = this.decompute(id);
        return {
            minute: values[0],
            hour: values[1],
            day: values[2],
            month: values[3] - 1,
            year: values[4]
        };
    };
    IdentifierTime.prototype.start = function (id) {
        var obj = this.object(id);
        var start = Day.build(obj.year, obj.month, obj.day, obj.hour, obj.minute);
        return start;
    };
    IdentifierTime.prototype.span = function (id, endInclusive) {
        if (endInclusive === void 0) { endInclusive = false; }
        var start = this.start(id);
        var end = start.endOf('hour', endInclusive);
        return new DaySpan(start, end);
    };
    IdentifierTime.prototype.describe = function (id, short) {
        if (short === void 0) { short = false; }
        var start = this.start(id);
        var format = Locales.current.identifierTime(short);
        return start.format(format);
    };
    IdentifierTime.prototype.matches = function (day, id) {
        return day.timeIdentifier === id;
        /*
        let obj: IdentifierObject = this.object(id);
    
        return (
          day.year === obj.year &&
          day.month === obj.month &&
          day.dayOfMonth === obj.day &&
          day.hour === obj.hour &&
          day.minute === obj.minute
        );
        */
    };
    IdentifierTime.SCALES = [
        1 /* minute */,
        100 /* hour   */,
        10000 /* day    */,
        1000000 /* month  */,
        100000000 /* year   */
    ];
    IdentifierTime.LENGTH = 12;
    return IdentifierTime;
}(Identifier));
// YYYYMMdd (8)
var IdentifierDay = /** @class */ (function (_super) {
    __extends(IdentifierDay, _super);
    function IdentifierDay() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IdentifierDay.prototype.getScales = function () {
        return IdentifierDay.SCALES;
    };
    IdentifierDay.prototype.getLength = function () {
        return IdentifierDay.LENGTH;
    };
    IdentifierDay.prototype.get = function (day) {
        return this.compute(day.dayOfMonth, day.month + 1, day.year);
    };
    IdentifierDay.prototype.object = function (id) {
        var values = this.decompute(id);
        return {
            day: values[0],
            month: values[1] - 1,
            year: values[2]
        };
    };
    IdentifierDay.prototype.start = function (id) {
        var obj = this.object(id);
        var start = Day.build(obj.year, obj.month, obj.day);
        return start;
    };
    IdentifierDay.prototype.span = function (id, endInclusive) {
        if (endInclusive === void 0) { endInclusive = false; }
        var start = this.start(id);
        var end = start.endOf('day', endInclusive);
        return new DaySpan(start, end);
    };
    IdentifierDay.prototype.describe = function (id, short) {
        if (short === void 0) { short = false; }
        var start = this.start(id);
        var format = Locales.current.identifierDay(short);
        return start.format(format);
    };
    IdentifierDay.prototype.matches = function (day, id) {
        return day.dayIdentifier === id;
        /*
        let obj: IdentifierObject = this.object(id);
    
        return (
          day.year === obj.year &&
          day.month === obj.month &&
          day.dayOfMonth === obj.day
        );
        */
    };
    IdentifierDay.SCALES = [
        1 /* day     */,
        100 /* month   */,
        10000 /* year    */
    ];
    IdentifierDay.LENGTH = 8;
    return IdentifierDay;
}(Identifier));
// YYYY0ww (7)
var IdentifierWeek = /** @class */ (function (_super) {
    __extends(IdentifierWeek, _super);
    function IdentifierWeek() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IdentifierWeek.prototype.getScales = function () {
        return IdentifierWeek.SCALES;
    };
    IdentifierWeek.prototype.getLength = function () {
        return IdentifierWeek.LENGTH;
    };
    IdentifierWeek.prototype.get = function (day) {
        return this.compute(day.weekOfYear, day.year);
    };
    IdentifierWeek.prototype.object = function (id) {
        var values = this.decompute(id);
        return {
            week: values[0],
            year: values[1]
        };
    };
    IdentifierWeek.prototype.start = function (id) {
        var obj = this.object(id);
        var start = Day.build(obj.year, 0).withWeekOfYear(obj.week);
        return start;
    };
    IdentifierWeek.prototype.span = function (id, endInclusive) {
        if (endInclusive === void 0) { endInclusive = false; }
        var start = this.start(id);
        var end = start.endOf('week', endInclusive);
        return new DaySpan(start, end);
    };
    IdentifierWeek.prototype.describe = function (id, short) {
        if (short === void 0) { short = false; }
        var start = this.start(id);
        var format = Locales.current.identifierWeek(short);
        return start.format(format);
    };
    IdentifierWeek.prototype.matches = function (day, id) {
        return day.weekIdentifier === id;
        /*
        let obj: IdentifierObject = this.object(id);
    
        return (
          day.year === obj.year &&
          day.week === obj.week
        );
        */
    };
    IdentifierWeek.SCALES = [
        1 /* week   */,
        1000 /* year   */
    ];
    IdentifierWeek.LENGTH = 7;
    return IdentifierWeek;
}(Identifier));
// YYYYMM (6)
var IdentifierMonth = /** @class */ (function (_super) {
    __extends(IdentifierMonth, _super);
    function IdentifierMonth() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IdentifierMonth.prototype.getScales = function () {
        return IdentifierMonth.SCALES;
    };
    IdentifierMonth.prototype.getLength = function () {
        return IdentifierMonth.LENGTH;
    };
    IdentifierMonth.prototype.get = function (day) {
        return this.compute(day.month + 1, day.year);
    };
    IdentifierMonth.prototype.object = function (id) {
        var values = this.decompute(id);
        return {
            month: values[0] - 1,
            year: values[1]
        };
    };
    IdentifierMonth.prototype.start = function (id) {
        var obj = this.object(id);
        var start = Day.build(obj.year, obj.month);
        return start;
    };
    IdentifierMonth.prototype.span = function (id, endInclusive) {
        if (endInclusive === void 0) { endInclusive = false; }
        var start = this.start(id);
        var end = start.endOf('month', endInclusive);
        return new DaySpan(start, end);
    };
    IdentifierMonth.prototype.describe = function (id, short) {
        if (short === void 0) { short = false; }
        var start = this.start(id);
        var format = Locales.current.identifierMonth(short);
        return start.format(format);
    };
    IdentifierMonth.prototype.matches = function (day, id) {
        return day.monthIdentifier === id;
        /*
        let obj: IdentifierObject = this.object(id);
    
        return (
          day.year === obj.year &&
          day.month === obj.month
        );
        */
    };
    IdentifierMonth.SCALES = [
        1 /* month  */,
        100 /* year   */
    ];
    IdentifierMonth.LENGTH = 6;
    return IdentifierMonth;
}(Identifier));
// YYYYQ (5)
var IdentifierQuarter = /** @class */ (function (_super) {
    __extends(IdentifierQuarter, _super);
    function IdentifierQuarter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IdentifierQuarter.prototype.getScales = function () {
        return IdentifierQuarter.SCALES;
    };
    IdentifierQuarter.prototype.getLength = function () {
        return IdentifierQuarter.LENGTH;
    };
    IdentifierQuarter.prototype.get = function (day) {
        return this.compute(day.quarter, day.year);
    };
    IdentifierQuarter.prototype.object = function (id) {
        var values = this.decompute(id);
        return {
            quarter: values[0],
            year: values[1]
        };
    };
    IdentifierQuarter.prototype.start = function (id) {
        var obj = this.object(id);
        var start = Day.build(obj.year, (obj.quarter - 1) * 3);
        return start;
    };
    IdentifierQuarter.prototype.span = function (id, endInclusive) {
        if (endInclusive === void 0) { endInclusive = false; }
        var start = this.start(id);
        var end = start.add('month', 3).endOf('month', endInclusive);
        return new DaySpan(start, end);
    };
    IdentifierQuarter.prototype.describe = function (id, short) {
        if (short === void 0) { short = false; }
        var start = this.start(id);
        var format = Locales.current.identifierQuarter(short);
        return start.format(format);
    };
    IdentifierQuarter.prototype.matches = function (day, id) {
        return day.quarterIdentifier === id;
        /*
        let obj: IdentifierObject = this.object(id);
    
        return (
          day.year === obj.year &&
          day.quarter === obj.quarter
        );
        */
    };
    IdentifierQuarter.SCALES = [
        1 /* quarter  */,
        10 /* year   */
    ];
    IdentifierQuarter.LENGTH = 5;
    return IdentifierQuarter;
}(Identifier));
// YYYY (4)
var IdentifierYear = /** @class */ (function (_super) {
    __extends(IdentifierYear, _super);
    function IdentifierYear() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IdentifierYear.prototype.getScales = function () {
        return IdentifierYear.SCALES;
    };
    IdentifierYear.prototype.getLength = function () {
        return IdentifierYear.LENGTH;
    };
    IdentifierYear.prototype.get = function (day) {
        return this.compute(day.year);
    };
    IdentifierYear.prototype.object = function (id) {
        var values = this.decompute(id);
        return {
            year: values[0]
        };
    };
    IdentifierYear.prototype.start = function (id) {
        var obj = this.object(id);
        var start = Day.build(obj.year, 0);
        return start;
    };
    IdentifierYear.prototype.span = function (id, endInclusive) {
        if (endInclusive === void 0) { endInclusive = false; }
        var start = this.start(id);
        var end = start.endOf('year', endInclusive);
        return new DaySpan(start, end);
    };
    IdentifierYear.prototype.describe = function (id, short) {
        if (short === void 0) { short = false; }
        var start = this.start(id);
        var format = Locales.current.identifierYear(short);
        return start.format(format);
    };
    IdentifierYear.prototype.matches = function (day, id) {
        return day.year === id;
        /*
        let obj: IdentifierObject = this.object(id);
    
        return (
          day.year === obj.year
        );
        */
    };
    IdentifierYear.SCALES = [
        1 /* year  */
    ];
    IdentifierYear.LENGTH = 4;
    return IdentifierYear;
}(Identifier));
// Sets the Identifier types
Identifier.Time = new IdentifierTime();
Identifier.Day = new IdentifierDay();
Identifier.Week = new IdentifierWeek();
Identifier.Month = new IdentifierMonth();
Identifier.Quarter = new IdentifierQuarter();
Identifier.Year = new IdentifierYear();

/**
 * A pairing of a user specified event object and the schedule which defines
 * when it occurs on a calendar.
 *
 * @typeparam T The type of data stored in the [[Event]] class.
 * @typeparam M The type of metadata stored in the schedule.
 */
var Event = /** @class */ (function () {
    /**
     * Creates a new event.
     *
     * @param schedule The schedule which defines when the event occurs.
     * @param data User specified object which describes this event.
     * @param id User specified ID which identifies this event.
     */
    function Event(schedule, data, id, visible) {
        if (visible === void 0) { visible = true; }
        this.schedule = schedule;
        this.data = data;
        this.id = id;
        this.visible = visible;
    }
    return Event;
}());

/**
 * A class that can modify the events of a schedule by storing [[Identifier]]s
 * and an associated value.
 *
 * @typeparam T The type of data that modifies the schedule.
 */
var ScheduleModifier = /** @class */ (function () {
    /**
     * Creates a new schedule modifier.
     */
    function ScheduleModifier() {
        this.map = {};
    }
    /**
     * Clears the modifier of all modifications.
     */
    ScheduleModifier.prototype.clear = function () {
        this.map = {};
        return this;
    };
    /**
     * Returns `true` if this modifier lacks any modifications, otherwise `false`.
     */
    ScheduleModifier.prototype.isEmpty = function () {
        // @ts-ignore
        for (var id in this.map) {
            return !id;
        }
        return true;
    };
    /**
     * Gets the most specific value in this modifier for the given day, if none
     * exists `otherwise` is returned. A modifier can have multiple values for a
     * given day because [[Identifier]]s represent a span of time.
     *
     * @param day The day to get a value for.
     * @param otherwise What to return if no value exists for the given day.
     * @param lookAtTime If the specific time of the given day should be looked at.
     * @returns The most specific value for the given day, or `otherwise`.
     */
    ScheduleModifier.prototype.get = function (day, otherwise, lookAtTime) {
        if (lookAtTime === void 0) { lookAtTime = true; }
        var map = this.map;
        return (lookAtTime && map[day.timeIdentifier]) ||
            map[day.dayIdentifier] ||
            map[day.monthIdentifier] ||
            map[day.weekIdentifier] ||
            map[day.quarterIdentifier] ||
            otherwise;
    };
    /**
     * Gets the most specific identifier type for the span over the given day.
     * If the day does not have a modification, `null` is returned.
     *
     * @param day The day to get the type for.
     * @param lookAtTime If the specific time of the given day should be looked at.
     * @returns The most specific identifier for the given day, otherwise `null`.
     */
    ScheduleModifier.prototype.getIdentifier = function (day, lookAtTime) {
        if (lookAtTime === void 0) { lookAtTime = true; }
        var map = this.map;
        if (lookAtTime && Functions.isDefined(map[day.timeIdentifier]))
            return Identifier.Time;
        if (Functions.isDefined(map[day.dayIdentifier]))
            return Identifier.Day;
        if (Functions.isDefined(map[day.monthIdentifier]))
            return Identifier.Month;
        if (Functions.isDefined(map[day.weekIdentifier]))
            return Identifier.Week;
        if (Functions.isDefined(map[day.quarterIdentifier]))
            return Identifier.Quarter;
        if (Functions.isDefined(map[day.year]))
            return Identifier.Year;
        return null;
    };
    /**
     * Gets all values in this modifier for the given day. If none exist, an empty
     * array is returned. The values returned in the array are returned in most
     * specific to least specific.
     *
     * @param day The day to get the values for.
     * @returns An array of values (modifications) for the given day.
     */
    ScheduleModifier.prototype.getAll = function (day) {
        var map = this.map;
        var all = [];
        if (map[day.timeIdentifier])
            all.push(map[day.timeIdentifier]);
        if (map[day.dayIdentifier])
            all.push(map[day.dayIdentifier]);
        if (map[day.monthIdentifier])
            all.push(map[day.monthIdentifier]);
        if (map[day.weekIdentifier])
            all.push(map[day.weekIdentifier]);
        if (map[day.quarterIdentifier])
            all.push(map[day.quarterIdentifier]);
        return all;
    };
    /**
     * Moves the value/modification from one identifier to another.
     *
     * @param from The day to take the identifier from.
     * @param fromType The identifier type.
     * @param to The day to move the value to.
     * @param toType The identifier type to move the value to.
     */
    ScheduleModifier.prototype.move = function (from, fromType, to, toType) {
        var fromIdentifier = fromType.get(from);
        var toIdentifier = toType.get(to);
        this.map[toIdentifier] = this.map[fromIdentifier];
        delete this.map[fromIdentifier];
        return this;
    };
    /**
     * Moves any identifiers with the matching time `fromTime` to `toTime` and
     * returns the number of moves.
     *
     * @param fromTime The time to move from.
     * @param toTime The time to move to.
     * @returns The number of modifiers moved.
     */
    ScheduleModifier.prototype.moveTime = function (fromTime, toTime) {
        var type = Identifier.Time;
        var moveIds = [];
        this.iterate().each(function (_a) {
            var id = _a[0], value = _a[1];
            if (type.is(id)) {
                var start = type.start(id);
                if (start.sameTime(fromTime)) {
                    moveIds.push(id);
                }
            }
        });
        var moved = 0;
        for (var _i = 0, moveIds_1 = moveIds; _i < moveIds_1.length; _i++) {
            var id = moveIds_1[_i];
            var value = this.map[id];
            var start = type.start(id);
            var newStart = start.withTime(toTime);
            var newId = type.get(newStart);
            if (!this.map[newId]) {
                this.map[newId] = value;
                delete this.map[id];
                moved++;
            }
        }
        return moved;
    };
    /**
     * Removes any identifiers and modifications that are at the given time.
     *
     * @param time The time to remove.
     * @returns The number of modifiers removed.
     */
    ScheduleModifier.prototype.removeTime = function (time) {
        var type = Identifier.Time;
        var removed = 0;
        this.iterate().each(function (_a, key, iterator) {
            var id = _a[0];
            if (type.is(id)) {
                var start = type.start(id);
                if (start.sameTime(time)) {
                    iterator.remove();
                    removed++;
                }
            }
        });
        return removed;
    };
    /**
     * Sets the value/modification in this map given a day, the value, and the
     * identifier type.
     *
     * @param day The day to take an identifier from.
     * @param value The value/modification to set.
     * @param type The identifier type.
     */
    ScheduleModifier.prototype.set = function (day, value, type) {
        this.map[type.get(day)] = value;
        return this;
    };
    /**
     * Removes the value/modification from this modifier based on the identifier
     * pulled from the day.
     *
     * @param day The day to take an identifier from.
     * @param type The identifier type.
     */
    ScheduleModifier.prototype.unset = function (day, type) {
        delete this.map[type.get(day)];
        return this;
    };
    /**
     * Iterates through the modifiers passing the identifier and the related value.
     *
     * @returns A new instance of an [[Iterator]].
     */
    ScheduleModifier.prototype.iterate = function () {
        var _this = this;
        return new iteratez.Iterate(function (iterator) {
            var map = _this.map;
            for (var rawId in map) {
                var asNumber = parseInt(rawId);
                var validAsNumber = asNumber + '' === rawId;
                var id = validAsNumber ? asNumber : rawId;
                switch (iterator.act([id, map[rawId]], rawId)) {
                    case iteratez.IterateAction.STOP:
                        return;
                    case iteratez.IterateAction.REMOVE:
                        delete map[rawId];
                        break;
                }
            }
        });
    };
    /**
     * Queries the modifier for all values/modifications which fall in the time
     * span that the given identifier represents. All identifiers and their value
     * are passed to the given callback.
     *
     * @param prefix The identifier
     * @returns A new instance of an [[Iterator]].
     */
    ScheduleModifier.prototype.query = function (query) {
        return this.iterate()
            .where(function (_a) {
            var id = _a[0], value = _a[1];
            return Identifier.contains(query, id);
        });
    };
    /**
     * Returns all identifiers stored in this modifier.
     */
    ScheduleModifier.prototype.identifiers = function (filter) {
        return this.iterate()
            .where(function (_a) {
            var id = _a[0], value = _a[1];
            return !filter || filter(value, id);
        })
            .transform(function (_a) {
            var id = _a[0];
            return id;
        });
    };
    /**
     * Builds a list of spans and the associated values. The spans are calculated
     * from the identifier key via [[Identifier.span]].
     *
     * @param endInclusive If the end date in the spans should be the last
     *    millisecond of the timespan or the first millisecond of the next.
     * @returns An array of spans calculated from the identifiers with the
     *    associated values/modifications.
     */
    ScheduleModifier.prototype.spans = function (endInclusive) {
        if (endInclusive === void 0) { endInclusive = false; }
        return this.iterate()
            .transform(function (_a) {
            var id = _a[0], value = _a[1];
            var type = Identifier.find(id);
            if (type) {
                var span = type.span(id, endInclusive);
                return { span: span, value: value };
            }
        });
    };
    /**
     * Builds a list of the descriptions of the identifiers in this modifier.
     *
     * @param short If the description should use shorter language or longer.
     * @returns The built list of descriptions.
     */
    ScheduleModifier.prototype.describe = function (short) {
        if (short === void 0) { short = false; }
        return this.iterate()
            .transform(function (_a) {
            var id = _a[0];
            var type = Identifier.find(id);
            if (type) {
                return type.describe(id, short);
            }
        });
    };
    /**
     * Builds a map of the values/modifications keyed by the descripton of the
     * identifier computed via [[Identifier.describe]].
     *
     * @param short If the description should use shorter language or longer.
     * @returns The built map of description to values/modifications.
     */
    ScheduleModifier.prototype.describeMap = function (short) {
        if (short === void 0) { short = false; }
        var map = this.map;
        var out = {};
        for (var id in map) {
            var type = Identifier.find(id);
            if (type) {
                out[type.describe(id, short)] = map[id];
            }
        }
        return out;
    };
    return ScheduleModifier;
}());

/**
 * Units of time that are compromised of 1 or more days for the [[Calendar]] class.
 */
(function (Units) {
    Units[Units["DAY"] = 0] = "DAY";
    Units[Units["WEEK"] = 1] = "WEEK";
    Units[Units["MONTH"] = 2] = "MONTH";
    Units[Units["YEAR"] = 3] = "YEAR";
})(exports.Units || (exports.Units = {}));

/**
 * A class which describes when an event occurs over what time and if it repeats.
 *
 * @typeparam M The type of metadata stored in the schedule.
 */
var Schedule = /** @class */ (function () {
    /**
     * Creates a schedule based on the given input.
     *
     * @param input The input which describes the schedule of events.
     */
    function Schedule(input) {
        this.exclude = new ScheduleModifier();
        this.include = new ScheduleModifier();
        this.cancel = new ScheduleModifier();
        this.meta = new ScheduleModifier();
        if (Functions.isDefined(input)) {
            this.set(input);
        }
    }
    Object.defineProperty(Schedule.prototype, "maxOccurrences", {
        /**
         * The maximum number of occurrences allowed in the Schedule.
         * [[Schedule.start]] is required and [[Schedule.end]] is ignored and
         * overwritten. This is an expensive check and should be avoided if
         * possible. If this value is less than 1 it is ignored.
         */
        get: function () {
            return this._maxOccurrences;
        },
        set: function (value) {
            this._maxOccurrences = value;
            if (this.checks) {
                this.updateEnd();
            }
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Sets the schedule with the given input.
     *
     * @param input The input or schedule which describes the schedule of events.
     * @param parseMeta A function to use when parsing meta input into the desired type.
     * @see [[Parse.schedule]]
     */
    Schedule.prototype.set = function (input, parseMeta) {
        if (parseMeta === void 0) { parseMeta = (function (x) { return x; }); }
        if (input instanceof Schedule) {
            Parse.schedule(input.toInput(), undefined, this);
        }
        else {
            Parse.schedule(input, Functions.coalesce(input.parseMeta, parseMeta), this);
        }
        return this;
    };
    Object.defineProperty(Schedule.prototype, "lastTime", {
        /**
         * Returns the last event time specified or `undefined` if this schedule is
         * for an all day event.
         */
        get: function () {
            return this.times[this.times.length - 1];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Schedule.prototype, "identifierType", {
        /**
         * The [[Identifier]] for this schedule. Either [[Identifier.Day]] or
         * [[Identifier.Time]].
         */
        get: function () {
            return this.isFullDay() ? Identifier.Day : Identifier.Time;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Updates the [[Schedule.durationInDays]] variable based on the
     * [[Schedule.lastTime]] (if any), the [[Schedule.duration]] and it's
     * [[Schedule.durationUnit]].
     */
    Schedule.prototype.updateDurationInDays = function () {
        var start = this.lastTime ? this.lastTime.toMilliseconds() : 0;
        var duration = this.duration * (durations[this.durationUnit] || 0);
        var exclude = Constants.MILLIS_IN_DAY;
        var day = Constants.MILLIS_IN_DAY;
        this.durationInDays = Math.max(0, Math.ceil((start + duration - exclude) / day));
        return this;
    };
    /**
     * Updates [[Schedule.checks]] based on the frequencies that were specified
     * in the schedule input.
     */
    Schedule.prototype.updateChecks = function () {
        this.checks = Parse.givenFrequency([
            this.year,
            this.month,
            this.day,
            this.quarter,
            this.week,
            this.weekOfYear,
            this.fullWeekOfYear,
            this.weekspanOfYear,
            this.lastFullWeekOfYear,
            this.lastWeekspanOfYear,
            this.weekOfMonth,
            this.weekspanOfMonth,
            this.fullWeekOfMonth,
            this.lastWeekspanOfMonth,
            this.lastFullWeekOfMonth,
            this.dayOfWeek,
            this.dayOfMonth,
            this.lastDayOfMonth,
            this.dayOfYear
        ]);
        return this;
    };
    /**
     * Updates the [[Schedule.end]] based on [[Schedule.maxOccurrences]]
     */
    Schedule.prototype.updateEnd = function () {
        var _this = this;
        if (this.maxOccurrences > 0 && this.start) {
            // Clear so it's not used in calculating maximum years.
            this.end = null;
            var maximumYears = this.getMaximum('year') - this.start.year + 1;
            var lookahead = maximumYears * Constants.DAYS_IN_YEAR;
            var previousOccurrences = this.include.spans().where(function (_a) {
                var span = _a.span;
                return span.start.isBefore(_this.start);
            }).count();
            var occurrences = this.maxOccurrences - previousOccurrences;
            var last = this.forecast(this.start, false, occurrences, 0, true, lookahead).last();
            if (last) {
                this.end = last[0].end;
            }
        }
        return this;
    };
    /**
     * Estimates the maximum number of `prop` from the start date that events
     * could be happening. If the start date is not specified -1 will be
     * returned representing potentially infinite `prop`s. If specific `prop`s
     * are specified the difference between the maximum `prop` and the start `prop`
     * will be returned. After that if [[Schedule.maxOccurrences]] is not
     * specified -1 will be returned unless the end date is specified. In that
     * case the `prop`s between the start and end are returned. Otherwise
     * if events occur every X `prop`s then that calculation is used taking into
     * account [[Schedule.maxOccurrences]]. Finally no year rule is specified
     * so worst case is assumed, [[Schedule.maxOccurrences]].
     *
     * The returned value is always rounded up, so if the first and last
     * occurrence happens the same `prop` 1 will be returned.
     */
    Schedule.prototype.getMaximum = function (prop) {
        if (!this.start) {
            return -1;
        }
        if (this.end) {
            return this.end[prop];
        }
        var occurs = this.maxOccurrences;
        var start = this.start[prop];
        var frequency = this[prop];
        if (frequency) {
            var input = frequency.input;
            if (Functions.isFrequencyValueEquals(input)) {
                return input;
            }
            else if (Functions.isFrequencyValueOneOf(input)) {
                var max = input[0];
                for (var i = 1; i < input.length; i++) {
                    if (input[i] > max)
                        max = input[i];
                }
                return max;
            }
            if (occurs > 0 && Functions.isFrequencyValueEvery(input)) {
                var every = input.every, offset = input.offset;
                return start + (offset || 0) + every * occurs;
            }
        }
        return occurs <= 0 ? -1 : start + occurs - 1;
    };
    /**
     * Gets the start date of the schedule. Even if one is not specified, one
     * can be calculated if this is a single event schedule.
     */
    Schedule.prototype.getStart = function () {
        if (this.start) {
            return this.start;
        }
        var singleEventSpan = this.getSingleEventSpan();
        if (singleEventSpan) {
            return singleEventSpan.start;
        }
        return null;
    };
    /**
     * Gets the end date of the schedule. Even if one is not specified, one
     * can be calculated if this is a single event schedule.
     */
    Schedule.prototype.getEnd = function () {
        if (this.end) {
            return this.end;
        }
        var singleEventSpan = this.getSingleEventSpan();
        if (singleEventSpan) {
            return singleEventSpan.end;
        }
        return null;
    };
    /**
     * Attempts to calculate the entire range of the schedule taking into account
     * any start date, end date, the included and excluded dates, and also even
     * if the start and end date aren't specified, it checks to see if this is a
     * single event schedule. If the start of the result is not defined, that
     * means this schedule has occurred since the beginning of time. If the end
     * of the result is not defined, that means the schedule will occurr until
     * the end of time.
     */
    Schedule.prototype.getRange = function (useInclude) {
        var _this = this;
        if (useInclude === void 0) { useInclude = true; }
        var hasTimes = this.times.length > 0;
        var start = this.getStart();
        var end = this.getEnd();
        if (useInclude) {
            this.include.spans().each(function (_a) {
                var span = _a.span;
                if (!_this.isExcluded(span.start, hasTimes)) {
                    if (!start || span.start.isBefore(start)) {
                        start = span.start;
                    }
                    if (!end || span.end.isAfter(end)) {
                        end = span.end;
                    }
                }
            });
        }
        return { start: start, end: end };
    };
    /**
     * Returns an iterator for all occurrences in this schedule. If a finite
     * list of occurrences is not possible to generate, an empty iterator will
     * be returned. A finite set of occurrences can be determine when a start
     * and end date are specified.
     */
    Schedule.prototype.getOccurrences = function () {
        var start = this.getStart();
        var end = this.getEnd();
        if (!start || !end) {
            return iteratez.Iterate.empty();
        }
        var daysBetween = start.daysBetween(end, exports.Op.CEIL, true);
        var beforeStart = this.include
            .spans()
            .where(function (_a) {
            var span = _a.span;
            return span.start.isBefore(start);
        })
            .sorted(function (a, b) { return a.span.start.time - b.span.start.time; })
            .transform(function (_a) {
            var span = _a.span;
            return span;
        });
        var afterStart = this.forecast(start, false, daysBetween)
            .transform(function (_a) {
            var span = _a[0];
            return span;
        });
        var afterEnd = this.include
            .spans()
            .where(function (_a) {
            var span = _a.span;
            return span.start.isAfter(end);
        })
            .sorted(function (a, b) { return a.span.start.time - b.span.start.time; })
            .transform(function (_a) {
            var span = _a.span;
            return span;
        });
        return iteratez.Iterate.join(beforeStart, afterStart, afterEnd);
    };
    /**
     * Determines whether the given day lies between the earliest and latest
     * valid day in the schedule.
     *
     * @param day The day to test.
     * @returns `true` if the day lies in the schedule, otherwise `false`.
     * @see [[Schedule.start]]
     * @see [[Schedule.end]]
     */
    Schedule.prototype.matchesSpan = function (day) {
        return (this.start === null || day.isSameOrAfter(this.start)) &&
            (this.end === null || day.isBefore(this.end));
    };
    /**
     * Determines whether the given range overlaps with the earliest and latest
     * valid days in this schedule (if any).
     *
     * @param start The first day in the range.
     * @param end The last day in the range.
     * @returns `true` if the range intersects with the schedule, otherwise `false`.
     * @see [[Schedule.start]]
     * @see [[Schedule.end]]
     */
    Schedule.prototype.matchesRange = function (start, end) {
        if (this.start && end.isBefore(this.start)) {
            return false;
        }
        if (this.end && start.isAfter(this.end)) {
            return false;
        }
        return true;
    };
    /**
     * Determines whether the given day is explicitly excluded in the schedule.
     *
     * @param day The day to test.
     * @param lookAtTime lookAtTime If the specific time of the given day should
     *    be looked at.
     * @returns `true` if the day was excluded, otherwise `false`.
     */
    Schedule.prototype.isExcluded = function (day, lookAtTime) {
        if (lookAtTime === void 0) { lookAtTime = true; }
        return this.exclude.get(day, false, lookAtTime);
    };
    /**
     * Determines whether the given day is explicitly included in the schedule.
     *
     * @param day The day to test.
     * @param lookAtTime lookAtTime If the specific time of the given day should
     *    be looked at.
     * @returns `true` if the day is NOT explicitly included, otherwise `false`.
     */
    Schedule.prototype.isIncluded = function (day, lookAtTime) {
        if (lookAtTime === void 0) { lookAtTime = true; }
        return this.include.get(day, false, lookAtTime);
    };
    /**
     * Determines whether the given day is cancelled in the schedule.
     *
     * @param day The day to test.
     * @param lookAtTime lookAtTime If the specific time of the given day should
     *    be looked at.
     * @returns `true` if the day was cancelled, otherwise `false`.
     */
    Schedule.prototype.isCancelled = function (day, lookAtTime) {
        if (lookAtTime === void 0) { lookAtTime = true; }
        return this.cancel.get(day, false, lookAtTime);
    };
    /**
     * Returns the metadata for the given day or `null` if there is none.
     *
     * @param day The day to return the metadata for.
     * @param otherwise The data to return if none exists for the given day.
     * @param lookAtTime lookAtTime If the specific time of the given day should
     *    be looked at.
     * @returns The metadata or `null`.
     */
    Schedule.prototype.getMeta = function (day, otherwise, lookAtTime) {
        if (otherwise === void 0) { otherwise = null; }
        if (lookAtTime === void 0) { lookAtTime = true; }
        return this.meta.get(day, otherwise, lookAtTime);
    };
    /**
     * Returns all metadata for the given day or an empty array if there is none.
     *
     * @param day The day to return the metadata for.
     * @returns The array of metadata ordered by priority or an empty array.
     */
    Schedule.prototype.getMetas = function (day) {
        return this.meta.getAll(day);
    };
    /**
     * Returns whether the events in the schedule are all day long or start at
     * specific times. Full day events start at the start of the day and end at
     * the start of the next day (if the duration = `1` and durationUnit = 'days').
     * Full day events have no times specified and should have a durationUnit of
     * either `days` or `weeks`.
     */
    Schedule.prototype.isFullDay = function () {
        return this.times.length === 0;
    };
    /**
     * Sets whether this schedule is a full day event if it is not already. If
     * this schedule is a full day event and `false` is passed to this function
     * a single timed event will be added based on `defaultTime`. If this schedule
     * has timed events and `true` is passed to make the schedule full day, the
     * timed events are removed from this schedule. If the durationUnit is not the
     * expected unit based on the new full day flag - the duration is reset to 1
     * and the duration unit is set to the expected unit.
     *
     * @param fullDay Whether this schedule should represent a full day event or
     *    timed events.
     * @param defaultTime If `fullDay` is `false` and this schedule is currently
     *    a full day event - this time will be used as the time of the first event.
     */
    Schedule.prototype.setFullDay = function (fullDay, defaultTime) {
        if (fullDay === void 0) { fullDay = true; }
        if (defaultTime === void 0) { defaultTime = '08:00'; }
        if (fullDay !== this.isFullDay()) {
            if (fullDay) {
                this.times = [];
                if (this.durationUnit !== 'day') {
                    this.duration = 1;
                    this.durationUnit = 'day';
                }
            }
            else {
                this.times = [Parse.time(defaultTime)];
                if (this.durationUnit !== 'hour') {
                    this.duration = 1;
                    this.durationUnit = 'hour';
                }
            }
        }
        return this;
    };
    /**
     * Adjusts the [[Schedule.start]] and [[Schedule.end]] dates specified on this
     * schedule if this schedule represents a single event and the `start` and
     * `end` are already set or `addSpan` is `true`.
     *
     * @param addSpan If `true`, the `start` and `end` dates will always be
     *    adjusted if this schedule is a single event.
     */
    Schedule.prototype.adjustDefinedSpan = function (addSpan) {
        if (addSpan === void 0) { addSpan = false; }
        var single = this.getSingleEventSpan();
        if (single && (addSpan || (this.start && this.end))) {
            this.start = single.start.startOf('day');
            this.end = single.end.endOf('day');
        }
        return this;
    };
    /**
     * Returns a span of time for a schedule with full day events starting on the
     * start of the given day with the desired duration in days or weeks.
     *
     * @param day The day the span starts on.
     * @returns The span of time starting on the given day.
     */
    Schedule.prototype.getFullSpan = function (day) {
        var start = day.startOf('day');
        var end = start.add(this.durationUnit, this.duration);
        return new DaySpan(start, end);
    };
    /**
     * Returns a span of time starting on the given day at the given day with the
     * duration specified on this schedule.
     *
     * @param day The day the span starts on.
     * @param time The time of day the span starts.
     * @returns The span of time calculated.
     */
    Schedule.prototype.getTimeSpan = function (day, time) {
        var start = day.withTime(time);
        var end = start.add(this.durationUnit, this.duration);
        return new DaySpan(start, end);
    };
    /**
     * Determines whether the given day is a day on the schedule for the start
     * of an event. If an event is more than one day and the day given is not the
     * start this may return `false`. This does not test for event instances
     * that exist through [[Schedule.include]].
     *
     * @param day The day to test.
     * @returns `true` if the day marks the start of an event on the schedule.
     * @see [[Schedule.isIncluded]]
     * @see [[Schedule.isFullyExcluded]]
     * @see [[Schedule.matchesSpan]]
     */
    Schedule.prototype.matchesDay = function (day) {
        if (this.isIncluded(day, false)) {
            return true;
        }
        if (!this.matchesSpan(day) || this.isFullyExcluded(day)) {
            return false;
        }
        for (var _i = 0, _a = this.checks; _i < _a.length; _i++) {
            var check = _a[_i];
            if (!check(day[check.property])) {
                return false;
            }
        }
        return true;
    };
    /**
     * Determines whether the given day has events added through
     * [[Schedule.include]].
     *
     * @param day The day to look for included times on.
     * @returns `true` if there are included event instances on the given day,
     *    otherwise `false`.
     */
    Schedule.prototype.hasIncludedTime = function (day) {
        return !this.iterateIncludeTimes(day).empty();
    };
    /**
     * Determines whether the given day is fully excluded from the schedule. A
     * fully excluded day is one that has a day-wide exclusion, or the schedule
     * is not an all-day event and all times in the schedule are specifically
     * excluded.
     *
     * @param day The day to test.*
     * @returns `true` if he day is fully excluded, otherwise `false`.
     */
    Schedule.prototype.isFullyExcluded = function (day) {
        // If exclude object is empty, bail early.
        if (this.exclude.isEmpty()) {
            return false;
        }
        if (this.isExcluded(day, false)) {
            return true;
        }
        if (this.isFullDay()) {
            return false;
        }
        for (var _i = 0, _a = this.times; _i < _a.length; _i++) {
            var time = _a[_i];
            if (!this.isExcluded(day.withTime(time))) {
                return false;
            }
        }
        return true;
    };
    /**
     * Finds the next day an event occurs on the schedule given a day to start,
     * optionally including it, and a maximum number of days to look ahead.
     *
     * @param day The day to start to search from.
     * @param includeDay If the given day should be included in the search.
     * @param lookAhead The maximum number of days to look ahead from the given
     *     day for event occurrences.
     * @returns The next day on the schedule or `null` if none exists.
     */
    Schedule.prototype.nextDay = function (day, includeDay, lookAhead) {
        if (includeDay === void 0) { includeDay = false; }
        if (lookAhead === void 0) { lookAhead = Constants.DAYS_IN_YEAR; }
        return this.iterateDaycast(day, 1, true, includeDay, lookAhead).first();
    };
    /**
     * Finds the next specified number of days that events occur on the schedule
     * given a day to start, optionally including it, and a maximum number of days
     * to look ahead.
     *
     * @param day The day to start to search from.
     * @param max The maximum number of days to return in the result.
     * @param includeDay If the given day should be included in the search.
     * @param lookAhead The maximum number of days to look ahead from the given
     *     day for event occurrences.
     * @returns An array containing the next days on the schedule that events
     *    start or an empty array if there are none.
     */
    Schedule.prototype.nextDays = function (day, max, includeDay, lookAhead) {
        if (includeDay === void 0) { includeDay = false; }
        if (lookAhead === void 0) { lookAhead = Constants.DAYS_IN_YEAR; }
        return this.iterateDaycast(day, max, true, includeDay, lookAhead);
    };
    /**
     * Finds the previous day an event occurs on the schedule given a day to start,
     * optionally including it, and a maximum number of days to look behind.
     *
     * @param day The day to start to search from.
     * @param includeDay If the given day should be included in the search.
     * @param lookBack The maximum number of days to look behind from the given
     *     day for event occurrences.
     * @returns The previous day on the schedule or `null` if none exists.
     */
    Schedule.prototype.prevDay = function (day, includeDay, lookBack) {
        if (includeDay === void 0) { includeDay = false; }
        if (lookBack === void 0) { lookBack = Constants.DAYS_IN_YEAR; }
        return this.iterateDaycast(day, 1, false, includeDay, lookBack).first();
    };
    /**
     * Finds the previous specified number of days that events occur on the
     * schedule given a day to start, optionally including it, and a maximum
     * number of days to look behind.
     *
     * @param day The day to start to search from.
     * @param max The maximum number of days to return in the result.
     * @param includeDay If the given day should be included in the search.
     * @param lookAhead The maximum number of days to look behind from the given
     *     day for event occurrences.
     * @returns An array containing the previous days on the schedule that events
     *    start or an empty array if there are none.
     */
    Schedule.prototype.prevDays = function (day, max, includeDay, lookBack) {
        if (includeDay === void 0) { includeDay = false; }
        if (lookBack === void 0) { lookBack = Constants.DAYS_IN_YEAR; }
        return this.iterateDaycast(day, max, false, includeDay, lookBack);
    };
    /**
     * Iterates over days that events start in the schedule given a day to start,
     * a maximum number of days to find, and a direction to look.
     *
     * @param day The day to start to search from.
     * @param max The maximum number of days to iterate.
     * @param next If `true` this searches forward, otherwise `false` is backwards.
     * @param includeDay If the given day should be included in the search.
     * @param lookup The maximum number of days to look through from the given
     *     day for event occurrences.
     * @returns A new Iterator for the days found in the cast.
     * @see [[Schedule.iterateSpans]]
     */
    Schedule.prototype.iterateDaycast = function (day, max, next, includeDay, lookup) {
        var _this = this;
        if (includeDay === void 0) { includeDay = false; }
        if (lookup === void 0) { lookup = Constants.DAYS_IN_YEAR; }
        return new iteratez.Iterate(function (iterator) {
            var iterated = 0;
            var acted = 0;
            for (var days = 0; days < lookup; days++) {
                if (!includeDay || days > 0) {
                    day = next ? day.next() : day.prev();
                }
                if (!_this.iterateSpans(day, false).empty()) {
                    var action = iterator.act(day, acted++);
                    if (action === iteratez.IterateAction.STOP || ++iterated >= max) {
                        return;
                    }
                }
            }
        });
    };
    /**
     * Iterates through the spans (event instances) that start on or covers the
     * given day.
     *
     * @param day The day to look for spans on.
     * @param covers If `true` spans which span multiple days will be looked at
     *    to see if they intersect with the given day, otherwise `false` will
     *    only look at the given day for the start of events.
     * @returns A new Iterator for all the spans found.
     */
    Schedule.prototype.iterateSpans = function (day, covers) {
        var _this = this;
        if (covers === void 0) { covers = false; }
        return new iteratez.Iterate(function (iterator) {
            var current = day;
            var lookBehind = covers ? _this.durationInDays : 0;
            var key = 0;
            // If the events start at the end of the day and may last multiple days....
            if (_this.isFullDay()) {
                // If the schedule has events which span multiple days we need to look
                // backwards for events that overlap with the given day.
                while (lookBehind >= 0) {
                    // If the current day matches the schedule rules...
                    if (_this.matchesDay(current)) {
                        // Build a DaySpan with the given start day and the schedules duration.
                        var span = _this.getFullSpan(current);
                        // If that dayspan intersects with the given day, it's a winner!
                        if (span.matchesDay(day)) {
                            switch (iterator.act(span, key++)) {
                                case iteratez.IterateAction.STOP:
                                    return;
                            }
                        }
                    }
                    current = current.prev();
                    lookBehind--;
                }
            }
            // This schedule has events which start at certain times
            else {
                // If the schedule has events which span multiple days we need to look
                // backwards for events that overlap with the given day.
                while (lookBehind >= 0) {
                    // If the current day matches the schedule rules...
                    if (_this.matchesDay(current)) {
                        // Iterate through each daily occurrence in the schedule...
                        for (var _i = 0, _a = _this.times; _i < _a.length; _i++) {
                            var time = _a[_i];
                            var span = _this.getTimeSpan(current, time);
                            // If the event intersects with the given day and the occurrence
                            // has not specifically been excluded...
                            if (span.matchesDay(day) && !_this.isExcluded(span.start, true)) {
                                switch (iterator.act(span, key++)) {
                                    case iteratez.IterateAction.STOP:
                                        return;
                                }
                            }
                        }
                    }
                    else {
                        // The current day does not match the schedule, however the schedule
                        // might have moved/random event occurrents on the current day.
                        // We only want the ones that overlap with the given day.
                        _this.iterateIncludeTimes(current, day).each(function (span, i, timeIterator) {
                            switch (iterator.act(span, key++)) {
                                case iteratez.IterateAction.STOP:
                                    timeIterator.stop();
                                    break;
                            }
                        });
                        if (iterator.action === iteratez.IterateAction.STOP) {
                            return;
                        }
                    }
                    lookBehind--;
                    // Generating current.prev() is costly.
                    // Avoid generating it if looping condition is no longer satisfied.
                    if (lookBehind >= 0) {
                        current = current.prev();
                    }
                }
            }
        });
    };
    /**
     * Determines if the given day is on the schedule and the time specified on
     * the day matches one of the times on the schedule.
     *
     * @param day The day to test.
     * @returns `true` if the day and time match the schedule, otherwise false.
     */
    Schedule.prototype.matchesTime = function (day) {
        return !!this.iterateSpans(day, true).where(function (span) { return span.start.sameMinute(day); }).first();
    };
    /**
     * Determines if the given day is covered by this schedule. A schedule can
     * specify events that span multiple days - so even though the day does not
     * match the starting day of a span - it can be a day that is within the
     * schedule.
     *
     * @param day The day to test.
     * @returns `true` if the day is covered by an event on this schedule,
     *    otherwise `false`.
     */
    Schedule.prototype.coversDay = function (day) {
        return !this.iterateSpans(day, true).empty();
    };
    /**
     * Determines if the given timestamp lies in an event occurrence on this
     * schedule.
     *
     * @param day The timestamp to test against the schedule.
     * @return `true` if the timestamp lies in an event occurrent start and end
     *    timestamps, otherwise `false`.
     */
    Schedule.prototype.coversTime = function (day) {
        return !!this.iterateSpans(day, true).where(function (span) { return span.contains(day); }).first();
    };
    /**
     * Sets the frequency for the given property. This does not update the
     * [[Schedule.checks]] array, the [[Schedule.updateChecks]] function needs
     * to be called.
     *
     * @param property The frequency to update.
     * @param frequency The new frequency.
     */
    Schedule.prototype.setFrequency = function (property, frequency) {
        this[property] = Parse.frequency(frequency, property);
        return this;
    };
    /**
     * Changes the exclusion status of the event at the given time. By default
     * this excludes this event - but `false`  may be passed to undo an exclusion.
     *
     * @param time The start time of the event occurrence to exclude or include.
     * @param excluded Whether the event should be excluded.
     */
    Schedule.prototype.setExcluded = function (time, excluded) {
        if (excluded === void 0) { excluded = true; }
        var type = this.identifierType;
        this.exclude.set(time, excluded, type);
        this.include.set(time, !excluded, type);
        return this;
    };
    /**
     * Changes the cancellation status of the event at the given start time. By
     * default this cancels the event occurrence - but `false` may be passed to
     * undo a cancellation.
     *
     * @param time The start time of the event occurrence to cancel or uncancel.
     * @param cancelled Whether the event should be cancelled.
     */
    Schedule.prototype.setCancelled = function (time, cancelled) {
        if (cancelled === void 0) { cancelled = true; }
        this.cancel.set(time, cancelled, this.identifierType);
        return this;
    };
    /**
     * Removes the time from this schedule and all related included, excluded,
     * cancelled instances as well as metadata.
     *
     * @param time The time to remove from the schedule.
     * @param removeInclude If any included instances should be removed as well.
     * @returns `true` if the time was removed, otherwise `false`.
     */
    Schedule.prototype.removeTime = function (time, removeInclude) {
        if (removeInclude === void 0) { removeInclude = true; }
        var found = false;
        for (var i = 0; i < this.times.length && !found; i++) {
            found = time.matches(this.times[i]);
            if (found) {
                this.times.splice(i, 1);
            }
        }
        if (found) {
            if (removeInclude) {
                this.include.removeTime(time);
            }
            this.exclude.removeTime(time);
            this.cancel.removeTime(time);
            this.meta.removeTime(time);
        }
        return found;
    };
    /**
     * Moves the event instance starting at `fromTime` to `toTime` optionally
     * placing `meta` in the schedules metadata for the new time `toTime`.
     * If this schedule has a single event ([[Schedule.isSingleEvent]]) then the
     * only value needed is `toTime` and not `fromTime`.
     *
     * @param toTime The timestamp of the new event.
     * @param fromTime The timestamp of the event on the schedule to move if this
     *    schedule generates multiple events.
     * @returns `true` if the schedule had the event moved, otherwise `false`.
     */
    Schedule.prototype.move = function (toTime, fromTime, meta) {
        if (!this.moveSingleEvent(toTime) && fromTime) {
            return this.moveInstance(fromTime, toTime);
        }
        return false;
    };
    /**
     * Moves a time specified in this schedule to the given time, adjusting
     * any cancelled event instances, metadata, and any excluded and included
     * event instances.
     *
     * @param fromTime The time to move.
     * @param toTime The new time in the schedule.
     * @returns `true` if time was moved, otherwise `false`.
     */
    Schedule.prototype.moveTime = function (fromTime, toTime) {
        var found = false;
        for (var i = 0; i < this.times.length && !found; i++) {
            found = fromTime.matches(this.times[i]);
            if (found) {
                this.times.splice(i, 1, toTime);
            }
        }
        if (found) {
            this.include.moveTime(fromTime, toTime);
            this.exclude.moveTime(fromTime, toTime);
            this.cancel.moveTime(fromTime, toTime);
            this.meta.moveTime(fromTime, toTime);
            this.adjustDefinedSpan(false);
        }
        return found;
    };
    /**
     * Moves the event instance starting at `fromTime` to `toTime` optionally
     * placing `meta` in the schedules metadata for the new time `toTime`. A move
     * is accomplished by excluding the current event and adding an inclusion of
     * the new day & time.
     *
     * @param fromTime The timestamp of the event on the schedule to move.
     * @param toTime The timestamp of the new event.
     * @returns `true`.
     * @see [[Schedule.move]]
     */
    Schedule.prototype.moveInstance = function (fromTime, toTime) {
        var type = this.identifierType;
        this.exclude.set(fromTime, true, type);
        this.exclude.set(toTime, false, type);
        this.include.set(toTime, true, type);
        this.include.set(fromTime, false, type);
        if (this.cancel.get(fromTime, false) && !this.cancel.get(toTime, false)) {
            this.cancel.set(toTime, true, type);
            if (this.cancel.getIdentifier(fromTime) === type) {
                this.cancel.unset(fromTime, type);
            }
        }
        var meta = this.meta.get(fromTime, null);
        if (meta && meta !== this.meta.get(toTime, null)) {
            this.meta.set(toTime, meta, type);
            if (this.meta.getIdentifier(fromTime) === type) {
                this.meta.unset(fromTime, type);
            }
        }
        return true;
    };
    /**
     * Moves the single event in this schedule to the given day/time if applicable.
     * If this schedule is not a single event schedule then `false` is returned.
     * If this schedule is a timed event the time will take the time of the given
     * `toTime` of `takeTime` is `true`.
     *
     * @param toTime The time to move the single event to.
     * @param takeTime If this schedule has a single timed event, should the time
     *    of the event be changed to the time of the given `toTime`?
     * @returns `true` if the schedule was adjusted, otherwise `false`.
     * @see [[Schedule.move]]
     */
    Schedule.prototype.moveSingleEvent = function (toTime, takeTime) {
        if (takeTime === void 0) { takeTime = true; }
        if (!this.isSingleEvent()) {
            return false;
        }
        for (var _i = 0, _a = this.checks; _i < _a.length; _i++) {
            var check = _a[_i];
            var prop = check.property;
            var value = toTime[prop];
            var frequency = Parse.frequency([value], prop);
            this[prop] = frequency;
        }
        if (this.times.length === 1 && takeTime) {
            this.times = [toTime.asTime()];
        }
        this.updateChecks();
        var span = this.getSingleEventSpan();
        if (this.start) {
            this.start = span.start.startOf('day');
        }
        if (this.end) {
            this.end = span.end.endOf('day');
        }
        this.updateEnd();
        return true;
    };
    /**
     * Returns the span of the single event in this schedule if it's that type of
     * schedule, otherwise `null` is returned.
     *
     * @returns A span of the single event, otherwise `null`.
     * @see [[Schedule.isSingleEvent]]
     */
    Schedule.prototype.getSingleEventSpan = function () {
        if (!this.isSingleEvent()) {
            return null;
        }
        var startOfYear = Day.build(this.year.input[0], 0, 1);
        var start = this.iterateDaycast(startOfYear, 1, true, true, Constants.DAYS_IN_YEAR).first();
        if (!start) {
            return null;
        }
        return this.isFullDay() ?
            this.getFullSpan(start) :
            this.getTimeSpan(start, this.times[0]);
    };
    /**
     * Determines whether this schedule produces a single event, and no more.
     * If this schedule has any includes, it's assumed to be a multiple event
     * schedule. A single event can be detected in the following scenarios where
     * each frequency has a single occurrence (see [[Schedule.isSingleFrequency]]).
     *
     * - year, day of year
     * - year, month, day of month
     * - year, month, week of month, day of week
     * - year, week of year, day of week
     *
     * @returns `true` if this schedule produces a single event, otherwise `false`.
     */
    Schedule.prototype.isSingleEvent = function () {
        // 0 = full day, 1 = once a day, 1+ = multiple events a day
        if (this.times.length > 1) {
            return false;
        }
        // Let's assume if there are includes, this is not a single event.
        if (!this.include.isEmpty()) {
            return false;
        }
        // If this can occur on multiple years, not a single event.
        if (!this.isSingleYear()) {
            return false;
        }
        // If this is a specific year and day of the year: single!
        if (this.isSingleDayOfYear()) {
            return true;
        }
        // If this is a specific year, month, and day of month: single!
        if (this.isSingleMonth() && this.isSingleDayOfMonth()) {
            return true;
        }
        // If this is a specific year, month, week of the month, day of the week: single!
        if (this.isSingleMonth() && this.isSingleWeekOfMonth() && this.isSingleDayOfWeek()) {
            return true;
        }
        // If this is a specific year, week of the year, day of the week: single!
        if (this.isSingleWeekOfYear() && this.isSingleDayOfWeek()) {
            return true;
        }
        // Doesn't look like a single event.
        return false;
    };
    /**
     * @returns `true` if this schedule produces events only in a specific year.
     * @see [[Schedule.year]]
     */
    Schedule.prototype.isSingleYear = function () {
        return this.isSingleFrequency(this.year);
    };
    /**
     * @returns `true` if this schedule produces events only in a specific month.
     * @see [[Schedule.month]]
     */
    Schedule.prototype.isSingleMonth = function () {
        return this.isSingleFrequency(this.month);
    };
    /**
     * @returns `true` if this schedule produces events only in a specific day of
     *    the month.
     * @see [[Schedule.dayOfMonth]]
     * @see [[Schedule.lastDayOfMonth]]
     */
    Schedule.prototype.isSingleDayOfMonth = function () {
        return this.isSingleFrequency(this.dayOfMonth) ||
            this.isSingleFrequency(this.lastDayOfMonth);
    };
    /**
     * @returns `true` if this schedule produces events only in a specific day of
     *    the week.
     * @see [[Schedule.day]]
     * @see [[Schedule.dayOfWeek]]
     */
    Schedule.prototype.isSingleDayOfWeek = function () {
        return this.isSingleFrequency(this.dayOfWeek) ||
            this.isSingleFrequency(this.day);
    };
    /**
     * @returns `true` if this schedule produces events only in a specific day of
     *    the year.
     * @see [[Schedule.dayOfYear]]
     */
    Schedule.prototype.isSingleDayOfYear = function () {
        return this.isSingleFrequency(this.dayOfYear);
    };
    /**
     * @returns `true` if this schedule produces events only in a specific week of
     *    the month.
     * @see [[Schedule.weekspanOfMonth]]
     * @see [[Schedule.fullWeekOfMonth]]
     * @see [[Schedule.weekOfMonth]]
     * @see [[Schedule.lastFullWeekOfMonth]]
     * @see [[Schedule.lastWeekspanOfMonth]]
     */
    Schedule.prototype.isSingleWeekOfMonth = function () {
        return this.isSingleFrequency(this.weekspanOfMonth) ||
            this.isSingleFrequency(this.fullWeekOfMonth) ||
            this.isSingleFrequency(this.weekOfMonth) ||
            this.isSingleFrequency(this.lastFullWeekOfMonth) ||
            this.isSingleFrequency(this.lastWeekspanOfMonth);
    };
    /**
     * @returns `true` if this schedule produces events only in a specific week of
     *    the year.
     * @see [[Schedule.weekspanOfYear]]
     * @see [[Schedule.fullWeekOfYear]]
     * @see [[Schedule.week]]
     * @see [[Schedule.weekOfYear]]
     * @see [[Schedule.lastFullWeekOfYear]]
     * @see [[Schedule.lastWeekspanOfYear]]
     */
    Schedule.prototype.isSingleWeekOfYear = function () {
        return this.isSingleFrequency(this.weekspanOfYear) ||
            this.isSingleFrequency(this.fullWeekOfYear) ||
            this.isSingleFrequency(this.week) ||
            this.isSingleFrequency(this.weekOfYear) ||
            this.isSingleFrequency(this.lastFullWeekOfYear) ||
            this.isSingleFrequency(this.lastWeekspanOfYear);
    };
    /**
     * Determines if the given [[FrequencyCheck]] results in a single occurrence.
     *
     * @returns `true` if the frequency results in a single event, otherwise `false`.
     */
    Schedule.prototype.isSingleFrequency = function (frequency) {
        return (Functions.isFrequencyValueOneOf(frequency.input) && frequency.input.length === 1) || Functions.isFrequencyValueEquals(frequency.input);
    };
    /**
     * Creates a forecast for this schedule which returns a number of event
     * occurrences around a given day. A single item could be returned per day, or
     * you could get an item for each timed event occurrence.
     *
     * @param around The day to find a forecast around.
     * @param covers If `true` spans which span multiple days will be looked at
     *    to see if they intersect with the given day, otherwise `false` will
     *    only look at the given day for the start of events.
     * @param daysAfter The number of events to return after the given day.
     * @param daysBefore The number of events to return before the given day.
     * @param times If timed events should be returned, or only one for each day.
     * @param lookAround How many days to look before and after the given day for
     *    event occurrences.
     * @returns A new iterator which provides the event occurence span, the day it
     *    starts (or is covered if `covers` is `true`), and the identifier for the
     *    event.
     */
    Schedule.prototype.forecast = function (around, covers, daysAfter, daysBefore, times, lookAround) {
        var _this = this;
        if (covers === void 0) { covers = true; }
        if (daysBefore === void 0) { daysBefore = daysAfter; }
        if (times === void 0) { times = false; }
        if (lookAround === void 0) { lookAround = Constants.DAYS_IN_YEAR; }
        var type = this.identifierType;
        var tupleIndex = 0;
        var tuplesForDay = function (day, tuples) {
            var spans = _this.iterateSpans(day, covers).array();
            var last = times ? spans.length : Math.min(1, spans.length);
            var offset = times ? 0 : spans.length - 1;
            for (var i = 0; i < last; i++) {
                var span = spans[i + offset];
                var id = type.get(span.start);
                if (tuples.act([span, day, id], tupleIndex++) === iteratez.IterateAction.STOP) {
                    return false;
                }
            }
            return true;
        };
        var prev = new iteratez.Iterate(function (iterator) {
            var curr = around;
            for (var i = 0; i < lookAround; i++) {
                if (!tuplesForDay(curr, iterator)) {
                    break;
                }
                curr = curr.prev();
            }
        });
        var next = new iteratez.Iterate(function (iterator) {
            var curr = around;
            for (var i = 0; i < lookAround; i++) {
                curr = curr.next();
                if (!tuplesForDay(curr, iterator)) {
                    break;
                }
            }
        });
        return prev.take(daysBefore + 1).reverse().append(next.take(daysAfter));
    };
    /**
     * Iterates timed events that were explicitly specified on the given day.
     * Those events could span multiple days so may be tested against another day.
     *
     * @param day The day to look for included timed events.
     * @param matchAgainst The day to test against the timed event.
     * @returns A new Iterator for all the included spans found.
     */
    Schedule.prototype.iterateIncludeTimes = function (day, matchAgainst) {
        var _this = this;
        if (matchAgainst === void 0) { matchAgainst = day; }
        var isIncludedTime = function (result) {
            var id = result[0], included = result[1];
            return included && Identifier.Time.is(id);
        };
        var getSpan = function (result) {
            var id = result[0];
            var time = Identifier.Time.start(id);
            var span = _this.getTimeSpan(time, time.asTime());
            if (span.matchesDay(matchAgainst)) {
                return span;
            }
        };
        return this.include.query(day.dayIdentifier).where(isIncludedTime).transform(getSpan);
    };
    /**
     * Clones this schedule.
     *
     * @returns A new schedule which matches this schedule.
     */
    Schedule.prototype.clone = function () {
        return new Schedule(this.toInput());
    };
    /**
     * Converts the schedule instance back into input.
     *
     * @param returnDays When `true` the start, end, and array of exclusions will
     *    have [[Day]] instances, otherwise the UTC timestamp and dayIdentifiers
     *    will be used when `false`.
     * @param returnTimes When `true` the times returned in the input will be
     *    instances of [[Time]] otherwise the `timeFormat` is used to convert the
     *    times to strings.
     * @param timeFormat The time format to use when returning the times as strings.
     * @param alwaysDuration If the duration values (`duration` and
     *    `durationUnit`) should always be returned in the input.
     * @param alwaysReturnEnd If end should be in the input even if
     *    maxOccurrences is specified on the schedule.
     * @returns The input that describes this schedule.
     * @see [[Time.format]]
     */
    Schedule.prototype.toInput = function (returnDays, returnTimes, timeFormat, alwaysDuration, alwaysReturnEnd) {
        if (returnDays === void 0) { returnDays = false; }
        if (returnTimes === void 0) { returnTimes = false; }
        if (timeFormat === void 0) { timeFormat = ''; }
        if (alwaysDuration === void 0) { alwaysDuration = false; }
        if (alwaysReturnEnd === void 0) { alwaysReturnEnd = false; }
        var defaultUnit = Constants.DURATION_DEFAULT_UNIT(this.isFullDay());
        var exclusions = this.exclude.identifiers(function (v) { return v; }).array();
        var inclusions = this.include.identifiers(function (v) { return v; }).array();
        var cancels = this.cancel.identifiers(function (v) { return v; }).array();
        var hasMeta = !this.meta.isEmpty();
        var out = {};
        var times = [];
        for (var _i = 0, _a = this.times; _i < _a.length; _i++) {
            var time = _a[_i];
            times.push(returnTimes ? time : (timeFormat ? time.format(timeFormat) : time.toString()));
        }
        if (this.start)
            out.start = returnDays ? this.start : this.start.time;
        if (this.end && (alwaysReturnEnd || this.maxOccurrences < 1))
            out.end = returnDays ? this.end : this.end.time;
        if (this.maxOccurrences > 0)
            out.maxOccurrences = this.maxOccurrences;
        if (times.length)
            out.times = times;
        if (alwaysDuration || this.duration !== Constants.DURATION_DEFAULT)
            out.duration = this.duration;
        if (alwaysDuration || this.durationUnit !== defaultUnit)
            out.durationUnit = this.durationUnit;
        if (exclusions.length)
            out.exclude = exclusions;
        if (inclusions.length)
            out.include = inclusions;
        if (cancels.length)
            out.cancel = cancels;
        if (hasMeta)
            out.meta = Functions.extend({}, this.meta.map);
        if (this.dayOfWeek.input)
            out.dayOfWeek = this.dayOfWeek.input;
        if (this.dayOfMonth.input)
            out.dayOfMonth = this.dayOfMonth.input;
        if (this.lastDayOfMonth.input)
            out.lastDayOfMonth = this.lastDayOfMonth.input;
        if (this.dayOfYear.input)
            out.dayOfYear = this.dayOfYear.input;
        if (this.year.input)
            out.year = this.year.input;
        if (this.month.input)
            out.month = this.month.input;
        if (this.day.input)
            out.day = this.day.input;
        if (this.week.input)
            out.week = this.week.input;
        if (this.weekOfYear.input)
            out.weekOfYear = this.weekOfYear.input;
        if (this.weekspanOfYear.input)
            out.weekspanOfYear = this.weekspanOfYear.input;
        if (this.fullWeekOfYear.input)
            out.fullWeekOfYear = this.fullWeekOfYear.input;
        if (this.lastWeekspanOfYear.input)
            out.lastWeekspanOfYear = this.lastWeekspanOfYear.input;
        if (this.lastFullWeekOfYear.input)
            out.lastFullWeekOfYear = this.lastFullWeekOfYear.input;
        if (this.weekOfMonth.input)
            out.weekOfMonth = this.weekOfMonth.input;
        if (this.weekspanOfMonth.input)
            out.weekspanOfMonth = this.weekspanOfMonth.input;
        if (this.fullWeekOfMonth.input)
            out.fullWeekOfMonth = this.fullWeekOfMonth.input;
        if (this.lastWeekspanOfMonth.input)
            out.lastWeekspanOfMonth = this.lastWeekspanOfMonth.input;
        if (this.lastFullWeekOfMonth.input)
            out.lastFullWeekOfMonth = this.lastFullWeekOfMonth.input;
        return out;
    };
    /**
     * Describes the schedule in a human friendly string taking into account all
     * possible values specified in this schedule.
     *
     * @param thing A brief description of the things (events) on the schedule.
     * @param includeRange When `true` the [[Schedule.start]] and [[Schedule.end]]
     *    are possibly included in the description if they have values.
     * @param includeTimes When `true` the [[Schedule.times]] are possibly included
     *    in the description.
     * @param includeDuration When `true` the [[Schedule.duration]] and
     *    [[Schedule.durationUnit]] are added to the description if
     *    [[Schedule.duration]] is not equal to `1`.
     * @param includeExcludes When `true` the [[Schedule.exclude]] are added
     *    to the description if there are any.
     * @param includeIncludes When `true` the [[Schedule.include]] are added
     *    to the description if there are any.
     * @param includeCancels When `true` the [[Schedule.cancel]] are added
     *    to the description if there are any.
     * @returns The descroption of the schedule.
     */
    Schedule.prototype.describe = function (thing, includeRange, includeTimes, includeDuration, includeExcludes, includeIncludes, includeCancels) {
        if (thing === void 0) { thing = 'event'; }
        if (includeRange === void 0) { includeRange = true; }
        if (includeTimes === void 0) { includeTimes = true; }
        if (includeDuration === void 0) { includeDuration = false; }
        if (includeExcludes === void 0) { includeExcludes = false; }
        if (includeIncludes === void 0) { includeIncludes = false; }
        if (includeCancels === void 0) { includeCancels = false; }
        var lang = Locales.current;
        var out = '';
        if (includeRange) {
            if (this.start) {
                out += lang.scheduleStartingOn(this.start);
                if (this.end) {
                    out += lang.scheduleEndingOn(this.end);
                }
            }
            else if (this.end) {
                out += lang.scheduleEndsOn(this.end);
            }
        }
        out += lang.scheduleThing(thing, !out);
        out += this.describeRule(this.dayOfWeek.input, lang.ruleDayOfWeek);
        out += this.describeRule(this.day.input, lang.ruleDay);
        out += this.describeRule(this.lastDayOfMonth.input, lang.ruleLastDayOfMonth);
        out += this.describeRule(this.dayOfMonth.input, lang.ruleDayOfMonth);
        out += this.describeRule(this.dayOfYear.input, lang.ruleDayOfYear);
        out += this.describeRule(this.year.input, lang.ruleYear);
        out += this.describeRule(this.month.input, lang.ruleMonth);
        out += this.describeRule(this.week.input, lang.ruleWeek);
        out += this.describeRule(this.weekOfYear.input, lang.ruleWeekOfYear);
        out += this.describeRule(this.weekspanOfYear.input, lang.ruleWeekspanOfYear);
        out += this.describeRule(this.fullWeekOfYear.input, lang.ruleFullWeekOfYear);
        out += this.describeRule(this.lastWeekspanOfYear.input, lang.ruleLastWeekspanOfYear);
        out += this.describeRule(this.lastFullWeekOfYear.input, lang.ruleLastFullWeekOfYear);
        out += this.describeRule(this.weekOfMonth.input, lang.ruleWeekOfMonth);
        out += this.describeRule(this.fullWeekOfMonth.input, lang.ruleFullWeekOfMonth);
        out += this.describeRule(this.weekspanOfMonth.input, lang.ruleWeekspanOfMonth);
        out += this.describeRule(this.lastFullWeekOfMonth.input, lang.ruleLastFullWeekOfMonth);
        out += this.describeRule(this.lastWeekspanOfMonth.input, lang.ruleLastWeekspanOfMonth);
        if (includeTimes && this.times.length) {
            out += lang.scheduleAtTimes;
            out += this.describeArray(this.times, function (x) { return x.format('hh:mm a'); });
        }
        if (includeDuration && this.duration !== Constants.DURATION_DEFAULT) {
            out += lang.scheduleDuration(this.duration, this.durationUnit);
        }
        if (includeExcludes) {
            var excludes = this.exclude.spans().array();
            if (excludes.length) {
                out += lang.scheduleExcludes;
                out += this.describeArray(excludes, function (x) { return x.span.summary(exports.Units.DAY); });
            }
        }
        if (includeIncludes) {
            var includes = this.include.spans().array();
            if (includes.length) {
                out += lang.scheduleIncludes;
                out += this.describeArray(includes, function (x) { return x.span.summary(exports.Units.DAY); });
            }
        }
        if (includeCancels) {
            var cancels = this.cancel.spans().array();
            if (cancels.length) {
                out += lang.scheduleCancels;
                out += this.describeArray(cancels, function (x) { return x.span.summary(exports.Units.DAY); });
            }
        }
        return out;
    };
    /**
     * Describes the given frequency.
     *
     * @param value The frequency to describe.
     * @param localeRule The locale rule used to describe the frequency.
     * @returns A string description of the frequency.
     */
    Schedule.prototype.describeRule = function (value, localeRule) {
        var out = '';
        if (Functions.isFrequencyValueEvery(value)) {
            out += ' ' + localeRule.every(value.every);
            if (value.offset) {
                out += ' ' + localeRule.offset(value.offset);
            }
        }
        else if (Functions.isFrequencyValueOneOf(value)) {
            if (value.length) {
                out += ' ' + localeRule.oneOf(value);
            }
        }
        else if (Functions.isFrequencyValueEquals(value)) {
            out += ' ' + localeRule.oneOf([value]);
        }
        return out;
    };
    /**
     * Describes the array by adding commas where appropriate and 'and' before the
     * last value of the array (if its more than `1`).
     *
     * @param array The array of items to describe.
     * @param map The function which converts an item to a string.
     * @returns The final description of the array items.
     */
    Schedule.prototype.describeArray = function (array, map) {
        return Locales.current.list(array.map(map));
    };
    /**
     * Generates a schedule for an event which occurs once all day for a given day
     * optionally spanning multiple days starting on the given day.
     *
     * @param input The day the event starts.
     * @param days The number of days the event lasts.
     * @returns A new schedule that starts on the given day.
     */
    Schedule.forDay = function (input, days) {
        if (days === void 0) { days = 1; }
        var day = Day.parse(input);
        if (!day) {
            return null;
        }
        return new Schedule({
            year: [day.year],
            month: [day.month],
            dayOfMonth: [day.dayOfMonth],
            duration: days,
            durationUnit: 'day'
        });
    };
    /**
     * Generates a schedule for an event which occurs once at a given time on a
     * given day optionally spanning any amount of time (default is 1 hour).
     *
     * @param input The day the event starts.
     * @param time The time the event starts.
     * @param duration The duration of the event.
     * @param durationUnit The unit for the duration of the event.
     * @returns A new schedule that starts on the given day and time.
     */
    Schedule.forTime = function (input, time, duration, durationUnit) {
        if (duration === void 0) { duration = 1; }
        if (durationUnit === void 0) { durationUnit = 'hour'; }
        var day = Day.parse(input);
        if (!day) {
            return null;
        }
        return new Schedule({
            year: [day.year],
            month: [day.month],
            dayOfMonth: [day.dayOfMonth],
            times: [time],
            duration: duration,
            durationUnit: durationUnit
        });
    };
    /**
     * Generates a schedule for an event which occurs once over a given span.
     *
     * @param span The span of the event.
     * @returns A new schedule that starts and ends at the given timestamps.
     */
    Schedule.forSpan = function (span) {
        var start = span.start;
        var minutes = span.minutes();
        var isDay = minutes % Constants.MINUTES_IN_DAY === 0;
        var isHour = minutes % Constants.MINUTES_IN_HOUR === 0;
        var duration = isDay ? minutes / Constants.MINUTES_IN_DAY : (isHour ? minutes / Constants.MINUTES_IN_HOUR : minutes);
        var durationUnit = isDay ? 'day' : (isHour ? 'hour' : 'minute');
        return this.forTime(start, start.asTime(), duration, durationUnit);
    };
    return Schedule;
}());

// tslint:disable: no-magic-numbers
/**
 * Formats time into a string. The following list describes the available
 * formatting patterns:
 *
 * ### Hour
 * - H: 0-23
 * - HH: 00-23
 * - h: 12,1-12,1-11
 * - hh: 12,01-12,01-11
 * - k: 1-24
 * - kk: 01-24
 * - a: am,pm
 * - A: AM,PM
 * ### Minute
 * - m: 0-59
 * - mm: 00-59
 * ### Second
 * - s: 0-59
 * - ss: 00-59
 * ### Millisecond
 * - S: 0-9
 * - SS: 00-99
 * - SSS: 000-999
 */
var TimeFormat = new Format({
    A: function (t) { return Locales.current[t.hour < 12 ? 'am' : 'pm'].toUpperCase(); },
    a: function (t) { return Locales.current[t.hour < 12 ? 'am' : 'pm']; },
    H: function (t) { return t.hour + ''; },
    h: function (t) { return ((t.hour % 12) || 12) + ''; },
    k: function (t) { return (t.hour + 1) + ''; },
    m: function (t) { return t.minute + ''; },
    s: function (t) { return t.second + ''; },
    S: function (t) { return Functions.padNumber(t.millisecond, 3, 1); },
    HH: function (t) { return Functions.padNumber(t.hour, 2); },
    hh: function (t) { return Functions.padNumber((t.hour % 12) || 12, 2); },
    kk: function (t) { return Functions.padNumber(t.hour + 1, 2); },
    mm: function (t) { return Functions.padNumber(t.minute, 2); },
    ss: function (t) { return Functions.padNumber(t.second, 2); },
    SS: function (t) { return Functions.padNumber(t.millisecond, 3, 2); },
    SSS: function (t) { return Functions.padNumber(t.millisecond, 3); }
}, {
    '[': {
        start: '[',
        startEscape: '\[',
        end: ']',
        endEscape: '\]'
    },
    "'": {
        start: "'",
        startEscape: "''",
        end: "'",
        endEscape: "''"
    }
});

/**
 * A class which holds a specific time during in any day.
 */
var Time = /** @class */ (function () {
    /**
     * Creates a new Time instance given an hour and optionally a minute, second,
     * and millisecond. If they have not been specified they default to 0.
     *
     * @param hour The hour.
     * @param minute The minute.
     * @param second The second.
     * @param millisecond The millisecond.
     */
    function Time(hour, minute, second, millisecond) {
        if (minute === void 0) { minute = Constants.MINUTE_MIN; }
        if (second === void 0) { second = Constants.SECOND_MIN; }
        if (millisecond === void 0) { millisecond = Constants.MILLIS_MIN; }
        this.hour = hour;
        this.minute = minute;
        this.second = second;
        this.millisecond = millisecond;
    }
    /**
     * Formats this time into a string.
     *
     * @param format The format to output.
     * @returns The formatted time.
     * @see [[TimeFormat]]
     */
    Time.prototype.format = function (format) {
        return TimeFormat.format(format, this);
    };
    /**
     * Determines whether this time is an exact match for the given time.
     *
     * @param time The given time to test against.
     * @returns `true` if the time matches this time, otherwise `false`.
     */
    Time.prototype.matches = function (time) {
        return this.hour === time.hour &&
            this.minute === time.minute &&
            this.second === time.second &&
            this.millisecond === time.millisecond;
    };
    /**
     * Determines whether this time has the same hour as the given time.
     *
     * @param time The given time to test against.
     * @returns `true` if the given hour matches this hour, otherwise `false`.
     */
    Time.prototype.matchesHour = function (time) {
        return this.hour === time.hour;
    };
    /**
     * Determines whether this time has the same hour and minute as the given time.
     *
     * @param time The given time to test against.
     * @returns `true` if the given hour and minute matches, otherwise `false`.
     */
    Time.prototype.matchesMinute = function (time) {
        return this.hour === time.hour &&
            this.minute === time.minute;
    };
    /**
     * Determines whether this time has the same hour, minute, and second as the
     * given time.
     *
     * @param time The given time to test against.
     * @returns `true` if the given hour, minute, and second matches, otherwise
     *    `false`.
     */
    Time.prototype.matchesSecond = function (time) {
        return this.hour === time.hour &&
            this.minute === time.minute &&
            this.second === time.second;
    };
    /**
     * Sets the time of this instance to the same time of the given input.
     *
     * @param input The time to set this to.
     * @returns `true` if this time was set, otherwise `false` (invalid input).
     */
    Time.prototype.set = function (input) {
        var parsed = Time.parse(input);
        var valid = !!parsed;
        if (valid) {
            this.hour = parsed.hour;
            this.minute = parsed.minute;
            this.second = parsed.second;
            this.millisecond = parsed.millisecond;
        }
        return valid;
    };
    /**
     * @returns The number of milliseconds from the start of the day until this
     *  time.
     */
    Time.prototype.toMilliseconds = function () {
        return this.hour * Constants.MILLIS_IN_HOUR +
            this.minute * Constants.MILLIS_IN_MINUTE +
            this.second * Constants.MILLIS_IN_SECOND +
            this.millisecond;
    };
    /**
     * @returns The time formatted using the smallest format that completely
     *  represents this time.
     */
    Time.prototype.toString = function () {
        if (this.millisecond)
            return this.format('HH:mm:ss.SSS');
        if (this.second)
            return this.format('HH:mm:ss');
        if (this.minute)
            return this.format('HH:mm');
        return this.format('HH');
    };
    /**
     * @returns A unique identifier for this time. The number returned is in the
     *  following format: SSSssmmHH
     */
    Time.prototype.toIdentifier = function () {
        return this.hour +
            this.minute * 100 +
            this.second * 10000 +
            this.millisecond * 10000000;
    };
    /**
     * @returns An object with hour, minute, second, a millisecond properties if
     *  they are non-zero on this time.
     */
    Time.prototype.toObject = function () {
        var out = {
            hour: this.hour
        };
        if (this.minute)
            out.minute = this.minute;
        if (this.second)
            out.second = this.second;
        if (this.millisecond)
            out.millisecond = this.millisecond;
        return out;
    };
    /**
     * Parses a value and tries to convert it to a Time instance.
     *
     * @param input The input to parse.
     * @returns The instance parsed or `null` if it was invalid.
     * @see [[Parse.time]]
     */
    Time.parse = function (input) {
        return Parse.time(input);
    };
    /**
     * Parses a string and converts it to a Time instance. If the string is not
     * in a valid format `null` is returned.
     *
     * @param time The string to parse.
     * @returns The instance parsed or `null` if it was invalid.
     * @see [[Time.REGEX]]
     */
    Time.fromString = function (time) {
        var matches = this.REGEX.exec(time);
        if (!matches) {
            return null;
        }
        var h = parseInt(matches[1]) || 0;
        var m = parseInt(matches[2]) || 0;
        var s = parseInt(matches[3]) || 0;
        var l = parseInt(matches[4]) || 0;
        return this.build(h, m, s, l);
    };
    /**
     * Parses a number and converts it to a Time instance. The number is assumed
     * to be in the [[Time.toIdentifier]] format.
     *
     * @param time The number to parse.
     * @returns The instance parsed.
     */
    Time.fromIdentifier = function (time) {
        var h = time % 100;
        var m = Math.floor(time / 100) % 100;
        var s = Math.floor(time / 10000) % 100;
        var l = Math.floor(time / 10000000) % 1000;
        return this.build(h, m, s, l);
    };
    /**
     * Returns a new instance given an hour and optionally a minute, second,
     * and millisecond. If they have not been specified they default to 0.
     *
     * @param hour The hour.
     * @param minute The minute.
     * @param second The second.
     * @param millisecond The millisecond.
     * @returns A new instance.
     */
    Time.build = function (hour, minute, second, millisecond) {
        if (minute === void 0) { minute = Constants.MINUTE_MIN; }
        if (second === void 0) { second = Constants.SECOND_MIN; }
        if (millisecond === void 0) { millisecond = Constants.MILLIS_MIN; }
        return new Time(hour, minute, second, millisecond);
    };
    /**
     * The regular expression used to parse a time from a string.
     *
     * - ## = hour
     * - ##:## = hour & minute
     * - ##:##:## = hour, minute, & second
     * - ##:##:##.### = hour, minute, second, and milliseconds
     */
    Time.REGEX = /^(\d\d?):?(\d\d)?:?(\d\d)?\.?(\d\d\d)?$/;
    return Time;
}());

/**
 * The class which takes user input and parses it to specific structures.
 */
var Parse = /** @class */ (function () {
    function Parse() {
    }
    /**
     * Parses a value and converts it to a [[FrequencyCheck]].
     *
     * @param input The input to parse into a function.
     * @param property The [[Day]] property the frequency is for.
     * @returns A function which determines whether a value matches a frequency.
     * @see [[Schedule]]
     */
    Parse.frequency = function (input, property) {
        var check = function (value) {
            return true;
        };
        check.given = false;
        if (Functions.isFrequencyValueEvery(input)) {
            var every_1 = input.every;
            var offset_1 = (input.offset || 0) % every_1;
            check = function (value) {
                return value % every_1 === offset_1;
            };
            check.given = true;
        }
        if (Functions.isFrequencyValueOneOf(input)) {
            var map_1 = {};
            for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
                var i = input_1[_i];
                map_1[i] = true;
            }
            check = function (value) {
                return !!map_1[value];
            };
            check.given = true;
        }
        if (Functions.isFrequencyValueEquals(input)) {
            check = function (value) {
                return value === input;
            };
            check.given = true;
        }
        check.input = Functions.coalesce(input, null);
        check.property = property;
        return check;
    };
    /**
     * Parses [[DayInput]] into a [[Day]] instance.
     *
     * ```typescript
     * Parse.day( 65342300 );               // UTC timestamp
     * Parse.day( '01/02/2014' );           // strings in many formats
     * Parse.day( day );                    // return a passed instance
     * Parse.day( [2018, 0, 2] );           // array: 01/02/2018
     * Parse.day( {year: 2018, month: 2} ); // object: 03/01/2018
     * Parse.day( true );                   // today
     * ```
     *
     * @param input The input to parse.
     * @returns The Day parsed or `null` if the value is not valid.
     */
    Parse.day = function (input) {
        if (Functions.isNumber(input)) {
            return Day.unix(input);
        }
        else if (Functions.isString(input)) {
            return Day.fromString(input);
        }
        else if (input instanceof Day) {
            return input;
        }
        else if (Functions.isArray(input)) {
            return Day.fromArray(input);
        }
        else if (Functions.isObject(input)) {
            return Day.fromObject(input);
        }
        else if (input === true) {
            return Day.today();
        }
        return null;
    };
    /**
     * Parses a value and tries to convert it to a Time instance.
     *
     * ```typescript
     * Parse.time( time );      // return a passed instance
     * Parse.time( 9 );         // 09:00:00.000
     * Parse.time( 3009 );      // 09:30:00.000
     * Parse.time( 593009 );    // 09:30:59.000
     * Parsetime( '09' );       // 09:00:00.000
     * Parse.time( '9:30' );    // 09:30:00.000
     * Parse.time( '9:30:59' ); // 09:30:59.000
     * Parse.time( {hour: 2} ); // 02:00:00.000
     * ```
     *
     * @param input The input to parse.
     * @returns The instance parsed or `null` if it was invalid.
     * @see [[Time.fromIdentifier]]
     * @see [[Time.fromString]]
     */
    Parse.time = function (input) {
        if (input instanceof Time) {
            return input;
        }
        if (Functions.isNumber(input)) {
            return Time.fromIdentifier(input);
        }
        if (Functions.isString(input)) {
            return Time.fromString(input);
        }
        if (Functions.isObject(input) && Functions.isNumber(input.hour)) {
            return new Time(input.hour, input.minute, input.second, input.millisecond);
        }
        return null;
    };
    /**
     * Parses a value and tries to convert it to an array of Time instances.
     * If any of the given values are not a valid time value then the resulting
     * array will not contain a time instance.
     *
     * @param input The input to parse.
     * @returns A non-null array of time instances.
     * @see [[Parse.time]]
     */
    Parse.times = function (input) {
        var times = [];
        if (Functions.isArray(input)) {
            for (var _i = 0, input_2 = input; _i < input_2.length; _i++) {
                var timeInput = input_2[_i];
                var time = this.time(timeInput);
                if (time) {
                    times.push(time);
                }
            }
            // Sort times from earliest to latest.
            times.sort(function (a, b) {
                return a.toMilliseconds() - b.toMilliseconds();
            });
        }
        return times;
    };
    /**
     * Parses an array of excluded days into a map of excluded days where the
     * array value and returned object key are [[Day.dayIdentifier]].
     *
     * ```typescript
     * Parse.modifier( [ 20180101, 20140506 ] );            // {'20180101': true, '20140506': true}
     * Parse.modifier( [ 20180101, Day.build(2014,4,6) ] ); // {'20180101': true, '20140506': true}
     * ```
     *
     * @param input The input to parse.
     * @param value The default value if the input given is an array of identifiers.
     * @param parseMeta A function to use to parse a modifier.
     * @param out The modifier to set the identifiers and values of and return.
     * @returns The object with identifier keys and `true` values.
     * @see [[Day.dayIdentifier]]
     */
    Parse.modifier = function (input, value, parseMeta, out) {
        if (parseMeta === void 0) { parseMeta = (function (x) { return x; }); }
        if (out === void 0) { out = new ScheduleModifier(); }
        var map = {};
        if (Functions.isArray(input)) {
            for (var _i = 0, input_3 = input; _i < input_3.length; _i++) {
                var identifier = input_3[_i];
                if (identifier instanceof Day) {
                    map[identifier.dayIdentifier] = value;
                }
                else if (Functions.isNumber(identifier)) {
                    map[identifier] = value;
                }
                else if (Functions.isString(identifier)) {
                    map[identifier] = value;
                }
            }
        }
        if (Functions.isObject(input)) {
            for (var identifier in input) {
                map[identifier] = parseMeta(input[identifier]);
            }
        }
        out.map = map;
        return out;
    };
    /**
     *
     */
    Parse.unit = function (input, all) {
        if (all === void 0) { all = false; }
        if (typeof input !== 'string') {
            return Constants.DURATION_DEFAULT_UNIT(all);
        }
        switch (input.toLowerCase()) {
            case 'ms':
            case 'milli':
            case 'millis':
            case 'millisecond':
            case 'milliseconds':
                return 'millis';
            case 's':
            case 'sec':
            case 'secs':
            case 'second':
            case 'seconds':
                return 'second';
            case 'm':
            case 'min':
            case 'mins':
            case 'minute':
            case 'minutes':
                return 'minute';
            case 'h':
            case 'hr':
            case 'hour':
            case 'hours':
                return 'hour';
            case 'd':
            case 'day':
            case 'days':
                return 'day';
            case 'w':
            case 'wk':
            case 'week':
            case 'weeks':
                return 'week';
            case 'mon':
            case 'month':
            case 'months':
                return 'month';
            case 'q':
            case 'quarter':
            case 'quarters':
                return 'quarter';
            case 'y':
            case 'yr':
            case 'yrs':
            case 'year':
            case 'years':
                return 'year';
        }
        return Constants.DURATION_DEFAULT_UNIT(all);
    };
    /**
     * Parses an object which specifies a schedule where events may or may not
     * repeat and they may be all day events or at specific times.
     *
     * @param input The input to parse into a schedule.
     * @param parseMeta A function to use when parsing meta input into the desired type.
     * @param out The schedule to set the values of and return.
     * @returns An instance of the parsed [[Schedule]].
     */
    Parse.schedule = function (input, parseMeta, out) {
        if (parseMeta === void 0) { parseMeta = (function (x) { return x; }); }
        if (out === void 0) { out = new Schedule(); }
        if (input instanceof Schedule) {
            return input;
        }
        var on = this.day(input.on);
        var times = this.times(input.times);
        var fullDay = times.length === 0;
        if (on) {
            input.start = on.startOf('day');
            input.end = on.endOf('day');
            input.year = [on.year];
            input.month = [on.month];
            input.dayOfMonth = [on.dayOfMonth];
        }
        out.times = times;
        out.duration = Functions.coalesce(input.duration, Constants.DURATION_DEFAULT);
        out.durationUnit = this.unit(input.durationUnit, fullDay);
        out.start = this.day(input.start);
        out.end = this.day(input.end);
        out.maxOccurrences = Functions.coalesce(input.maxOccurrences, 0);
        out.exclude = this.modifier(input.exclude, true, undefined, out.exclude);
        out.include = this.modifier(input.include, true, undefined, out.include);
        out.cancel = this.modifier(input.cancel, true, undefined, out.cancel);
        out.meta = this.modifier(input.meta, null, parseMeta, out.meta);
        out.year = this.frequency(input.year, 'year');
        out.month = this.frequency(input.month, 'month');
        out.day = this.frequency(input.day, 'day');
        out.quarter = this.frequency(input.quarter, 'quarter');
        out.week = this.frequency(input.week, 'week');
        out.weekOfYear = this.frequency(input.weekOfYear, 'weekOfYear');
        out.weekspanOfYear = this.frequency(input.weekspanOfYear, 'weekspanOfYear');
        out.fullWeekOfYear = this.frequency(input.fullWeekOfYear, 'fullWeekOfYear');
        out.lastWeekspanOfYear = this.frequency(input.lastWeekspanOfYear, 'lastWeekspanOfYear');
        out.lastFullWeekOfYear = this.frequency(input.lastFullWeekOfYear, 'lastFullWeekOfYear');
        out.weekOfMonth = this.frequency(input.weekOfMonth, 'weekOfMonth');
        out.weekspanOfMonth = this.frequency(input.weekspanOfMonth, 'weekspanOfMonth');
        out.fullWeekOfMonth = this.frequency(input.fullWeekOfMonth, 'fullWeekOfMonth');
        out.lastWeekspanOfMonth = this.frequency(input.lastWeekspanOfMonth, 'lastWeekspanOfMonth');
        out.lastFullWeekOfMonth = this.frequency(input.lastFullWeekOfMonth, 'lastFullWeekOfMonth');
        out.dayOfWeek = this.frequency(input.dayOfWeek, 'dayOfWeek');
        out.dayOfMonth = this.frequency(input.dayOfMonth, 'dayOfMonth');
        out.lastDayOfMonth = this.frequency(input.lastDayOfMonth, 'lastDayOfMonth');
        out.dayOfYear = this.frequency(input.dayOfYear, 'dayOfYear');
        out.updateDurationInDays();
        out.updateChecks();
        out.updateEnd();
        return out;
    };
    /**
     * Parses an array of [[FrequencyCheck]] functions and returns an array of
     * functions for only the checks that were specified by the user.
     *
     * @param checks The array of check functions to filter through.
     * @returns The array of user specified checks.
     */
    Parse.givenFrequency = function (checks) {
        var out = [];
        for (var _i = 0, checks_1 = checks; _i < checks_1.length; _i++) {
            var check = checks_1[_i];
            if (check.given) {
                out.push(check);
            }
        }
        return out;
    };
    /**
     * Parses [[EventInput]] and returns an [[Event]].
     *
     * @param input The input to parse.
     * @param parseData A function to use when parsing data input into the desired type.
     * @param parseMeta A function to use when parsing meta input into the desired type.
     * @returns The parsed value.
     */
    Parse.event = function (input, parseData, parseMeta) {
        if (parseData === void 0) { parseData = (function (x) { return x; }); }
        if (parseMeta === void 0) { parseMeta = (function (x) { return x; }); }
        if (input instanceof Event) {
            return input;
        }
        if (!input.schedule) {
            return null;
        }
        var schedule = this.schedule(input.schedule, parseMeta);
        return new Event(schedule, parseData(input.data), input.id, input.visible);
    };
    /**
     * Parses a schedule from a CRON pattern. TODO
     */
    Parse.cron = function (pattern, out) {
        if (out === void 0) { out = new Schedule(); }
        return out;
    };
    return Parse;
}());

/**
 * A class which represents a Date with a few added features.
 *
 * - Has extra properties around days and weeks of the year and weeks of the
 *    year and month.
 * - Inherits global locale and responds to changes.
 * - Can have a custom locale for any given instance.
 * - Comparison functions between days.
 * - Difference calculations between days.
 * - Start of unit calculations.
 * - End of unit calculations.
 * - Add and subtract unit calculations.
 * - Date formatting.
 */
var Day = /** @class */ (function () {
    /**
     * Creates a new Day instance based on the given date.
     */
    function Day(date) {
        this._quarter = null;
        this._dayOfYear = null;
        this._dayOfWeek = null;
        this._lastDayOfMonth = null;
        this._week = null;
        this._weekOfYear = null;
        this._weekspanOfYear = null;
        this._fullWeekOfYear = null;
        this._lastWeekspanOfYear = null;
        this._lastFullWeekOfYear = null;
        this._weekOfMonth = null;
        this._weekspanOfMonth = null;
        this._fullWeekOfMonth = null;
        this._lastWeekspanOfMonth = null;
        this._lastFullWeekOfMonth = null;
        this._timeIdentifier = null;
        this._dayIdentifier = null;
        this._weekIdentifier = null;
        this._monthIdentifier = null;
        this._quarterIdentifier = null;
        this.date = date;
        this.time = date.valueOf();
        this.millis = date.getMilliseconds();
        this.seconds = date.getSeconds();
        this.minute = date.getMinutes();
        this.hour = date.getHours();
        this.month = date.getMonth();
        this.year = date.getFullYear();
        this.day = date.getDay();
        this.dayOfMonth = date.getDate();
        // Start off with the global locale.
        this._locale = Locales.ref;
    }
    Object.defineProperty(Day.prototype, "quarter", {
        /**
         * The quarter of the year this day is in, starting at 0 for January
         * through March.
         */
        get: function () {
            return this.getValue('_quarter', getQuarter);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Day.prototype, "dayOfYear", {
        /**
         * The day of the year, starting at 1 for the 1st of January.
         */
        get: function () {
            return this.getValue('_dayOfYear', getDayOfYear);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Day.prototype, "dayOfWeek", {
        /**
         * The day of the week relative to the first day of the week specified by
         * [[Locale.weekStartsOn]]. So if the week starts on Monday, then this will
         * be 0 for Monday, 1 for Tuesday, etc.
         *
         * This is dependent on the locale of the instance (or global locale).
         */
        get: function () {
            return this.getLocaleValue('_dayOfWeek', getDayOfWeek);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Day.prototype, "lastDayOfMonth", {
        /**
         * The last day of the month, starting at 1 for the last day, 2 for the 2nd
         * to last, etc.
         */
        get: function () {
            return this.getValue('_lastDayOfMonth', getLastDayOfMonth);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Day.prototype, "week", {
        /**
         * The week of the year. The first week of the year (1) contains Jan 1st.
         *
         * This is dependent on the locale of the instance (or global locale).
         */
        get: function () {
            return this.getLocaleValue('_week', getWeekOfYear);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Day.prototype, "weekOfYear", {
        /**
         * The week of the year. The first week of the year (1) is the first week
         * which has the date [[Locale.firstWeekContainsDate]]. If there is a week
         * before that it will be 0. Frequently referred to as the ISO week.
         *
         * This is dependent on the locale of the instance (or global locale).
         */
        get: function () {
            return this.getLocaleValue('_weekOfYear', getWeekOfYearISO);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Day.prototype, "weekspanOfYear", {
        /**
         * The weekspan of the year, starting at 0 representing January 1st to the 7th.
         * Weekspans allow you to create schedules for things like "the first
         * saturday of the year".
         */
        get: function () {
            return this.getValue('_weekspanOfYear', getWeekspanOfYear);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Day.prototype, "fullWeekOfYear", {
        /**
         * The full week of the year, starting at 0 for a partial week (if one exists)
         * and 1 for the first full week.
         *
         * This is dependent on the locale of the instance (or global locale).
         */
        get: function () {
            return this.getLocaleValue('_fullWeekOfYear', getFullWeekOfYear);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Day.prototype, "lastWeekspanOfYear", {
        /**
         * The last weekspan of the year, starting at 0 representing December 31st to
         * December 25th. Weekspans allow you to create schedules for things like
         * "the last saturday of the year".
         */
        get: function () {
            return this.getValue('_lastWeekspanOfYear', getLastWeekspanOfYear);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Day.prototype, "lastFullWeekOfYear", {
        /**
         * The last full week of the year, starting at 0 for the last week ending
         * before Thursday and 1 for the last week with a Thursday.
         *
         * This is dependent on the locale of the instance (or global locale).
         */
        get: function () {
            return this.getLocaleValue('_lastFullWeekOfYear', getLastFullWeekOfYear);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Day.prototype, "weekOfMonth", {
        /**
         * The week of the month. The first week of the month (1) is the first week
         * which has the date [[Locale.firstWeekContainsDate]]. If there is a week
         * before that it will be 0.
         *
         * This is dependent on the locale of the instance (or global locale).
         */
        get: function () {
            return this.getLocaleValue('_weekOfMonth', getWeekOfMonthISO);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Day.prototype, "weekspanOfMonth", {
        /**
         * The weekspan of the month, starting at 0 representing the 1st to the 7th.
         * Weekspans allow you to create schedules for things like "the first
         * saturday of the month".
         */
        get: function () {
            return this.getValue('_weekspanOfMonth', getWeekspanOfMonth);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Day.prototype, "fullWeekOfMonth", {
        /**
         * The full week of the month, starting at 0 for a partial week (if one exists)
         * and 1 for the first full week.
         *
         * This is dependent on the locale of the instance (or global locale).
         */
        get: function () {
            return this.getLocaleValue('_fullWeekOfMonth', getFullWeekOfMonth);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Day.prototype, "lastWeekspanOfMonth", {
        /**
         * The last weekspan of the month, starting at 0 representing 31st to 25th
         * for a month with 31 days. Weekspans allow you to create schedules for
         * things like "the last saturday of the month".
         */
        get: function () {
            return this.getValue('_lastWeekspanOfMonth', getLastWeekspanOfMonth);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Day.prototype, "lastFullWeekOfMonth", {
        /**
         * The last full week of the month, starting at 0 for the last week ending
         * before Thursday and 1 for the last week with a Thursday.
         *
         * This is dependent on the locale of the instance (or global locale).
         */
        get: function () {
            return this.getLocaleValue('_lastFullWeekOfMonth', getLastFullWeekOfMonth);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Day.prototype, "timeIdentifier", {
        /**
         * The identifier which stores in a simple form the date and time of this Day.
         */
        get: function () {
            var _this = this;
            return this.getValue('_timeIdentifier', function () { return Identifier.Time.get(_this); });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Day.prototype, "dayIdentifier", {
        /**
         * The identifier which stores in a simple form the date of this Day.
         */
        get: function () {
            var _this = this;
            return this.getValue('_dayIdentifier', function () { return Identifier.Day.get(_this); });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Day.prototype, "weekIdentifier", {
        /**
         * The identifier which stores in a simple form the week of the year of this Day.
         */
        get: function () {
            var _this = this;
            return this.getValue('_weekIdentifier', function () { return Identifier.Week.get(_this); });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Day.prototype, "monthIdentifier", {
        /**
         * The identifier which stores in a simple form the month and year of this Day.
         */
        get: function () {
            var _this = this;
            return this.getValue('_monthIdentifier', function () { return Identifier.Month.get(_this); });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Day.prototype, "quarterIdentifier", {
        /**
         * The identifier which stores in a simple form the quarter and year of this Day.
         */
        get: function () {
            var _this = this;
            return this.getValue('_quarterIdentifier', function () { return Identifier.Quarter.get(_this); });
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Returns the locale based value. First it checks to see if the global
     * locale changed and updates accordingly. If the value is not cached the
     * value is recalculated.
     *
     * @param property The property on the Day.
     * @param compute The function which takes the Day and calculates and stores
     *    the value of the requested property.
     */
    Day.prototype.getLocaleValue = function (property, compute) {
        this.checkForUpdate();
        if (this[property] === null) {
            this[property] = compute(this.date, this._locale.value);
        }
        return this[property];
    };
    /**
     * Returns the value of the property If it's not cached, otherwise the value
     * is computed and stored on this Day instance..
     *
     * @param property The property on the Day.
     * @param compute The function which takes the Day and calculates and stores
     *    the value of the requested property.
     */
    Day.prototype.getValue = function (property, compute) {
        if (this[property] === null) {
            this[property] = compute(this.date);
        }
        return this[property];
    };
    /**
     * Checks to see if the global locale has changed, and if it has it invalides
     * the locale-based properties so next time they're accessed they are cleaned up.
     */
    Day.prototype.checkForUpdate = function () {
        if (this._locale.dirty) {
            this._locale = Locales.ref;
            this.resetLocaleCache();
        }
    };
    /**
     * Sets the locale for this Day and returns this.
     *
     * @param key The code to the locale to apply.
     */
    Day.prototype.setLocale = function (key) {
        var locale = Locales.get(key);
        if (locale !== this._locale.value) {
            this._locale = this._locale.getUpdate(locale);
            this.resetLocaleCache();
        }
        return this;
    };
    /**
     * Returns the current locale of the day instance.
     */
    Day.prototype.getLocale = function () {
        this.checkForUpdate();
        return this._locale.value;
    };
    /**
     * Sets the locale of this Day instance to the global locale.
     */
    Day.prototype.clearLocale = function () {
        var locale = Locales.current;
        if (locale !== this._locale.value) {
            this._locale = Locales.ref;
            this.resetLocaleCache();
        }
    };
    /**
     * Resets all locale-based caches on this Day instance.
     */
    Day.prototype.resetLocaleCache = function () {
        this._dayOfWeek = null;
        this._weekOfYear = null;
        this._fullWeekOfYear = null;
        this._lastFullWeekOfYear = null;
        this._weekOfMonth = null;
        this._fullWeekOfMonth = null;
        this._lastFullWeekOfMonth = null;
    };
    // Same
    /**
     * Determines whether this day and the given day lie on the same day.
     */
    Day.prototype.sameDay = function (day) {
        return this.dayIdentifier === day.dayIdentifier;
    };
    /**
     * Determines whether this day and the given day lie on the same month.
     */
    Day.prototype.sameMonth = function (day) {
        return this.monthIdentifier === day.monthIdentifier;
    };
    /**
     * Determines whether this day and the given day lie on the same week.
     */
    Day.prototype.sameWeek = function (day) {
        return this.weekIdentifier === day.weekIdentifier;
    };
    /**
     * Determines whether this week and the given day lie on the same year.
     */
    Day.prototype.sameYear = function (day) {
        return this.year === day.year;
    };
    /**
     * Determines whether this day and the given day lie on the same month.
     */
    Day.prototype.sameQuarter = function (day) {
        return this.quarterIdentifier === day.quarterIdentifier;
    };
    /**
     * Determines whether this week and the given day lie on the same year.
     */
    Day.prototype.sameHour = function (day) {
        return this.dayIdentifier === day.dayIdentifier &&
            this.hour === day.hour;
    };
    /**
     * Determines whether
     */
    Day.prototype.sameMinute = function (day) {
        return this.timeIdentifier === day.timeIdentifier;
    };
    /**
     *
     */
    Day.prototype.sameTime = function (time) {
        return this.hour === time.hour &&
            this.minute === time.minute &&
            this.seconds === time.second &&
            this.millis === time.millisecond;
    };
    // Comparison
    /**
     *
     * @param day
     * @param precision
     */
    Day.prototype.compare = function (day, precision) {
        return compare(this.date, day.date, precision);
    };
    /**
     *
     */
    Day.prototype.isBefore = function (day, precision) {
        return compare(this.date, day.date, precision) < 0;
    };
    /**
     *
     */
    Day.prototype.isSameOrBefore = function (day, precision) {
        return compare(this.date, day.date, precision) <= 0;
    };
    /**
     *
     */
    Day.prototype.isAfter = function (day, precision) {
        return compare(this.date, day.date, precision) > 0;
    };
    /**
     *
     */
    Day.prototype.isSameOrAfter = function (day, precision) {
        return compare(this.date, day.date, precision) >= 0;
    };
    /**
     *
     * @param day
     * @returns
     */
    Day.prototype.max = function (day) {
        return compare(this.date, day.date) > 0 ? this : day;
    };
    /**
     *
     * @param day
     * @returns
     */
    Day.prototype.min = function (day) {
        return compare(this.date, day.date) < 0 ? this : day;
    };
    // Between
    /**
     *
     * @param day
     * @param unit
     * @param op
     * @param absolute
     * @returns
     */
    Day.prototype.between = function (day, unit, op, absolute) {
        if (op === void 0) { op = exports.Op.DOWN; }
        if (absolute === void 0) { absolute = true; }
        return operate(diff[unit](this.date, day.date), op, absolute);
    };
    Day.prototype.millisBetween = function (day, op, absolute) {
        if (op === void 0) { op = exports.Op.DOWN; }
        if (absolute === void 0) { absolute = true; }
        return this.between(day, 'millis', op, absolute);
    };
    Day.prototype.secondsBetween = function (day, op, absolute) {
        if (op === void 0) { op = exports.Op.DOWN; }
        if (absolute === void 0) { absolute = true; }
        return this.between(day, 'second', op, absolute);
    };
    Day.prototype.minutesBetween = function (day, op, absolute) {
        if (op === void 0) { op = exports.Op.DOWN; }
        if (absolute === void 0) { absolute = true; }
        return this.between(day, 'minute', op, absolute);
    };
    Day.prototype.hoursBetween = function (day, op, absolute) {
        if (op === void 0) { op = exports.Op.DOWN; }
        if (absolute === void 0) { absolute = true; }
        return this.between(day, 'hour', op, absolute);
    };
    Day.prototype.daysBetween = function (day, op, absolute) {
        if (op === void 0) { op = exports.Op.DOWN; }
        if (absolute === void 0) { absolute = true; }
        return this.between(day, 'day', op, absolute);
    };
    Day.prototype.weeksBetween = function (day, op, absolute) {
        if (op === void 0) { op = exports.Op.DOWN; }
        if (absolute === void 0) { absolute = true; }
        return this.between(day, 'week', op, absolute);
    };
    Day.prototype.monthsBetween = function (day, op, absolute) {
        if (op === void 0) { op = exports.Op.DOWN; }
        if (absolute === void 0) { absolute = true; }
        return this.between(day, 'month', op, absolute);
    };
    Day.prototype.yearsBetween = function (day, op, absolute) {
        if (op === void 0) { op = exports.Op.DOWN; }
        if (absolute === void 0) { absolute = true; }
        return this.between(day, 'year', op, absolute);
    };
    Day.prototype.isBetween = function (start, end, inclusive, precision) {
        if (inclusive === void 0) { inclusive = true; }
        var before = this.isBefore(start);
        if (before) {
            return false;
        }
        var after = inclusive
            ? this.isSameOrAfter(end)
            : this.isAfter(end);
        if (after) {
            return false;
        }
        return true;
    };
    Day.prototype.mutate = function (mutator) {
        var d = this.toDate();
        var result = mutator(d);
        return result instanceof Date
            ? new Day(result)
            : new Day(d);
    };
    Day.prototype.add = function (unit, amount) {
        if (amount === void 0) { amount = 1; }
        return this.mutate(function (d) { return add[unit](d, amount); });
    };
    Day.prototype.relative = function (millis) {
        return this.add('millis', millis);
    };
    // Days
    Day.prototype.prev = function (days) {
        if (days === void 0) { days = 1; }
        return this.add('day', -days);
    };
    Day.prototype.next = function (days) {
        if (days === void 0) { days = 1; }
        return this.add('day', days);
    };
    Day.prototype.withDayOfMonth = function (day) {
        return this.mutate(function (d) { return d.setDate(day); });
    };
    Day.prototype.withDay = function (day) {
        return this.add('day', day - this.date.getDay());
    };
    Day.prototype.withDayOfWeek = function (dayOfWeek) {
        return this.add('day', dayOfWeek - getDayOfWeek(this.date, this.getLocale()));
    };
    Day.prototype.withDayOfYear = function (dayOfYear) {
        return this.add('day', dayOfYear - getDayOfYear(this.date));
    };
    // Month
    Day.prototype.withMonth = function (month) {
        return this.mutate(function (d) { return d.setMonth(month); });
    };
    // Week Of Year
    Day.prototype.withWeek = function (week, relativeWeek) {
        return this.add('day', (week - relativeWeek) * Constants.DAYS_IN_WEEK);
    };
    Day.prototype.withWeekOfYear = function (week) {
        return this.withWeek(week, this.weekOfYear);
    };
    Day.prototype.withFullWeekOfYear = function (week) {
        return this.withWeek(week, this.fullWeekOfYear);
    };
    Day.prototype.withWeekspanOfYear = function (week) {
        return this.withWeek(week, this.weekspanOfYear);
    };
    Day.prototype.withWeekOfMonth = function (week) {
        return this.withWeek(week, this.weekOfMonth);
    };
    Day.prototype.withWeekspanOfMonth = function (week) {
        return this.withWeek(week, this.weekspanOfMonth);
    };
    Day.prototype.withFullWeekOfMonth = function (week) {
        return this.withWeek(week, this.fullWeekOfMonth);
    };
    // Year
    Day.prototype.withYear = function (year) {
        return this.mutate(function (d) { return d.setFullYear(year); });
    };
    // Hour
    Day.prototype.withHour = function (hour) {
        return this.mutate(function (d) { return d.setHours(hour); });
    };
    // Time
    Day.prototype.withTimes = function (hour, minute, second, millisecond) {
        if (hour === void 0) { hour = Constants.HOUR_MIN; }
        if (minute === void 0) { minute = Constants.MINUTE_MIN; }
        if (second === void 0) { second = Constants.SECOND_MIN; }
        if (millisecond === void 0) { millisecond = Constants.MILLIS_MIN; }
        return this.mutate(function (d) { return d.setHours(hour, minute, second, millisecond); });
    };
    Day.prototype.withTime = function (time) {
        return this.withTimes(time.hour, time.minute, time.second, time.millisecond);
    };
    Day.prototype.asTime = function () {
        return new Time(this.hour, this.minute, this.seconds, this.millis);
    };
    // Start & End
    Day.prototype.startOf = function (unit) {
        var _this = this;
        return this.mutate(function (d) { return startOf[unit](d, _this.getLocale()); });
    };
    Day.prototype.isStartOf = function (unit) {
        return this.startOf(unit).date.getTime() === this.time;
    };
    Day.prototype.endOf = function (unit, inclusive) {
        var _this = this;
        if (inclusive === void 0) { inclusive = true; }
        return inclusive
            ? this.mutate(function (d) { return endOf[unit](d, _this.getLocale()); })
            : this.mutate(function (d) { startOf[unit](d, _this.getLocale()); add[unit](d, 1); });
    };
    Day.prototype.isEndOf = function (unit, inclusive) {
        if (inclusive === void 0) { inclusive = true; }
        return this.endOf(unit, inclusive).date.getTime() === this.time;
    };
    // Days In X
    Day.prototype.daysInMonth = function () {
        return getDaysInMonth(this.date);
    };
    Day.prototype.daysInYear = function () {
        return getDaysInYear(this.date);
    };
    Day.prototype.weeksInYear = function () {
        return getWeeksInYear(this.date);
    };
    // Display
    Day.prototype.format = function (format, cache) {
        if (cache === void 0) { cache = false; }
        return DayFormat.format(format, [this, this.getLocale()], cache);
    };
    Day.prototype.utc = function (keepLocalTime) {
        // TODO
        return this;
    };
    Day.prototype.toDate = function () {
        return new Date(this.date.getTime());
    };
    Day.prototype.toArray = function () {
        return [this.year, this.month, this.dayOfMonth, this.hour, this.minute, this.seconds, this.millis];
    };
    Day.prototype.toJSON = function () {
        return this.date.toJSON();
    };
    Day.prototype.toISOString = function (keepOffset) {
        return this.date.toISOString(); // TODO
    };
    Day.prototype.toObject = function () {
        throw new Error('toObject is no longer supported');
    };
    Day.prototype.toString = function () {
        return this.date.toString();
    };
    // State
    Day.prototype.isDST = function () {
        return isDaylightSavingTime(this.date);
    };
    Day.prototype.isLeapYear = function () {
        return isLeapYear(this.date);
    };
    Day.prototype.offset = function () {
        return getDateOffset(this.date);
    };
    // Instances
    Day.now = function () {
        return new Day(new Date());
    };
    Day.today = function () {
        return this.now().startOf('day');
    };
    Day.tomorrow = function () {
        return this.today().next();
    };
    Day.fromDate = function (date) {
        return isFinite(date.getTime()) ? new Day(date) : null;
    };
    Day.unix = function (millis) {
        return this.fromDate(new Date(millis));
    };
    Day.unixSeconds = function (seconds) {
        return this.fromDate(new Date(seconds * Constants.MILLIS_IN_SECOND));
    };
    Day.parse = function (input) {
        return Parse.day(input);
    };
    Day.fromString = function (input) {
        return this.fromDate(new Date(input));
    };
    Day.fromFormat = function (input, formats) {
        throw new Error('fromFormat is no longer supported');
    };
    Day.fromObject = function (input) {
        throw new Error('fromObject is no longer supported');
    };
    Day.fromArray = function (input) {
        var YEAR_INDEX = 0;
        var MONTH_INDEX = 1;
        var DATE_INDEX = 2;
        var HOUR_INDEX = 3;
        var MINUTE_INDEX = 4;
        var SECOND_INDEX = 5;
        var MILLIS_INDEX = 6;
        return this.fromDate(new Date(input[YEAR_INDEX], input[MONTH_INDEX], Functions.coalesce(input[DATE_INDEX], Constants.DAY_MIN), Functions.coalesce(input[HOUR_INDEX], Constants.HOUR_MIN), Functions.coalesce(input[MINUTE_INDEX], Constants.MINUTE_MIN), Functions.coalesce(input[SECOND_INDEX], Constants.SECOND_MIN), Functions.coalesce(input[MILLIS_INDEX], Constants.MILLIS_MIN)));
    };
    Day.fromDayIdentifier = function (id) {
        var DATE_MASK = 100;
        var MONTH_MASK = 100;
        var YEAR_OFFSET = 10000;
        var date = id % DATE_MASK;
        var month = (Math.floor(id / DATE_MASK) % MONTH_MASK) - 1;
        var year = Math.floor(id / YEAR_OFFSET);
        return this.build(year, month, date);
    };
    Day.build = function (year, month, date, hour, minute, second, millisecond) {
        if (date === void 0) { date = Constants.DAY_MIN; }
        if (hour === void 0) { hour = Constants.HOUR_MIN; }
        if (minute === void 0) { minute = Constants.MINUTE_MIN; }
        if (second === void 0) { second = Constants.SECOND_MIN; }
        if (millisecond === void 0) { millisecond = Constants.MILLIS_MIN; }
        return new Day(new Date(year, month, date, hour, minute, second, millisecond));
    };
    return Day;
}());

/**
 * A day in a [[Calendar]] with extra information relative to any selection on
 * the calendar, the current date, or events on the day.
 *
 * @typeparam T The type of data stored in the [[Event]] class.
 * @typeparam M The type of metadata stored in the schedule.
 */
var CalendarDay = /** @class */ (function (_super) {
    __extends(CalendarDay, _super);
    function CalendarDay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Whether this day is the current day (ex: today).
         */
        _this.currentDay = false;
        /**
         * Whether this day is on the same week as the current day (ex: today).
         */
        _this.currentWeek = false;
        /**
         * Whether this day is on the same month as the current day (ex: today).
         */
        _this.currentMonth = false;
        /**
         * Whether this day is on the same year as the current day (ex: today).
         */
        _this.currentYear = false;
        /**
         * How many days away this day is from the current day (ex: today). If this
         * day is the current day the offset is 0. If this day is before the current
         * day it will be the negative number of days away. Otherwise this will be
         * positive meaning this day is after the current day by the given days.
         */
        _this.currentOffset = 0;
        /**
         * Whether this day is part of a selection on the calendar.
         */
        _this.selectedDay = false;
        /**
         * Whether this day is on the same week that the calendar selection is.
         */
        _this.selectedWeek = false;
        /**
         * Whether this day is on the same month that the calendar selection is.
         */
        _this.selectedMonth = false;
        /**
         * Whether this day is on the same year that the calendar selection is.
         */
        _this.selectedYear = false;
        /**
         * Whether this day is in the current calendar or not. Some days are outside
         * the calendar span and used to fill in weeks. Month calendars will fill in
         * days so the list of days in the calendar start on Sunday and end on Saturday.
         */
        _this.inCalendar = false;
        /**
         * The list of events on this day based on the settings and schedules in the
         * calendar.
         */
        _this.events = [];
        return _this;
    }
    /**
     * Creates an iterator for the events on this day.
     *
     * @returns The new iterator for the events on this day.
     */
    CalendarDay.prototype.iterateEvents = function () {
        return iteratez.Iterate.array(this.events);
    };
    /**
     * Updates the current flags on this day given the current day (ex: today).
     *
     * @param current The current day of the calendar.
     */
    CalendarDay.prototype.updateCurrent = function (current) {
        this.currentDay = this.sameDay(current);
        this.currentWeek = this.sameWeek(current);
        this.currentMonth = this.sameMonth(current);
        this.currentYear = this.sameYear(current);
        this.currentOffset = this.daysBetween(current, exports.Op.DOWN, false);
        return this;
    };
    /**
     * Updates the selection flags on this day given the selection range on the
     * calendar.
     *
     * @param selected The span of days selected on the calendar.
     */
    CalendarDay.prototype.updateSelected = function (selected) {
        this.selectedDay = selected.matchesDay(this);
        this.selectedWeek = selected.matchesWeek(this);
        this.selectedMonth = selected.matchesMonth(this);
        this.selectedYear = selected.matchesYear(this);
        return this;
    };
    /**
     * Clears the selection flags on this day. This is done when the selection on
     * the calendar is cleared.
     */
    CalendarDay.prototype.clearSelected = function () {
        this.selectedDay = this.selectedWeek = this.selectedMonth = this.selectedYear = false;
        return this;
    };
    return CalendarDay;
}(Day));

/**
 * An instance of an [[Event]] on a given day of a [[Calendar]] generated by
 * the event's [[Schedule]].
 *
 * @typeparam T The type of data stored in the [[Event]] class.
 * @typeparam M The type of metadata stored in the schedule and in this class.
 */
var CalendarEvent = /** @class */ (function () {
    /**
     * Creates a new event instance given the id, the event paired with the
     * schedule, the schedule, the time span of the event, and the day on the
     * calendar the event belongs to.
     *
     * @param id The relatively unique identifier of this event.
     * @param event The event which created this instance.
     * @param time The time span of this event.
     * @param actualDay The day on the calendar this event is for.
     */
    function CalendarEvent(id, event, time, actualDay) {
        /**
         * The row this event is on in a visual calendar. An event can span multiple
         * days and it is desirable to have the occurrence on each day to line up.
         * This is only set when [[Calendar.updateRows]] is true or manually set.
         * This value makes sense for visual calendars for all day events or when the
         * visual calendar is not positioning events based on their time span.
         */
        this.row = 0;
        /**
         * The column this event is on in a visual calendar. An event can have its
         * time overlap with another event displaying one of the events in another
         * column. This is only set when [[Calendar.updateColumns]] is true or
         * manually set. This value makes sense for visual calendars that are
         * displaying event occurrences at specific times positioned accordingly.
         */
        this.col = 0;
        this.id = id;
        this.event = event;
        this.time = time;
        this.day = actualDay;
        this.fullDay = event.schedule.isFullDay();
        this.meta = event.schedule.getMeta(time.start);
        this.cancelled = event.schedule.isCancelled(time.start);
        this.starting = time.isPoint || time.start.sameDay(actualDay);
        this.ending = time.isPoint || time.end.relative(-1).sameDay(actualDay);
    }
    Object.defineProperty(CalendarEvent.prototype, "scheduleId", {
        /**
         * The id of the schedule uniqe within the calendar which generated this event.
         */
        get: function () {
            return Math.floor(this.id / Constants.MAX_EVENTS_PER_DAY);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CalendarEvent.prototype, "start", {
        /**
         * The start timestamp of the event.
         */
        get: function () {
            return this.time.start;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CalendarEvent.prototype, "end", {
        /**
         * The end timestamp of the event.
         */
        get: function () {
            return this.time.end;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CalendarEvent.prototype, "schedule", {
        /**
         * The schedule which generated this event.
         */
        get: function () {
            return this.event.schedule;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CalendarEvent.prototype, "data", {
        /**
         * The related event data.
         */
        get: function () {
            return this.event.data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CalendarEvent.prototype, "identifier", {
        /**
         * An [[IdentifierInput]] for the start of this event.
         */
        get: function () {
            return this.identifierType.get(this.start);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CalendarEvent.prototype, "identifierType", {
        /**
         * The [[Identifier]] for this event. Either [[Identifier.Day]] or
         * [[Identifier.Time]].
         */
        get: function () {
            return this.schedule.identifierType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CalendarEvent.prototype, "startDelta", {
        /**
         * Returns a delta value between 0 and 1 which represents where the
         * [[CalendarEvent.start]] is relative to [[CalendarEvent.day]]. The delta
         * value would be less than 0 if the start of the event is before
         * [[CalendarEvent.day]].
         */
        get: function () {
            return this.time.startDelta(this.day);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CalendarEvent.prototype, "endDelta", {
        /**
         * Returns a delta value between 0 and 1 which represents where the
         * [[CalendarEvent.end]] is relative to [[CalendarEvent.day]]. The delta value
         * would be greater than 1 if the end of the event is after
         * [[CalendarEvent.day]].
         */
        get: function () {
            return this.time.endDelta(this.day);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Calculates the bounds for this event if it were placed in a rectangle which
     * represents a day (24 hour period). By default the returned values are
     * between 0 and 1 and can be scaled by the proper rectangle dimensions or the
     * rectangle dimensions can be passed to this function.
     *
     * @param dayHeight The height of the rectangle of the day.
     * @param dayWidth The width of the rectangle of the day.
     * @param columnOffset The offset in the rectangle of the day to adjust this
     *    event by if it intersects or is contained in a previous event. This also
     *    reduces the width of the returned bounds to keep the bounds in the
     *    rectangle of the day.
     * @param clip `true` if the bounds should stay in the day rectangle, `false`
     *    and the bounds may go outside the rectangle of the day for multi-day
     *    events.
     * @param offsetX How much to translate the left & right properties by.
     * @param offsetY How much to translate the top & bottom properties by.
     * @returns The calculated bounds for this event.
     */
    CalendarEvent.prototype.getTimeBounds = function (dayHeight, dayWidth, columnOffset, clip, offsetX, offsetY) {
        if (dayHeight === void 0) { dayHeight = 1; }
        if (dayWidth === void 0) { dayWidth = 1; }
        if (columnOffset === void 0) { columnOffset = 0.1; }
        if (clip === void 0) { clip = true; }
        if (offsetX === void 0) { offsetX = 0; }
        if (offsetY === void 0) { offsetY = 0; }
        return this.time.getBounds(this.day, dayHeight, dayWidth, this.col * columnOffset, clip, offsetX, offsetY);
    };
    /**
     * Changes the cancellation status of this event. By default this cancels
     * this event - but `false` may be passed to undo a cancellation.
     *
     * @param cancelled Whether the event should be cancelled.
     */
    CalendarEvent.prototype.cancel = function (cancelled) {
        if (cancelled === void 0) { cancelled = true; }
        this.schedule.setCancelled(this.start, cancelled);
        this.cancelled = cancelled;
        return this;
    };
    /**
     * Changes the exclusion status of this event. By default this excludes this
     * event - but `false`  may be passed to undo an exclusion.
     *
     * @param excluded Whether the event should be excluded.
     */
    CalendarEvent.prototype.exclude = function (excluded) {
        if (excluded === void 0) { excluded = true; }
        this.schedule.setExcluded(this.start, excluded);
        return this;
    };
    /**
     * Moves this event to potentially another day and time. A move is
     * accomplished by excluding the current event and adding an inclusion of the
     * new day & time. Any [[CalendarEvent.meta]] on this event will be moved to
     * the new event. If the schedule represents a single event
     * ([[Schedule.isSingleEvent]]) then the schedule frequencies are updated
     * to match the timestamp provided.
     *
     * @param toTime The timestamp to move this event to.
     * @returns Whether the event was moved to the given time.
     */
    CalendarEvent.prototype.move = function (toTime) {
        return this.schedule.move(toTime, this.start);
    };
    return CalendarEvent;
}());

var _a;
/**
 * A collection of [[CalendarDay]]s, the events on the calendar, and all
 * [[CalendarEvent]]s generated based on the events.
 *
 * @typeparam T The type of data stored in the [[Event]] class.
 * @typeparam M The type of metadata stored in the schedule.
 */
var Calendar = /** @class */ (function () {
    /**
     * Creates a new calendar given a span, type, size, moving functions, and
     * optionally some default properties for the calendar.
     *
     * @param start The first day on the calendar.
     * @param end The last day on the calendar.
     * @param type The calendar type used for describing the calendar and splitting it.
     * @param size The number of calendar types in this calendar.
     * @param moveStart The function to move the start day.
     * @param moveEnd The function to move the end by.
     * @param input The default properties for this calendar.
     * @see [[Calendar.start]]
     * @see [[Calendar.end]]
     * @see [[Calendar.type]]
     * @see [[Calendar.size]]
     * @see [[Calendar.moveStart]]
     * @see [[Calendar.moveEnd]]
     */
    function Calendar(start, end, type, size, moveStart, moveEnd, input) {
        /**
         * If the calendar should be filled in so the first day of the calendar is
         * Sunday and the last day is Saturday.
         */
        this.fill = false;
        /**
         * The minimum number of days in the calendar no matter what the type or size
         * is. This can be used to display a month with a constant number of weeks -
         * because not all months contain the same number of weeks.
         */
        this.minimumSize = 0;
        /**
         * When `true` a [[CalendarEvent]] instance exists on each [[CalendarDay]]
         * the event covers even if the event didn't start on that day.
         */
        this.repeatCovers = true;
        /**
         * When `true` an event instance will be created for each time specified on
         * the schedule. If the schedule specifies an all day event then only one
         * event is added to a day. This is typically done when displaying days or
         * weeks and events can be displayed on a timeline.
         */
        this.listTimes = false;
        /**
         * When `true` events will be added to days "outside" the calendar. Days
         * outside the calendar are days filled in when [[Calendar.fill]] is `true`.
         * More specifically days that are in [[Calendar.filled]] and not in
         * [[Calendar.span]].
         */
        this.eventsOutside = false;
        /**
         * When `true` [[CalendarEvent.row]] will be set so when visually displaying
         * the event with others multi-day events will align and not overlap.
         */
        this.updateRows = false;
        /**
         * When `true` [[CalendarEvent.col]] will be set so when visually displaying
         * the event based on start and end time any events that overlap with each
         * other will be "indented" to see the event below it.
         */
        this.updateColumns = false;
        /**
         * The function (if any) which sorts the events on a calendar day.
         */
        this.eventSorter = null;
        /**
         * A function to use when parsing meta input into the desired type.
         *
         * @param input The input to parse.
         * @returns The meta parsed from the given input, if any.
         */
        this.parseMeta = (function (x) { return x; });
        /**
         * A function to use when parsing meta input into the desired type.
         *
         * @param input The input to parse.
         * @returns The meta parsed from the given input, if any.
         */
        this.parseData = (function (x) { return x; });
        /**
         * A selection of days on the calendar. If no days are selected this is `null`.
         * This is merely used to keep the selection flags in [[CalendarDay]] updated
         * via [[Calendar.refreshSelection]].
         */
        this.selection = null;
        /**
         * The array of days in this calendar and their events.
         */
        this.days = [];
        /**
         * The array of scheduled events added to the calendar.
         */
        this.events = [];
        /**
         * The array of visible events on the calendar. This is built based on the
         * span of the schedule in the given event and also the [[Event.visible]] flag.
         */
        this.visible = [];
        this.span = new DaySpan(start, end);
        this.filled = new DaySpan(start, end);
        this.type = type;
        this.size = size;
        this.moveStart = moveStart;
        this.moveEnd = moveEnd;
        if (Functions.isDefined(input)) {
            this.set(input);
        }
        else {
            this.refresh();
        }
    }
    /**
     * Changes the calendar possibly morphing it to a different type or size if
     * specified in the given input. If the type and size are not morphed then
     * the following properties may be updated:
     *
     * - [[Calendar.fill]]
     * - [[Calendar.minimumSize]]
     * - [[Calendar.repeatCovers]]
     * - [[Calendar.listTimes]]
     * - [[Calendar.eventsOutside]]
     * - [[Calendar.updateRows]]
     * - [[Calendar.updateColumns]]
     * - [[Calendar.eventSorter]]
     * - [[Calendar.events]]
     * - [[Calendar.parseData]]
     * - [[Calendar.parseMeta]]
     *
     * If [[CalendarInput.delayRefresh]] is not given with `true` then
     * [[Calendar.refresh]] will be called once the calendar properties have been
     * updated.
     *
     * @param input The new properties for this calendar to overwrite with.
     */
    Calendar.prototype.set = function (input) {
        var typeChange = Functions.isDefined(input.type) && input.type !== this.type;
        var sizeChange = Functions.isDefined(input.size) && input.size !== this.size;
        if (typeChange || sizeChange) {
            var focus_1 = Functions.coalesce(input.otherwiseFocus, Calendar.DEFAULT_FOCUS);
            var prefer = Functions.coalesce(input.preferToday, true);
            var size = Functions.coalesce(input.size, this.size);
            var type = Functions.coalesce(input.type, this.type);
            var today = Day.today();
            var around = Functions.coalesce(input.around, this.days[Math.floor((this.days.length - 1) * focus_1)]);
            if (!around || (prefer && this.span.matchesDay(today))) {
                around = today;
            }
            var meta = Calendar.TYPES[type];
            var start = meta.getStart(Day.parse(around), size, focus_1);
            var end = meta.getEnd(start, size, focus_1);
            this.span.start = start;
            this.span.end = end;
            this.type = type;
            this.size = size;
            this.moveStart = meta.moveStart;
            this.moveEnd = meta.moveEnd;
        }
        else if (input.around) {
            var focus_2 = Functions.coalesce(input.otherwiseFocus, Calendar.DEFAULT_FOCUS);
            var around = Day.parse(input.around);
            var type = this.type;
            var size = this.size;
            var meta = Calendar.TYPES[type];
            var start = meta.getStart(around, size, focus_2);
            var end = meta.getEnd(start, size, focus_2);
            this.span.start = start;
            this.span.end = end;
        }
        this.fill = Functions.coalesce(input.fill, this.fill);
        this.minimumSize = Functions.coalesce(input.minimumSize, this.minimumSize);
        this.repeatCovers = Functions.coalesce(input.repeatCovers, this.repeatCovers);
        this.listTimes = Functions.coalesce(input.listTimes, this.listTimes);
        this.eventsOutside = Functions.coalesce(input.eventsOutside, this.eventsOutside);
        this.updateRows = Functions.coalesce(input.updateRows, this.updateRows);
        this.updateColumns = Functions.coalesce(input.updateColumns, this.updateColumns);
        this.eventSorter = Functions.coalesce(input.eventSorter, this.eventSorter);
        this.parseMeta = Functions.coalesce(input.parseMeta, this.parseMeta);
        this.parseData = Functions.coalesce(input.parseData, this.parseData);
        if (Functions.isArray(input.events)) {
            this.setEvents(input.events, true);
        }
        if (!input.delayRefresh) {
            this.refresh();
        }
        return this;
    };
    /**
     * Sets the [[Calendar.minimumSize]] value and returns `this` for method
     * chaining.
     *
     * @param minimumSize The new value.
     */
    Calendar.prototype.withMinimumSize = function (minimumSize) {
        this.minimumSize = minimumSize;
        this.refresh();
        return this;
    };
    /**
     * Sets the [[Calendar.repeatCovers]] value and returns `this` for method
     * chaining.
     *
     * @param repeatCovers The new value.
     */
    Calendar.prototype.withRepeatCovers = function (repeatCovers) {
        this.repeatCovers = repeatCovers;
        this.refreshEvents();
        return this;
    };
    /**
     * Sets the [[Calendar.listTimes]] value and returns `this` for method
     * chaining.
     *
     * @param listTimes The new value.
     */
    Calendar.prototype.withListTimes = function (listTimes) {
        this.listTimes = listTimes;
        this.refreshEvents();
        return this;
    };
    /**
     * Sets the [[Calendar.eventsOutside]] value and returns `this` for method
     * chaining.
     *
     * @param eventsOutside The new value.
     */
    Calendar.prototype.withEventsOutside = function (eventsOutside) {
        this.eventsOutside = eventsOutside;
        this.refreshEvents();
        return this;
    };
    /**
     * Sets the [[Calendar.updateRows]] value and returns `this` for method
     * chaining.
     *
     * @param updateRows The new value.
     * @param refresh If the rows should be updated now if `updateRows` is `true`.
     */
    Calendar.prototype.withUpdateRows = function (updateRows, refresh) {
        if (refresh === void 0) { refresh = true; }
        this.updateRows = updateRows;
        if (refresh && updateRows) {
            this.refreshRows();
        }
        return this;
    };
    /**
     * Sets the [[Calendar.updateColumns]] value and returns `this` for method
     * chaining.
     *
     * @param updateColumns The new value.
     * @param refresh If the columns should be updated now if `updateColumns` is
     *    `true`.
     */
    Calendar.prototype.withUpdateColumns = function (updateColumns, refresh) {
        if (refresh === void 0) { refresh = true; }
        this.updateColumns = updateColumns;
        if (refresh && updateColumns) {
            this.refreshColumns();
        }
        return this;
    };
    Object.defineProperty(Calendar.prototype, "start", {
        /**
         * Returns the start day of the calendar. If this calendar is filled, this
         * may not represent the very first day in the calendar.
         */
        get: function () {
            return this.span.start;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Calendar.prototype, "end", {
        /**
         * Returns the end day of the calendar. If this calendar is filled, this
         * may not represent the very last day in the calendar.
         */
        get: function () {
            return this.span.end;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Returns the summary of the span of time this calendar represents.
     *
     * @param dayOfWeek [[DaySpan.summary]]
     * @param short [[DaySpan.summary]]
     * @param repeat [[DaySpan.summary]]
     * @param contextual [[DaySpan.summary]]
     * @param delimiter [[DaySpan.summary]]
     * @see [[DaySpan.summary]]
     */
    Calendar.prototype.summary = function (dayOfWeek, short, repeat, contextual, delimiter) {
        if (dayOfWeek === void 0) { dayOfWeek = true; }
        if (short === void 0) { short = false; }
        if (repeat === void 0) { repeat = false; }
        if (contextual === void 0) { contextual = true; }
        if (delimiter === void 0) { delimiter = ' - '; }
        return this.span.summary(this.type, dayOfWeek, short, repeat, contextual, delimiter);
    };
    /**
     * Splits up this calendar into an iterable collection of calendars. The
     * resulting iterator will return `size / by` number of calendars.
     *
     * @param by The new size of the resulting calendars. If the the size of the
     *    current calendar is not divisible by this value the resulting calendars
     *    may cover more or less than this calendar covers.
     * @returns An iterator for the calendars produced.
     */
    Calendar.prototype.split = function (by) {
        var _this = this;
        if (by === void 0) { by = 1; }
        return new iteratez.Iterate(function (iterator) {
            var start = _this.start;
            var end = _this.moveEnd(_this.end, by - _this.size);
            for (var i = 0; i < _this.size; i++) {
                var calendar = new Calendar(start, end, _this.type, by, _this.moveStart, _this.moveEnd, _this);
                if (iterator.act(calendar, i) === iteratez.IterateAction.STOP) {
                    return;
                }
                start = _this.moveStart(start, by);
                end = _this.moveEnd(end, by);
            }
        });
    };
    /**
     * Refreshes the days and events in this calendar based on the start and end
     * days, the calendar properties, and its eventss.
     *
     * @param today The current day to update the calendar days via
     *    [[CalendarDay.updateCurrent]].
     */
    Calendar.prototype.refresh = function (today) {
        if (today === void 0) { today = Day.today(); }
        this.length = this.span.days(exports.Op.UP, true);
        this.resetDays();
        this.refreshCurrent(today);
        this.refreshSelection();
        this.refreshVisible();
        this.refreshEvents();
        return this;
    };
    /**
     * Updates the [[Calendar.filled]] span based on [[Calendar.start]],
     * [[Calendar.end]], and [[Calendar.fill]] properties.
     */
    Calendar.prototype.resetFilled = function () {
        this.filled.start = this.fill ? this.start.startOf('week') : this.start;
        this.filled.end = this.fill ? this.end.endOf('week') : this.end;
        return this;
    };
    /**
     * Updates [[Calendar.days]] to match the span of days in the calendar.
     */
    Calendar.prototype.resetDays = function () {
        this.resetFilled();
        var days = this.days;
        var filled = this.filled;
        var daysBetween = filled.days(exports.Op.UP);
        var total = Math.max(this.minimumSize, daysBetween);
        var current = filled.start;
        for (var i = 0; i < total; i++) {
            var day = days[i];
            if (!day || !day.sameDay(current)) {
                day = new CalendarDay(current.date);
                if (i < days.length) {
                    days.splice(i, 1, day);
                }
                else {
                    days.push(day);
                }
            }
            day.inCalendar = this.span.contains(day);
            current = current.next();
        }
        if (days.length > total) {
            days.splice(total, days.length - total);
        }
        return this;
    };
    /**
     * Updates the list of visible schedules.
     */
    Calendar.prototype.refreshVisible = function () {
        var start = this.filled.start;
        var end = this.filled.end;
        this.visible = this.events.filter(function (e) {
            return e.visible && e.schedule.matchesRange(start, end);
        });
        return this;
    };
    /**
     * Updates the days with the current day via [[CalendarDay.updateCurrent]].
     *
     * @param today The new current day.
     */
    Calendar.prototype.refreshCurrent = function (today) {
        if (today === void 0) { today = Day.today(); }
        this.iterateDays().each(function (d) { return d.updateCurrent(today); });
        return this;
    };
    /**
     * Updates the selection flags in [[CalendarDay]] based on the
     * [[Calendar.selection]] property.
     */
    Calendar.prototype.refreshSelection = function () {
        var _this = this;
        this.iterateDays().each(function (d) {
            if (_this.selection) {
                d.updateSelected(_this.selection);
            }
            else {
                d.clearSelected();
            }
        });
        return this;
    };
    /**
     * Updates the [[CalendarDay.events]] based on the events in this calendar
     * and the following properties:
     *
     * - [[Calendar.eventsForDay]]
     * - [[Calendar.eventsOutside]]
     * - [[Calendar.listTimes]]
     * - [[Calendar.repeatCovers]]
     * - [[Calendar.updateRows]]
     * - [[Calendar.updateColumns]]
     */
    Calendar.prototype.refreshEvents = function () {
        var _this = this;
        this.iterateDays().each(function (d) {
            if (d.inCalendar || _this.eventsOutside) {
                d.events = _this.eventsForDay(d, _this.listTimes, _this.repeatCovers);
            }
        });
        if (this.updateRows) {
            this.refreshRows();
        }
        if (this.updateColumns) {
            this.refreshColumns();
        }
        return this;
    };
    /**
     * Refreshes the [[CalendarEvent.row]] property as described in the link.
     */
    Calendar.prototype.refreshRows = function () {
        var onlyFullDay = this.listTimes;
        var eventToRow = {};
        this.iterateDays().each(function (d) {
            if (d.dayOfWeek === 0) {
                eventToRow = {};
            }
            var used = {};
            for (var _i = 0, _a = d.events; _i < _a.length; _i++) {
                var event_1 = _a[_i];
                if (onlyFullDay && !event_1.fullDay) {
                    continue;
                }
                if (event_1.id in eventToRow) {
                    used[event_1.row = eventToRow[event_1.id]] = true;
                }
            }
            var rowIndex = 0;
            for (var _b = 0, _c = d.events; _b < _c.length; _b++) {
                var event_2 = _c[_b];
                if ((onlyFullDay && !event_2.fullDay) || event_2.id in eventToRow) {
                    continue;
                }
                while (used[rowIndex]) {
                    rowIndex++;
                }
                eventToRow[event_2.id] = event_2.row = rowIndex;
                rowIndex++;
            }
        });
        return this;
    };
    /**
     * Refreshes the [[CalendarEvent.col]] property as described in the link.
     */
    Calendar.prototype.refreshColumns = function () {
        this.iterateDays().each(function (d) {
            var markers = [];
            for (var _i = 0, _a = d.events; _i < _a.length; _i++) {
                var event_3 = _a[_i];
                if (!event_3.fullDay) {
                    markers.push({
                        event: event_3,
                        time: event_3.time.start.time,
                        start: true,
                        parent: null
                    });
                    markers.push({
                        event: event_3,
                        time: event_3.time.end.time - 1,
                        start: false,
                        parent: null
                    });
                }
            }
            markers.sort(function (a, b) {
                return a.time - b.time;
            });
            var parent = null;
            for (var _b = 0, markers_1 = markers; _b < markers_1.length; _b++) {
                var marker = markers_1[_b];
                if (marker.start) {
                    marker.parent = parent;
                    parent = marker;
                }
                else if (parent) {
                    parent = parent.parent;
                }
            }
            for (var _c = 0, markers_2 = markers; _c < markers_2.length; _c++) {
                var marker = markers_2[_c];
                if (marker.start) {
                    marker.event.col = marker.parent ? marker.parent.event.col + 1 : 0;
                }
            }
        });
        return this;
    };
    /**
     * Gets the calendar day for the given day.
     *
     * @param input The day to get the calendar day for.
     * @returns The reference to the calendar day, or null if the given input
     *    is not on this calendar.
     */
    Calendar.prototype.getDay = function (input) {
        var parsed = Day.parse(input);
        if (parsed) {
            var dayCount = parsed.startOf('day').daysBetween(this.days[0], exports.Op.DOWN, false);
            return this.days[dayCount];
        }
        return null;
    };
    /**
     * Iterates over all days in this calendar and passes each day to `iterator`.
     *
     * @param iterator The function to pass [[CalendarDay]]s to.
     */
    Calendar.prototype.iterateDays = function () {
        var _this = this;
        return new iteratez.Iterate(function (iterator) {
            var days = _this.days;
            for (var i = 0; i < days.length; i++) {
                switch (iterator.act(days[i], i)) {
                    case iteratez.IterateAction.STOP:
                        return;
                }
            }
        });
    };
    /**
     * Returns the events for the given day optionally looking at schedule times,
     * optionally looking at events which cover multiple days, and optionally
     * sorted with the given function.
     *
     * @param day The day to find events for.
     * @param getTimes When `true` an event is added to the result for each time
     *    specified in the schedule.
     * @param covers When `true` events which don't start on the given day but do
     *    overlap are added to the result.
     * @param sorter The function to sort the events by, if any.
     * @returns An array of events that occurred on the given day.
     */
    Calendar.prototype.eventsForDay = function (day, getTimes, covers, sorter) {
        if (getTimes === void 0) { getTimes = true; }
        if (covers === void 0) { covers = true; }
        if (sorter === void 0) { sorter = this.eventSorter; }
        var events = [];
        var entries = this.visible;
        var _loop_1 = function (entryIndex) {
            var entry = entries[entryIndex];
            var schedule = entry.schedule;
            var eventId = entryIndex * Constants.MAX_EVENTS_PER_DAY;
            var timeIndex = 0;
            schedule.iterateSpans(day, covers).each(function (span, key, iterator) {
                events.push(new CalendarEvent(eventId + timeIndex++, entry, span, day));
                if (!getTimes) {
                    iterator.stop();
                }
            });
        };
        for (var entryIndex = 0; entryIndex < entries.length; entryIndex++) {
            _loop_1(entryIndex);
        }
        if (sorter) {
            events.sort(sorter);
        }
        return events;
    };
    /**
     * Finds the event given one of the ways to identify the event.
     *
     * @param input The value to use to search for an event.
     * @returns The refrence to the event or null if not found.
     */
    Calendar.prototype.findEvent = function (id) {
        for (var _i = 0, _a = this.events; _i < _a.length; _i++) {
            var event_4 = _a[_i];
            if (event_4 === id || event_4.schedule === id || event_4.data === id || event_4.id === id) {
                return event_4;
            }
        }
        return null;
    };
    /**
     * Removes the list of events if they exist in the calendar.
     *
     * @param events The array of events to remove if they exist. If no
     *    events are passed (via `null`) then all events will be removed
     *    from the calendar.
     * @param delayRefresh When `true` the [[Calendar.refreshEvents]] will not be
     *    called after the events are removed.
     * @see [[Calendar.removeEvent]]
     * @see [[Calendar.refreshEvents]]
     */
    Calendar.prototype.removeEvents = function (events, delayRefresh) {
        if (events === void 0) { events = null; }
        if (delayRefresh === void 0) { delayRefresh = false; }
        if (events) {
            for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
                var event_5 = events_1[_i];
                this.removeEvent(event_5, true);
            }
        }
        else {
            this.events = [];
        }
        this.refreshVisible();
        if (!delayRefresh) {
            this.refreshEvents();
        }
        return this;
    };
    /**
     * Removes the given event if it exists on the calendar.
     *
     * @param event The event to remove if it exists.
     * @param delayRefresh When `true` the [[Calendar.refreshEvents]] will not be
     *    called after the event is removed.
     * @see [[Calendar.refreshEvents]]
     */
    Calendar.prototype.removeEvent = function (event, delayRefresh) {
        if (delayRefresh === void 0) { delayRefresh = false; }
        var found = this.findEvent(event);
        if (found) {
            this.events.splice(this.events.indexOf(found), 1);
            this.refreshVisible();
            if (!delayRefresh) {
                this.refreshEvents();
            }
        }
        return this;
    };
    /**
     * Adds the given event to this calendar if it doesn't exist already (or
     * `allowDuplicates` is `true`).
     *
     * @param event The event to add to the calendar.
     * @param allowDuplicates If an event can be added more than once.
     * @param delayRefresh When `true` the [[Calendar.refreshEvents]] will not be
     *    called after the event is added.
     * @see [[Calendar.refreshEvents]]
     */
    Calendar.prototype.addEvent = function (event, allowDuplicates, delayRefresh) {
        if (allowDuplicates === void 0) { allowDuplicates = false; }
        if (delayRefresh === void 0) { delayRefresh = false; }
        var parsed = Parse.event(event, this.parseData, this.parseMeta);
        if (!allowDuplicates) {
            var existing = this.findEvent(parsed);
            if (existing) {
                return this;
            }
        }
        this.events.push(parsed);
        this.refreshVisible();
        if (!delayRefresh) {
            this.refreshEvents();
        }
        return this;
    };
    /**
     * Adds the given events to this calendar if they don't exist already (or
     * `allowDuplicates` is `true`).
     *
     * @param events The events to add to the calendar.
     * @param allowDuplicates If an event can be added more than once.
     * @param delayRefresh When `true` the [[Calendar.refreshEvents]] will not be
     *    called after the events are added.
     * @see [[Calendar.refreshEvents]]
     */
    Calendar.prototype.addEvents = function (events, allowDuplicates, delayRefresh) {
        if (allowDuplicates === void 0) { allowDuplicates = false; }
        if (delayRefresh === void 0) { delayRefresh = false; }
        for (var _i = 0, events_2 = events; _i < events_2.length; _i++) {
            var event_6 = events_2[_i];
            this.addEvent(event_6, allowDuplicates, true);
        }
        if (!delayRefresh) {
            this.refreshEvents();
        }
        return this;
    };
    /**
     * Sets the given events to this calendar replacing the current list of
     * events.
     *
     * @param events The events to set to the calendar.
     * @param delayRefresh When `true` the [[Calendar.refreshEvents]] will not be
     *    called after the events are added.
     * @see [[Calendar.refreshEvents]]
     */
    Calendar.prototype.setEvents = function (events, delayRefresh) {
        if (delayRefresh === void 0) { delayRefresh = false; }
        var parsedEvents = [];
        for (var _i = 0, events_3 = events; _i < events_3.length; _i++) {
            var event_7 = events_3[_i];
            var parsed = Parse.event(event_7, this.parseData, this.parseMeta);
            if (parsed) {
                parsedEvents.push(parsed);
            }
        }
        this.events = parsedEvents;
        this.refreshVisible();
        if (!delayRefresh) {
            this.refreshEvents();
        }
        return this;
    };
    /**
     * Sets the selection point or range of the calendar and updates the flags
     * in the days.
     *
     * @param start The start of the selection.
     * @param end The end of the selection.
     * @see [[Calendar.refreshSelection]]
     */
    Calendar.prototype.select = function (start, end) {
        if (end === void 0) { end = start; }
        this.selection = new DaySpan(start, end);
        this.refreshSelection();
        return this;
    };
    /**
     * Sets the selection of the calendar to nothing.
     *
     * @see [[Calendar.refreshSelection]]
     */
    Calendar.prototype.unselect = function () {
        this.selection = null;
        this.refreshSelection();
        return this;
    };
    /**
     * Shifts the calendar days by the given amount.
     *
     * @param jump The amount to shift the calendar by.
     * @param delayRefresh When `true` [[Calendar.refresh]] will not be called
     *    after calendar is moved.
     */
    Calendar.prototype.move = function (jump, delayRefresh) {
        if (jump === void 0) { jump = this.size; }
        if (delayRefresh === void 0) { delayRefresh = false; }
        this.span.start = this.moveStart(this.start, jump);
        this.span.end = this.moveEnd(this.end, jump);
        if (!delayRefresh) {
            this.refresh();
        }
        return this;
    };
    /**
     * Moves the calenndar to the next set of days.
     *
     * @param jump The amount to shift the calendar by.
     * @param delayRefresh When `true` [[Calendar.refresh]] will not be called
     *    after calendar is moved.
     */
    Calendar.prototype.next = function (jump, delayRefresh) {
        if (jump === void 0) { jump = this.size; }
        if (delayRefresh === void 0) { delayRefresh = false; }
        return this.move(jump, delayRefresh);
    };
    /**
     * Moves the calenndar to the previous set of days.
     *
     * @param jump The amount to shift the calendar by.
     * @param delayRefresh When `true` [[Calendar.refresh]] will not be called
     *    after calendar is moved.
     */
    Calendar.prototype.prev = function (jump, delayRefresh) {
        if (jump === void 0) { jump = this.size; }
        if (delayRefresh === void 0) { delayRefresh = false; }
        return this.move(-jump, delayRefresh);
    };
    /**
     * Converts this calendar to input which can be used to later recreate this
     * calendar. The only properties of the calendar which will be loss is the
     * [[Calendar.eventSorter]] property because it is a function.
     *
     * @param plain If the returned input should be plain objects as opposed
     *    to [[Day]] and [[Event]] instances.
     * @param plainData A function to convert [[Event.data]] to a plain object if
     *    it is not already.
     * @param plainMeta A function to convert values in [[Schedule.meta]] to plain
     *    objects if they are not alreday.
     * @returns The input generated from this calendar.
     */
    Calendar.prototype.toInput = function (plain, plainData, plainMeta) {
        if (plain === void 0) { plain = false; }
        if (plainData === void 0) { plainData = function (d) { return d; }; }
        if (plainMeta === void 0) { plainMeta = function (m) { return m; }; }
        var out = {};
        out.type = this.type;
        out.size = this.size;
        out.fill = this.fill;
        out.minimumSize = this.minimumSize;
        out.repeatCovers = this.repeatCovers;
        out.listTimes = this.listTimes;
        out.eventsOutside = this.eventsOutside;
        out.updateRows = this.updateRows;
        out.updateColumns = this.updateColumns;
        out.around = plain ? this.span.start.time : this.span.start;
        out.events = [];
        for (var _i = 0, _a = this.events; _i < _a.length; _i++) {
            var event_8 = _a[_i];
            if (plain) {
                var plainEvent = {};
                if (Functions.isDefined(event_8.id)) {
                    plainEvent.id = event_8.id;
                }
                if (Functions.isDefined(event_8.data)) {
                    plainEvent.data = plainData(event_8.data);
                }
                if (!event_8.visible) {
                    plainEvent.visible = event_8.visible;
                }
                plainEvent.schedule = event_8.schedule.toInput();
                var meta = plainEvent.schedule.meta;
                if (meta) {
                    for (var identifier in meta) {
                        meta[identifier] = plainMeta(meta[identifier]);
                    }
                }
                out.events.push(plainEvent);
            }
            else {
                out.events.push(event_8);
            }
        }
        return out;
    };
    /**
     * Creates a calendar based on the given input.
     *
     * @param input The input which has at least the `type` specified.
     * @returns A new calendar instance.
     */
    Calendar.fromInput = function (input) {
        var initial = Day.today();
        return new Calendar(initial, initial, null, 1, null, null, input);
    };
    /**
     * Creates a calendar based around a given unit optionally focused around a
     * given day.
     *
     * @param type The unit of the calendar.
     * @param days The number of units in the calendar.
     * @param around The day to focus the calendar on.
     * @param focus The value which describes how months are added around the given
     *    day. The default value will center the calendar around the given day.
     *    When the value is `0` the given day is the first day in the calendar,
     *    and when the value is `1` the given day is the last day in the calendar.
     * @param input The default properties for the calendar.
     * @returns A new calendar instance.
     */
    Calendar.forType = function (type, size, around, focus, input) {
        if (size === void 0) { size = 1; }
        if (around === void 0) { around = Day.today(); }
        if (focus === void 0) { focus = 0.49999; }
        var meta = this.TYPES[type];
        var start = meta.getStart(around, size, focus);
        var end = meta.getEnd(start, size, focus);
        return new Calendar(start, end, type, size, meta.moveStart, meta.moveEnd, input || meta.defaultInput);
    };
    /**
     * Creates a calendar based around days optionally focused around a given day.
     *
     * @param days The number of days in the calendar.
     * @param around The day to focus the calendar on.
     * @param focus The value which describes how days are added around the given
     *    day. The default value will center the calendar around the given day.
     *    When the value is `0` the given day is the first day in the calendar,
     *    and when the value is `1` the given day is the last day in the calendar.
     * @param input The default properties for the calendar.
     * @returns A new calendar instance.
     * @see [[Calendar.forType]]
     */
    Calendar.days = function (days, around, focus, input) {
        if (days === void 0) { days = 1; }
        if (around === void 0) { around = Day.today(); }
        if (focus === void 0) { focus = 0.4999; }
        return this.forType(exports.Units.DAY, days, around, focus, input);
    };
    /**
     * Creates a calendar based around weeks optionally focused around a given day.
     *
     * @param days The number of weeks in the calendar.
     * @param around The day to focus the calendar on.
     * @param focus The value which describes how weeks are added around the given
     *    day. The default value will center the calendar around the given day.
     *    When the value is `0` the given day is the first day in the calendar,
     *    and when the value is `1` the given day is the last day in the calendar.
     * @param input The default properties for the calendar.
     * @returns A new calendar instance.
     * @see [[Calendar.forType]]
     */
    Calendar.weeks = function (weeks, around, focus, input) {
        if (weeks === void 0) { weeks = 1; }
        if (around === void 0) { around = Day.today(); }
        if (focus === void 0) { focus = 0.4999; }
        return this.forType(exports.Units.WEEK, weeks, around, focus, input);
    };
    /**
     * Creates a calendar based around months optionally focused around a given day.
     *
     * @param days The number of months in the calendar.
     * @param around The day to focus the calendar on.
     * @param focus The value which describes how months are added around the given
     *    day. The default value will center the calendar around the given day.
     *    When the value is `0` the given day is the first day in the calendar,
     *    and when the value is `1` the given day is the last day in the calendar.
     * @param input The default properties for the calendar.
     * @returns A new calendar instance.
     * @see [[Calendar.forType]]
     */
    Calendar.months = function (months, around, focus, input) {
        if (months === void 0) { months = 1; }
        if (around === void 0) { around = Day.today(); }
        if (focus === void 0) { focus = 0.4999; }
        return this.forType(exports.Units.MONTH, months, around, focus, input);
    };
    /**
     * Creates a calendar based around years optionally focused around a given day.
     *
     * @param days The number of years in the calendar.
     * @param around The day to focus the calendar on.
     * @param focus The value which describes how years are added around the given
     *    day. The default value will center the calendar around the given day.
     *    When the value is `0` the given day is the first day in the calendar,
     *    and when the value is `1` the given day is the last day in the calendar.
     * @param input The default properties for the calendar.
     * @returns A new calendar instance.
     * @see [[Calendar.forType]]
     */
    Calendar.years = function (years, around, focus, input) {
        if (years === void 0) { years = 1; }
        if (around === void 0) { around = Day.today(); }
        if (focus === void 0) { focus = 0.4999; }
        return this.forType(exports.Units.YEAR, years, around, focus, input);
    };
    Calendar.DEFAULT_FOCUS = 0.4999;
    /**
     * A map of functions and properties by [[Units]] used to create or morph
     * Calendars.
     */
    Calendar.TYPES = (_a = {},
        _a[exports.Units.DAY] = {
            getStart: function (around, size, focus) {
                return around.startOf('day').add('day', -Math.floor(size * focus));
            },
            getEnd: function (start, size, focus) {
                return start.add('day', size - 1).endOf('day');
            },
            moveStart: function (day, amount) {
                return day.add('day', amount);
            },
            moveEnd: function (day, amount) {
                return day.add('day', amount);
            },
            defaultInput: undefined
        },
        _a[exports.Units.WEEK] = {
            getStart: function (around, size, focus) {
                return around.startOf('week').add('week', -Math.floor(size * focus));
            },
            getEnd: function (start, size, focus) {
                return start.add('week', size - 1).endOf('week');
            },
            moveStart: function (day, amount) {
                return day.add('week', amount);
            },
            moveEnd: function (day, amount) {
                return day.add('week', amount);
            },
            defaultInput: undefined
        },
        _a[exports.Units.MONTH] = {
            getStart: function (around, size, focus) {
                return around.startOf('month').add('month', -Math.floor(size * focus));
            },
            getEnd: function (start, size, focus) {
                return start.add('month', size - 1).endOf('month');
            },
            moveStart: function (day, amount) {
                return day.add('month', amount);
            },
            moveEnd: function (day, amount) {
                return day.startOf('month').add('month', amount).endOf('month');
            },
            defaultInput: { fill: true }
        },
        _a[exports.Units.YEAR] = {
            getStart: function (around, size, focus) {
                return around.startOf('year').add('year', -Math.floor(size * focus));
            },
            getEnd: function (start, size, focus) {
                return start.add('year', size - 1).endOf('year');
            },
            moveStart: function (day, amount) {
                return day.add('year', amount);
            },
            moveEnd: function (day, amount) {
                return day.add('year', amount);
            },
            defaultInput: { fill: true }
        },
        _a);
    return Calendar;
}());

/**
 * The months in a year.
 */
var Month = /** @class */ (function () {
    function Month() {
    }
    Month.JANUARY = 0;
    Month.FEBRUARY = 1;
    Month.MARCH = 2;
    Month.APRIL = 3;
    Month.MAY = 4;
    Month.JUNE = 5;
    Month.JULY = 6;
    Month.AUGUST = 7;
    Month.SEPTEMBER = 8;
    Month.OCTOBER = 9;
    Month.NOVEMBER = 10;
    Month.DECEMBER = 11;
    /**
     * The full list of months in a year.
     */
    Month.LIST = [
        Month.JANUARY,
        Month.FEBRUARY,
        Month.MARCH,
        Month.APRIL,
        Month.MAY,
        Month.JUNE,
        Month.JULY,
        Month.AUGUST,
        Month.SEPTEMBER,
        Month.OCTOBER,
        Month.NOVEMBER,
        Month.DECEMBER
    ];
    return Month;
}());

/**
 * A class which helps describe [[ScheduleInput]] if it matches a pattern.
 */
var Pattern = /** @class */ (function () {
    /**
     * Creates a new pattern.
     *
     * @param name The unique name of the pattern.
     * @param listed If the pattern is "listed" [[Pattern.listed]].
     * @param describe A function to describe the pattern given a [[Day]].
     * @param rules The rules which describe how to detect and apply the pattern
     *    to schedule input.
     */
    function Pattern(name, listed, describe, rules) {
        this.name = name;
        this.listed = listed;
        this.describe = describe;
        this.rules = rules;
    }
    /**
     * Applies this pattern to a [[Schedule]] or [[ScheduleInput]] removing and
     * adding any necessary properties from the input to match this pattern -
     * based around the day provided.
     *
     * @param schedule The schedule to update to match this pattern.
     * @param day The day to base the schedule on.
     * @returns The reference to the input passed in.
     */
    Pattern.prototype.apply = function (schedule, day) {
        if (schedule instanceof Schedule) {
            this.applyGeneric(day, function (prop, frequency) { return schedule.setFrequency(prop, frequency); }, function (prop) { return schedule.setFrequency(prop); });
            schedule.updateChecks();
        }
        else {
            this.applyGeneric(day, function (prop, frequency) { return schedule[prop] = frequency; }, function (prop) { return delete schedule[prop]; });
        }
        return schedule;
    };
    /**
     * Applies this pattern to any object provided they implement the
     * `setFrequency` and `removeFrequency` functions.
     *
     * @param day The day to base the schedule on.
     * @param setFrequency The function which sets the frequency on the object.
     * @param removeFrequency The function to remove a frequency from the object.
     */
    Pattern.prototype.applyGeneric = function (day, setFrequency, removeFrequency) {
        for (var _i = 0, _a = Pattern.PROPS; _i < _a.length; _i++) {
            var prop = _a[_i];
            var rule = this.rules[prop];
            // Should have one value
            if (rule === 1) {
                setFrequency(prop, [day[prop]]);
            }
            // Can be any of the values in the array
            if (Functions.isArray(rule)) {
                setFrequency(prop, rule);
            }
            // Must not be present
            if (!Functions.isDefined(rule)) {
                removeFrequency(prop);
            }
        }
    };
    /**
     * Determines whether the given [[Schedule]] or [[ScheduleInput]] matches this
     * pattern. Optionally a day can be provided to make sure the day matches the
     * schedule and pattern together.
     *
     * @param schedule The schedule input to test.
     * @param exactlyWith A day to further validate against for matching.
     * @returns `true` if the schedule was a match to this pattern with the
     *    day if one was provided, otherwise `false`.
     */
    Pattern.prototype.isMatch = function (schedule, exactlyWith) {
        if (schedule instanceof Schedule) {
            return this.isMatchGeneric(function (prop) { return schedule[prop].input; }, exactlyWith);
        }
        else {
            return this.isMatchGeneric(function (prop) { return schedule[prop]; }, exactlyWith);
        }
    };
    /**
     * Determines whether the given input matches this pattern. Optionally a day
     * can be provided to make sure the day matches the schedule and pattern
     * together.
     *
     * @param input The schedule input to test.
     * @param exactlyWith A day to further validate against for matching.
     * @returns `true` if the schedule input was a match to this pattern with the
     *    day if one was provided, otherwise `false`.
     */
    Pattern.prototype.isMatchGeneric = function (getFrequency, exactlyWith) {
        var exactly = Functions.isDefined(exactlyWith);
        for (var _i = 0, _a = Pattern.PROPS; _i < _a.length; _i++) {
            var prop = _a[_i];
            var rule = this.rules[prop];
            var curr = getFrequency(prop);
            // Optional, skip it
            if (rule === false) {
                continue;
            }
            // Requires any value
            if (rule === true && !curr) {
                return false;
            }
            // Must not be present
            if (!Functions.isDefined(rule) && curr) {
                return false;
            }
            // Must be an array of the same size
            if (Functions.isNumber(rule)) {
                if (Functions.isArray(curr) && curr.length === rule) {
                    if (exactly && curr.indexOf(exactlyWith[prop]) === -1) {
                        return false;
                    }
                }
                else {
                    return false;
                }
            }
            // Must be an array of the same values
            if (Functions.isArray(rule)) {
                if (!Functions.isArray(curr)) {
                    return false;
                }
                if (rule.length !== curr.length) {
                    return false;
                }
                for (var i = 0; i < rule.length; i++) {
                    if (rule[i] !== curr[i]) {
                        return false;
                    }
                }
                if (exactly && rule.indexOf(exactlyWith[prop]) === -1) {
                    return false;
                }
            }
            // Must be an object with same over & offset.
            if (Functions.isFrequencyValueEvery(rule)) {
                if (!Functions.isFrequencyValueEvery(curr)) {
                    return false;
                }
                var ruleOffset = rule.offset || 0;
                var currOffset = curr.offset || 0;
                if (currOffset !== ruleOffset || curr.every !== rule.every) {
                    return false;
                }
                if (exactly && (exactlyWith[prop] % rule.every) !== ruleOffset) {
                    return false;
                }
            }
        }
        return true;
    };
    /**
     * Returns the pattern with the given name if one exists. If you add your own
     * patterns make sure to add them to [[PatternMap]].
     *
     * @param name The name of the pattern to return.
     * @return The instance to the pattern with the same name.
     */
    Pattern.withName = function (name) {
        return PatternMap[name];
    };
    /**
     * Finds a matching pattern to the given input searching through [[Patterns]]
     * for matches. Optionally it will only look at patterns where listed = `true`.
     *
     * @param input The schedule input to use.
     * @param listedOnly When `true` only patterns with [[Pattern.listed]] set to
     *    `true` will be looked at, otherwise all patterns are looked at.
     * @param exactlyWith  A day to further validate against for matching.
     * @see [[Pattern.isMatch]]
     */
    Pattern.findMatch = function (input, listedOnly, exactlyWith) {
        if (listedOnly === void 0) { listedOnly = true; }
        for (var _i = 0, Patterns_2 = Patterns; _i < Patterns_2.length; _i++) {
            var pattern = Patterns_2[_i];
            if ((pattern.listed || !listedOnly) && pattern.isMatch(input, exactlyWith)) {
                return pattern;
            }
        }
        return null;
    };
    /**
     * The properties in the [[ScheduleInput]] which are compared against the
     * rules of a pattern.
     */
    Pattern.PROPS = [
        'dayOfWeek', 'dayOfMonth', 'lastDayOfMonth', 'dayOfYear',
        'month', 'week', 'year',
        'weekOfYear', 'weekspanOfYear', 'fullWeekOfYear', 'lastWeekspanOfYear', 'lastFullWeekOfYear',
        'weekOfMonth', 'weekspanOfMonth', 'fullWeekOfMonth', 'lastWeekspanOfMonth', 'lastFullWeekOfMonth'
    ];
    return Pattern;
}());
/**
 * The list of patterns that can be searched through for matches to schedule
 * input.
 *
 * @see [[Pattern.findMatch]]
 */
var Patterns = [
    new Pattern('none', true, function (day) { return Locales.current.patternNone(day); }, {
        year: 1,
        month: 1,
        dayOfMonth: 1
    }),
    new Pattern('daily', true, function (day) { return Locales.current.patternDaily(day); }, {}),
    new Pattern('weekly', true, function (day) { return Locales.current.patternWeekly(day); }, {
        dayOfWeek: 1
    }),
    new Pattern('monthlyWeek', true, function (day) { return Locales.current.patternMonthlyWeek(day); }, {
        dayOfWeek: 1,
        weekspanOfMonth: 1
    }),
    new Pattern('annually', true, function (day) { return Locales.current.patternAnnually(day); }, {
        month: 1,
        dayOfMonth: 1
    }),
    new Pattern('annuallyMonthWeek', true, function (day) { return Locales.current.patternAnnuallyMonthWeek(day); }, {
        month: 1,
        dayOfWeek: 1,
        weekspanOfMonth: 1
    }),
    new Pattern('weekday', true, function (day) { return Locales.current.patternWeekday(day); }, {
        dayOfWeek: [Weekday.MONDAY, Weekday.TUESDAY, Weekday.WEDNESDAY, Weekday.THURSDAY, Weekday.FRIDAY]
    }),
    new Pattern('monthly', true, function (day) { return Locales.current.patternMonthly(day); }, {
        dayOfMonth: 1
    }),
    new Pattern('lastDay', true, function (day) { return Locales.current.patternLastDay(day); }, {
        lastDayOfMonth: [1]
    }),
    new Pattern('lastDayOfMonth', true, function (day) { return Locales.current.patternLastDayOfMonth(day); }, {
        month: 1,
        lastDayOfMonth: [1]
    }),
    new Pattern('lastWeekday', true, function (day) { return Locales.current.patternLastWeekday(day); }, {
        lastWeekspanOfMonth: [0],
        dayOfWeek: 1,
        month: 1
    }),
    new Pattern('custom', true, function (day) { return Locales.current.patternCustom(day); }, {
        dayOfWeek: false,
        dayOfMonth: false,
        lastDayOfMonth: false,
        dayOfYear: false,
        year: false,
        month: false,
        week: false,
        weekOfYear: false,
        weekspanOfYear: false,
        fullWeekOfYear: false,
        lastWeekspanOfYear: false,
        lastFullWeekOfYear: false,
        weekOfMonth: false,
        weekspanOfMonth: false,
        fullWeekOfMonth: false,
        lastWeekspanOfMonth: false,
        lastFullWeekOfMonth: false
    })
];
/**
 * The map of patterns keyed by their name.
 *
 * @see [[Pattern.withName]]
 */
var PatternMap = {};
for (var _i = 0, Patterns_1 = Patterns; _i < Patterns_1.length; _i++) {
    var pattern = Patterns_1[_i];
    PatternMap[pattern.name] = pattern;
}

/**
 * A class with [[SortEvent]] functions and functions which accept other
 * [[SortEvent]]s and return a new [[SortEvent]].
 *
 * ```typescript
 * // Sorts full day events first, then events in descending order based on start time.
 * Sorts.List([Sorts.FullDay, Sorts.Desc(Sorts.Start)]);
 * ```
 */
var Sorts = /** @class */ (function () {
    function Sorts() {
    }
    /**
     * Sorts the two events by their start time - the earliest event being first
     * in order.
     *
     * @param a The first event.
     * @param b The second event.
     * @returns The difference in time between the start of `a` and `b`.
     * @see [[CalendarEvent.time]]
     */
    Sorts.Start = function (a, b) {
        return a.time.start.time - b.time.start.time;
    };
    /**
     * Sorts the two events by their end time - the earliest to end being first
     * in order.
     *
     * @param a The first event.
     * @param b The second event.
     * @returns The difference in time between the end of `a` and `b`.
     * @see [[CalendarEvent.time]]
     */
    Sorts.End = function (a, b) {
        return a.time.end.time - b.time.end.time;
    };
    /**
     * Sorts the two events placing the full day events before the timed events.
     *
     * @param a The first event.
     * @param b The second event.
     * @returns If both are timed or both are full day then `0` is returned,
     *    otherwise `-1` is returned if `a` is full day and `1` is returned if
     *    `b` is full day.
     * @see [[CalendarEvent.fullDay]]
     */
    Sorts.FullDay = function (a, b) {
        var af = a.fullDay ? 0 : 1;
        var bf = b.fullDay ? 0 : 1;
        return af - bf;
    };
    /**
     * Sorts the two events placing the shorter events before the longer events.
     * Full day or multiple day events actually take up a day and will be ordered
     * last.
     *
     * @param a The first event.
     * @param b The second event.
     * @returns The difference in milliseconds between `a` and `b`.
     * @see [[CalendarEvent.time]]
     * @see [[DaySpan.millis]]
     */
    Sorts.Duration = function (a, b) {
        return a.time.millis() - b.time.millis();
    };
    /**
     * Returns a [[SortEvent]] that effectively orders the given sorter in the
     * opposite (often descending) order.
     *
     * @param sorter The sorter to reverse.
     * @returns A new sorter which reverses the one passed in.
     */
    Sorts.Desc = function (sorter) {
        return function (a, b) {
            return sorter(b, a);
        };
    };
    /**
     * Returns a [[SortEvent]] that orders the events based on a string in each
     * event. A function must be supplied which takes an event of type `T` and
     * returns a string.
     *
     * @param getString A function which returns a string from the event.
     * @returns A sorter which sorts strings alphabetically.
     */
    Sorts.Alphabetical = function (getString) {
        return function (a, b) {
            var as = getString(a.event) || '';
            var bs = getString(b.event) || '';
            return as.localeCompare(bs);
        };
    };
    /**
     * Returns a [[SortEvent]] that orders events based on a number in each event.
     * A function must be supplied which takes an event of type `T` and returns
     * a number.
     *
     * @param getOrder A function which returns a number from the event.
     * @returns A sorter which sorts events based on a number in ascending order.
     */
    Sorts.Ordered = function (getOrder) {
        return function (a, b) {
            var ao = getOrder(a.event);
            var bo = getOrder(b.event);
            return ao - bo;
        };
    };
    /**
     * Returns a [[SortEvent]] that orders events based on an array of sorters.
     * The first sorter which returns a non-zero result is used.
     *
     * @param sorters A list of sorting functions to test one at a time.
     * @returns A sorter which sorts based on a list of sorters.
     */
    Sorts.List = function (sorters) {
        return function (a, b) {
            for (var _i = 0, sorters_1 = sorters; _i < sorters_1.length; _i++) {
                var sorter = sorters_1[_i];
                var compare = sorter(a, b);
                if (compare !== 0) {
                    return compare;
                }
            }
            return 0;
        };
    };
    return Sorts;
}());

// tslint:disable: no-magic-numbers
var unitToWordSingular = {
    millis: 'milliseconde',
    second: 'seconde',
    minute: 'minute',
    hour: 'heure',
    day: 'journée',
    week: 'la semaine',
    month: 'mois',
    quarter: 'trimestre',
    year: 'année'
};
var unitToWordPlural = {
    millis: 'millisecondes',
    second: 'secondes',
    minute: 'minutes',
    hour: 'heures',
    day: 'journées',
    week: 'semaines',
    month: 'mois',
    quarter: 'quarts',
    year: 'années'
};
var lc$1 = {
    weekStartsOn: 1,
    firstWeekContainsDate: 4,
    am: '',
    pm: '',
    formatLT: 'HH:mm',
    formatLTS: 'HH:mm:ss',
    formatL: 'DD/MM/Y',
    formatl: 'D/M/Y',
    formatLL: 'D MMMM Y',
    formatll: 'D MMM Y',
    formatLLL: 'D MMMM Y HH:mm',
    formatlll: 'D MMM Y HH:mm',
    formatLLLL: 'dddd D MMMM Y HH:mm',
    formatllll: 'ddd D MMM Y HH:mm',
    suffix: function (value) { return value + (value === 1 ? 'er' : 'ème'); },
    identifierTime: function (short) { return short ? 'lll' : 'LLL'; },
    identifierDay: function (short) { return short ? 'll' : 'LL'; },
    identifierWeek: function (short) { return 'wo [semaine de] YYYY'; },
    identifierMonth: function (short) { return short ? 'MMM YYYY' : 'MMMM YYYY'; },
    identifierQuarter: function (short) { return 'Qo [trimestre de] Y'; },
    identifierYear: function (short) { return 'YYYY'; },
    patternNone: function () { return "Sans r\u00E9p\u00E9tition"; },
    patternDaily: function () { return "Journalier"; },
    patternWeekly: function (day) { return "Tous les " + lc$1.weekdays[0][day.day]; },
    patternMonthlyWeek: function (day) { return "Tous les " + lc$1.suffix(day.weekspanOfMonth + 1) + " " + lc$1.weekdays[0][day.day] + " du mois"; },
    patternAnnually: function (day) { return "Tous les ans le " + day.dayOfMonth + " " + lc$1.months[0][day.month]; },
    patternAnnuallyMonthWeek: function (day) { return "Tous les ans le " + lc$1.suffix(day.weekspanOfMonth + 1) + " " + lc$1.weekdays[0][day.day] + " de " + lc$1.months[0][day.month]; },
    patternWeekday: function () { return 'Tous les jours de la semaine (du lundi au vendredi)'; },
    patternMonthly: function (day) { return "Mensuel le " + day.dayOfMonth + " du mois"; },
    patternLastDay: function () { return "Le dernier jour du mois"; },
    patternLastDayOfMonth: function (day) { return "Le dernier jour de " + lc$1.months[0][day.month]; },
    patternLastWeekday: function (day) { return "Le dernier " + lc$1.weekdays[0][day.day] + " d\u2019" + lc$1.months[0][day.month]; },
    patternCustom: function () { return "Douane..."; },
    scheduleStartingOn: function (start) { return "Commen\u00E7ant le " + start.dayOfMonth + " " + lc$1.months[0][start.month] + " " + start.year; },
    scheduleEndingOn: function (end) { return "et finissant le " + end.dayOfMonth + " " + lc$1.months[0][end.month] + " " + end.year; },
    scheduleEndsOn: function (end) { return "Jusqu'au " + end.dayOfMonth + " " + lc$1.months[0][end.month] + " " + end.year; },
    scheduleThing: function (thing, start) { return start
        ? 'L’' + thing + ' va se produire'
        : ' l’' + thing + ' va se produire'; },
    scheduleAtTimes: ' à ',
    scheduleDuration: function (duration, unit) { return ' durant ' + duration + ' ' + (unit ? (duration !== 1 ? unitToWordPlural[unit] : unitToWordSingular[unit]) + ' ' : ''); },
    scheduleExcludes: ' excluant le ',
    scheduleIncludes: ' incluant le ',
    scheduleCancels: ' avec annulations le ',
    ruleDayOfWeek: {
        // every 2nd day of the week
        every: function (every) { return "tous les " + every + " jours de la semaine"; },
        // starting on the 5th day of the week
        offset: function (offset) { return "commen\u00E7ant le " + lc$1.suffix(offset) + " jours de la semaine"; },
        // on the 1st, 2nd, and 4th day of the week
        oneOf: function (values) { return "les " + lc$1.list(values.map(lc$1.suffix)) + " jours de la semaine"; }
    },
    ruleLastDayOfMonth: {
        // every 3rd last day of the month
        every: function (every) { return "tous les " + lc$1.suffix(every) + " derniers jours du mois"; },
        // starting on the 2nd last day of the month
        offset: function (offset) { return "commen\u00E7ant le " + lc$1.suffix(offset) + " derniers jours du mois"; },
        // on the 1st, 2nd, and 3rd last day of the month
        oneOf: function (values) { return "les " + lc$1.list(values.map(lc$1.suffix)) + " derniers jours du mois"; }
    },
    ruleDayOfMonth: {
        // every 3rd day of the month
        every: function (every) { return "chaque " + lc$1.suffix(every) + " jour du mois"; },
        // starting on the 2nd day of the month
        offset: function (offset) { return "\u00E0 partir du " + lc$1.suffix(offset) + " jour du mois"; },
        // on the 1st, 2nd, and 3rd day of the month
        oneOf: function (values) { return "les " + lc$1.list(values.map(lc$1.suffix)) + " jours du mois"; }
    },
    ruleDayOfYear: {
        // every 3rd day of the year
        every: function (every) { return "tous les " + every + " jours de l'ann\u00E9e"; },
        // starting on the 2nd day of the year
        offset: function (offset) { return "\u00E0 partir du " + (offset + 1) + " jours de l'ann\u00E9e"; },
        // on the 1st, 2nd, and 3rd day of the year
        oneOf: function (values) { return "les " + lc$1.list(values.map(lc$1.suffix)) + " jours de l'ann\u00E9e"; }
    },
    ruleYear: {
        // every 3rd year
        every: function (every) { return "tous les " + every + " ans"; },
        // starting in 2018
        offset: function (offset) { return "\u00E0 partir de " + offset; },
        // in 2019, 2020, and 2021
        oneOf: function (values) { return "en " + lc$1.list(values.map(function (x) { return x.toString(); })); }
    },
    ruleMonth: {
        // every 3rd month
        every: function (every) { return "tous les " + lc$1.suffix(every) + " mois"; },
        // starting in February
        offset: function (offset) { return "\u00E0 partir de " + lc$1.months[0][offset]; },
        // in February, May, and June
        oneOf: function (values) { return "en " + lc$1.list(values.map(function (x) { return lc$1.months[0][x]; })); }
    },
    ruleDay: {
        // every 2nd day of the week
        every: function (every) { return "tous les " + lc$1.suffix(every) + " jours de la semaine"; },
        // starting on Tuesday
        offset: function (offset) { return "\u00E0 partir de " + lc$1.weekdays[0][offset]; },
        // on Monday, Wednesday, and Friday
        oneOf: function (values) { return "les " + lc$1.list(values.map(function (v) { return lc$1.weekdays[0][v]; })); }
    },
    ruleWeek: {
        // every 3rd week of the year
        every: function (every) { return "chaque " + lc$1.suffix(every) + " semaine de l'ann\u00E9e"; },
        // starting on the 2nd week of the year
        offset: function (offset) { return "\u00E0 partir de la " + lc$1.suffix(offset) + " semaine de l'ann\u00E9e"; },
        // on the 1st, 2nd, and 3rd week of the year
        oneOf: function (values) { return "les " + lc$1.list(values.map(lc$1.suffix)) + " semaines de l'ann\u00E9e"; }
    },
    ruleWeekOfYear: {
        // every 3rd week of the year
        every: function (every) { return "chaque " + lc$1.suffix(every) + " semaine de l'ann\u00E9e"; },
        // starting on the 2nd week of the year
        offset: function (offset) { return "\u00E0 partir de la " + lc$1.suffix(offset) + " semaine de l'ann\u00E9e"; },
        // on the 1st, 2nd, and 3rd week of the year
        oneOf: function (values) { return "les " + lc$1.list(values.map(lc$1.suffix)) + " semaines de l'ann\u00E9e"; }
    },
    ruleWeekspanOfYear: {
        // every 3rd weekspan of the year
        every: function (every) { return "chaque " + lc$1.suffix(every + 1) + " semaine dur\u00E9e de l'ann\u00E9e"; },
        // starting on the 2nd weekspan of the year
        offset: function (offset) { return "\u00E0 partir de la " + lc$1.suffix(offset + 1) + " semaine dur\u00E9e de l'ann\u00E9e"; },
        // on the 1st, 2nd, and 3rd weekspan of the year
        oneOf: function (values) { return "les " + lc$1.list(values.map(function (x) { return lc$1.suffix(x + 1); })) + " semaines de l'ann\u00E9e"; }
    },
    ruleFullWeekOfYear: {
        // every 3rd full week of the year
        every: function (every) { return "chaque " + lc$1.suffix(every) + " semaine compl\u00E8te de l'ann\u00E9e"; },
        // starting on the 2nd full week of the year
        offset: function (offset) { return "\u00E0 partir de la " + lc$1.suffix(offset) + " semaine compl\u00E8te de l'ann\u00E9e"; },
        // on the 1st, 2nd, and 3rd full week of the year
        oneOf: function (values) { return "les " + lc$1.list(values.map(lc$1.suffix)) + " semaine compl\u00E8te de l'ann\u00E9e"; }
    },
    ruleLastWeekspanOfYear: {
        // every 3rd last weekspan of the year
        every: function (every) { return "chaque " + lc$1.suffix(every + 1) + " semaine derni\u00E8re dur\u00E9e de l'ann\u00E9e"; },
        // starting on the 2nd last weekspan of the year
        offset: function (offset) { return "\u00E0 partir de la " + lc$1.suffix(offset + 1) + " semaine derni\u00E8re dur\u00E9e de l'ann\u00E9e"; },
        // on the 1st, 2nd, and 3rd last weekspan of the year
        oneOf: function (values) { return "les " + lc$1.list(values.map(function (x) { return lc$1.suffix(x + 1); })) + " semaine derni\u00E8re dur\u00E9e de l'ann\u00E9e"; }
    },
    ruleLastFullWeekOfYear: {
        // every 3rd last full week of the year
        every: function (every) { return "chaque " + lc$1.suffix(every) + " derni\u00E8re semaine compl\u00E8te de l'ann\u00E9e"; },
        // starting on the 2nd last full week of the year
        offset: function (offset) { return "\u00E0 partir de la " + lc$1.suffix(offset) + " derni\u00E8re semaine compl\u00E8te de l'ann\u00E9e"; },
        // on the 1st, 2nd, and 3rd last full week of the year
        oneOf: function (values) { return "les " + lc$1.list(values.map(lc$1.suffix)) + " derni\u00E8re semaine compl\u00E8te de l'ann\u00E9e"; }
    },
    ruleWeekOfMonth: {
        // every 3rd week of the month
        every: function (every) { return "chaque " + lc$1.suffix(every) + " semaine du mois"; },
        // starting on the 2nd week of the month
        offset: function (offset) { return "\u00E0 partir de la " + lc$1.suffix(offset) + " semaine du mois"; },
        // on the 1st, 2nd, and 3rd week of the month
        oneOf: function (values) { return "les " + lc$1.list(values.map(lc$1.suffix)) + " semaines du mois"; }
    },
    ruleFullWeekOfMonth: {
        // every 3rd full week of the month
        every: function (every) { return "chaque " + lc$1.suffix(every) + " complet semaine du mois"; },
        // starting on the 2nd full week of the month
        offset: function (offset) { return "\u00E0 partir de la " + lc$1.suffix(offset) + " complet semaine du mois"; },
        // on the 1st, 2nd, and 3rd full week of the month
        oneOf: function (values) { return "les " + lc$1.list(values.map(lc$1.suffix)) + " complet semaine du mois"; }
    },
    ruleWeekspanOfMonth: {
        // every 3rd weekspan of the month
        every: function (every) { return "chaque " + lc$1.suffix(every + 1) + " semaine dur\u00E9e du mois"; },
        // starting on the 2nd weekspan of the month
        offset: function (offset) { return "\u00E0 partir de la " + lc$1.suffix(offset + 1) + " semaine dur\u00E9e du mois"; },
        // on the 1st, 2nd, and 3rd weekspan of the month
        oneOf: function (values) { return "les " + lc$1.list(values.map(function (x) { return lc$1.suffix(x + 1); })) + " semaines dur\u00E9e du mois"; }
    },
    ruleLastFullWeekOfMonth: {
        // every 3rd last full week of the month
        every: function (every) { return "chaque " + lc$1.suffix(every) + " dernier complet semaine du mois"; },
        // starting on the 2nd last full week of the month
        offset: function (offset) { return "\u00E0 partir de la " + lc$1.suffix(offset) + " dernier complet semaine du mois"; },
        // on the 1st, 2nd, and 3rd full week of the month
        oneOf: function (values) { return "les " + lc$1.list(values.map(lc$1.suffix)) + " dernier complet semaine du mois"; }
    },
    ruleLastWeekspanOfMonth: {
        // every 3rd last weekspan of the month
        every: function (every) { return "chaque " + lc$1.suffix(every + 1) + " semaine derni\u00E8re dur\u00E9e du mois"; },
        // starting on the 2nd last weekspan of the month
        offset: function (offset) { return "\u00E0 partir du " + (offset + 1) + " derni\u00E8re semaine dur\u00E9e du mois"; },
        // on the 1st, 2nd, and 3rd last weekspan of the month
        oneOf: function (values) { return "les " + lc$1.list(values.map(function (x) { return x.toString(); })) + " la semaine derni\u00E8re dur\u00E9e du mois"; }
    },
    summaryDay: function (short, dayOfWeek, year) { return (dayOfWeek ? (short ? 'ddd ' : 'dddd ') : '') + 'D ' + (short ? 'MMM ' : 'MMMM ') + (year ? 'Y' : ''); },
    summaryWeek: function (short, dayOfWeek, year) { return (dayOfWeek ? (short ? 'ddd ' : 'dddd ') : '') + 'D ' + (short ? 'MMM ' : 'MMMM ') + (year ? 'Y' : ''); },
    summaryMonth: function (short, dayOfWeek, year) { return (short ? 'MMM' : 'MMMM') + (year ? ' YYYY' : ''); },
    summaryYear: function (short, dayOfWeek, year) { return (year ? 'YYYY' : ''); },
    list: function (items) {
        var last = items.length - 1;
        var out = items[0];
        for (var i = 1; i < last; i++) {
            out += ', ' + items[i];
        }
        if (last > 0) {
            out += ' et ' + items[last];
        }
        return out;
    },
    months: [
        ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
        ['janv', 'févr', 'mars', 'avr', 'mai', 'juin', 'juil', 'août', 'sept', 'oct', 'nov', 'déc'],
        ['jan', 'fév', 'mar', 'avr', 'mai', 'jui', 'jui', 'aoû', 'sep', 'oct', 'nov', 'déc'],
        ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']
    ],
    weekdays: [
        ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
        ['dim', 'lun', 'mar', 'mer', 'jeu', 'ven', 'sam'],
        ['dim', 'lun', 'mar', 'mer', 'jeu', 'ven', 'sam'],
        ['di', 'lu', 'ma', 'me', 'je', 've', 'sa'],
    ],
};
Locales.add(['fr', 'fr-ca', 'fr-ch'], lc$1);

// tslint:disable: no-magic-numbers
var unitToWordSingular$1 = {
    millis: 'milliseconde',
    second: 'seconde',
    minute: 'minuut',
    hour: 'uur',
    day: 'dag',
    week: 'week',
    month: 'maand',
    quarter: 'kwartaal',
    year: 'jaar'
};
var unitToWordPlural$1 = {
    millis: 'milliseconden',
    second: 'seconden',
    minute: 'minuten',
    hour: 'uur',
    day: 'dagen',
    week: 'weken',
    month: 'maanden',
    quarter: 'vertrekken',
    year: 'jaar'
};
var lc$2 = {
    weekStartsOn: 1,
    firstWeekContainsDate: 4,
    am: '',
    pm: '',
    formatLT: 'HH:mm',
    formatLTS: 'HH:mm:ss',
    formatL: 'DD-MM-Y',
    formatl: 'D-M-Y',
    formatLL: 'D MMMM Y',
    formatll: 'D MMM Y',
    formatLLL: 'D MMMM Y HH:mm',
    formatlll: 'D MMM Y HH:mm',
    formatLLLL: 'dddd D MMMM Y HH:mm',
    formatllll: 'ddd D MMM Y HH:mm',
    suffix: function (value) {
        return value + 'e';
    },
    identifierTime: function (short) { return short ? 'lll' : 'LLL'; },
    identifierDay: function (short) { return short ? 'll' : 'LL'; },
    identifierWeek: function (short) { return 'wo [week van] Y'; },
    identifierMonth: function (short) { return short ? 'MMM Y' : 'MMMM Y'; },
    identifierQuarter: function (short) { return 'Qo [kwartaal] Y'; },
    identifierYear: function (short) { return 'Y'; },
    patternNone: function () { return "Geen herhaling"; },
    patternDaily: function () { return "Dagelijks"; },
    patternWeekly: function (day) { return "Wekelijks op " + lc$2.weekdays[0][day.day]; },
    patternMonthlyWeek: function (day) { return "Maandelijks op de " + lc$2.suffix(day.weekspanOfMonth + 1) + " " + lc$2.weekdays[0][day.day]; },
    patternAnnually: function (day) { return "Jaarlijks op " + day.dayOfMonth + " " + lc$2.months[0][day.month]; },
    patternAnnuallyMonthWeek: function (day) { return "Jaarlijks op de " + lc$2.suffix(day.weekspanOfMonth + 1) + " " + lc$2.weekdays[0][day.day] + " van " + lc$2.months[0][day.month]; },
    patternWeekday: function () { return 'Iedere werkdag (maandag tot vrijdag)'; },
    patternMonthly: function (day) { return "Maandelijks op de " + lc$2.suffix(day.dayOfMonth); },
    patternLastDay: function () { return "Laatste dag van de maand"; },
    patternLastDayOfMonth: function (day) { return "Laatste dag van " + lc$2.months[0][day.month]; },
    patternLastWeekday: function (day) { return "Laatste " + lc$2.weekdays[0][day.day] + " van " + lc$2.months[0][day.month]; },
    patternCustom: function () { return "Aangepast..."; },
    scheduleStartingOn: function (start) { return "Vanaf " + start.dayOfMonth + " " + lc$2.months[0][start.month] + " " + start.year; },
    scheduleEndingOn: function (end) { return "tot en met " + end.dayOfMonth + " " + lc$2.months[0][end.month] + " " + end.year; },
    scheduleEndsOn: function (end) { return "Tot en met " + end.dayOfMonth + " " + lc$2.months[0][end.month] + " " + end.year; },
    scheduleThing: function (thing, start) { return start
        ? 'Zal het ' + thing + ' plaatsvinden'
        : ' zal het ' + thing + ' plaatsvinden'; },
    scheduleAtTimes: ' om ',
    scheduleDuration: function (duration, unit) { return ' gedurende ' + duration + ' ' + (unit ? (duration !== 1 ? unitToWordPlural$1[unit] : unitToWordSingular$1[unit]) + ' ' : ''); },
    scheduleExcludes: ' met uitzondering van ',
    scheduleIncludes: ' inclusief ',
    scheduleCancels: ' met annuleringen op ',
    ruleDayOfWeek: {
        // every 2nd day of the week
        every: function (every) { return "iedere " + lc$2.suffix(every) + " dag van de week"; },
        // starting on the 5th day of the week
        offset: function (offset) { return "vanaf de " + lc$2.suffix(offset) + " dag van de week"; },
        // on the 1st, 2nd, and 4th day of the week
        oneOf: function (values) { return "op de " + lc$2.list(values.map(lc$2.suffix)) + " dag van de week"; }
    },
    ruleLastDayOfMonth: {
        // every 3rd last day of the month
        every: function (every) { return "iedere " + lc$2.suffix(every) + " laatste dag van de maand"; },
        // starting on the 2nd last day of the month
        offset: function (offset) { return "vanaf de " + lc$2.suffix(offset) + " laatste dag van de maand"; },
        // on the 1st, 2nd, and 3rd last day of the month
        oneOf: function (values) { return "op de " + lc$2.list(values.map(lc$2.suffix)) + " laatste dag van de maand"; }
    },
    ruleDayOfMonth: {
        // every 3rd day of the month
        every: function (every) { return "iedere " + lc$2.suffix(every) + " dag van de maand"; },
        // starting on the 2nd day of the month
        offset: function (offset) { return "vanaf de " + lc$2.suffix(offset) + " dag van de maand"; },
        // on the 1st, 2nd, and 3rd day of the month
        oneOf: function (values) { return "op de " + lc$2.list(values.map(lc$2.suffix)) + " dag van de maand"; }
    },
    ruleDayOfYear: {
        // every 3rd day of the year
        every: function (every) { return "iedere " + lc$2.suffix(every) + " dag van het jaar"; },
        // starting on the 2nd day of the year
        offset: function (offset) { return "vanaf de " + lc$2.suffix(offset + 1) + " dag van het jaar"; },
        // on the 1st, 2nd, and 3rd day of the year
        oneOf: function (values) { return "op de " + lc$2.list(values.map(lc$2.suffix)) + " dag van het jaar"; }
    },
    ruleYear: {
        // every 3rd year
        every: function (every) { return "iedere " + lc$2.suffix(every) + " jaar"; },
        // starting in 2018
        offset: function (offset) { return "vanaf " + offset; },
        // in 2019, 2020, and 2021
        oneOf: function (values) { return "in " + lc$2.list(values.map(function (x) { return x.toString(); })); }
    },
    ruleMonth: {
        // every 3rd month
        every: function (every) { return "iedere " + lc$2.suffix(every) + " maand"; },
        // starting in February
        offset: function (offset) { return "vanaf " + lc$2.months[0][offset]; },
        // in February, May, and June
        oneOf: function (values) { return "in " + lc$2.list(values.map(function (x) { return lc$2.months[0][x]; })); }
    },
    ruleDay: {
        // every 2nd day of the week
        every: function (every) { return "iedere " + lc$2.suffix(every) + " dag van de week"; },
        // starting on Tuesday
        offset: function (offset) { return "vanaf " + lc$2.weekdays[0][offset]; },
        // on Monday, Wednesday, and Friday
        oneOf: function (values) { return "on " + lc$2.list(values.map(function (v) { return lc$2.weekdays[0][v]; })); }
    },
    ruleWeek: {
        // every 3rd week of the year
        every: function (every) { return "iedere " + lc$2.suffix(every) + " week van het jaar"; },
        // starting on the 2nd week of the year
        offset: function (offset) { return "vanaf de " + lc$2.suffix(offset) + " week van het jaar"; },
        // on the 1st, 2nd, and 3rd week of the year
        oneOf: function (values) { return "op de " + lc$2.list(values.map(lc$2.suffix)) + " week van het jaar"; }
    },
    ruleWeekOfYear: {
        // every 3rd week of the year
        every: function (every) { return "iedere " + lc$2.suffix(every) + " week van het jaar"; },
        // starting on the 2nd week of the year
        offset: function (offset) { return "vanaf de " + lc$2.suffix(offset) + " week van het jaar"; },
        // on the 1st, 2nd, and 3rd week of the year
        oneOf: function (values) { return "op de " + lc$2.list(values.map(lc$2.suffix)) + " week van het jaar"; }
    },
    ruleWeekspanOfYear: {
        // every 3rd weekspan of the year
        every: function (every) { return "iedere " + lc$2.suffix(every + 1) + " weekspanne van het jaar"; },
        // starting on the 2nd weekspan of the year
        offset: function (offset) { return "vanaf de " + lc$2.suffix(offset + 1) + " weekspanne van het jaar"; },
        // on the 1st, 2nd, and 3rd weekspan of the year
        oneOf: function (values) { return "op de " + lc$2.list(values.map(function (x) { return lc$2.suffix(x + 1); })) + " weekspanne van het jaar"; }
    },
    ruleFullWeekOfYear: {
        // every 3rd full week of the year
        every: function (every) { return "iedere " + lc$2.suffix(every) + " hele week van het jaar"; },
        // starting on the 2nd full week of the year
        offset: function (offset) { return "vanaf de " + lc$2.suffix(offset) + " hele week van het jaar"; },
        // on the 1st, 2nd, and 3rd full week of the year
        oneOf: function (values) { return "op de " + lc$2.list(values.map(lc$2.suffix)) + " hele week van het jaar"; }
    },
    ruleLastWeekspanOfYear: {
        // every 3rd last weekspan of the year
        every: function (every) { return "iedere " + lc$2.suffix(every + 1) + " laatste weekspanne van het jaar"; },
        // starting on the 2nd last weekspan of the year
        offset: function (offset) { return "vanaf de " + lc$2.suffix(offset + 1) + " laatste weekspanne van het jaar"; },
        // on the 1st, 2nd, and 3rd last weekspan of the year
        oneOf: function (values) { return "op de " + lc$2.list(values.map(function (x) { return lc$2.suffix(x + 1); })) + " last weekspan van het jaar"; }
    },
    ruleLastFullWeekOfYear: {
        // every 3rd last full week of the year
        every: function (every) { return "iedere " + lc$2.suffix(every) + " laatste hele week van het jaar"; },
        // starting on the 2nd last full week of the year
        offset: function (offset) { return "vanaf de " + lc$2.suffix(offset) + " laatste hele week van het jaar"; },
        // on the 1st, 2nd, and 3rd last full week of the year
        oneOf: function (values) { return "op de " + lc$2.list(values.map(lc$2.suffix)) + " laatste hele week van het jaar"; }
    },
    ruleWeekOfMonth: {
        // every 3rd week of the month
        every: function (every) { return "iedere " + lc$2.suffix(every) + " week van de maand"; },
        // starting on the 2nd week of the month
        offset: function (offset) { return "vanaf de " + lc$2.suffix(offset) + " week van de maand"; },
        // on the 1st, 2nd, and 3rd week of the month
        oneOf: function (values) { return "op de " + lc$2.list(values.map(lc$2.suffix)) + " week van de maand"; }
    },
    ruleFullWeekOfMonth: {
        // every 3rd full week of the month
        every: function (every) { return "iedere " + lc$2.suffix(every) + " hele week van de maand"; },
        // starting on the 2nd full week of the month
        offset: function (offset) { return "vanaf de " + lc$2.suffix(offset) + " hele week van de maand"; },
        // on the 1st, 2nd, and 3rd full week of the month
        oneOf: function (values) { return "op de " + lc$2.list(values.map(lc$2.suffix)) + " hele week van de maand"; }
    },
    ruleWeekspanOfMonth: {
        // every 3rd weekspan of the month
        every: function (every) { return "iedere " + lc$2.suffix(every + 1) + " weekspanne van de maand"; },
        // starting on the 2nd weekspan of the month
        offset: function (offset) { return "vanaf de " + lc$2.suffix(offset + 1) + " weekspanne van de maand"; },
        // on the 1st, 2nd, and 3rd weekspan of the month
        oneOf: function (values) { return "op de " + lc$2.list(values.map(function (x) { return lc$2.suffix(x + 1); })) + " weekspanne van de maand"; }
    },
    ruleLastFullWeekOfMonth: {
        // every 3rd last full week of the month
        every: function (every) { return "iedere " + lc$2.suffix(every) + " laatste hele week van de maand"; },
        // starting on the 2nd last full week of the month
        offset: function (offset) { return "vanaf de " + lc$2.suffix(offset) + " laatste hele week van de maand"; },
        // on the 1st, 2nd, and 3rd full week of the month
        oneOf: function (values) { return "op de " + lc$2.list(values.map(lc$2.suffix)) + " laatste hele week van de maand"; }
    },
    ruleLastWeekspanOfMonth: {
        // every 3rd last weekspan of the month
        every: function (every) { return "iedere " + lc$2.suffix(every + 1) + " laatste weekspanne van de maand"; },
        // starting on the 2nd last weekspan of the month
        offset: function (offset) { return "vanaf de " + lc$2.suffix(offset + 1) + " laatste weekspanne van de maand"; },
        // on the 1st, 2nd, and 3rd last weekspan of the month
        oneOf: function (values) { return "op de " + lc$2.list(values.map(function (x) { return lc$2.suffix(x + 1); })) + " last weekspanne van de maand"; }
    },
    summaryDay: function (short, dayOfWeek, year) { return (dayOfWeek ? (short ? 'ddd ' : 'dddd ') : '') + 'D ' + (short ? 'MMM ' : 'MMMM ') + (year ? 'Y' : ''); },
    summaryWeek: function (short, dayOfWeek, year) { return (dayOfWeek ? (short ? 'ddd ' : 'dddd ') : '') + 'D ' + (short ? 'MMM ' : 'MMMM ') + (year ? 'Y' : ''); },
    summaryMonth: function (short, dayOfWeek, year) { return (short ? 'MMM' : 'MMMM') + (year ? ' YYYY' : ''); },
    summaryYear: function (short, dayOfWeek, year) { return (year ? 'YYYY' : ''); },
    list: function (items) {
        var last = items.length - 1;
        var out = items[0];
        for (var i = 1; i < last; i++) {
            out += ', ' + items[i];
        }
        if (last > 0) {
            out += ' en ' + items[last];
        }
        return out;
    },
    months: [
        ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'],
        ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sept', 'okt', 'nov', 'dec'],
        ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sept', 'okt', 'nov', 'dec'],
        ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']
    ],
    weekdays: [
        ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'],
        ['zon', 'maan', 'din', 'woen', 'don', 'vrij', 'zat'],
        ['zon', 'maa', 'din', 'woe', 'don', 'vrij', 'zat'],
        ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'],
    ],
};
Locales.add(['nl', 'nl-be'], lc$2);

// tslint:disable: no-magic-numbers
var unitToWordSingular$2 = {
    millis: 'Millisekunde',
    second: 'Sekunde',
    minute: 'Minute',
    hour: 'Stunde',
    day: 'Tag',
    week: 'Woche',
    month: 'Monat',
    quarter: 'Quartal',
    year: 'Jahr'
};
var unitToWordPlural$2 = {
    millis: 'Millisekunden',
    second: 'Sekunden',
    minute: 'Minuten',
    hour: 'Stunden',
    day: 'Tage',
    week: 'Wochen',
    month: 'Monate',
    quarter: 'Viertel',
    year: 'Jahre'
};
var de = {
    weekStartsOn: 1,
    firstWeekContainsDate: 4,
    suffix: function (value) { return value + '.'; },
    am: '',
    pm: '',
    formatLT: 'HH:mm',
    formatLTS: 'HH:mm:ss',
    formatL: 'DD.MM.Y',
    formatl: 'D.M.Y',
    formatLL: 'D. MMMM Y',
    formatll: 'D. MMM Y',
    formatLLL: 'D. MMMM Y HH:mm',
    formatlll: 'D. MMM Y HH:mm',
    formatLLLL: 'dddd, D. MMMM Y HH:mm',
    formatllll: 'ddd, D. MMM Y HH:mm',
    identifierTime: function (short) { return short ? 'lll' : 'LLL'; },
    identifierDay: function (short) { return short ? 'll' : 'LL'; },
    identifierWeek: function (short) { return 'wo [Woche in] Y'; },
    identifierMonth: function (short) { return short ? 'MMM Y' : 'MMMM Y'; },
    identifierQuarter: function (short) { return 'Qo [Quartal] Y'; },
    identifierYear: function (short) { return 'Y'; },
    patternNone: function () { return "Nicht wiederholend"; },
    patternDaily: function () { return "T\u00E4glich"; },
    patternWeekly: function (day) { return "W\u00F6chentlich am " + de.weekdays[0][day.day]; },
    patternMonthlyWeek: function (day) { return "Monatlich am " + (day.weekspanOfMonth + 1) + ". " + de.weekdays[0][day.day]; },
    patternAnnually: function (day) { return "J\u00E4hrlich am " + day.dayOfMonth + ". " + de.months[0][day.month]; },
    patternAnnuallyMonthWeek: function (day) { return "J\u00E4hrlich am " + (day.weekspanOfMonth + 1) + ". " + de.weekdays[0][day.day] + " im " + de.months[0][day.month]; },
    patternWeekday: function () { return 'Jeden Werktag (Montag bis Freitag)'; },
    patternMonthly: function (day) { return "Monatlich am " + day.dayOfMonth + ". Tag"; },
    patternLastDay: function () { return "Am letzten Tag im Monat"; },
    patternLastDayOfMonth: function (day) { return "Am letzten Tag im " + de.months[0][day.month]; },
    patternLastWeekday: function (day) { return "Am letzten " + de.weekdays[0][day.day] + " im " + de.months[0][day.month]; },
    patternCustom: function () { return "Benutzerdefiniert..."; },
    scheduleStartingOn: function (start) { return "Startend am " + Functions.padNumber(start.dayOfMonth, 2) + ". " + de.months[0][start.month] + " " + start.year; },
    scheduleEndingOn: function (end) { return "und endend am " + Functions.padNumber(end.dayOfMonth, 2) + ". " + de.months[0][end.month] + " " + end.year; },
    scheduleEndsOn: function (end) { return "Bis zum " + Functions.padNumber(end.dayOfMonth, 2) + ". " + de.months[0][end.month] + " " + end.year; },
    scheduleThing: function (thing, start) { return start
        ? 'Wird das ' + thing + ' stattfinden'
        : ' wird das ' + thing + ' stattfinden'; },
    scheduleAtTimes: ' um ',
    scheduleDuration: function (duration, unit) { return ' mit einer Dauer von ' + duration + ' ' + (unit ? (duration !== 1 ? unitToWordPlural$2[unit] : unitToWordSingular$2[unit]) + ' ' : ''); },
    scheduleExcludes: ' mit Ausnahme vom ',
    scheduleIncludes: ' mit Einnahme vom ',
    scheduleCancels: ' mit einer Aussetzung am ',
    ruleDayOfWeek: {
        // jeden 2nd Tag der Woche
        every: function (every) { return "jeden " + de.suffix(every) + " Tag der Woche"; },
        // startend am the 5th Tag der Woche
        offset: function (offset) { return "startend am the " + de.suffix(offset) + " Tag der Woche"; },
        // am 1st, 2nd, and 4th Tag der Woche
        oneOf: function (values) { return "am " + de.list(values.map(de.suffix)) + " Tag der Woche"; }
    },
    ruleLastDayOfMonth: {
        // jeden 3rd letzten Tag des Monats
        every: function (every) { return "jeden " + de.suffix(every) + " letzten Tag des Monats"; },
        // startend am the 2nd letzten Tag des Monats
        offset: function (offset) { return "startend am the " + de.suffix(offset) + " letzten Tag des Monats"; },
        // am 1st, 2nd, and 3rd letzten Tag des Monats
        oneOf: function (values) { return "am " + de.list(values.map(de.suffix)) + " letzten Tag des Monats"; }
    },
    ruleDayOfMonth: {
        // jeden 3rd Tag des Monats
        every: function (every) { return "jeden " + de.suffix(every) + " Tag des Monats"; },
        // startend am the 2nd Tag des Monats
        offset: function (offset) { return "startend am the " + de.suffix(offset) + " Tag des Monats"; },
        // am 1st, 2nd, and 3rd Tag des Monats
        oneOf: function (values) { return "am " + de.list(values.map(de.suffix)) + " Tag des Monats"; }
    },
    ruleDayOfYear: {
        // jeden 3rd Tag des Jahres
        every: function (every) { return "jeden " + de.suffix(every) + " Tag des Jahres"; },
        // startend am the 2nd Tag des Jahres
        offset: function (offset) { return "startend am the " + de.suffix(offset + 1) + " Tag des Jahres"; },
        // am 1st, 2nd, and 3rd Tag des Jahres
        oneOf: function (values) { return "am " + de.list(values.map(de.suffix)) + " Tag des Jahres"; }
    },
    ruleYear: {
        // jeden 3rd year
        every: function (every) { return "jeden " + de.suffix(every) + " Jahr"; },
        // startend in 2018
        offset: function (offset) { return "startend in " + offset; },
        // in 2019, 2020, and 2021
        oneOf: function (values) { return "in " + de.list(values.map(function (x) { return x.toString(); })); }
    },
    ruleMonth: {
        // jeden 3rd month
        every: function (every) { return "jeden " + de.suffix(every) + " Monat"; },
        // startend in Februar
        offset: function (offset) { return "startend in " + de.months[0][offset]; },
        // in Februar, Mai, and Juni
        oneOf: function (values) { return "in " + de.list(values.map(function (x) { return de.months[0][x]; })); }
    },
    ruleDay: {
        // jeden 2nd Tag der Woche
        every: function (every) { return "jeden " + de.suffix(every) + " Tag der Woche"; },
        // startend am Tuesday
        offset: function (offset) { return "startend am " + de.weekdays[0][offset]; },
        // on Monday, Wednesday, and Friday
        oneOf: function (values) { return "on " + de.list(values.map(function (v) { return de.weekdays[0][v]; })); }
    },
    ruleWeek: {
        // jeden 3rd Woche des Jahres
        every: function (every) { return "jeden " + de.suffix(every) + " Woche des Jahres"; },
        // startend am the 2nd Woche des Jahres
        offset: function (offset) { return "startend am the " + de.suffix(offset) + " Woche des Jahres"; },
        // am 1st, 2nd, and 3rd Woche des Jahres
        oneOf: function (values) { return "am " + de.list(values.map(de.suffix)) + " Woche des Jahres"; }
    },
    ruleWeekOfYear: {
        // jeden 3rd Woche des Jahres
        every: function (every) { return "jeden " + de.suffix(every) + " Woche des Jahres"; },
        // startend am the 2nd Woche des Jahres
        offset: function (offset) { return "startend am the " + de.suffix(offset) + " Woche des Jahres"; },
        // am 1st, 2nd, and 3rd Woche des Jahres
        oneOf: function (values) { return "am " + de.list(values.map(de.suffix)) + " Woche des Jahres"; }
    },
    ruleWeekspanOfYear: {
        // jeden 3rd Wochenspanne des Jahres
        every: function (every) { return "jeden " + de.suffix(every + 1) + " Wochenspanne des Jahres"; },
        // startend am the 2nd Wochenspanne des Jahres
        offset: function (offset) { return "startend am the " + de.suffix(offset + 1) + " Wochenspanne des Jahres"; },
        // am 1st, 2nd, and 3rd Wochenspanne des Jahres
        oneOf: function (values) { return "am " + de.list(values.map(function (x) { return de.suffix(x + 1); })) + " Wochenspanne des Jahres"; }
    },
    ruleFullWeekOfYear: {
        // jeden 3rd vollen Woche des Jahres
        every: function (every) { return "jeden " + de.suffix(every) + " vollen Woche des Jahres"; },
        // startend am the 2nd vollen Woche des Jahres
        offset: function (offset) { return "startend am the " + de.suffix(offset) + " vollen Woche des Jahres"; },
        // am 1st, 2nd, and 3rd vollen Woche des Jahres
        oneOf: function (values) { return "am " + de.list(values.map(de.suffix)) + " vollen Woche des Jahres"; }
    },
    ruleLastWeekspanOfYear: {
        // jeden 3rd last Wochenspanne des Jahres
        every: function (every) { return "jeden " + de.suffix(every + 1) + " last Wochenspanne des Jahres"; },
        // startend am the 2nd last Wochenspanne des Jahres
        offset: function (offset) { return "startend am the " + de.suffix(offset + 1) + " last Wochenspanne des Jahres"; },
        // am 1st, 2nd, and 3rd last Wochenspanne des Jahres
        oneOf: function (values) { return "am " + de.list(values.map(function (x) { return de.suffix(x + 1); })) + " last Wochenspanne des Jahres"; }
    },
    ruleLastFullWeekOfYear: {
        // jeden 3rd letzte volle Woche des Jahres
        every: function (every) { return "jeden " + de.suffix(every) + " letzte volle Woche des Jahres"; },
        // startend am the 2nd letzte volle Woche des Jahres
        offset: function (offset) { return "startend am the " + de.suffix(offset) + " letzte volle Woche des Jahres"; },
        // am 1st, 2nd, and 3rd letzte volle Woche des Jahres
        oneOf: function (values) { return "am " + de.list(values.map(de.suffix)) + " letzte volle Woche des Jahres"; }
    },
    ruleWeekOfMonth: {
        // jeden 3rd week des Monats
        every: function (every) { return "jeden " + de.suffix(every) + " Woche des Monats"; },
        // startend am the 2nd week des Monats
        offset: function (offset) { return "startend am the " + de.suffix(offset) + " Woche des Monats"; },
        // am 1st, 2nd, and 3rd week des Monats
        oneOf: function (values) { return "am " + de.list(values.map(de.suffix)) + " Woche des Monats"; }
    },
    ruleFullWeekOfMonth: {
        // jeden 3rd vollen Woche des Monats
        every: function (every) { return "jeden " + de.suffix(every) + " vollen Woche des Monats"; },
        // startend am the 2nd vollen Woche des Monats
        offset: function (offset) { return "startend am the " + de.suffix(offset) + " vollen Woche des Monats"; },
        // am 1st, 2nd, and 3rd vollen Woche des Monats
        oneOf: function (values) { return "am " + de.list(values.map(de.suffix)) + " vollen Woche des Monats"; }
    },
    ruleWeekspanOfMonth: {
        // jeden 3rd weekspan des Monats
        every: function (every) { return "jeden " + de.suffix(every + 1) + " Wochenspanne des Monats"; },
        // startend am the 2nd weekspan des Monats
        offset: function (offset) { return "startend am the " + de.suffix(offset + 1) + " Wochenspanne des Monats"; },
        // am 1st, 2nd, and 3rd weekspan des Monats
        oneOf: function (values) { return "am " + de.list(values.map(function (x) { return de.suffix(x + 1); })) + " Wochenspanne des Monats"; }
    },
    ruleLastFullWeekOfMonth: {
        // jeden 3rd letzte volle week des Monats
        every: function (every) { return "jeden " + de.suffix(every) + " letzte volle week des Monats"; },
        // startend am the 2nd letzte volle week des Monats
        offset: function (offset) { return "startend am the " + de.suffix(offset) + " letzte volle week des Monats"; },
        // am 1st, 2nd, and 3rd vollen Woche des Monats
        oneOf: function (values) { return "am " + de.list(values.map(de.suffix)) + " letzte volle week des Monats"; }
    },
    ruleLastWeekspanOfMonth: {
        // jeden 3rd letzten Wochenspanne des Monats
        every: function (every) { return "jeden " + de.suffix(every + 1) + " letzten Wochenspanne des Monats"; },
        // startend am the 2nd letzten Wochenspanne des Monats
        offset: function (offset) { return "startend am the " + de.suffix(offset + 1) + " letzten Wochenspanne des Monats"; },
        // am 1st, 2nd, and 3rd letzten Wochenspanne des Monats
        oneOf: function (values) { return "am " + de.list(values.map(function (x) { return de.suffix(x + 1); })) + " letzten Wochenspanne des Monats"; }
    },
    summaryDay: function (short, dayOfWeek, year) { return (dayOfWeek ? (short ? 'ddd, ' : 'dddd, ') : '') + (short ? 'MMM ' : 'MMMM ') + 'Do' + (year ? ' Y' : ''); },
    summaryWeek: function (short, dayOfWeek, year) { return (dayOfWeek ? (short ? 'ddd, ' : 'dddd, ') : '') + (short ? 'MMM ' : 'MMMM ') + 'Do' + (year ? ' Y' : ''); },
    summaryMonth: function (short, dayOfWeek, year) { return (short ? 'MMM' : 'MMMM') + (year ? ' YYYY' : ''); },
    summaryYear: function (short, dayOfWeek, year) { return (year ? 'YYYY' : ''); },
    list: function (items) {
        var last = items.length - 1;
        var out = items[0];
        for (var i = 1; i < last; i++) {
            out += ', ' + items[i];
        }
        if (last > 0) {
            out += ' und ' + items[last];
        }
        return out;
    },
    months: [
        ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
        ['Jan', 'Feb', 'Mrz', 'Apr', 'Mai', 'Juni', 'Juli', 'Aug', 'Sept', 'Okt', 'Nov', 'Dez'],
        ['Jan', 'Feb', 'Mrz', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
        ['J', 'F', 'Mä', 'A', 'Ma', 'Ju', 'Jl', 'Ag', 'S', 'O', 'N', 'D']
    ],
    weekdays: [
        ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
        ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
        ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
        ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
    ],
};
Locales.add(['de', 'de-at', 'de-de', 'de-li', 'de-lu', 'de-ch'], de);

// tslint:disable: no-magic-numbers
var deAt = __assign(__assign({}, de), { months: [
        ['Jänner', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktoboer', 'November', 'Dezember'],
        ['Jän', 'Feb', 'Mrz', 'Apr', 'Mai', 'Juni', 'Juli', 'Aug', 'Sept', 'Okt', 'Nov', 'Dez'],
        ['Jän', 'Feb', 'Mrz', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
        ['J', 'F', 'Mä', 'A', 'Ma', 'Ju', 'Jl', 'Ag', 'S', 'O', 'N', 'D']
    ] });
Locales.add('de-at', deAt);

exports.Calendar = Calendar;
exports.CalendarDay = CalendarDay;
exports.CalendarEvent = CalendarEvent;
exports.Constants = Constants;
exports.Day = Day;
exports.DayFormat = DayFormat;
exports.DaySpan = DaySpan;
exports.Event = Event;
exports.Format = Format;
exports.Functions = Functions;
exports.Identifier = Identifier;
exports.Locales = Locales;
exports.Month = Month;
exports.Parse = Parse;
exports.Pattern = Pattern;
exports.PatternMap = PatternMap;
exports.Patterns = Patterns;
exports.Ref = Ref;
exports.Schedule = Schedule;
exports.ScheduleModifier = ScheduleModifier;
exports.Sorts = Sorts;
exports.Time = Time;
exports.TimeFormat = TimeFormat;
exports.Weekday = Weekday;
exports.de = de;
exports.deAt = deAt;
exports.en = lc;
exports.fr = lc$1;
exports.nl = lc$2;
exports.operate = operate;
//# sourceMappingURL=dayspan.js.map
