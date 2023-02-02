import { ProForm, ProFormText } from '@ant-design/pro-components';
import { Modal, Spin } from 'antd';
import { atom, useAtom } from 'jotai';
import type { FC } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect } from "react";

/**
 * @description 控制操作的主键ID, 用于新建和编辑
 * @description 用于编辑或查看时，传入主键ID
 * @description 用于新建时，传入主键ID为 0
 */
export const $TM_FILENAME_BASE$Atom = atom<string | number | undefined>(undefined);

type Props = {
    onOk?: () => void;
};

export const $TM_FILENAME_BASE$: FC<Props> = ({ onOk }) => {
    const [id, setId] = useAtom($TM_FILENAME_BASE$Atom);
    const [form] = ProForm.useForm();

    const { isFetching, data: initialValues } = useQuery({
        queryKey: ["$TM_FILENAME_BASE$", id],
        enabled: !!id,
        async queryFn() {
            // todo
            return {};
        },
        initialData: {} as any,
    })

    useEffect(()=>{
        setTimeout(()=>{
            // 需要在下一下事件循环中执行，否则 form 还没有初始化，initialValues 重置不会生效
            form.resetFields();
        })
    },[form, initialValues])

    const mutation = useMutation({
        async mutationFn(values: any) {
            // todo
        },
        onSuccess() {
            setId(undefined);
            onOk?.();
        }
    });

    const title = id === 0 ? '新建' : '编辑';

    return (
        <Modal
            title={title}
            open={id !== undefined}
            onCancel={() => {
                // 判断 form 是否被修改过, 二次确认是否关闭
                const isTouched = form.isFieldsTouched();
                if (isTouched) {
                    Modal.confirm({
                        title: '确定要关闭吗?',
                        content: '尚未保存，所有修改将丢失',
                        onOk() {
                            setId(undefined)
                        }
                    })
                    // 一般不需要手动 destroy, 在切换路由的时候执行 Modal.destroyAll();
                } else {
                    setId(undefined)
                }
            }}
            onOk={() => {
                form.submit();
            }}
            confirmLoading={mutation.isLoading}
        >
            <Spin spinning={isFetching}>
                {!isFetching && <ProForm
                    onFinish={async (values) => {
                        await mutation.mutateAsync(values);
                        return true;
                    }}
                    layout="horizontal"
                    submitter={false}
                    form={form}
                    initialValues={initialValues}
                >
                    <ProFormText/>
                </ProForm>}
            </Spin>
        </Modal>
    );
};
