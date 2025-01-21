"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7719],{37719:(e,n,a)=>{a.r(n),a.d(n,{default:()=>t});let t=[Object.freeze(JSON.parse('{"displayName":"AWK","fileTypes":["awk"],"name":"awk","patterns":[{"include":"#comment"},{"include":"#procedure"},{"include":"#pattern"}],"repository":{"builtin-pattern":{"match":"\\\\b(BEGINFILE|BEGIN|ENDFILE|END)\\\\b","name":"constant.language.awk"},"command":{"patterns":[{"match":"\\\\b(?:next|print|printf)\\\\b","name":"keyword.other.command.awk"},{"match":"\\\\b(?:close|getline|delete|system)\\\\b","name":"keyword.other.command.nawk"},{"match":"\\\\b(?:fflush|nextfile)\\\\b","name":"keyword.other.command.bell-awk"}]},"comment":{"match":"#.*","name":"comment.line.number-sign.awk"},"constant":{"patterns":[{"include":"#numeric-constant"},{"include":"#string-constant"}]},"escaped-char":{"match":"\\\\\\\\(?:[\\\\\\\\abfnrtv/\\"]|x[0-9A-Fa-f]{2}|[0-7]{3})","name":"constant.character.escape.awk"},"expression":{"patterns":[{"include":"#command"},{"include":"#function"},{"include":"#constant"},{"include":"#variable"},{"include":"#regexp-in-expression"},{"include":"#operator"},{"include":"#groupings"}]},"function":{"patterns":[{"match":"\\\\b(?:exp|int|log|sqrt|index|length|split|sprintf|substr)\\\\b","name":"support.function.awk"},{"match":"\\\\b(?:atan2|cos|rand|sin|srand|gsub|match|sub|tolower|toupper)\\\\b","name":"support.function.nawk"},{"match":"\\\\b(?:gensub|strftime|systime)\\\\b","name":"support.function.gawk"}]},"function-definition":{"begin":"\\\\b(function)\\\\s+(\\\\w+)(\\\\()","beginCaptures":{"1":{"name":"storage.type.function.awk"},"2":{"name":"entity.name.function.awk"},"3":{"name":"punctuation.definition.parameters.begin.awk"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.definition.parameters.end.awk"}},"patterns":[{"match":"\\\\b(\\\\w+)\\\\b","name":"variable.parameter.function.awk"},{"match":"\\\\b(,)\\\\b","name":"punctuation.separator.parameters.awk"}]},"groupings":{"patterns":[{"match":"\\\\(","name":"meta.brace.round.awk"},{"match":"\\\\)","name":"meta.brace.round.awk"},{"match":"\\\\,","name":"punctuation.separator.parameters.awk"}]},"keyword":{"match":"\\\\b(?:break|continue|do|while|exit|for|if|else|return)\\\\b","name":"keyword.control.awk"},"numeric-constant":{"match":"\\\\b[0-9]+(?:\\\\.[0-9]+)?(?:e[+-][0-9]+)?\\\\b","name":"constant.numeric.awk"},"operator":{"patterns":[{"match":"(!?~|[=<>!]=|[<>])","name":"keyword.operator.comparison.awk"},{"match":"\\\\b(in)\\\\b","name":"keyword.operator.comparison.awk"},{"match":"([+\\\\-*/%^]=|\\\\+\\\\+|--|>>|=)","name":"keyword.operator.assignment.awk"},{"match":"(\\\\|\\\\||&&|!)","name":"keyword.operator.boolean.awk"},{"match":"([+\\\\-*/%^])","name":"keyword.operator.arithmetic.awk"},{"match":"([?:])","name":"keyword.operator.trinary.awk"},{"match":"(\\\\[|\\\\])","name":"keyword.operator.index.awk"}]},"pattern":{"patterns":[{"include":"#regexp-as-pattern"},{"include":"#function-definition"},{"include":"#builtin-pattern"},{"include":"#expression"}]},"procedure":{"begin":"\\\\{","end":"\\\\}","patterns":[{"include":"#comment"},{"include":"#procedure"},{"include":"#keyword"},{"include":"#expression"}]},"regex-as-assignment":{"begin":"([^=<>!+\\\\-*/%^]=)\\\\s*(/)","beginCaptures":{"1":{"name":"keyword.operator.assignment.awk"},"2":{"name":"punctuation.definition.regex.begin.awk"}},"contentName":"string.regexp","end":"/","endCaptures":{"0":{"name":"punctuation.definition.regex.end.awk"}},"patterns":[{"include":"source.regexp"}]},"regex-as-comparison":{"begin":"(!?~)\\\\s*(/)","beginCaptures":{"1":{"name":"keyword.operator.comparison.awk"},"2":{"name":"punctuation.definition.regex.begin.awk"}},"contentName":"string.regexp","end":"/","endCaptures":{"0":{"name":"punctuation.definition.regex.end.awk"}},"patterns":[{"include":"source.regexp"}]},"regex-as-first-argument":{"begin":"(\\\\()\\\\s*(/)","beginCaptures":{"1":{"name":"meta.brace.round.awk"},"2":{"name":"punctuation.definition.regex.begin.awk"}},"contentName":"string.regexp","end":"/","endCaptures":{"0":{"name":"punctuation.definition.regex.end.awk"}},"patterns":[{"include":"source.regexp"}]},"regex-as-nth-argument":{"begin":"(,)\\\\s*(/)","beginCaptures":{"1":{"name":"punctuation.separator.parameters.awk"},"2":{"name":"punctuation.definition.regex.begin.awk"}},"contentName":"string.regexp","end":"/","endCaptures":{"0":{"name":"punctuation.definition.regex.end.awk"}},"patterns":[{"include":"source.regexp"}]},"regexp-as-pattern":{"begin":"/","beginCaptures":{"0":{"name":"punctuation.definition.regex.begin.awk"}},"contentName":"string.regexp","end":"/","endCaptures":{"0":{"name":"punctuation.definition.regex.end.awk"}},"patterns":[{"include":"source.regexp"}]},"regexp-in-expression":{"patterns":[{"include":"#regex-as-assignment"},{"include":"#regex-as-comparison"},{"include":"#regex-as-first-argument"},{"include":"#regex-as-nth-argument"}]},"string-constant":{"begin":"\\"","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.awk"}},"end":"\\"","endCaptures":{"0":{"name":"punctuation.definition.string.end.awk"}},"name":"string.quoted.double.awk","patterns":[{"include":"#escaped-char"}]},"variable":{"patterns":[{"match":"\\\\$[0-9]+","name":"variable.language.awk"},{"match":"\\\\b(?:FILENAME|FS|NF|NR|OFMT|OFS|ORS|RS)\\\\b","name":"variable.language.awk"},{"match":"\\\\b(?:ARGC|ARGV|CONVFMT|ENVIRON|FNR|RLENGTH|RSTART|SUBSEP)\\\\b","name":"variable.language.nawk"},{"match":"\\\\b(?:ARGIND|ERRNO|FIELDWIDTHS|IGNORECASE|RT)\\\\b","name":"variable.language.gawk"}]}},"scopeName":"source.awk"}'))]}}]);