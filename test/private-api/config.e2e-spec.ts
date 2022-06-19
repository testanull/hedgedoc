/*
 * SPDX-FileCopyrightText: 2022 The HedgeDoc developers (see AUTHORS file)
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
import request from 'supertest';

import { TestSetup, TestSetupBuilder } from '../test-setup';

describe('Config', () => {
  let testSetup: TestSetup;

  beforeEach(async () => {
    testSetup = await TestSetupBuilder.create().build();
    await testSetup.app.init();
  });

  afterEach(async () => {
    await testSetup.app.close();
    await testSetup.cleanup();
  });

  test('frontend config can be retrieved', async () => {
    const response = await request(testSetup.app.getHttpServer()).get(
      '/api/private/config',
    );
    expect(response.status).toBe(200);
    expect(response.body.version).toBeDefined();
    expect(response.body.authProviders).toBeInstanceOf(Array);
  });
});
