"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var os_1 = require("os");
var colorette_1 = require("colorette");
var SEAT_COLOR_MAP = {
    'W': colorette_1.green,
    'A': colorette_1.blue,
    'M': colorette_1.red,
};
var LEGEND = [
    colorette_1.green('■') + " Window",
    colorette_1.red('■') + " Middle",
    colorette_1.blue('■') + " Aisle",
    colorette_1.yellow('■') + " Empty",
];
function buildSeatMapping(seatConfig) {
    var seats = {};
    var rows = seatConfig.map(function (_) { return _[1]; });
    for (var rowIndex = 0, rowLength = rows.length; rowIndex < rowLength; rowIndex++) {
        for (var colIndex = 0, length_1 = seatConfig.length; colIndex < length_1; colIndex++) {
            if (rowIndex < seatConfig[colIndex][1]) {
                var columnSeatMap = seatConfig[colIndex];
                var columns = columnSeatMap[0];
                for (var innerColIndex = 0, colLength = columns; innerColIndex < colLength; innerColIndex++) {
                    var seatType = void 0;
                    if (colIndex === 0) {
                        // Left edge.
                        if (innerColIndex === 0) {
                            seatType = 'W';
                        }
                        else if (innerColIndex === colLength - 1) {
                            seatType = 'A';
                        }
                        else {
                            seatType = 'M';
                        }
                    }
                    else if (colIndex === length_1 - 1) {
                        // Right edge.
                        if (innerColIndex === 0) {
                            seatType = 'A';
                        }
                        else if (innerColIndex === colLength - 1) {
                            seatType = 'W';
                        }
                        else {
                            seatType = 'M';
                        }
                    }
                    else {
                        // Middle.
                        if (innerColIndex === 0 || innerColIndex === colLength - 1) {
                            seatType = 'A';
                        }
                        else {
                            seatType = 'M';
                        }
                    }
                    seats[colIndex + "_" + innerColIndex + "_" + rowIndex] = seatType;
                }
            }
        }
    }
    return seats;
}
exports.buildSeatMapping = buildSeatMapping;
function filterSeats(seatMap, seatType) {
    return Object.entries(seatMap).filter(function (_) { return _[1] === seatType; });
}
exports.filterSeats = filterSeats;
function assignSeats(seatMap, passengerCount, priority) {
    if (priority === void 0) { priority = ['A', 'W', 'M']; }
    var assignmentMap = {};
    var order = [];
    priority.forEach(function (priority) {
        order = order.concat(filterSeats(seatMap, priority));
    });
    order.slice(0, passengerCount).forEach(function (item, index) {
        assignmentMap[item[0]] = {
            seatType: seatMap[item[0]],
            passengerNumber: index,
        };
    });
    return assignmentMap;
}
exports.assignSeats = assignSeats;
function printSeatAssignments(seatConfig, assignmentMap) {
    console.log(os_1.EOL + "\uD83E\uDC51 Cockpit This Way \uD83E\uDC51" + os_1.EOL);
    var rows = seatConfig.map(function (_) { return _[1]; });
    for (var rowIndex = 0, rowLength = rows.length; rowIndex < rowLength; rowIndex++) {
        var row = [];
        for (var colIndex = 0, length_2 = seatConfig.length; colIndex < length_2; colIndex++) {
            var columnSeatMap = seatConfig[colIndex];
            var columns = columnSeatMap[0];
            if (rowIndex < seatConfig[colIndex][1]) {
                for (var innerColIndex = 0, colLength = columns; innerColIndex < colLength; innerColIndex++) {
                    var seatKey = colIndex + "_" + innerColIndex + "_" + rowIndex;
                    var seat = assignmentMap[seatKey];
                    if (seat) {
                        row.push(SEAT_COLOR_MAP[seat.seatType]((seat.passengerNumber + 1).toString().padStart(2)));
                    }
                    else {
                        row.push(colorette_1.yellow('■'.padStart(2)));
                    }
                }
            }
            else {
                row.push('——|'.repeat(columns));
            }
            row.push('    ');
        }
        console.log(row.map(function (r) {
            if (r.endsWith('|')) {
                return r.slice(0, r.length - 1);
            }
            return r;
        }).join('|'));
    }
    console.log("" + os_1.EOL + colorette_1.bold('Legend'));
    console.log(LEGEND.join('\t'));
    console.log(os_1.EOL);
}
exports.printSeatAssignments = printSeatAssignments;
// If run as CLI.
/* istanbul ignore next */
if (!module.parent) {
    var args = process.argv;
    if (args.length !== 4) {
        console.error("Usage: node index.js <seat_layout> <passengers_count>" + os_1.EOL + "Example: node index.js \"[[3,2],[4,3],[2,3],[3,4]]\" \"30\"");
        process.exit(1);
    }
    try {
        var seatConfig = JSON.parse(args[2]);
        var passengerCount = parseInt(args[3], 10);
        if (typeof passengerCount !== "number" || isNaN(passengerCount)) {
            throw new TypeError();
        }
        var seatMap = buildSeatMapping(seatConfig);
        var assignmentMap = assignSeats(seatMap, passengerCount);
        printSeatAssignments(seatConfig, assignmentMap);
    }
    catch (err) {
        if (err instanceof SyntaxError) {
            console.error('Error parsing seat layout configuration. Please make sure it is valid JSON!');
        }
        else if (err instanceof TypeError) {
            console.error('Invalid passenger count. Please make sure it is a valid integer!');
        }
        else {
            console.error(err);
        }
        process.exit(1);
    }
}
