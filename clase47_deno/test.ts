import { 
    assertEquals,
    assertStrictEquals
} from "https://deno.land/std@0.136.0/testing/asserts.ts"

Deno.test('Example', function(): void {
    assertEquals("world", "world")
    assertEquals({hello: "world"}, {hello: "world"})
})

Deno.test('isStrictilyEqual', function() : void {
    const a = {}
    const b = a
    assertStrictEquals(a, b)
})

Deno.test('isStrictilyEqual2', function() : void {
    const a = {}
    const b = {}
    assertStrictEquals(a, b)
})