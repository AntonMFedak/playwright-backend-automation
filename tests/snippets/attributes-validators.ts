import { test, expect } from "@playwright/test";
import { attributesSchema } from "../schemas/attributes-schema";

// Type and Schema Validation
export async function expectValidAttributesSchema(responseAttributes: attributesSchema, attributesSchema: attributesSchema) {
    await test.step('Validate Attributes Type and Schema', async () => {
        expect(responseAttributes).toBeInstanceOf(Array);
        expect(responseAttributes.length).toBe(attributesSchema.length);

        responseAttributes.forEach((attr, index) => {
            expect(typeof attr.id).toBe(typeof attributesSchema[index].id);
            expect(typeof attr.name).toBe(typeof attributesSchema[index].name);
            expect(typeof attr.shortname).toBe(typeof attributesSchema[index].shortname);
            expect(typeof attr.description).toBe(typeof attributesSchema[index].description);
            expect(Array.isArray(attr.skills)).toBeTruthy();
        });
    });
}

// Response Data Validation
export async function expectValidAttributesResponse(responseAttributes: attributesSchema, attributesSampleData: attributesSchema) {
    await test.step('Validate Attributes response data', async () => {
        responseAttributes.forEach((attr, index) => {
            expect(attr.id).toBe(attributesSampleData[index].id);
            expect(attr.name).toEqual(attributesSampleData[index].name);
            expect(attr.shortname).toEqual(attributesSampleData[index].shortname);
            expect(attr.description).toEqual(attributesSampleData[index].description);
            expect(attr.skills).toEqual(attributesSampleData[index].skills);
        });
    });
}