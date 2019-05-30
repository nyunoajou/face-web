import { message } from 'antd';

export const success = content => {
  message.success(content);
};

export const error = content => {
  message.error(content);
};

export const warning = content => {
  message.warning(content);
};
