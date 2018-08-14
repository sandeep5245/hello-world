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
function idMaker() {
    var index;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                index = 0;
                _a.label = 1;
            case 1:
                if (!(index < 3)) return [3 /*break*/, 3];
                return [4 /*yield*/, index++];
            case 2:
                _a.sent();
                return [3 /*break*/, 1];
            case 3: return [2 /*return*/];
        }
    });
}
var gen = idMaker();
for (var _i = 0, gen_1 = gen; _i < gen_1.length; _i++) {
    var obj = gen_1[_i];
    console.log(obj);
}
//   console.log(gen.next()); // { value: 0, done: false }
//   console.log(gen.next()); // { value: 1, done: false }
//   console.log(gen.next()); // { value: 2, done: false }
//   console.log(gen.next()); // { done: true }
// function* infiniteSequence() {
//     var i = 0;
//     while(true) {
//         yield i++;
//     }
// }
// var iterator = infiniteSequence();
// while (true) {
//     console.log(iterator.next()); // { value: xxxx, done: false } forever and ever
// }
// function* externallyoperatedgenerator()
// {
//     console.log("Generator started");
//     yield "started";
//     console.log("Generator paused");
//     yield "paused";
//     console.log("Generator ended");
//     var foo = yield "ended";
//     console.log(`foo - ${foo}`);
// }
// var extgen = externallyoperatedgenerator();
// console.log(extgen.next("my start"));
// console.log(extgen.next());
// console.log(extgen.next());
// console.log(extgen.next('new execution started'));
// function* generator() {
//     var bar = yield 'foo';
//     console.log(bar); // bar!
// }
// const iterator = generator();
// // Start execution till we get first yield value
// const foo = iterator.next();
// console.log(foo.value); // foo
// // Resume execution injecting bar
// const nextThing = iterator.next('bar');
// const next2thing = iterator.next('bar2');
// console.log(nextThing);
// console.log(next2thing);
