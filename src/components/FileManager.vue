<template>
    <el-table ref="multipleTableRef" :data="tableData" style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55" />
        <el-table-column property="name" label="名称" width="120" />
        <el-table-column label="修改时间" width="120">
            <template #default="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column property="size" label="大小" show-overflow-tooltip />
    </el-table>
    <div style="margin-top: 20px">
        <el-button @click="toggleSelection([tableData[1], tableData[2]])">Toggle selection status of second and third
            rows</el-button>
        <el-button @click="toggleSelection()">Clear selection</el-button>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElTable } from 'element-plus'
import { FileTypeEnum, type FileItem } from '../typings/api.d'

const multipleTableRef = ref<InstanceType<typeof ElTable>>()
const multipleSelection = ref<FileItem[]>([])
const toggleSelection = (rows?: FileItem[]) => {
    if (rows) {
        rows.forEach((row) => {
            // TODO: improvement typing when refactor table
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            multipleTableRef.value!.toggleRowSelection(row, undefined)
        })
    } else {
        multipleTableRef.value!.clearSelection()
    }
}
const handleSelectionChange = (val: FileItem[]) => {
    multipleSelection.value = val
}

const tableData: FileItem[] = [
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
</script>
