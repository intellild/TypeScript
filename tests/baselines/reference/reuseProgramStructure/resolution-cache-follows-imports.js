Program Reused:: Not
File: b.ts


var y = 2
resolvedModules: undefined
resolvedTypeReferenceDirectiveNames: undefined

File: a.ts

import {_} from 'b'
var x = 1
resolvedModules: 
b: {"resolvedFileName":"b.ts","extension":".ts","isExternalLibraryImport":false}
resolvedTypeReferenceDirectiveNames: undefined


MissingPaths:: ["lib.d.ts"]

a.ts(2,17): error TS2306: File 'b.ts' is not a module.



Program Reused:: Completely
File: b.ts


var y = 2
resolvedModules: undefined
resolvedTypeReferenceDirectiveNames: undefined

File: a.ts

import {_} from 'b'
var x = 2
resolvedModules: 
b: {"resolvedFileName":"b.ts","extension":".ts","isExternalLibraryImport":false}
resolvedTypeReferenceDirectiveNames: undefined


MissingPaths:: ["lib.d.ts"]

a.ts(2,17): error TS2306: File 'b.ts' is not a module.



Program Reused:: SafeModules
File: a.ts


var x = 2
resolvedModules: undefined
resolvedTypeReferenceDirectiveNames: undefined


MissingPaths:: ["lib.d.ts"]




Program Reused:: SafeModules
File: b.ts


var y = 2
resolvedModules: undefined
resolvedTypeReferenceDirectiveNames: undefined

File: a.ts

import x from 'b'
                import y from 'c'
                
var x = 2
resolvedModules: 
b: {"resolvedFileName":"b.ts","extension":".ts","isExternalLibraryImport":false}
c: undefined
resolvedTypeReferenceDirectiveNames: undefined


MissingPaths:: ["lib.d.ts"]

a.ts(2,15): error TS2306: File 'b.ts' is not a module.
a.ts(3,31): error TS2792: Cannot find module 'c'. Did you mean to set the 'moduleResolution' option to 'node', or to add aliases to the 'paths' option?


