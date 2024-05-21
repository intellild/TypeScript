currentDirectory:: /home/src/projects useCaseSensitiveFileNames: false
Input::
//// [/home/src/projects/project1/utils.d.ts]
export const y = 10;

//// [/home/src/projects/project1/file.ts]
export const file = 10;

//// [/home/src/projects/project1/core.d.ts]
export const core = 10;

//// [/home/src/projects/project1/index.ts]
export const x = "type1";

//// [/home/src/projects/project1/file2.ts]
/// <reference lib="webworker2"/>
/// <reference lib="unknownlib"/>
/// <reference lib="scripthost"/>


//// [/home/src/projects/project1/tsconfig.json]
{
  "compilerOptions": {
    "composite": true,
    "traceResolution": true
  }
}

//// [/home/src/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }
interface ReadonlyArray<T> {}
declare const console: { log(msg: any): void; };

//// [/home/src/lib/lib.webworker.d.ts]
interface WebWorkerInterface { }

//// [/home/src/lib/lib.scripthost.d.ts]
interface ScriptHostInterface { }


/home/src/lib/tsc.js -w -p project1 --explainFiles --extendedDiagnostics
Output::
[[90mHH:MM:SS AM[0m] Starting compilation in watch mode...

Current directory: /home/src/projects CaseSensitiveFileNames: false
FileWatcher:: Added:: WatchInfo: /home/src/projects/project1/tsconfig.json 2000 undefined Config file
Synchronizing program
CreatingProgramWith::
  roots: ["/home/src/projects/project1/core.d.ts","/home/src/projects/project1/file.ts","/home/src/projects/project1/file2.ts","/home/src/projects/project1/index.ts","/home/src/projects/project1/utils.d.ts"]
  options: {"composite":true,"traceResolution":true,"watch":true,"project":"/home/src/projects/project1","explainFiles":true,"extendedDiagnostics":true,"configFilePath":"/home/src/projects/project1/tsconfig.json"}
File '/home/src/projects/project1/package.json' does not exist.
File '/home/src/projects/package.json' does not exist.
File '/home/src/package.json' does not exist.
File '/home/package.json' does not exist.
File '/package.json' does not exist.
FileWatcher:: Added:: WatchInfo: /home/src/projects/project1/core.d.ts 250 undefined Source file
File '/home/src/projects/project1/package.json' does not exist according to earlier cached lookups.
File '/home/src/projects/package.json' does not exist according to earlier cached lookups.
File '/home/src/package.json' does not exist according to earlier cached lookups.
File '/home/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
FileWatcher:: Added:: WatchInfo: /home/src/projects/project1/file.ts 250 undefined Source file
File '/home/src/projects/project1/package.json' does not exist according to earlier cached lookups.
File '/home/src/projects/package.json' does not exist according to earlier cached lookups.
File '/home/src/package.json' does not exist according to earlier cached lookups.
File '/home/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
FileWatcher:: Added:: WatchInfo: /home/src/projects/project1/file2.ts 250 undefined Source file
======== Resolving module '@typescript/lib-scripthost' from '/home/src/projects/project1/__lib_node_modules_lookup_lib.scripthost.d.ts__.ts'. ========
Explicitly specified module resolution kind: 'Node10'.
Loading module '@typescript/lib-scripthost' from 'node_modules' folder, target file types: TypeScript, Declaration.
Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Directory '/home/src/projects/project1/node_modules' does not exist, skipping all lookups in it.
Scoped package detected, looking in 'typescript__lib-scripthost'
Directory '/home/src/projects/node_modules' does not exist, skipping all lookups in it.
Scoped package detected, looking in 'typescript__lib-scripthost'
Directory '/home/src/node_modules' does not exist, skipping all lookups in it.
Scoped package detected, looking in 'typescript__lib-scripthost'
Directory '/home/node_modules' does not exist, skipping all lookups in it.
Scoped package detected, looking in 'typescript__lib-scripthost'
Directory '/node_modules' does not exist, skipping all lookups in it.
Scoped package detected, looking in 'typescript__lib-scripthost'
Loading module '@typescript/lib-scripthost' from 'node_modules' folder, target file types: JavaScript.
Searching all ancestor node_modules directories for fallback extensions: JavaScript.
Directory '/home/src/projects/project1/node_modules' does not exist, skipping all lookups in it.
Directory '/home/src/projects/node_modules' does not exist, skipping all lookups in it.
Directory '/home/src/node_modules' does not exist, skipping all lookups in it.
Directory '/home/node_modules' does not exist, skipping all lookups in it.
Directory '/node_modules' does not exist, skipping all lookups in it.
======== Module name '@typescript/lib-scripthost' was not resolved. ========
DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project1/node_modules 1 undefined Failed Lookup Locations
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project1/node_modules 1 undefined Failed Lookup Locations
DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/node_modules 1 undefined Failed Lookup Locations
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/node_modules 1 undefined Failed Lookup Locations
File '/home/src/lib/package.json' does not exist.
File '/home/src/package.json' does not exist according to earlier cached lookups.
File '/home/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
FileWatcher:: Added:: WatchInfo: /home/src/lib/lib.scripthost.d.ts 250 undefined Source file
File '/home/src/projects/project1/package.json' does not exist according to earlier cached lookups.
File '/home/src/projects/package.json' does not exist according to earlier cached lookups.
File '/home/src/package.json' does not exist according to earlier cached lookups.
File '/home/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
FileWatcher:: Added:: WatchInfo: /home/src/projects/project1/index.ts 250 undefined Source file
File '/home/src/projects/project1/package.json' does not exist according to earlier cached lookups.
File '/home/src/projects/package.json' does not exist according to earlier cached lookups.
File '/home/src/package.json' does not exist according to earlier cached lookups.
File '/home/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
FileWatcher:: Added:: WatchInfo: /home/src/projects/project1/utils.d.ts 250 undefined Source file
File '/home/src/lib/package.json' does not exist according to earlier cached lookups.
File '/home/src/package.json' does not exist according to earlier cached lookups.
File '/home/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
FileWatcher:: Added:: WatchInfo: /home/src/lib/lib.d.ts 250 undefined Source file
FileWatcher:: Added:: WatchInfo: /home/src/projects/project1/package.json 2000 undefined File location affecting resolution
FileWatcher:: Added:: WatchInfo: /home/src/projects/package.json 2000 undefined File location affecting resolution
DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project1/node_modules/@types 1 undefined Type roots
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project1/node_modules/@types 1 undefined Type roots
DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/node_modules/@types 1 undefined Type roots
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/node_modules/@types 1 undefined Type roots
[96mproject1/file2.ts[0m:[93m1[0m:[93m21[0m - [91merror[0m[90m TS2727: [0mCannot find lib definition for 'webworker2'. Did you mean 'webworker'?

[7m1[0m /// <reference lib="webworker2"/>
[7m [0m [91m                    ~~~~~~~~~~[0m

[96mproject1/file2.ts[0m:[93m2[0m:[93m21[0m - [91merror[0m[90m TS2726: [0mCannot find lib definition for 'unknownlib'.

[7m2[0m /// <reference lib="unknownlib"/>
[7m [0m [91m                    ~~~~~~~~~~[0m

../lib/lib.d.ts
  Default library for target 'es5'
../lib/lib.scripthost.d.ts
  Library referenced via 'scripthost' from file 'project1/file2.ts'
project1/core.d.ts
  Matched by default include pattern '**/*'
project1/file.ts
  Matched by default include pattern '**/*'
project1/file2.ts
  Matched by default include pattern '**/*'
project1/index.ts
  Matched by default include pattern '**/*'
project1/utils.d.ts
  Matched by default include pattern '**/*'
[[90mHH:MM:SS AM[0m] Found 2 errors. Watching for file changes.

DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project1 1 undefined Wild card directory
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project1 1 undefined Wild card directory


//// [/home/src/projects/project1/file.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.file = void 0;
exports.file = 10;


//// [/home/src/projects/project1/file.d.ts]
export declare const file = 10;


//// [/home/src/projects/project1/file2.js]
/// <reference lib="webworker2"/>
/// <reference lib="unknownlib"/>
/// <reference lib="scripthost"/>


//// [/home/src/projects/project1/file2.d.ts]


//// [/home/src/projects/project1/index.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = "type1";


//// [/home/src/projects/project1/index.d.ts]
export declare const x = "type1";


//// [/home/src/projects/project1/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","../../lib/lib.scripthost.d.ts","./core.d.ts","./file.ts","./file2.ts","./index.ts","./utils.d.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedFormat":1},{"version":"-5403980302-interface ScriptHostInterface { }","affectsGlobalScope":true,"impliedFormat":1},{"version":"-15683237936-export const core = 10;","impliedFormat":1},{"version":"-16628394009-export const file = 10;","signature":"-9025507999-export declare const file = 10;\n","impliedFormat":1},{"version":"-15920922626-/// <reference lib=\"webworker2\"/>\n/// <reference lib=\"unknownlib\"/>\n/// <reference lib=\"scripthost\"/>\n","signature":"5381-","impliedFormat":1},{"version":"-11532698187-export const x = \"type1\";","signature":"-5899226897-export declare const x = \"type1\";\n","impliedFormat":1},{"version":"-13729955264-export const y = 10;","impliedFormat":1}],"root":[[3,7]],"options":{"composite":true},"referencedMap":[],"semanticDiagnosticsPerFile":[1,2,3,4,5,6,7],"latestChangedDtsFile":"./index.d.ts"},"version":"FakeTSVersion"}

//// [/home/src/projects/project1/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "../../lib/lib.scripthost.d.ts",
      "./core.d.ts",
      "./file.ts",
      "./file2.ts",
      "./index.ts",
      "./utils.d.ts"
    ],
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "original": {
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "affectsGlobalScope": true,
          "impliedFormat": 1
        },
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "../../lib/lib.scripthost.d.ts": {
        "original": {
          "version": "-5403980302-interface ScriptHostInterface { }",
          "affectsGlobalScope": true,
          "impliedFormat": 1
        },
        "version": "-5403980302-interface ScriptHostInterface { }",
        "signature": "-5403980302-interface ScriptHostInterface { }",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "./core.d.ts": {
        "original": {
          "version": "-15683237936-export const core = 10;",
          "impliedFormat": 1
        },
        "version": "-15683237936-export const core = 10;",
        "signature": "-15683237936-export const core = 10;",
        "impliedFormat": "commonjs"
      },
      "./file.ts": {
        "original": {
          "version": "-16628394009-export const file = 10;",
          "signature": "-9025507999-export declare const file = 10;\n",
          "impliedFormat": 1
        },
        "version": "-16628394009-export const file = 10;",
        "signature": "-9025507999-export declare const file = 10;\n",
        "impliedFormat": "commonjs"
      },
      "./file2.ts": {
        "original": {
          "version": "-15920922626-/// <reference lib=\"webworker2\"/>\n/// <reference lib=\"unknownlib\"/>\n/// <reference lib=\"scripthost\"/>\n",
          "signature": "5381-",
          "impliedFormat": 1
        },
        "version": "-15920922626-/// <reference lib=\"webworker2\"/>\n/// <reference lib=\"unknownlib\"/>\n/// <reference lib=\"scripthost\"/>\n",
        "signature": "5381-",
        "impliedFormat": "commonjs"
      },
      "./index.ts": {
        "original": {
          "version": "-11532698187-export const x = \"type1\";",
          "signature": "-5899226897-export declare const x = \"type1\";\n",
          "impliedFormat": 1
        },
        "version": "-11532698187-export const x = \"type1\";",
        "signature": "-5899226897-export declare const x = \"type1\";\n",
        "impliedFormat": "commonjs"
      },
      "./utils.d.ts": {
        "original": {
          "version": "-13729955264-export const y = 10;",
          "impliedFormat": 1
        },
        "version": "-13729955264-export const y = 10;",
        "signature": "-13729955264-export const y = 10;",
        "impliedFormat": "commonjs"
      }
    },
    "root": [
      [
        [
          3,
          7
        ],
        [
          "./core.d.ts",
          "./file.ts",
          "./file2.ts",
          "./index.ts",
          "./utils.d.ts"
        ]
      ]
    ],
    "options": {
      "composite": true
    },
    "referencedMap": {},
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "../../lib/lib.scripthost.d.ts",
      "./core.d.ts",
      "./file.ts",
      "./file2.ts",
      "./index.ts",
      "./utils.d.ts"
    ],
    "latestChangedDtsFile": "./index.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 1512
}


PolledWatches::
/home/src/projects/node_modules: *new*
  {"pollingInterval":500}
/home/src/projects/node_modules/@types: *new*
  {"pollingInterval":500}
/home/src/projects/package.json: *new*
  {"pollingInterval":2000}
/home/src/projects/project1/node_modules: *new*
  {"pollingInterval":500}
/home/src/projects/project1/node_modules/@types: *new*
  {"pollingInterval":500}
/home/src/projects/project1/package.json: *new*
  {"pollingInterval":2000}

FsWatches::
/home/src/lib/lib.d.ts: *new*
  {}
/home/src/lib/lib.scripthost.d.ts: *new*
  {}
/home/src/projects/project1/core.d.ts: *new*
  {}
/home/src/projects/project1/file.ts: *new*
  {}
/home/src/projects/project1/file2.ts: *new*
  {}
/home/src/projects/project1/index.ts: *new*
  {}
/home/src/projects/project1/tsconfig.json: *new*
  {}
/home/src/projects/project1/utils.d.ts: *new*
  {}

FsWatchesRecursive::
/home/src/projects/project1: *new*
  {}

Program root files: [
  "/home/src/projects/project1/core.d.ts",
  "/home/src/projects/project1/file.ts",
  "/home/src/projects/project1/file2.ts",
  "/home/src/projects/project1/index.ts",
  "/home/src/projects/project1/utils.d.ts"
]
Program options: {
  "composite": true,
  "traceResolution": true,
  "watch": true,
  "project": "/home/src/projects/project1",
  "explainFiles": true,
  "extendedDiagnostics": true,
  "configFilePath": "/home/src/projects/project1/tsconfig.json"
}
Program structureReused: Not
Program files::
/home/src/lib/lib.d.ts
/home/src/lib/lib.scripthost.d.ts
/home/src/projects/project1/core.d.ts
/home/src/projects/project1/file.ts
/home/src/projects/project1/file2.ts
/home/src/projects/project1/index.ts
/home/src/projects/project1/utils.d.ts

Semantic diagnostics in builder refreshed for::
/home/src/lib/lib.d.ts
/home/src/lib/lib.scripthost.d.ts
/home/src/projects/project1/core.d.ts
/home/src/projects/project1/file.ts
/home/src/projects/project1/file2.ts
/home/src/projects/project1/index.ts
/home/src/projects/project1/utils.d.ts

Shape signatures in builder refreshed for::
/home/src/lib/lib.d.ts (used version)
/home/src/lib/lib.scripthost.d.ts (used version)
/home/src/projects/project1/core.d.ts (used version)
/home/src/projects/project1/file.ts (computed .d.ts during emit)
/home/src/projects/project1/file2.ts (computed .d.ts during emit)
/home/src/projects/project1/index.ts (computed .d.ts during emit)
/home/src/projects/project1/utils.d.ts (used version)

exitCode:: ExitStatus.undefined

Change:: edit index

Input::
//// [/home/src/projects/project1/index.ts]
export const x = "type1";export const xyz = 10;


Output::
FileWatcher:: Triggered with /home/src/projects/project1/index.ts 1:: WatchInfo: /home/src/projects/project1/index.ts 250 undefined Source file
Scheduling update
Elapsed:: *ms FileWatcher:: Triggered with /home/src/projects/project1/index.ts 1:: WatchInfo: /home/src/projects/project1/index.ts 250 undefined Source file


Timeout callback:: count: 1
1: timerToUpdateProgram *new*

Before running Timeout callback:: count: 1
1: timerToUpdateProgram

Host is moving to new time
After running Timeout callback:: count: 0
Output::
Synchronizing program
[[90mHH:MM:SS AM[0m] File change detected. Starting incremental compilation...

CreatingProgramWith::
  roots: ["/home/src/projects/project1/core.d.ts","/home/src/projects/project1/file.ts","/home/src/projects/project1/file2.ts","/home/src/projects/project1/index.ts","/home/src/projects/project1/utils.d.ts"]
  options: {"composite":true,"traceResolution":true,"watch":true,"project":"/home/src/projects/project1","explainFiles":true,"extendedDiagnostics":true,"configFilePath":"/home/src/projects/project1/tsconfig.json"}
File '/home/src/lib/package.json' does not exist according to earlier cached lookups.
File '/home/src/package.json' does not exist according to earlier cached lookups.
File '/home/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/home/src/lib/package.json' does not exist according to earlier cached lookups.
File '/home/src/package.json' does not exist according to earlier cached lookups.
File '/home/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/home/src/projects/project1/package.json' does not exist according to earlier cached lookups.
File '/home/src/projects/package.json' does not exist according to earlier cached lookups.
File '/home/src/package.json' does not exist according to earlier cached lookups.
File '/home/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/home/src/projects/project1/package.json' does not exist according to earlier cached lookups.
File '/home/src/projects/package.json' does not exist according to earlier cached lookups.
File '/home/src/package.json' does not exist according to earlier cached lookups.
File '/home/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/home/src/projects/project1/package.json' does not exist according to earlier cached lookups.
File '/home/src/projects/package.json' does not exist according to earlier cached lookups.
File '/home/src/package.json' does not exist according to earlier cached lookups.
File '/home/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/home/src/projects/project1/package.json' does not exist according to earlier cached lookups.
File '/home/src/projects/package.json' does not exist according to earlier cached lookups.
File '/home/src/package.json' does not exist according to earlier cached lookups.
File '/home/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/home/src/projects/project1/package.json' does not exist according to earlier cached lookups.
File '/home/src/projects/package.json' does not exist according to earlier cached lookups.
File '/home/src/package.json' does not exist according to earlier cached lookups.
File '/home/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
Reusing resolution of module '@typescript/lib-scripthost' from '/home/src/projects/project1/__lib_node_modules_lookup_lib.scripthost.d.ts__.ts' of old program, it was not resolved.
[96mproject1/file2.ts[0m:[93m1[0m:[93m21[0m - [91merror[0m[90m TS2727: [0mCannot find lib definition for 'webworker2'. Did you mean 'webworker'?

[7m1[0m /// <reference lib="webworker2"/>
[7m [0m [91m                    ~~~~~~~~~~[0m

[96mproject1/file2.ts[0m:[93m2[0m:[93m21[0m - [91merror[0m[90m TS2726: [0mCannot find lib definition for 'unknownlib'.

[7m2[0m /// <reference lib="unknownlib"/>
[7m [0m [91m                    ~~~~~~~~~~[0m

../lib/lib.d.ts
  Default library for target 'es5'
../lib/lib.scripthost.d.ts
  Library referenced via 'scripthost' from file 'project1/file2.ts'
project1/core.d.ts
  Matched by default include pattern '**/*'
project1/file.ts
  Matched by default include pattern '**/*'
project1/file2.ts
  Matched by default include pattern '**/*'
project1/index.ts
  Matched by default include pattern '**/*'
project1/utils.d.ts
  Matched by default include pattern '**/*'
[[90mHH:MM:SS AM[0m] Found 2 errors. Watching for file changes.



//// [/home/src/projects/project1/index.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xyz = exports.x = void 0;
exports.x = "type1";
exports.xyz = 10;


//// [/home/src/projects/project1/index.d.ts]
export declare const x = "type1";
export declare const xyz = 10;


//// [/home/src/projects/project1/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","../../lib/lib.scripthost.d.ts","./core.d.ts","./file.ts","./file2.ts","./index.ts","./utils.d.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedFormat":1},{"version":"-5403980302-interface ScriptHostInterface { }","affectsGlobalScope":true,"impliedFormat":1},{"version":"-15683237936-export const core = 10;","impliedFormat":1},{"version":"-16628394009-export const file = 10;","signature":"-9025507999-export declare const file = 10;\n","impliedFormat":1},{"version":"-15920922626-/// <reference lib=\"webworker2\"/>\n/// <reference lib=\"unknownlib\"/>\n/// <reference lib=\"scripthost\"/>\n","signature":"5381-","impliedFormat":1},{"version":"-6136895998-export const x = \"type1\";export const xyz = 10;","signature":"-9988949802-export declare const x = \"type1\";\nexport declare const xyz = 10;\n","impliedFormat":1},{"version":"-13729955264-export const y = 10;","impliedFormat":1}],"root":[[3,7]],"options":{"composite":true},"referencedMap":[],"semanticDiagnosticsPerFile":[1,2,3,4,5,6,7],"latestChangedDtsFile":"./index.d.ts"},"version":"FakeTSVersion"}

//// [/home/src/projects/project1/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "../../lib/lib.scripthost.d.ts",
      "./core.d.ts",
      "./file.ts",
      "./file2.ts",
      "./index.ts",
      "./utils.d.ts"
    ],
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "original": {
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "affectsGlobalScope": true,
          "impliedFormat": 1
        },
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "../../lib/lib.scripthost.d.ts": {
        "original": {
          "version": "-5403980302-interface ScriptHostInterface { }",
          "affectsGlobalScope": true,
          "impliedFormat": 1
        },
        "version": "-5403980302-interface ScriptHostInterface { }",
        "signature": "-5403980302-interface ScriptHostInterface { }",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "./core.d.ts": {
        "original": {
          "version": "-15683237936-export const core = 10;",
          "impliedFormat": 1
        },
        "version": "-15683237936-export const core = 10;",
        "signature": "-15683237936-export const core = 10;",
        "impliedFormat": "commonjs"
      },
      "./file.ts": {
        "original": {
          "version": "-16628394009-export const file = 10;",
          "signature": "-9025507999-export declare const file = 10;\n",
          "impliedFormat": 1
        },
        "version": "-16628394009-export const file = 10;",
        "signature": "-9025507999-export declare const file = 10;\n",
        "impliedFormat": "commonjs"
      },
      "./file2.ts": {
        "original": {
          "version": "-15920922626-/// <reference lib=\"webworker2\"/>\n/// <reference lib=\"unknownlib\"/>\n/// <reference lib=\"scripthost\"/>\n",
          "signature": "5381-",
          "impliedFormat": 1
        },
        "version": "-15920922626-/// <reference lib=\"webworker2\"/>\n/// <reference lib=\"unknownlib\"/>\n/// <reference lib=\"scripthost\"/>\n",
        "signature": "5381-",
        "impliedFormat": "commonjs"
      },
      "./index.ts": {
        "original": {
          "version": "-6136895998-export const x = \"type1\";export const xyz = 10;",
          "signature": "-9988949802-export declare const x = \"type1\";\nexport declare const xyz = 10;\n",
          "impliedFormat": 1
        },
        "version": "-6136895998-export const x = \"type1\";export const xyz = 10;",
        "signature": "-9988949802-export declare const x = \"type1\";\nexport declare const xyz = 10;\n",
        "impliedFormat": "commonjs"
      },
      "./utils.d.ts": {
        "original": {
          "version": "-13729955264-export const y = 10;",
          "impliedFormat": 1
        },
        "version": "-13729955264-export const y = 10;",
        "signature": "-13729955264-export const y = 10;",
        "impliedFormat": "commonjs"
      }
    },
    "root": [
      [
        [
          3,
          7
        ],
        [
          "./core.d.ts",
          "./file.ts",
          "./file2.ts",
          "./index.ts",
          "./utils.d.ts"
        ]
      ]
    ],
    "options": {
      "composite": true
    },
    "referencedMap": {},
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "../../lib/lib.scripthost.d.ts",
      "./core.d.ts",
      "./file.ts",
      "./file2.ts",
      "./index.ts",
      "./utils.d.ts"
    ],
    "latestChangedDtsFile": "./index.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 1565
}



Program root files: [
  "/home/src/projects/project1/core.d.ts",
  "/home/src/projects/project1/file.ts",
  "/home/src/projects/project1/file2.ts",
  "/home/src/projects/project1/index.ts",
  "/home/src/projects/project1/utils.d.ts"
]
Program options: {
  "composite": true,
  "traceResolution": true,
  "watch": true,
  "project": "/home/src/projects/project1",
  "explainFiles": true,
  "extendedDiagnostics": true,
  "configFilePath": "/home/src/projects/project1/tsconfig.json"
}
Program structureReused: Completely
Program files::
/home/src/lib/lib.d.ts
/home/src/lib/lib.scripthost.d.ts
/home/src/projects/project1/core.d.ts
/home/src/projects/project1/file.ts
/home/src/projects/project1/file2.ts
/home/src/projects/project1/index.ts
/home/src/projects/project1/utils.d.ts

Semantic diagnostics in builder refreshed for::
/home/src/projects/project1/index.ts

Shape signatures in builder refreshed for::
/home/src/projects/project1/index.ts (computed .d.ts)

exitCode:: ExitStatus.undefined

Change:: delete core

Input::
//// [/home/src/projects/project1/core.d.ts] deleted

Output::
FileWatcher:: Triggered with /home/src/projects/project1/core.d.ts 2:: WatchInfo: /home/src/projects/project1/core.d.ts 250 undefined Source file
Scheduling update
Elapsed:: *ms FileWatcher:: Triggered with /home/src/projects/project1/core.d.ts 2:: WatchInfo: /home/src/projects/project1/core.d.ts 250 undefined Source file
DirectoryWatcher:: Triggered with /home/src/projects/project1/core.d.ts :: WatchInfo: /home/src/projects/project1 1 undefined Wild card directory
Scheduling update
Elapsed:: *ms DirectoryWatcher:: Triggered with /home/src/projects/project1/core.d.ts :: WatchInfo: /home/src/projects/project1 1 undefined Wild card directory


Timeout callback:: count: 1
3: timerToUpdateProgram *new*

Before running Timeout callback:: count: 1
3: timerToUpdateProgram

Host is moving to new time
After running Timeout callback:: count: 0
Output::
Reloading new file names and options
Synchronizing program
[[90mHH:MM:SS AM[0m] File change detected. Starting incremental compilation...

CreatingProgramWith::
  roots: ["/home/src/projects/project1/file.ts","/home/src/projects/project1/file2.ts","/home/src/projects/project1/index.ts","/home/src/projects/project1/utils.d.ts"]
  options: {"composite":true,"traceResolution":true,"watch":true,"project":"/home/src/projects/project1","explainFiles":true,"extendedDiagnostics":true,"configFilePath":"/home/src/projects/project1/tsconfig.json"}
File '/home/src/projects/project1/package.json' does not exist according to earlier cached lookups.
File '/home/src/projects/package.json' does not exist according to earlier cached lookups.
File '/home/src/package.json' does not exist according to earlier cached lookups.
File '/home/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/home/src/projects/project1/package.json' does not exist according to earlier cached lookups.
File '/home/src/projects/package.json' does not exist according to earlier cached lookups.
File '/home/src/package.json' does not exist according to earlier cached lookups.
File '/home/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
Reusing resolution of module '@typescript/lib-scripthost' from '/home/src/projects/project1/__lib_node_modules_lookup_lib.scripthost.d.ts__.ts' of old program, it was not resolved.
File '/home/src/lib/package.json' does not exist according to earlier cached lookups.
File '/home/src/package.json' does not exist according to earlier cached lookups.
File '/home/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/home/src/projects/project1/package.json' does not exist according to earlier cached lookups.
File '/home/src/projects/package.json' does not exist according to earlier cached lookups.
File '/home/src/package.json' does not exist according to earlier cached lookups.
File '/home/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/home/src/projects/project1/package.json' does not exist according to earlier cached lookups.
File '/home/src/projects/package.json' does not exist according to earlier cached lookups.
File '/home/src/package.json' does not exist according to earlier cached lookups.
File '/home/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/home/src/lib/package.json' does not exist according to earlier cached lookups.
File '/home/src/package.json' does not exist according to earlier cached lookups.
File '/home/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
FileWatcher:: Close:: WatchInfo: /home/src/projects/project1/core.d.ts 250 undefined Source file
[96mproject1/file2.ts[0m:[93m1[0m:[93m21[0m - [91merror[0m[90m TS2727: [0mCannot find lib definition for 'webworker2'. Did you mean 'webworker'?

[7m1[0m /// <reference lib="webworker2"/>
[7m [0m [91m                    ~~~~~~~~~~[0m

[96mproject1/file2.ts[0m:[93m2[0m:[93m21[0m - [91merror[0m[90m TS2726: [0mCannot find lib definition for 'unknownlib'.

[7m2[0m /// <reference lib="unknownlib"/>
[7m [0m [91m                    ~~~~~~~~~~[0m

../lib/lib.d.ts
  Default library for target 'es5'
../lib/lib.scripthost.d.ts
  Library referenced via 'scripthost' from file 'project1/file2.ts'
project1/file.ts
  Matched by default include pattern '**/*'
project1/file2.ts
  Matched by default include pattern '**/*'
project1/index.ts
  Matched by default include pattern '**/*'
project1/utils.d.ts
  Matched by default include pattern '**/*'
[[90mHH:MM:SS AM[0m] Found 2 errors. Watching for file changes.



//// [/home/src/projects/project1/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","../../lib/lib.scripthost.d.ts","./file.ts","./file2.ts","./index.ts","./utils.d.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedFormat":1},{"version":"-5403980302-interface ScriptHostInterface { }","affectsGlobalScope":true,"impliedFormat":1},{"version":"-16628394009-export const file = 10;","signature":"-9025507999-export declare const file = 10;\n","impliedFormat":1},{"version":"-15920922626-/// <reference lib=\"webworker2\"/>\n/// <reference lib=\"unknownlib\"/>\n/// <reference lib=\"scripthost\"/>\n","signature":"5381-","impliedFormat":1},{"version":"-6136895998-export const x = \"type1\";export const xyz = 10;","signature":"-9988949802-export declare const x = \"type1\";\nexport declare const xyz = 10;\n","impliedFormat":1},{"version":"-13729955264-export const y = 10;","impliedFormat":1}],"root":[[3,6]],"options":{"composite":true},"referencedMap":[],"semanticDiagnosticsPerFile":[1,2,3,4,5,6],"latestChangedDtsFile":"./index.d.ts"},"version":"FakeTSVersion"}

//// [/home/src/projects/project1/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "../../lib/lib.scripthost.d.ts",
      "./file.ts",
      "./file2.ts",
      "./index.ts",
      "./utils.d.ts"
    ],
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "original": {
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "affectsGlobalScope": true,
          "impliedFormat": 1
        },
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "../../lib/lib.scripthost.d.ts": {
        "original": {
          "version": "-5403980302-interface ScriptHostInterface { }",
          "affectsGlobalScope": true,
          "impliedFormat": 1
        },
        "version": "-5403980302-interface ScriptHostInterface { }",
        "signature": "-5403980302-interface ScriptHostInterface { }",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "./file.ts": {
        "original": {
          "version": "-16628394009-export const file = 10;",
          "signature": "-9025507999-export declare const file = 10;\n",
          "impliedFormat": 1
        },
        "version": "-16628394009-export const file = 10;",
        "signature": "-9025507999-export declare const file = 10;\n",
        "impliedFormat": "commonjs"
      },
      "./file2.ts": {
        "original": {
          "version": "-15920922626-/// <reference lib=\"webworker2\"/>\n/// <reference lib=\"unknownlib\"/>\n/// <reference lib=\"scripthost\"/>\n",
          "signature": "5381-",
          "impliedFormat": 1
        },
        "version": "-15920922626-/// <reference lib=\"webworker2\"/>\n/// <reference lib=\"unknownlib\"/>\n/// <reference lib=\"scripthost\"/>\n",
        "signature": "5381-",
        "impliedFormat": "commonjs"
      },
      "./index.ts": {
        "original": {
          "version": "-6136895998-export const x = \"type1\";export const xyz = 10;",
          "signature": "-9988949802-export declare const x = \"type1\";\nexport declare const xyz = 10;\n",
          "impliedFormat": 1
        },
        "version": "-6136895998-export const x = \"type1\";export const xyz = 10;",
        "signature": "-9988949802-export declare const x = \"type1\";\nexport declare const xyz = 10;\n",
        "impliedFormat": "commonjs"
      },
      "./utils.d.ts": {
        "original": {
          "version": "-13729955264-export const y = 10;",
          "impliedFormat": 1
        },
        "version": "-13729955264-export const y = 10;",
        "signature": "-13729955264-export const y = 10;",
        "impliedFormat": "commonjs"
      }
    },
    "root": [
      [
        [
          3,
          6
        ],
        [
          "./file.ts",
          "./file2.ts",
          "./index.ts",
          "./utils.d.ts"
        ]
      ]
    ],
    "options": {
      "composite": true
    },
    "referencedMap": {},
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "../../lib/lib.scripthost.d.ts",
      "./file.ts",
      "./file2.ts",
      "./index.ts",
      "./utils.d.ts"
    ],
    "latestChangedDtsFile": "./index.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 1480
}


PolledWatches::
/home/src/projects/node_modules:
  {"pollingInterval":500}
/home/src/projects/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/package.json:
  {"pollingInterval":2000}
/home/src/projects/project1/node_modules:
  {"pollingInterval":500}
/home/src/projects/project1/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project1/package.json:
  {"pollingInterval":2000}

FsWatches::
/home/src/lib/lib.d.ts:
  {}
/home/src/lib/lib.scripthost.d.ts:
  {}
/home/src/projects/project1/file.ts:
  {}
/home/src/projects/project1/file2.ts:
  {}
/home/src/projects/project1/index.ts:
  {}
/home/src/projects/project1/tsconfig.json:
  {}
/home/src/projects/project1/utils.d.ts:
  {}

FsWatches *deleted*::
/home/src/projects/project1/core.d.ts:
  {}

FsWatchesRecursive::
/home/src/projects/project1:
  {}


Program root files: [
  "/home/src/projects/project1/file.ts",
  "/home/src/projects/project1/file2.ts",
  "/home/src/projects/project1/index.ts",
  "/home/src/projects/project1/utils.d.ts"
]
Program options: {
  "composite": true,
  "traceResolution": true,
  "watch": true,
  "project": "/home/src/projects/project1",
  "explainFiles": true,
  "extendedDiagnostics": true,
  "configFilePath": "/home/src/projects/project1/tsconfig.json"
}
Program structureReused: Not
Program files::
/home/src/lib/lib.d.ts
/home/src/lib/lib.scripthost.d.ts
/home/src/projects/project1/file.ts
/home/src/projects/project1/file2.ts
/home/src/projects/project1/index.ts
/home/src/projects/project1/utils.d.ts

Semantic diagnostics in builder refreshed for::

No shapes updated in the builder::

exitCode:: ExitStatus.undefined

Change:: remove unknown lib

Input::
//// [/home/src/projects/project1/file2.ts]
/// <reference lib="webworker2"/>
/// <reference lib="scripthost"/>



Output::
FileWatcher:: Triggered with /home/src/projects/project1/file2.ts 1:: WatchInfo: /home/src/projects/project1/file2.ts 250 undefined Source file
Scheduling update
Elapsed:: *ms FileWatcher:: Triggered with /home/src/projects/project1/file2.ts 1:: WatchInfo: /home/src/projects/project1/file2.ts 250 undefined Source file


Timeout callback:: count: 1
4: timerToUpdateProgram *new*

Before running Timeout callback:: count: 1
4: timerToUpdateProgram

Host is moving to new time
After running Timeout callback:: count: 0
Output::
Synchronizing program
[[90mHH:MM:SS AM[0m] File change detected. Starting incremental compilation...

CreatingProgramWith::
  roots: ["/home/src/projects/project1/file.ts","/home/src/projects/project1/file2.ts","/home/src/projects/project1/index.ts","/home/src/projects/project1/utils.d.ts"]
  options: {"composite":true,"traceResolution":true,"watch":true,"project":"/home/src/projects/project1","explainFiles":true,"extendedDiagnostics":true,"configFilePath":"/home/src/projects/project1/tsconfig.json"}
File '/home/src/lib/package.json' does not exist according to earlier cached lookups.
File '/home/src/package.json' does not exist according to earlier cached lookups.
File '/home/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/home/src/lib/package.json' does not exist according to earlier cached lookups.
File '/home/src/package.json' does not exist according to earlier cached lookups.
File '/home/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/home/src/projects/project1/package.json' does not exist according to earlier cached lookups.
File '/home/src/projects/package.json' does not exist according to earlier cached lookups.
File '/home/src/package.json' does not exist according to earlier cached lookups.
File '/home/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/home/src/projects/project1/package.json' does not exist according to earlier cached lookups.
File '/home/src/projects/package.json' does not exist according to earlier cached lookups.
File '/home/src/package.json' does not exist according to earlier cached lookups.
File '/home/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/home/src/projects/project1/package.json' does not exist according to earlier cached lookups.
File '/home/src/projects/package.json' does not exist according to earlier cached lookups.
File '/home/src/package.json' does not exist according to earlier cached lookups.
File '/home/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/home/src/projects/project1/package.json' does not exist according to earlier cached lookups.
File '/home/src/projects/package.json' does not exist according to earlier cached lookups.
File '/home/src/package.json' does not exist according to earlier cached lookups.
File '/home/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/home/src/projects/project1/package.json' does not exist according to earlier cached lookups.
File '/home/src/projects/package.json' does not exist according to earlier cached lookups.
File '/home/src/package.json' does not exist according to earlier cached lookups.
File '/home/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/home/src/projects/project1/package.json' does not exist according to earlier cached lookups.
File '/home/src/projects/package.json' does not exist according to earlier cached lookups.
File '/home/src/package.json' does not exist according to earlier cached lookups.
File '/home/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
Reusing resolution of module '@typescript/lib-scripthost' from '/home/src/projects/project1/__lib_node_modules_lookup_lib.scripthost.d.ts__.ts' of old program, it was not resolved.
File '/home/src/lib/package.json' does not exist according to earlier cached lookups.
File '/home/src/package.json' does not exist according to earlier cached lookups.
File '/home/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/home/src/projects/project1/package.json' does not exist according to earlier cached lookups.
File '/home/src/projects/package.json' does not exist according to earlier cached lookups.
File '/home/src/package.json' does not exist according to earlier cached lookups.
File '/home/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/home/src/projects/project1/package.json' does not exist according to earlier cached lookups.
File '/home/src/projects/package.json' does not exist according to earlier cached lookups.
File '/home/src/package.json' does not exist according to earlier cached lookups.
File '/home/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/home/src/lib/package.json' does not exist according to earlier cached lookups.
File '/home/src/package.json' does not exist according to earlier cached lookups.
File '/home/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
[96mproject1/file2.ts[0m:[93m1[0m:[93m21[0m - [91merror[0m[90m TS2727: [0mCannot find lib definition for 'webworker2'. Did you mean 'webworker'?

[7m1[0m /// <reference lib="webworker2"/>
[7m [0m [91m                    ~~~~~~~~~~[0m

../lib/lib.d.ts
  Default library for target 'es5'
../lib/lib.scripthost.d.ts
  Library referenced via 'scripthost' from file 'project1/file2.ts'
project1/file.ts
  Matched by default include pattern '**/*'
project1/file2.ts
  Matched by default include pattern '**/*'
project1/index.ts
  Matched by default include pattern '**/*'
project1/utils.d.ts
  Matched by default include pattern '**/*'
[[90mHH:MM:SS AM[0m] Found 1 error. Watching for file changes.



//// [/home/src/projects/project1/file2.js]
/// <reference lib="webworker2"/>
/// <reference lib="scripthost"/>


//// [/home/src/projects/project1/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","../../lib/lib.scripthost.d.ts","./file.ts","./file2.ts","./index.ts","./utils.d.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedFormat":1},{"version":"-5403980302-interface ScriptHostInterface { }","affectsGlobalScope":true,"impliedFormat":1},{"version":"-16628394009-export const file = 10;","signature":"-9025507999-export declare const file = 10;\n","impliedFormat":1},{"version":"-13885971376-/// <reference lib=\"webworker2\"/>\n/// <reference lib=\"scripthost\"/>\n","signature":"5381-","impliedFormat":1},{"version":"-6136895998-export const x = \"type1\";export const xyz = 10;","signature":"-9988949802-export declare const x = \"type1\";\nexport declare const xyz = 10;\n","impliedFormat":1},{"version":"-13729955264-export const y = 10;","impliedFormat":1}],"root":[[3,6]],"options":{"composite":true},"referencedMap":[],"semanticDiagnosticsPerFile":[1,2,3,4,5,6],"latestChangedDtsFile":"./index.d.ts"},"version":"FakeTSVersion"}

//// [/home/src/projects/project1/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "../../lib/lib.scripthost.d.ts",
      "./file.ts",
      "./file2.ts",
      "./index.ts",
      "./utils.d.ts"
    ],
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "original": {
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "affectsGlobalScope": true,
          "impliedFormat": 1
        },
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "../../lib/lib.scripthost.d.ts": {
        "original": {
          "version": "-5403980302-interface ScriptHostInterface { }",
          "affectsGlobalScope": true,
          "impliedFormat": 1
        },
        "version": "-5403980302-interface ScriptHostInterface { }",
        "signature": "-5403980302-interface ScriptHostInterface { }",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "./file.ts": {
        "original": {
          "version": "-16628394009-export const file = 10;",
          "signature": "-9025507999-export declare const file = 10;\n",
          "impliedFormat": 1
        },
        "version": "-16628394009-export const file = 10;",
        "signature": "-9025507999-export declare const file = 10;\n",
        "impliedFormat": "commonjs"
      },
      "./file2.ts": {
        "original": {
          "version": "-13885971376-/// <reference lib=\"webworker2\"/>\n/// <reference lib=\"scripthost\"/>\n",
          "signature": "5381-",
          "impliedFormat": 1
        },
        "version": "-13885971376-/// <reference lib=\"webworker2\"/>\n/// <reference lib=\"scripthost\"/>\n",
        "signature": "5381-",
        "impliedFormat": "commonjs"
      },
      "./index.ts": {
        "original": {
          "version": "-6136895998-export const x = \"type1\";export const xyz = 10;",
          "signature": "-9988949802-export declare const x = \"type1\";\nexport declare const xyz = 10;\n",
          "impliedFormat": 1
        },
        "version": "-6136895998-export const x = \"type1\";export const xyz = 10;",
        "signature": "-9988949802-export declare const x = \"type1\";\nexport declare const xyz = 10;\n",
        "impliedFormat": "commonjs"
      },
      "./utils.d.ts": {
        "original": {
          "version": "-13729955264-export const y = 10;",
          "impliedFormat": 1
        },
        "version": "-13729955264-export const y = 10;",
        "signature": "-13729955264-export const y = 10;",
        "impliedFormat": "commonjs"
      }
    },
    "root": [
      [
        [
          3,
          6
        ],
        [
          "./file.ts",
          "./file2.ts",
          "./index.ts",
          "./utils.d.ts"
        ]
      ]
    ],
    "options": {
      "composite": true
    },
    "referencedMap": {},
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "../../lib/lib.scripthost.d.ts",
      "./file.ts",
      "./file2.ts",
      "./index.ts",
      "./utils.d.ts"
    ],
    "latestChangedDtsFile": "./index.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 1443
}



Program root files: [
  "/home/src/projects/project1/file.ts",
  "/home/src/projects/project1/file2.ts",
  "/home/src/projects/project1/index.ts",
  "/home/src/projects/project1/utils.d.ts"
]
Program options: {
  "composite": true,
  "traceResolution": true,
  "watch": true,
  "project": "/home/src/projects/project1",
  "explainFiles": true,
  "extendedDiagnostics": true,
  "configFilePath": "/home/src/projects/project1/tsconfig.json"
}
Program structureReused: SafeModules
Program files::
/home/src/lib/lib.d.ts
/home/src/lib/lib.scripthost.d.ts
/home/src/projects/project1/file.ts
/home/src/projects/project1/file2.ts
/home/src/projects/project1/index.ts
/home/src/projects/project1/utils.d.ts

Semantic diagnostics in builder refreshed for::
/home/src/projects/project1/file2.ts

Shape signatures in builder refreshed for::
/home/src/projects/project1/file2.ts (computed .d.ts)

exitCode:: ExitStatus.undefined

Change:: correct webworker lib

Input::
//// [/home/src/projects/project1/file2.ts]
/// <reference lib="webworker"/>
/// <reference lib="scripthost"/>



Output::
FileWatcher:: Triggered with /home/src/projects/project1/file2.ts 1:: WatchInfo: /home/src/projects/project1/file2.ts 250 undefined Source file
Scheduling update
Elapsed:: *ms FileWatcher:: Triggered with /home/src/projects/project1/file2.ts 1:: WatchInfo: /home/src/projects/project1/file2.ts 250 undefined Source file


Timeout callback:: count: 1
5: timerToUpdateProgram *new*

Before running Timeout callback:: count: 1
5: timerToUpdateProgram

Host is moving to new time
After running Timeout callback:: count: 0
Output::
Synchronizing program
[[90mHH:MM:SS AM[0m] File change detected. Starting incremental compilation...

CreatingProgramWith::
  roots: ["/home/src/projects/project1/file.ts","/home/src/projects/project1/file2.ts","/home/src/projects/project1/index.ts","/home/src/projects/project1/utils.d.ts"]
  options: {"composite":true,"traceResolution":true,"watch":true,"project":"/home/src/projects/project1","explainFiles":true,"extendedDiagnostics":true,"configFilePath":"/home/src/projects/project1/tsconfig.json"}
File '/home/src/lib/package.json' does not exist according to earlier cached lookups.
File '/home/src/package.json' does not exist according to earlier cached lookups.
File '/home/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/home/src/lib/package.json' does not exist according to earlier cached lookups.
File '/home/src/package.json' does not exist according to earlier cached lookups.
File '/home/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/home/src/projects/project1/package.json' does not exist according to earlier cached lookups.
File '/home/src/projects/package.json' does not exist according to earlier cached lookups.
File '/home/src/package.json' does not exist according to earlier cached lookups.
File '/home/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/home/src/projects/project1/package.json' does not exist according to earlier cached lookups.
File '/home/src/projects/package.json' does not exist according to earlier cached lookups.
File '/home/src/package.json' does not exist according to earlier cached lookups.
File '/home/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/home/src/projects/project1/package.json' does not exist according to earlier cached lookups.
File '/home/src/projects/package.json' does not exist according to earlier cached lookups.
File '/home/src/package.json' does not exist according to earlier cached lookups.
File '/home/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/home/src/projects/project1/package.json' does not exist according to earlier cached lookups.
File '/home/src/projects/package.json' does not exist according to earlier cached lookups.
File '/home/src/package.json' does not exist according to earlier cached lookups.
File '/home/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/home/src/projects/project1/package.json' does not exist according to earlier cached lookups.
File '/home/src/projects/package.json' does not exist according to earlier cached lookups.
File '/home/src/package.json' does not exist according to earlier cached lookups.
File '/home/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/home/src/projects/project1/package.json' does not exist according to earlier cached lookups.
File '/home/src/projects/package.json' does not exist according to earlier cached lookups.
File '/home/src/package.json' does not exist according to earlier cached lookups.
File '/home/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
======== Resolving module '@typescript/lib-webworker' from '/home/src/projects/project1/__lib_node_modules_lookup_lib.webworker.d.ts__.ts'. ========
Explicitly specified module resolution kind: 'Node10'.
Loading module '@typescript/lib-webworker' from 'node_modules' folder, target file types: TypeScript, Declaration.
Searching all ancestor node_modules directories for preferred extensions: TypeScript, Declaration.
Directory '/home/src/projects/project1/node_modules' does not exist, skipping all lookups in it.
Scoped package detected, looking in 'typescript__lib-webworker'
Directory '/home/src/projects/node_modules' does not exist, skipping all lookups in it.
Scoped package detected, looking in 'typescript__lib-webworker'
Directory '/home/src/node_modules' does not exist, skipping all lookups in it.
Scoped package detected, looking in 'typescript__lib-webworker'
Directory '/home/node_modules' does not exist, skipping all lookups in it.
Scoped package detected, looking in 'typescript__lib-webworker'
Directory '/node_modules' does not exist, skipping all lookups in it.
Scoped package detected, looking in 'typescript__lib-webworker'
Loading module '@typescript/lib-webworker' from 'node_modules' folder, target file types: JavaScript.
Searching all ancestor node_modules directories for fallback extensions: JavaScript.
Directory '/home/src/projects/project1/node_modules' does not exist, skipping all lookups in it.
Directory '/home/src/projects/node_modules' does not exist, skipping all lookups in it.
Directory '/home/src/node_modules' does not exist, skipping all lookups in it.
Directory '/home/node_modules' does not exist, skipping all lookups in it.
Directory '/node_modules' does not exist, skipping all lookups in it.
======== Module name '@typescript/lib-webworker' was not resolved. ========
File '/home/src/lib/package.json' does not exist according to earlier cached lookups.
File '/home/src/package.json' does not exist according to earlier cached lookups.
File '/home/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
FileWatcher:: Added:: WatchInfo: /home/src/lib/lib.webworker.d.ts 250 undefined Source file
Reusing resolution of module '@typescript/lib-scripthost' from '/home/src/projects/project1/__lib_node_modules_lookup_lib.scripthost.d.ts__.ts' of old program, it was not resolved.
File '/home/src/lib/package.json' does not exist according to earlier cached lookups.
File '/home/src/package.json' does not exist according to earlier cached lookups.
File '/home/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/home/src/projects/project1/package.json' does not exist according to earlier cached lookups.
File '/home/src/projects/package.json' does not exist according to earlier cached lookups.
File '/home/src/package.json' does not exist according to earlier cached lookups.
File '/home/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/home/src/projects/project1/package.json' does not exist according to earlier cached lookups.
File '/home/src/projects/package.json' does not exist according to earlier cached lookups.
File '/home/src/package.json' does not exist according to earlier cached lookups.
File '/home/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/home/src/lib/package.json' does not exist according to earlier cached lookups.
File '/home/src/package.json' does not exist according to earlier cached lookups.
File '/home/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
../lib/lib.d.ts
  Default library for target 'es5'
../lib/lib.webworker.d.ts
  Library referenced via 'webworker' from file 'project1/file2.ts'
../lib/lib.scripthost.d.ts
  Library referenced via 'scripthost' from file 'project1/file2.ts'
project1/file.ts
  Matched by default include pattern '**/*'
project1/file2.ts
  Matched by default include pattern '**/*'
project1/index.ts
  Matched by default include pattern '**/*'
project1/utils.d.ts
  Matched by default include pattern '**/*'
[[90mHH:MM:SS AM[0m] Found 0 errors. Watching for file changes.



//// [/home/src/projects/project1/file.js] file written with same contents
//// [/home/src/projects/project1/file2.js]
/// <reference lib="webworker"/>
/// <reference lib="scripthost"/>


//// [/home/src/projects/project1/index.js] file written with same contents
//// [/home/src/projects/project1/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","../../lib/lib.webworker.d.ts","../../lib/lib.scripthost.d.ts","./file.ts","./file2.ts","./index.ts","./utils.d.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedFormat":1},{"version":"-3990185033-interface WebWorkerInterface { }","affectsGlobalScope":true,"impliedFormat":1},{"version":"-5403980302-interface ScriptHostInterface { }","affectsGlobalScope":true,"impliedFormat":1},{"version":"-16628394009-export const file = 10;","signature":"-9025507999-export declare const file = 10;\n","impliedFormat":1},{"version":"-17945718466-/// <reference lib=\"webworker\"/>\n/// <reference lib=\"scripthost\"/>\n","signature":"5381-","impliedFormat":1},{"version":"-6136895998-export const x = \"type1\";export const xyz = 10;","signature":"-9988949802-export declare const x = \"type1\";\nexport declare const xyz = 10;\n","impliedFormat":1},{"version":"-13729955264-export const y = 10;","impliedFormat":1}],"root":[[4,7]],"options":{"composite":true},"referencedMap":[],"semanticDiagnosticsPerFile":[1,3,2,4,5,6,7],"latestChangedDtsFile":"./index.d.ts"},"version":"FakeTSVersion"}

//// [/home/src/projects/project1/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "../../lib/lib.webworker.d.ts",
      "../../lib/lib.scripthost.d.ts",
      "./file.ts",
      "./file2.ts",
      "./index.ts",
      "./utils.d.ts"
    ],
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "original": {
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "affectsGlobalScope": true,
          "impliedFormat": 1
        },
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "../../lib/lib.webworker.d.ts": {
        "original": {
          "version": "-3990185033-interface WebWorkerInterface { }",
          "affectsGlobalScope": true,
          "impliedFormat": 1
        },
        "version": "-3990185033-interface WebWorkerInterface { }",
        "signature": "-3990185033-interface WebWorkerInterface { }",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "../../lib/lib.scripthost.d.ts": {
        "original": {
          "version": "-5403980302-interface ScriptHostInterface { }",
          "affectsGlobalScope": true,
          "impliedFormat": 1
        },
        "version": "-5403980302-interface ScriptHostInterface { }",
        "signature": "-5403980302-interface ScriptHostInterface { }",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "./file.ts": {
        "original": {
          "version": "-16628394009-export const file = 10;",
          "signature": "-9025507999-export declare const file = 10;\n",
          "impliedFormat": 1
        },
        "version": "-16628394009-export const file = 10;",
        "signature": "-9025507999-export declare const file = 10;\n",
        "impliedFormat": "commonjs"
      },
      "./file2.ts": {
        "original": {
          "version": "-17945718466-/// <reference lib=\"webworker\"/>\n/// <reference lib=\"scripthost\"/>\n",
          "signature": "5381-",
          "impliedFormat": 1
        },
        "version": "-17945718466-/// <reference lib=\"webworker\"/>\n/// <reference lib=\"scripthost\"/>\n",
        "signature": "5381-",
        "impliedFormat": "commonjs"
      },
      "./index.ts": {
        "original": {
          "version": "-6136895998-export const x = \"type1\";export const xyz = 10;",
          "signature": "-9988949802-export declare const x = \"type1\";\nexport declare const xyz = 10;\n",
          "impliedFormat": 1
        },
        "version": "-6136895998-export const x = \"type1\";export const xyz = 10;",
        "signature": "-9988949802-export declare const x = \"type1\";\nexport declare const xyz = 10;\n",
        "impliedFormat": "commonjs"
      },
      "./utils.d.ts": {
        "original": {
          "version": "-13729955264-export const y = 10;",
          "impliedFormat": 1
        },
        "version": "-13729955264-export const y = 10;",
        "signature": "-13729955264-export const y = 10;",
        "impliedFormat": "commonjs"
      }
    },
    "root": [
      [
        [
          4,
          7
        ],
        [
          "./file.ts",
          "./file2.ts",
          "./index.ts",
          "./utils.d.ts"
        ]
      ]
    ],
    "options": {
      "composite": true
    },
    "referencedMap": {},
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "../../lib/lib.scripthost.d.ts",
      "../../lib/lib.webworker.d.ts",
      "./file.ts",
      "./file2.ts",
      "./index.ts",
      "./utils.d.ts"
    ],
    "latestChangedDtsFile": "./index.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 1578
}


PolledWatches::
/home/src/projects/node_modules:
  {"pollingInterval":500}
/home/src/projects/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/package.json:
  {"pollingInterval":2000}
/home/src/projects/project1/node_modules:
  {"pollingInterval":500}
/home/src/projects/project1/node_modules/@types:
  {"pollingInterval":500}
/home/src/projects/project1/package.json:
  {"pollingInterval":2000}

FsWatches::
/home/src/lib/lib.d.ts:
  {}
/home/src/lib/lib.scripthost.d.ts:
  {}
/home/src/lib/lib.webworker.d.ts: *new*
  {}
/home/src/projects/project1/file.ts:
  {}
/home/src/projects/project1/file2.ts:
  {}
/home/src/projects/project1/index.ts:
  {}
/home/src/projects/project1/tsconfig.json:
  {}
/home/src/projects/project1/utils.d.ts:
  {}

FsWatchesRecursive::
/home/src/projects/project1:
  {}


Program root files: [
  "/home/src/projects/project1/file.ts",
  "/home/src/projects/project1/file2.ts",
  "/home/src/projects/project1/index.ts",
  "/home/src/projects/project1/utils.d.ts"
]
Program options: {
  "composite": true,
  "traceResolution": true,
  "watch": true,
  "project": "/home/src/projects/project1",
  "explainFiles": true,
  "extendedDiagnostics": true,
  "configFilePath": "/home/src/projects/project1/tsconfig.json"
}
Program structureReused: SafeModules
Program files::
/home/src/lib/lib.d.ts
/home/src/lib/lib.webworker.d.ts
/home/src/lib/lib.scripthost.d.ts
/home/src/projects/project1/file.ts
/home/src/projects/project1/file2.ts
/home/src/projects/project1/index.ts
/home/src/projects/project1/utils.d.ts

Semantic diagnostics in builder refreshed for::
/home/src/lib/lib.d.ts
/home/src/lib/lib.webworker.d.ts
/home/src/lib/lib.scripthost.d.ts
/home/src/projects/project1/file.ts
/home/src/projects/project1/file2.ts
/home/src/projects/project1/index.ts
/home/src/projects/project1/utils.d.ts

Shape signatures in builder refreshed for::
/home/src/lib/lib.webworker.d.ts (used version)
/home/src/lib/lib.scripthost.d.ts (used version)
/home/src/projects/project1/file.ts (computed .d.ts)
/home/src/projects/project1/file2.ts (computed .d.ts)
/home/src/projects/project1/index.ts (computed .d.ts)
/home/src/projects/project1/utils.d.ts (used version)

exitCode:: ExitStatus.undefined
