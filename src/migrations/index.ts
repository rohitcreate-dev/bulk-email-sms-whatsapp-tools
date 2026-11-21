import * as migration_20261006_062657_init from './20261006_062657_init';
import * as migration_20261006_082535_status from './20261006_082535_status';
import * as migration_20261006_084501_bounce from './20261006_084501_bounce';

export const migrations = [
  {
    up: migration_20261006_062657_init.up,
    down: migration_20261006_062657_init.down,
    name: '20261006_062657_init',
  },
  {
    up: migration_20261006_082535_status.up,
    down: migration_20261006_082535_status.down,
    name: '20261006_082535_status',
  },
  {
    up: migration_20261006_084501_bounce.up,
    down: migration_20261006_084501_bounce.down,
    name: '20261006_084501_bounce'
  },
];
