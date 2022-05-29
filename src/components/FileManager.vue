<template  #default="scope">
    <div class="common-layout">
        <el-container>
            <el-header><el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
                    <el-breadcrumb-item><a href="/">promotion management</a></el-breadcrumb-item>
                    <el-breadcrumb-item>promotion list</el-breadcrumb-item>
                    <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
                </el-breadcrumb></el-header>
            <el-main>
                <div class="flex">
                    <el-button type="primary" @click="openFileUpload">
                        <Icon icon="fluent:arrow-upload-16-filled" />上传
                    </el-button>
                    <el-dialog v-model="dialogFileUploadVisible">
                        <FileUploader @close="dialogFileUploadVisible = false" />
                    </el-dialog>
                    <el-button type="primary">
                        <Icon icon="fluent:add-16-filled" />新建
                    </el-button>
                    <el-button v-if="multipleSelection.length > 1" @click="handleButtonClick">
                        <Icon icon="fluent:delete-16-filled" />删除
                    </el-button>
                    <el-button v-if="multipleSelection.length > 1" @click="handleButtonClick">
                        <Icon icon="fluent:folder-arrow-right-16-filled" />移动
                    </el-button>
                    <el-button v-if="multipleSelection.length > 1" @click="handleButtonClick">
                        <Icon icon="fluent:copy-add-20-filled" />复制
                    </el-button>
                    <el-button v-if="multipleSelection.length == 1" @click="handleButtonClick">
                        <Icon icon="fluent:arrow-download-16-filled" />下载
                    </el-button>
                    <el-button v-if="multipleSelection.length == 1" @click="handleButtonClick">
                        <Icon icon="fluent:share-16-filled" />分享
                    </el-button>
                    <el-button v-if="multipleSelection.length == 1 && multipleSelection[0].type === FileTypeEnum.Directory"
                        @click="handleButtonClick">
                        <Icon icon="fluent:folder-open-16-filled" />打开
                    </el-button>
                    <el-button v-if="multipleSelection.length == 1 && multipleSelection[0].type === FileTypeEnum.File"
                        @click="handleButtonClick">
                        <Icon icon="fluent:preview-link-16-filled" />预览
                    </el-button>
                    <el-dropdown v-if="multipleSelection.length == 1" @click="handleButtonClick">
                        <el-button>
                            <Icon icon="fluent:more-horizontal-16-filled" />更多
                        </el-button>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item><el-button @click="handleButtonClick">
                                        <Icon icon="fluent:rename-16-filled" />重命名
                                    </el-button></el-dropdown-item>
                                <el-dropdown-item> <el-button @click="handleButtonClick">
                                        <Icon icon="fluent:folder-arrow-right-16-filled" />移动
                                    </el-button></el-dropdown-item>
                                <el-dropdown-item><el-button @click="handleButtonClick">
                                        <Icon icon="fluent:copy-add-20-filled" />复制
                                    </el-button></el-dropdown-item>
                                <el-dropdown-item><el-button @click="handleButtonClick">
                                        <Icon icon="fluent:delete-16-filled" />删除
                                    </el-button></el-dropdown-item>
                                <el-dropdown-item v-if="multipleSelection[0].type === FileTypeEnum.File"><el-button
                                        @click="handleButtonClick">
                                        <Icon icon="fluent:history-16-filled" />历史版本
                                    </el-button></el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </div>

                <el-table ref="multipleTableRef" :data="tableData" style="width: 100%" :highlight-current-row=true
                    @selection-change="handleSelectionChange" @cell-mouse-enter="handleCellMouseEnter"
                    @cell-mouse-leave="handleCellMouseLeave">
                    <el-table-column type="selection" width="55" />
                    <el-table-column property="name" label="名称" sortable width="120" />
                    <el-table-column label="">
                        <template #default="scope">
                            <div v-if="isRowHovered(scope.row)">
                                <el-button text>
                                    <Icon icon="fluent:arrow-download-16-filled" />
                                </el-button>
                                <el-button text>
                                    <Icon icon="fluent:share-16-filled" />
                                </el-button>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="">
                        <template #default="scope">
                            <div>
                                <el-dropdown>
                                    <el-button v-if="isRowHovered(scope.row)" text>
                                        <Icon icon="fluent:more-horizontal-16-filled" />
                                    </el-button>
                                    <template #dropdown>
                                        <el-dropdown-menu>
                                            <el-dropdown-item><el-button @click="handleButtonClick">
                                                    <Icon icon="fluent:rename-16-filled" />重命名
                                                </el-button></el-dropdown-item>
                                            <el-dropdown-item> <el-button @click="handleButtonClick">
                                                    <Icon icon="fluent:folder-arrow-right-16-filled" />移动
                                                </el-button></el-dropdown-item>
                                            <el-dropdown-item><el-button @click="handleButtonClick">
                                                    <Icon icon="fluent:copy-add-20-filled" />复制
                                                </el-button></el-dropdown-item>
                                            <el-dropdown-item><el-button @click="handleButtonClick">
                                                    <Icon icon="fluent:delete-16-filled" />删除
                                                </el-button></el-dropdown-item>
                                            <el-dropdown-item v-if="scope.type === FileTypeEnum.File"><el-button
                                                    @click="handleButtonClick">
                                                    <Icon icon="fluent:history-16-filled" />历史版本
                                                </el-button></el-dropdown-item>
                                        </el-dropdown-menu>
                                    </template>
                                </el-dropdown>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="修改时间" sortable width="120">
                        <template #default="scope">
                            {{ formatDate(scope.row.lastModifiedDate) }}
                        </template>
                    </el-table-column>
                    <el-table-column property="size" label="大小" sortable show-overflow-tooltip>
                        <template #default="scope">
                            {{ formatSize(scope.row.size) }}
                        </template>
                    </el-table-column>
                </el-table>
            </el-main>
        </el-container>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElTable, dayjs } from 'element-plus'
import { filesize } from "filesize";
import { FileTypeEnum, type FileItem } from '../typings/api.d'
import { Icon } from '@iconify/vue';
import FileUploader from './FileUploader.vue';

const hoveredRow = ref<string | null>(null)

const dialogFileUploadVisible = ref(false);

const openFileUpload = () => {
    dialogFileUploadVisible.value = true;
};

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
const handleEdit = (index: number, row: FileItem) => {
    console.log(index, row)
}
const handleDelete = (index: number, row: FileItem) => {
    console.log(index, row)
}
const handleButtonClick = () => {
    // 处理按钮点击事件
}

const isRowHovered = (row: FileItem): boolean => {
    return hoveredRow.value === row.id
}

const handleCellMouseEnter = (row: { id: string; }, column: any, cell: any) => {
    hoveredRow.value = row.id;
};

const handleCellMouseLeave = (row: { id: string; }, column: any, cell: any) => {
    hoveredRow.value = null;
};

const formatDate = (date: Date) => {
    return dayjs(date).format('YYYY-MM-DD HH:mm:ss')
};

const formatSize = (size: number) => {
    return filesize(size)
};
</script>
