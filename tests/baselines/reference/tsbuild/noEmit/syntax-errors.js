currentDirectory:: / useCaseSensitiveFileNames: false
Input::
//// [/lib/lib.d.ts]
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

//// [/src/a.ts]
const a = "hello

//// [/src/tsconfig.json]
{
  "compilerOptions": {
    "noEmit": true
  }
}



Output::
/lib/tsc --b /src/tsconfig.json -v
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * src/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'src/tsconfig.json' is out of date because output file 'src/a.js' does not exist

[[90mHH:MM:SS AM[0m] Building project '/src/tsconfig.json'...

[96msrc/a.ts[0m:[93m1[0m:[93m17[0m - [91merror[0m[90m TS1002: [0mUnterminated string literal.

[7m1[0m const a = "hello
[7m [0m [91m                [0m


Found 1 error.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsSkipped
Program root files: [
  "/src/a.ts"
]
Program options: {
  "noEmit": true,
  "configFilePath": "/src/tsconfig.json"
}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/a.ts

No cached semantic diagnostics in the builder::

No shapes updated in the builder::




Change:: no-change-run
Input::


Output::
/lib/tsc --b /src/tsconfig.json -v
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * src/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'src/tsconfig.json' is out of date because output file 'src/a.js' does not exist

[[90mHH:MM:SS AM[0m] Building project '/src/tsconfig.json'...

[96msrc/a.ts[0m:[93m1[0m:[93m17[0m - [91merror[0m[90m TS1002: [0mUnterminated string literal.

[7m1[0m const a = "hello
[7m [0m [91m                [0m


Found 1 error.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsSkipped
Program root files: [
  "/src/a.ts"
]
Program options: {
  "noEmit": true,
  "configFilePath": "/src/tsconfig.json"
}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/a.ts

No cached semantic diagnostics in the builder::

No shapes updated in the builder::




Change:: Fix error
Input::
//// [/src/a.ts]
const a = "hello"



Output::
/lib/tsc --b /src/tsconfig.json -v
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * src/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'src/tsconfig.json' is out of date because output file 'src/a.js' does not exist

[[90mHH:MM:SS AM[0m] Building project '/src/tsconfig.json'...

exitCode:: ExitStatus.Success
Program root files: [
  "/src/a.ts"
]
Program options: {
  "noEmit": true,
  "configFilePath": "/src/tsconfig.json"
}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/a.ts

Semantic diagnostics in builder refreshed for::
/lib/lib.d.ts
/src/a.ts

Shape signatures in builder refreshed for::
/lib/lib.d.ts (used version)
/src/a.ts (used version)




Change:: no-change-run
Input::


Output::
/lib/tsc --b /src/tsconfig.json -v
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * src/tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'src/tsconfig.json' is out of date because output file 'src/a.js' does not exist

[[90mHH:MM:SS AM[0m] Building project '/src/tsconfig.json'...

exitCode:: ExitStatus.Success
Program root files: [
  "/src/a.ts"
]
Program options: {
  "noEmit": true,
  "configFilePath": "/src/tsconfig.json"
}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/a.ts

Semantic diagnostics in builder refreshed for::
/lib/lib.d.ts
/src/a.ts

Shape signatures in builder refreshed for::
/lib/lib.d.ts (used version)
/src/a.ts (used version)


