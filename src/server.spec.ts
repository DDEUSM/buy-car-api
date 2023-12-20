import { describe, test, expect } from "vitest";

describe("Testing hello world!", () => 
{
    test("Test1", () => {
        expect("Hello World!").toBeTypeOf("string");
    });
})