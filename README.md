### Repro

Run `yarn biome lint test.tsx --write --unsafe`

### Output

```
simonparis@CMBP-SG-MAR22-0321 biome-fragment-crash-repro % yarn biome lint test.tsx --write --unsafe
yarn run v1.22.22
$ /Users/simonparis/biome-fragment-crash-repro/node_modules/.bin/biome lint test.tsx --write --unsafe
Biome encountered an unexpected error

This is a bug in Biome, not an error in your code, and we would appreciate it if you could report it to https://github.com/biomejs/biome/issues/ along with the following information to help us fixing the issue:

Source Location: /Users/runner/work/biome/biome/crates/biome_rowan/src/ast/mod.rs:238:13
Thread Name: biome::worker_0
Message: Tried to cast node with kind JS_EXPRESSION_STATEMENT as `"biome_js_syntax::generated::nodes::AnyJsCallArgument"` but was unable to cast

test.tsx internalError/panic  INTERNAL  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ processing panicked: Tried to cast node with kind JS_EXPRESSION_STATEMENT as `"biome_js_syntax::generated::nodes::AnyJsCallArgument"` but was unable to cast
  
  ⚠ This diagnostic was derived from an internal Biome error. Potential bug, please report it if necessary.
  

Checked 0 files in 1068µs. No fixes applied.
internalError/io ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ No files were processed in the specified paths.
  

error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

### Rage output

```
simonparis@CMBP-SG-MAR22-0321 biome-fragment-crash-repro % yarn biome rage --linter
yarn run v1.22.22
$ /Users/simonparis/biome-fragment-crash-repro/node_modules/.bin/biome rage --linter
CLI:
  Version:                      1.8.3
  Color support:                true

Platform:
  CPU Architecture:             aarch64
  OS:                           macos

Environment:
  BIOME_LOG_DIR:                unset
  NO_COLOR:                     unset
  TERM:                         "xterm-256color"
  JS_RUNTIME_VERSION:           "v20.11.1"
  JS_RUNTIME_NAME:              "node"
  NODE_PACKAGE_MANAGER:         "yarn/1.22.22"

Biome Configuration:
  Status:                       Loaded successfully
  Formatter disabled:           false
  Linter disabled:              false
  Organize imports disabled:    false
  VCS disabled:                 true

Linter:
  JavaScript enabled:           true
  JSON enabled:                 true
  CSS enabled:                  false
  Recommended:                  false
  All:                          false
  Enabled rules:
  performance/noDelete
  suspicious/noCatchAssign
  suspicious/noUnsafeNegation
  complexity/useLiteralKeys
  style/useImportType
  complexity/noMultipleSpacesInRegularExpressionLiterals
  a11y/useValidLang
  complexity/noUselessEmptyExport
  suspicious/useNamespaceKeyword
  suspicious/useValidTypeof
  a11y/useValidAriaRole
  correctness/noConstantCondition
  a11y/useAriaActivedescendantWithTabindex
  suspicious/noAssignInExpressions
  style/useDefaultParameterLast
  complexity/noEmptyTypeParameters
  correctness/noConstructorReturn
  style/useSelfClosingElements
  suspicious/noDuplicateParameters
  style/useTemplate
  correctness/noUnusedLabels
  complexity/noUselessTernary
  correctness/noUnreachableSuper
  suspicious/noCompareNegZero
  suspicious/noExplicitAny
  correctness/noSwitchDeclarations
  a11y/noAutofocus
  correctness/noUnsafeOptionalChaining
  correctness/noConstAssign
  suspicious/noControlCharactersInRegex
  complexity/noUselessTypeConstraint
  style/noVar
  suspicious/noDoubleEquals
  suspicious/noRedundantUseStrict
  style/useLiteralEnumMembers
  suspicious/noGlobalIsNan
  suspicious/noEmptyInterface
  suspicious/noConstEnum
  suspicious/noMisleadingCharacterClass
  correctness/noPrecisionLoss
  suspicious/noRedeclare
  correctness/noStringCaseMismatch
  correctness/noSetterReturn
  correctness/noInvalidConstructorSuper
  suspicious/noImplicitAnyLet
  suspicious/noFallthroughSwitchClause
  suspicious/noUnsafeDeclarationMerging
  correctness/noUnreachable
  a11y/useKeyWithClickEvents
  suspicious/noDuplicateObjectKeys
  complexity/noUselessThisAlias
  complexity/noThisInStatic
  complexity/useOptionalChain
  correctness/noInnerDeclarations
  style/noParameterAssign
  suspicious/noDuplicateCase
  a11y/useValidAnchor
  complexity/useRegexLiterals
  correctness/noSelfAssign
  style/noUselessElse
  style/useShorthandFunctionType
  suspicious/noShadowRestrictedNames
  a11y/useMediaCaption
  complexity/noUselessLabel
  complexity/noUselessCatch
  correctness/noUnsafeFinally
  a11y/useAriaPropsForRole
  correctness/noNonoctalDecimalEscape
  style/useEnumInitializers
  a11y/useHtmlLang
  suspicious/noDuplicateTestHooks
  complexity/noStaticOnlyClass
  style/useWhile
  complexity/useArrowFunction
  style/noInferrableTypes
  a11y/noNoninteractiveTabindex
  complexity/useSimpleNumberKeys
  correctness/useYield
  a11y/noInteractiveElementToNoninteractiveRole
  style/useNumericLiterals
  correctness/noUnnecessaryContinue
  suspicious/noApproximativeNumericConstant
  suspicious/noImportAssign
  suspicious/noLabelVar
  correctness/noGlobalObjectCalls
  suspicious/useDefaultSwitchClauseLast
  a11y/useAltText
  correctness/noEmptyCharacterClassInRegex
  suspicious/noSuspiciousSemicolonInJsx
  suspicious/noSparseArray
  a11y/useIframeTitle
  complexity/noBannedTypes
  a11y/noSvgWithoutTitle
  correctness/noVoidElementsWithChildren
  style/useAsConstAssertion
  correctness/useJsxKeyInIterable
  style/useExportType
  complexity/noUselessLoneBlockStatements
  style/noArguments
  a11y/useValidAriaValues
  suspicious/noDebugger
  suspicious/noMisleadingInstantiator
  suspicious/noPrototypeBuiltins
  suspicious/noGlobalAssign
  suspicious/noCommentText
  suspicious/noDuplicateJsxProps
  suspicious/noThenProperty
  a11y/noPositiveTabindex
  correctness/noEmptyPattern
  complexity/noExcessiveNestedTestSuites
  security/noDangerouslySetInnerHtmlWithChildren
  a11y/useKeyWithMouseEvents
  suspicious/noExtraNonNullAssertion
  suspicious/useGetterReturn
  correctness/noRenderReturnValue
  correctness/useExhaustiveDependencies
  security/noGlobalEval
  style/noNonNullAssertion
  a11y/noRedundantRoles
  complexity/useFlatMap
  correctness/useIsNan
  style/useConst
  suspicious/noGlobalIsFinite
  suspicious/noSelfCompare
  suspicious/noAsyncPromiseExecutor
  security/noDangerouslySetInnerHtml
  style/useNodejsImportProtocol
  a11y/noDistractingElements
  suspicious/noArrayIndexKey
  complexity/noWith
  suspicious/noDuplicateClassMembers
  complexity/noExtraBooleanCast
  performance/noAccumulatingSpread
  a11y/useValidAriaProps
  a11y/noRedundantAlt
  correctness/noChildrenProp
  suspicious/noConfusingLabels
  suspicious/noConfusingVoidType
  suspicious/noFocusedTests
  a11y/useButtonType
  a11y/noAriaUnsupportedElements
  correctness/noFlatMapIdentity
  a11y/noBlankTarget
  a11y/useHeadingContent
  correctness/useValidForDirection
  correctness/noVoidTypeReturn
  correctness/noInvalidUseBeforeDeclaration
  a11y/noAriaHiddenOnFocusable
  a11y/useAnchorContent
  complexity/noUselessRename
  correctness/noInvalidNewBuiltin
  style/useNumberNamespace
  complexity/noUselessConstructor
  a11y/noAccessKey
  style/useExponentiationOperator
  style/noUnusedTemplateLiteral
  complexity/noUselessSwitchCase
  style/useSingleVarDeclarator
  suspicious/noExportsInTest
  a11y/noNoninteractiveElementToInteractiveRole
  style/noCommaOperator
  suspicious/useIsArray
  a11y/noHeaderScope
  complexity/noUselessFragments
  suspicious/noMisrefactoredShorthandAssign
  complexity/noForEach
  suspicious/noClassAssign
  suspicious/noFunctionAssign

Workspace:
  Open Documents:               0

```
