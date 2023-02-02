import type { ProColumnType } from '@ant-design/pro-components';

export type ProColumnDetectType<T> = Omit<ProColumnType<T>, 'dataIndex'> & {
  dataIndex?: keyof T | ProColumnType<T>['dataIndex'];
};
