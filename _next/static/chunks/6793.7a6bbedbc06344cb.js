"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6793],{86793:(e,n,t)=>{t.r(n),t.d(n,{default:()=>m});let m=[Object.freeze(JSON.parse('{"displayName":"Move","name":"move","patterns":[{"include":"#address"},{"include":"#comments"},{"include":"#module"},{"include":"#script"},{"include":"#annotation"},{"include":"#comments"},{"include":"#annotation"},{"include":"#entry"},{"include":"#public-scope"},{"include":"#public"},{"include":"#native"},{"include":"#import"},{"include":"#friend"},{"include":"#const"},{"include":"#struct"},{"include":"#has_ability"},{"include":"#enum"},{"include":"#macro"},{"include":"#fun"},{"include":"#spec"}],"repository":{"=== DEPRECATED_BELOW ===":{},"abilities":{"comment":"Ability","match":"\\\\b(store|key|drop|copy)\\\\b","name":"support.type.ability.move"},"address":{"begin":"\\\\b(address)\\\\b","beginCaptures":{"1":{"name":"storage.modifier.type.address.keyword.move"}},"comment":"Address block","end":"(?<=})","name":"meta.address_block.move","patterns":[{"include":"#comments"},{"begin":"(?<=address)","comment":"Address value/const","end":"(?=[{])","name":"meta.address.definition.move","patterns":[{"include":"#comments"},{"include":"#address_literal"},{"comment":"Named Address","match":"\\\\b(\\\\w+)\\\\b","name":"entity.name.type.move"}]},{"include":"#module"}]},"annotation":{"begin":"#\\\\[","end":"\\\\]","name":"support.constant.annotation.move","patterns":[{"comment":"Annotation name","match":"\\\\b(\\\\w+)\\\\s*(?=\\\\=)","name":"meta.annotation.name.move"},{"begin":"=","comment":"Annotation value","end":"(?=[,\\\\]])","name":"meta.annotation.value.move","patterns":[{"include":"#literals"}]}]},"as":{"comment":"Keyword as (highlighted)","match":"\\\\b(as)\\\\b","name":"keyword.control.as.move"},"as-import":{"comment":"Keyword as in import statement; not highlighted","match":"\\\\b(as)\\\\b","name":"meta.import.as.move"},"block":{"begin":"{","comment":"Block expression or definition","end":"}","name":"meta.block.move","patterns":[{"include":"#expr"}]},"block-comments":{"patterns":[{"begin":"/\\\\*[\\\\*!](?![\\\\*/])","comment":"Block documentation comment","end":"\\\\*/","name":"comment.block.documentation.move"},{"begin":"/\\\\*","comment":"Block comment","end":"\\\\*/","name":"comment.block.move"}]},"capitalized":{"comment":"MyType - capitalized type name","match":"\\\\b([A-Z][a-zA-Z_0-9]*)\\\\b","name":"entity.name.type.use.move"},"comments":{"name":"meta.comments.move","patterns":[{"include":"#doc-comments"},{"include":"#line-comments"},{"include":"#block-comments"}]},"const":{"begin":"\\\\b(const)\\\\b","beginCaptures":{"1":{"name":"storage.modifier.const.move"}},"end":";","name":"meta.const.move","patterns":[{"include":"#comments"},{"include":"#primitives"},{"include":"#literals"},{"include":"#types"},{"match":"\\\\b([A-Z][A-Z_0-9]+)\\\\b","name":"constant.other.move"},{"include":"#error_const"}]},"control":{"comment":"Control flow","match":"\\\\b(return|while|loop|if|else|break|continue|abort)\\\\b","name":"keyword.control.move"},"doc-comments":{"begin":"///","comment":"Documentation comment","end":"$","name":"comment.block.documentation.move","patterns":[{"captures":{"1":{"name":"markup.underline.link.move"}},"comment":"Escaped member / link","match":"`(\\\\w+)`"}]},"entry":{"comment":"entry","match":"\\\\b(entry)\\\\b","name":"storage.modifier.visibility.entry.move"},"enum":{"begin":"\\\\b(enum)\\\\b","beginCaptures":{"1":{"name":"keyword.control.enum.move"}},"comment":"Enum syntax","end":"(?<=})","name":"meta.enum.move","patterns":[{"include":"#comments"},{"include":"#escaped_identifier"},{"include":"#type_param"},{"comment":"Enum name (ident)","match":"\\\\b[A-Z][a-zA-Z_0-9]*\\\\b","name":"entity.name.type.enum.move"},{"include":"#has"},{"include":"#abilities"},{"begin":"{","end":"}","name":"meta.enum.definition.move","patterns":[{"include":"#comments"},{"match":"\\\\b([A-Z][A-Za-z_0-9]*)\\\\b(?=\\\\s*\\\\()","name":"entity.name.function.enum.move"},{"match":"\\\\b([A-Z][A-Za-z_0-9]*)\\\\b","name":"entity.name.type.enum.move"},{"begin":"\\\\(","end":"\\\\)","name":"meta.enum.tuple.move","patterns":[{"include":"#comments"},{"include":"#expr_generic"},{"include":"#capitalized"},{"include":"#types"}]},{"begin":"{","end":"}","name":"meta.enum.struct.move","patterns":[{"include":"#comments"},{"include":"#escaped_identifier"},{"include":"#expr_generic"},{"include":"#capitalized"},{"include":"#types"}]}]}]},"error_const":{"match":"\\\\b(E[A-Z][A-Za-z0-9_]*)\\\\b","name":"variable.other.error.const.move"},"escaped_identifier":{"begin":"`","comment":"Escaped variable","end":"`","name":"variable.language.escaped.move"},"expr":{"comment":"Aggregate Expression","name":"meta.expression.move","patterns":[{"include":"#comments"},{"include":"#escaped_identifier"},{"include":"#expr_generic"},{"include":"#packed_field"},{"include":"#import"},{"include":"#as"},{"include":"#mut"},{"include":"#let"},{"include":"#types"},{"include":"#literals"},{"include":"#control"},{"include":"#move_copy"},{"include":"#resource_methods"},{"include":"#self_access"},{"include":"#module_access"},{"include":"#label"},{"include":"#macro_call"},{"include":"#local_call"},{"include":"#method_call"},{"include":"#path_access"},{"include":"#match_expression"},{"match":"\\\\$(?=[a-z])","name":"keyword.operator.macro.dollar.move"},{"match":"(?<=[$])[a-z][A-Z_0-9a-z]*","name":"variable.other.meta.move"},{"comment":"ALL_CONST_CAPS","match":"\\\\b([A-Z][A-Z_]+)\\\\b","name":"constant.other.move"},{"include":"#error_const"},{"comment":"CustomType","match":"\\\\b([A-Z][a-zA-Z_0-9]*)\\\\b","name":"entity.name.type.move"},{"include":"#paren"},{"include":"#block"}]},"expr_generic":{"begin":"<(?=([\\\\sa-z_,0-9A-Z<>]+>))","comment":"< angle brackets >","end":">","name":"meta.expression.generic.type.move","patterns":[{"include":"#comments"},{"include":"#types"},{"include":"#capitalized"},{"include":"#expr_generic"}]},"friend":{"begin":"\\\\b(friend)\\\\b","beginCaptures":{"1":{"name":"storage.modifier.type.move"}},"end":";","name":"meta.friend.move","patterns":[{"include":"#comments"},{"include":"#address_literal"},{"comment":"Name of the imported module","match":"\\\\b([a-zA-Z][A-Za-z_0-9]*)\\\\b","name":"entity.name.type.module.move"}]},"fun":{"patterns":[{"include":"#fun_signature"},{"include":"#block"}]},"fun_body":{"begin":"{","comment":"Function body","end":"(?<=})","name":"meta.fun_body.move","patterns":[{"include":"#expr"}]},"fun_call":{"begin":"\\\\b(\\\\w+)\\\\s*(?:<[\\\\w\\\\s,]+>)?\\\\s*[(]","beginCaptures":{"1":{"name":"entity.name.function.call.move"}},"comment":"Function call","end":"[)]","name":"meta.fun_call.move","patterns":[{"include":"#comments"},{"include":"#resource_methods"},{"include":"#self_access"},{"include":"#module_access"},{"include":"#move_copy"},{"include":"#literals"},{"include":"#fun_call"},{"include":"#block"},{"include":"#mut"},{"include":"#as"}]},"fun_signature":{"begin":"\\\\b(fun)\\\\b","beginCaptures":{"1":{"name":"storage.modifier.fun.move"}},"comment":"Function signature","end":"(?=[;{])","name":"meta.fun_signature.move","patterns":[{"include":"#comments"},{"include":"#module_access"},{"include":"#capitalized"},{"include":"#types"},{"include":"#mut"},{"begin":"(?<=\\\\bfun)","comment":"Function name","end":"(?=[<(])","name":"meta.function_name.move","patterns":[{"include":"#comments"},{"include":"#escaped_identifier"},{"match":"\\\\b(\\\\w+)\\\\b","name":"entity.name.function.move"}]},{"include":"#type_param"},{"begin":"[(]","comment":"Parentheses","end":"[)]","name":"meta.parentheses.move","patterns":[{"include":"#comments"},{"include":"#self_access"},{"include":"#expr_generic"},{"include":"#escaped_identifier"},{"include":"#module_access"},{"include":"#capitalized"},{"include":"#types"},{"include":"#mut"}]},{"comment":"Keyword acquires","match":"\\\\b(acquires)\\\\b","name":"storage.modifier"}]},"has":{"comment":"Has Abilities","match":"\\\\b(has)\\\\b","name":"keyword.control.ability.has.move"},"has_ability":{"begin":"(?<=[})])\\\\s+(has)\\\\b","beginCaptures":{"1":{"name":"storage.modifier.type.move"}},"end":";","name":"meta.has.ability.move","patterns":[{"include":"#comments"},{"include":"#abilities"}]},"ident":{"match":"\\\\b([a-zA-Z][A-Z_a-z0-9]*)\\\\b","name":"meta.identifier.move"},"import":{"begin":"\\\\b(use)\\\\b","beginCaptures":{"1":{"name":"storage.modifier.type.move"}},"end":";","name":"meta.import.move","patterns":[{"include":"#comments"},{"include":"#use_fun"},{"include":"#address_literal"},{"include":"#as-import"},{"comment":"Uppercase entities","match":"\\\\b([A-Z]\\\\w*)\\\\b","name":"entity.name.type.move"},{"begin":"{","comment":"Module members","end":"}","patterns":[{"include":"#comments"},{"include":"#as-import"},{"comment":"Uppercase entities","match":"\\\\b([A-Z]\\\\w*)\\\\b","name":"entity.name.type.move"}]},{"comment":"Name of the imported module","match":"\\\\b(\\\\w+)\\\\b","name":"meta.entity.name.type.module.move"}]},"inline":{"comment":"inline","match":"\\\\b(inline)\\\\b","name":"storage.modifier.visibility.inline.move"},"label":{"comment":"Label","match":"\'[a-z][a-z_0-9]*","name":"string.quoted.single.label.move"},"let":{"comment":"Keyword let","match":"\\\\b(let)\\\\b","name":"keyword.control.move"},"line-comments":{"begin":"//","comment":"Single-line comment","end":"$","name":"comment.line.double-slash.move"},"literals":{"comment":"Literals supported in Move","name":"meta.literal.move","patterns":[{"comment":"base16 address literal","match":"@0x[A-F0-9a-f]+","name":"support.constant.address.base16.move"},{"comment":"named address literal @[ident]","match":"@[a-zA-Z][a-zA-Z_0-9]*","name":"support.constant.address.name.move"},{"comment":"Hex literal","match":"0x[_a-fA-F0-9]+(?:u(?:8|16|32|64|128|256))?","name":"constant.numeric.hex.move"},{"comment":"Numeric literal","match":"(?<!(?:\\\\w|(?:(?<!\\\\.)\\\\.)))[0-9][_0-9]*(?:\\\\.(?!\\\\.)(?:[0-9][_0-9]*)?)?(?:[eE][+\\\\-]?[_0-9]+)?(?:[u](?:8|16|32|64|128|256))?","name":"constant.numeric.move"},{"begin":"\\\\bb\\"","comment":"vector ascii bytestring literal","end":"\\"","name":"meta.vector.literal.ascii.move","patterns":[{"comment":"character escape","match":"\\\\\\\\.","name":"constant.character.escape.move"},{"comment":"Special symbol escape","match":"\\\\\\\\[nrt\\\\0\\"]","name":"constant.character.escape.move"},{"comment":"HEX Escape","match":"\\\\\\\\x[a-fA-F0-9][A-Fa-f0-9]","name":"constant.character.escape.hex.move"},{"comment":"ASCII Character","match":"[\\\\x00-\\\\x7F]","name":"string.quoted.double.raw.move"}]},{"begin":"x\\"","comment":"vector hex literal","end":"\\"","name":"meta.vector.literal.hex.move","patterns":[{"comment":"vector hex literal","match":"[A-Fa-f0-9]+","name":"constant.character.move"}]},{"comment":"bool literal","match":"\\\\b(?:true|false)\\\\b","name":"constant.language.boolean.move"},{"begin":"vector\\\\[","comment":"vector literal (macro?)","end":"\\\\]","name":"meta.vector.literal.macro.move","patterns":[{"include":"#expr"}]}]},"local_call":{"comment":"call to a local / imported fun","match":"\\\\b([a-z][_a-z0-9]*)(?=[<\\\\(])","name":"entity.name.function.call.local.move"},"macro":{"begin":"\\\\b(macro)\\\\b","beginCaptures":{"1":{"name":"keyword.control.macro.move"}},"comment":"macro fun [ident] {}","end":"(?<=})","name":"meta.macro.move","patterns":[{"include":"#comments"},{"include":"#fun"}]},"macro_call":{"captures":{"2":{"name":"support.function.macro.move"}},"comment":"Macro fun call","match":"(\\\\b|\\\\.)([a-z][A-Za-z0-9_]*)!","name":"meta.macro.call"},"match_expression":{"begin":"\\\\b(match)\\\\b","beginCaptures":{"1":{"name":"keyword.control.match.move"}},"comment":"enum pattern matching","end":"(?<=})","name":"meta.match.move","patterns":[{"include":"#comments"},{"include":"#escaped_identifier"},{"include":"#types"},{"begin":"{","comment":"Block expression or definition","end":"}","name":"meta.match.block.move","patterns":[{"comment":"arrow operator","match":"\\\\b(=>)\\\\b","name":"operator.match.move"},{"include":"#expr"}]},{"include":"#expr"}]},"method_call":{"captures":{"1":{"name":"entity.name.function.call.path.move"}},"comment":"<expr>.[ident]<>?() call","match":"\\\\.([a-z][_a-z0-9]*)(?=[<\\\\(])","name":"meta.path.call.move"},"module":{"begin":"\\\\b(module)\\\\b","beginCaptures":{"1":{"name":"storage.modifier.type.move"}},"comment":"Module definition","end":"(?<=[;}])","name":"meta.module.move","patterns":[{"include":"#comments"},{"begin":"(?<=\\\\b(module)\\\\b)","comment":"Module name","end":"(?=[;{])","patterns":[{"include":"#comments"},{"include":"#escaped_identifier"},{"begin":"(?<=\\\\b(module))","comment":"Module namespace / address","end":"(?=[(::){])","name":"constant.other.move","patterns":[{"include":"#comments"},{"include":"#escaped_identifier"}]},{"begin":"(?<=::)","comment":"Module name","end":"(?=[\\\\s;{])","name":"entity.name.type.move","patterns":[{"include":"#comments"},{"include":"#escaped_identifier"}]}]},{"begin":"{","comment":"Module scope","end":"}","name":"meta.module_scope.move","patterns":[{"include":"#comments"},{"include":"#annotation"},{"include":"#entry"},{"include":"#public-scope"},{"include":"#public"},{"include":"#native"},{"include":"#import"},{"include":"#friend"},{"include":"#const"},{"include":"#struct"},{"include":"#has_ability"},{"include":"#enum"},{"include":"#macro"},{"include":"#fun"},{"include":"#spec"}]}]},"module_access":{"captures":{"1":{"name":"meta.entity.name.type.accessed.module.move"},"2":{"name":"entity.name.function.call.move"}},"comment":"Use of module type or method","match":"\\\\b(\\\\w+)::(\\\\w+)\\\\b","name":"meta.module_access.move"},"module_label":{"begin":"^\\\\s*(module)\\\\b","comment":"Module label, inline module definition","end":";\\\\s*$","name":"meta.module.label.move","patterns":[{"include":"#comments"},{"include":"#escaped_identifier"},{"begin":"(?<=\\\\bmodule\\\\b)","comment":"Module namespace / address","end":"(?=[(::){])","name":"constant.other.move"},{"begin":"(?<=::)","comment":"Module name","end":"(?=[\\\\s{])","name":"entity.name.type.move"}]},"move_copy":{"comment":"Keywords move and copy","match":"\\\\b(move|copy)\\\\b","name":"variable.language.move"},"mut":{"comment":"Mutable reference and let mut","match":"\\\\b(mut)\\\\b","name":"storage.modifier.mut.move"},"native":{"comment":"native","match":"\\\\b(native)\\\\b","name":"storage.modifier.visibility.native.move"},"packed_field":{"comment":"[ident]: ","match":"[a-z][a-z0-9_]+\\\\s*:\\\\s*(?=\\\\s)","name":"meta.struct.field.move"},"paren":{"begin":"\\\\(","end":"\\\\)","name":"meta.paren.move","patterns":[{"include":"#expr"}]},"path_access":{"comment":"<expr>.[ident] access","match":"\\\\.[a-z][_a-z0-9]*\\\\b","name":"meta.path.access.move"},"phantom":{"comment":"Keyword phantom inside type parameters","match":"\\\\b(phantom)\\\\b","name":"keyword.control.phantom.move"},"primitives":{"comment":"Primitive types","match":"\\\\b(u8|u16|u32|u64|u128|u256|address|bool|signer)\\\\b","name":"support.type.primitives.move"},"public":{"comment":"public","match":"\\\\b(public)\\\\b","name":"storage.modifier.visibility.public.move"},"public-scope":{"begin":"(?<=\\\\b(public))\\\\s*\\\\(","comment":"public (friend/script/package)","end":"\\\\)","name":"meta.public.scoped.move","patterns":[{"include":"#comments"},{"match":"\\\\b(friend|script|package)\\\\b","name":"keyword.control.public.scope.move"}]},"resource_methods":{"comment":"Methods to work with resource","match":"\\\\b(borrow_global|borrow_global_mut|exists|move_from|move_to_sender|move_to)\\\\b","name":"support.function.typed.move"},"script":{"begin":"\\\\b(script)\\\\b","beginCaptures":{"1":{"name":"storage.modifier.script.move"}},"end":"(?<=})","name":"meta.script.move","patterns":[{"include":"#comments"},{"begin":"{","comment":"Script scope","end":"}","name":"meta.script_scope.move","patterns":[{"include":"#const"},{"include":"#comments"},{"include":"#import"},{"include":"#fun"}]}]},"self_access":{"captures":{"1":{"name":"variable.language.self.move"},"2":{"name":"entity.name.function.call.move"}},"comment":"Use of Self","match":"\\\\b(Self)::(\\\\w+)\\\\b","name":"meta.self_access.move"},"spec":{"begin":"\\\\b(spec)\\\\b","beginCaptures":{"1":{"name":"storage.modifier.spec.move"}},"end":"(?<=[;}])","name":"meta.spec.move","patterns":[{"comment":"Spec target","match":"\\\\b(module|schema|struct|fun)","name":"storage.modifier.spec.target.move"},{"comment":"Spec define inline","match":"\\\\b(define)","name":"storage.modifier.spec.define.move"},{"comment":"Target name","match":"\\\\b(\\\\w+)\\\\b","name":"entity.name.function.move"},{"begin":"{","comment":"Spec block","end":"}","patterns":[{"include":"#comments"},{"include":"#spec_block"},{"include":"#spec_types"},{"include":"#spec_define"},{"include":"#spec_keywords"},{"include":"#control"},{"include":"#fun_call"},{"include":"#literals"},{"include":"#types"},{"include":"#let"}]}]},"spec_block":{"begin":"{","comment":"Spec block","end":"}","name":"meta.spec_block.move","patterns":[{"include":"#comments"},{"include":"#spec_block"},{"include":"#spec_types"},{"include":"#fun_call"},{"include":"#literals"},{"include":"#control"},{"include":"#types"},{"include":"#let"}]},"spec_define":{"begin":"\\\\b(define)\\\\b","beginCaptures":{"1":{"name":"keyword.control.move.spec"}},"comment":"Spec define keyword","end":"(?=[;{])","name":"meta.spec_define.move","patterns":[{"include":"#comments"},{"include":"#spec_types"},{"include":"#types"},{"begin":"(?<=\\\\bdefine)","comment":"Function name","end":"(?=[(])","patterns":[{"include":"#comments"},{"match":"\\\\b(\\\\w+)\\\\b","name":"entity.name.function.move"}]}]},"spec_keywords":{"match":"\\\\b(global|pack|unpack|pragma|native|include|ensures|requires|invariant|apply|aborts_if|modifies)\\\\b","name":"keyword.control.move.spec"},"spec_types":{"comment":"Spec-only types","match":"\\\\b(range|num|vector|bool|u8|u16|u32|u64|u128|u256|address)\\\\b","name":"support.type.vector.move"},"struct":{"begin":"\\\\b(struct)\\\\b","beginCaptures":{"1":{"name":"storage.modifier.type.move"}},"end":"(?<=[};\\\\)])","name":"meta.struct.move","patterns":[{"include":"#comments"},{"include":"#escaped_identifier"},{"include":"#has"},{"include":"#abilities"},{"comment":"Struct name (ident)","match":"\\\\b[A-Z][a-zA-Z_0-9]*\\\\b","name":"entity.name.type.struct.move"},{"begin":"\\\\(","comment":"Positional fields","end":"\\\\)","name":"meta.struct.paren.move","patterns":[{"include":"#comments"},{"include":"#capitalized"},{"include":"#types"}]},{"include":"#type_param"},{"begin":"\\\\(","comment":"Simple struct","end":"(?<=[)])","name":"meta.struct.paren.move","patterns":[{"include":"#comments"},{"include":"#types"}]},{"begin":"{","comment":"Struct body","end":"}","name":"meta.struct.body.move","patterns":[{"include":"#comments"},{"include":"#self_access"},{"include":"#escaped_identifier"},{"include":"#module_access"},{"include":"#expr_generic"},{"include":"#capitalized"},{"include":"#types"}]},{"include":"#has_ability"}]},"struct_pack":{"begin":"(?<=[A-Za-z0-9_>])\\\\s*{","comment":"Struct { field: value... }; identified as generic / ident followed by curly\'s","end":"}","name":"meta.struct.pack.move","patterns":[{"include":"#comments"}]},"type_param":{"begin":"<","comment":"Generic type param","end":">","name":"meta.generic_param.move","patterns":[{"include":"#comments"},{"include":"#phantom"},{"include":"#capitalized"},{"include":"#module_access"},{"include":"#abilities"}]},"types":{"comment":"Built-in types + vector","name":"meta.types.move","patterns":[{"include":"#primitives"},{"include":"#vector"}]},"use_fun":{"begin":"\\\\b(fun)\\\\b","beginCaptures":{"1":{"name":"storage.modifier.fun.move"}},"comment":"use { fun } internals","end":"(?=;)","name":"meta.import.fun.move","patterns":[{"include":"#comments"},{"comment":"as keyword","match":"\\\\b(as)\\\\b","name":"keyword.control.as.move"},{"comment":"Self keyword","match":"\\\\b(Self)\\\\b","name":"variable.language.self.use.fun.move"},{"comment":"Function name","match":"\\\\b(_______[a-z][a-z_0-9]+)\\\\b","name":"entity.name.function.use.move"},{"include":"#types"},{"include":"#escaped_identifier"},{"include":"#capitalized"}]},"vector":{"comment":"vector type","match":"\\\\b(vector)\\\\b","name":"support.type.vector.move"}},"scopeName":"source.move"}'))]}}]);