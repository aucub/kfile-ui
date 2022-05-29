<template>
    <n-space vertical :size="12">
        <n-data-table :bordered="false" :single-line="false" :columns="columns" :data="data" :pagination="pagination" />
        <n-data-table :bordered="false" :columns="columns" :data="data" :pagination="pagination" />
        <n-data-table :bordered="false" :single-line="false" single-column :columns="columns" :data="data"
            :pagination="pagination" />
    </n-space>
</template>

<script lang="ts">
import { h, defineComponent } from 'vue'
import { NTag, NButton, useMessage } from 'naive-ui'
import type { DataTableColumns } from 'naive-ui'
import { FileTypeEnum, type FileItem } from '../typings/api.d'

const createColumns = (): DataTableColumns<FileItem> => {
    return [
        {
            title: '名称',
            key: 'name'
        },
        {
            title: '修改时间',
            key: 'lastModifiedDate'
        },
        {
            title: '大小',
            key: 'size'
        }
    ]
}

const createData = (): FileItem[] => [
    {
        "id": "abc123",
        "version": 1,
        "fileInfoId": "xyz789",
        "name": "example.txt",
        "ext": "txt",
        "type": FileTypeEnum.File,
        "contentType": "text/plain",
        "directory": "/path/to/directory",
        "createdDate": new Date("2022-08-15T10:30:00Z"),
        "lastModifiedDate": new Date("2022-08-16T15:45:00Z"),
        "createdBy": "John Doe",
        "share": "public",
        "description": "This is an example file.",
        "size": 1024
    },
    {
        "id": "def456",
        "version": 2,
        "fileInfoId": "uvw987",
        "name": "folder",
        "ext": "",
        "type": FileTypeEnum.Directory,
        "contentType": "",
        "directory": "/path/to/parent",
        "createdDate": new Date("2022-08-10T08:00:00Z"),
        "lastModifiedDate": new Date("2022-08-12T13:20:00Z"),
        "createdBy": "Jane Smith",
        "share": "private",
        "description": "This is an example folder.",
        "size": 0
    }
]

export default defineComponent({
    setup() {
        const message = useMessage()
        return {
            data: createData(),
            columns: createColumns(),
            pagination: {
                pageSize: 10
            }
        }
    }
})
</script>