import { test, expect } from '@playwright/test';
import { attributesSampleData } from './data/validate-attributes-data';
import { getAttributes } from './client/attributes-client';

let responseBody: any[] = [];

test('Validate Access to Attributes Page', async ({ request }) => {
  const attributesResponse = await getAttributes(request);

  expect(attributesResponse.status()).toBe(200);

  responseBody = await attributesResponse.json();
});

test('Validate Attributes ID', async () => {
  responseBody.forEach((item, index) => {
    expect(item.id).toBe(attributesSampleData[index].id);
  });
});

test('Validate Attributes Name', async () => {
  responseBody.forEach((item, index) => {
    expect(item.name).toBe(attributesSampleData[index].name);
  });
});

test('Validate Attributes Shortname', async () => {
  responseBody.forEach((item, index) => {
    expect(item.shortname).toBe(attributesSampleData[index].shortname);
  });
});

test('Validate Attributes Description', async () => {
  responseBody.forEach((item, index) => {
    expect(item.description).toBe(attributesSampleData[index].description);
  });
});

test('Validate Attributes Skills', async () => {
  responseBody.forEach((item, index) => {
    expect(item.skills).toEqual(attributesSampleData[index].skills);
  });  
});