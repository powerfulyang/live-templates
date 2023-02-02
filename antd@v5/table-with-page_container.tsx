import { PageContainer, ProTable } from '@ant-design/pro-components';

const $TM_FILENAME_BASE$ = () => {
    $COLUMNS$
    return (
        <PageContainer title={false}>
            <ProTable
                rowKey="$rowKey"
                headerTitle="$headerTitle"
                form={{
                    labelWidth: 100,
                }}
                pagination={false}
                search={false}
                options={false}
                columns={columns}
                scroll={{ x: 'max-content' }}
                request={async () => {
                    // todo
                }}
            />
        </PageContainer>
    );
};

export default $TM_FILENAME_BASE$;
