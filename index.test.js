"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tape_1 = __importDefault(require("tape"));
var test_console_1 = require("test-console");
var index_1 = require("./index");
tape_1.default('👩🏽‍🔬 buildSeatMapping() — should build a seat map for a given layout config.', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        t.plan(2);
        // Use fixture straight from the problem statement.
        t.deepEquals(index_1.buildSeatMapping([[3, 2], [4, 3], [2, 3], [3, 4]]), {
            '0_0_0': 'W',
            '0_1_0': 'M',
            '0_2_0': 'A',
            '1_0_0': 'A',
            '1_1_0': 'M',
            '1_2_0': 'M',
            '1_3_0': 'A',
            '2_0_0': 'A',
            '2_1_0': 'A',
            '3_0_0': 'A',
            '3_1_0': 'M',
            '3_2_0': 'W',
            '0_0_1': 'W',
            '0_1_1': 'M',
            '0_2_1': 'A',
            '1_0_1': 'A',
            '1_1_1': 'M',
            '1_2_1': 'M',
            '1_3_1': 'A',
            '2_0_1': 'A',
            '2_1_1': 'A',
            '3_0_1': 'A',
            '3_1_1': 'M',
            '3_2_1': 'W',
            '1_0_2': 'A',
            '1_1_2': 'M',
            '1_2_2': 'M',
            '1_3_2': 'A',
            '2_0_2': 'A',
            '2_1_2': 'A',
            '3_0_2': 'A',
            '3_1_2': 'M',
            '3_2_2': 'W',
            '3_0_3': 'A',
            '3_1_3': 'M',
            '3_2_3': 'W'
        }, 'should build the seat mapping correctly for the layout config from the original problem statement.');
        t.deepEquals(index_1.buildSeatMapping([[1, 2], [3, 2]]), {
            '0_0_0': 'W',
            '1_0_0': 'A',
            '1_1_0': 'M',
            '1_2_0': 'W',
            '0_0_1': 'W',
            '1_0_1': 'A',
            '1_1_1': 'M',
            '1_2_1': 'W'
        }, 'should build the seat mapping correctly for another layout config.');
        t.end();
        return [2 /*return*/];
    });
}); });
tape_1.default('👩🏽‍🔬 filterSeats() — should return seats of given type.', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        t.plan(2);
        t.deepEquals(index_1.filterSeats({}, 'A'), [], 'should not error out for an empty seat map.');
        t.deepEquals(index_1.filterSeats({
            '0_0_0': 'W',
            '0_1_0': 'M',
            '0_2_0': 'A',
        }, 'W'), [['0_0_0', 'W']], 'should correctly return the filtered seats.');
        t.end();
        return [2 /*return*/];
    });
}); });
tape_1.default('👩🏽‍🔬 assignSeats() — should return a seat assignment map for the given seat map and passenger count.', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        t.plan(2);
        t.deepEquals(index_1.assignSeats({
            '0_0_0': 'W',
            '0_1_0': 'M',
            '0_2_0': 'A',
            '1_0_0': 'A',
            '1_1_0': 'M',
            '1_2_0': 'M',
            '1_3_0': 'A',
            '2_0_0': 'A',
            '2_1_0': 'A',
            '3_0_0': 'A',
            '3_1_0': 'M',
            '3_2_0': 'W',
            '0_0_1': 'W',
            '0_1_1': 'M',
            '0_2_1': 'A',
            '1_0_1': 'A',
            '1_1_1': 'M',
            '1_2_1': 'M',
            '1_3_1': 'A',
            '2_0_1': 'A',
            '2_1_1': 'A',
            '3_0_1': 'A',
            '3_1_1': 'M',
            '3_2_1': 'W',
            '1_0_2': 'A',
            '1_1_2': 'M',
            '1_2_2': 'M',
            '1_3_2': 'A',
            '2_0_2': 'A',
            '2_1_2': 'A',
            '3_0_2': 'A',
            '3_1_2': 'M',
            '3_2_2': 'W',
            '3_0_3': 'A',
            '3_1_3': 'M',
            '3_2_3': 'W'
        }, 30), {
            '0_2_0': {
                seatType: 'A',
                passengerNumber: 0
            },
            '1_0_0': {
                seatType: 'A',
                passengerNumber: 1
            },
            '1_3_0': {
                seatType: 'A',
                passengerNumber: 2
            },
            '2_0_0': {
                seatType: 'A',
                passengerNumber: 3
            },
            '2_1_0': {
                seatType: 'A',
                passengerNumber: 4
            },
            '3_0_0': {
                seatType: 'A',
                passengerNumber: 5
            },
            '0_2_1': {
                seatType: 'A',
                passengerNumber: 6
            },
            '1_0_1': {
                seatType: 'A',
                passengerNumber: 7
            },
            '1_3_1': {
                seatType: 'A',
                passengerNumber: 8
            },
            '2_0_1': {
                seatType: 'A',
                passengerNumber: 9
            },
            '2_1_1': {
                seatType: 'A',
                passengerNumber: 10
            },
            '3_0_1': {
                seatType: 'A',
                passengerNumber: 11
            },
            '1_0_2': {
                seatType: 'A',
                passengerNumber: 12
            },
            '1_3_2': {
                seatType: 'A',
                passengerNumber: 13
            },
            '2_0_2': {
                seatType: 'A',
                passengerNumber: 14
            },
            '2_1_2': {
                seatType: 'A',
                passengerNumber: 15
            },
            '3_0_2': {
                seatType: 'A',
                passengerNumber: 16
            },
            '3_0_3': {
                seatType: 'A',
                passengerNumber: 17
            },
            '0_0_0': {
                seatType: 'W',
                passengerNumber: 18
            },
            '3_2_0': {
                seatType: 'W',
                passengerNumber: 19
            },
            '0_0_1': {
                seatType: 'W',
                passengerNumber: 20
            },
            '3_2_1': {
                seatType: 'W',
                passengerNumber: 21
            },
            '3_2_2': {
                seatType: 'W',
                passengerNumber: 22
            },
            '3_2_3': {
                seatType: 'W',
                passengerNumber: 23
            },
            '0_1_0': {
                seatType: 'M',
                passengerNumber: 24
            },
            '1_1_0': {
                seatType: 'M',
                passengerNumber: 25
            },
            '1_2_0': {
                seatType: 'M',
                passengerNumber: 26
            },
            '3_1_0': {
                seatType: 'M',
                passengerNumber: 27
            },
            '0_1_1': {
                seatType: 'M',
                passengerNumber: 28
            },
            '1_1_1': {
                seatType: 'M',
                passengerNumber: 29
            }
        }, 'should correctly assign passengers for the seat mapping from the original problem statement.');
        t.deepEquals(index_1.assignSeats({
            '0_0_0': 'W',
            '1_0_0': 'A',
            '1_1_0': 'M',
            '1_2_0': 'W',
            '0_0_1': 'W',
            '1_0_1': 'A',
            '1_1_1': 'M',
            '1_2_1': 'W'
        }, 5, ['M', 'A', 'W']), {
            '1_1_0': {
                seatType: 'M',
                passengerNumber: 0
            },
            '1_1_1': {
                seatType: 'M',
                passengerNumber: 1
            },
            '1_0_0': {
                seatType: 'A',
                passengerNumber: 2
            },
            '1_0_1': {
                seatType: 'A',
                passengerNumber: 3
            },
            '0_0_0': {
                seatType: 'W',
                passengerNumber: 4
            }
        }, 'should correctly assign passengers for another seat mapping with a custom priority.');
        t.end();
        return [2 /*return*/];
    });
}); });
tape_1.default('👩🏽‍🔬 printSeatAssignments() — should print the seat assignment nicely.', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var seatConfig, seatMap, assignmentMap, output;
    return __generator(this, function (_a) {
        seatConfig = [[3, 2], [4, 3], [2, 3], [3, 4]];
        seatMap = index_1.buildSeatMapping(seatConfig);
        assignmentMap = index_1.assignSeats(seatMap, 30);
        output = test_console_1.stdout.inspectSync(function () {
            index_1.printSeatAssignments(seatConfig, assignmentMap);
        });
        // These tests assume the output has colors turned off (see `NO_COLOR` environment variable).
        t.equals(output[1], '19|25| 1|    | 2|26|27| 3|    | 4| 5|    | 6|28|20|    \n', 'should be correct.');
        t.equals(output[2], '21|29| 7|    | 8|30| ■| 9|    |10|11|    |12| ■|22|    \n', 'should be correct.');
        t.equals(output[3], '——|——|——|    |13| ■| ■|14|    |15|16|    |17| ■|23|    \n', 'should be correct.');
        t.equals(output[4], '——|——|——|    |——|——|——|——|    |——|——|    |18| ■|24|    \n', 'should be correct.');
        t.end();
        return [2 /*return*/];
    });
}); });
