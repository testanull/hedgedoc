/*
 * SPDX-FileCopyrightText: 2022 The HedgeDoc developers (see AUTHORS file)
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
import { registerAs } from '@nestjs/config';

import { CustomizationConfig } from '../customization.config';

export default registerAs(
  'customizationConfig',
  (): CustomizationConfig => ({
    branding: {
      customName: 'ACME Corp',
      customLogo: '',
    },
    specialUrls: {
      privacy: 'https://md.example.org/test/privacy',
      termsOfUse: 'https://md.example.org/test/termsOfUse',
      imprint: 'https://md.example.org/test/imprint',
    },
  }),
);
