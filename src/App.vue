<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px" class="h-full">
        <div class="flex items-start mt-6 ml-12">
          <img alt="logo" class="logo" src="@/assets/logo.svg" width="48" height="48" />
        </div>
        <el-row class="tac">
          <el-col :span="20">
            <el-menu default-active="1" class="el-menu-vertical-demo">
              <el-menu-item index="1">
                <el-icon><icon-menu /></el-icon>
                <span>
                  <RouterLink to="/">Home</RouterLink>
                </span>
              </el-menu-item>
              <el-menu-item index="2">
                <el-icon>
                  <setting />
                </el-icon>
                <span>
                  <RouterLink to="/about">About</RouterLink>
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