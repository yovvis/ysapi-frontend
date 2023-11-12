import { ProColumns, ProFormInstance, ProTable } from '@ant-design/pro-components';
import '@umijs/max';
import { Modal } from 'antd';
import React, { useEffect, useRef } from 'react';
export type Props = {
  values: API.InterfaceInfo;
  columns: ProColumns<API.InterfaceInfo>[];
  onCancel: () => void;
  onSubmit: (values: API.InterfaceInfo) => Promise<void>;
  open: boolean;
};
const UpdateModal: React.FC<Props> = (props) => {
  const { values, open, columns, onCancel, onSubmit } = props;
  const formRef = useRef<ProFormInstance>();
  useEffect(() => {
    if (formRef) {
      formRef.current?.setFieldsValue(values);
    }
  }, [values]);

  return (
    <Modal
      open={open}
      onCancel={() => {
        onCancel?.();
      }}
      footer={null}
    >
      <ProTable
        formRef={formRef}
        type="form"
        columns={columns}
        onSubmit={async (value) => {
          onSubmit?.(value);
        }}
      />
    </Modal>
  );
};
export default UpdateModal;
