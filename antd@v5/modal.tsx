import { EmptyResponse, onRequestSuccess } from "@/utils/OnRequestSuccess";
import { ProForm, ProFormText } from "@ant-design/pro-components";
import { useMutation, useQuery } from "@umijs/max";
import { Modal, Spin } from "antd";
import { atom, useAtom } from "jotai";
import type { FC } from "react";

/**
 * @description 控制操作的主键ID, 用于新建和编辑
 * @description 用于编辑或查看时，传入主键ID
 * @description 用于新建时，传入主键ID为 0
 */
export const $TM_FILENAME_BASE$Atom = atom<string | number | undefined>(
  undefined
);

type Props = {
  onOk?: () => void;
};

export const $TM_FILENAME_BASE$: FC<Props> = ({ onOk }) => {
  const [id, setId] = useAtom($TM_FILENAME_BASE$Atom);
  const [form] = ProForm.useForm();

  const { isFetching, data: initialValues } = useQuery({
    queryKey: ["$TM_FILENAME_BASE$", id],
    async queryFn() {
      if (id) {
        // todo
      }
      return {};
    },
    onSettled() {
      setTimeout(() => {
        form.resetFields();
      });
    },
  });

  const mutation = useMutation({
    async mutationFn(values: any) {
      // todo
    },
    onSuccess(v) {
      onRequestSuccess(v, () => {
        setId(undefined);
        onOk?.();
      });
    },
  });

  const title = id === 0 ? "新建" : "编辑";

  return (
    <Modal
      title={title}
      open={id !== undefined}
      onCancel={() => {
        setId(undefined);
      }}
      onOk={() => {
        form.submit();
      }}
      confirmLoading={mutation.isLoading}
      afterClose={() => {
        form.resetFields();
      }}
    >
      <Spin spinning={isFetching}>
        <ProForm
          onFinish={async (values) => {
            await mutation.mutateAsync(values);
            return true;
          }}
          layout="horizontal"
          submitter={false}
          form={form}
          initialValues={initialValues}
        >
          <ProFormText />
        </ProForm>
      </Spin>
    </Modal>
  );
};
