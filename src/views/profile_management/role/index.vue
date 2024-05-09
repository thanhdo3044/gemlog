<script setup lang="ts">
import { useRole } from "./utils/hook";
import { ref, computed, nextTick, onMounted } from "vue";
import { PureTableBar } from "@/components/RePureTableBar";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import {
  delay,
  subBefore,
  deviceDetection,
  useResizeObserver
} from "@pureadmin/utils";

// import Database from "@iconify-icons/ri/database-2-line";
import More from "@iconify-icons/ep/more-filled";
import Delete from "@iconify-icons/ep/delete";
import EditPen from "@iconify-icons/ep/edit-pen";
import Refresh from "@iconify-icons/ep/refresh";
import Menu from "@iconify-icons/ep/menu";
import AddFill from "@iconify-icons/ri/add-circle-line";
import Close from "@iconify-icons/ep/close";
import Check from "@iconify-icons/ep/check";

defineOptions({
  name: "SystemRole"
});

const iconClass = computed(() => {
  return [
    "w-[22px]",
    "h-[22px]",
    "flex",
    "justify-center",
    "items-center",
    "outline-none",
    "rounded-[4px]",
    "cursor-pointer",
    "transition-colors",
    "hover:bg-[#0000000f]",
    "dark:hover:bg-[#ffffff1f]",
    "dark:hover:text-[#ffffffd9]"
  ];
});

const treeRef = ref();
const formRef = ref();
const tableRef = ref();
const contentRef = ref();
const treeHeight = ref();

const {
  form,
  isShow,
  curRow,
  loading,
  columns,
  rowStyle,
  dataList,
  treeData,
  treeProps,
  isLinkage,
  pagination,
  isExpandAll,
  isSelectAll,
  treeSearchValue,
  // buttonClass,
  onSearch,
  resetForm,
  openDialog,
  handleMenu,
  handleSave,
  handleDelete,
  filterMethod,
  transformI18n,
  onQueryChanged,
  // handleDatabase,
  handleSizeChange,
  handleCurrentChange,
  handleSelectionChange
} = useRole(treeRef);

onMounted(() => {
  useResizeObserver(contentRef, async () => {
    await nextTick();
    delay(60).then(() => {
      treeHeight.value = parseFloat(
        subBefore(tableRef.value.getTableDoms().tableWrapper.style.height, "px")
      );
    });
  });
});
</script>

<template>
  <div class="main">
    <el-form
      ref="formRef"
      :inline="true"
      :model="form"
      class="search-form bg-bg_color w-[99/100] pl-8 pt-[12px] overflow-auto"
    >
      <el-form-item>
        <el-button
          type="primary"
          :icon="useRenderIcon('ri:play-line')"
          :loading="loading"
          @click=""
        >
          Start
        </el-button>

        <el-button
          type="danger"
          :icon="useRenderIcon('ri:stop-line')"
          :loading="loading"
          @click=""
        >
          Stop
        </el-button>
        <el-button
          type="primary"
          :icon="useRenderIcon('ri:folder-line')"
          :loading="loading"
          @click=""
        >
          Assign to group
        </el-button>
        <el-button
          type="primary"
          :icon="useRenderIcon('ri:stackshare-line')"
          :loading="loading"
          @click=""
        >
          Share profiles
        </el-button>
        <el-button
          type="primary"
          :icon="useRenderIcon('ri:checkbox-line')"
          :loading="loading"
          @click=""
        >
          Check proxy
        </el-button>
        <el-button
          type="primary"
          :icon="useRenderIcon('ri:apps-line')"
          :loading="loading"
          @click=""
        >
          Start with app
        </el-button>
        <el-button
          :icon="useRenderIcon('ri:loop-right-line')"
          :loading="loading"
          @click=""
        >
          Update proxy
        </el-button>
      </el-form-item>
      <el-form-item>
        <el-button
          :icon="useRenderIcon('ri:loop-right-line')"
          :loading="loading"
          @click=""
        >
          Update profiles
        </el-button>
        <el-button
          :icon="useRenderIcon('ri:upload-cloud-line')"
          :loading="loading"
          @click=""
        >
          Share on cloud
        </el-button>
        <el-button
          type="danger"
          :icon="useRenderIcon('ri:cloud-windy-line')"
          :loading="loading"
          @click=""
        >
          Stop share on cloud
        </el-button>
        <el-button
          :icon="useRenderIcon('ri:fingerprint-line')"
          :loading="loading"
          @click=""
        >
          New fingerprint
        </el-button>
      </el-form-item>
    </el-form>

    <el-form
      ref="formRef"
      :inline="true"
      :model="form"
      class="search-form bg-bg_color w-[99/100] pl-8 pt-[12px] overflow-auto"
    >
      <el-form-item label="Name" prop="name">
        <el-input
          v-model="form.name"
          placeholder="Please enter a role name"
          clearable
          class="!w-[180px]"
        />
      </el-form-item>
      <el-form-item label="Code" prop="code">
        <el-input
          v-model="form.code"
          placeholder="Please enter role ID"
          clearable
          class="!w-[180px]"
        />
      </el-form-item>
      <el-form-item label="Status" prop="status">
        <el-select
          v-model="form.status"
          placeholder="Please select a status"
          clearable
          class="!w-[180px]"
        >
          <el-option label="Enable" value="1" />
          <el-option label="Deactivate" value="0" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          :icon="useRenderIcon('ri:search-line')"
          :loading="loading"
          @click="onSearch"
        >
          Search
        </el-button>
        <el-button :icon="useRenderIcon(Refresh)" @click="resetForm(formRef)">
          Reset
        </el-button>
      </el-form-item>
    </el-form>

    <div
      ref="contentRef"
      :class="['flex', deviceDetection() ? 'flex-wrap' : '']"
    >
      <PureTableBar
        :class="[isShow && !deviceDetection() ? '!w-[60vw]' : 'w-full']"
        style="transition: width 220ms cubic-bezier(0.4, 0, 0.2, 1)"
        :columns="columns"
        @refresh="onSearch"
      >
        <!-- @refresh="onSearch" -->
        <template #buttons>
          <el-button
            type="primary"
            :icon="useRenderIcon(AddFill)"
            @click="openDialog()"
          >
            Add new role
          </el-button>
        </template>
        <template v-slot="{ size, dynamicColumns }">
          <pure-table
            ref="tableRef"
            row-key="id"
            align-whole="center"
            showOverflowTooltip
            table-layout="auto"
            :loading="loading"
            :size="size"
            adaptive
            :row-style="rowStyle"
            :adaptiveConfig="{ offsetBottom: 108 }"
            :data="dataList"
            :columns="dynamicColumns"
            :pagination="pagination"
            :paginationSmall="size === 'small' ? true : false"
            :header-cell-style="{
              background: 'var(--el-fill-color-light)',
              color: 'var(--el-text-color-primary)'
            }"
            @selection-change="handleSelectionChange"
            @page-size-change="handleSizeChange"
            @page-current-change="handleCurrentChange"
          >
            <template #operation="{ row }">
              <el-button
                class="reset-margin"
                link
                type="primary"
                :size="size"
                :icon="useRenderIcon(EditPen)"
                @click="openDialog('edit', row)"
              >
                Edit
              </el-button>
              <el-popconfirm
                :title="`Are you sure to delete the role whose name is${row.name}this data`"
                @confirm="handleDelete(row)"
              >
                <template #reference>
                  <el-button
                    class="reset-margin"
                    link
                    type="primary"
                    :size="size"
                    :icon="useRenderIcon(Delete)"
                  >
                    Delete
                  </el-button>
                </template>
              </el-popconfirm>
              <el-button
                class="reset-margin"
                link
                type="primary"
                :size="size"
                :icon="useRenderIcon(Menu)"
                @click="handleMenu(row)"
              >
                Permissions
              </el-button>
              <el-dropdown>
                <el-button
                  class="ml-3 mt-[2px]"
                  link
                  type="primary"
                  :size="size"
                  :icon="useRenderIcon(More)"
                />
              </el-dropdown>
            </template>
          </pure-table>
        </template>
      </PureTableBar>

      <div
        v-if="isShow"
        class="!min-w-[calc(100vw-60vw-268px)] mt-2 px-2 pb-2 bg-bg_color ml-2 overflow-auto"
      >
        <div class="flex justify-between w-full px-3 pt-5 pb-4">
          <div class="flex">
            <span :class="iconClass">
              <IconifyIconOffline
                v-tippy="{
                  content: 'Closure'
                }"
                class="dark:text-white"
                width="18px"
                height="18px"
                :icon="Close"
                @click="handleMenu"
              />
            </span>
            <!-- <span :class="[iconClass, 'ml-2']">
              <IconifyIconOffline
                v-tippy="{
                  content: 'Save menu permissions'
                }"
                class="dark:text-white"
                width="18px"
                height="18px"
                :icon="Check"
                @click="handleSave"
              />
            </span> -->
          </div>
          <h4 class="font-bold truncate">
            Detail: {{ `${curRow?.name ? `${curRow.name}` : ""}` }}
          </h4>
        </div>
        <!-- <el-input
          v-model="treeSearchValue"
          placeholder="Please enter menu to search"
          class="mb-1"
          clearable
          @input="onQueryChanged"
        /> -->
        <div class="flex flex-wrap">
          <!-- <el-checkbox v-model="isExpandAll" label="Expand/Collapse" />
          <el-checkbox v-model="isSelectAll" label="Select all/Deselect all" />
          <el-checkbox v-model="isLinkage" label="Father and son linkage" /> -->
        </div>
        <!-- <el-tree-v2
          ref="treeRef"
          show-checkbox
          :data="treeData"
          :props="treeProps"
          :height="treeHeight"
          :check-strictly="!isLinkage"
          :filter-method="filterMethod"
        >
          <template #default="{ node }">
            <span>{{ transformI18n(node.label) }}</span>
          </template>
        </el-tree-v2> -->
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
:deep(.el-dropdown-menu__item i) {
  margin: 0;
}

.main-content {
  margin: 24px 24px 0 !important;
}

.search-form {
  :deep(.el-form-item) {
    margin-bottom: 12px;
  }
}
</style>
