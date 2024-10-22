import { Property, t } from '@mikro-orm/core';
import { PrimaryKey } from '@mikro-orm/postgresql';
import { v4 as uuidv4 } from 'uuid';

export abstract class BaseUUIEntity {
  @PrimaryKey({ type: t.uuid })
  id = uuidv4();

  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();
}

export abstract class BaseEntity {
  @PrimaryKey()
  id!: number;

  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();
}
