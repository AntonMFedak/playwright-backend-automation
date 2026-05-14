import { test } from '@playwright/test';
import { getAttributes } from '../client/attributes-client';
import { expectStatusCodeOk } from '../snippets/status-code-validators';
import { attributesSampleData } from '../data/attributes-data';
import { expectValidAttributesResponse, expectValidAttributesSchema } from '../snippets/attributes-validators';
import { Tags } from '../data/test-tags';

test.describe.serial('Validate Attributes', {tag: Tags.ATTRIBUTES}, async () => {
  test('Validate Attributes Type, Schema and Data', {tag: []}, async ({ request }) => {
    const attributesResponse = await getAttributes(request);

    await expectStatusCodeOk(attributesResponse);

    const attributes = await attributesResponse.json();

    await expectValidAttributesSchema(attributes, attributesSampleData);
    await expectValidAttributesResponse(attributes, attributesSampleData);
  });
});