<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { Icon } from '@iconify/vue';
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px" class="h-full">
        <div class="flex items-start mt-6 ml-12">
          <img alt="logo" class="logo" src="@/assets/logo.svg" width="48" height="48" />KFILE
        </div>
        <el-row class="tac">
          <el-col :span="20">
            <el-menu default-active="1" class="el-menu-vertical-demo">
              <el-menu-item index="1">
                <Icon icon="fluent:cloud-24-filled" />
                <span>
                  <RouterLink to="/">文件</RouterLink>
                </span>
              </el-menu-item>
              <el-menu-item index="2">
                <Icon icon="fluent:bin-recycle-full-24-filled" />
                <span>
                  <RouterLink to="/about">回收站</RouterLink>
                </span>
              </el-menu-item>
              <el-menu-item index="3">
                <Icon icon="material-symbols:share" />
                <span>
                  <RouterLink to="/about">我的分享</RouterLink>
                </span>
              </el-menu-item>
              <el-menu-item index="4">
                <Icon icon="mdi:about" />
                <span>
                  <RouterLink to="/about">关于</RouterLink>
                </span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-main>
        <RouterView />
      </el-main>
    </el-container>
  </div>
</template>